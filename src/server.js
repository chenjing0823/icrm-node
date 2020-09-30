/*
 * @Author: jing.chen
 * @Date: 2020-09-08 14:13:43
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-30 15:00:09
 * @Description: 
 */
const express = require('express')
const app = express()
const db = require('./db/connect') // 链接数据库
const port = 3000
// expresss实例化

var bodyParser = require('body-parser')
// 解析表单 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// 解析json application/json
app.use(bodyParser.json())

const { userRouter, tableRouter, mockRouter } = require('./router/index')

// TODO 中间件添加 未来进行token等判断
// app.use('/',(req, res, next) => {
//   let { userId } = req.body
//   if (userId) {
//     next()
//   } else {
//     res.send({err: -2, msg: 'userId验证失败'})
//   }
//   next() // 是否继续往下执行
// })

app.use('/user', userRouter)
app.use('/list', tableRouter)
app.use('/get', mockRouter)
app.listen(port, ()=> {
  console.log('server start listening on: http://localhost:%s', port)
})
