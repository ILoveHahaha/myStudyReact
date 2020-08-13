// 模拟数据库操作
let fs = require('fs');
class ImitateDatabase {
  constructor () {
    this.fileName = '../database/dataJson.json';
  }

  addData () {}

  /**
   * @param {String} key 关键字
   * @param {String} val 值
   * **/
  findData (key, val) {
    console.log(operatingFile(this.fileName).readFile());
  }

  updateData () {}

  deleteData () {}

}

/**
 * @param {String} fileName 文件名
 * @description 文件读写操作
 * **/
function operatingFile (fileName) {
  function readFileFunc() {
    let fileData = fs.readFileSync(fileName).toString();
    fileData = JSON.parse(fileData);
    return fileData
  }
  function writeFileFunc() {
    return fs.writeFileSync(fileName)
  }
  return {
    readFile: readFileFunc,
    writeFile: writeFileFunc
  }
}

let temp = new ImitateDatabase();
temp.findData();
