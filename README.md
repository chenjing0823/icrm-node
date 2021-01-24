<!--
 * @Author: jing.chen
 * @Date: 2020-08-28 15:31:09
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-01-24 22:55:23
 * @Description: 
-->
# icrm-node
# before 
所有准备之前，需要先安装配置完成mongoDB。启动完mongoDB数据库后，本服务的启动才可正常连接数据。这才有数据从数据库 -> 后台服务接口 -> 前端页面，这样一个完整的流程。若是只想体验node服务端返回mock数据，直接在接口内res.send(mock数据)

若完全用我的代码，需要新建一个menus集合，放查询菜单接口需要的数据源。或者使用```./src/constant/menus.json```内的数据作为菜单
```
node server.js // 在src路径下 运行命令
```
## 接口
```
name: list/from, type: post, params: {userId: 1, appId: 100} 
name: user/login, type: post, params: {userId: 1, pwd: ****} 
name: get/menuList, type: post, params: {userId: 1} // 获取侧边菜单路由
```
rename push test