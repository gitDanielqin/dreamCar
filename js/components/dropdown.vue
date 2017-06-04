<template>
    <div :class = "classStyle" @click.stop = "clickEv($event.target)" style = "display:inline-block" >
        <input type = "text" :placeholder = "placeholder" :value = "value" disabled >
        <ul>
            <li v-for = "option in options" @click = "selectItem(option,$event.target)" @mouseover = "overItem($event.target)" @mouseout = "outItem($event.target)"> 
                {{option }} 
            </li> 
        </ul> 
    </div> 
</template>

<script>
    import $ from "../libs/jquery-3.1.0.min.js"
    var Vue = require("../libs/vue.min.js");
    module.exports={
        props: ["placeholder", "options", "value", "classes"],
        data: function() {
            var classStyle = "";
            if (this.classes) {
                classStyle = this.classes + " selectee";
            } else {
                classStyle = "selectee";
            };
            return {
                showOps: true,
                classStyle: classStyle
            }
        },
        methods: {
            selectItem: function(item, obj) {
                this.$emit('input', item);
                $(obj).siblings(".selected").removeClass("selected");
                $(obj).addClass("selected");
                $(obj).parent("ul").siblings("input").val($(obj).text());
                $(obj).parent("ul").hide();
                this.$emit('callback');
                return false;
            },
            overItem: function(obj) {
                $(obj).addClass("over");
            },
            outItem: function(obj) {
                $(obj).removeClass("over");
            },
            clickEv: function(obj) {
                $(".selectee ul").hide();
                //$(".pop-box").hide();
                $(obj).siblings("ul").show();
                return false;
            }
        },
        mounted: function() {
            $("body").click(function() {
                $(".selectee ul").hide();
            });
        },
    }
</script>

<style scoped>
.selectee {
    position: relative;
    display: inline-block;
}

.selectee input {
    background: url("../../images/icon-select.png") no-repeat right 10px;
    border: 1px solid #ccc;
    padding-left: 10px;
    width: 100%;
}

.selectee input.hint-nullable {
    background: url("../../images/icon-select.png") no-repeat right 10px #ffd2d2;
}

.selectee ul {
    position: absolute;
    left: 0;
    top: 36px;
    border: 1px solid #d2d2d2;
    font-size: 12px;
    padding-bottom: 5px;
    max-height: 140px;
    overflow: auto;
    background: #fff;
    display: none;
    z-index: 10;
}

.selectee ul li {
    line-height: 24px;
    height: 24px;
    cursor: pointer;
    padding-left: 10px;
}

.selectee ul li.over {
    background: #9bcce5;
    color: #fff;
}

.selectee ul li.selected {
    background: #2ea8e6;
    color: #fff;
}
</style>