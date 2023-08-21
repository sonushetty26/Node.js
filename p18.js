// path accessing browser path

const path = require('path')
console.log('path sep ='  , path.sep) /*index path */

//join path =

const filePath = path.join(`content` , `sub` , `test.txt`)
console.log('filepath =' , filePath)

//base (file) path => where base will only acess base file
const base =  path.basename(filePath)
console.log('base name =' , base)

//absolute path => where absolute will access directory name along with file name
const absolute = path.resolve(__dirname, 'content' , 'images' ,'1.jpg');
console.log('absolute path =' , absolute)