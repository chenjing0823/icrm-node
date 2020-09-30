/*
 * @Author: jing.chen
 * @Date: 2020-09-30 14:15:52
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-30 14:30:00
 * @Description: 菜单schema对象
 */
const mongoose = require('mongoose')
var Schema = mongoose.Schema
// 通过mongoose获得schema对象
var menuSchema = new Schema({
  alias: String,
  businessType: Number,
  icon: String,
  name: String,
  subMenuList: Array,
  url: String
})

var Menu = mongoose.model('menus', menuSchema) // 该数据对象和集合关联('集合名', schema对象)

module.exports = Menu