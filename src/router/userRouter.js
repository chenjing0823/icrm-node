/*
 * @Author: jing.chen
 * @Date: 2020-09-08 14:29:53
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 16:48:52
 * @Description: 
 */

const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
  console.log(req.body)
  let { userId, pwd } = req.body
  console.log(userId, pwd)
  if (userId && pwd) {
    res.send({err: 0, msg: '登录成功'})
  } else {
    return res.send({err: -1, msg: '参数错误'})
  }
})
module.exports = router