var posArray = [
     {
          name:"销售|客服|市场",
          subpos:[
               {
                    name:"销售业务",
                    subpos:["销售代表","客户代表","销售工程师","渠道/分销专员","区域销售专员/助理","业务拓展专员/助理","大客户销售代表","电话销售","网络/在线销售","团购业务员","销售业务跟单","医药代表","经销商","招商经理","招商主管","招商专员","会籍顾问","其他"]
               },
               {
                    name:"销售管理",
                    subpos:["销售总监","销售经理","销售主管","客户总监","客户经理","客户主管","渠道/分销总监","渠道/分销经理/主管","区域销售总监","区域销售经理/主管","业务拓展经理/主管","大客户销售经理","团购经理/主管","医药销售经理/主管","其他"]
               },
               {
                    name:"销售行政/商务",
                    subpos:["销售行政经理/主管","销售行政专员/助理","销售运营经理/主管","销售运营专员/助理","商务经理/主管","商务专员/助理","销售培训师/讲师","销售数据分析","业务分析经理/主管","业务分析专员/助理","其他",]
               },
               {
                    name:"客服/售前/售后技术",
                    subpos:["客户服务总监","客户服务经理","客户服务主管","客户服务专员/助理","客户关系/投诉协调人员","客户咨询热线/呼叫中心人员","网络/在线客服","售前/售后技术支持管理","售前/售后技术支持工程师","VIP专员","呼叫中心客服","其他",]
               },
               {
                    name:"市场",
                    subpos:["市场总监","市场经理","市场主管","市场专员/助理","市场营销经理","市场营销主管","市场销售专员/助理","业务拓展经理/主管","业务拓展专员/助理","产品经理","产品主管","产品专员/助理","品牌经理","品牌主管","品牌专员/助理","市场策划/企划经理/主管","市场策划/企划专员/助理","市场文案策划","活动策划","活动执行","促销主管/督导","促销员","网站推广","SEO/SEM","学术推广","选址拓展/新店开发","市场调研与分析","品牌策划","市场通路专员","促销经理","其他",]
               },
               {
                    name:"公关/媒介",
                    subpos:["公关总监","公关经理/主管","公关专员/助理","媒介经理/主管","媒介专员/助理","媒介策划/主管","政府事务管理","媒介销售","活动执行","其他",]
               },
               {
                    name:"广告/会展",
                    subpos:["广告创意/总监","广告创意/设计经理/主管","广告创意/设计师","广告文案策划","广告美术指导","广告制作执行","广告客户总监","广告客户经理","广告客户主管","广告客户代表","广告/会展业务拓展","会展策划/设计","会务经理/主管","会务专员/助理","广告/会展项目管理","企业/业务发展经理","其他",]
               }
          ]
     },
     {
          name:"财务|人力资源|行政",
          subpos:[
               {
                    name:"财务/审计/税务",
                    subpos:["首席财务官CFO","财务总监","财务经理","财务主管/总帐主管","财务顾问","财务助理","财务分析经理/主管","财务分析员","会计经理/主管","会计/会计师","会计助理/文员","出纳员","审计经理/主管","审计专员/助理","税务经理/主管","税务专员/助理","成本经理/主管","成本会计","资产/资金管理","资金专员","统计员","固定资产会计","成本管理员","其他",]
               },
               {
                    name:"人力资源",
                    subpos:["人力资源总监","人力资源经理","人力资源主管","人力资源专员/助理","培训经理/主管","培训专员/助理","招聘经理/主管","招聘专员/助理","薪酬福利经理/主管","薪酬福利专员/助理","绩效考核经理/主管","绩效考核专员/助理","员工关系/企业文化/工会","企业培训师/讲师","人事信息系统(HRIS)管理","猎头顾问/助理","其他",]
               },
               {
                    name:"行政/后勤/文秘",
                    subpos:["行政总监","行政经理/主管/办公室主任","行政专员/助理","助理/秘书/文员","前台/总机/接待","文档/资料管理","电脑操作/打字/录入员","后勤人员","后勤人员","图书管理员","内勤人员","其他",]
               }
          ]
     },
     {
          name:"项目|质量|高级管理",
          subpos:[
               {
                    name:"项目管理/项目协调",
                    subpos:["项目总监","项目经理/项目主管","项目专员/助理","广告/会展项目管理","IT项目总监","IT项目经理/主管","IT项目执行/协调人员","通信项目管理","房地产项目配套工程师","房地产项目管理","证券/投资项目管理","保险项目经理/主管","生产项目经理/主管","生产项目工程师","汽车工程项目管理","电子/电器项目管理","服装/纺织/皮革项目管理","医药项目管理","化工项目管理","物流/仓储项目管理","咨询项目管理","能源/矿产项目管理","项目计划合约专员","项目招投标","其他",]
               },
               {
                    name:"质量管理/安全防护",
                    subpos:["质量管理/测试经理","质量管理/测试主管","质量管理/测试工程师","质量检验员/测试员","化验/检验","认证/体系工程师/审核员","环境/健康/安全经理/主管","环境/健康/安全工程师","供应商/采购质量管理","安全管理","安全消防","可靠度工程师","故障分析工程师","采购材料/设备管理","其他",]
               },
               {
                    name:"高级管理",
                    subpos:["首席执行官CEO/总裁/总经理","首席运营官COO","首席财务官CFO","CTO/CIO","副总裁/副总经理","分公司/代表处负责人","部门/事业部管理","总裁助理/总经理助理","总编/副总编","行长/副行长","工厂厂长/副厂长","校长/副校长","合伙人","办事处首席代表","投资者关系","企业秘书/董事会秘书","策略发展总监","运营总监","其他",]
               }
          ]
     },
     {
          name:"IT|互联网|通信",
          subpos:[
               {
                    name:"软件/互联网开发/系统开发",
                    subpos:["高级软件工程师","软件工程师","软件研发工程师","需求工程师","系统架构设计师","系统分析员","数据库开发工程师","ERP技术/开发应用","互联网软件工程师","手机软件开发工程师","嵌入式软件开发","移动互联网开发","WEB前端开发","语音/视频/图形开发","用户界面（UI）设计","用户体验（UE/UX）设计","网页设计/制作/美工","游戏设计/开发","游戏策划","游戏界面设计","系统集成工程师","算法工程师","仿真应用工程师","计算机辅助设计师","网站架构设计师","IOS开发工程师","Android开发工程师","Java开发工程师","PHP开发工程师","C语言开发工程师","脚本开发工程师","其他",]
               },
               {
                    name:"硬件开发",
                    subpos:["高级硬件工程师","硬件工程师","嵌入式硬件开发","其他",]
               },
               {
                    name:"互联网产品/运营管理",
                    subpos:["互联网产品经理/主管","互联网产品专员/助理","电子商务经理/主管","电子商务专员/助理","网络运营管理","网络运营专员/助理","网站编辑","SEO/SEM","产品总监","运营总监","网站运营总监/经理","电子商务总监","新媒体运营","网店店长","网店推广","网店客服","网店运营","网店管理员","运营主管/专员","微信推广","淘宝/微信运营专员/主管","产品运营","数据运营","市场运营","内容运营","其他",]
               },
               {
                    name:"IT质量管理/测试/配置管理",
                    subpos:["IT质量管理经理/主管","IT质量管理工程师","系统测试","软件测试","硬件测试","配置管理工程师","信息技术标准化工程师","标准化工程师","游戏测试","手机维修","其他",]
               },
               {
                    name:"IT运维/技术支持",
                    subpos:["信息技术经理/主管","信息技术专员","IT技术支持/维护经理","IT技术支持/维护工程师","系统工程师","系统管理员","网络工程师","网络管理员","网络与信息安全工程师","数据库管理员","计算机硬件维护工程师","ERP实施顾问","IT技术文员/助理","IT文档工程师","Helpdesk","其他",]
               },
               {
                    name:"IT管理/项目协调",
                    subpos:["CTO/CIO","IT技术/研发总监","IT技术/研发经理/主管","IT项目总监","IT项目经理/主管","IT项目执行/协调人员","其他",]
               },
               {
                    name:"电信/通信技术开发及应用",
                    subpos:["通信技术工程师","通信研发工程师","数据通信工程师","移动通信工程师","电信网络工程师","电信交换工程师","有线传输工程师","无线/射频通信工程师","通信电源工程师","通信标准化工程师","通信项目管理","增值产品开发工程师","其他",]
               }
          ]
     },
     {
          name:"房产|建筑|物业管理",
          subpos:[
               {
                    name:"房地产开发/经纪/中介",
                    subpos:["房地产项目策划经理/主管","房地产项目策划专员/助理","房地产项目招投标","房地产项目开发报建","房地产项目配套工程师","房地产销售经理","房地产销售主管","房地产销售/置业顾问","房地产评估","房地产中介/交易","房地产项目管理","房地产资产管理","监察人员","地产店长/经理","房地产内勤","房地产客服","其他",]
               },
               {
                    name:"土木/建筑/装修/市政工程",
                    subpos:["高级建筑工程师/总工","建筑工程师","建筑设计师","土木/土建/结构工程师","岩土工程","建筑制图","建筑工程测绘/测量","道路/桥梁/隧道工程技术","水利/港口工程技术","架线和管道工程技术","给排水/暖通/空调工程","智能大厦/布线/弱电/安防","室内装潢设计","幕墙工程师","园林/景观设计","城市规划与设计","市政工程师","工程监理/质量管理","工程造价/预结算","工程资料管理","建筑施工现场管理","施工队长","施工员","建筑工程安全管理","软装设计师","工程总监","土建勘察","硬装设计师","橱柜设计师","其他",]
               },
               {
                    name:"物业管理",
                    subpos:["物业经理/主管","物业管理专员/助理","物业租赁/销售","物业维修","物业顾问","物业招商管理","监控维护","其他",]
               }
          ]
     },
     {
          name:"金融",
          subpos:[
               {
                    name:"银行",
                    subpos:["行长/副行长","银行经理/主任","银行大堂经理","银行客户总监","银行客户经理","银行客户主管","银行客户代表","银行客户服务","综合业务经理/主管","综合业务专员/助理","银行会计/柜员","公司业务","个人业务","银行卡/电子银行业务推广","信贷管理/资信评估/分析","信审核查","外汇交易","进出口/信用证结算","清算人员","风险控制","个人业务部门经理/主管","公司业务部门经理/主管","高级客户经理/客户经理","信用卡销售","银行柜员","其他",]
               },
               {
                    name:"证券/期货/投资管理",
                    subpos:["证券总监/部门经理","证券/期货/外汇经纪人","证券/投资客户总监","证券/投资客户经理","证券/投资客户主管","证券/投资客户代表","证券分析/金融研究","投资/理财服务","投资银行业务","融资总监","融资经理/主管","融资专员/助理","股票/期货操盘手","资产评估","风险管理/控制/稽查","储备经理人","证券/投资项目管理","金融/经济研究员","金融产品经理","金融产品销售","基金项目经理","金融服务经理","投资经理","投资银行财务分析","金融租赁","其他",]
               },
               {
                    name:"保险",
                    subpos:["保险业务管理","保险代理/经纪人/客户经理","保险顾问/财务规划师","保险产品开发/项目策划","保险培训师","保险契约管理","核保理赔","汽车定损/车险理赔","保险精算师","客户服务/续期管理","保险内勤","保险项目经理/主管","储备经理人","理财顾问/财务规划师","保险电销","保险核安","其他",]
               },
               {
                    name:"信托/担保/拍卖/典当",
                    subpos:["信托服务","担保业务","拍卖师","典当业务","珠宝/收藏品鉴定","其他",]
               }
          ]
     },
     {
          name:"采购|贸易|交通|物流",
          subpos:[
               {
                    name:"采购/贸易",
                    subpos:["采购总监","采购经理/主管","采购专员/助理","供应商开发","供应链管理","买手","外贸/贸易经理/主管","外贸/贸易专员/助理","贸易跟单","报关员","业务跟单经理","高级业务跟单","助理业务跟单","国际贸易主管/专员","其他",]
               },
               {
                    name:"交通运输服务",
                    subpos:["机动车司机/驾驶","列车驾驶/操作","船舶驾驶/操作","飞机驾驶/操作","公交/地铁乘务","列车乘务","船舶乘务","船员/水手","航空乘务","地勤人员","安检员","驾驶教练","交通管理员","船长","代驾","其他",]
               },
               {
                    name:"物流/仓储",
                    subpos:["物流总监","物流经理/主管","物流专员/助理","货运代理","运输经理/主管","快递员/速递员","水运/空运/陆运操作","集装箱业务","报关员","单证员","仓库经理/主管","仓库/物料管理员","理货/分拣/打包","物流/仓储调度","物流/仓储项目管理","搬运工","集装箱维护","集装箱操作","物流销售","供应链总监","供应链经理/主管","物料经理","物料主管/专员","项目经理/主管","海关事务管理","船务/空运陆运操作","订单处理员","水运/陆运/空运销售","其他",]
               }
          ]
     },
     {
          name:"生产|制造",
          subpos:[
               {
                    name:"生产管理/运营",
                    subpos:["工厂厂长/副厂长","生产总监","生产经理/车间主任","生产主管/督导/组长","生产运营管理","生产项目经理/主管","生产项目工程师","产品管理","生产计划","制造工程师","工艺/制程工程师","工业工程师","生产设备管理","生产物料管理（PMC）","包装工程师","技术文档工程师","总工程师/副总工程师","生产文员","营运主管","营运经理","设备主管","化验师","生产跟单","其他",]
               },
               {
                    name:"电子/电器/半导体/仪器仪表",
                    subpos:["电子技术研发工程师",
                              "电子/电器工程师",
                              "电器研发工程师",
                              "电子/电器工艺/制程工程师",
                              "电路工程师/技术员",
                              "模拟电路设计/应用工程师",
                              "版图设计工程师",
                              "集成电路IC设计/应用工程师",
                              "IC验证工程师",
                              "电子元器件工程师",
                              "射频工程师",
                              "无线电工程师",
                              "激光/光电子技术",
                              "光源/照明工程师",
                              "变压器与磁电工程师",
                              "电池/电源开发",
                              "家用电器/数码产品研发",
                              "空调工程/设计",
                              "音频/视频工程师/技术员",
                              "安防系统工程师",
                              "电子/电器设备工程师",
                              "电子/电器维修/保养",
                              "电子/电器项目管理",
                              "电气工程师",
                              "电气设计",
                              "电气线路设计",
                              "线路结构设计",
                              "半导体技术",
                              "仪器/仪表/计量工程师",
                              "自动化工程师",
                              "现场应用工程师（FAE）",
                              "测试/可靠性工程师",
                              "电子工程师/技术员",
                              "电声/音响工程师/技术员",
                              "其他",
                              ]
               },
               {
                    name:"汽车制造",
                    subpos:["汽车动力系统工程师",
                    "汽车底盘/总装工程师",
                    "车身设计工程师",
                    "汽车电子工程师",
                    "汽车机械工程师",
                    "汽车零部件设计师",
                    "汽车装配工艺工程师",
                    "安全性能工程师",
                    "汽车工程项目管理",
                    "汽车机构工程师",
                    "汽车电工",
                    "售后服务/客户服务",
                    "加油站工作员",
                    "发动机/总装工程师",
                    "其他",
                    ]
               },
               {
                    name:"汽车销售与服务",
                    subpos:["汽车销售",
                    "汽车零配件销售",
                    "汽车售后服务/客户服务",
                    "汽车维修/保养",
                    "汽车质量管理/检验检测",
                    "汽车定损/车险理赔",
                    "汽车装饰美容",
                    "二手车评估师",
                    "4S店管理",
                    "其他",
                    ]
               },
               {
                    name:"机械设计/制造/维修",
                    subpos:["工程机械经理",
                    "工程机械主管",
                    "机械设备经理",
                    "机械设备工程师",
                    "机械工程师",
                    "机械设计师",
                    "机械制图员",
                    "机械研发工程师",
                    "机械结构工程师",
                    "机械工艺/制程工程师",
                    "气动工程师",
                    "CNC/数控工程师",
                    "模具工程师",
                    "夹具工程师",
                    "注塑工程师",
                    "铸造/锻造工程师/技师",
                    "机电工程师",
                    "材料工程师",
                    "机械维修/保养",
                    "飞机设计与制造",
                    "飞机维修/保养",
                    "列车设计与制造",
                    "列车维修/保养",
                    "船舶设计与制造",
                    "船舶维修/保养",
                    "技术研发工程师",
                    "技术研发经理/主管",
                    "产品策划工程师",
                    "项目管理",
                    "实验室负责人/工程师",
                    "工业工程师",
                    "维修经理/主管",
                    "装配工程师/客户经理",
                    "焊接工程师/技师",
                    "冲压工程师/技师",
                    "锅炉工程师/技师",
                    "光伏系统工程师",
                    "汽车/摩托车工程师",
                    "轨道交通工程师/技术员",
                    "数控操作",
                    "数控编程",
                    "无损检测工程师",
                    "浮法操作工(玻璃技术)",
                    "地铁轨道设计",
                    "机修工",
                    "工装工程师",
                    "其他",
                    ]
               },
               {
                    name:"服装/纺织/皮革设计",
                    subpos:["服装/纺织品设计",
                    "服装打样/制版",
                    "服装/纺织/皮革工艺师",
                    "电脑放码员",
                    "裁床",
                    "样衣工",
                    "面料辅料开发/采购",
                    "服装/纺织/皮革跟单",
                    "服装/纺织品/皮革销售",
                    "服装/纺织品/皮革质量管理",
                    "服装/纺织/皮革项目管理",
                    "服装/纺织设计总监",
                    "纸样师/车板师",
                    "剪裁工",
                    "缝纫工",
                    "纺织工/针织工",
                    "配色工",
                    "印染工",
                    "漂染工",
                    "挡车工",
                    "浆纱工",
                    "整经工",
                    "鞋子设计",
                    "细纱工",
                    "其他",
                    ]
               },
               {
                    name:"技工/操作工",
                    subpos:["车床/磨床/铣床/冲床工",
                    "模具工",
                    "钳工/机修工/钣金工",
                    "电焊工/铆焊工",
                    "电工",
                    "水工/木工/油漆工",
                    "铲车/叉车工",
                    "空调工/电梯工/锅炉工",
                    "汽车维修/保养",
                    "普工/操作工",
                    "技工",
                    "组装工",
                    "包装工",
                    "电力线路工",
                    "拖压工",
                    "仪表工",
                    "电镀工",
                    "喷塑工",
                    "电梯工",
                    "吊车司机/卡车司机",
                    "洗车工",
                    "洗碗工",
                    "瓦工",
                    "万能工",
                    "钢筋工",
                    "学徒工",
                    "其他",
                    ]
               },
               {
                    name:"生物/制药/医疗器械",
                    subpos:["医药代表",
                    "医药销售经理/主管",
                    "药品市场推广经理/主管",
                    "药品市场推广专员/助理",
                    "医疗器械销售",
                    "医疗器械推广",
                    "医药学术推广",
                    "医药招商",
                    "医药项目管理",
                    "医药项目招投标管理",
                    "生物工程/生物制药",
                    "药品研发",
                    "医疗器械研发",
                    "临床研究员",
                    "临床协调员",
                    "临床数据分析员",
                    "医药化学分析",
                    "医药技术研发管理人员",
                    "药品注册",
                    "医疗器械注册",
                    "药品生产/质量管理",
                    "医疗器械生产/质量管理",
                    "医疗器械维修/保养",
                    "临床推广经理",
                    "医药技术研发人员",
                    "其他",
                    ]
               },
               {
                    name:"化工",
                    subpos:["化工工程师",
                    "化工研发工程师",
                    "化学分析",
                    "化学技术应用",
                    "化学操作",
                    "化学制剂研发",
                    "油漆/化工涂料研发",
                    "塑料工程师",
                    "化学实验室技术员/研究员",
                    "化工项目管理",
                    "橡胶工程师",
                    "配色技术员",
                    "化妆品研发",
                    "造纸研发",
                    "化学/化工技术总监",
                    "其他",
                    ]
               }
          ]
     },
     {
          name:"传媒|印刷|艺术|设计",
          subpos:[
               {
                    name:"影视/媒体/出版/印刷",
                    subpos:["经纪人/星探",
                    "放映管理",
                    "作家/编剧/撰稿人",
                    "文字编辑/组稿",
                    "美术编辑/美术设计",
                    "记者/采编",
                    "电话采编",
                    "文案策划",
                    "校对/录入",
                    "发行管理",
                    "排版设计",
                    "印刷排版/制版",
                    "印刷操作",
                    "编辑出版",
                    "主笔设计师",
                    "放映员",
                    "灯光师",
                    "艺术/设计总监",
                    "影视策划/制作人员",
                    "调色员",
                    "烫金工",
                    "晒版员",
                    "装订工",
                    "数码直印/菲林输出",
                    "调墨技师",
                    "电分操作员",
                    "打稿机操作员",
                    "切纸机操作工",
                    "裱胶工",
                    "复卷工",
                    "压痕工",
                    "印刷机械机长",
                    "转播工程师",
                    "视频主播",
                    "其他",
                    ]
               },
               {
                    name:"艺术/设计",
                    subpos:["设计管理人员",
                    "艺术/设计总监",
                    "绘画",
                    "原画师",
                    "CAD设计/制图",
                    "平面设计",
                    "三维/3D设计/制作",
                    "Flash设计/开发",
                    "特效设计",
                    "视觉设计",
                    "用户体验（UE/UX）设计",
                    "美术编辑/美术设计",
                    "多媒体/动画设计",
                    "包装设计",
                    "家具设计",
                    "家居用品设计",
                    "工艺品/珠宝设计",
                    "玩具设计",
                    "店面/展览/展示/陈列设计",
                    "工业设计",
                    "游戏界面设计",
                    "园林景观设计师",
                    "平面设计总监",
                    "平面设计经理/主管",
                    "其他",
                    ]
               }
          ]
     },
     {
          name:"咨询|法律|教育|翻译",
          subpos:[
               {
                    name:"咨询/顾问/调研/数据分析",
                    subpos:["咨询总监",
                    "咨询经理/主管",
                    "咨询顾问/咨询员",
                    "专业顾问",
                    "调研员",
                    "数据分析师",
                    "情报信息分析",
                    "猎头顾问/助理",
                    "咨询项目管理",
                    "咨询师",
                    "其他",
                    ]
               },
               {
                    name:"教育/培训",
                    subpos:["幼教",
                    "小学教师",
                    "初中教师",
                    "高中教师",
                    "大学教师",
                    "职业技术教师",
                    "家教",
                    "兼职教师",
                    "理科教师",
                    "文科教师",
                    "外语教师",
                    "音乐教师",
                    "美术教师",
                    "体育老师/教练",
                    "校长/副校长",
                    "教学/教务管理人员",
                    "培训督导",
                    "培训师/讲师",
                    "培训助理/助教",
                    "教育产品开发",
                    "培训策划",
                    "培训/招生/课程顾问",
                    "大学教授",
                    "舞蹈老师",
                    "外籍教师",
                    "特教(特殊教育)",
                    "其他",
                    ]
               },
               {
                    name:"律师/法务/合规",
                    subpos:["法务经理/主管",
                    "法务专员/助理",
                    "律师",
                    "律师助理",
                    "企业律师/合规经理/主管",
                    "企业律师/合规顾问",
                    "知识产权/专利顾问/代理人",
                    "合同管理",
                    "合规经理",
                    "其他",
                    ]
               },
               {
                    name:"翻译（口译与笔译）",
                    subpos:["英语翻译",
                    "法语翻译",
                    "日语翻译",
                    "德语翻译",
                    "俄语翻译",
                    "西班牙语翻译",
                    "意大利语翻译",
                    "葡萄牙语翻译",
                    "阿拉伯语翻译",
                    "韩语/朝鲜语翻译",
                    "其他语种翻译",
                    ]
               }
          ]
     },
     {
          name:"服务业",
          subpos:[
               {
                    name:"商超/酒店/娱乐管理/服务",
                    subpos:["店长/卖场管理",
                    "楼面管理",
                    "品牌/连锁招商管理",
                    "大堂经理/领班",
                    "酒店管理",
                    "客房管理",
                    "收银主管",
                    "收银员",
                    "店员/营业员/导购员",
                    "理货员",
                    "促销主管/督导",
                    "促销员",
                    "品类管理",
                    "前厅接待/礼仪/迎宾",
                    "预订员",
                    "行李员",
                    "服务员",
                    "防损员/内保",
                    "奢侈品销售",
                    "主持人/司仪",
                    "客房服务员",
                    "生鲜食品加工/处理",
                    "酒店试睡员",
                    "门卫",
                    "质量管理",
                    "其他",
                    ]
               },
               {
                    name:"旅游/度假/出入境服务",
                    subpos:["旅游产品销售",
                    "旅游顾问",
                    "导游/票务",
                    "旅游计划调度",
                    "旅游产品/线路策划",
                    "签证业务办理",
                    "潜水员",
                    "海外游计调",
                    "水族馆表演演员",
                    "其他",
                    ]
               },
               {
                    name:"烹饪/料理/食品研发",
                    subpos:["厨师/面点师",
                    "食品加工/处理",
                    "调酒师/茶艺师/咖啡师",
                    "营养师",
                    "厨工",
                    "食品/饮料研发",
                    "食品/饮料检验",
                    "餐厅领班",
                    "餐厅服务员",
                    "行政主厨",
                    "中餐厨师",
                    "西餐厨师",
                    "日式厨师",
                    "西点师",
                    "厨师助理/学徒",
                    "送餐员",
                    "传菜员",
                    "烧烤师",
                    "品酒师",
                    "杂工",
                    "其他",
                    ]
               },
               {
                    name:"保健/美容/美发/健身",
                    subpos:["美发/发型师",
                    "化妆师",
                    "美容师/美甲师",
                    "美容顾问(BA)",
                    "健身/美体/舞蹈教练",
                    "按摩/足疗",
                    "救生员",
                    "美发培训师",
                    "游泳教练",
                    "高尔夫教练",
                    "瑜伽教练",
                    "户外/游戏教练",
                    "美体师",
                    "美容整形师",
                    "其他",
                    ]
               },
               {
                    name:"医院/医疗/护理",
                    subpos:["医疗管理人员",
                    "综合门诊/全科医生",
                    "内科医生",
                    "外科医生",
                    "儿科医生",
                    "牙科医生",
                    "美容整形科医生",
                    "中医科医生",
                    "麻醉医生",
                    "心理医生",
                    "眼科医生/验光师",
                    "医学影像/放射科医师",
                    "化验/检验科医师",
                    "药房管理/药剂师",
                    "理疗师",
                    "兽医",
                    "护士/护理人员",
                    "营养师",
                    "针灸/推拿",
                    "验光师",
                    "公共卫生/疾病监控",
                    "护理主任/护士长",
                    "院长",
                    "专科医生",
                    "其他",
                    ]
               },
               {
                    name:"社区/居民/家政服务",
                    subpos:["保安经理",
                    "保安",
                    "家政人员",
                    "婚礼/庆典策划服务",
                    "宠物护理和美容",
                    "保姆/母婴护理",
                    "搬运工",
                    "保洁",
                    "钟点工",
                    "月嫂",
                    "家电维修",
                    "其他",
                    ]
               }
          ]
     },
     {
          name:"能源|环保|农业|科研",
          subpos:[
               {
                    name:"能源/矿产/地质勘查",
                    subpos:["石油/天然气技术人员",
                    "空调/热能工程师",
                    "核力/火力工程师",
                    "水利/水电工程师",
                    "电力工程师/技术员",
                    "地质勘查/选矿/采矿",
                    "能源/矿产项目管理",
                    "电力系统研发工程师",
                    "电力电子研发工程师",
                    "控制保护研发工程师",
                    "其他",
                    ]
               },
               {
                    name:"环境科学/环保",
                    subpos:["环保技术工程师",
                    "环境评价工程师",
                    "环境监测工程师",
                    "水处理工程师",
                    "固废处理工程师",
                    "废气处理工程师",
                    "生态治理/规划",
                    "环境管理/园林景区保护",
                    "其他",
                    ]
               },
               {
                    name:"农/林/牧/渔业",
                    subpos:["插花设计师",
                    "农艺师",
                    "林业技术人员",
                    "园艺师",
                    "畜牧师",
                    "动物育种/养殖",
                    "动物营养/饲料研发",
                    "饲料销售",
                    "其他",
                    ]
               },
               {
                    name:"公务员/事业单位/科研机构",
                    subpos:["公务员/事业单位人员",
                    "科研管理人员",
                    "科研人员",
                    "其他",
                    ]
               }
          ]
     },
     {
          name:"兼职|实习|社工|其他",
          subpos:[
               {
                    name:"实习生/培训生/储备",
                    subpos:["实习生",
                    "培训生",
                    "储备干部",
                    "其他",
                    ]
               },
               {
                    name:"志愿者/社会工作者",
                    subpos:["志愿者/义工",
                    "社会工作者/社工",
                    "其他",
                    ]
               },
               {
                    name:"兼职/临时",
                    subpos:["兼职",
                    "临时",
                    "国外求职",
                    "其他",
                    ]
               },
               {
                    name:"其他",
                    subpos:["其他"]
               }
          ]
     }
];

