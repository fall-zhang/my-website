> Create by **fall** on 16 Aug 2022<br/>
> Recently revised in 26 Jul 2023

## Gitlab

一个开源的 git 管理工具

> 使用该镜像时，确保如果是 win 系统，请不要使用目录映射，会产生未知错误

```powershell
docker run -d -p 5020:22 -p 5080:80 -p 5040:443 `
 --name my-gitlab `
 --hostname gitlab.example.com `
 --restart unless-stopped `
 --shm-size 256m `
 -v gitlab_config:/etc/gitlab `
 -v gitlab_logs:/var/log/gitlab `
 -v gitlab_data:/var/opt/gitlab `
 gitlab/gitlab-ce
 # gitlab-ce:16.11.10-ce.0 ce Community Edition
 # --hostname 匹配你访问 gitlab 的域名
```

进入到容器中，使用该命令获取 root 用户的密码（密码会在第一次配置重启 24 小时后自动删除）

```bash
docker exec -it my-gitlab grep 'Password:' /etc/gitlab/initial_root_password
# seRWjNOwSGZdqi9eheOQAqNXOqGzHQ5kVG1hnrc4PUI=
```

### compose

为方便使用，这是 `docker-compose.yml` 文件

使用 `docker compose up -d` 即可切出该应用

```yaml
# 该容器使用 4*** 端口
name: my-gitlab
version: '1.0'
services:
  gitlab:
    image: gitlab/gitlab-ce:16.11.10-ce.0 # 镜像名称以及版本
    restart: unless-stopped
    container_name: gitlab-service # 容器名称
    hostname: 'fallzhang.top'
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://fallzhang.top:4080'
        gitlab_rails['gitlab_shell_ssh_port'] = 4022
    ports:
      - "4080:4080"
      - "4443:443"
      - "4022:22"
    # 指定挂载目录
    volumes:
      - "./config:/etc/gitlab"
      - "./logs:/var/log/gitlab"
      - "./data:/var/opt/gitlab"
    shm_size: '256m'


```

> Create by **fall** on 07 Feb 2025<br/>
> Recently revised in 08 Feb 2025

## 部署私有 gitlab 指南

### 安装前提

- 非 docker for windows 的 docker 安装（有一些已知的兼容问题）
- 你必须拥有一个邮件传输代理，例如 `Postfix` 或者 `Sendmail`
- 不能在 k8s 上部署 `gitlab`，将会导致单点故障
- 对于你的 docker，你必须拥有一个有效的，外部可访问的主机名，不要使用 `localhost`。

### 启动 docker

```bash
# 创建文件夹
mkdir ~/gitlab-service
# 命名变量为当前路径
export GITLAB_HOME=~/gitlab-service
# 将下面的文件 docker-compose.yml 复制到该路径下面
docker compose up -d
```



```yaml
# 该容器使用 72** 端口

name: my-gitlab
version: '0.3'

services:
  gitlab:
    image: gitlab/gitlab-ce:16.11.10-ce.0 # 镜像名称以及版本
    restart: unless-stopped
    container_name: gitlab-service # 容器名称
    hostname: 'gitlab.example.com'
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        # Add any other gitlab.rb configuration here, each on its own line
        external_url 'https://gitlab.example.com'
    # 指定挂载目录
    volumes:
      - "$GITLAB_HOME/config:/etc/gitlab"
      - "$GITLAB_HOME/logs:/var/log/gitlab"
      - "$GITLAB_HOME/data:/var/opt/gitlab"
    ports:
      - "4022:22" # 本地端口号与容器内部端口号
      - "4080:80" # 本地端口号与容器内部端口号
      - "4443:443" # 本地端口号与容器内部端口号
    shm_size: '256m'
```

```bash
docker exec -it gitlab-service grep 'Password:' /etc/gitlab/initial_root_password
# 会收到 root 用户的密码，类似于下面的字符串
# Xrpm5QnZ3yb1ZOWM0WZB3G3ooEVOidQoi8vEMfso7yc=
```

### 可选配置

- 配置文件所在位置 `/etc/gitlab/gitlab.rb`

`sudo docker exec -it gitlab editor /etc/gitlab/gitlab.rb`

- `external_url` 配置你的 github 网络路径
- SMTP 配置可以接收 email
- 可以开启 HTTPS

之后可以重启容器 `docker restart gitlab`

## FAQ

### Docker daemon 没有运行怎么办

docker daemon，docker 的守护进程，可以 通过 dockerd -v 查看安装

windows 系统中，可以运行 docker desktop，然后 wsl 的 docker 可以找到 docker daemon 为 server

启动 docker daemon 时，要关闭 docker
