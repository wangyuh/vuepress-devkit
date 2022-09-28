---
title: "git常用命令"
sidebar: auto
sidebarDepth: 2
---
## 上传文件
- git add .
- git commit -m '备注'
- git push origin dev('dev'为分支名)
## 切换分支
- git checkout dev
## 查看分支
- 查看本地all分支
- git branch
- 查看远程all分支
- git branch --r
## 删除分支
- 删除本地分支
- 切换至其他分支才能删除
- git branch -d dev (dev为分支名)
- 删除远程分支
- git push origin :dev

## 创建空白分支
- clone GitHub上的Repository：   git clone  https://github.com/janie1996/项目
- 进入项目：cd 项目
- 创建新分支： git branch dev(dev为分支名)
- 切换到新分支： git checkout dev（并非空白，查看文件）
- 删除原来的文件：git rm -r --cached folderName  (删除文件夹)
- 新增文件： echo \"My GitHub Page\" > index.html  (直接把文件拷过来也行)
- git add .
- 提交操作：git commit -m 'delete'   (引号内为情况说明)
- 推到GitHub：git push origin dev

## 解决冲突
- 存储本地修改的内容
- git stash
- git stash list查看刚刚备份保存的内容
- stash@{0}就是刚刚备份存储的标记
- pull内容
- git pull
- 还原备份暂存的代码
- git stash pop stash@{0}
- 有冲突手动解决冲突文件，然后就可提交了