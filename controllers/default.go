package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "MyBlog"
	c.Data["Email"] = "sihong_w@163.com"
	c.TplName = "index.html"
}
