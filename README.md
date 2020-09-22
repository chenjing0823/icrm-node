<!--
 * @Author: jing.chen
 * @Date: 2020-08-28 15:31:09
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-22 13:50:49
 * @Description: 
-->
# iCrmNode

## Compiles and hot-reloads for development
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