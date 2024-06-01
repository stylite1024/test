---
article: true
editLink: false
lastUpdated: true
contributors: false
isOriginal: false
sticky: false
star: false
feed: true
comment: true
title: 一键测试Vultr/搬瓦工现有全部机房的Ping延迟和丢包率
description: 一键测试Vultr/搬瓦工现有全部机房的Ping延迟和丢包率
date: 2024-04-23
head:
  - - meta
    - name: keywords
      content: vscode go golang go环境 golang环境 goland makefile golang开发 vultr shell vps  搬瓦工 轻量级服务器 云服务器 阿里云 华为去 京东云
category:
  - 运维
tag:
  - shell
  - 运维
---
:::tip 摘要
一键测试Vultr/搬瓦工现有全部机房的Ping延迟和丢包率
:::
<!-- more -->

一键测试Vultr/搬瓦工现有全部机房的Ping延迟和丢包率


## vultr

### linux
vultr-dcs-ping-test-RC.sh
```shell
#!/bin/bash

# 一键测试Vultr现有全部机房的Ping延迟和丢包率

echo ======================================
echo  From Local to Vultr 32 DCs Ping Test
echo      Copyright 2023 www.vultrcn.com
echo ======================================

echo "Press any key to continue..."
read -n 1

declare -A ip_pool=(
["hnd-jp-ping.vultr.com"]="01 Tokyo, Japan"
["osk-jp-ping.vultr.com"]="02 Osaka, Japan"
["sel-kor-ping.vultr.com"]="03 Seoul, South Korea"
["sgp-ping.vultr.com"]="04 Singapore"
["blr-in-ping.vultr.com"]="05 Bangalore, India"
["del-in-ping.vultr.com"]="06 Delhi NCR, India"
["bom-in-ping.vultr.com"]="07 Mumbai, India"
["tlv-il-ping.vultr.com"]="08 Tel Aviv, Israel"
["lon-gb-ping.vultr.com"]="09 London, United Kingdom"
["man-uk-ping.vultr.com"]="10 Manchester, United Kingdom"
["fra-de-ping.vultr.com"]="11 Frankfurt, Germany"
["par-fr-ping.vultr.com"]="12 Paris, France"
["ams-nl-ping.vultr.com"]="13 Amsterdam, Netherlands"
["waw-pl-ping.vultr.com"]="14 Warsaw, Poland"
["sto-se-ping.vultr.com"]="15 Stockholm, Sweden"
["mad-es-ping.vultr.com"]="16 Madrid, Spain"
["ga-us-ping.vultr.com"]="17 Atlanta, United States"
["il-us-ping.vultr.com"]="18 Chicago, United States"
["tx-us-ping.vultr.com"]="19 Dallas, United States"
["hon-hi-us-ping.vultr.com"]="20 Honolulu, United States"
["lax-ca-us-ping.vultr.com"]="21 Los Angeles, United States"
["fl-us-ping.vultr.com"]="22 Miami, United States"
["nj-us-ping.vultr.com"]="23 New York (New Jersey), United States"
["wa-us-ping.vultr.com"]="24 Seattle, United States"
["sjo-ca-us-ping.vultr.com"]="25 Silicon Valley, United States"
["tor-ca-ping.vultr.com"]="26 Toronto, Canada"
["mex-mx-ping.vultr.com"]="27 Mexico City, Mexico"
["sao-br-ping.vultr.com"]="28 São Paulo, Brazil"
["scl-cl-ping.vultr.com"]="29 Santiago, Chile"
["jnb-za-ping.vultr.com"]="30 Johannesburg, South Africa"
["mel-au-ping.vultr.com"]="31 Melbourne, Australia"
["syd-au-ping.vultr.com"]="32 Sydney, Australia"
)

for key in ${!ip_pool[*]}
do
    echo ${ip_pool[$key]}
    ping $key  -n 4
    echo
done

echo "Press any key to exit..."
read -n 1
exit 1
```
运行
```shell
bash vultr-dcs-ping-test-RC.sh
```

