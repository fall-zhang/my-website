> Create by **fall** on 18 Nov 2020
> Recently revised in 14 Mar 2024

> **下载：** 从淘宝镜像上下载 git
>
> https://npm.taobao.org/mirrors/git-for-windows/

## git 工具

代码历史控制工具

### 介绍

**Git工作流程图**（最左侧为远程，中间和右侧为本地）

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png" alt="img"  />

一些术语

- Workspace：工作区（本地，代码保存后的内容）
- Index / Stage：暂存区（暂存）
- Repository：仓库区（或本地仓库）
- Remote：远程仓库（远程）

| 命令名称          | 作用                                       |
| ----------------- | ------------------------------------------ |
| clone（克隆）     | 从远程克隆仓库，将远程的代码下载到本地     |
| commit（提交）    | commit 将修改提交到本地仓库，              |
| push（推送）      | push 将本地仓库的内容提交到远程库          |
| pull（拉取）      | 将远程最新的代码拉取到本地，自动合并 merge |
| fetch（获取）     | 将远程最新的代码拉取到本地，不合并 merge   |
| checkout（检出）  | 创建分支，切换分支                         |
| reset（版本回退） | 将代码回退到选定的版本                     |
| tag（标签）       | tag 就是给版本打个标记，方便识别           |

### 流程

提交代码流程：

- 连接克隆远程仓库 `git clone https://github.com/fall-zhang/vite-vue3-TS-lint.git`
- 在项目的文件夹（一般为含有 `README.md` 的文件夹）中打开命令行工具
- `git add . ` 将代码添加到版本里面（添加到暂存区）
- `git commit -m [messages]` 修改并放置你想添加的 `messages` 
- 最后使用 `git push` 将本地库里面的代码提交到网络共享库里面

### 配置文件

`.gitignore` 是 git 的配置文件，可以用在用户主目录之下（全局配置），也可以用在项目目录下（项目配置），作用就是告诉Git 哪些文件不需要添加到版本管理中。

```swift
/mtk/ 过滤整个文件夹
*.zip 过滤所有.zip文件
/mtk/do.c 过滤某个具体文件
```

通过上面这些规则进行过滤之后，被过滤的文件不会通过push传递到服务器，本地库中还是存在的。

```swift
!src/   不过滤该文件夹
!*.zip   不过滤所有.zip文件
!/mtk/do.c 不过滤该文件
```

可以通过以上设置不过滤以上的文件

**配置文件的语法**

```swift
以斜杠/开头表示目录；
以星号*通配多个字符；
以问号?通配单个字符
以方括号[]包含单个字符的匹配列表；
以叹号!表示不忽略(跟踪)匹配到的文件或目录；
```

**配置文件示例**

```
a、规则：fd1/*
忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录都会被忽略；
b、规则：/fd1/*
说明：忽略根目录下的 /fd1/ 目录的全部内容；
c、规则：
/*
!.gitignore
!/fw/bin/
!/fw/sf/
说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录
```

**用 Git Bash 创建文件夹**

- 根目录下右键选择“Git Bash Here”进入bash命令窗口；
- 输入 `vim .gitignore` 或 `touch .gitignore` 命令，打开文件（没有文件会自动创建）；
- 按 i 键切换到编辑状态，输入规则，例如 node_modules/，然后按Esc键退出编辑，输入 `:wq` 保存退出。


> **生成密钥**
>
> 登录过程中可能需要用到秘钥，作为服务器端和本地唯一识别认证码
>
> 需要先在本地生成，然后打开 ssh 目录，将代码复制粘贴到服务器端。如果不清楚详情，查看这篇文章。
>
> 命令行中执行命令：
>
> `ssh-keygen -t rsa -C "xxxx@gmail.com"` 必须填写自己使用的邮箱
>
> 一般也可以使用 git 直接进行登录

## 操作

### 常用功能

- `git diff --shortstat "@{0 day ago}"` 看看自己一天写了多少行代码
- 只克隆最近 number 次分支 `git clone --depth=[number] [git_url]`
- 只克隆某一分支 `git clone --single-branch -b [name]`
- 查看远程仓库 `git remote -v`
- 显示有变更的文件 `git status`
- 退回到上一个版本：`git reset --hard head`
- 查看日志：`git log ` 或者 `git reflog`
- 查看工作区和暂存区版本区别 `git diff`
- 回退上一个版本 `git reset --hard HEAD^` 每多一个 `^` 多回退一个版本
- 回退到指定版本 `git reset --hard version` version 为版本号

### 创建代码仓库

- `git init` 在本地进行初始化（建立工作区）
- `git init [project-name]` 新建一个目录，作为代码仓库
- `git clone [url]` 

`.git` 文件夹存储当前项目的所有版本信息，这个文件夹通常会隐藏

### 暂存区控制

```bash
$ git add [file1] [file2] ...  # 添加指定文件到暂存区
$ git add [dir] # 添加指定目录到暂存区，包括子目录
$ git add . # 添加当前目录的所有文件到暂存区

$ git add -p
# 确认所有文件的变化，并且可以做最终修改
# 对于同一个文件的多处变化，可以分多次提交

$ git rm [file1] [file2] ... # 删除工作区文件，并且将这次删除放入暂存区
$ git rm --cached [file] # 停止追踪指定文件，但该文件会保留在工作区
$ git mv [file-original] [file-renamed] # 改名文件，并且将这个改名放入暂存区
```

