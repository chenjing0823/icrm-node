/*
 * @Author: jing.chen
 * @Date: 2020-09-18 15:30:13
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-18 15:34:31
 * @Description: 
 */

const express = require('express')
const router = express.Router()
const mockRouter = require('./mockRouter')

router.post('/menuList', (req, res) => {
  console.log(req.body)
  let { userId } = req.body
  console.log(userId)
  if (userId) {
    res.send({err: 0, result: {
        menuList: mockRouter
      }
    })
  } else {
    return res.send({err: -1, msg: '参数错误'})
  }
})
module.exports = router