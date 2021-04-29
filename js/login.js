//初始化miui框架
mui.init();
//捕获用户点击登录事件
document.getElementById("loginBtn").addEventListener('tap',function(){
	//alert("哈哈");
	//获取到用户名密码
	var username=document.querySelector('input[name="username"]').value;
	var password=document.querySelector('input[name="password"]').value;
	if(username==null||username==""){
		mui.toast("账号不能为空");
		return;
	}else if(password==null||password==""){
		mui.toast("密码不能为空");
		return;
		
	}else{
		if(username=="admin"&&password=="1"){
			console.info("登录成功");
			mui.openWindow("../main/main.html","main");
		}else{
			mui.toast("用户名密码错误");
			document.querySelector('input[name="password"]').value="";
		}
	
	}
	
});
//获取到用户名密码，使用ajax传到服务端，服务端进行校验，如果成功跳转index页，失败返回错误。