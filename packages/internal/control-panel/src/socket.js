const { SYSTEM_NAME } = require("./contants")

const io = require("socket.io-client")
const electron = window.require("electron")

const socket = io("/")

let pkgs = []

socket.on("open site", ({ port, pid }) => {
  console.log("Styleguide is running on port", port)
  setTimeout(() => {
    // const w = window.open()

    const { BrowserWindow } = electron.remote

    const win = new BrowserWindow({ width: 800, height: 800 })
    win.loadURL(`http://localhost:${port}`)

    win.on("close", () => {
      console.log("window closed")
      socket.emit("exec raw", { pkg: SYSTEM_NAME, script: `kill -- -${pid}` })
    })
    // const current = electron.remote.getCurrentWindow()
    //
    // current.loadURL(`http://localhost:${port}`)
  }, 2000) // delay so that serve can spin up
})

electron.ipcRenderer.on("serve styleguide", () => {
  openStyleguide()
})

electron.ipcRenderer.on("clean", () => {
  socket.emit("exec raw", {
    script: "lerna clean --yes",
    pkg: SYSTEM_NAME
  })
})

electron.ipcRenderer.on("bootstrap", () => {
  socket.emit("exec raw", {
    script: "lerna bootstrap",
    pkg: SYSTEM_NAME
  })
})

electron.ipcRenderer.on("reset project", () => {
  socket.emit("reset project")
})

const openStyleguide = () =>
  socket.emit("serve site", { pkg: "@staccx/styleguide" })

const getPackages = fn => {
  if (pkgs && pkgs.length) {
    fn({ packages: pkgs })
    return
  }
  socket.on("init", ({ packages }) => {
    pkgs = packages
    fn({ packages })
  })
}

module.exports = socket
module.exports.getPackages = getPackages