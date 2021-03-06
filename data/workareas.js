var workareas = [{
        title: "IT|通信|电子|互联网",
        subareas: [
            "互联网/电子商务",
            "计算机软件",
            "IT服务(系统/数据/维护)",
            "电子技术/半导体/集成电路",
            "计算机硬件",
            "通信/电信/网络设备",
            "通信/电信运营、增值服务",
            "网络游戏"
        ]
    },
    {
        title: "金融业",
        subareas: [
            "基金/证券/期货/投资",
            "保险",
            "银行",
            "信托/担保/拍卖/典当"
        ]
    },
    {
        title: "房地产|建筑业",
        subareas: [
            "房地产/建筑/建材/工程",
            "家居/室内设计/装饰装潢",
            "物业管理/商业中心"
        ]
    },
    {
        title: "商业服务",
        subareas: [
            "专业服务/咨询(财会/法律/人力资源等)",
            "广告/会展/公关",
            "中介服务",
            "检验/检测/认证",
            "外包服务"
        ]
    },
    {
        title: "贸易|批发|零售|租赁业",
        subareas: [
            "快速消费品（食品/饮料/烟酒/日化）",
            "耐用消费品（服饰/纺织/皮革/家具/家电）",
            "贸易/进出口",
            "零售/批发",
            "租赁服务"
        ]
    },
    {
        title: "文体教育|工艺美术",
        subareas: [
            "教育/培训/院校",
            "礼品/玩具/工艺美术/收藏品/奢侈品",
            "汽车/摩托车",
            "大型设备/机电设备/重工业",
            "加工制造（原料加工/模具）",
            "仪器仪表及工业自动化"
        ]
    },
    {
        title: "生产|加工|制造",
        subareas: [
            "印刷/包装/造纸",
            "办公用品及设备",
            "医药/生物工程",
            "医疗设备/器械",
            "航空/航天研究与制造"
        ]
    },
    {
        title: "交通|运输|物流|仓储",
        subareas: [
            "交通/运输",
            "物流/仓储"
        ]
    },
    {
        title: "服务业",
        subareas: [
            "医疗/护理/美容/保健/卫生服务",
            "酒店/餐饮",
            "旅游/度假"
        ]
    },
    {
        title: "文化|传媒|娱乐|体育",
        subareas: [
            "媒体/出版/影视/文化传播",
            "娱乐/体育/休闲"
        ]
    },
    {
        title: "能源|矿产|环保",
        subareas: [
            "能源/矿产/采掘/冶炼",
            "石油/石化/化工",
            "电气/电力/水利",
            "环保"
        ]
    },
    {
        title: "政府|非盈利机构",
        subareas: [
            "政府/公共事业/非盈利机构",
            "学术/科研"
        ]
    },
    {
        title: "农|林|牧|渔|其他",
        subareas: [
            "农/林/牧/渔",
            "跨领域经营",
            "其他"
        ]
    }
];

(function() {
    for (var i = 0; i < workareas.length; i++) {
        workareas[i].subareas.push("不限");
    }
    var exArea = {
        title: "不限",
        subareas: ["不限"]
    };
    workareas.push(exArea);
})()
window.workareas = workareas;

// function maxareacalculate() {
//     var maxarea = "";
//     var maxsubarea = "";
//     for (var i = 0; i < workareas.length; i++) {
//         if (workareas[i].title.length > maxarea.length) {
//             maxarea = workareas[i].title;
//         }
//         for (var j = 0; j < workareas[i].subareas.length; j++) {
//             if (workareas[i].subareas[j].length > maxsubarea.length) {
//                 maxsubarea = workareas[i].subareas[j];
//             }
//         }
//     }
//     console.log(maxarea, maxarea.length);
//     console.log(maxsubarea, maxsubarea.length);
// }
// maxareacalculate();