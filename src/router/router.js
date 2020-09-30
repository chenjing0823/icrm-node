/*
 * @Author: jing.chen
 * @Date: 2020-09-18 15:30:13
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-30 14:41:22
 * @Description: 
 */

const express = require('express')
const router = express.Router()
const Menu = require('../db/model/MenuMoldel')

/**
 * @api {post} /get/menuList 获取菜单路由
 * @apiName 路由
 * @apiGroup get
 *
 * @apiParam {String} userId
 *
 */
router.post('/menuList', async (req, res) => {
  let { userId } = req.body
  Menu.find({}).then((data) => {
    res.send({ code: 1, result: { menuList: data }})
  })
})

module.exports = router