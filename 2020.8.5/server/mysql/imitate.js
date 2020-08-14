// 模拟数据库操作
let fs = require('fs');
let uuid = require('node-uuid');
export default class ImitateDatabase {
  constructor () {
    this.fileName = '../database/dataJson.json';
    this.fileFunc = operatingFile(this.fileName);
  }

  /**
   * @param {Object, Array} data 插入的数据
   * @description 插入数据
   * **/
  addData (data) {
    if (data === null) {
      return false;
    }
    else if (data.constructor === Object || data.constructor === Array) {
      let tempArr = this.getAllData();
      tempArr.push({
        ...data,
        id: uuid.v4().replace(/-/g, '')
      });
      this.fileFunc.writeFile(tempArr);
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @param {String} key 关键字
   * @param {String} val 值
   * @param {Boolean=} isMul 是否返回多个值
   * @description 查找是否存在
   * **/
  findData (key, val, isMul = false) {
    let tempData =  this.fileFunc.readFile();
    let tempArr = [];
    if (!tempData.length) return [];
    if (isMul) {
      for (let a of tempData) {
        if (a[key].indexOf(val) >= 0) {
          tempArr.push(a)
        }
      }
    }
    else {
      for (let a of tempData) {
        if (a[key] === val) {
          tempArr.push(a);
          break;
        }
      }
    }
    return tempArr;
  }

  // 获取所有数据
  getAllData () {
    return this.fileFunc.readFile();
  }

  /**
   * @param {String} key 键名
   * @param {String} oldVal 旧键值
   * @param {String} newVal 新键值
   * @description 修改数据函数
   * **/
  updateData (key, oldVal, newVal) {
    let tempData = this.findData(key, oldVal);
    if (!tempData.length) {
      return false
    }
    else {
      let tempArr = this.getAllData();
      for (let a of tempArr) {
        if (a[key] === oldVal) {
          a[key] = newVal
        }
      }
      this.fileFunc.writeFile(tempArr);
      return true
    }
  }

  /**
   * @param {String} key 关键字
   * @param {*} val 值
   * @description 删除数据
   * **/
  deleteData (key, val) {
    let tempData = this.findData(key, val);
    if (!tempData.length) {
      return false
    }
    else {
      let tempArr = this.getAllData().filter((value) => {
        return value[key] !== val
      });
      this.fileFunc.writeFile(tempArr);
      return true
    }
  }
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
  function writeFileFunc(data) {
    return fs.writeFileSync(fileName, JSON.stringify(data))
  }
  return {
    readFile: readFileFunc,
    writeFile: writeFileFunc
  }
}
