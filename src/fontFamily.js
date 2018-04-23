import getProp from './getProp'

const fontFamily = family => getProp("fontFamily", family);

fontFamily.heading = () => fontFamily("heading")
fontFamily.body = () => fontFamily("body")

export default fontFamily