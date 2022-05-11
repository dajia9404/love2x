const fs = require('fs')
const path = require('path')
// const images = require('images')
// const cheerio = require('cheerio')
// const sizeOf = require("image-size");
// const imageinfo = require('imageinfo')

window.readConfig = function () {
    const data = readFileSync('./config.json')
    return data
  }	

window.getPath = function () {
    return path.resolve("./")
}	

window.getDirName =function()
{
    return __dirname;
}

window.readDir = function(dir,func)
{
    return fs.readdir(dir,func);
}

window.stat = function(path)
{
    return fs.stat(path);
}


window.readdirSync = function(dir)
{
    return fs.readdirSync(dir);
}


window.statSync = function (dir)
{
    return fs.statSync(dir);
}

window.join = function(dir,item)
{
    return path.join(dir,item);
}

window.readFileSync = function(pngPath)
{
    return fs.readFileSync(pngPath)
}