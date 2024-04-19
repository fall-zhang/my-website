> Create by **fall** on 16 Sep 2023
> Recently revised in 16 Sep 2023

## PM2

pm2 是进程管理工具

- 内置负载均衡（使用 Node cluster 集群模块）
- 后台运行，0s 停机重载
- 具有 Ubuntu 和 CentOS 的启动脚本
- 关闭不稳定的进程
- 远程控制

### 命令

```bash
# 启动项目
pm2 start app.js
pm2 start app.js --watch  # 监听文件变化
pm2 start app.js --name fall # 为项目命名
# 查看项目列表
pm2 list
# 停止项目
pm2 stop [id]
# 重新启动
pm2 restart [id]
# 删除项目
pm2 delete [id]
```





## 参考文章

| 作者   | 文章名称                                                     |
| ------ | ------------------------------------------------------------ |
| 小满zs | [学习Pm2 第一章](https://blog.csdn.net/qq1195566313/article/details/123564779) |

