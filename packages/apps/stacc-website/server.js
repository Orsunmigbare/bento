const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const path = require("path")
const fs = require("fs")
const Helper = require("sanity-query-helper")
const imageUrlBuilder = require("@sanity/image-url")
var cors = require("cors");
var helmet = require("helmet");
var compression = require("compression");

const filePath = path.resolve(__dirname, "./build", "index.html")

const metaFallback = {
  title: "Stacc",
  description:
    "Stacc creates financial technology that simplifies innovation and improves business performance. Don’t let technology slow you down.",
  image:
    "https://cdn.sanity.io/images/8j24leyc/production/ec6d45591df4f7a78906974042a85763da3784f0-312x312.png"
}

const metaMiddleware = (req, res, next) => {
  if (req.url.indexOf(".") !== -1) {
    next()
    return
  }

  const sanity = new Helper({
    sanityOptions: {
      dataset: "production",
      projectId: "8j24leyc",
      useCdn: true
    }
  })
  const builder = imageUrlBuilder(sanity.client)

  const sender = sanity
    .withFilter("path.current")
    .equalTo(`"${req.url}"`)
    .pick("meta")

  const replaceOG = meta => {
    fs.readFile(filePath, "utf8", function(err, data) {
      if (err) {
        return console.log(err)
      }
      const page = data
        .replace(/\$OG_TITLE/g, meta.title)
        .replace(/\$OG_DESCRIPTION/g, meta.description)
        .replace(/\$OG_IMAGE/g, meta.image)
      res.send(page)
    })
  }

  console.log("query", sender.query)
  sender
    .send()
    .then(result => result[0])
    .then(({ meta }) => {
      // read in the index.html file
      replaceOG({
        ...metaFallback,
        ...meta,
        image: builder.image(meta.image).url()
      })
    })
    .catch(() => {
      console.error("no meta found")
      replaceOG(metaFallback)
    })
}

app.use(helmet());
app.use(cors());
app.use(compression());

app.use(metaMiddleware)

app.use(express.static(path.resolve(__dirname, "./build")))

app.get("*", function(request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html")
  response.sendFile(filePath)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
