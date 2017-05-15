var parObj = EventUtils.urlExtrac(window.location);
var isNewRequire = true;
var respObj = {};
if (parObj.new && parObj.new != "1") { //非首次发布
    isNewRequire = false;
    (function() {
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            demandId: parObj.demandId,
        }
        EventUtils.ajaxReq("/demand/getInfo", "get", postdata, function(resp, status) {
            respObj = resp.data;
            console.log(respObj);
            if (parObj.demandSrc == "0") { //如果是校企合作需求详情
                var combidata = {
                    datatype: "combi",
                    header: respObj.title,
                    initAddress: {
                        province: respObj.schoolAddress.split(";")[0],
                        city: respObj.schoolAddress.split(";")[1],
                        district: respObj.schoolAddress.split(";")[2]
                    },
                    initPosition: {
                        pos_1: respObj.job.split(";")[0],
                        pos_2: respObj.job.split(";")[1],
                        pos_3: respObj.job.split(";")[2]
                    },
                    incReq: {
                        stuScale: respObj.professionCount,
                        uniLevel: respObj.schoolProperty,
                        uniClassific: respObj.schoolType
                    },
                    incApply: {
                        posAmount: respObj.jobCount,
                        trainWay: respObj.trainType,
                    },
                    requireDesc: respObj.discription,
                    contact: {
                        person: respObj.linkMan,
                        phone: respObj.mobile,
                        address: respObj.companyAddress.split(";").join("-")
                    }
                }
                appMain.combiData = combidata;
            };
            $(".cont-combi .major-input-1 input").val(respObj.profession.split(";")[0]);
            $(".cont-combi .major-input-2 input").val(respObj.profession.split(";")[1]);
            //初始化联合培养时间表
            $(".cont-combi .time-table td.on").removeClass("on");
            var timeArray = respObj.trainTime.split(";");
            for (var i = 0; i < timeArray.length; i++) {
                for (var j = 0; j < timeArray[i].length; j++) {
                    if (timeArray[i].charAt(j) == "1") {
                        $(".cont-combi .time-table .time-tr").eq(i).find("td.t-cell").eq(j).addClass("on");
                    }
                }
            }
        });
    })()
};

