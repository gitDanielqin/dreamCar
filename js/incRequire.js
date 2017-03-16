var addrData =`[
{"name":"北京市","citys":[
{"city":"北京辖区","conts":["昌平区", "朝阳区", "崇文区", "大兴区", "东城区", "房山区", "丰台区", "海淀区", "怀柔区", "门头沟区", "平谷区", "石景山区", "顺义区", "通州区", "西城区", "宣武区"]},
{"city":"北京辖县","conts":["密云县", "延庆县"]}
]},
{"name":"上海市","citys":[
{"city":"上海辖区","conts":["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区"]},
{"city":"上海辖县","conts":["崇明县"]}
]},
{"name":"广东省","citys":[
{"city":"广州市","conts":["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区"]},
{"city":"韶关市","conts":["市辖区", "乐昌市", "南雄市", "曲江区", "仁化县", "乳源瑶族自治县", "始兴县", "翁源县", "武江区", "新丰县", "浈江区"]},
{"city":"深圳市","conts":["市辖区", "宝安区", "福田区", "龙岗区", "罗湖区", "南山区", "盐田区"]},
{"city":"珠海市","conts":["市辖区", "斗门区", "金湾区", "香洲区"]},
{"city":"汕头市","conts":["市辖区", "潮阳区", "潮南区", "澄海区", "濠江区", "金平区", "龙湖区", "南澳县"]},
{"city":"佛山市","conts":["市辖区", "禅城区", "高明区", "南海区", "三水区", "顺德区"]},
{"city":"江门市","conts":["市辖区", "恩平市", "鹤山市", "江海区", "开平市", "蓬江区", "台山市", "新会区"]},
{"city":"湛江市","conts":["市辖区", "赤坎区", "雷州市", "廉江市", "麻章区", "坡头区", "遂溪县", "吴川市", "霞山区", "徐闻县"]},
{"city":"茂名市","conts":["市辖区", "电白县", "高州市", "化州市", "茂南区", "茂港区", "信宜市"]},
{"city":"肇庆市","conts":["市辖区", "德庆县", "鼎湖区", "端州区", "封开县", "高要市", "广宁县", "怀集县", "四会市"]},
{"city":"惠州市","conts":["市辖区", "博罗县", "惠城区", "惠阳区", "惠东县", "龙门县"]},
{"city":"梅州市","conts":["市辖区", "大埔县", "丰顺县", "蕉岭县", "梅江区", "梅县", "平远县", "五华县", "兴宁市"]},
{"city":"汕尾市","conts":["市辖区", "城区", "海丰县", "陆河县", "陆丰市"]},
{"city":"河源市","conts":["市辖区", "东源县", "和平县", "连平县", "龙川县", "源城区", "紫金县"]},
{"city":"阳江市","conts":["市辖区", "江城区", "阳西县", "阳东县", "阳春市"]},
{"city":"清远市","conts":["市辖区", "佛冈县", "连山壮族瑶族自治县", "连南瑶族自治县", "连州市", "清城区", "清新县", "阳山县", "英德市"]},
{"city":"东莞市","conts":["市辖区"]},
{"city":"中山市","conts":["市辖区"]},
{"city":"潮州市","conts":["市辖区", "潮安县", "饶平县", "湘桥区"]},
{"city":"揭阳市","conts":["市辖区", "惠来县", "揭东县", "揭西县", "普宁市", "榕城区"]},
{"city":"云浮市","conts":["市辖区", "罗定市", "新兴县", "郁南县", "云城区", "云安县"]}
]},
{"name":"安徽省","citys":[
{"city":"合肥市","conts":["市辖区", "包河区", "长丰县", "肥东县", "肥西县", "庐阳区", "蜀山区", "瑶海区"]},
{"city":"芜湖市","conts":["市辖区", "繁昌县", "镜湖区", "鸠江区", "马塘区", "南陵县", "芜湖县", "新芜区"]},
{"city":"蚌埠市","conts":["市辖区", "蚌山区", "固镇县", "淮上区", "怀远县", "龙子湖区", "五河县", "禹会区"]},
{"city":"淮南市","conts":["市辖区", "八公山区", "大通区", "凤台县", "潘集区", "田家庵区", "谢家集区"]},
{"city":"马鞍山市","conts": ["市辖区", "当涂县", "花山区", "金家庄区", "雨山区"]},
{"city":"淮北市","conts":["市辖区", "杜集区", "烈山区", "濉溪县", "相山区"]},
{"city":"铜陵市","conts":["市辖区", "郊区", "狮子山区", "铜官山区", "铜陵县"]},
{"city":"安庆市","conts":["市辖区", "枞阳县", "大观区", "怀宁县", "郊区", "潜山县", "太湖县", "桐城市", "望江县", "宿松县", "迎江区", "岳西县"]},
{"city":"黄山市","conts":["市辖区", "黄山区", "徽州区", "祁门县", "屯溪区", "歙县", "休宁县", "黟县"]},
{"city":"滁州市","conts":["市辖区", "定远县", "凤阳县", "来安县", "琅琊区", "明光市", "南谯区", "全椒县", "天长市"]},
{"city":"阜阳市","conts":["市辖区", "阜南县", "界首市", "临泉县", "太和县", "颍州区", "颍东区", "颍泉区", "颍上县"]},
{"city":"宿州市","conts":["市辖区", "砀山县", "灵璧县", "泗县", "萧县", "墉桥区"]},
{"city":"巢湖市","conts":["市辖区", "含山县", "和县", "居巢区", "庐江县", "无为县"]},
{"city":"六安市","conts":["市辖区", "霍邱县", "霍山县", "金安区", "金寨县", "寿县", "舒城县", "裕安区"]},
{"city":"亳州市","conts":["市辖区", "利辛县", "蒙城县", "谯城区", "涡阳县"]},
{"city":"池州市","conts":["市辖区", "东至县", "贵池区", "青阳县", "石台县"]},
{"city":"宣城市","conts":["市辖区", "广德县", "绩溪县", "泾县", "旌德县", "郎溪县", "宁国市", "宣州区"]}
]},
{"name":"重庆市","citys":[
{"city":"重庆辖区","conts":["巴南区", "北碚区", "长寿区", "大渡口区", "涪陵区", "江北区", "九龙坡区", "南岸区", "黔江区", "沙坪坝区", "双桥区", "万州区", "万盛区", "渝中区", "渝北区"]},
{"city":"重庆辖县","conts":["璧山县", "城口县", "大足县", "垫江县", "丰都县", "奉节县", "开县", "梁平县", "彭水苗族土家族自治县", "綦江县", "荣昌县", "石柱土家族自治县", "潼南县", "铜梁县", "巫山县", "巫溪县", "武隆县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "云阳县", "忠县"]},
{"city":"重庆辖市","conts":["合川市", "江津市", "南川市", "永川市"]}
]},
{"name":"福建省","citys":[
{"city":"福州市","conts":["市辖区", "仓山区", "长乐市", "福清市", "鼓楼区", "晋安区", "连江县", "罗源县", "马尾区", "闽侯县", "闽清县", "平潭县", "台江区", "永泰县"]},
{"city":"厦门市","conts":["市辖区", "海沧区", "湖里区", "集美区", "思明区", "同安区", "翔安区"]},
{"city":"莆田市","conts":["市辖区", "城厢区", "涵江区", "荔城区", "仙游县", "秀屿区"]},
{"city":"三明市","conts":["市辖区", "大田县", "建宁县", "将乐县", "梅列区", "明溪县", "宁化县", "清流县", "三元区", "沙县", "泰宁县", "尤溪县", "永安市"]},
{"city":"泉州市","conts":["市辖区", "安溪县", "德化县", "丰泽区", "惠安县", "金门县", "晋江市", "鲤城区", "洛江区", "南安市", "泉港区", "石狮市", "永春县"]},
{"city":"漳州市","conts":["市辖区", "长泰县", "东山县", "华安县", "龙文区", "龙海市", "南靖县", "平和县", "芗城区", "云霄县", "漳浦县", "诏安县"]},
{"city":"南平市","conts":["市辖区", "光泽县", "建瓯市", "建阳市", "浦城县", "邵武市", "顺昌县", "松溪县", "武夷山市", "延平区", "政和县"]},
{"city":"龙岩市","conts":["市辖区", "长汀县", "连城县", "上杭县", "武平县", "新罗区", "永定县", "漳平市"]},
{"city":"宁德市","conts":["市辖区", "福安市", "福鼎市", "古田县", "蕉城区", "屏南县", "寿宁县", "霞浦县", "柘荣县", "周宁县"]}
]},
{"name":"甘肃省","citys":[
{"city":"兰州市","conts":["市辖区", "安宁区", "城关区", "皋兰县", "红古区", "七里河区", "西固区", "永登县", "榆中县"]},
{"city":"嘉峪关市","conts":["市辖区"]},
{"city":"金昌市","conts":["市辖区", "金川区", "永昌县"]},
{"city":"白银市","conts":["市辖区", "白银区", "会宁县", "靖远县", "景泰县", "平川区"]},
{"city":"天水市","conts":["市辖区", "北道区", "甘谷县", "秦城区", "清水县", "秦安县", "武山县", "张家川回族自治县"]},
{"city":"武威市","conts":["市辖区", "古浪县", "凉州区", "民勤县", "天祝藏族自治县"]},
{"city":"张掖市","conts":["市辖区", "甘州区", "高台县", "临泽县", "民乐县", "山丹县", "肃南裕固族自治县"]},
{"city":"平凉市","conts":["市辖区", "崇信县", "华亭县", "泾川县", "静宁县", "崆峒区", "灵台县", "庄浪县"]},
{"city":"酒泉市","conts":["市辖区", "安西县", "阿克塞哈萨克族自治县", "敦煌市", "金塔县", "肃州区", "肃北蒙古族自治县", "玉门市"]},
{"city":"庆阳市","conts":["市辖区", "合水县", "环县", "华池县", "宁县", "庆城县", "西峰区", "正宁县", "镇原县"]},
{"city":"定西市","conts":["市辖区", "安定区", "临洮县", "陇西县", "岷县", "通渭县", "渭源县", "漳县"]},
{"city":"陇南市","conts":["市辖区", "成县", "宕昌县", "徽县", "康县", "礼县", "两当县", "文县", "武都区", "西和县"]},
{"city":"临夏自治州","conts":["东乡族自治县", "广河县", "和政县", "积石山保安族东乡族撒拉族自治县", "康乐县", "临夏市", "临夏县", "永靖县"]},
{"city":"甘南自治州","conts":["迭部县", "合作市", "临潭县", "碌曲县", "玛曲县", "夏河县", "舟曲县", "卓尼县"]}
]},
{"name":"广西区","citys":[
{"city":"南宁市","conts":["市辖区", "宾阳县", "横县", "江南区", "良庆区", "隆安县", "马山县", "青秀区", "上林县", "武鸣县", "西乡塘区", "兴宁区", "邕宁区"]},
{"city":"柳州市","conts":["市辖区", "城中区", "柳南区", "柳北区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县", "鱼峰区"]},
{"city":"桂林市","conts":["市辖区", "叠彩区", "恭城瑶族自治县", "灌阳县", "荔蒲县", "临桂县", "灵川县", "龙胜各族自治县", "平乐县", "七星区", "全州县", "象山区", "兴安县", "秀峰区", "雁山区", "阳朔县", "永福县", "资源县"]},
{"city":"梧州市","conts":["市辖区", "长洲区", "苍梧县", "岑溪市", "蝶山区", "蒙山县", "藤县", "万秀区"]},
{"city":"北海市","conts":["市辖区", "海城区", "合浦县", "铁山港区", "银海区"]},
{"city":"防城港市","conts":["市辖区", "东兴市", "防城区", "港口区", "上思县"]},
{"city":"钦州市","conts":["市辖区", "灵山县", "浦北县", "钦南区", "钦北区"]},
{"city":"贵港市","conts":["市辖区", "港北区", "港南区", "桂平市", "平南县", "覃塘区"]},
{"city":"玉林市","conts":["市辖区", "北流市", "博白县", "陆川县", "容县", "兴业县", "玉州区"]},
{"city":"百色市","conts":["市辖区", "德保县", "靖西县", "乐业县", "凌云县", "隆林各族自治县", "那坡县", "平果县", "田阳县", "田东县", "田林县", "西林县", "右江区"]},
{"city":"贺州市","conts":["市辖区", "八步区", "富川瑶族自治县", "昭平县", "钟山县"]},
{"city":"河池市","conts":["市辖区", "巴马瑶族自治县", "大化瑶族自治县", "东兰县", "都安瑶族自治县", "凤山县", "环江毛南族自治县", "金城江区", "罗城仫佬族自治县", "南丹县", "天峨县", "宜州市"]},
{"city":"来宾市","conts":["市辖区", "合山市", "金秀瑶族自治县", "武宣县", "象州县", "兴宾区", "忻城县"]},
{"city":"崇左市","conts":["市辖区", "大新县", "扶绥县", "江洲区", "龙州县", "宁明县", "凭祥市", "天等县"]}
]},
{"name":"贵州省","citys":[
{"city":"贵阳市","conts":["市辖区", "白云区", "花溪区", "开阳县", "南明区", "清镇市", "乌当区", "息烽县", "小河区", "修文县", "云岩区"]},
{"city":"六盘水市","conts":["六枝特区", "盘县", "水城县", "钟山区"]},
{"city":"遵义市","conts":["市辖区", "赤水市", "道真仡佬族苗族自治县", "凤冈县", "红花岗区", "汇川区", "湄潭县", "仁怀市", "绥阳县", "桐梓县", "务川仡佬族苗族自治县", "习水县", "余庆县", "正安县", "遵义县"]},
{"city":"安顺市","conts":["市辖区", "关岭布依族苗族自治县", "平坝县", "普定县", "西秀区", "镇宁布依族苗族自治县", "紫云苗族布依族自治县"]},
{"city":"铜仁地区","conts":["德江县", "江口县", "石阡县", "思南县", "松桃苗族自治县", "铜仁市", "万山特区", "沿河土家族自治县", "印江土家族苗族自治县", "玉屏侗族自治县"]},
{"city":"黔西南自治州","conts":["安龙县", "册亨县", "普安县", "晴隆县", "望谟县", "兴义市", "兴仁县", "贞丰县"]},
{"city":"毕节地区","conts":["毕节市", "大方县", "赫章县", "金沙县", "纳雍县", "黔西县", "威宁彝族回族苗族自治县", "织金县"]},
{"city":"黔东南自治州","conts":["岑巩县", "从江县", "丹寨县", "黄平县", "剑河县", "锦屏县", "凯里市", "雷山县", "黎平县", "麻江县", "榕江县", "三穗县", "施秉县", "台江县", "天柱县", "镇远县"]},
{"city":"黔南自治州","conts":["长顺县", "都匀市", "独山县", "福泉市", "贵定县", "惠水县", "荔波县", "龙里县", "罗甸县", "平塘县", "三都水族自治县", "瓮安县"]}
]},
{"name":"海南省","citys":[
{"city":"海口市","conts":["市辖区", "龙华区", "美兰区", "琼山区", "秀英区"]},
{"city":"三亚市","conts":["市辖区"]},
{"city":"海南直辖县","conts":["白沙黎族自治县", "保亭黎族苗族自治县", "昌江黎族自治县", "澄迈县", "儋州市", "定安县", "东方市", "乐东黎族自治县", "临高县", "陵水黎族自治县", "南沙群岛", "琼海市", "琼中黎族苗族自治县", "屯昌县", "万宁市", "文昌市", "五指山市", "西沙群岛", "中沙群岛的岛礁及其海域"]}
]},
{"name":"河北省","citys":[
{"city":"石家庄市","conts":["市辖区", "长安区", "高邑县", "藁城市", "行唐县", "井陉矿区", "井陉县", "晋州市", "灵寿县", "鹿泉市", "栾城县", "平山县", "桥东区", "桥西区", "深泽县", "无极县", "新华区", "辛集市", "新乐市", "裕华区", "元氏县", "赞皇县", "赵县", "正定县"]},
{"city":"唐山市","conts":["市辖区", "丰南区", "丰润区", "古冶区", "开平区", "乐亭县", "路南区", "路北区", "滦县", "滦南县", "迁西县", "迁安市", "唐海县", "玉田县", "遵化市"]},
{"city":"秦皇岛市","conts":["市辖区", "北戴河区", "昌黎县", "抚宁县", "海港区", "卢龙县", "青龙满族自治县", "山海关区"]},
{"city":"邯郸市","conts":["市辖区", "成安县", "丛台区", "磁县", "大名县", "肥乡县", "峰峰矿区", "复兴区", "广平县", "馆陶县", "邯山区", "邯郸县", "鸡泽县", "临漳县", "邱县", "曲周县", "涉县", "魏县", "武安市", "永年县"]},
{"city":"邢台市","conts":["市辖区", "柏乡县", "广宗县", "巨鹿县", "临城县", "临西县", "隆尧县", "内丘县", "南和县", "南宫市", "宁晋县", "平乡县", "桥东区", "桥西区", "清河县", "任县", "沙河市", "威县", "邢台县", "新河县"]},
{"city":"保定市","conts":["市辖区", "安新县", "安国市", "北市区", "博野县", "定兴县", "定州市", "阜平县", "高阳县", "高碑店市", "涞水县", "涞源县", "蠡县", "满城县", "南市区", "清苑县", "曲阳县", "容城县", "顺平县", "唐县", "望都县", "新市区", "雄县", "徐水县", "易县", "涿州市"]},
{"city":"张家口市","conts":["市辖区", "赤城县", "崇礼县", "沽源县", "怀安县", "怀来县", "康保县", "桥东区", "桥西区", "尚义县", "万全县", "蔚县", "下花园区", "宣化区", "宣化县", "阳原县", "张北县", "涿鹿县"]},
{"city":"承德市","conts":["市辖区", "承德县", "丰宁满族自治县", "宽城满族自治县", "隆化县", "滦平县", "平泉县", "双桥区", "双滦区", "围场满族蒙古族自治县", "兴隆县", "鹰手营子矿区"]},
{"city":"沧州市","conts":["市辖区", "泊头市", "沧县", "东光县", "海兴县", "河间市", "黄骅市", "孟村回族自治县", "南皮县", "青县", "任丘市", "肃宁县", "吴桥县", "献县", "新华区", "盐山县", "运河区"]},
{"city":"廊坊市","conts":["市辖区", "安次区", "霸州市", "大城县", "大厂回族自治县", "固安县", "广阳区", "三河市", "文安县", "香河县", "永清县"]},
{"city":"衡水市","conts":["市辖区", "安平县", "阜城县", "故城县", "冀州市", "景县", "饶阳县", "深州市", "桃城区", "武邑县", "武强县", "枣强县"]}
]},
{"name":"河南省","citys":[
{"city":"郑州市","conts":["市辖区", "登封市", "二七区", "巩义市", "管城回族区", "金水区", "邙山区", "上街区", "新密市", "新郑市", "荥阳市", "中原区", "中牟县"]},
{"city":"开封市","conts":["市辖区", "鼓楼区", "郊区", "开封县", "兰考县", "龙亭区", "南关区", "杞县", "顺河回族区", "通许县", "尉氏县"]},
{"city":"洛阳市","conts":["市辖区", "廛河回族区", "吉利区", "涧西区", "老城区", "栾川县", "洛龙区", "洛宁县", "孟津县", "汝阳县", "嵩县", "西工区", "新安县", "偃师市", "宜阳县", "伊川县"]},
{"city":"平顶山市","conts":["市辖区", "宝丰县", "郏县", "鲁山县", "汝州市", "石龙区", "卫东区", "舞钢市", "新华区", "叶县", "湛河区"]},
{"city":"安阳市","conts":["市辖区", "安阳县", "北关区", "滑县", "林州市", "龙安区", "内黄县", "汤阴县", "文峰区", "殷都区"]},
{"city":"鹤壁市","conts":["市辖区", "鹤山区", "浚县", "淇滨区", "淇县", "山城区"]},
{"city":"新乡市","conts":["市辖区", "长垣县", "封丘县", "凤泉区", "红旗区", "辉县市", "获嘉县", "牧野区", "卫滨区", "卫辉市", "新乡县", "延津县", "原阳县"]},
{"city":"焦作市","conts":["市辖区", "博爱县", "济源市", "解放区", "马村区", "孟州市", "沁阳市", "山阳区", "温县", "武陟县", "修武县", "中站区"]},
{"city":"濮阳市","conts":["市辖区", "范县", "华龙区", "南乐县", "濮阳县", "清丰县", "台前县"]},
{"city":"许昌市","conts":["市辖区", "长葛市", "魏都区", "襄城县", "许昌县", "鄢陵县", "禹州市"]},
{"city":"漯河市","conts":["市辖区", "临颍县", "舞阳县", "郾城区", "源汇区", "召陵区"]},
{"city":"三门峡市","conts":["市辖区", "湖滨区", "灵宝市", "卢氏县", "渑池县", "陕县", "义马市"]},
{"city":"南阳市","conts":["市辖区", "邓州市", "方城县", "内乡县", "南召县", "社旗县", "唐河县", "桐柏县", "宛城区", "卧龙区", "西峡县", "淅川县", "新野县", "镇平县"]},
{"city":"商丘市","conts":["市辖区", "梁园区", "民权县", "宁陵县", "睢阳区", "睢县", "夏邑县", "永城市", "虞城县", "柘城县"]},
{"city":"信阳市","conts":["市辖区", "固始县", "光山县", "淮滨县", "潢川县", "罗山县", "平桥区", "商城县", "师河区", "息县", "新县"]},
{"city":"周口市","conts":["市辖区", "川汇区", "郸城县", "扶沟县", "淮阳县", "鹿邑县", "商水县", "沈丘县", "太康县", "西华县", "项城市"]},
{"city":"驻马店市","conts":["市辖区", "泌阳县", "平舆县", "确山县", "汝南县", "上蔡县", "遂平县", "西平县", "新蔡县", "驿城区", "正阳县"]}
]},
{"name":"黑龙江省","citys":[
{"city":"哈尔滨市","conts":["市辖区", "阿城市", "巴彦县", "宾县", "道里区", "道外区", "动力区", "方正县", "呼兰区", "木兰县", "南岗区", "平房区", "尚志市", "双城市", "松北区", "通河县", "五常市", "香坊区", "延寿县", "依兰县"]},
{"city":"齐齐哈尔市","conts":["市辖区", "昂昂溪区", "拜泉县", "富拉尔基区", "富裕县", "甘南县", "建华区", "克山县", "克东县", "龙沙区", "龙江县", "梅里斯达斡尔族区", "讷河市", "碾子山区", "泰来县", "铁锋区", "依安县"]},
{"city":"鸡西市","conts":["市辖区", "城子河区", "滴道区", "恒山区", "虎林市", "鸡冠区", "鸡东县", "梨树区", "麻山区", "密山市"]},
{"city":"鹤岗市","conts":["市辖区", "东山区", "工农区", "萝北县", "南山区", "绥滨县", "向阳区", "兴安区", "兴山区"]},
{"city":"双鸭山市","conts":["市辖区", "宝山区", "宝清县", "集贤县", "尖山区", "岭东区", "饶河县", "四方台区", "友谊县"]},
{"city":"大庆市","conts":["市辖区", "大同区", "杜尔伯特蒙古族自治县", "红岗区", "林甸县", "龙凤区", "让胡路区", "萨尔图区", "肇州县", "肇源县"]},
{"city":"伊春市","conts":["市辖区", "翠峦区", "带岭区", "红星区", "嘉荫县", "金山屯区", "美溪区", "南岔区", "上甘岭区", "汤旺河区", "铁力市", "乌马河区", "乌伊岭区", "五营区", "西林区", "新青区", "伊春区", "友好区"]},
{"city":"佳木斯市","conts":["市辖区", "东风区", "抚远县", "富锦市", "桦南县", "桦川县", "郊区", "前进区", "汤原县", "同江市", "向阳区", "永红区"]},
{"city":"七台河市","conts":["市辖区", "勃利县", "茄子河区", "桃山区", "新兴区"]},
{"city":"牡丹江市","conts":["市辖区", "爱民区", "东安区", "东宁县", "海林市", "林口县", "穆棱市", "宁安市", "绥芬河市", "西安区", "阳明区"]},
{"city":"黑河市","conts":["市辖区", "爱辉区", "北安市", "嫩江县", "孙吴县", "五大连池市", "逊克县"]},
{"city":"绥化市","conts":["市辖区", "安达市", "北林区", "海伦市", "兰西县", "明水县", "青冈县", "庆安县", "绥棱县", "望奎县", "肇东市"]},
{"city":"大兴安岭地区","conts":["呼玛县", "漠河县", "塔河县"]}
]},
{"name":"湖北省","citys":[
{"city":"武汉市","conts":["市辖区", "蔡甸区", "东西湖区", "汉阳区", "汉南区", "洪山区", "黄陂区", "江岸区", "江汉区", "江夏区", "乔口区", "青山区", "武昌区", "新洲区"]},
{"city":"黄石市","conts":["市辖区", "大冶市", "黄石港区", "铁山区", "西塞山区", "下陆区", "阳新县"]},
{"city":"十堰市","conts":["市辖区", "丹江口市", "房县", "茅箭区", "郧县", "郧西县", "张湾区", "竹山县", "竹溪县"]},
{"city":"宜昌市","conts":["市辖区", "长阳土家族自治县", "当阳市", "点军区", "伍家岗区", "五峰土家族自治县", "西陵区", "兴山县", "夷陵区", "宜都市", "远安县", "枝江市", "秭归县"]},
{"city":"襄樊市","conts":["市辖区", "保康县", "樊城区", "谷城县", "老河口市", "南漳县", "襄城区", "襄阳区", "宜城市", "枣阳市"]},
{"city":"鄂州市","conts":["市辖区", "鄂城区", "华容区", "梁子湖区"]},
{"city":"荆门市","conts":["市辖区", "东宝区", "掇刀区", "京山县", "沙洋县", "钟祥市"]},
{"city":"孝感市","conts":["市辖区", "安陆市", "大悟县", "汉川市", "孝南区", "孝昌县", "应城市", "云梦县"]},
{"city":"荆州市","conts":["市辖区", "公安县", "洪湖市", "监利县", "江陵县", "荆州区", "沙市区", "石首市", "松滋市"]},
{"city":"黄冈市","conts":["市辖区", "红安县", "黄州区", "黄梅县", "罗田县", "麻城市", "蕲春县", "团风县", "武穴市", "浠水县", "英山县"]},
{"city":"咸宁市","conts":["市辖区", "崇阳县", "赤壁市", "嘉鱼县", "通城县", "通山县", "咸安区"]},
{"city":"随州市","conts":["市辖区", "曾都区", "广水市"]},
{"city":"恩施自治州","conts":["巴东县", "恩施市", "鹤峰县", "建始县", "来凤县", "利川市", "咸丰县", "宣恩县"]},
{"city":"湖北省辖单位","conts":["潜江市", "神农架林区", "天门市", "仙桃市"]}
]},
{"name":"湖南省","citys":[
{"city":"长沙市","conts":["市辖区", "长沙县", "芙蓉区", "开福区", "浏阳市", "宁乡县", "天心区", "望城县", "雨花区", "岳麓区"]},
{"city":"株洲市","conts":["市辖区", "茶陵县", "荷塘区", "醴陵市", "芦淞区", "石峰区", "天元区", "炎陵县", "攸县", "株洲县"]},
{"city":"湘潭市","conts":["市辖区", "韶山市", "湘潭县", "湘乡市", "雨湖区", "岳塘区"]},
{"city":"衡阳市","conts":["市辖区", "常宁市", "衡阳县", "衡南县", "衡山县", "衡东县", "耒阳市", "南岳区", "祁东县", "石鼓区", "雁峰区", "蒸湘区", "珠晖区"]},
{"city":"邵阳市","conts":["市辖区", "北塔区", "城步苗族自治县", "大祥区", "洞口县", "隆回县", "邵东县", "邵阳县", "双清区", "绥宁县", "武冈市", "新邵县", "新宁县"]},
{"city":"岳阳市","conts":["市辖区", "华容县", "君山区", "临湘市", "汨罗市", "平江县", "湘阴县", "岳阳楼区", "岳阳县", "云溪区"]},
{"city":"常德市","conts":["市辖区", "安乡县", "鼎城区", "汉寿县", "津市市", "澧县", "临澧县", "石门县", "桃源县", "武陵区"]},
{"city":"张家界市","conts":["市辖区", "慈利县", "桑植县", "武陵源区", "永定区"]},
{"city":"益阳市","conts":["市辖区", "安化县", "赫山区", "南县", "桃江县", "沅江市", "资阳区"]},
{"city":"郴州市","conts":["市辖区", "安仁县", "北湖区", "桂阳县", "桂东县", "嘉禾县", "临武县", "汝城县", "苏仙区", "宜章县", "永兴县", "资兴市"]},
{"city":"永州市","conts":["市辖区", "道县", "东安县", "江永县", "江华瑶族自治县", "蓝山县", "冷水滩区", "宁远县", "祁阳县", "双牌县", "新田县", "芝山区"]},
{"city":"怀化市","conts":["市辖区", "辰溪县", "鹤城区", "洪江市", "会同县", "靖州苗族侗族自治县", "麻阳苗族自治县", "通道侗族自治县", "新晃侗族自治县", "溆浦县", "沅陵县", "芷江侗族自治县", "中方县"]},
{"city":"娄底市","conts":["市辖区", "冷水江市", "涟源市", "娄星区", "双峰县", "新化县"]},
{"city":"湘西自治州","conts":["保靖县", "凤凰县", "古丈县", "花垣县", "吉首市", "龙山县", "泸溪县", "永顺县"]}
]},
{"name":"吉林省","citys":[
{"city":"长春市","conts":["市辖区", "朝阳区", "德惠市", "二道区", "九台市", "宽城区", "绿园区", "南关区", "农安县", "双阳区", "榆树市"]},
{"city":"吉林市","conts":["市辖区", "昌邑区", "船营区", "丰满区", "桦甸市", "蛟河市", "龙潭区", "磐石市", "舒兰市", "永吉县"]},
{"city":"四平市","conts":["市辖区", "公主岭市", "梨树县", "双辽市", "铁西区", "铁东区", "伊通满族自治县"]},
{"city":"辽源市","conts":["市辖区", "东丰县", "东辽县", "龙山区", "西安区"]},
{"city":"通化市","conts":["市辖区", "东昌区", "二道江区", "辉南县", "集安市", "柳河县", "梅河口市", "通化县"]},
{"city":"白山市","conts":["市辖区", "八道江区", "长白朝鲜族自治县", "抚松县", "江源县", "靖宇县", "临江市"]},
{"city":"松原市","conts":["市辖区", "长岭县", "扶余县", "宁江区", "前郭尔罗斯蒙古族自治县", "乾安县"]},
{"city":"白城市","conts":["市辖区", "大安市", "洮北区", "洮南市", "通榆县", "镇赉县"]},
{"city":"延边自治州","conts":["安图县", "敦化市", "和龙市", "珲春市", "龙井市", "图们市", "汪清县", "延吉市"]}
]},
{"name":"江苏省","citys":[
{"city":"南京市","conts":["市辖区", "白下区", "高淳县", "鼓楼区", "建邺区", "江宁区", "溧水县", "六合区", "浦口区", "栖霞区", "秦淮区", "下关区", "玄武区", "雨花台区"]},
{"city":"无锡市","conts":["市辖区", "北塘区", "滨湖区", "崇安区", "惠山区", "江阴市", "南长区", "锡山区", "宜兴市"]},
{"city":"徐州市","conts":["市辖区", "丰县", "鼓楼区", "贾汪区", "九里区", "沛县", "邳州市", "泉山区", "睢宁县", "铜山县", "新沂市", "云龙区"]},
{"city":"常州市","conts":["市辖区", "金坛市", "溧阳市", "戚墅堰区", "天宁区", "武进区", "新北区", "钟楼区"]},
{"city":"苏州市","conts":["市辖区", "沧浪区", "常熟市", "虎丘区", "金阊区", "昆山市", "平江区", "太仓市", "吴中区", "吴江市", "相城区", "张家港市"]},
{"city":"南通市","conts":["市辖区", "崇川区", "港闸区", "海安县", "海门市", "启东市", "如东县", "如皋市", "通州市"]},
{"city":"连云港市","conts":["市辖区", "东海县", "赣榆县", "灌云县", "灌南县", "海州区", "连云区", "新浦区"]},
{"city":"淮安市","conts":["市辖区", "楚州区", "洪泽县", "淮阴区", "金湖县", "涟水县", "清河区", "清浦区", "盱眙县"]},
{"city":"盐城市","conts":["市辖区", "滨海县", "大丰市", "东台市", "阜宁县", "建湖县", "射阳县", "亭湖区", "响水县", "盐都区"]},
{"city":"扬州市","conts":["市辖区", "宝应县", "高邮市", "广陵区", "邗江区", "江都市", "郊区", "仪征市"]},
{"city":"镇江市","conts":["市辖区", "丹徒区", "丹阳市", "京口区", "句容市", "润州区", "扬中市"]},
{"city":"泰州市","conts":["市辖区", "高港区", "海陵区", "姜堰市", "靖江市", "泰兴市", "兴化市"]},
{"city":"宿迁市","conts":["市辖区", "沭阳县", "泗阳县", "泗洪县", "宿城区", "宿豫区"]}
]},
{"name":"江西省","citys":[
{"city":"南昌市","conts":["市辖区", "安义县", "东湖区", "进贤县", "南昌县", "青云谱区", "青山湖区", "湾里区", "西湖区", "新建县"]},
{"city":"景德镇市","conts":["市辖区", "昌江区", "浮梁县", "乐平市", "珠山区"]},
{"city":"萍乡市","conts":["市辖区", "安源区", "莲花县", "芦溪县", "上栗县", "湘东区"]},
{"city":"九江市","conts":["市辖区", "德安县", "都昌县", "湖口县", "九江县", "庐山区", "彭泽县", "瑞昌市", "武宁县", "星子县", "修水县", "浔阳区", "永修县"]},
{"city":"新余市","conts":["市辖区", "分宜县", "渝水区"]},
{"city":"鹰潭市","conts":["市辖区", "贵溪市", "余江县", "月湖区"]},
{"city":"赣州市","conts":["市辖区", "安远县", "崇义县", "大余县", "定南县", "赣县", "会昌县", "龙南县", "南康市", "宁都县", "全南县", "瑞金市", "上犹县", "石城县", "信丰县", "兴国县", "寻乌县", "于都县", "章贡区"]},
{"city":"吉安市","conts":["市辖区", "安福县", "吉州区", "吉安县", "吉水县", "井冈山市", "青原区", "遂川县", "泰和县", "万安县", "峡江县", "新干县", "永丰县", "永新县"]},
{"city":"宜春市","conts":["市辖区", "丰城市", "奉新县", "高安市", "靖安县", "上高县", "铜鼓县", "万载县", "宜丰县", "袁州区", "樟树市"]},
{"city":"抚州市","conts":["市辖区", "崇仁县", "东乡县", "广昌县", "金溪县", "乐安县", "黎川县", "临川区", "南城县", "南丰县", "宜黄县", "资溪县"]},
{"city":"上饶市","conts":["市辖区", "德兴市", "广丰县", "横峰县", "鄱阳县", "铅山县", "上饶县", "万年县", "婺源县", "信州区", "弋阳县", "余干县", "玉山县"]}
]},
{"name":"辽宁省","citys":[
{"city":"沈阳市","conts":["市辖区", "大东区", "东陵区", "法库县", "和平区", "皇姑区", "康平县", "辽中县", "沈河区", "苏家屯区", "铁西区", "沈北新区", "新民市", "于洪区"]},
{"city":"大连市","conts":["市辖区", "长海县", "甘井子区", "金州区", "旅顺口区", "普兰店市", "沙河口区", "瓦房店市", "西岗区", "中山区", "庄河市"]},
{"city":"鞍山市","conts":["市辖区", "海城市", "立山区", "千山区", "台安县", "铁东区", "铁西区", "岫岩满族自治县"]},
{"city":"抚顺市","conts":["市辖区", "东洲区", "抚顺县", "清原满族自治县", "顺城区", "望花区", "新抚区", "新宾满族自治县"]},
{"city":"本溪市","conts":["市辖区", "本溪满族自治县", "桓仁满族自治县", "明山区", "南芬区", "平山区", "溪湖区"]},
{"city":"丹东市","conts":["市辖区", "东港市", "凤城市", "宽甸满族自治县", "元宝区", "振兴区", "振安区"]},
{"city":"锦州市","conts":["市辖区", "北宁市", "古塔区", "黑山县", "凌河区", "凌海市", "太和区", "义县"]},
{"city":"营口市","conts":["市辖区", "鲅鱼圈区", "大石桥市", "盖州市", "老边区", "西市区", "站前区"]},
{"city":"阜新市","conts":["市辖区", "阜新蒙古族自治县", "海州区", "清河门区", "太平区", "细河区", "新邱区", "彰武县"]},
{"city":"辽阳市","conts":["市辖区", "白塔区", "灯塔市", "弓长岭区", "宏伟区", "辽阳县", "太子河区", "文圣区"]},
{"city":"盘锦市","conts":["市辖区", "大洼县", "盘山县", "双台子区", "兴隆台区"]},
{"city":"铁岭市","conts":["市辖区", "昌图县", "开原市", "清河区", "调兵山市", "铁岭县", "西丰县", "银州区"]},
{"city":"朝阳市","conts":["市辖区", "北票市", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "凌源市", "龙城区", "双塔区"]},
{"city":"葫芦岛市","conts":["市辖区", "建昌县", "连山区", "龙港区", "南票区", "绥中县", "兴城市"]}
]},
{"name":"内蒙古区","citys":[
{"city":"呼和浩特市","conts":["市辖区", "和林格尔县", "回民区", "清水河县", "赛罕区", "土默特左旗", "托克托县", "武川县", "新城区", "玉泉区"]},
{"city":"包头市","conts":["市辖区", "白云矿区", "达尔罕茂明安联合旗", "东河区", "固阳县", "九原区", "昆都仑区", "青山区", "石拐区", "土默特右旗"]},
{"city":"乌海市","conts":["市辖区", "海勃湾区", "海南区", "乌达区"]},
{"city":"赤峰市","conts":["市辖区", "阿鲁科尔沁旗", "敖汉旗", "巴林左旗", "巴林右旗", "红山区", "喀喇沁旗", "克什克腾旗", "林西县", "宁城县", "松山区", "翁牛特旗", "元宝山区"]},
{"city":"通辽市","conts":["市辖区", "霍林郭勒市", "开鲁县", "科尔沁区", "科尔沁左翼中旗", "科尔沁左翼后旗", "库伦旗", "奈曼旗", "扎鲁特旗"]},
{"city":"鄂尔多斯市","conts":["达拉特旗", "东胜区", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗", "准格尔旗"]},
{"city":"呼伦贝尔市","conts":["市辖区", "阿荣旗", "陈巴尔虎旗", "鄂伦春自治旗", "鄂温克族自治旗", "额尔古纳市", "根河市", "海拉尔区", "满洲里市", "莫力达瓦达斡尔族自治旗", "新巴尔虎左旗", "新巴尔虎右旗", "牙克石市", "扎兰屯市"]},
{"city":"巴彦淖尔市","conts":["市辖区", "磴口县", "杭锦后旗", "临河区", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "五原县"]},
{"city":"乌兰察布市","conts":["市辖区", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "丰镇市", "化德县", "集宁区", "凉城县", "商都县", "四子王旗", "兴和县", "卓资县"]},
{"city":"兴安盟","conts":["阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "突泉县", "乌兰浩特市", "扎赉特旗"]},
{"city":"锡林郭勒盟","conts":["阿巴嘎旗", "东乌珠穆沁旗", "多伦县", "二连浩特市", "苏尼特左旗", "苏尼特右旗", "太仆寺旗", "西乌珠穆沁旗", "锡林浩特市", "镶黄旗", "正镶白旗", "正蓝旗"]},
{"city":"阿拉善盟","conts":["阿拉善左旗", "阿拉善右旗", "额济纳旗"]}
]},
{"name":"宁夏区","citys":[
{"city":"银川市","conts":["市辖区", "贺兰县", "金凤区", "灵武市", "西夏区", "兴庆区", "永宁县"]},
{"city":"石嘴山市","conts":["市辖区", "大武口区", "惠农区", "平罗县"]},
{"city":"吴忠市","conts":["市辖区", "利通区", "青铜峡市", "同心县", "盐池县"]},
{"city":"固原市","conts":["市辖区", "泾源县", "隆德县", "彭阳县", "西吉县", "原州区"]},
{"city":"中卫市","conts":["市辖区", "海原县", "沙坡头区", "中宁县"]}
]},
{"name":"青海省","citys":[
{"city":"西宁市","conts":["市辖区", "城东区", "城中区", "城西区", "城北区", "大通回族土族自治县", "湟中县", "湟源县"]},
{"city":"海东地区","conts":["互助土族自治县", "化隆回族自治县", "乐都县", "民和回族土族自治县", "平安县", "循化撒拉族自治县"]},
{"city":"海北自治州","conts":["刚察县", "海晏县", "门源回族自治县", "祁连县"]},
{"city":"黄南自治州","conts":["河南蒙古族自治县", "尖扎县", "同仁县", "泽库县"]},
{"city":"海南自治州","conts":["共和县", "贵德县", "贵南县", "同德县", "兴海县"]},
{"city":"果洛自治州","conts":["班玛县", "达日县", "甘德县", "久治县", "玛沁县", "玛多县"]},
{"city":"玉树自治州","conts":["称多县", "囊谦县", "曲麻莱县", "玉树县", "杂多县", "治多县"]},
{"city":"海西自治州","conts":["德令哈市", "都兰县", "格尔木市", "天峻县", "乌兰县"]}
]},
{"name":"山西省","citys":[
{"city":"太原市","conts":["市辖区", "古交市", "尖草坪区", "晋源区", "娄烦县", "清徐县", "万柏林区", "小店区", "杏花岭区", "阳曲县", "迎泽区"]},
{"city":"大同市","conts":["市辖区", "城区", "大同县", "广灵县", "浑源县", "矿区", "灵丘县", "南郊区", "天镇县", "新荣区", "阳高县", "左云县"]},
{"city":"阳泉市","conts":["市辖区", "城区", "郊区", "矿区", "平定县", "盂县"]},
{"city":"长治市","conts":["市辖区", "长治县", "长子县", "城区", "壶关县", "郊区", "黎城县", "潞城市", "平顺县", "沁县", "沁源县", "屯留县", "武乡县", "襄垣县"]},
{"city":"晋城市","conts":["市辖区", "城区", "高平市", "陵川县", "沁水县", "阳城县", "泽州县"]},
{"city":"朔州市","conts":["市辖区", "怀仁县", "平鲁区", "山阴县", "朔城区", "应县", "右玉县"]},
{"city":"晋中市","conts":["市辖区", "和顺县", "介休市", "灵石县", "平遥县", "祁县", "寿阳县", "太谷县", "昔阳县", "榆次区", "榆社县", "左权县"]},
{"city":"运城市","conts":["市辖区", "河津市", "稷山县", "绛县", "临猗县", "平陆县", "芮城县", "万荣县", "闻喜县", "夏县", "新绛县", "盐湖区", "永济市", "垣曲县"]},
{"city":"忻州市","conts":["市辖区", "保德县", "代县", "定襄县", "繁峙县", "河曲县", "静乐县", "岢岚县", "宁武县", "偏关县", "神池县", "五台县", "五寨县", "忻府区", "原平市"]},
{"city":"临汾市","conts":["市辖区", "安泽县", "大宁县", "汾西县", "浮山县", "古县", "洪洞县", "侯马市", "霍州市", "吉县", "蒲县", "曲沃县", "隰县", "襄汾县", "乡宁县", "尧都区", "翼城县", "永和县"]},
{"city":"吕梁市","conts":["市辖区", "方山县", "汾阳市", "交城县", "交口县", "岚县", "离石区", "临县", "柳林县", "石楼县", "文水县", "孝义市", "兴县", "中阳县"]}
]},
{"name":"山东省","citys":[
{"city":"济南市","conts":["市辖区", "长清区", "槐荫区", "济阳县", "历下区", "历城区", "平阴县", "商河县", "市中区", "天桥区", "章丘市"]},
{"city":"青岛市","conts":["市辖区", "城阳区", "黄岛区", "即墨市", "胶州市", "胶南市", "莱西市", "崂山区", "李沧区", "平度市", "市南区", "市北区", "四方区"]},
{"city":"淄博市","conts":["市辖区", "博山区", "高青县", "桓台县", "临淄区", "沂源县", "张店区", "周村区", "淄川区"]},
{"city":"枣庄市","conts":["市辖区", "山亭区", "市中区", "台儿庄区", "滕州市", "薛城区", "峄城区"]},
{"city":"东营市","conts":["市辖区", "东营区", "广饶县", "河口区", "垦利县", "利津县"]},
{"city":"烟台市","conts":["市辖区", "长岛县", "福山区", "海阳市", "莱山区", "莱阳市", "莱州市", "龙口市", "牟平区", "蓬莱市", "栖霞市", "招远市", "芝罘区"]},
{"city":"潍坊市","conts":["市辖区", "安丘市", "昌乐县", "昌邑市", "坊子区", "高密市", "寒亭区", "奎文区", "临朐县", "青州市", "寿光市", "潍城区", "诸城市"]},
{"city":"济宁市","conts":["市辖区", "嘉祥县", "金乡县", "梁山县", "曲阜市", "任城区", "市中区", "泗水县", "微山县", "汶上县", "兖州市", "鱼台县", "邹城市"]},
{"city":"泰安市","conts":["市辖区", "岱岳区", "东平县", "肥城市", "宁阳县", "泰山区", "新泰市"]},
{"city":"威海市","conts":["市辖区", "环翠区", "荣成市", "乳山市", "文登市"]},
{"city":"日照市","conts":["市辖区", "东港区", "莒县", "岚山区", "五莲县"]},
{"city":"莱芜市","conts":["市辖区", "钢城区", "莱城区"]},
{"city":"临沂市","conts":["市辖区", "苍山县", "费县", "河东区", "莒南县", "兰山区", "临沭县", "罗庄区", "蒙阴县", "平邑县", "郯城县", "沂南县", "沂水县"]},
{"city":"德州市","conts":["市辖区", "德城区", "乐陵市", "临邑县", "陵县", "宁津县", "平原县", "齐河县", "庆云县", "武城县", "夏津县", "禹城市"]},
{"city":"聊城市","conts":["市辖区", "茌平县", "东昌府区", "东阿县", "高唐县", "冠县", "临清市", "莘县", "阳谷县"]},
{"city":"滨州市","conts":["市辖区", "滨城区", "博兴县", "惠民县", "无棣县", "阳信县", "沾化县", "邹平县"]},
{"city":"荷泽市","conts":["市辖区", "曹县", "成武县", "单县", "定陶县", "东明县", "巨野县", "鄄城县", "牡丹区", "郓城县"]}
]},
{"name":"陕西省","citys":[
{"city":"西安市","conts":["市辖区", "灞桥区", "碑林区", "长安区", "高陵县", "户县", "蓝田县", "莲湖区", "临潼区", "未央区", "新城区", "阎良区", "雁塔区", "周至县"]},
{"city":"铜川市","conts":["市辖区", "王益区", "耀州区", "宜君县", "印台区"]},
{"city":"宝鸡市","conts":["市辖区", "陈仓区", "凤翔县", "凤县", "扶风县", "金台区", "麟游县", "陇县", "眉县", "岐山县", "千阳县", "太白县", "渭滨区"]},
{"city":"咸阳市","conts":["市辖区", "彬县", "长武县", "淳化县", "泾阳县", "礼泉县", "乾县", "秦都区", "三原县", "渭城区", "武功县", "兴平市", "旬邑县", "杨凌区", "永寿县"]},
{"city":"渭南市","conts":["市辖区", "白水县", "澄城县", "大荔县", "富平县", "韩城市", "合阳县", "华县", "华阴市", "临渭区", "蒲城县", "潼关县"]},
{"city":"延安市","conts":["市辖区", "安塞县", "宝塔区", "富县", "甘泉县", "黄龙县", "黄陵县", "洛川县", "吴旗县", "延长县", "延川县", "宜川县", "志丹县", "子长县"]},
{"city":"汉中市","conts":["市辖区", "佛坪县", "城固县", "汉台区", "留坝县", "略阳县", "勉县", "南郑县", "宁强县", "西乡县", "洋县", "镇巴县"]},
{"city":"榆林市","conts":["市辖区", "定边县", "府谷县", "横山县", "佳县", "靖边县", "米脂县", "清涧县", "神木县", "绥德县", "吴堡县", "榆阳区", "子洲县"]},
{"city":"安康市","conts":["市辖区", "白河县", "汉滨区", "汉阴县", "岚皋县", "宁陕县", "平利县", "石泉县", "旬阳县", "镇坪县", "紫阳县"]},
{"city":"商洛市","conts":["市辖区", "丹凤县", "洛南县", "山阳县", "商州区", "商南县", "镇安县", "柞水县"]}
]},
{"name":"四川省","citys":[
{"city":"成都市","conts":["市辖区", "成华区", "崇州市", "大邑县", "都江堰市", "锦江区", "金牛区", "金堂县", "龙泉驿区", "彭州市", "郫县", "蒲江县", "青羊区", "青白江区", "邛崃市", "双流县", "温江区", "武侯区", "新都区", "新津县"]},
{"city":"自贡市","conts":["市辖区", "大安区", "富顺县", "贡井区", "荣县", "沿滩区", "自流井区"]},
{"city":"攀枝花市","conts":["市辖区", "东区", "米易县", "仁和区", "西区", "盐边县"]},
{"city":"泸州市","conts":["市辖区", "古蔺县", "合江县", "江阳区", "龙马潭区", "泸县", "纳溪区", "叙永县"]},
{"city":"德阳市","conts":["市辖区", "广汉市", "旌阳区", "罗江县", "绵竹市", "什邡市", "中江县"]},
{"city":"绵阳市","conts":["市辖区", "安县", "北川羌族自治县", "涪城区", "江油市", "平武县", "三台县", "盐亭县", "游仙区", "梓潼县"]},
{"city":"广元市","conts":["市辖区", "苍溪县", "朝天区", "剑阁县", "青川县", "市中区", "旺苍县", "元坝区"]},
{"city":"遂宁市","conts":["市辖区", "安居区", "船山区", "大英县", "蓬溪县", "射洪县"]},
{"city":"内江市","conts":["市辖区", "东兴区", "隆昌县", "市中区", "威远县", "资中县"]},
{"city":"乐山市","conts":["市辖区", "峨边彝族自治县", "峨眉山市", "夹江县", "犍为县", "金口河区", "井研县", "马边彝族自治县", "沐川县", "沙湾区", "市中区", "五通桥区"]},
{"city":"南充市","conts":["市辖区", "高坪区", "嘉陵区", "阆中市", "南部县", "蓬安县", "顺庆区", "西充县", "仪陇县", "营山县"]},
{"city":"眉山市","conts":["市辖区", "丹棱县", "东坡区", "洪雅县", "彭山县", "青神县", "仁寿县"]},
{"city":"宜宾市","conts":["市辖区", "长宁县", "翠屏区", "高县", "珙县", "江安县", "筠连县", "南溪县", "屏山县", "兴文县", "宜宾县"]},
{"city":"广安市","conts":["市辖区", "广安区", "华莹市", "邻水县", "武胜县", "岳池县"]},
{"city":"达州市","conts":["市辖区", "达县", "大竹县", "开江县", "渠县", "通川区", "万源市", "宣汉县"]},
{"city":"雅安市","conts":["市辖区", "宝兴县", "汉源县", "芦山县", "名山县", "石棉县", "天全县", "荥经县", "雨城区"]},
{"city":"巴中市","conts":["市辖区", "巴州区", "南江县", "平昌县", "通江县"]},
{"city":"资阳市","conts":["市辖区", "安岳县", "简阳市", "乐至县", "雁江区"]},
{"city":"阿坝自治州","conts":["阿坝县", "黑水县", "红原县", "金川县", "九寨沟县", "理县", "马尔康县", "茂县", "壤塘县", "若尔盖县", "松潘县", "汶川县", "小金县"]},
{"city":"甘孜自治州","conts":["白玉县", "巴塘县", "丹巴县", "道孚县", "德格县", "稻城县", "得荣县", "甘孜县", "九龙县", "康定县", "理塘县", "泸定县", "炉霍县", "色达县", "石渠县", "乡城县", "新龙县", "雅江县"]},
{"city":"凉山自治州","conts":["布拖县", "德昌县", "甘洛县", "会理县", "会东县", "金阳县", "雷波县", "美姑县", "冕宁县", "木里藏族自治县", "宁南县", "普格县", "西昌市", "喜德县", "盐源县", "越西县", "昭觉县"]}
]},
{"name":"天津市","citys":[
{"city":"天津辖区","conts":["北辰区", "宝坻区", "大港区", "东丽区", "汉沽区", "和平区", "河东区", "河西区", "河北区", "红桥区", "津南区", "南开区", "塘沽区", "武清区", "西青区"]},
{"city":"天津辖县","conts":["蓟县", "静海县", "宁河县"]}
]},
{"name":"西藏区","citys":[
{"city":"拉萨市","conts":["市辖区", "城关区", "达孜县", "当雄县", "堆龙德庆县", "林周县", "墨竹工卡县", "尼木县", "曲水县"]},
{"city":"昌都地区","conts":["八宿县", "边坝县", "察雅县", "昌都县", "丁青县", "贡觉县", "江达县", "类乌齐县", "洛隆县", "芒康县", "左贡县"]},
{"city":"山南地区","conts":["措美县", "错那县", "贡嘎县", "加查县", "浪卡子县", "隆子县", "洛扎县", "乃东县", "琼结县", "曲松县", "桑日县", "扎囊县"]},
{"city":"日喀则地区","conts":["昂仁县", "白朗县", "定日县", "定结县", "岗巴县", "吉隆县", "江孜县", "康马县", "拉孜县", "南木林县", "聂拉木县", "日喀则市", "仁布县", "萨迦县", "萨嘎县", "谢通门县", "亚东县", "仲巴县"]},
{"city":"那曲地区","conts":["安多县", "巴青县", "班戈县", "比如县", "嘉黎县", "那曲县", "尼玛县", "聂荣县", "申扎县", "索县"]},
{"city":"阿里地区","conts":["措勤县", "噶尔县", "改则县", "革吉县", "普兰县", "日土县", "札达县"]},
{"city":"林芝地区","conts":["波密县", "察隅县", "工布江达县", "朗县", "林芝县", "米林县", "墨脱县"]}
]},
{"name":"新疆区","citys":[
{"city":"乌鲁木齐市","conts":["市辖区", "达坂城区", "东山区", "沙依巴克区", "水磨沟区", "天山区", "头屯河区", "乌鲁木齐县", "新市区"]},
{"city":"克拉玛依市","conts":["市辖区", "白碱滩区", "独山子区", "克拉玛依区", "乌尔禾区"]},
{"city":"吐鲁番地区","conts":["鄯善县", "吐鲁番市", "托克逊县"]},
{"city":"哈密地区","conts":["巴里坤哈萨克自治县", "哈密市", "伊吾县"]},
{"city":"昌吉自治州","conts":["昌吉市", "阜康市", "呼图壁县", "吉木萨尔县", "玛纳斯县", "米泉市", "木垒哈萨克自治县", "奇台县"]},
{"city":"博尔塔拉州","conts":["博乐市", "精河县", "温泉县"]},
{"city":"巴音郭楞州","conts":["博湖县", "和静县", "和硕县", "库尔勒市", "轮台县", "且末县", "若羌县", "尉犁县", "焉耆回族自治县"]},
{"city":"阿克苏地区","conts":["阿克苏市", "阿瓦提县", "拜城县", "柯坪县", "库车县", "沙雅县", "温宿县", "乌什县", "新和县"]},
{"city":"克孜勒苏州","conts":["阿图什市", "阿克陶县", "阿合奇县", "乌恰县"]},
{"city":"喀什地区","conts":["巴楚县", "伽师县", "喀什市", "麦盖提县", "莎车县", "疏附县", "疏勒县", "塔什库尔干塔吉克自治县", "叶城县", "英吉沙县", "岳普湖县", "泽普县"]},
{"city":"和田地区","conts":["策勒县", "和田市", "和田县", "洛浦县", "民丰县", "墨玉县", "皮山县", "于田县"]},
{"city":"伊犁自治州","conts":["察布查尔锡伯自治县", "巩留县", "霍城县", "奎屯市", "尼勒克县", "特克斯县", "新源县", "伊宁市", "伊宁县", "昭苏县"]},
{"city":"塔城地区","conts":["额敏县", "和布克赛尔蒙古自治县", "沙湾县", "塔城市", "托里县", "乌苏市", "裕民县"]},
{"city":"阿勒泰地区","conts":["阿勒泰市", "布尔津县", "富蕴县", "福海县", "哈巴河县", "吉木乃县", "青河县"]},
{"city":"新疆省辖单位","conts":["阿拉尔市", "石河子市", "图木舒克市", "五家渠市"]}
]},
{"name":"云南省","citys":[
{"city":"昆明市","conts":["市辖区", "安宁市", "呈贡县", "东川区", "富民县", "官渡区", "晋宁县", "禄劝彝族苗族自治县", "盘龙区", "石林彝族自治县", "嵩明县", "五华区", "西山区", "寻甸回族彝族自治县", "宜良县"]},
{"city":"曲靖市","conts":["市辖区", "富源县", "会泽县", "陆良县", "罗平县", "马龙县", "麒麟区", "师宗县", "宣威市", "沾益县"]},
{"city":"玉溪市","conts":["市辖区", "澄江县", "峨山彝族自治县", "红塔区", "华宁县", "江川县", "通海县", "新平彝族傣族自治县", "易门县", "元江哈尼族彝族傣族自治县"]},
{"city":"保山市","conts":["市辖区", "昌宁县", "隆阳区", "龙陵县", "施甸县", "腾冲县"]},
{"city":"昭通市","conts":["市辖区", "大关县", "鲁甸县", "巧家县", "水富县", "绥江县", "威信县", "盐津县", "彝良县", "永善县", "昭阳区", "镇雄县"]},
{"city":"丽江市","conts":["市辖区", "古城区", "华坪县", "宁蒗彝族自治县", "永胜县", "玉龙纳西族自治县"]},
{"city":"思茅市","conts":["市辖区", "翠云区", "江城哈尼族彝族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "澜沧拉祜族自治县", "孟连傣族拉祜族佤族自治县", "墨江哈尼族自治县", "普洱哈尼族彝族自治县", "西盟佤族自治县", "镇沅彝族哈尼族拉祜族自治县"]},
{"city":"临沧市","conts":["市辖区", "沧源佤族自治县", "凤庆县", "耿马傣族佤族自治县", "临翔区", "双江拉祜族佤族布朗族傣族自治县", "永德县", "云县", "镇康县"]},
{"city":"楚雄自治州","conts":["楚雄市", "大姚县", "禄丰县", "牟定县", "南华县", "双柏县", "武定县", "姚安县", "永仁县", "元谋县"]},
{"city":"红河自治州","conts":["个旧市", "河口瑶族自治县", "红河县", "建水县", "金平苗族瑶族傣族自治县", "开远市", "泸西县", "绿春县", "蒙自县", "弥勒县", "屏边苗族自治县", "石屏县", "元阳县"]},
{"city":"文山自治州","conts":["富宁县", "广南县", "麻栗坡县", "马关县", "丘北县", "文山县", "西畴县", "砚山县"]},
{"city":"西双版纳州","conts":["景洪市", "勐海县", "勐腊县"]},
{"city":"大理自治州","conts":["宾川县", "大理市", "洱源县", "鹤庆县", "剑川县", "弥渡县", "南涧彝族自治县", "巍山彝族回族自治县", "祥云县", "漾濞彝族自治县", "永平县", "云龙县"]},
{"city":"德宏自治州","conts":["梁河县", "陇川县", "潞西市", "瑞丽市", "盈江县"]},
{"city":"怒江傈自治州","conts":["福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县", "泸水县"]},
{"city":"迪庆自治州","conts":["德钦县", "维西傈僳族自治县", "香格里拉县"]}
]},
{"name":"浙江省","citys":[
{"city":"杭州市","conts":["市辖区", "滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区"]},
{"city":"宁波市","conts":["市辖区", "北仑区", "慈溪市", "奉化市", "海曙区", "江东区", "江北区", "宁海县", "象山县", "鄞州区", "余姚市", "镇海区"]},
{"city":"温州市","conts":["市辖区", "苍南县", "洞头县", "乐清市", "龙湾区", "鹿城区", "瓯海区", "平阳县", "瑞安市", "泰顺县", "文成县", "永嘉县"]},
{"city":"嘉兴市","conts":["市辖区", "海盐县", "海宁市", "嘉善县", "平湖市", "桐乡市", "秀城区", "秀洲区"]},
{"city":"湖州市","conts":["市辖区", "安吉县", "长兴县", "德清县", "南浔区", "吴兴区"]},
{"city":"绍兴市","conts":["市辖区", "上虞市", "绍兴县", "嵊州市", "新昌县", "越城区", "诸暨市"]},
{"city":"金华市","conts":["市辖区", "东阳市", "金东区", "兰溪市", "磐安县", "浦江县", "婺城区", "武义县", "义乌市", "永康市"]},
{"city":"衢州市","conts":["市辖区", "常山县", "江山市", "开化县", "柯城区", "龙游县", "衢江区"]},
{"city":"舟山市","conts":["市辖区", "岱山县", "定海区", "普陀区", "嵊泗县"]},
{"city":"台州市","conts":["市辖区", "黄岩区", "椒江区", "临海市", "路桥区", "三门县", "天台县", "温岭市", "仙居县", "玉环县"]},
{"city":"丽水市","conts":["市辖区", "缙云县", "景宁畲族自治县", "莲都区", "龙泉市", "青田县", "庆元县", "松阳县", "遂昌县", "云和县"]}
]}
]`;

