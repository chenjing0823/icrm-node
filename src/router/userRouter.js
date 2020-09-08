/*
 * @Author: jing.chen
 * @Date: 2020-09-08 14:29:53
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 14:37:07
 * @Description: 
 */

const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
  console.log(req.body)
  let { us, ps } = req.body
  console.log(us, ps)
  if (us && ps) {
    res.send({err: 0, msg: '登录成功'})
  } else {
    return res.send({err: -1, msg: '参数错误'})
  }
})
module.exports = router