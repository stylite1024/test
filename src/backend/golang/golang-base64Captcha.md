---
article: true
editLink: false
lastUpdated: true
contributors: false
isOriginal: true
sticky: false

title: golang base64图片验证码库base64Captcha 
date: 2024-04-20
head:
  - - meta
    - name: keywords
      content: vscode go golang go环境 golang环境 goland makefile golang开发 base64Captcha captcha 验证码 golang验证码
category:
  - golang
tag:
  - captcha
---
:::tip 摘要
Base64captcha是一个golang base64图片验证码生成库。Base64captcha支持任何 unicode 字符，并可轻松定制为支持数学、中文、韩文、日文、俄文、阿拉伯文等。
:::
<!-- more -->

## 介绍
web开发中，我们经常用到验证码。Base64captcha是一个golang base64图片验证码生成库，很方便我们直接使用，提高开发效率。

地址：
https://github.com/mojocn/base64Captcha

## 使用
环境
go1.22.0(go>1.11)

安装
```sh
go get -u github.com/mojocn/base64Captcha
```

例子
```go
package main

import (
	"fmt"
	"image/color"
	"time"

	"github.com/mojocn/base64Captcha"
)

// mathConfig 生成图形化算术验证码配置
func mathConfig() *base64Captcha.DriverMath {
	mathType := &base64Captcha.DriverMath{
        // 设置图片的宽度、长度等属性
		Height:          50,
		Width:           100,
		NoiseCount:      0,
		ShowLineOptions: base64Captcha.OptionShowHollowLine,
		BgColor: &color.RGBA{
			R: 40,
			G: 30,
			B: 89,
			A: 29,
		},
		Fonts: nil,
	}
	return mathType
}

// digitConfig 生成图形化数字验证码配置
func digitConfig() *base64Captcha.DriverDigit {
	digitType := &base64Captcha.DriverDigit{
		Height:   50,
		Width:    100,
		Length:   5,
		MaxSkew:  0.45,
		DotCount: 80,
	}
	return digitType
}

// stringConfig 生成图形化字符串验证码配置
func stringConfig() *base64Captcha.DriverString {
	stringType := &base64Captcha.DriverString{
		Height:          50,
		Width:           100,
		NoiseCount:      0,
		ShowLineOptions: base64Captcha.OptionShowHollowLine | base64Captcha.OptionShowSlimeLine,
		Length:          5,
		Source:          "123456789qwertyuiopasdfghjklzxcvb",
		BgColor: &color.RGBA{
			R: 40,
			G: 30,
			B: 89,
			A: 29,
		},
		Fonts: nil,
	}
	return stringType
}

// chineseConfig 生成图形化汉字验证码配置
func chineseConfig() *base64Captcha.DriverChinese {
	chineseType := &base64Captcha.DriverChinese{
		Height:          50,
		Width:           100,
		NoiseCount:      0,
		ShowLineOptions: base64Captcha.OptionShowSlimeLine,
		Length:          2,
		Source:          "设想,你在,处理,消费者,的音,频输,出音,频可,能无,论什,么都,没有,任何,输出,或者,它可,能是,单声道,立体声,或是,环绕立,体声的,不想要,的值",
		BgColor: &color.RGBA{
			R: 40,
			G: 30,
			B: 89,
			A: 29,
		},
		Fonts: nil,
	}
	return chineseType
}

// autoConfig 生成图形化数字音频验证码配置
func autoConfig() *base64Captcha.DriverAudio {
	chineseType := &base64Captcha.DriverAudio{
		Length:   4,
		Language: "zh",
	}
	return chineseType
}

// 自定义验证存储对象
// 使用DefaultMemStore 创建的对象，存储的验证码为 10240 个，过期时间为 10分钟
// var result = base64Captcha.DefaultMemStore
// 设置存储的验证码为 20240个，过期时间为 3分钟
var result = base64Captcha.NewMemoryStore(20240, 3*time.Minute)

// 生成验证码
func GenCaptcha(captcha_type string) (string, string, string, error) {
	var driver base64Captcha.Driver
	switch captcha_type {
	case "audio":
		driver = autoConfig()
	case "string":
		driver = stringConfig()
	case "math":
		driver = mathConfig()
	case "chinese":
		driver = chineseConfig()
	case "digit":
		driver = digitConfig()
	}
	if driver == nil {
		panic("Please set Captcha Driver")
	}
	// 创建验证码并传入创建的类型的配置，以及存储的对象
	c := base64Captcha.NewCaptcha(driver, result)
	id, b64s, ans, err := c.Generate()
	return id, b64s, ans, err
}

// 校验验证码
func VerifyCaptcha(id, ans string) bool {
	return result.Verify(id, ans, true)
}

// 获取验证码答案
func GetCaptchaAnswer(codeId string) string {
	return result.Get(codeId, false)
}

func main() {
	id, b64s, ans, err := GenCaptcha("math")
	if err != nil {
		panic(err)
	}
	fmt.Printf("生成的验证码id:  %v\n", id)
	fmt.Printf("生成的码证码图片:  %v\n", b64s)
	fmt.Printf("生成的验证码答案:  %v\n", ans)

	fmt.Printf("获取验证码答案:  %v\n", GetCaptchaAnswer(id))
	fmt.Printf("校验验证码:  %v\n", VerifyCaptcha(id, ans))
}

```
运行测试
生成的base图片可在浏览器打开
```sh
# go run main.go
生成的验证码id:  NVkvoOc6caAXxUz8tVb1
生成的码证码图片:  data:image/png;base64,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
生成的验证码答案:  45
获取验证码答案:  45
校验验证码:  true
```

---
::: tip 更多文章请关注我的公众号,自动推送更新
![](/wx.png)
:::