var addArray = JSON.parse(addrData);

var appMain = new Vue({
     el:"#app-main",
     data:{
          database:{
               addrData:addArray,
               uni:{
                    classific:["综合类","理工类","师范类","艺术类","体育类","职业技术类"],
                    amount:["1-10000","10001-20000","20001-30000","30001-40000","40000以上",],
                    unilevel:["重点","本科","大专","高职"],
                    scolars:["博士","硕士","本科","大专","高中","EMBA","其他"],
                    majors:[
                         {major:"艺术",submajor:["行为艺术","人体艺术"]},
                         {major:"信息技术",submajor:["计算机科学","通信工程"]},
                         {major:"经济",submajor:["国民经济","企业经济"]},
                    ]
               },
               trainway:["企业高管到校","学生入企","面议"],
               postype:["电气信息类","电子信息科学类","仪器仪表类","工商管理类","管理科学与工程类","金融类","其他"],
               welfares:["五险一金","包住","包吃","年底双薪","双休","交通补助","加班补助","话补","房补","全选"]
          },
          combiData:{
               datatype:"combi",
               showIncAddr:false,
               header:"",
               incReq:{
                    major:{major_1:"",major_2:""},
                    stuScale:"",
                    uniLevel:"",
                    uniClassific:"",
               },
               incApply:{
                    pos:{
                         pos_1:"",
                         pos_2:"",
                         pos_3:""
                    },
                    posAmount:"",
                    trainWay:"",
                    traintime:[],
               },
               requireDesc:"",
               contact:{
                    person:"",
                    phone:"",
                    address:""
               }
          },
          recruitData:{
               datatype:"recruit",
               showAddr:false,
               header:"",
               postype:{
                    postype_1:"",
                    postype_2:""
               },
               amount:"",
               scolar:"",
               gender:"",
               worksexp:"",
               salary:"",
               date:"",
               desc:"",
               contact:{
                    person:"",
                    phone:"",
                    address:""
               }
          },
          directData:{
               datatype:"direct",
               showAddr:false,
               header:"",
               postype:{
                    postype_1:"",
                    postype_2:""
               },
               amount:"",
               scolar:"",
               gender:"",
               worksexp:"",
               salary:"",
               desc:"",
               contact:{
                    person:"",
                    phone:"",
                    address:""
               }
          }
     },
     methods:{
          fontCal:function(str,type){
               if(str.length<=1000){
                    return (1000-str.length);
               }else{
                    alert("已超出最大可输入字数！");
                    if(type=="combi"){
                         this.combiData.requireDesc=this.combiData.requireDesc.substr(0,1000);
                    }else if(type=="recruit"){
                         this.recruitData.desc=this.recruitData.desc.substr(0,1000);
                    }else if(type=="direct"){
                         this.directData.desc=this.directData.desc.substr(0,1000);
                    }
                    return (1000-str.length);
               }
          },
          confirmIncAddr:function(target,type){
               var incAddress="";
               var addBox = $(target).closest(".addr-box");
               addBox.find(".sel-addr input").each(function(){
                    incAddress+=$(this).val()+"-";
               });
               incAddress+=addBox.find(".addr-ex").val();
               if(type=="combi"){
                    this.combiData.contact.address=incAddress;
                    this.combiData.showIncAddr=false;
               }else if(type=="recruit"){
                    this.recruitData.contact.address=incAddress;
                    this.recruitData.showAddr=false;
               }else if(type=="direct"){
                    this.directData.contact.address=incAddress;
                    this.directData.showAddr=false;
               }

          }
     }
})

