/*
 * @Author: jing.chen
 * @Date: 2020-09-08 14:13:43
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 16:04:13
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

app.use('/user', userRouter)
app.use('/list', tableRouter)
app.use('/get', mockRouter)
app.listen(port, ()=> {
  console.log('server start listening on: http://localhost:%s', port)
})
