var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require("./webpack/config.dev.js")

config.entry.app.unshift("webpack-dev-server/client?http://localhost:1234/")
var compiler = webpack(config)
var server = new WebpackDevServer(compiler, {hot:true})
server.listen(1234, function(err) {
    if(!err) {
        console.log('All is well, listening on port:1234')
    } else {
        console.log('Wrong:', err)
    }
})