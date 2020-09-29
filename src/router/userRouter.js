/*
 * @Author: jing.chen
 * @Date: 2020-09-08 14:29:53
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 17:00:43
 * @Description: 
 */

const express = require('express')
const router = express.Router()
const User = require('../db/model/userMoldel')
const utils = require('../utils/index')
/**
 * @api {post} /user/login 登录
 * @apiName 登录
 * @apiGroup User
 *
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 用户密码
 *
 */
router.post('/login', async (req, res) => {
  let { us, ps } = req.body
  if (us && ps) {
    let data = await utils.search(us, ps)
    res.send({ code: 1, success: true, result: data})
  } else {
    res.send({err: -4, msg: '用户名或密码不能为空'})
  }
})
/**
 * @api {post} /user/reg 用户注册
 * @apiName 用户注册
 * @apiGroup User
 *
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 用户密码
 * @apiParam {String} code 邮箱验证码
 */
router.post('/reg', async (req, res) => {
  let { us, ps, phone, sex } = req.body

  if (us && ps) {
    utils.isExist(us)
      .then(() => {
        const userId = (new Date()).getTime()
        User.insertMany({us, ps, phone, userId, sex})
        res.send({ code: 1, success: true, result: {msg: '注册成功'}})
      })
      .catch(() => {
        res.send({err: -3, msg: '用户名已存在'})
      })
  } else {
    res.send({err: -4, msg: '用户名或密码不能为空'})
  }
})
module.exports = router