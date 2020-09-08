/*
 * @Author: jing.chen
 * @Date: 2020-09-08 14:13:43
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 15:21:25
 * @Description: 
 */
const express = require('express')
const app = express()
// expresss实例化

var bodyParser = require('body-parser')
// 解析表单 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// 解析json application/json
app.use(bodyParser.json())

const { userRouter, tableRouter } = require('./router/index')

app.use('/user', userRouter)
app.use('/list', tableRouter)
app.listen(3000, ()=> {
  console.log('server start')
})