### 本地仓库

```bash
$ git commit -m "message" # 提交暂存区内容提交到仓库区
$ git commit [file1] [file2] ... -m [message] # 提交暂存区的指定文件到仓库区
$ git commit -a # 提交工作区自上次 commit 之后的变化，直接到仓库区
$ git commit -v # 提交时显示所有 diff 信息

$ git commit --amend -m [message]
# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次 commit 的提交信息 message

$ git commit --amend [file1] [file2] ... # 重做上一次commit，并包括指定文件的新变化
```

### 分支操作

```bash
$ git branch # 列出所有本地分支
$ git branch -r # 列出所有远程分支
$ git branch -a # 列出所有本地分支和远程分支

$ git checkout master  # 切换到master分支下
$ git checkout -b [branch] # 新建一个分支，并切换到该分支
$ git branch [branch-name] # 新建一个分支，但依然停留在当前分支

$ git branch [branch] [commit] # 新建一个分支，指向指定commit
$ git branch --track [branch] [remote-branch] # 新建一个分支，与指定的远程分支建立追踪关系
$ git checkout [branch-name] # 切换到指定分支，并更新工作区
$ git checkout -  # 切换到上一个分支

$ git branch --set-upstream [branch] [remote-branch] # 建立追踪关系，在现有分支与指定的远程分支之间
$ git merge [branch] # 合并指定分支到当前分支
$ git cherry-pick [commit] # 选择一个commit，合并进当前分支
$ git branch -d [branch-name] # 删除分支

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

### 远程功能

```bash
$ git fetch [remote] # 下载远程仓库的所有变动
$ git pull [remote] [branch] # 取回远程仓库的变化，并与本地分支合并
# git pull 等价于 git fetch + git merge
$ git remote -v # 显示所有远程仓库
$ git remote show [remote] # 显示某个远程仓库的信息
$ git remote add [shortname] [url] # 增加一个新的远程仓库，并命名

$ git push origin master # 推到 master 上
$ git push [remote] [branch] # 上传本地指定分支到远程仓库
$ git push [remote] --force # 强行推送当前分支到远程仓库，即使有冲突
$ git push -u origin login # 将当前子分支推到一个新创建的 login 分之中

$ git push [remote] --all # 推送所有分支到远程仓库
$ git push origin --delete [branch-name]  # 删除远程分支
```

### 撤销操作

```bash
$ git checkout [file] # 恢复暂存区的指定文件到工作区
$ git checkout [commit] [file] # 恢复某个commit的指定文件到暂存区和工作区
$ git checkout . # 恢复暂存区的所有文件到工作区
$ git reset [file] # 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变

$ git reset --hard # 重置暂存区与工作区，与上一次commit保持一致
$ git reset [commit] # 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset --hard [commit] # 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --keep [commit] # 重置当前HEAD为指定commit，但保持暂存区和工作区不变

$ git revert [commit]
# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

### 标签的设定和查看

```bash
$ git tag # 列出所有tag
$ git tag [tag] # 新建一个tag在当前commit
$ git tag [tag] [commit] # 新建一个tag在指定commit
$ git tag -d [tag] # 删除本地tag

$ git push origin :refs/tags/[tagName] # 删除远程tag
$ git show [tag] # 查看tag信息
$ git push [remote] [tag] # 提交指定tag
$ git push [remote] --tags # 提交所有tag
$ git checkout -b [branch] [tag] # 新建一个分支，指向某个tag
```

### 查看日志信息

```bash
$ git status # 显示有变更的文件
$ git log # 显示当前分支的版本历史
$ git log --stat # 显示commit历史，以及每次commit发生变更的文件
$ git log -S [keyword] # 搜索提交历史，根据关键词

$ git log [tag] HEAD --pretty=format:%s # 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --grep feature # 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log --follow [file] # 显示某个文件的版本历史，包括文件改名
$ git whatchanged [file]

$ git log -p [file] # 显示指定文件相关的每一次diff
$ git log -5 --pretty --oneline # 显示过去5次提交
$ git shortlog -sn # 显示所有提交过的用户，按提交次数排序
$ git blame [file] # 显示指定文件是什么人在什么时间修改过

$ git diff # 显示暂存区和工作区的差异
$ git diff --cached [file] # 显示暂存区和上一个commit的差异
$ git diff HEAD # 显示工作区与当前分支最新commit之间的差异
$ git diff [first-branch]...[second-branch] # 显示两次提交之间的差异

$ git diff --shortstat "@{0 day ago}" # 显示今天你写了多少行代码
$ git show [commit] # 显示某次提交的元数据和内容变化
$ git show --name-only [commit] # 显示某次提交发生变化的文件
$ git show [commit]:[filename] # 显示某次提交时，某个文件的内容

$ git reflog # 显示当前分支的最近几次提交

# 查看日期范围内添加量和删除量
git log --since=2022-01-01 --until=2022-12-31 --pretty=tformat: --numstat | awk '{ add += $1; subs += $2} END { printf "added lines: %s, removed lines: %s\n", add, subs }'
# 查看代码总行数
git log --pretty=tformat: --numstat | awk '{sum += $1 - $2 } END { printf "total lines: %s\n", sum }'
```

### 文件配置

```bash
# 配置全局的用户 email 和用户名
$ git config --global user.email "example@xxx.com"
$ git config --global user.name "example"
```

