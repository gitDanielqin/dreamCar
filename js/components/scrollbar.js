var Vue = require("../libs/vue.min");
(function() {
    var scrollTmpl = '<p class="scrollbar"><i class="scroll-btn" @mousedown.stop="slide($event)"></i></p>';
    Vue.component("scrollbar", {
        template: scrollTmpl,
        props: ['percent'],
        methods: {
            slide: function(ev) {
                var obj = ev.target;
                var init_mouse = ev.clientX;
                var init_slider = $(obj).position().left;
                var _this = this;

                $(document).bind('mousemove', function(ev) {
                    var maxLeft = $(".scrollbar").width() - $(".scroll-btn").width();
                    var left_value = init_slider + ev.clientX - init_mouse;
                    if (left_value < 0) {
                        left_value = 0;
                    } else if (left_value > maxLeft) {
                        left_value = maxLeft;
                    }
                    obj.style.left = left_value + "px";
                    var percent_new = Math.round(100 * left_value / maxLeft);
                    _this.$emit('scrollev', percent_new);
                });
                $(document).bind('mouseup', function() {
                    $(document).unbind('mousemove');
                })
            }
        },
        mounted: function() {
            var maxLeft = $(".scrollbar").width() - $(".scroll-btn").width();
            var left_v = Math.round(this.percent * maxLeft / 100);
            $(".scroll-btn").css("left", left_v + "px")
        }
    });
})();