### windows
vultr-dcs-ping-test-RC.bat
```bat
@echo off
echo ======================================
echo  From Local to Vultr 32 DCs Ping Test
echo      Copyright 2023 www.vultrcn.com
echo ======================================
pause
echo=

echo -----------------------------------------
echo 01 Tokyo, Japan
ping hnd-jp-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 02 Osaka, Japan
ping osk-jp-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 03 Seoul, South Korea
ping sel-kor-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 04 Singapore
ping sgp-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 05 Bangalore, India
ping blr-in-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 06 Delhi NCR, India
ping del-in-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 07 Mumbai, India
ping bom-in-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 08 Tel Aviv, Israel
ping tlv-il-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 09 London, United Kingdom
ping lon-gb-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 10 Manchester, United Kingdom
ping man-uk-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 11 Frankfurt, Germany
ping fra-de-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 12 Paris, France
ping par-fr-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 13 Amsterdam, Netherlands
ping ams-nl-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 14 Warsaw, Poland
ping waw-pl-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 15 Stockholm, Sweden
ping sto-se-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 16 Madrid, Spain
ping mad-es-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 17 Atlanta, United States
ping ga-us-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 18 Chicago, United States
ping il-us-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 19 Dallas, United States
ping tx-us-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 20 Honolulu, United States
ping hon-hi-us-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 21 Los Angeles, United States
ping lax-ca-us-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 22 Miami, United States
ping fl-us-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 23 New York (New Jersey), United States
ping nj-us-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 24 Seattle, United States
ping wa-us-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 25 Silicon Valley, United States
ping sjo-ca-us-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 26 Toronto, Canada
ping tor-ca-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 27 Mexico City, Mexico
ping mex-mx-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 28 São Paulo, Brazil
ping sao-br-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 29 Santiago, Chile
ping scl-cl-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 30 Johannesburg, South Africa
ping jnb-za-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 31 Melbourne, Australia
ping mel-au-ping.vultr.com -n 4
echo=

echo -----------------------------------------
echo 32 Sydney, Australia
ping syd-au-ping.vultr.com -n 4
echo=

echo =========================================
pause
```
双击vultr-dcs-ping-test-RC.bat运行


## 搬瓦工
```sh
#!/bin/bash
echo "Press any key to continue..."
read -n 1

declare -A ip_pool=(
["93.179.124.235"]="HKHK_8(香港CN2 GIA)"
["185.212.58.133"]="JPOS_1(日本软银)"
["65.49.237.6"]="JPTYO_8(日本CN2 GIA)"
["74.211.103.146"]="USCA_6 (DC6 CN2 GIA) 洛杉矶 CN2 GIA"
["89.208.246.192"]="USCA_9 (DC9 CN2 GIA) 洛杉矶 CN2 GIA"
["104.225.153.186"]="USCA_2 (DC2 QNET KVM) 洛杉矶 QNET"
["104.243.21.212"]="USCA_3 (DC3 CN2 KVM) 洛杉矶 CN2 (QN)"
["104.245.188.20"]="USCA_4 (DC4 MCOM) 洛杉矶 MCOM	"
["198.181.42.121"]="USCA_8 (DC8 ZNET KVM) 洛杉矶 ZNET"
["174.137.48.242"]="USCA_FMT 弗里蒙特"
["23.29.138.5"]="USNJ 新泽西"
["208.167.227.122"]="USNY_2 纽约"
["45.62.120.202"]="EUNL_3 荷兰"
["104.255.64.1"]="EUNL_9 荷兰"
)

for key in ${!ip_pool[*]}
do
    echo ${ip_pool[$key]}
    ping $key  -n 4
    echo
done

echo "Press any key to exit..."
read -n 1
exit 1
```

---
::: tip 更多文章请关注我的公众号,自动推送更新
![](/wx.png)
:::