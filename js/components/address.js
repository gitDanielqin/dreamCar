var Vue = require("../libs/vue");
(function() {
    var templAddr = '<div>\
          <dropdown placeholder="省份" :options="province" v-model="selProvince"></dropdown>\
          <dropdown placeholder="城市" :options="city" v-model="selCity"></dropdown>\
          <dropdown placeholder="区/县" :options="district" v-model="selDistrict"></dropdown>\
     </div>';
    Vue.component("addr-select", {
        template: templAddr,
        props: ["addrdata"],
        data: function() {
            var province = [];
            var city = [];
            var district = [];
            for (var i = 0; i < this.addrdata.length; i++) {
                province.push(this.addrdata[i].name);
            }
            for (var j = 0; j < this.addrdata[0].citys.length; j++) {
                city.push(this.addrdata[0].citys[j].city);
            };
            district = this.addrdata[0].citys[0].conts;
            var dataBase = {
                province: province,
                city: city,
                district: district,
                selProvince: "",
                selCity: "",
                selDistrict: "",
                selCityArray: []
            };
            return dataBase;
        },
        watch: {
            "selProvince": function(curval) {
                var city = [];
                var district = [];
                for (var i = 0; i < this.addrdata.length; i++) {
                    if (this.addrdata[i].name == curval) {
                        this.selCityArray = this.addrdata[i].citys;
                        for (var j = 0; j < this.addrdata[i].citys.length; j++) {
                            city.push(this.addrdata[i].citys[j].city);
                        };
                        district = this.addrdata[i].citys[0].conts;
                        break;
                    }
                }
                this.city = city;
                this.selCity = city[0];
                this.district = district;
                this.selDistrict = district[0];
                // selectEventBind();
            },
            "selCity": function(curval) {
                var district = [];
                for (var i = 0; i < this.selCityArray.length; i++) {
                    if (this.selCityArray[i].city == curval) {
                        district = this.selCityArray[i].conts;
                        break;
                    }
                }
                this.district = district;
                this.selDistrict = district[0];
                // selectEventBind();
            }
        }
    });
})()