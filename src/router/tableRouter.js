/*
 * @Author: jing.chen
 * @Date: 2020-09-08 15:17:30
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 16:49:11
 * @Description: 
 */

const express = require('express')
const router = express.Router()

router.post('/form', (req, res) => {
  console.log(req.body)
  let { userId, appId } = req.body
  console.log(userId, appId)
  if (userId && appId) {
    res.send({err: 0, result: {
        tableList: [{name: 'table'}]
      }
    })
  } else {
    return res.send({err: -1, msg: '参数错误'})
  }
})
module.exports = router