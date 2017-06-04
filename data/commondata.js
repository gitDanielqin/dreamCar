// 工资
var salaryItems = [
    "不限",
    "<1k",
    "1k-2k",
    "2k-4k",
    "4k-6k",
    "6k-8k",
    "8k-10k",
    "10k-15k",
    "15k-25k",
    "25k-35k",
    "35k-50k",
    "50k-75k",
    "75k-100k",
    ">100k",
];
window.salaryItems = salaryItems;
//福利待遇
var welfares = ["五险一金", "包住", "包吃", "年底双薪", "双休", "交通补助", "加班补助", "话补", "房补"];
window.welfares = welfares;
// 期望学历
var scolarship = [
    "不限",
    "本科",
    "硕士",
    "博士",
    "MBA",
    "EMBA",
    "大专",
    "中专",
    "中技",
    "高中",
    "初中",
    "其他",
]
window.scolarship = scolarship;
// 岗位人数
var positionsum = [
    "不限",
    "0—10人",
    "10—20人",
    "21—30人",
    "31—40人",
    "41—50人",
    "51—60人",
    "61—70人",
    "71—80人",
    "81—90人",
    "91—100人",
    "101-150人",
    "151-200人",
    "201-300人",
    "300人以上"
]
window.positionsum = positionsum;
// 民族数据
var nations = ["汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族", "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族", "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族", "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"];
window.nations = nations;
// 高校类别
var uniclassific = ["不限", "综合类", "理工类", "财经类", "师范类", "语言类", "政法类", "民族类", "农林类", "医药类", "艺术类", "体育类", "军事类"];
window.uniclassific = uniclassific;
// 高校性质
var unilevel = ["不限", "重点", "本科", "大专", "高职"];
window.unilevel = unilevel;
// 企业规模
var incScale = ["不限",
    "20人以内",
    "20-99人",
    "100-199人",
    "200-499人",
    "500-999人",
    "1000-9999人",
    "10000人以上",
]

window.incScale = incScale;
// 工作经验
var worksexp = ["一年以内", "1-2年", "2-3年", "3-4年", "4-5年", "5-6年", "6-7年", "8年以上", "不限"];
window.worksexp = worksexp;
var workstates = [
    "在职，打算换个新环境",
    "离职，可立即到岗工作",
    "在校学生",
    "应届毕业生",
    "暂时不想找工作"
];
window.workstates = workstates;
// 企业性质
var incProps = ["不限",
    "国营",
    "民营",
    "合资",
    "外商独资",
    "股份制企业",
    "上市公司",
    "代表处",
    "国家机关",
    "事业单位",
    "世界500强",
    "中国500强",
    "其他"
];
window.incProps = incProps;
//专业人数
var majorSum = ["不限",
    "30-40人",
    "41-60人",
    "61-80人",
    "81-100人",
    "101-120人",
    "121-140人",
    "141-200人",
    "200人以上",
];
window.majorSum = majorSum;
// 日期数据
(function() {
    var date = {
        year: [],
        month: [],
        day: []
    }
    var year = new Date().getFullYear();
    year = parseInt(year);
    for (var i = 1950; i <= year; i++) {
        date.year.push(i)
    };
    for (var j = 1; j <= 12; j++) {
        if (j < 10) {
            j = "0" + j;
        }
        date.month.push(j);
    };
    for (var k = 1; k <= 31; k++) {
        if (k < 10) {
            k = "0" + k;
        }
        date.day.push(k);
    };
    window.date = date;
})();