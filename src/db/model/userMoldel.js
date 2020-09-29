/*
 * @Author: jing.chen
 * @Date: 2020-09-29 15:07:19
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 16:05:55
 * @Description: 用户shecma对象
 */
const mongoose = require('mongoose')
var Schema = mongoose.Schema
// 通过mongoose获得schema对象
var userSchema = new Schema({
  us: { type: String, required: true },
  ps: { type: String, required: true },
  userId: Number,
  phone: Number,
  sex: { type: Number, default: 0 }
})

var User = mongoose.model('users', userSchema) // 该数据对象和集合关联('集合名', schema对象)

module.exports = User