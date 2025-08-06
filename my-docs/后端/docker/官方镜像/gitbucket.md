> Create by **fall** on 29 Jul 2025<br/>
> Recently revised in 29 Jul 2025

## gitbucket

相比于 gitlab 动辄就占用内存 3G，gitbucket 几百 mb 的大小已经很是小巧迷你。

```bash
docker run --name git -itd -v $PWD:/var/gitbucket -p 8080:8080 -p 29418:29418 gitbucket/gitbucket
# 8080 端口是它的界面的地址，29418 端口是给 git 通过 SSH 去链接仓库的，建议开启。
```

