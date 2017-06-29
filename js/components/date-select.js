var Vue = require("../libs/vue.min");
(function() {
    var dateTempl = '<div style="display:inline-block;">\
        <dropdown :options="startyears" class="sel-startyear" v-model="date.startyear" placeholder="开始年份"></dropdown>\
        <dropdown :options="startmonths" class="sel-startmonth" v-model="date.startmonth" placeholder="开始月份"></dropdown><i class="bind-line"></i>\
        <dropdown :options="database.endyears" class="sel-endyear" v-model="date.endyear" classes="endyear" placeholder="结束年份"></dropdown>\
        <dropdown :options="database.endmonths" class="sel-endmonth" v-model="date.endmonth" placeholder="结束月份"></dropdown>\
    </div>';

    Vue.component("date-select", {
        template: dateTempl,
        props: ['startyears', 'startmonths', 'initdate'],
        data: function() {
            return {
                database: {
                    endyears: [],
                    endmonths: []
                },
                date: {
                    startyear: "",
                    startmonth: "",
                    endyear: "",
                    endmonth: ""
                }
            }
        },
        watch: {
            "date.startyear": function(curval) {
                var years = [];
                for (var i = parseInt(this.startyears[0]); i >= parseInt(curval); i--) {
                    years.push(i);
                }
                this.database.endyears = years;
                if (this.date.endyear < curval) {
                    this.date.endyear = curval;
                }
                if (this.date.endyear != curval) { //改变月份的下拉选项
                    this.database.endmonths = this.startmonths;
                } else {
                    var months = [];
                    for (var j = parseInt(this.date.startmonth); j <= 12; j++) {
                        if (j < 10) {
                            j = "0" + j;
                        };
                        months.push(j);
                    };
                    this.database.endmonths = months;
                    if (parseInt(this.date.endmonth) < parseInt(this.date.startmonth)) {
                        this.date.endmonth = this.date.startmonth;
                    }
                }
            },
            "date.endyear": function(curval) {
                if (this.date.startyear != curval) { //改变月份的下拉选项
                    this.database.endmonths = this.startmonths;
                } else {
                    var months = [];
                    for (var j = parseInt(this.date.startmonth); j <= 12; j++) {
                        if (j < 10) {
                            j = "0" + j;
                        };
                        months.push(j);
                    };
                    this.database.endmonths = months;
                    if (parseInt(this.date.endmonth) < parseInt(this.date.startmonth)) {
                        this.date.endmonth = this.date.startmonth;
                    }
                }
            },
            "date.startmonth": function(curval) {
                if (this.date.startyear == this.date.endyear) {
                    var months = [];
                    for (var j = parseInt(curval); j <= 12; j++) {
                        if (j < 10) {
                            j = "0" + j;
                        };
                        months.push(j);
                    };
                    this.database.endmonths = months;
                    if (parseInt(this.date.endmonth) < parseInt(this.date.startmonth)) {
                        this.date.endmonth = this.date.startmonth;
                    }
                } else {
                    this.database.endmonths = this.startmonths;
                };
            },
            "initdate": function(initdate) {
                if (initdate) {
                    this.date.startyear = initdate.startyear;
                    this.date.startmonth = initdate.startmonth;
                    this.date.endyear = initdate.endyear;
                    this.date.endmonth = initdate.endmonth;
                }
            }
        },
        mounted: function() {
            this.database.endyears = this.startyears;
            this.database.endmonths = this.startmonths;
            if (this.initdate) {
                this.date.startyear = this.initdate.startyear;
                this.date.startmonth = this.initdate.startmonth;
                this.date.endyear = this.initdate.endyear;
                this.date.endmonth = this.initdate.endmonth;
            }
        }
    })
})()