/*
 * @Author: jing.chen
 * @Date: 2020-09-29 15:01:24
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 15:06:09
 * @Description: 链接数据库
 */
// 链接数据库

const mongoose = require('mongoose')
// 安装好mongoDB后，启动数据库，建表ICRM_DATABASE
mongoose.connect('mongodb://localhost/ICRM_DATABASE',{useNewUrlParser: true,useUnifiedTopology: true})
// 链接数据库
var db = mongoose.connection // 数据库的链接对象
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('数据库链接成功')
  // we're connected!
})