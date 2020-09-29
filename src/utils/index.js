/*
 * @Author: jing.chen
 * @Date: 2020-09-29 15:39:14
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 16:26:26
 * @Description: 
 */
const User = require('../db/model/userMoldel')
const utils = {
  isExist: function (us) {
    return new Promise((resolve, reject) => {
      User.find({us}).then((data) => {
        if (!data.length) {
        // 用户名不存在，可以注册
          resolve()
        } else {
          reject()
        }
      })
    })
  },
  search: function (us, ps) {
    return new Promise((resolve, reject) => {
      User.find({us, ps}).then((data) => {
        // 用户名不存在，可以注册
        resolve(data)
      })
    })
  }
}
module.exports = utils