(function(){
     for(var i=0; i<posArray.length;i++){
          for(var j=0; j<posArray[i].subpos.length;j++){
               posArray[i].subpos[j].subpos.push("不限");
          }
          var expos2={
               name:"不限",
               subpos:["不限"]
          }
          posArray[i].subpos.push(expos2);
     };
     var expos1= {
          name:"不限",
          subpos:[
               {
                    name:"不限",
                    subpos:["不限"]
               }
          ]
     };
     posArray.push(expos1);
})()

function maxposcalculate(){
     var maxpos1="";
     var maxpos2="";
     var maxpos3="";
     for(var i=0;i<posArray.length;i++){
          if(posArray[i].name.length>maxpos1.length){
               maxpos1 = posArray[i].name;
          }
          for(var j=0;j<posArray[i].subpos.length;j++){
               if(posArray[i].subpos[j].name.length>maxpos2.length){
                    maxpos2 = posArray[i].subpos[j].name;
               }
               for(var k=0;k<posArray[i].subpos[j].subpos.length;k++){
                    if(posArray[i].subpos[j].subpos[k].length>maxpos3.length){
                         maxpos3 = posArray[i].subpos[j].subpos[k];
                    }
               }
          }
     }
     console.log(maxpos1,maxpos1.length);
     console.log(maxpos2,maxpos2.length);
     console.log(maxpos3,maxpos3.length);
}
// maxposcalculate();
// })()
