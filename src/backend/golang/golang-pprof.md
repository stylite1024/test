---
article: true
editLink: false
lastUpdated: true
contributors: false
isOriginal: false
sticky: false
title: Golang pprof性能优化
date: 2024-06-12
head:
  - - meta
    - name: keywords
      content: vscode go golang go环境 golang环境 goland makefile golang开发 base64Captcha captcha 验证码 golang验证码 cobra golang每日一库 golang docker docker-compose golang部署 pprof
category:
  - golang
tag:
  - pprof


---

:::tip 摘要
Golang pprof性能优化
:::
<!-- more -->



```sh
go-wrk -t=8 -n=1000 "http://localhost:8080"
go tool pprof http://localhost:8080/debug/pprof/profile

```

