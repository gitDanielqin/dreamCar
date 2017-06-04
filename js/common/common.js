// import $ from '../libs/jquery-3.1.0.min'

//Firefox获取文件路径方法
function readFileFirefox(fileBrowser) {
    try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
    } catch (e) {
        alert('无法访问本地文件，由于浏览器安全设置。为了克服这一点，请按照下列步骤操作：(1)在地址栏输入"about:config";(2) 右键点击并选择 New->Boolean; (3) 输入"signed.applets.codebase_principal_support" （不含引号）作为一个新的首选项的名称;(4) 点击OK并试着重新加载文件');
        return;
    }
    var fileName = fileBrowser.value; //这一步就能得到客户端完整路径。下面的是否判断的太复杂，还有下面得到ie的也很复杂。
    var file = Components.classes["@mozilla.org/file/local;1"]
        .createInstance(Components.interfaces.nsILocalFile);
    try {
        // Back slashes for windows
        file.initWithPath(fileName.replace(/\//g, "\\\\"));
    } catch (e) {
        if (e.result != Components.results.NS_ERROR_FILE_UNRECOGNIZED_PATH) throw e;
        alert("File '" + fileName + "' cannot be loaded: relative paths are not allowed. Please provide an absolute path to this file.");
        return;
    }
    if (file.exists() == false) {
        alert("File '" + fileName + "' not found.");
        return;
    }
    return file.path;
}
window.readFileFirefox = readFileFirefox;
var variableUtils = {
    regExp: {
        mobile: /^1[34578]\d{9}$/,
        email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
        password: /^[a-zA-Z0-9]{6,16}$/,
        phone: /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/
    }
}
window.variableUtils = variableUtils;
window.EventUtils = {
        cloneObj: function(obj) { // 克隆对象函数
            var o;
            switch (typeof obj) {
                case 'undefined':
                    break;
                case 'string':
                    o = obj + '';
                    break;
                case 'number':
                    o = obj - 0;
                    break;
                case 'boolean':
                    o = obj;
                    break;
                case 'object':
                    if (obj === null) {
                        o = null;
                    } else {
                        if (obj instanceof Array) {
                            o = [];
                            for (var i = 0, len = obj.length; i < len; i++) {
                                o.push(EventUtils.cloneObj(obj[i]));
                            }
                        } else {
                            o = {};
                            for (var k in obj) {
                                o[k] = EventUtils.cloneObj(obj[k]);
                            }
                        }
                    }
                    break;
                default:
                    o = obj;
                    break;
            }
            return o;
        },
        diffDay: function(date) { // 计算日期差值
            var nowDate = new Date();
            aDate = date.split("-");
            var oldDate = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]);
            var iDays = parseInt(Math.abs(nowDate - oldDate) / 1000 / 60 / 60 / 24);
            return iDays
        },
        filterReqdata: function(postdata) { // 清除发送数据对象值为空或不限的属性
            for (var key in postdata) {
                if (typeof(postdata[key]) == "string" && postdata[key].indexOf(";") >= 0 && postdata[key].split(";")[0] == "不限") {
                    delete postdata[key];
                }
                if (postdata[key] == "" || postdata[key] == "不限") {
                    delete postdata[key];
                }
            }
            return postdata;
        },
        absCenter: function(obj) {
            $(obj).css({
                top: Math.floor(($(window).height() - $(obj).height()) / 2 + document.body.scrollTop),
                left: Math.floor(($(window).width() - $(obj).width()) / 2)
            })
        },
        urlExtrac: function(url) {
            var paraStr = url.search.substr(1);
            var paraArray = paraStr.split("&");
            var paraObj = {};
            for (var i = 0; i < paraArray.length; i++) {
                var pars = paraArray[i].split("=");
                paraObj[pars[0]] = pars[1];
            };
            return paraObj;
        },
        infoExtrac: function(info) {
            if (info) {
                var infoArray = info.split(";");
                for (var i = infoArray.length - 1; i >= 0; i--) {
                    if (i == 0) {
                        return infoArray[0];
                    } else if (infoArray[i] != "不限") {
                        return infoArray[i];
                    }
                }
            } else {
                return "";
            }
        },
        infoToArray: function(info) {
            if (info != undefined || info != "") {
                return info.split(";")
            } else {
                return "";
            }
        },
        ajaxReq: function(url, method, postdata, callback) {
            $.ajax({
                url: "http://www.xiaoqiztc.com/easily_xq_WebApi" + url,
                // url: "http://192.168.0.104:8080/easily_xq_WebApi" + url,
                type: method,
                data: postdata,
                success: callback,
                error: function(data, status) {
                    alert("请求服务器信息错误！" + data.info);
                },
                timeout: 100000
            })
        },
        formatDate: function(year, month, day) {
            if (parseInt(month) < 10) { month = "0" + month; }
            if (parseInt(day) < 10) { day = "0" + day; }
            return year + "-" + month + "-" + day;
        },
        getOs: function() {
            var OsObject = "";
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                return "MSIE";
            }
            if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
                return "Firefox";
            }
            if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
                return "Safari";
            }
            if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
                return "Camino";
            }
            if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
                return "Gecko";
            }
        },
        getLocalImgUrl: function(fid) {
            // IE浏览器获取图片路径
            this.getImgUrlByMSIE = function(fileid) {
                    return document.getElementById(fileid).value;
                }
                // 非IE浏览器获取图片路径
            this.getImgUrlByUnMSIE = function(fileid) {
                var f = document.getElementById(fileid).files[0];
                return window.URL.createObjectURL(f);
            }
            var imgsrc = "";
            if ("MSIE" == EventUtils.getOs()) {
                imgsrc = this.getImgUrlByMSIE(fid);
            } else {
                imgsrc = this.getImgUrlByUnMSIE(fid);
            }
            return imgsrc;
        },
        getFileUrl: function(obj) {
            //判断浏览器
            var Sys = {};
            var ua = navigator.userAgent.toLowerCase();
            var s;
            (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1]:
                (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
            var file_url = "";
            if (Sys.ie <= "6.0") {
                //ie5.5,ie6.0
                file_url = obj.value;
            } else if (Sys.ie >= "7.0") {
                //ie7,ie8
                obj.select();
                file_url = document.selection.createRange().text;
            } else if (Sys.firefox) {
                //file_url = document.getElementById("file").files[0].getAsDataURL();//获取的路径为FF识别的加密字符串
                file_url = readFileFirefox(obj);
            } else if (Sys.chrome) {
                file_url = obj.value;
            }
            return file_url;
        },
        getViewport: function() { //取得屏幕宽高
            if (document.compatMode == 'BackCompat') {
                return {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight
                };
            } else {
                return {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                }
            }
        }
    }
    // 数组对象功能扩充
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};