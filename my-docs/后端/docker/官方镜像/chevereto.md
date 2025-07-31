> Create by **fall** on 29 Jul 2025<br/>
> Recently revised in 29 Jul 2025

## chevereto

是目前最好的图床之一了。功能也非常强大。

使用 docker 安装的话PHP的环境我们就可以省去安装步骤了，需要安装一个 MySQL 的环境，然后通过 run 命令设置 MYSQL 的环境变量：

```bash
$ docker run -it -d --name chevereto --restart=always -p 8080:80 \
    -v $PWD:/var/www/html/images \
    -e "CHEVERETO_DB_HOST=127.0.0.1" \
    -e "CHEVERETO_DB_PORT=3306" \
    -e "CHEVERETO_DB_USERNAME=admin" \
    -e "CHEVERETO_DB_PASSWORD=admin" \
    -e "CHEVERETO_DB_NAME=chevereto" \
    -e "CHEVERETO_DB_PREFIX=chv_"  nmtan/chevereto

```

Chevereto 运行起来后我们初始化设置管理员账号密码，然后在设置中修改界面为中文