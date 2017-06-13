// import $ from "../libs/jquery-3.1.0.min";
// var Vue = require("../libs/vue");
// require("../common/common")
// require("../components/dropdown")
// require("../components/major-pop")
// require("../components/foundation-datepicker")
// require("../../data/commondata")
// require("../../data/position")
// require("../../data/major")
// require("../../data/address")
// require("../../data/workareas")
// require("../../css/base.css")
// require("../../css/widget.css")
// require("../../css/foundation-datepicker.min.css")
// require("../../css/require.css")

// 获取字段判断是否为首次发布还是修改
var parObj = EventUtils.urlExtrac(window.location);
var isNewRequire = true;
var pageindex = "0";
var respObj = {}
if (parObj.new && parObj.new != "1") { //非新需求
    isNewRequire = false;
    pageindex = parObj.demandSrc;
    infoRequest(parObj.demandSrc);
};

function infoRequest(demandSrc) {
    if (demandSrc == "0") { //如果是校企合作需求详情
        var postdata = {
            loginIdentifier: parObj.loginId,
            demandId: parObj.demandId
        }
        EventUtils.ajaxReq("/demand/getInfo", "get", postdata, function(resp, status) {
            respObj = resp.data;
            console.log(respObj);
            var initAddr = "";
            var initPos = "";
            if (respObj.companyAddress) {
                initAddr = {
                    province: respObj.companyAddress.split(";")[0],
                    city: respObj.companyAddress.split(";")[1],
                    district: respObj.companyAddress.split(";")[2]
                }
            }
            if (respObj.job) {
                initPos = {
                    pos_1: respObj.job.split(";")[0],
                    pos_2: respObj.job.split(";")[1],
                    pos_3: respObj.job.split(";")[2]
                }
            }
            var combidata = {
                datatype: "combi",
                header: respObj.title,
                initAddress: initAddr,
                initPosition: initPos,
                uniApply: {
                    stuScale: respObj.professionCount,
                    trainWay: respObj.trainType,
                },
                incApply: {
                    posAmount: respObj.jobCount,
                    incProps: respObj.companyProperty,
                    incScale: respObj.companyScale,
                },
                requireDesc: respObj.discription,
                contact: {
                    person: respObj.linkMan,
                    phone: respObj.mobile,
                    address: respObj.schoolAddress ? respObj.schoolAddress.split(";").join("-") : ""
                }
            }
            appMain.combiData = combidata;

            // 专业数据
            $(".cont-combi .major-input-1 input").val(respObj.profession.split(";")[0]);
            $(".cont-combi .major-input-2 input").val(respObj.profession.split(";")[1]);
            // 企业行业
            $(".cont-combi .input-area-1 input").val(respObj.companyType.split(";")[0]);
            $(".cont-combi .input-area-2 input").val(respObj.companyType.split(";")[1]);
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
    }
    //招聘会信息
    if (demandSrc == "1") {
        var postdata = {
            loginIdentifier: parObj.loginId,
            jobFairId: parObj.jobfairId
        }
        EventUtils.ajaxReq("/jobfair/getInfo", "get", postdata, function(resp, status) {
            console.log(resp);
            respObj = resp.data;
            var initpos = "";
            if (respObj.companyType) { //企业行业数据
                $(".cont-recruit .input-area-1 input").val(respObj.companyType.split(";")[0]);
                $(".cont-recruit .input-area-2 input").val(respObj.companyType.split(";")[1]);
            }
            if (respObj.job) {
                initpos = {
                    pos_1: respObj.job.split(";")[0],
                    pos_2: respObj.job.split(";")[1],
                    pos_3: respObj.job.split(";")[2]
                }
            }
            if (respObj.profession) { // 专业数据           
                $(".cont-recruit .major-input-1 input").val(respObj.profession.split(";")[0]);
                $(".cont-recruit .major-input-2 input").val(respObj.profession.split(";")[1]);
            }
            var recdata = {
                datatype: "recruit",
                header: respObj.title,
                incReq: {
                    incScale: respObj.companyScale,
                    incProps: respObj.companyProperty,
                    posAmount: respObj.jobCount,
                    initPosition: initpos,
                },
                stuScale: respObj.professionCount,
                date: respObj.startTime,
                desc: respObj.discription,
                contact: {
                    person: respObj.linkMan,
                    phone: respObj.mobile,
                    address: respObj.jobFairAddress ? respObj.jobFairAddress.split(";").join("-") : ""
                }
            };
            appMain.recruitData = recdata;
        })
    }
}
var appTop = new Vue({
    el: "#app-top",
    data: {
        centerLink: "uniCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId,
        homeLink: "index.html?userId=" + parObj.userId
    },
    methods: {
        showMsg: function() {
            appModal.show.modal = true;
            appModal.show.message = true;
        }
    }
})
var appMain = new Vue({
    el: "#app-main",
    data: {
        newRequire: isNewRequire,
        showCombi: pageindex == "0" || isNewRequire,
        database: {
            addrData: addArray,
            uni: {
                classific: ["综合类", "理工类", "师范类", "艺术类", "体育类", "职业技术类"],
                amount: majorSum,
                unilevel: ["重点", "本科", "大专", "高职"],
                scolars: ["博士", "硕士", "本科", "大专", "高中", "EMBA", "其他"],
                majors: majorArray
            },
            inc: {
                props: incProps,
                scale: incScale,
                areas: workareas,
                posAmount: positionsum,
                posData: posArray
            },
            trainway: ["企业高管到校", "学生入企", "面议"],
            postype: ["电气信息类", "电子信息科学类", "仪器仪表类", "工商管理类", "管理科学与工程类", "金融类", "其他"],
            welfares: ["五险一金", "包住", "包吃", "年底双薪", "双休", "交通补助", "加班补助", "话补", "房补"]
        },
        combiData: {
            datatype: "combi",
            header: "",
            initPosition: {
                pos_1: "",
                pos_2: "",
                pos_3: ""
            },
            initAddress: {
                province: "不限",
                city: "不限",
                district: "不限"
            },
            uniApply: {
                stuScale: "",
                trainWay: "企业高管到校",
            },
            incApply: {
                posAmount: "",
                incProps: "不限",
                incScale: "不限",
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
            incReq: {
                incScale: "不限",
                incProps: "不限",
                initPosition: {
                    pos_1: "",
                    pos_2: "",
                    pos_3: ""
                },
                posAmount: "不限",
            },
            initAddress: {
                province: "不限",
                city: "不限",
                district: "不限"
            },
            stuScale: "不限",
            date: "",
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
            if (type == "combi") {
                this.showCombi = true;
            } else {
                this.showCombi = false;
            }
            // selectInitPos();
            $(".pop-major").hide();
            $(".steps li:nth-of-type(1)").removeClass("past");
            $(".steps li:nth-of-type(2)").removeClass("on");
        },
        fontCal: function(str, type) {
            if (!str) {
                return 1000
            }
            if (str.length <= 1000) {
                return (1000 - str.length);
            } else {
                swal({
                    title: "",
                    text: "已超出最大可输入字数！",
                    type: "warning"
                })
                if (type == "combi") {
                    this.combiData.requireDesc = this.combiData.requireDesc.substr(0, 1000);
                } else if (type == "recruit") {
                    this.recruitData.desc = this.recruitData.desc.substr(0, 1000);
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
                addBox.hide();
            } else if (type == "recruit") {
                this.recruitData.contact.address = incAddress;
                addBox.hide();
            }
        },
        publish: function(type) {
            var isFilled = true;
            // 对联系方式的输入检测
            // $(".phone-input:visible").each(function() {
            //     if (!variableUtils.regExp.phone.test(this.value) && !variableUtils.regExp.mobile.test(this.value)) {
            //         $(this).addClass("hint-nullable");
            //         isValid = false;
            //     }
            // });

            $(".must-input:visible").each(function() {
                if ($(this).val() == "") {
                    $(this).addClass("hint-nullable");
                    isFilled = false;
                } else {
                    $(this).removeClass("hint-nullable");
                }
            });
            $(".must-item:visible").each(function() {
                var oInput = $(this).find("input:first-child");
                if (oInput.val() == "") {
                    oInput.addClass("hint-nullable");
                    isFilled = false;
                } else {
                    oInput.removeClass("hint-nullable");
                }
            })
            if (!isFilled) {
                swal({
                    title: "",
                    text: "请完成所有必填信息！",
                    type: "warning"
                })
                return false;
            }
            if (type == "combi") {
                //检查信息是否符合正确的格式(不能为不限)
                var isValid = true;
                if ($(".cont-combi .sel-pos-1 input").val() == "不限") { //岗位信息不能为不限
                    $(".sel-position:visible input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    $(".sel-position:visible input").removeClass("hint-nullable");
                }

                if (this.combiData.incApply.posAmount == "不限") {
                    $(".pos-item input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    $(".pos-item input").removeClass("hint-nullable");
                }

                if ($(".cont-combi .major-input-1 input").val() == "不限") {
                    $(".cont-combi .major-input input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    $(".cont-combi .major-input input").removeClass("hint-nullable");
                }

                if (this.combiData.uniApply.stuScale == "不限") {
                    $(".cont-combi .pro-count input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    $(".cont-combi .pro-count input").removeClass("hint-nullable");
                }
                if (!isValid) {
                    swal({
                        title: "",
                        text: "必填选项不能为不限！",
                        type: "warning"
                    });
                    return false;
                }

                if (!variableUtils.regExp.phone.test(this.combiData.contact.phone) && !variableUtils.regExp.mobile.test(this.combiData.contact.phone)) {
                    $(".phone-input:visible").addClass("hint-nullable");
                    swal({
                        title: "",
                        text: "联系方式格式有误！",
                        type: "warning"
                    })
                    return false;
                } else {
                    $(".phone-input:visible").removeClass("hint-nullable");
                }
                //准备发送数据
                if ($(".cont-combi .time-table").find("td.on").length > 0) {
                    var timestring = "";
                    $(".cont-combi .time-table .time-tr").each(function() {
                        $(this).find("td.t-cell").each(function() {
                            timestring += $(this).hasClass("on") ? "1" : "0";
                        });
                        timestring += ";";
                    });
                    timestring = timestring.slice(0, -1);
                } else {
                    var timestring = "";
                }
                var postdata = {
                        userId: parObj.userId,
                        title: this.combiData.header,
                        demandType: 1,
                        job: $(".cont-combi .sel-pos-1 input").val() + ";" + $(".cont-combi .sel-pos-2 input").val() + ";" + $(".cont-combi .sel-pos-3 input").val(),
                        jobCount: this.combiData.incApply.posAmount,
                        companyProperty: this.combiData.incApply.incProps,
                        companyScale: this.combiData.incApply.incScale,
                        companyType: $(".cont-combi .input-area-1 input").val() + ";" + $(".cont-combi .input-area-2 input").val(),
                        companyAddress: $(".cont-combi .sel-province input").val() + ";" + $(".cont-combi .sel-city input").val() + ";" + $(".cont-combi .sel-district input").val(),
                        profession: $(".cont-combi .major-input-1 input").val() + ";" + $(".cont-combi .major-input-2 input").val(),
                        professionCount: this.combiData.uniApply.stuScale,
                        trainType: this.combiData.uniApply.trainWay,
                        trainTime: timestring,
                        discription: this.combiData.requireDesc,
                        linkMan: this.combiData.contact.person,
                        mobile: this.combiData.contact.phone,
                        schoolAddress: this.combiData.contact.address.split("-").join(";")
                    }
                    // console.log(postdata);
                if (isNewRequire) {
                    EventUtils.ajaxReq('/demand/apply', 'post', postdata, function(resp, status) {
                        console.log(resp);
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "发布成功！",
                                type: "success",
                                showConfirmButton: false
                            });
                            setTimeout(function() {
                                window.location.href = "uniCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&theme=require";
                            }, 1000);
                        }
                    })
                } else {
                    postdata.demandId = parObj.demandId;
                    EventUtils.ajaxReq('/demand/modifyInfo', 'post', postdata, function(resp, status) {
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "修改成功！",
                                type: "success",
                                showConfirmButton: false
                            });
                            setTimeout(function() {
                                window.location.href = "uniCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + parObj.demandId + "&theme=require";
                            }, 1000);
                        }
                    })
                }
            } else if (type == "jobfair") {
                //检测发送的数据
                var isValid = true;
                if ($(".cont-recruit .sel-pos-1 input").val() == "不限") {
                    $(".cont-recruit .sel-position input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    $(".cont-recruit .sel-position input").removeClass("hint-nullable");
                }
                if ($(".cont-recruit .major-input-1 input").val() == "不限") {
                    $(".cont-recruit .major-input input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    $(".cont-recruit .major-input input").removeClass("hint-nullable");
                }
                if (this.recruitData.stuScale == "不限") {
                    $(".cont-recruit .pro-count input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    $(".cont-recruit .pro-count input").removeClass("hint-nullable");
                }
                if (!isValid) {
                    swal({
                        title: "",
                        text: "必填选项不能为不限！",
                        type: "warning"
                    });
                    return false;
                }

                if (!variableUtils.regExp.phone.test(this.recruitData.contact.phone) && !variableUtils.regExp.mobile.test(this.recruitData.contact.phone)) {
                    $(".phone-input:visible").addClass("hint-nullable");
                    swal({
                        title: "",
                        text: "联系方式格式有误！",
                        type: "warning"
                    })
                    return false;
                } else {
                    $(".phone-input:visible").removeClass("hint-nullable");
                }
                //准备发送数据
                var postdata = {
                    userId: parObj.userId,
                    jobFairType: 1,
                    title: this.recruitData.header,
                    companyType: $(".cont-recruit .input-area-1 input").val() + ";" + $(".cont-recruit .input-area-2 input").val(),
                    companyProperty: this.recruitData.incReq.incProps,
                    companyScale: this.recruitData.incReq.incScale,
                    job: $(".cont-recruit .sel-pos-1 input").val() + ";" + $(".cont-recruit .sel-pos-2 input").val() + ";" + $(".cont-recruit .sel-pos-3 input").val(),
                    jobCount: this.recruitData.incReq.posAmount,
                    companyAddress: $(".company-address .sel-province input").val() + ";" + $(".company-address .sel-city input").val() + ";" + $(".company-address .sel-district input").val(),
                    profession: $(".cont-recruit .major-input-1 input").val() + ";" + $(".cont-recruit .major-input-2 input").val(),
                    professionCount: this.recruitData.stuScale,
                    startTime: $("#jobfair-date").val(),
                    discription: this.recruitData.desc,
                    linkMan: this.recruitData.contact.person,
                    mobile: this.recruitData.contact.phone,
                    jobFairAddress: this.recruitData.contact.address == "" ? "" : this.recruitData.contact.address.split("-").join(";")
                }
                console.log(postdata);
                if (isNewRequire) {
                    EventUtils.ajaxReq('/jobfair/apply', 'post', postdata, function(resp, status) {
                        console.log(resp);
                        if (resp.code == "00000") {
                            if (resp.data.status == "0") {
                                swal({
                                    title: "",
                                    text: "不允许同一天发布多场招聘会，请删除后重发！",
                                    type: "warning"
                                });
                            } else {
                                swal({
                                    title: "",
                                    text: "发布成功！",
                                    type: "success",
                                    showConfirmButton: false
                                });
                                setTimeout(function() {
                                    window.location.href = "uniCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + parObj.demandId + "&theme=require";
                                }, 1000);
                            }
                        }
                    })
                } else {
                    postdata.jobFairId = parObj.jobfairId;
                    EventUtils.ajaxReq('/jobfair/modifyInfo', 'post', postdata, function(resp, status) {
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "修改成功！",
                                type: "success",
                                showConfirmButton: false
                            });
                            setTimeout(function() {
                                window.location.href = "uniCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + parObj.demandId + "&theme=require";
                            }, 1000);
                        }
                    })
                }
            }
        }
    },
    mounted: function() {
        // $(".selectee input").val("不限");
        // $(".major-input input").val("不限");
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
        navEventBind();
        // selectRepos();
        datepickEventBind();
        selectInit();
        selectTime();
    },
    watch: {
        "combiData.contact.phone": function(curval, oldval) {
            if (!/^\d*$/.test(curval) || curval.length > 11) {
                this.combiData.contact.phone = oldval;
            }
        },
        "recruitData.contact.phone": function(curval, oldval) {
            if (!/^\d*$/.test(curval) || curval.length > 11) {
                this.recruitData.contact.phone = oldval;
            }
        }
    }
})

var appFooter = new Vue({
    el: "#app-footer",
    methods: {
        homeLink: function() {
            var link = "index.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = link;
        }
    }
})
var appModal = new Vue({
    el: "#app-modal",
    data: {
        account: { userId: parObj.userId },
        show: { modal: false, message: false }
    },
    methods: {
        closeMsg: function() {
            this.show.message = false;
            this.show.modal = false;
        }
    },
    watch: {
        "show.message": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .msg-box"));
                })
            }
        }
    }
})