var appTop = new Vue({
    el: "#app-top",
    data: {
        centerLink: "incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId
    },
    methods: {
        showMsg: function() {
            appModal.show.message = true;
            appModal.show.modal = true;
        }
    }
})
var appMain = new Vue({
    el: "#app-main",
    data: {
        newRequire: isNewRequire,
        showpage: {
            page1: parObj.demandSrc == "0" || isNewRequire,
            page2: parObj.demandSrc == "1",
            page3: parObj.demandSrc == "2"
        },
        database: {
            addrData: addArray,
            uni: {
                classific: uniclassific,
                amount: majorSum,
                unilevel: unilevel,
                scolars: scolarship,
                majors: majorArray
            },
            inc: {
                posAmount: positionsum,
                worksexp: worksexp,
                salary: salaryItems
            },
            trainway: ["企业高管到校", "学生入企", "面议"],
            posdata: posArray,
            welfares: ["五险一金", "包住", "包吃", "年底双薪", "双休", "交通补助", "加班补助", "话补", "房补", "全选"]
        },
        combiData: {
            datatype: "combi",
            header: "",
            initAddress: {
                province: "不限",
                city: "不限",
                district: "不限"
            },
            initPosition: {
                pos_1: "不限",
                pos_2: "不限",
                pos_3: "不限"
            },
            incReq: {
                stuScale: "",
                uniLevel: "",
                uniClassific: "",
            },
            incApply: {
                posAmount: "",
                trainWay: "",
            },
            requireDesc: "",
            contact: {
                person: "",
                phone: "",
                address: ""
            }
        },
        recruitData: {
            datatype: "recruit",
            header: "",
            postype: {
                postype_1: "",
                postype_2: ""
            },
            amount: "",
            scolar: "",
            gender: "",
            worksexp: "",
            salary: "",
            date: "",
            desc: "",
            contact: {
                person: "",
                phone: "",
                address: ""
            }
        },
        directData: {
            datatype: "direct",
            header: "",
            postype: {
                postype_1: "",
                postype_2: ""
            },
            amount: "",
            scolar: "",
            gender: "",
            worksexp: "",
            salary: "",
            desc: "",
            contact: {
                person: "",
                phone: "",
                address: ""
            }
        }
    },
    methods: {
        clickNav: function(type, obj) {
            $(".navs ul li.on").removeClass("on");
            $(obj).addClass("on");
            $(".nav-cont").hide();
            $(".cont-" + type).show();
            $(".steps li:nth-of-type(1)").removeClass("past");
            $(".steps li:nth-of-type(2)").removeClass("on");
            selectInitPos();
        },
        fontCal: function(str, type) {
            if (str.length <= 1000) {
                return (1000 - str.length);
            } else {
                alert("已超出最大可输入字数！");
                if (type == "combi") {
                    this.combiData.requireDesc = this.combiData.requireDesc.substr(0, 1000);
                } else if (type == "recruit") {
                    this.recruitData.desc = this.recruitData.desc.substr(0, 1000);
                } else if (type == "direct") {
                    this.directData.desc = this.directData.desc.substr(0, 1000);
                }
                return (1000 - str.length);
            }
        },
        popAddrBox: function(obj) {
            $(obj).siblings(".addr-box").show();
            selectInitPos();
        },
        confirmIncAddr: function(target, type) {
            var incAddress = "";
            var addBox = $(target).closest(".addr-box");
            addBox.find(".sel-addr input").each(function() {
                incAddress += $(this).val() + "-";
            });
            if (addBox.find(".addr-ex").val() != "") {
                incAddress += addBox.find(".addr-ex").val();
            } else {
                incAddress = incAddress.slice(0, -1);
            }
            if (type == "combi") {
                this.combiData.contact.address = incAddress;
            } else if (type == "recruit") {
                this.recruitData.contact.address = incAddress;
            } else if (type == "direct") {
                this.directData.contact.address = incAddress;
            }
            addBox.hide();
        },
        publish: function(type) {
            if (type == "combi") {
                if ($(".cont-combi .time-table").find("td.on").length > 0) {
                    var timestring = "";
                    $(".cont-combi .time-table .time-tr").each(function() {
                        $(this).find("td.t-cell").each(function() {
                            timestring += $(this).hasClass("on") ? "1" : "0";
                        });
                        timestring += ";";
                    });
                    timestring = timestring.slice(0, timestring.length - 1);
                } else {
                    var timestring = "";
                }

                var postdata = {
                    userId: parObj.userId,
                    title: this.combiData.header,
                    demandType: 2,
                    profession: $(".cont-combi .major-input-1 input").val() + ";" + $(".cont-combi .major-input-2 input").val(),
                    professionCount: this.combiData.incReq.stuScale,
                    schoolProperty: this.combiData.incReq.uniLevel,
                    schoolType: this.combiData.incReq.uniClassific,
                    schoolAddress: $(".cont-combi .sel-province input").val() + ";" + $(".cont-combi .sel-city input").val() + ";" + $(".cont-combi .sel-district input").val(),
                    job: $(".cont-combi .sel-pos-1 input").val() + ";" + $(".cont-combi .sel-pos-2 input").val() + ";" + $(".cont-combi .sel-pos-3 input").val(),
                    jobCount: this.combiData.incApply.posAmount,
                    trainType: this.combiData.incApply.trainWay,
                    trainTime: timestring,
                    discription: this.combiData.requireDesc,
                    linkMan: this.combiData.contact.person,
                    mobile: this.combiData.contact.phone,
                    companyAddress: this.combiData.contact.address.split("-").join(";")
                };
                if (parObj.demandId) {
                    postdata.demandId = parObj.demandId;
                }
                //     console.log(postdata);
                // console.log(postdata);
                if (isNewRequire) {
                    EventUtils.ajaxReq('/demand/apply', 'post', postdata, function(resp, status) {
                        window.location.href = "incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&theme=require";
                    })
                } else {
                    postdata.demandId = parObj.demandId;
                    EventUtils.ajaxReq('/demand/modifyInfo', 'post', postdata, function(resp, status) {
                        console.log(resp);
                        window.location.href = "incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + parObj.demandId + "&theme=require";
                    })
                }

            }
        }
    },
    mounted: function() {
        $(".selectee input").val("不限");
        $(".major-input input").val("不限");
        $(".form-cont input").focus(function() {
            $(".steps li:nth-of-type(1)").addClass("past");
            $(".steps li:nth-of-type(2)").addClass("on");
        });
        $("body").click(function() {
            $(".pop-major").hide();
            $(".addr-box").hide();
        })
        selectInitInput();
        selectInitPos();
        selectInit();
        selectTime();
        selectWelfare();
    }
})
var appModal = new Vue({
    el: "#app-modal",
    data: {
        show: { modal: false, message: false }
    },
    methods: {
        closeMsg: function() {
            this.show.message = false;
            this.show.modal = false;
        }
    }
})

function selectRepos() {
    $(".selectee ul").each(function() {
        var sibInput = $(this).siblings("input");
        //console.log(sibInput.height());
        $(this).width(sibInput.outerWidth() - 2);
        $(this).css({
            left: sibInput.css("margin-left") + "px",
            top: 25 + "px"
        })
    });
}

function selectInit() {
    $(".major-input input").each(function(index) {
        $(this).width($(this).width() - 20);
        $(this).css("padding-right", 20 + "px");
        var bgPos = $(this).width() + 10 + "px center";
        $(this).attr("disabled", "true").css("background-position", bgPos);
    })
}
//时间表选择事件
function selectTime() {
    $(".time-table .t-cell").click(function() {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
        }
    })
}
// 福利点击事件
function selectWelfare() {
    $(".welfare-lis .check-box").click(function() {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
        }
    })
}