---
article: true
editLink: false
lastUpdated: true
contributors: false
isOriginal: true
sticky: false

title: Rockylinux/Almalinux9.x、Debian12.x配置静态IP
date: 2024-04-27
head:
  - - meta
    - name: keywords
      content: vscode go golang go环境 golang环境 goland makefile golang开发 jwt golang-jwt token linux centos rockylinux rockylinux9 服务器
category:
  - 运维
  - 服务器
tag:
  - linux
  - 服务器
  - 运维
  - rockylinux

---

:::tip 摘要
Rockylinux/Almalinux9.x、Debian12.x配置静态IP
:::
<!-- more -->

### rockylinux/almalinux 9.x

rockylinux\almalinux9.x使用nmcli管理网络

查看网卡

```sh
nmcli
```

配置网卡IP

ens160为网卡名称

```sh
# 修改网卡
# vi /etc/NetworkManager/system-connections/ens160.nmconnection 
[connection]
id=ens160
uuid=1b1d721f-aace-3e0c-8055-e910e15a8674
type=ethernet
autoconnect-priority=-999
interface-name=ens160
timestamp=1714173099

[ethernet]

[ipv4]
address1=192.168.8.101/24,192.168.8.2
dns=223.5.5.5;119.29.29.29;
method=manual

[ipv6]
addr-gen-mode=default
address1=fd15:4ba5:5a2b:1008:d506:a337:89e3:57a1/64,fe80::250:56ff:fec0:2222
method=manual

[proxy]

# 重载配置
nmcli connection load /etc/NetworkManager/system-connections/ens160.nmconnection 

# 激活网卡配置
nmcli connection up /etc/NetworkManager/system-connections/ens160.nmconnection

# 检查ipV4网关
ip route show default

# 检查ipV6网关
ip -6 route show default

# 测试ipV4地址是否可用
ping baidu.com

# 测试ipV6地址是否可用
ping6 ipv6.baidu.com
```

说明：这[ipv4]、[ipv6]部分是我们需要修改的



### debian12.x

```sh
# 设置静态ip
# auto ens33设置开机系统启动时启用该接口
# vi /etc/network/interfaces
auto ens32
# ipv4
iface ens32 inet static
address 192.168.8.101
netmask 255.255.255.0
gateway 192.168.8.2
# ipv6
iface ens32 inet6 static
address fd15:4ba5:5a2b:1008:d506:a337:89e3:57a1
netmask 64 
gateway fe80::250:56ff:fec0:2222

# 重启网络
# systemcatl restart networking

# 设置dns
# vi /etc/resolv.conf 
nameserver 192.168.8.2
nameserver 223.5.5.5
nameserver 119.119.119.119

# 检查ipV4网关
ip route show default

# 检查ipV6网关
ip -6 route show default

# 测试ipV4地址是否可用
ping baidu.com

# 测试ipV6地址是否可用
ping6 ipv6.baidu.com
```



