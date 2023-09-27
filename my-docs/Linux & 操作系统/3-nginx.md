> Create by **fall** on 12 Apr 2023
> Recently revised in 14 Apr 2023

## Nginx

开源、高性能、可靠的 web 反向代理服务器。

高性能：其占用内存少、并发能力强、能支持高达 5w 个并发连接数。

支持协议：Nginx 仅支持 http、https 和 Email 协议

### 应用场景

**Web 服务器**

静态资源代理，高性能 WEB 服务器软件，[与 Apache 相比](###对比 Apache)，它支持更多的并发连接且占用服务器资源少

**反向代理或负载均衡**

负载均衡（将同一个请求转到不同的服务器上），作为 HTTP SERVER 或 DB 等服务器的代理服务器，代理功能相对简单，不及（Haporxy）邮件代理服务软件。

**缓存服务器**

作为缓存服务器，类似于专业的缓存软件

> Nginx 和 Node.js 的很多理念类似， HTTP 服务器、事件驱动、异步非阻塞等，且 Nginx 的大部分功能使用 Node.js 也可以实现，Nginx 擅长于底层服务器端资源的处理， Node.js 更擅长上层具体业务逻辑的处理，两者可以完美组合。

### 安装

```bash
# 安装 nginx
yum install nginx -y
# 命令查看 Nginx 的安装信息：
rpm -ql nginx 
```

目录结构文件夹有两个：

```shell
# Nginx配置文件
/etc/nginx/nginx.conf # nginx 主配置文件
/etc/nginx/nginx.conf.default

# 可执行程序文件
/usr/bin/nginx-upgrade
/usr/sbin/nginx

# nginx库文件
/usr/lib/systemd/system/nginx.service # 用于配置系统守护进程
/usr/lib64/nginx/modules # Nginx模块目录

# 帮助文档
/usr/share/doc/nginx-1.16.1
/usr/share/doc/nginx-1.16.1/CHANGES
/usr/share/doc/nginx-1.16.1/README
/usr/share/doc/nginx-1.16.1/README.dynamic
/usr/share/doc/nginx-1.16.1/UPGRADE-NOTES-1.6-to-1.10

# 静态资源目录
/usr/share/nginx/html/404.html
/usr/share/nginx/html/50x.html
/usr/share/nginx/html/index.html

# 存放Nginx日志文件
/var/log/nginx
```

- `/etc/nginx/conf.d/` 是子配置项存放处， `/etc/nginx/nginx.conf` 主配置文件会默认把这个文件夹中所有子配置项都引入；
- `/usr/share/nginx/html/` 静态文件都放在这个文件夹，也可以根据你自己的习惯放在其他地方；

### 配置文件

对 Nginx 的优化，主要通过修改 Nginx 配置文件来进行调优。

```nginx
# main 段配置信息
user  nginx;                        # 指定运行用户，子进程的组，默认即是 nginx（可以不进行设置）
worker_processes  auto;             # Nginx 进程数，auto 表示和当前 CPU 物理核心数一样，可用数字表示
error_log  /var/log/nginx/error.log warn;   # Nginx 的错误日志存放目录
error_log  /var/log/nginx/error.log warn;   # Nginx 的访问日志存放目录
pid        /var/run/nginx.pid;      # Nginx 服务启动时的 pid 存放位置
worker_rlimit_nofile 20480;         # 可以理解成每个 worker 子进程的最大连接数量
worker_rlimit_core 20M;             # 记录子进程异常终止后的 core 文件，用于记录分析问题。
worker_priority -10;                # 用于调整优先级，linux 默认优先级为 120，120-10=110，110 是最终优先级
worker_shutdown_timeout 5s;         # 子进程退出的超时时间。
timer_resolution 100ms;             # Linux 系统中，获取计时器时需要向操作系统内核发送请求，产生开销，因此这个间隔越大开销就越小。
daemon off;                         # 默认是 on，后台运行模式（生产），off 表示前台，用于调试

# events 段配置信息
events {
  use epoll;     # 使用 epoll 的 I/O 模型（如果你不知道该使用哪种方法，不用填写，nginx 会自动选择）
  worker_connections 1024;   # 每个子进程允许最大并发数
  accept_mutex on;           # 是否打开负载均衡互斥锁
}
# http 段配置信息
# 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置
http {
	# 设置日志模式
  # log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
  #                   '$status $body_bytes_sent "$http_referer" '
  #                   '"$http_user_agent" "$http_x_forwarded_for"';
  default_type mime-type;
  gzip on;    # 采用 gzip 压缩的形式发送数据
  # gzip_types   # 压缩的文件类型
  # text/plain text/css 
  # application/json 
  # application/x-javascript 
  # text/xml application/xml 
  # application/xml+rss 
  # text/javascript
  access_log  /var/log/nginx/access.log  main;   # Nginx 访问日志存放位置
  server_tokens off;        # 关闭错误页面中的版本号
  sendfile            on;   # 开启高效传输模式
  tcp_nopush          on;   # 减少网络报文段的数量，统一发送头文件
  tcp_nodelay         on;   # 不缓存数据
  client_header_timeout 10; # 请求头超时时间
  client_body_timeout 10;   # 请求体超时时间
  keepalive_timeout   30;   # 保持连接的时间，也叫超时时间，单位秒
  reset_timeout_connection on; # 清空不响应的客户端连接，释放所占空间
  send_timeout 10;          # 客户端相应超时时间
  limit_conn 100; # 为给定的 key 设置最大连接数。100 表示允许每一个 IP 地址最多同时打开有 100 个连接。
  limit_conn_zone 5M; # 用于保存各种 key（比如当前连接数）的共享内存的参数。至少配置能存储 32byte 状态或者 64byte 状态。
  types_hash_max_size 2048;
  include             /etc/nginx/mime.types;      # 文件扩展名与类型映射表（加载子配置项
  default_type        application/octet-stream;   # 默认文件类型
  # include 						/etc/nginx/conf.d/*.conf;   # 
    # server 段配置信息，可以配置多个 server
  server {
    listen       80;       # 配置监听的端口
    server_name  localhost;    # 配置的域名
    # nginx 每个 location 都是一个匹配目录，nginx 的策略是：访问请求来时，会对访问地址进行解析，从上到下逐个匹配，匹配上就执行对应 location 大括号中的策略，并根据策略对请求作出相应。
    # location段配置信息
    location / {
      root   /usr/share/nginx/html;  # 网站根目录
      index  index.html index.htm;   # 默认首页文件
      deny 172.168.22.11;            # 禁止访问的ip地址，可以为all
      allow 172.168.33.44;           # 允许访问的ip地址，可以为all
  	}
  	location /api/ { # 为路径为 api 的请求设置一个其他的 IP 端口进行调用
  		proxy_pass  http://172.168.22.10:1212/api/;  # 修改用户 URL，将 location 后的 URL 从用户 URL 中删除
  		proxy_pass  http://172.168.22.10:3424;  # 不带 / 意味着不会修改用户 URL，直接透传给上游服务器
  	}
  error_page 500 502 503 504 /50x.html;  # 默认 50x 对应的访问页面
  error_page 400 404 error.html;   # 同上
  }
}
```

### 常用内置变量

这些内置变量可以在配置的上下文中进行使用

| 内置变量                 | 变量功能                                              |
| ------------------------ | ----------------------------------------------------- |
| remote_addr、server_addr | 客户端、服务端 IP 地址                                |
| remote_port、server_port | 客户端、服务端端口                                    |
| server_protocol          | 服务端协议，协议版本                                  |
| scheme                   | 协议名， http 或 https                                |
| https                    | 否开启了 https ，是则返回 on ，否则返回空             |
| connection               | TCP 连接的序号，递增                                  |
| connection_request       | TCP 连接当前的请求数量                                |
| request_length           | 全部请求的长度，包含请求行、请求头、请求体            |
| request_method           | 请求方法                                              |
| request_time             | 处理请求已消耗的时间                                  |
| request_uri              | 请求的 URL，包含参数                                  |
| uri                      | 请求的 URL，不包含参数                                |
| args、query_string       | 全部参数字符串                                        |
| arg_[name]               | 获取特定参数值                                        |
| is_args                  | URL 中是否有查询字符串（Query String），有的话返回 ？ |
| host                     | 请求信息中的 Host                                     |
| http_cookie              | 获取用户 cookie                                       |
| http_user_agent          | 用户浏览器（浏览器代理）                              |
| document_root            | 由 URI 和 root/alias 规则生成的文件夹路径             |

> 其他参数：
>
> request_filename  访问文件的完整路径
> binary_remote_addr  二进制格式的客户端 IP 地址
> http_referer  从哪个链接跳转的请求
> http_via  每经过一层代理服务器，都会添加相应的信息
> limit_rate  返回响应时的速度上限值

### 相关命令

**Nginx 命令**

```bash
nginx -s reload  # 向主进程发送信号，重新加载配置文件，热重启
# 一般在更新配置文件后需要重启
nginx -s reopen  # 重启 
Nginxnginx -s stop    # 快速关闭
nginx -s quit    # 等待工作进程处理完成后关闭
nginx -T         # 查看当前 Nginx 最终的配置
nginx -t         # 检查配置是否有问题
```

```bash
# 开机配置
systemctl enable nginx # 开机自动启动
systemctl disable nginx # 关闭开机自动启动
# 启动 Nginx
systemctl start nginx # 启动Nginx成功后，可以直接访问主机IP，此时会展示Nginx默认页面
# 停止 Nginx
systemctl stop nginx
# 重启 Nginx
systemctl restart nginx
# 重新加载 Nginx
systemctl reload nginx
# 查看 Nginx 运行状态
systemctl status nginx
# 查看 Nginx 进程
ps -ef | grep nginx
```

### 原理

![img](http://static.oschina.net/uploads/img/201406/02074942_yaSb.png)

nginx 的模块根据其功能基本上可以分为以下几种类型：

- **event module**：搭建了独立于操作系统的事件处理机制的框架，及提供了各具体事件的处理。包括 ngx_events_module，  ngx_event_core_module 和 ngx_epoll_module 等。nginx 具体使用何种事件处理模块，这依赖于具体的操作系统和编译选项。
- **phase handler**：此类型的模块也被直接称为handler模块。主要负责处理客户端请求并产生待响应内容，比如 ngx_http_static_module 模块，负责客户端的静态页面请求处理并将对应的磁盘文件准备为响应内容输出。
- **output filter**：也称为filter模块，主要是负责对输出的内容进行处理，可以对输出进行修改。例如，可以实现对输出的所有 html 页面增加预定义的 footbar 一类的工作，或者对输出的图片的 URL 进行替换之类的工作。
- **upstream**：upstream模块实现反向代理的功能，将真正的请求转发到后端服务器上，并从后端服务器上读取响应，发回客户端。 upstream 模块是一种特殊的 handler，只不过响应内容不是真正由自己产生的，而是从后端服务器上读取的。
- **load-balancer**：负载均衡模块，实现特定的算法，在众多的后端服务器中，选择一个服务器出来作为某个请求的转发服务器。

### 反向代理

> 如果遇到后盾集群的情况，再来查找反向代理相关资料，对笔记内容进行补充

正向代理：用户进行请求的时候，将请求内容发送给代理（Proxy），然后代理（Proxy）负责进行请求。客户端进行服务的，客户端可以根据正向代理访问到它本身无法访问到的服务器资源。

我们**知道请求的是代理**，但是服务端不知道接收到的内容来自代理还是真实客户端。

反向代理（Reverse Porxy）指通过一个服务器接受客户端（Client）上面的请求，然后转发到内部网络的服务器（多个），并且将服务器上得到的结果返回给客户端（Client）。

我们并不知道自己访问的是代理服务器，而服务器知道反向代理在为他服务。因此反向代理用于以下目的

- 隐藏真实服务器；
- 负载均衡便于横向扩充后端动态服务；
- 动静分离，提升系统健壮性，更容易维护；

负载均衡策略

- 轮询策略：将请求依次发送给不同的服务器
- 最小连接数策略：将请求优先发送给压力较小的服务器，避免向压力大的服务器多次请求
- 最快响应时间策略：优先分配给响应时间最短的服务器。
- 客户端 ip 绑定策略：同一个 ip 的请求永远只分配一台服务器，有效解决了动态网页存在的 session 共享问题。

**负载均衡示例**

```nginx
http {
  upstream product_server{
    hash $request_uri; # 该内容表明，只要访问的 URI 保持不变，就会一直分发给同一台服务器。
    # 提供多个服务器的名称可以实现负载均衡（将同一个来源的请求分发到不同的服务器），weight 越高，分配的可能性越高
    server 192.168.1.11:8880   weight=5;
    server 192.168.1.12:9990   weight=1;
    server 192.168.1.13:8989   weight=6;
  }
  upstream test_server{
    127.0.0.1:8083;
  }
  server {
    # 默认指向 product 的 server
    # 会对访问地址进行解析，从上到下逐个匹配，匹配上就执行对应 location 大括号中的策略，并根据策略对请求作出相应。
    location / {
      proxy_pass http://product_server;
    }
    location /product/{
      proxy_pass http://127.0.0.1:8081;;
    }
    location /test/ {
      proxy_pass http://test_server;
    }
  }
}
```

在 upstream 内可使用的指令：

- server 定义上游服务器地址；
- zone 定义共享内存，用于跨 worker 子进程；
- keepalive 对上游服务启用长连接；
- keepalive_requests 一个长连接最多请求 HTTP 的个数；
- keepalive_timeout 空闲情形下，一个长连接的超时时长；
- hash 哈希负载均衡算法；
- ip_hash 依据 IP 进行哈希计算的负载均衡算法；
- least_conn 最少连接数负载均衡算法
- least_time 最短响应时间负载均衡算法；
- random 随机负载均衡算法；

```nginx
upstream server_example {
	server address [parameters]  
}
```

parameters 可选值：

- weight=number 权重值，默认为1；
- max_conns=number 上游服务器的最大并发连接数；
- fail_timeout=time 服务器不可用的判定时间；
- max_fails=numer 服务器不可用的检查次数；
- backup 备份服务器，仅当其他服务器都不可用时才会启用；
- down 标记服务器长期不可用，离线维护；

#### 动静分离

把不变的资源和经常变的资源区分开来，据静态资源的特点将其做缓存操作，这就是网站静态化处理的核心思路。

```nginx
server {  
  listen 80;  
  server_name mingongge.com;  
  location /static {      
    root /wwww/web/web_static_site; 
  }
}
```

### 对比 Apache

Apache 为每一个请求，新建一个服务线程，过多的进程会耗尽内存从而使得机器使用磁盘上的交换内存，这严重的降低了性能。而且，当达到进程的上限之后，Apache 会拒绝新的连接。

如果一个线程停止了，用户会一直处于等待页面出现的状态，直到进程将该线程回收，以便可以发回页面。

Nginx 并不会为每一个的 web 请求创建新的进程，管理员可以配置 Nginx 主进程的工作进程（worker）的数量（一个常见的做法是为每一个CPU 配置一个工作进程）。每一个工作进程可以处理数千个并发的请求。它通过一个线程来异步的完成了这些工作，而没有使用多线程的编程模型。

**IO 多路复用**和**多线程**的适用场景

IO 多路复用：一个线程，跟踪多个 socket 状态，哪个就绪，就读写哪个；

- 单个请求处理速度没有优势，适合 IO 密集型场景，事件驱动
- 大并发量，只使用一个线程，处理大量并发请求，降低上下文环境切换损耗，不需要考虑并发问题，可以处理更多请求
- 消耗更少的系统资源（不需要线程调度开销）
- 适用于**长连接**的情况

多线程：为每一个请求，新建一个服务线程

阻塞 IO + 多线程：实现简单，可以不依赖系统调用，适合 **CPU 密集型** 场景    

- 每个线程，都需要时间和空间；
- 线程数量增长时，线程调度开销指数增长
- 多线程模式**长连接**容易造成线程过多，造成频繁调度

## 默认配置

可以到 [官方配置网站]() 进行配置，然后将配置内容粘贴到配置文件中

nginxconfig

```nginx
/etc/nginx/sites-available/mingongge.com.conf
#文件名都给你按规则配置好了
server {
  listen 443 ssl http2;
  server_name mingongge.com;
  # SSL
  ssl_certificate /etc/letsencrypt/live/mingongge.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/mingongge.com/privkey.pem;
  ssl_trusted_certificate /etc/letsencrypt/live/mingongge.com/chain.pem;
  # security
  include nginxconfig.io/security.conf;
  # additional config
  include nginxconfig.io/general.conf;
}
# subdomains redirect
server {
  listen 443 ssl http2;
  server_name *.mingongge.com;
  # SSL
  ssl_certificate /etc/letsencrypt/live/mingongge.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/mingongge.com/privkey.pem;
  ssl_trusted_certificate /etc/letsencrypt/live/mingongge.com/chain.pem;

  return 301 https://mingongge.com$request_uri;
}
# HTTP redirect
server {
  listen 80;
  server_name .mingongge.com;
  include nginxconfig.io/letsencrypt.conf;
  location / {
    return 301 https://mingongge.com$request_uri;
  }
}
```

## 参考文章

| 作者                      | 文章名称                                                     |
| ------------------------- | ------------------------------------------------------------ |
| 民工哥                    | [2W 字总结 ！体系化带你全面认识 Nginx](https://segmentfault.com/a/1190000039873208) |
| ningg                     | [Nginx 系列：Nginx 原理](http://ningg.top/nginx-series-principle/) |
| yuezk 、几点人 、溪边九节 | [Nginx vs Apache（译）](https://www.oschina.net/translate/nginx-vs-apache) |