function _init(){
     selectInitPos();
     navEventBind();
     selectTime();
     selectWelfare();
}
_init();
// selectEventBind();
function selectInitPos(){
     $(".selectee input").each(function(){
        var bgPos=$(this).width()-10+"px center";
        $(this).attr("disabled","true").css("background-position",bgPos);
    });
    $(".selectee ul").each(function(){
        var sibInput=$(this).siblings("input")
        $(this).width(sibInput.width()+10);
        $(this).css({
            left:sibInput.css("margin-left"),
            top:sibInput.height()
        })
    });
    $("body").bind("click",function(){
       $(".selectee ul").hide();
    })
}

function selectTime(){
     $(".time-table .t-cell").click(function(){
          if($(this).hasClass("on")){
               $(this).removeClass("on");
          }else{
               $(this).addClass("on");
          }
     })
}
function selectWelfare(){
     $(".welfare-lis .check-box").click(function(){
          if($(this).hasClass("on")){
               $(this).removeClass("on");
          }else{
               $(this).addClass("on");
          }
     })
}
function navEventBind(){
     $(".navs ul li").each(function(index){
          $(this).click(function(){
               $(".navs ul li.on").removeClass("on");
               $(this).addClass("on");
               $(".main .nav-cont").hide();
               $($(".main .nav-cont")[index]).show();
               selectInitPos();
          })
     })
}
