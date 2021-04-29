//获取当前网址，如：
var curWwwPath=window.document.location.href;

//获取主机地址之后的目录如：/Tmall/index.jsp
var pathName=window.document.location.pathname;
var pos=curWwwPath.indexOf(pathName);

//获取主机地址，如：//localhost:8080
var hostPaht=curWwwPath.substring(0,pos);

//获取带"/"的项目名，如：/Tmall
var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);

document.write("<script src=\""+projectName+"/assets/axios/node_modules/axios/dist/axios.js\"></script>");
// var apiUrl = 'http://39.102.36.211:1234/';
var apiUrl = 'http://127.0.0.1:5000/';


let api = {
    post: (url, args) => {
        if(url.startsWith("/"))
            url=url.substring(1,url.length)

        let Authorization=localStorage.getItem("Authorization");
        return new Promise((resolve, reject) => {
            axios({
                url: apiUrl + url,
                method: 'post',
                data: args,
                headers:{
                    Authorization:Authorization,
                    "Content-Type":"application/json;charset=utf-8"
                }
            }).then(res => {
                resolve(res.data);
                // console.log('请求结果：', res);
            }).catch(res => {
                if(res.toString().indexOf('401')!=-1){
                    window.parent.location.href=projectName+"/login.html"
                }
                resolve(res.data);
            });

        })
    },
    postFile: (url, args) => {
        if(url.startsWith("/"))
            url=url.substring(1,url.length)

        let Authorization=localStorage.getItem("Authorization");
        return new Promise((resolve, reject) => {
            axios({
                url: apiUrl + url,
                method: 'post',
                data: args,
                headers:{
                    Authorization:Authorization,
                    "Content-Type":"application/json;charset=utf-8"
                },
                responseType: 'blob'
            }).then(res => {
                resolve(res.data);
                // console.log('请求结果：', res);
            }).catch(res => {
                if(res.toString().indexOf('401')!=-1){
                    window.parent.location.href=projectName+"/login.html"
                }
                resolve(res.data);
            });
        })
    },
    get: (url) => {
        if(url.startsWith("/"))
            url=url.substring(1,url.length)
        let Authorization=localStorage.getItem("Authorization");
        return new Promise((resolve, reject) => {
            axios({
                url: apiUrl + url,
                method: 'get',
                headers:{
                    Authorization:Authorization,
                },
            }).then(res => {
                resolve(res.data);
                // console.log('请求结果：', res);
            }).catch(res => {
                if(res.toString().indexOf('401')!=-1){
                    window.parent.location.href=projectName+"/login.html"
                }
                resolve(res.data);
            });

        })
    },
    postbyhost: (host, url, args) => {
        return new Promise((resolve, reject) => {
            axios({
                url: host + url,
                method: 'post',
                data: args,

            }).then(res => {
                resolve(res.data);
                // console.log('请求结果：', res);
            }).catch(res => {
                resolve(res.data);
            });

        })
    },
    getbyhost: (host, url) => {
        return new Promise((resolve, reject) => {
            axios({
                url: host + url,
                method: 'post'
            }).then(res => {
                resolve(res.data);
                // console.log('请求结果：', res);
            }).catch(res => {
                resolve(res.data);
            });

        })
    }

}