datepickEventBind();

function navEventBind() { //头部导航栏事件绑定
    $(".navs ul li").click(function() {
        $(".navs .on").removeClass("on");
        $(this).addClass("on");
        $(".nav-cont").hide();
        $(".cont-" + $(this).attr("name")).show();
        $(".pop-major").hide();
        $(".steps li:nth-of-type(1)").removeClass("past");
        $(".steps li:nth-of-type(2)").removeClass("on");
        selectInitPos();
    })
}

function selectInit() {
    $(".major-input input").each(function(index) {
        $(this).width($(this).width() - 20);
        $(this).css("padding-right", 20 + "px");
        var bgPos = $(this).width() + 10 + "px center";
        $(this).attr("disabled", "true").css("background-position", bgPos);
    })
}
// 选择时间表事件
function selectTime() {
    $(".time-table .t-cell").click(function() {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
        }
    })
}

//招聘会日期选择
function datepickEventBind() {
    var nowTemp = new Date();
    var timediff = 6 * 24 * 3600 * 1000;
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    $('#jobfair-date').val(EventUtils.formatDate(nowTemp.getFullYear(), nowTemp.getMonth() + 1, nowTemp.getDate()));
    var jobfairdate = $('#jobfair-date').fdatepicker({
        format: 'yyyy-mm-dd',
        onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        jobfairdate.hide();
    }).data('datepicker');
}