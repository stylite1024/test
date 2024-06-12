---
article: true
editLink: false
lastUpdated: true
contributors: false
isOriginal: true
sticky: false

title: Golang库-使用golang-jwt生成和解析token
date: 2024-04-20
head:
  - - meta
    - name: keywords
      content: vscode go golang go环境 golang环境 goland makefile golang开发 jwt golang-jwt token
category:
  - golang
tag:
  - golang
---
:::tip 摘要
JSON Web Token (JWT)是一种紧凑且URL安全的方式，用于在两个方之间传输声明。JWT中的声明被编码为一个JSON对象，并使用JSON Web Signature (JWS)进行数字签名。
:::
<!-- more -->

## Golang库-使用golang-jwt生成和解析token

## 什么是JWT

JSON Web Token (JWT)是一种紧凑且URL安全的方式，用于在两个方之间传输声明。JWT中的声明被编码为一个JSON对象，并使用JSON Web Signature (JWS)进行数字签名。

JWT通常的格式为：xxxxx.yyyyy.zzzzz

- 头部：头部（xxxxx）通常由两部分组成：令牌类型JWT和签名算法。
- 负载：负载（yyyyy）包含了声明。声明是关于主题（用户）的陈述。
- 签名：要创建签名（zzzzz）部分，您需要使用编码后的头部、编码后的负载、一个密钥以及头部中指定的算法进行签名。

## 关于golang-jwt

golang-jwt是一个生成和解析JSON Web令牌的库。官方地址：https://github.com/golang-jwt/jwt

官方例子

生成token：https://pkg.go.dev/github.com/golang-jwt/jwt/v5#NewWithClaims

解析token：https://pkg.go.dev/github.com/golang-jwt/jwt/v5#ParseWithClaims

## 如何使用golang-jwt生成和解析token

环境：go1.22.0

安装golang-jwt

```sh
go get -u github.com/golang-jwt/jwt/v5
```

使用

main.go

```go
package main

import (
	"errors"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
)
// 加密字符串abc12345
var mySecret = []byte("abc12345")

// MyCustomClaims 自定义声明结构体并内嵌jwt.RegisteredClaims
// jwt包自带的jwt.RegisteredClaims只包含了官方字段
// 我们这里需要额外记录一个username字段，所以要自定义结构体
// 如果想要保存更多信息，都可以添加到这个结构体中
type MyCustomClaims struct {
	UserID   int64  `json:"user_id"`
	Username string `json:"username"`
	jwt.RegisteredClaims
}

// GenToken 生成JWT
func GenToken(userID int64, username string) (string, error) {
	// 创建一个我们自己的声明的数据
	// Create claims with multiple fields populated
	claims := MyCustomClaims{
		userID,
		username,
		jwt.RegisteredClaims{
			// A usual scenario is to set the expiration time relative to the current time
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			NotBefore: jwt.NewNumericDate(time.Now()),
			Issuer:    "stylite1024",
			Subject:   "go-app",
		},
	}
	// 使用指定的签名方法创建签名对象
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// 使用指定的secret签名并获得完整的编码后的字符串token
	return token.SignedString(mySecret)
}

// ParseToken 解析JWT
func ParseToken(tokenstring string) (*MyCustomClaims, error) {
	// 解析token
	var mc = new(MyCustomClaims)
	token, err := jwt.ParseWithClaims(tokenstring, mc, func(token *jwt.Token) (i interface{}, err error) {
		return mySecret, nil
	})
	if err != nil {
		return nil, err
	}
	if token.Valid { // 校验token
		return mc, nil
	}
	return nil, errors.New("invalid token")
}

func main() {
	// 生成token
	token,err := GenToken(123,"abc")
	if err != nil {
		fmt.Printf("GenToken err: %v\n", err)
		return
	}
	fmt.Printf("token:   %v\n", token)

	// 解析token
	claims, err := ParseToken(token)
	if err != nil {
		fmt.Printf("ParseToken err: %v\n", err)
		return
	}
	fmt.Printf("Issuer:   %v\n", claims.RegisteredClaims.Issuer)
	fmt.Printf("username:   %v\n", claims.Username)
}
```

运行

```sh
# go run main.go
token:   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInVzZXJuYW1lIjoiYWJjIiwiaXNzIjoic3R5bGl0ZTEwMjQiLCJzdWIiOiJnby1hcHAiLCJleHAiOjE3MTM2NTM5OTYsIm5iZiI6MTcxMzU2NzU5NiwiaWF0IjoxNzEzNTY3NTk2fQ.yIUwR-Mg3iSC2p-uBnXCwDyQw8-YsgqCn2Nc2Q4v5AQ
Issuer:   stylite1024
username:   abc
```

## access token 和 refresh token示例
```go
package main

import (
	"errors"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

const (
	MyIssuer  = "stylite1024"
	MySubject = "go-app"
)

// MyCustomClaims 自定义声明结构体并内嵌jwt.RegisteredClaims
// jwt包自带的jwt.RegisteredClaims只包含了官方字段
// 我们这里需要额外记录一个username字段，所以要自定义结构体
// 如果想要保存更多信息，都可以添加到这个结构体中
type MyCustomClaims struct {
	UserID   int64  `json:"user_id"`
	UserName string `json:"username"`
	jwt.RegisteredClaims
}

// GenToken 生成JWT
func GenToken(userId int64, username string, secret []byte, ttl int64) (token string, err error) {
	// 创建一个我们自己的声明的数据
	// Create claims with multiple fields populated
	claims := MyCustomClaims{
		userId,
		username,
		jwt.RegisteredClaims{
			// A usual scenario is to set the expiration time relative to the current time
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(ttl) * time.Second)),
			Issuer:    MyIssuer,
			Subject:   MySubject,
		},
	}
	// 使用指定的签名方法创建签名对象, 指定的secret签名并获得完整的编码后的字符串token
	token, err = jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString(secret)
	return
}

// ParseToken 解析JWT
func ParseToken(tokenString string, secret []byte) (*MyCustomClaims, error) {
	// 解析token
	var claims = new(MyCustomClaims)
	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (i interface{}, err error) {
		return secret, nil
	})
	if err != nil {
		return nil, err
	}
	// 校验token
	if token.Valid {
		return claims, nil
	}
	return nil, errors.New("invalid token")
}

// 生成access Token和refresh Token
func GenAccessTokenRefreshToken(userId int64, username string, secret []byte, aTokenTTL int64, rTokenTTL int64) (accessToken, refreshToken string, err error) {
	// 创建一个我们自己的声明的数据
	// Create claims with multiple fields populated
	claims := MyCustomClaims{
		userId,
		username,
		jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(aTokenTTL) * time.Second)),
			Issuer:    MyIssuer,
			Subject:   MySubject,
		},
	}
	// 生成access token
	accessToken, err = jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString(secret)

	// 生成refresh token
	refreshToken, err = jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.RegisteredClaims{
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(rTokenTTL) * time.Second)),
		Issuer:    MyIssuer,
		Subject:   MySubject,
	}).SignedString(secret)
	return
}

// 刷新AccessToken 和 Refresh Token
func RefreshToken(accessToken, refreshToken string, secret []byte, aTokenTTL int64, rTokenTTL int64) (newAToken, newRToken string, err error) {
	// refreash token无效直接返回
	_, err = jwt.Parse(refreshToken, func(token *jwt.Token) (i interface{}, err error) {
		return secret, nil
	})
	if err != nil {
		return
	}
	fmt.Println("refresh token有效")
	// 从旧access token中解析出claims数据
	var claims = new(MyCustomClaims)
	token, err := jwt.ParseWithClaims(accessToken, claims, func(token *jwt.Token) (i interface{}, err error) {
		return secret, nil
	})
	if !token.Valid && err != nil {
		fmt.Printf("parse access token: %v\n", err)
	}
	// 校验access token的有效性，无效从新生成
	if !token.Valid {
		fmt.Println("重新生成 access token和refresh token")
		return GenAccessTokenRefreshToken(claims.UserID, claims.UserName, secret, aTokenTTL, rTokenTTL)
	}
	return
}

func main() {
	// 加密字符串abc12345
	var mySecret = []byte("abc12345")
	// 生成token
	// token, err := GenToken(123, "abc", mySecret, 30)
	// if err != nil {
	// 	fmt.Printf("GenToken err: %v\n", err)
	// 	return
	// }
	// fmt.Printf("token:   %v\n", token)

	// // 校验token,休眼60秒，查看token是否过期
	// // time.Sleep(time.Second * 60)

	// // 解析token
	// claims, err := ParseToken(token, mySecret)
	// if err != nil {
	// 	fmt.Printf("ParseToken err: %v\n", err)
	// 	return
	// }
	// fmt.Printf("Issuer:   %v\n", claims.ExpiresAt)

	// accessToken, refreshToken, err := GenAccessTokenRefreshToken(1, "abc", mySecret, 30, 3600)
	// if err != nil {
	// 	fmt.Printf("GenAccessRefreshToken err: %v\n", err)
	// 	return
	// }
	// fmt.Printf("accessToken:   %v\n", accessToken)
	// fmt.Printf("refreshToken:   %v\n", refreshToken)


	accessToken := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFiYyIsImlzcyI6InN0eWxpdGUxMDI0Iiwic3ViIjoiZ28tYXBwIiwiZXhwIjoxNzEzNzYyMDk2fQ.ftEH3YE6aio-DC8o3CPEoBZyfAGPLdZDqI_jUzxsw_I"
	refreshToken := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdHlsaXRlMTAyNCIsInN1YiI6ImdvLWFwcCIsImV4cCI6MTcxMzc2NTY2Nn0.fzDV0siAgtkN8aTkmo93gJ0X_RuheX07R9ygeJXyPoA"
	aToken, rToken, err := RefreshToken(accessToken, refreshToken, mySecret, 30, 3600)
	if err != nil {
		fmt.Printf("RefreshToken err: %v\n", err)
		return
	}
	fmt.Printf("aToken:   %v\n", aToken)
	fmt.Printf("rToken:   %v\n", rToken)
}

```

## 相关博文
李文周-在gin框架中使用JWT：
https://www.liwenzhou.com/posts/Go/json-web-token/

---
::: tip 更多文章请关注我的公众号,自动推送更新
![](/wx.png)
:::