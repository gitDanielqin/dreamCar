webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var templMajor = '<div style="position:relative" class="pop-major-box">\
          <span @click.stop="pop(1,$event.target)" class="major-input major-input-1"><input type="text" placeholder="一级学科" disabled v-model="selMajor" ></span>\
          <span @click.stop="pop(2,$event.target)" class="major-input major-input-2"><input type="text" placeholder="二级学科" disabled v-model="selSubMajor"></span>\
          <input type="text" class="ex-major" placeholder="请输入专业名称" v-model="exMajor" v-show="showExMajor"/>\
          <div class="pop-major-1 pop-major" v-show="showMajor1">\
               <h3 class="pop-major-title">专业名称<i class="pic-wrapper major-closer" @click=closePop><span class="pic-icon icon-close"></span></i></h3>\
               <div class="major-table-box pop-box">\
                    <table>\
                         <tr v-for="tr in major.trs">\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4]}}</td>\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4+1]}}</td>\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4+2]}}</td>\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4+3]}}</td>\
                         </tr>\
                    </table>\
               </div>\
          </div>\
          <div class="pop-major-2 pop-major" v-show="showMajor2">\
               <h3 class="pop-major-title">专业名称<i class="pic-wrapper major-closer" @click=closePop><span class="pic-icon icon-close"></span></i></h3>\
               <div class="major-table-box pop-box">\
                    <table>\
                         <tr v-for="tr in submajor.trs">\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*3]}}</td>\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*3+1]}}</td>\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*3+2]}}</td>\
                         </tr>\
                    </table>\
               </div>\
          </div>\
     </div>';
    Vue.component("major-pop", {
        template: templMajor,
        props: ["majordata", "initmajors"],
        data: function data() {
            var major = {
                trs: [],
                dataArray: []
            };
            var submajor = {
                trs: [],
                dataArray: []
            };

            for (var i = 0; i < this.majordata.length; i++) {
                major.dataArray.push(this.majordata[i].major);
                if (i % 4 == 0) {
                    major.trs.push(Math.floor(i / 4));
                }
            };
            submajor.dataArray = this.majordata[0].submajor;
            for (var j = 0; j < submajor.dataArray.length; j++) {
                if (j % 3 == 0) {
                    submajor.trs.push(Math.floor(j / 3));
                }
            }
            var dataBase = {
                showMajor1: false,
                showMajor2: false,
                showExMajor: false,
                major: major,
                submajor: submajor,
                selMajor: "",
                selSubMajor: "",
                exMajor: ""
            };
            return dataBase;
        },
        methods: {
            pop: function pop(index, obj) {
                $(".pop-major").hide();
                $(obj).parent().siblings(".pop-major-" + index).show();
                initPos();
            },
            clickMajor: function clickMajor(obj) {
                this.selMajor = $(obj).html();
                $(".pop-major").hide();
            },
            clickSubMajor: function clickSubMajor(obj) {
                this.selSubMajor = $(obj).html();
                $(".pop-major").hide();
            },
            closePop: function closePop() {
                $(".pop-major").hide();
            }
        },
        mounted: function mounted() {
            initPop();
            if (this.initmajors) {
                this.selMajor = this.initmajors.major;
            }
        },
        watch: {
            "initmajors": function initmajors(curval) {
                if (curval && curval.major) {
                    this.selMajor = curval.major;
                }
            },
            "selMajor": function selMajor(curval) {
                for (var i = 0; i < this.majordata.length; i++) {
                    if (this.majordata[i].major == curval) {
                        this.submajor.dataArray = this.majordata[i].submajor;
                        this.selSubMajor = this.submajor.dataArray[0];
                        this.submajor.trs = [];
                        for (var j = 0; j < this.submajor.dataArray.length; j++) {
                            if (j % 3 == 0) {
                                this.submajor.trs.push(Math.floor(j / 3));
                            }
                        }
                        break;
                    }
                }
            },
            "selSubMajor": function selSubMajor(curval) {
                if (curval == "其他") {
                    this.showExMajor = true;
                } else {
                    this.showExMajor = false;
                }
            }
        }
    });

    function initPos() {
        $(".pop-major-1:visible").each(function () {
            if (!this.initFlag) {
                $(this).css({
                    "left": 0,
                    "top": $(this).siblings(".major-input-1").height() - 2 + "px"
                });
                this.initFlag = true;
            }
        });

        $(".pop-major-2:visible").each(function () {
            if (!this.initFlag) {
                $(this).css({
                    "left": $(this).siblings(".major-input-2").offset().left - $(this).parent(".pop-major-box").offset().left + "px",
                    "top": $(this).siblings(".major-input-2").height() - 2 + "px"
                });
                this.initFlag = true;
            }
        });
    }

    function initPop() {
        $(".pop-major-box .major-input input").each(function () {
            if (!this.initFlag) {
                $(this).width($(this).width() - 20);
                $(this).css("padding-right", 20 + "px");
                var bgPos = $(this).width() + 10 + "px center";
                $(this).attr("disabled", "true").css("background-position", bgPos);
                this.initFlag = true;
            }
        });
    }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by ezgoing on 14/9/2014.
 */



(function (factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        factory(jQuery);
    }
})(function ($) {
    var cropbox = function cropbox(options, el) {
        var el = el || $(options.imageBox),
            obj = {
            state: {},
            ratio: 1,
            options: options,
            imageBox: el,
            thumbBox: el.find(options.thumbBox),
            spinner: el.find(options.spinner),
            image: new Image(),
            getDataURL: function getDataURL() {
                var width = this.thumbBox.width(),
                    height = this.thumbBox.height(),
                    canvas = document.createElement("canvas"),
                    dim = el.css('background-position').split(' '),
                    size = el.css('background-size').split(' '),
                    dx = parseInt(dim[0]) - el.width() / 2 + width / 2,
                    dy = parseInt(dim[1]) - el.height() / 2 + height / 2,
                    dw = parseInt(size[0]),
                    dh = parseInt(size[1]),
                    sh = parseInt(this.image.height),
                    sw = parseInt(this.image.width);

                canvas.width = width;
                canvas.height = height;
                var context = canvas.getContext("2d");
                context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
                var imageData = canvas.toDataURL('image/png');
                return imageData;
            },
            getBlob: function getBlob() {
                var imageData = this.getDataURL();
                var b64 = imageData.replace('data:image/png;base64,', '');
                var binary = atob(b64);
                var array = [];
                for (var i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }
                return new Blob([new Uint8Array(array)], { type: 'image/png' });
            },
            zoomIn: function zoomIn() {
                this.ratio *= 1.1;
                setBackground();
            },
            zoomOut: function zoomOut() {
                this.ratio *= 0.9;
                setBackground();
            }
        },
            setBackground = function setBackground() {
            var w = parseInt(obj.image.width) * obj.ratio;
            var h = parseInt(obj.image.height) * obj.ratio;

            var pw = (el.width() - w) / 2;
            var ph = (el.height() - h) / 2;

            el.css({
                'background-image': 'url(' + obj.image.src + ')',
                'background-size': w + 'px ' + h + 'px',
                'background-position': pw + 'px ' + ph + 'px',
                'background-repeat': 'no-repeat' });
        },
            imgMouseDown = function imgMouseDown(e) {
            e.stopImmediatePropagation();

            obj.state.dragable = true;
            obj.state.mouseX = e.clientX;
            obj.state.mouseY = e.clientY;
        },
            imgMouseMove = function imgMouseMove(e) {
            e.stopImmediatePropagation();

            if (obj.state.dragable) {
                var x = e.clientX - obj.state.mouseX;
                var y = e.clientY - obj.state.mouseY;

                var bg = el.css('background-position').split(' ');

                var bgX = x + parseInt(bg[0]);
                var bgY = y + parseInt(bg[1]);

                el.css('background-position', bgX + 'px ' + bgY + 'px');

                obj.state.mouseX = e.clientX;
                obj.state.mouseY = e.clientY;
            }
        },
            imgMouseUp = function imgMouseUp(e) {
            e.stopImmediatePropagation();
            obj.state.dragable = false;
        },
            zoomImage = function zoomImage(e) {
            e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio *= 1.1 : obj.ratio *= 0.9;
            setBackground();
            return false;
        };

        obj.spinner.show();
        obj.image.onload = function () {
            obj.spinner.hide();
            setBackground();

            el.bind('mousedown', imgMouseDown);
            el.bind('mousemove', imgMouseMove);
            $(window).bind('mouseup', imgMouseUp);
            el.bind('mousewheel DOMMouseScroll', zoomImage);
        };
        obj.image.src = options.imgSrc;
        el.on('remove', function () {
            $(window).unbind('mouseup', imgMouseUp);
        });

        return obj;
    };

    jQuery.fn.cropbox = function (options) {
        return new cropbox(options, this);
    };
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* =========================================================
 * foundation-datepicker.js
 * Copyright 2015 Peter Beno, najlepsiwebdesigner@gmail.com, @benopeter
 * project website http://foundation-datepicker.peterbeno.com
 * ========================================================= */
!function ($) {

    function UTCDate() {
        return new Date(Date.UTC.apply(Date, arguments));
    }

    function UTCToday() {
        var today = new Date();
        return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    }

    var Datepicker = function Datepicker(element, options) {
        var that = this;

        this.element = $(element);
        this.autoShow = options.autoShow || true;
        this.appendTo = options.appendTo || 'body';
        this.closeButton = options.closeButton;
        this.language = options.language || this.element.data('date-language') || "en";
        this.language = this.language in dates ? this.language : this.language.split('-')[0]; //Check if "de-DE" style date is available, if not language should fallback to 2 letter code eg "de"
        this.language = this.language in dates ? this.language : "en";
        this.isRTL = dates[this.language].rtl || false;
        this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || 'mm/dd/yyyy');
        this.isInline = false;
        this.isInput = this.element.is('input');
        this.component = this.element.is('.date') ? this.element.find('.prefix, .postfix') : false;
        this.hasInput = this.component && this.element.find('input').length;
        this.disableDblClickSelection = options.disableDblClickSelection;
        this.onRender = options.onRender || function () {};
        if (this.component && this.component.length === 0) {
            this.component = false;
        }
        this.linkField = options.linkField || this.element.data('link-field') || false;
        this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || 'yyyy-mm-dd hh:ii:ss');
        this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
        this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
        this.initialDate = options.initialDate || null;

        this._attachEvents();

        this.minView = 0;
        if ('minView' in options) {
            this.minView = options.minView;
        } else if ('minView' in this.element.data()) {
            this.minView = this.element.data('min-view');
        }
        this.minView = DPGlobal.convertViewMode(this.minView);

        this.maxView = DPGlobal.modes.length - 1;
        if ('maxView' in options) {
            this.maxView = options.maxView;
        } else if ('maxView' in this.element.data()) {
            this.maxView = this.element.data('max-view');
        }
        this.maxView = DPGlobal.convertViewMode(this.maxView);

        this.startViewMode = 'month';
        if ('startView' in options) {
            this.startViewMode = options.startView;
        } else if ('startView' in this.element.data()) {
            this.startViewMode = this.element.data('start-view');
        }
        this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
        this.viewMode = this.startViewMode;

        if (!('minView' in options) && !('maxView' in options) && !(this.element.data('min-view') && !this.element.data('max-view'))) {
            this.pickTime = false;
            if ('pickTime' in options) {
                this.pickTime = options.pickTime;
            }
            if (this.pickTime == true) {
                this.minView = 0;
                this.maxView = 4;
            } else {
                this.minView = 2;
                this.maxView = 4;
            }
        }

        this.forceParse = true;
        if ('forceParse' in options) {
            this.forceParse = options.forceParse;
        } else if ('dateForceParse' in this.element.data()) {
            this.forceParse = this.element.data('date-force-parse');
        }

        this.picker = $(DPGlobal.template).appendTo(this.isInline ? this.element : this.appendTo).on({
            click: $.proxy(this.click, this),
            mousedown: $.proxy(this.mousedown, this)
        });
        if (this.closeButton) {
            this.picker.find('a.datepicker-close').show();
        } else {
            this.picker.find('a.datepicker-close').hide();
        }

        if (this.isInline) {
            this.picker.addClass('datepicker-inline');
        } else {
            this.picker.addClass('datepicker-dropdown dropdown-menu');
        }
        if (this.isRTL) {
            this.picker.addClass('datepicker-rtl');
            this.picker.find('.prev i, .next i').toggleClass('fa-chevron-left fa-chevron-right');
        }
        $(document).on('mousedown', function (e) {
            // Clicked outside the datepicker, hide it
            if ($(e.target).closest('.datepicker.datepicker-inline, .datepicker.datepicker-dropdown').length === 0) {
                that.hide();
            }
        });

        this.autoclose = true;
        if ('autoclose' in options) {
            this.autoclose = options.autoclose;
        } else if ('dateAutoclose' in this.element.data()) {
            this.autoclose = this.element.data('date-autoclose');
        }

        this.keyboardNavigation = true;
        if ('keyboardNavigation' in options) {
            this.keyboardNavigation = options.keyboardNavigation;
        } else if ('dateKeyboardNavigation' in this.element.data()) {
            this.keyboardNavigation = this.element.data('date-keyboard-navigation');
        }

        this.todayBtn = options.todayBtn || this.element.data('date-today-btn') || false;
        this.todayHighlight = options.todayHighlight || this.element.data('date-today-highlight') || false;

        this.calendarWeeks = false;
        if ('calendarWeeks' in options) {
            this.calendarWeeks = options.calendarWeeks;
        } else if ('dateCalendarWeeks' in this.element.data()) {
            this.calendarWeeks = this.element.data('date-calendar-weeks');
        }
        if (this.calendarWeeks) this.picker.find('tfoot th.today').attr('colspan', function (i, val) {
            return parseInt(val) + 1;
        });

        this.weekStart = (options.weekStart || this.element.data('date-weekstart') || dates[this.language].weekStart || 0) % 7;
        this.weekEnd = (this.weekStart + 6) % 7;
        this.startDate = -Infinity;
        this.endDate = Infinity;
        this.daysOfWeekDisabled = [];
        this.setStartDate(options.startDate || this.element.data('date-startdate'));
        this.setEndDate(options.endDate || this.element.data('date-enddate'));
        this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));

        this.fillDow();
        this.fillMonths();
        this.update();

        this.showMode();

        if (this.isInline) {
            this.show();
        }
    };

    Datepicker.prototype = {
        constructor: Datepicker,

        _events: [],
        _attachEvents: function _attachEvents() {
            this._detachEvents();
            if (this.isInput) {
                // single input
                this._events = [[this.element, {
                    focus: this.autoShow ? $.proxy(this.show, this) : function () {},
                    keyup: $.proxy(this.update, this),
                    keydown: $.proxy(this.keydown, this)
                }]];
            } else if (this.component && this.hasInput) {
                // component: input + button
                this._events = [
                // For components that are not readonly, allow keyboard nav
                [this.element.find('input'), {
                    focus: this.autoShow ? $.proxy(this.show, this) : function () {},
                    keyup: $.proxy(this.update, this),
                    keydown: $.proxy(this.keydown, this)
                }], [this.component, {
                    click: $.proxy(this.show, this)
                }]];
            } else if (this.element.is('div')) {
                // inline datepicker
                this.isInline = true;
            } else {
                this._events = [[this.element, {
                    click: $.proxy(this.show, this)
                }]];
            }

            if (this.disableDblClickSelection) {
                this._events[this._events.length] = [this.element, {
                    dblclick: function dblclick(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        $(this).blur();
                    }
                }];
            }

            for (var i = 0, el, ev; i < this._events.length; i++) {
                el = this._events[i][0];
                ev = this._events[i][1];
                el.on(ev);
            }
        },
        _detachEvents: function _detachEvents() {
            for (var i = 0, el, ev; i < this._events.length; i++) {
                el = this._events[i][0];
                ev = this._events[i][1];
                el.off(ev);
            }
            this._events = [];
        },

        show: function show(e) {
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.update();
            this.place();
            $(window).on('resize', $.proxy(this.place, this));
            if (e) {
                e.stopPropagation();
                e.preventDefault();
            }
            this.element.trigger({
                type: 'show',
                date: this.date
            });
        },

        hide: function hide(e) {
            if (this.isInline) return;
            if (!this.picker.is(':visible')) return;
            this.picker.hide();
            $(window).off('resize', this.place);
            this.viewMode = this.startViewMode;
            this.showMode();
            if (!this.isInput) {
                $(document).off('mousedown', this.hide);
            }

            if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find('input').val())) this.setValue();
            this.element.trigger({
                type: 'hide',
                date: this.date
            });
        },

        remove: function remove() {
            this._detachEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
        },

        getDate: function getDate() {
            var d = this.getUTCDate();
            return new Date(d.getTime() + d.getTimezoneOffset() * 60000);
        },

        getUTCDate: function getUTCDate() {
            return this.date;
        },

        setDate: function setDate(d) {
            this.setUTCDate(new Date(d.getTime() - d.getTimezoneOffset() * 60000));
        },

        setUTCDate: function setUTCDate(d) {
            this.date = d;
            this.setValue();
        },

        setValue: function setValue() {
            var formatted = this.getFormattedDate();
            if (!this.isInput) {
                if (this.component) {
                    this.element.find('input').val(formatted);
                }
                this.element.data('date', formatted);
            } else {
                this.element.val(formatted);
            }
        },

        getFormattedDate: function getFormattedDate(format) {
            if (format === undefined) format = this.format;
            return DPGlobal.formatDate(this.date, format, this.language);
        },

        setStartDate: function setStartDate(startDate) {
            this.startDate = startDate || -Infinity;
            if (this.startDate !== -Infinity) {
                this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language);
            }
            this.update();
            this.updateNavArrows();
        },

        setEndDate: function setEndDate(endDate) {
            this.endDate = endDate || Infinity;
            if (this.endDate !== Infinity) {
                this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language);
            }
            this.update();
            this.updateNavArrows();
        },

        setDaysOfWeekDisabled: function setDaysOfWeekDisabled(daysOfWeekDisabled) {
            this.daysOfWeekDisabled = daysOfWeekDisabled || [];
            if (!$.isArray(this.daysOfWeekDisabled)) {
                this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
            }
            this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
                return parseInt(d, 10);
            });
            this.update();
            this.updateNavArrows();
        },

        place: function place() {
            if (this.isInline) return;
            var zIndex = parseInt(this.element.parents().filter(function () {
                return $(this).css('z-index') != 'auto';
            }).first().css('z-index')) + 10;
            var textbox = this.component ? this.component : this.element;
            var offset = textbox.offset();
            var height = textbox.outerHeight() + parseInt(textbox.css('margin-top'));
            var width = textbox.outerWidth() + parseInt(textbox.css('margin-left'));
            var fullOffsetTop = offset.top + height;
            var offsetLeft = offset.left;
            // if the datepicker is going to be below the window, show it on top of the input
            if (fullOffsetTop + this.picker.outerHeight() >= $(window).scrollTop() + $(window).height()) {
                fullOffsetTop = offset.top - this.picker.outerHeight();
            }

            // if the datepicker is going to go past the right side of the window, we want
            // to set the right position so the datepicker lines up with the textbox
            if (offset.left + this.picker.width() >= $(window).width()) {
                offsetLeft = offset.left + width - this.picker.width();
            }
            this.picker.css({
                top: fullOffsetTop,
                left: offsetLeft,
                zIndex: zIndex
            });
        },

        update: function update() {
            var date,
                fromArgs = false;
            var currentVal = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
            if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
                date = arguments[0];
                fromArgs = true;
            } else if (!currentVal && this.initialDate != null) {
                // If value is not set, set it to the initialDate 
                date = this.initialDate;
            } else {
                date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
            }

            this.date = DPGlobal.parseDate(date, this.format, this.language);

            if (fromArgs || this.initialDate != null) this.setValue();

            if (this.date < this.startDate) {
                this.viewDate = new Date(this.startDate.valueOf());
            } else if (this.date > this.endDate) {
                this.viewDate = new Date(this.endDate.valueOf());
            } else {
                this.viewDate = new Date(this.date.valueOf());
            }
            this.fill();
        },

        fillDow: function fillDow() {
            var dowCnt = this.weekStart,
                html = '<tr>';
            if (this.calendarWeeks) {
                var cell = '<th class="cw">&nbsp;</th>';
                html += cell;
                this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
            }
            while (dowCnt < this.weekStart + 7) {
                html += '<th class="dow">' + dates[this.language].daysMin[dowCnt++ % 7] + '</th>';
            }
            html += '</tr>';
            this.picker.find('.datepicker-days thead').append(html);
        },

        fillMonths: function fillMonths() {
            var html = '',
                i = 0;
            while (i < 12) {
                html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>';
            }
            this.picker.find('.datepicker-months td').html(html);
        },

        fill: function fill() {
            if (this.date == null || this.viewDate == null) {
                return;
            }

            var d = new Date(this.viewDate.valueOf()),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth(),
                dayMonth = d.getUTCDate(),
                hours = d.getUTCHours(),
                minutes = d.getUTCMinutes(),
                startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
                startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
                endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
                endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
                currentDate = this.date && this.date.valueOf(),
                today = new Date(),
                titleFormat = dates[this.language].titleFormat || dates['en'].titleFormat;
            // this.picker.find('.datepicker-days thead th.date-switch')
            // 			.text(DPGlobal.formatDate(new UTCDate(year, month), titleFormat, this.language));

            this.picker.find('.datepicker-days thead th:eq(1)').text(dates[this.language].months[month] + ' ' + year);
            this.picker.find('.datepicker-hours thead th:eq(1)').text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
            this.picker.find('.datepicker-minutes thead th:eq(1)').text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);

            this.picker.find('tfoot th.today').text(dates[this.language].today).toggle(this.todayBtn !== false);
            this.updateNavArrows();
            this.fillMonths();
            var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
                day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
            prevMonth.setUTCDate(day);
            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
            var nextMonth = new Date(prevMonth.valueOf());
            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
            nextMonth = nextMonth.valueOf();
            var html = [];
            var clsName;
            while (prevMonth.valueOf() < nextMonth) {
                if (prevMonth.getUTCDay() == this.weekStart) {
                    html.push('<tr>');
                    if (this.calendarWeeks) {
                        // adapted from https://github.com/timrwood/moment/blob/master/moment.js#L128
                        var a = new Date(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth(), prevMonth.getUTCDate() - prevMonth.getDay() + 10 - (this.weekStart && this.weekStart % 7 < 5 && 7)),
                            b = new Date(a.getFullYear(), 0, 4),
                            calWeek = ~~((a - b) / 864e5 / 7 + 1.5);
                        html.push('<td class="cw">' + calWeek + '</td>');
                    }
                }
                clsName = ' ' + this.onRender(prevMonth) + ' ';
                if (prevMonth.getUTCFullYear() < year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month) {
                    clsName += ' old';
                } else if (prevMonth.getUTCFullYear() > year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month) {
                    clsName += ' new';
                }
                // Compare internal UTC date with local today, not UTC today
                if (this.todayHighlight && prevMonth.getUTCFullYear() == today.getFullYear() && prevMonth.getUTCMonth() == today.getMonth() && prevMonth.getUTCDate() == today.getDate()) {
                    clsName += ' today';
                }
                if (currentDate && prevMonth.valueOf() == currentDate) {
                    clsName += ' active';
                }
                if (prevMonth.valueOf() < this.startDate || prevMonth.valueOf() > this.endDate || $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
                    clsName += ' disabled';
                }
                html.push('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + '</td>');
                if (prevMonth.getUTCDay() == this.weekEnd) {
                    html.push('</tr>');
                }
                prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
            }
            this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

            html = [];
            for (var i = 0; i < 24; i++) {
                var actual = UTCDate(year, month, dayMonth, i);
                clsName = '';
                // We want the previous hour for the startDate
                if (actual.valueOf() + 3600000 < this.startDate || actual.valueOf() > this.endDate) {
                    clsName += ' disabled';
                } else if (hours == i) {
                    clsName += ' active';
                }
                html.push('<span class="hour' + clsName + '">' + i + ':00</span>');
            }
            this.picker.find('.datepicker-hours td').html(html.join(''));

            html = [];
            for (var i = 0; i < 60; i += this.minuteStep) {
                var actual = UTCDate(year, month, dayMonth, hours, i);
                clsName = '';
                if (actual.valueOf() < this.startDate || actual.valueOf() > this.endDate) {
                    clsName += ' disabled';
                } else if (Math.floor(minutes / this.minuteStep) == Math.floor(i / this.minuteStep)) {
                    clsName += ' active';
                }
                html.push('<span class="minute' + clsName + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>');
            }
            this.picker.find('.datepicker-minutes td').html(html.join(''));

            var currentYear = this.date && this.date.getUTCFullYear();
            var months = this.picker.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
            if (currentYear && currentYear == year) {
                months.eq(this.date.getUTCMonth()).addClass('active');
            }
            if (year < startYear || year > endYear) {
                months.addClass('disabled');
            }
            if (year == startYear) {
                months.slice(0, startMonth).addClass('disabled');
            }
            if (year == endYear) {
                months.slice(endMonth + 1).addClass('disabled');
            }

            html = '';
            year = parseInt(year / 10, 10) * 10;
            var yearCont = this.picker.find('.datepicker-years').find('th:eq(1)').text(year + '-' + (year + 9)).end().find('td');
            year -= 1;
            for (var i = -1; i < 11; i++) {
                html += '<span class="year' + (i == -1 || i == 10 ? ' old' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
                year += 1;
            }
            yearCont.html(html);
        },

        updateNavArrows: function updateNavArrows() {
            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth(),
                day = d.getUTCDate(),
                hour = d.getUTCHours();
            switch (this.viewMode) {
                case 0:
                    if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate() && hour <= this.startDate.getUTCHours()) {
                        this.picker.find('.prev').css({
                            visibility: 'hidden'
                        });
                    } else {
                        this.picker.find('.prev').css({
                            visibility: 'visible'
                        });
                    }
                    if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate() && hour >= this.endDate.getUTCHours()) {
                        this.picker.find('.next').css({
                            visibility: 'hidden'
                        });
                    } else {
                        this.picker.find('.next').css({
                            visibility: 'visible'
                        });
                    }
                    break;
                case 1:
                    if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate()) {
                        this.picker.find('.prev').css({
                            visibility: 'hidden'
                        });
                    } else {
                        this.picker.find('.prev').css({
                            visibility: 'visible'
                        });
                    }
                    if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate()) {
                        this.picker.find('.next').css({
                            visibility: 'hidden'
                        });
                    } else {
                        this.picker.find('.next').css({
                            visibility: 'visible'
                        });
                    }
                    break;
                case 2:
                    if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
                        this.picker.find('.prev').css({
                            visibility: 'hidden'
                        });
                    } else {
                        this.picker.find('.prev').css({
                            visibility: 'visible'
                        });
                    }
                    if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
                        this.picker.find('.next').css({
                            visibility: 'hidden'
                        });
                    } else {
                        this.picker.find('.next').css({
                            visibility: 'visible'
                        });
                    }
                    break;
                case 3:
                case 4:
                    if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
                        this.picker.find('.prev').css({
                            visibility: 'hidden'
                        });
                    } else {
                        this.picker.find('.prev').css({
                            visibility: 'visible'
                        });
                    }
                    if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
                        this.picker.find('.next').css({
                            visibility: 'hidden'
                        });
                    } else {
                        this.picker.find('.next').css({
                            visibility: 'visible'
                        });
                    }
                    break;
            }
        },

        click: function click(e) {
            e.stopPropagation();
            e.preventDefault();

            if ($(e.target).hasClass('datepicker-close') || $(e.target).parent().hasClass('datepicker-close')) {
                this.hide();
            }

            var target = $(e.target).closest('span, td, th');
            if (target.length == 1) {
                if (target.is('.disabled')) {
                    this.element.trigger({
                        type: 'outOfRange',
                        date: this.viewDate,
                        startDate: this.startDate,
                        endDate: this.endDate
                    });
                    return;
                }

                switch (target[0].nodeName.toLowerCase()) {
                    case 'th':
                        switch (target[0].className) {
                            case 'date-switch':
                                this.showMode(1);
                                break;
                            case 'prev':
                            case 'next':
                                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveHour(this.viewDate, dir);
                                        break;
                                    case 1:
                                        this.viewDate = this.moveDate(this.viewDate, dir);
                                        break;
                                    case 2:
                                        this.viewDate = this.moveMonth(this.viewDate, dir);
                                        break;
                                    case 3:
                                    case 4:
                                        this.viewDate = this.moveYear(this.viewDate, dir);
                                        break;
                                }
                                this.fill();
                                break;
                            case 'today':
                                var date = new Date();
                                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

                                this.viewMode = this.startViewMode;
                                this.showMode(0);
                                this._setDate(date);
                                break;
                        }
                        break;
                    case 'span':
                        if (!target.is('.disabled')) {
                            if (target.is('.month')) {
                                if (this.minView === 3) {
                                    var month = target.parent().find('span').index(target) || 0;
                                    var year = this.viewDate.getUTCFullYear(),
                                        day = 1,
                                        hours = this.viewDate.getUTCHours(),
                                        minutes = this.viewDate.getUTCMinutes(),
                                        seconds = this.viewDate.getUTCSeconds();
                                    this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                                } else {
                                    this.viewDate.setUTCDate(1);
                                    var month = target.parent().find('span').index(target);
                                    this.viewDate.setUTCMonth(month);
                                    this.element.trigger({
                                        type: 'changeMonth',
                                        date: this.viewDate
                                    });
                                }
                            } else if (target.is('.year')) {
                                if (this.minView === 4) {
                                    var year = parseInt(target.text(), 10) || 0;
                                    var month = 0,
                                        day = 1,
                                        hours = this.viewDate.getUTCHours(),
                                        minutes = this.viewDate.getUTCMinutes(),
                                        seconds = this.viewDate.getUTCSeconds();
                                    this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                                } else {
                                    this.viewDate.setUTCDate(1);
                                    var year = parseInt(target.text(), 10) || 0;
                                    this.viewDate.setUTCFullYear(year);
                                    this.element.trigger({
                                        type: 'changeYear',
                                        date: this.viewDate
                                    });
                                }
                            } else if (target.is('.hour')) {
                                var hours = parseInt(target.text(), 10) || 0;
                                var year = this.viewDate.getUTCFullYear(),
                                    month = this.viewDate.getUTCMonth(),
                                    day = this.viewDate.getUTCDate(),
                                    minutes = this.viewDate.getUTCMinutes(),
                                    seconds = this.viewDate.getUTCSeconds();
                                this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                            } else if (target.is('.minute')) {
                                var minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
                                var year = this.viewDate.getUTCFullYear(),
                                    month = this.viewDate.getUTCMonth(),
                                    day = this.viewDate.getUTCDate(),
                                    hours = this.viewDate.getUTCHours(),
                                    seconds = this.viewDate.getUTCSeconds();
                                this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                            }

                            if (this.viewMode != 0) {

                                var oldViewMode = this.viewMode;
                                this.showMode(-1);
                                this.fill();
                                if (oldViewMode == this.viewMode && this.autoclose) {
                                    this.hide();
                                }
                            } else {
                                this.fill();
                                if (this.autoclose) {
                                    this.hide();
                                }
                            }
                        }
                        break;
                    case 'td':

                        if (target.is('.day') && !target.is('.disabled')) {
                            var day = parseInt(target.text(), 10) || 1;
                            var year = this.viewDate.getUTCFullYear(),
                                month = this.viewDate.getUTCMonth(),
                                hours = this.viewDate.getUTCHours(),
                                minutes = this.viewDate.getUTCMinutes(),
                                seconds = this.viewDate.getUTCSeconds();
                            if (target.is('.old')) {
                                if (month === 0) {
                                    month = 11;
                                    year -= 1;
                                } else {
                                    month -= 1;
                                }
                            } else if (target.is('.new')) {
                                if (month == 11) {
                                    month = 0;
                                    year += 1;
                                } else {
                                    month += 1;
                                }
                            }
                            this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                        }

                        var oldViewMode = this.viewMode;

                        this.showMode(-1);

                        this.fill();
                        if (oldViewMode == this.viewMode && this.autoclose) {
                            this.hide();
                        }
                        break;
                }
            }
        },

        _setDate: function _setDate(date, which) {

            if (!which || which == 'date') this.date = date;
            if (!which || which == 'view') this.viewDate = date;
            this.fill();
            this.setValue();
            this.element.trigger({
                type: 'changeDate',
                date: this.date
            });
            var element;
            if (this.isInput) {
                element = this.element;
            } else if (this.component) {
                element = this.element.find('input');
            }
            if (element) {
                element.change();
                if (this.autoclose && (!which || which == 'date')) {
                    // this.hide();
                }
            }
        },

        moveHour: function moveHour(date, dir) {
            if (!dir) return date;
            var new_date = new Date(date.valueOf());
            dir = dir > 0 ? 1 : -1;
            new_date.setUTCHours(new_date.getUTCHours() + dir);
            return new_date;
        },

        moveDate: function moveDate(date, dir) {
            if (!dir) return date;
            var new_date = new Date(date.valueOf());
            dir = dir > 0 ? 1 : -1;
            new_date.setUTCDate(new_date.getUTCDate() + dir);
            return new_date;
        },

        moveMonth: function moveMonth(date, dir) {
            if (!dir) return date;
            var new_date = new Date(date.valueOf()),
                day = new_date.getUTCDate(),
                month = new_date.getUTCMonth(),
                mag = Math.abs(dir),
                new_month,
                test;
            dir = dir > 0 ? 1 : -1;
            if (mag == 1) {
                test = dir == -1
                // If going back one month, make sure month is not current month
                // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
                ? function () {
                    return new_date.getUTCMonth() == month;
                }
                // If going forward one month, make sure month is as expected
                // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
                : function () {
                    return new_date.getUTCMonth() != new_month;
                };
                new_month = month + dir;
                new_date.setUTCMonth(new_month);
                // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
                if (new_month < 0 || new_month > 11) new_month = (new_month + 12) % 12;
            } else {
                // For magnitudes >1, move one month at a time...
                for (var i = 0; i < mag; i++) {
                    // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
                    new_date = this.moveMonth(new_date, dir);
                } // ...then reset the day, keeping it in the new month
                new_month = new_date.getUTCMonth();
                new_date.setUTCDate(day);
                test = function test() {
                    return new_month != new_date.getUTCMonth();
                };
            }
            // Common date-resetting loop -- if date is beyond end of month, make it
            // end of month
            while (test()) {
                new_date.setUTCDate(--day);
                new_date.setUTCMonth(new_month);
            }
            return new_date;
        },

        moveYear: function moveYear(date, dir) {
            return this.moveMonth(date, dir * 12);
        },

        dateWithinRange: function dateWithinRange(date) {
            return date >= this.startDate && date <= this.endDate;
        },

        keydown: function keydown(e) {
            if (this.picker.is(':not(:visible)')) {
                if (e.keyCode == 27) // allow escape to hide and re-show picker
                    this.show();
                return;
            }
            var dateChanged = false,
                dir,
                day,
                month,
                newDate,
                newViewDate;
            switch (e.keyCode) {
                case 27:
                    // escape
                    this.hide();
                    e.preventDefault();
                    break;
                case 37: // left
                case 39:
                    // right
                    if (!this.keyboardNavigation) break;
                    dir = e.keyCode == 37 ? -1 : 1;
                    if (e.ctrlKey) {
                        newDate = this.moveYear(this.date, dir);
                        newViewDate = this.moveYear(this.viewDate, dir);
                    } else if (e.shiftKey) {
                        newDate = this.moveMonth(this.date, dir);
                        newViewDate = this.moveMonth(this.viewDate, dir);
                    } else {
                        newDate = new Date(this.date.valueOf());
                        newDate.setUTCDate(this.date.getUTCDate() + dir);
                        newViewDate = new Date(this.viewDate.valueOf());
                        newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
                    }
                    if (this.dateWithinRange(newDate)) {
                        this.date = newDate;
                        this.viewDate = newViewDate;
                        this.setValue();
                        this.update();
                        e.preventDefault();
                        dateChanged = true;
                    }
                    break;
                case 38: // up
                case 40:
                    // down
                    if (!this.keyboardNavigation) break;
                    dir = e.keyCode == 38 ? -1 : 1;
                    if (e.ctrlKey) {
                        newDate = this.moveYear(this.date, dir);
                        newViewDate = this.moveYear(this.viewDate, dir);
                    } else if (e.shiftKey) {
                        newDate = this.moveMonth(this.date, dir);
                        newViewDate = this.moveMonth(this.viewDate, dir);
                    } else {
                        newDate = new Date(this.date.valueOf());
                        newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
                        newViewDate = new Date(this.viewDate.valueOf());
                        newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
                    }
                    if (this.dateWithinRange(newDate)) {
                        this.date = newDate;
                        this.viewDate = newViewDate;
                        this.setValue();
                        this.update();
                        e.preventDefault();
                        dateChanged = true;
                    }
                    break;
                case 13:
                    // enter
                    this.hide();
                    e.preventDefault();
                    break;
                case 9:
                    // tab
                    this.hide();
                    break;
            }
            if (dateChanged) {
                this.element.trigger({
                    type: 'changeDate',
                    date: this.date
                });
                var element;
                if (this.isInput) {
                    element = this.element;
                } else if (this.component) {
                    element = this.element.find('input');
                }
                if (element) {
                    element.change();
                }
            }
        },

        showMode: function showMode(dir) {

            if (dir) {
                var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
                if (newViewMode >= this.minView && newViewMode <= this.maxView) {
                    this.viewMode = newViewMode;
                }
            }
            /*
            	vitalets: fixing bug of very special conditions:
            	jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
            	Method show() does not set display css correctly and datepicker is not shown.
            	Changed to .css('display', 'block') solve the problem.
            	See https://github.com/vitalets/x-editable/issues/37
              	In jquery 1.7.2+ everything works fine.
            */
            //this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
            this.picker.find('>div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
            this.updateNavArrows();
        },
        reset: function reset(e) {
            this._setDate(null, 'date');
        }
    };

    $.fn.fdatepicker = function (option) {
        var args = Array.apply(null, arguments);
        args.shift();
        return this.each(function () {
            var $this = $(this),
                data = $this.data('datepicker'),
                options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;
            if (!data) {
                $this.data('datepicker', data = new Datepicker(this, $.extend({}, $.fn.fdatepicker.defaults, options)));
            }
            if (typeof option == 'string' && typeof data[option] == 'function') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.fdatepicker.defaults = {
        onRender: function onRender(date) {
            return '';
        }
    };
    $.fn.fdatepicker.Constructor = Datepicker;
    var dates = $.fn.fdatepicker.dates = {
        'en': {
            days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            daysMin: ["日", "一", "二", "三", "四", "五", "六"],
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthsShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            today: '今天',
            titleFormat: "MM yyyy"
        }
    };

    var DPGlobal = {
        modes: [{
            clsName: 'minutes',
            navFnc: 'Hours',
            navStep: 1
        }, {
            clsName: 'hours',
            navFnc: 'Date',
            navStep: 1
        }, {
            clsName: 'days',
            navFnc: 'Month',
            navStep: 1
        }, {
            clsName: 'months',
            navFnc: 'FullYear',
            navStep: 1
        }, {
            clsName: 'years',
            navFnc: 'FullYear',
            navStep: 10
        }],
        isLeapYear: function isLeapYear(year) {
            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        },
        getDaysInMonth: function getDaysInMonth(year, month) {
            return [31, DPGlobal.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
        },
        validParts: /hh?|ii?|ss?|dd?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function parseFormat(format) {
            // IE treats \0 as a string end in inputs (truncating the value),
            // so it's a bad format delimiter, anyway
            var separators = format.replace(this.validParts, '\0').split('\0'),
                parts = format.match(this.validParts);
            if (!separators || !separators.length || !parts || parts.length === 0) {
                throw new Error("Invalid date format.");
            }
            return {
                separators: separators,
                parts: parts
            };
        },
        parseDate: function parseDate(date, format, language) {
            if (date instanceof Date) return new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
            if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
                format = this.parseFormat('yyyy-mm-dd');
            }
            if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
                format = this.parseFormat('yyyy-mm-dd hh:ii');
            }
            if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
                format = this.parseFormat('yyyy-mm-dd hh:ii:ss');
            }
            if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
                var part_re = /([-+]\d+)([dmwy])/,
                    parts = date.match(/([-+]\d+)([dmwy])/g),
                    part,
                    dir;
                date = new Date();
                for (var i = 0; i < parts.length; i++) {
                    part = part_re.exec(parts[i]);
                    dir = parseInt(part[1]);
                    switch (part[2]) {
                        case 'd':
                            date.setUTCDate(date.getUTCDate() + dir);
                            break;
                        case 'm':
                            date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
                            break;
                        case 'w':
                            date.setUTCDate(date.getUTCDate() + dir * 7);
                            break;
                        case 'y':
                            date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
                            break;
                    }
                }
                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
            }
            var parts = date && date.match(this.nonpunctuation) || [],
                date = new Date(),
                parsed = {},
                setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
                setters_map = {
                hh: function hh(d, v) {
                    return d.setUTCHours(v);
                },
                h: function h(d, v) {
                    return d.setUTCHours(v);
                },
                ii: function ii(d, v) {
                    return d.setUTCMinutes(v);
                },
                i: function i(d, v) {
                    return d.setUTCMinutes(v);
                },
                ss: function ss(d, v) {
                    return d.setUTCSeconds(v);
                },
                s: function s(d, v) {
                    return d.setUTCSeconds(v);
                },
                yyyy: function yyyy(d, v) {
                    return d.setUTCFullYear(v);
                },
                yy: function yy(d, v) {
                    return d.setUTCFullYear(2000 + v);
                },
                m: function m(d, v) {
                    v -= 1;
                    while (v < 0) {
                        v += 12;
                    }v %= 12;
                    d.setUTCMonth(v);
                    while (d.getUTCMonth() != v) {
                        d.setUTCDate(d.getUTCDate() - 1);
                    }return d;
                },
                d: function d(_d, v) {
                    return _d.setUTCDate(v);
                }
            },
                val,
                filtered,
                part;
            setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
            setters_map['dd'] = setters_map['d'];
            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0); //date.getHours(), date.getMinutes(), date.getSeconds());
            if (parts.length == format.parts.length) {
                for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
                    val = parseInt(parts[i], 10);
                    part = format.parts[i];
                    if (isNaN(val)) {
                        switch (part) {
                            case 'MM':
                                filtered = $(dates[language].months).filter(function () {
                                    var m = this.slice(0, parts[i].length),
                                        p = parts[i].slice(0, m.length);
                                    return m == p;
                                });
                                val = $.inArray(filtered[0], dates[language].months) + 1;
                                break;
                            case 'M':
                                filtered = $(dates[language].monthsShort).filter(function () {
                                    var m = this.slice(0, parts[i].length),
                                        p = parts[i].slice(0, m.length);
                                    return m == p;
                                });
                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                break;
                        }
                    }
                    parsed[part] = val;
                }
                for (var i = 0, s; i < setters_order.length; i++) {
                    s = setters_order[i];
                    if (s in parsed && !isNaN(parsed[s])) setters_map[s](date, parsed[s]);
                }
            }
            return date;
        },
        formatDate: function formatDate(date, format, language) {
            if (date == null) {
                return '';
            }
            var val = {
                h: date.getUTCHours(),
                i: date.getUTCMinutes(),
                s: date.getUTCSeconds(),
                d: date.getUTCDate(),
                m: date.getUTCMonth() + 1,
                M: dates[language].monthsShort[date.getUTCMonth()],
                MM: dates[language].months[date.getUTCMonth()],
                yy: date.getUTCFullYear().toString().substring(2),
                yyyy: date.getUTCFullYear()
            };
            val.hh = (val.h < 10 ? '0' : '') + val.h;
            val.ii = (val.i < 10 ? '0' : '') + val.i;
            val.ss = (val.s < 10 ? '0' : '') + val.s;
            val.dd = (val.d < 10 ? '0' : '') + val.d;
            val.mm = (val.m < 10 ? '0' : '') + val.m;
            var date = [],
                seps = $.extend([], format.separators);
            for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
                if (seps.length) date.push(seps.shift());
                date.push(val[format.parts[i]]);
            }
            return date.join('');
        },
        convertViewMode: function convertViewMode(viewMode) {
            switch (viewMode) {
                case 4:
                case 'decade':
                    viewMode = 4;
                    break;
                case 3:
                case 'year':
                    viewMode = 3;
                    break;
                case 2:
                case 'month':
                    viewMode = 2;
                    break;
                case 1:
                case 'day':
                    viewMode = 1;
                    break;
                case 0:
                case 'hour':
                    viewMode = 0;
                    break;
            }

            return viewMode;
        },
        headTemplate: '<thead>' + '<tr>' + '<th class="prev"><i class="fa fa-chevron-left fi-arrow-left"/></th>' + '<th colspan="5" class="date-switch"></th>' + '<th class="next"><i class="fa fa-chevron-right fi-arrow-right"/></th>' + '</tr>' + '</thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
    };
    DPGlobal.template = '<div class="datepicker">' + '<div class="datepicker-minutes">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-hours">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<a class="button datepicker-close tiny alert right" style="width:auto;"><i class="fa fa-remove fa-times fi-x"></i></a>' + '</div>';

    $.fn.fdatepicker.DPGlobal = DPGlobal;
}(__webpack_provided_window_dot_jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

jQuery.extend({

    createUploadIframe: function createUploadIframe(id, uri) {
        //create frame
        var frameId = 'jUploadFrame' + id;

        if (window.ActiveXObject) {
            var io = document.createElement('<iframe id="' + frameId + '" name="' + frameId + '" />');
            if (typeof uri == 'boolean') {
                io.src = 'javascript:false';
            } else if (typeof uri == 'string') {
                io.src = uri;
            }
        } else {
            var io = document.createElement('iframe');
            io.id = frameId;
            io.name = frameId;
        }
        io.style.position = 'absolute';
        io.style.top = '-1000px';
        io.style.left = '-1000px';

        document.body.appendChild(io);

        return io;
    },
    createUploadForm: function createUploadForm(id, fileElementId) {
        //create form
        var formId = 'jUploadForm' + id;
        var fileId = 'jUploadFile' + id;
        var form = $('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
        var oldElement = $('#' + fileElementId);
        var newElement = $(oldElement).clone();
        $(oldElement).attr('id', fileId);
        $(oldElement).before(newElement);
        $(oldElement).appendTo(form);
        //set attributes
        $(form).css('position', 'absolute');
        $(form).css('top', '-1200px');
        $(form).css('left', '-1200px');
        $(form).appendTo('body');
        return form;
    },
    addOtherRequestsToForm: function addOtherRequestsToForm(form, data) {
        // add extra parameter
        var originalElement = $('<input type="hidden" name="" value="">');
        for (var key in data) {
            name = key;
            value = data[key];
            var cloneElement = originalElement.clone();
            cloneElement.attr({ 'name': name, 'value': value });
            $(cloneElement).appendTo(form);
        }
        return form;
    },

    ajaxFileUpload: function ajaxFileUpload(s) {
        // TODO introduce global settings, allowing the client to modify them for all requests, not only timeout
        s = jQuery.extend({}, jQuery.ajaxSettings, s);
        var id = new Date().getTime();
        var form = jQuery.createUploadForm(id, s.fileElementId);
        if (s.data) form = jQuery.addOtherRequestsToForm(form, s.data);
        var io = jQuery.createUploadIframe(id, s.secureuri);
        var frameId = 'jUploadFrame' + id;
        var formId = 'jUploadForm' + id;
        // Watch for a new set of requests
        if (s.global && !jQuery.active++) {
            jQuery.event.trigger("ajaxStart");
        }
        var requestDone = false;
        // Create the request object
        var xml = {};
        if (s.global) jQuery.event.trigger("ajaxSend", [xml, s]);
        // Wait for a response to come back
        var uploadCallback = function uploadCallback(isTimeout) {
            var io = document.getElementById(frameId);
            try {
                if (io.contentWindow) {
                    xml.responseText = io.contentWindow.document.body ? io.contentWindow.document.body.innerHTML : null;
                    xml.responseXML = io.contentWindow.document.XMLDocument ? io.contentWindow.document.XMLDocument : io.contentWindow.document;
                } else if (io.contentDocument) {
                    xml.responseText = io.contentDocument.document.body ? io.contentDocument.document.body.innerHTML : null;
                    xml.responseXML = io.contentDocument.document.XMLDocument ? io.contentDocument.document.XMLDocument : io.contentDocument.document;
                }
            } catch (e) {
                jQuery.handleError(s, xml, null, e);
            }
            if (xml || isTimeout == "timeout") {
                requestDone = true;
                var status;
                try {
                    status = isTimeout != "timeout" ? "success" : "error";
                    // Make sure that the request was successful or notmodified
                    if (status != "error") {
                        // process the data (runs the xml through httpData regardless of callback)
                        var data = jQuery.uploadHttpData(xml, s.dataType);
                        // If a local callback was specified, fire it and pass it the data
                        if (s.success) s.success(data, status);

                        // Fire the global callback
                        if (s.global) jQuery.event.trigger("ajaxSuccess", [xml, s]);
                    } else jQuery.handleError(s, xml, status);
                } catch (e) {
                    status = "error";
                    jQuery.handleError(s, xml, status, e);
                }

                // The request was completed
                if (s.global) jQuery.event.trigger("ajaxComplete", [xml, s]);

                // Handle the global AJAX counter
                if (s.global && ! --jQuery.active) jQuery.event.trigger("ajaxStop");

                // Process result
                if (s.complete) s.complete(xml, status);

                jQuery(io).unbind();

                setTimeout(function () {
                    try {
                        $(io).remove();
                        $(form).remove();
                    } catch (e) {
                        jQuery.handleError(s, xml, null, e);
                    }
                }, 100);

                xml = null;
            }
        };
        // Timeout checker
        if (s.timeout > 0) {
            setTimeout(function () {
                // Check to see if the request is still happening
                if (!requestDone) uploadCallback("timeout");
            }, s.timeout);
        }
        try {
            // var io = $('#' + frameId);
            var form = $('#' + formId);
            $(form).attr('action', s.url);
            $(form).attr('method', 'POST');
            $(form).attr('target', frameId);
            if (form.encoding) {
                form.encoding = 'multipart/form-data';
            } else {
                form.enctype = 'multipart/form-data';
            }
            $(form).submit();
        } catch (e) {
            jQuery.handleError(s, xml, null, e);
        }
        if (window.attachEvent) {
            document.getElementById(frameId).attachEvent('onload', uploadCallback);
        } else {
            document.getElementById(frameId).addEventListener('load', uploadCallback, false);
        }
        return { abort: function abort() {} };
    },

    uploadHttpData: function uploadHttpData(r, type) {
        var data = !type;
        data = type == "xml" || data ? r.responseXML : r.responseText;
        // If the type is "script", eval it in global context
        if (type == "script") jQuery.globalEval(data);
        // Get the JavaScript object, if JSON is used.
        if (type == "json") {
            // If you add mimetype in your response,
            // you have to delete the '<pre></pre>' tag.
            // The pre tag in Chrome has attribute, so have to use regex to remove
            var data = r.responseText;
            var rx = new RegExp("<pre.*?>(.*?)</pre>", "i");
            var am = rx.exec(data);
            //this is the desired data extracted
            var data = am ? am[1] : ""; //the only submatch or empty
            eval("data = " + data);
        }
        // evaluate scripts within html
        if (type == "html") jQuery("<div>").html(data).evalScripts();
        //alert($('param', data).each(function(){alert($(this).attr('value'));}));
        return data;
    },
    handleError: function handleError(s, xml, status, e) {
        // If a local callback was specified, fire it
        if (s.error) s.error(xml, status, e);
        // Fire the global callback
        if (s.global) jQuery.event.trigger("ajaxError", [xml, s, e]);
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(1);
(function () {
    var templCard = '<div class="minicard" v-cloak>\
        <h2 class="card-header"><span class="card-header-title" v-show="cardtype==\'inc\'">企业名片</span><span class="card-header-title" v-show="cardtype==\'uni\'">高校名片</span></h2>\
        <div class="card-body" v-show="cardtype==\'inc\'">\
            <div class="clearfix body-top">\
                <i class="pic-wrapper fl card-avatar"><img :src="infosets.userIcon"></i>\
                <div class="fl">\
                    <h3 class="body-title">{{infosets.userName}}</h3>\
                    <table class="basic-info">\
                        <tr>\
                            <td>企业性质：</td>\
                            <td style="padding-right: 15px;">{{infosets.userProperty}}</td>\
                            <td>企业规模：</td>\
                            <td>{{infosets.userScale}}</td>\
                        </tr>\
                        <tr>\
                            <td>联系方式：</td>\
                            <td style="padding-right: 15px;">{{infosets.mobile}}</td>\
                            <td>企业邮箱：</td>\
                            <td>{{infosets.email}}</td>\
                        </tr>\
                    </table>\
                    <p><label>公司地址：</label>{{infosets.userAddress}}</p>\
                </div>\
            </div>\
            <div class="body-bot">\
                <h3>公司简介</h3>\
                <p>{{infosets.userDiscription}}</p>\
            </div>\
        </div>\
        <div class="card-body" v-show="cardtype==\'uni\'">\
            <div class="clearfix body-top">\
                <i class="pic-wrapper fl card-avatar"><img :src="infosets.userIcon"></i>\
                <div class="fl">\
                    <h3 class="body-title">{{infosets.userName}}</h3>\
                    <table class="basic-info">\
                        <tr>\
                            <td>高校类别：</td>\
                            <td style="padding-right: 15px;">{{infosets.userType}}</td>\
                            <td>高校性质：</td>\
                            <td>{{infosets.userProperty}}</td>\
                        </tr>\
                        <tr>\
                            <td>联系电话：</td>\
                            <td style="padding-right: 15px;">{{infosets.mobile}}</td>\
                            <td>高校邮箱：</td>\
                            <td>{{infosets.email}}</td>\
                        </tr>\
                        <tr>\
                            <td>在校人数：</td>\
                            <td style="padding-right: 15px;">{{infosets.userScale}}</td>\
                            <td>重点专业：</td>\
                            <td>{{infosets.userProfession}}</td>\
                        </tr>\
                    </table>\
                    <p><label>学校地址：</label>{{infosets.userAddress}}</p>\
                </div>\
            </div>\
            <div class="body-bot">\
                <h3>高校简介</h3>\
                <p>{{infosets.userDiscription}}</p>\
            </div>\
        </div>\
        <div class="card-operations">\
            <button class="button-agree" type="button" @click.stop="agreeEv">同意</button>\
            <button class="button-deny" type="button" @click.stop="denyEv">不同意</button>\
        </div>\
    </div>';

    Vue.component("minicard", {
        template: templCard,
        props: ["cardtype", "infosets"],
        methods: {
            agreeEv: function agreeEv() {
                this.$emit("agree");
            },
            denyEv: function denyEv() {
                this.$emit("deny");
            }
        }
    });
})();

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
__webpack_require__(3);
__webpack_require__(18);
__webpack_require__(16);
__webpack_require__(4);
__webpack_require__(17);
__webpack_require__(6);
__webpack_require__(15);
__webpack_require__(19);
__webpack_require__(7);
__webpack_require__(14);
__webpack_require__(8);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(32);

var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合
// 请求本页面数据
(function () {
    var postdata = {
        userId: parObj.userId || localStorage.userId,
        loginIdentifier: parObj.loginId || localStorage.userId
    };

    EventUtils.ajaxReq('/user/school/getInfo', 'get', postdata, function (resp, status) {
        respObj = resp.data;
        (0, _jquery2.default)("#avatar-box").html("<img src='" + respObj.userIcon + "' />");
        //如果高校信息存在，则对简历信息进行初始化
        if (respObj) {
            var portobrief = {
                level: respObj.property,
                address: {
                    province: respObj.province,
                    city: respObj.city,
                    district: respObj.area
                },
                email: respObj.email
            };
            appPorto.uni = respObj.name;
            appPorto.briefInfo = portobrief;
            //   专业数据初始化
            if (resp.data.profession) {
                var majorStrArray = resp.data.profession.split(",");
                var majorArray = [];
                for (var i = 0; i < majorStrArray.length; i++) {
                    majorArray.push({ major: majorStrArray[i].split(":")[0], submajor: majorStrArray[i].split(":")[1] });
                }
            } else {
                var majorArray = [];
                majorArray.push({ major: "", submajor: "" });
            }
            var specialLevel = "";
            if (respObj.propertyType && respObj.propertyType != "") {
                (0, _jquery2.default)(".uni-level input[value='" + respObj.propertyType + "']").attr("checked", "true");
                if (respObj.propertyType == "0") {
                    specialLevel = "985";
                } else {
                    specialLevel = "211";
                }
            }
            var resumedata = {
                uni: respObj.name,
                classific: respObj.type,
                amount: respObj.scale,
                level: respObj.property,
                specialLv: specialLevel,
                specialmajor: majorArray,
                intro: respObj.discription != undefined ? respObj.discription : "",
                comLicense: "",
                uniLicense: "",
                comLicenseUrl: respObj.imgUrlBus,
                uniLicenseUrl: respObj.imgUrlAgree,
                hasBusLicense: respObj.imgUrlBus != "",
                hasUniLicense: respObj.imgUrlAgree != "",
                edit: respObj.infoStatus == "0",
                view: respObj.infoStatus != "0"
            };
            console.log(resumedata);
            //console.log(resumedata);
            appCont.resume = resumedata;

            // 账户信息
            var percent = 0;
            if (respObj.mobile != "") {
                percent += 50;
            }
            if (respObj.email != "") {
                percent += 30;
            }
            init_safepos(percent);
            var configdata = {
                loginName: respObj.loginName,
                safeLevel: percent + "%",
                bind: {
                    mobile: respObj.mobile,
                    email: respObj.email
                }
            };
            appCont.config = configdata;
        }
    });
})();

var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: "index.html?userId=" + parObj.userId
    }
});
var appPorto = new Vue({
    el: "#app-porto",
    data: {
        database: {
            unilevel: unilevel,
            addrData: addArray
        },
        viewInfo: true,
        uni: "大学名称",
        briefInfo: {
            level: "重点大学",
            address: {
                province: "河南省",
                city: "新乡市",
                district: "红旗区"
            },
            email: "xqztc@qq.com"
        },
        initAddress: {
            province: "",
            city: "",
            district: ""
        },
        cloneInfo: {}
    },
    methods: {
        uploading: function uploading() {
            appModal.showModal = true;
            appModal.show.upload = true;
        },
        save: function save() {
            this.briefInfo.address.province = (0, _jquery2.default)(".edit-brief .sel-province input").val();
            this.briefInfo.address.city = (0, _jquery2.default)(".edit-brief .sel-city input").val();
            this.briefInfo.address.district = (0, _jquery2.default)(".edit-brief .sel-district input").val();
            this.viewInfo = true;
            var postdata = {
                userId: parObj.userId,
                schoolId: respObj.schoolId,
                loginName: respObj.loginName,
                property: this.briefInfo.level,
                province: this.briefInfo.address.province,
                city: this.briefInfo.address.city,
                area: this.briefInfo.address.district,
                email: this.briefInfo.email
            };
            console.log(postdata);
            EventUtils.ajaxReq('/user/school/modifyInfo', 'post', postdata, function (resp, status) {
                console.log(resp);
            });
        },
        cancel: function cancel() {
            this.briefInfo = EventUtils.cloneObj(this.cloneInfo);
            this.viewInfo = true;
        },
        edit: function edit() {
            this.cloneInfo = EventUtils.cloneObj(this.briefInfo);
            this.initAddress = EventUtils.cloneObj(this.briefInfo.address);
            this.viewInfo = false;
            this.$nextTick(function () {
                selectInitInput();
                selectInitPos();
            });
        }
    }
});

var appSider = new Vue({
    el: "#app-side",
    data: {}
});

var appCont = new Vue({
    el: "#app-content",
    data: {
        database: {
            classific: uniclassific,
            amount: ["1-10000", "10001-20000", "20001-30000", "30001-40000", "40000以上"],
            unilevel: unilevel,
            majors: majorArray
        },
        resume: {
            uni: "中国美术学院",
            classific: "艺术类",
            amount: "",
            level: "重点",
            specialLv: "",
            specialmajor: [{ major: "", submajor: "" }, { major: "", submajor: "" }],
            intro: "世界一流的艺术大学",
            comLicense: "",
            uniLicense: "",
            comLicenseUrl: "", //营业执照网上地址
            uniLicenseUrl: "", //办学许可证网上地址
            hasBusLicense: false,
            hasUniLicense: false,
            edit: true,
            view: false
        },
        require: {
            state: "校企合作",
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            demandSrc: 0, //0：校企合作 1：招聘会
            newLink: "uniRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId,
            results: []
        },
        collect: {
            state: "全部状态",
            curpage: 1,
            timeindex: 0,
            totalpages: 1,
            totalitems: 0,
            results: []
        },
        message: {
            combi: {
                state: "发出的邀请",
                curpage: 1,
                totalpages: 1,
                totalitems: 0,
                msgsrc: 1,
                results: []
            },
            recruit: {
                state: "发出的邀请",
                curpage: 1,
                totalpages: 1,
                totalitems: 0,
                results: []
            }
        },
        vip: {
            records: [{ date: "2017.01.01", action: "信息刷新：4条", price: 0, state: "交易完成" }, { date: "2017.01.01", action: "信息置顶：1次", price: 0, state: "交易完成" }, { date: "2017.01.01", action: "广告投放：1次", price: 0, state: "交易完成" }, { date: "2017.01.01", action: "信息匹配：4条", price: 0, state: "交易完成" }, { date: "2017.01.01", action: "账户充值", price: 500.68, state: "交易完成" }],
            tarif: [{ level: "初级会员", prior: 1, refresh: 1, mapping: 8, price: 585, icon: "images/crown-junior.png" }, { level: "中级会员", prior: 2, refresh: 4, mapping: 12, price: 1040, icon: "images/crown-middle.png" }, { level: "初级会员", prior: 4, refresh: 8, mapping: 16, price: 1560, icon: "images/crown-senior.png" }]
        },
        coop: {
            state: "校企合作",
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            applystatus: 1,
            results: []
        },
        config: {
            loginName: "",
            safeLevel: "80%",
            bind: { mobile: "", email: "" }
        }
    },
    watch: {
        "config.bind.mobile": function configBindMobile(curval) {
            var percent = 0;
            if (this.config.bind.mobile != "") {
                percent += 50;
            }
            if (this.config.bind.email != "") {
                percent += 30;
            }
            init_safepos(percent);
            percent += "%";
            this.config.safeLevel = percent;
        },
        "config.bind.email": function configBindEmail(curval) {
            var percent = 0;
            if (this.config.bind.mobile != "") {
                percent += 50;
            }
            if (this.config.bind.email != "") {
                percent += 30;
            }
            init_safepos(percent);
            percent += "%";
            this.config.safeLevel = percent;
        },
        "require.state": function requireState(curval, oldval) {
            if (curval == "校企合作") {
                demandRequest(0, 1);
            } else if (curval == "招聘会") {
                demandRequest(1, 1);
            };
            this.require.curpage = 1;
        },
        "collect.state": function collectState(curval, oldval) {
            if (curval == "全部状态") {
                collectRequest(0, 1);
            } else if (curval == "近三天") {
                collectRequest(1, 1);
            } else if (curval == "近一个星期") {
                collectRequest(2, 1);
            } else if (curval == "近一个月") {
                collectRequest(3, 1);
            }
        },
        "message.combi.state": function messageCombiState(curval) {
            if (curval == "发出的邀请") {
                //请求校企合作发出的申请
                combiMsgRequest(1, 1);
            } else if (curval == "收到的邀请") {
                //请求校企合作收到的申请
                combiMsgRequest(2, 1);
            };
            this.message.combi.curpage = 1;
        },
        "coop.state": function coopState(curval) {
            if (curval == "校企合作") {
                coopRequest(1, 1);
            } else if (curval == "招聘会") {
                coopRequest(2, 1);
            }
        }
    },
    methods: {
        changeComLicense: function changeComLicense(obj) {
            if (obj.files[0].size > 3 * 1024 * 1204) {
                alert("请上传小于3M的文件！");
                obj.value = "";
            }
            this.resume.comLicense = obj.value;
        },
        changeUniLicense: function changeUniLicense(obj) {
            //     console.log(obj.files[0].size);
            if (obj.files[0].size > 3 * 1024 * 1024) {
                alert("请上传小于3M的文件！");
                obj.value = "";
            }
            this.resume.uniLicense = obj.value;
        },
        showFile: function showFile(fid) {
            appModal.preImgUrl = EventUtils.getLocalImgUrl(fid);
            appModal.showModal = true;
            appModal.show.preImg = true;
        },
        showPrefile: function showPrefile(type) {
            if (type == "com") {
                appModal.preImgUrl = appCont.resume.comLicenseUrl;
                console.log(appCont.resume.comLicenseUrl, 1);
                appModal.showModal = true;
                appModal.show.preImg = true;
            } else if (type == "uni") {
                appModal.preImgUrl = appCont.resume.uniLicenseUrl;
                console.log(appCont.resume.uniLicenseUrl, 2);
                appModal.showModal = true;
                appModal.show.preImg = true;
            }
        },
        infoExtrac: function infoExtrac(text) {
            if (text) {
                text = EventUtils.infoExtrac(text);
                return text;
            } else {
                return "";
            }
        },
        cityExtrac: function cityExtrac(address) {
            if (address) {
                return address.split(";")[1];
            } else {
                return "";
            }
        },
        requireLink: function requireLink(item) {
            if (item.demandId) {
                return "detail-uni.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + item.demandId + "&userType=1";
            }
            if (item.jobFairId) {
                return "detail-unirecruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
            }
        },
        messageLink: function messageLink(type, id) {
            if (type == "combi") {
                if (appCont.message.combi.msgsrc == 1) {
                    return "detail-company.html?demandId=" + id + "&userId=" + parObj.userId;
                } else {
                    return "detail-uni.html?demandId=" + id + "&userId=" + parObj.userId;
                }
            }
            if (type == "jobfair") {
                return "detail-unirecruit.html?userId=" + parObj.userId + "&jobfairId=" + id;
            }
        },
        coopLink: function coopLink(item) {
            if (item.demandId) {
                if (item.releaseType == "1") {
                    return "detail-uni.html?demandId=" + item.demandId + "&userId=" + parObj.userId;
                } else {
                    return "detail-company.html?demandId=" + item.demandId + "&userId=" + parObj.userId;
                }
            }
            if (item.jobFairId) {
                return "detail-unirecruit.html?jobfairId=" + item.jobFairId + "&userId=" + parObj.userId;
            }
        },
        submajors: function submajors(major) {
            var arr = [];
            if (major) {
                for (var i = 0; i < this.database.majors.length; i++) {
                    if (this.database.majors[i].major == major) {
                        return this.database.majors[i].submajor;
                    }
                }
            }
        },
        addMajors: function addMajors() {
            if (this.resume.specialmajor.length < 5) {
                this.resume.specialmajor.push({ major: "", submajor: "" });
            } else {
                return false;
            }
        },
        delMajor: function delMajor(index) {
            (0, _jquery2.default)(".pop-major-box").each(function (index) {
                appCont.resume.specialmajor[index].major = (0, _jquery2.default)(this).find(".major-input-1 input").val();
                appCont.resume.specialmajor[index].submajor = (0, _jquery2.default)(this).find(".major-input-2 input").val();
            });
            this.resume.specialmajor.splice(index, 1);
            for (var i = 0; i < this.resume.specialmajor.length; i++) {
                (0, _jquery2.default)(".pop-major-box").eq(i).find(".major-input-1 input").val(appCont.resume.specialmajor[i].major);
                (0, _jquery2.default)(".pop-major-box").eq(i).find(".major-input-2 input").val(appCont.resume.specialmajor[i].submajor);
            }
        },
        editSwipe: function editSwipe() {
            this.resume.edit = true;
            this.resume.view = false;
        },
        saveResume: function saveResume() {
            (0, _jquery2.default)(".pop-major-box").each(function (index) {
                appCont.resume.specialmajor[index].major = (0, _jquery2.default)(this).find(".major-input-1 input").val();
                if ((0, _jquery2.default)(this).find(".ex-major").val()) {
                    appCont.resume.specialmajor[index].submajor = (0, _jquery2.default)(this).find(".ex-major").val();
                } else {
                    appCont.resume.specialmajor[index].submajor = (0, _jquery2.default)(this).find(".major-input-2 input").val();
                }
            });
            this.resume.hasBusLicense = this.resume.comLicense == "" ? false : true;
            this.resume.hasUniLicense = this.resume.uniLicense == "" ? false : true;
            this.resume.edit = false;
            this.resume.view = true;
            //上传许可证等图片文件
            if (this.resume.comLicense != "") {
                var hascomUrl = false;
                console.log(appCont.resume.comLicense);
                _jquery2.default.ajaxFileUpload({
                    url: 'http://www.xiaoqiztc.com/easily_xq_WebApi/sys/imageUpload', //提交的路径
                    secureuri: false, // 是否启用安全提交，默认为false
                    fileElementId: 'file-busi', // file控件id
                    dataType: 'json',
                    data: {
                        userId: parObj.userId,
                        type: 2,
                        fileName: appCont.resume.comLicense //传递参数，用于解析出文件名
                    }, // 键:值，传递文件名
                    success: function success(data, status) {
                        hascomUrl = true;
                        appCont.resume.comLicenseUrl = data.data;
                        console.log(data.data);
                        //     alert(1);
                    },
                    error: function error(data, status) {
                        //	alert(2);
                    }
                });
            };

            if (this.resume.uniLicense != "") {
                var hasuniUrl = false;
                console.log(appCont.resume.uniLicense);
                _jquery2.default.ajaxFileUpload({
                    url: 'http://www.xiaoqiztc.com/easily_xq_WebApi/sys/imageUpload', //提交的路径
                    secureuri: false, // 是否启用安全提交，默认为false
                    fileElementId: 'file-uni', // file控件id
                    dataType: 'json',
                    data: {
                        userId: parObj.userId,
                        type: 1,
                        fileName: appCont.resume.uniLicense //传递参数，用于解析出文件名
                    }, // 键:值，传递文件名
                    success: function success(data, status) {
                        hasuniUrl = true;
                        appCont.resume.uniLicenseUrl = data.data;
                        console.log(data.data);
                    },
                    error: function error(data, status) {
                        //	console.log(data,2);
                    }
                });
            };
            //   console.log(3);
            var majorstring = "";
            for (var i = 0; i < appCont.resume.specialmajor.length; i++) {
                if (appCont.resume.specialmajor[i].major != "") {
                    if (appCont.resume.specialmajor[i].submajor != "") {
                        majorstring += appCont.resume.specialmajor[i].major + ":" + appCont.resume.specialmajor[i].submajor + ",";
                    } else {
                        majorstring += appCont.resume.specialmajor[i].major + ",";
                    }
                }
            }
            if (majorstring.length > 0) {
                majorstring = majorstring.slice(0, majorstring.length - 1);
            }

            if (this.resume.comLicense != "" || this.resume.uniLicense != "") {
                //如果用户有上传文件
                setTimeout(function () {
                    if (appCont.resume.comLicense != "" && !hascomUrl || appCont.resume.uniLicense != "" && !hasuniUrl) {
                        alert("文件上传失败，请重新上传！");
                    } else {
                        console.log(appCont.resume.comLicenseUrl, appCont.resume.uniLicenseUrl);
                        var postdata = {
                            userId: parObj.userId,
                            schoolId: respObj.schoolId,
                            name: appCont.resume.uni,
                            type: appCont.resume.classific,
                            property: appCont.resume.level,
                            propertyType: appCont.resume.specialLv == "211" ? 1 : 0,
                            scale: appCont.resume.amount,
                            profession: majorstring,
                            imgUrlBus: appCont.resume.comLicenseUrl,
                            imgUrlAgree: appCont.resume.uniLicenseUrl,
                            discription: appCont.resume.intro
                        };
                        EventUtils.ajaxReq('/user/school/modifyInfo', 'post', postdata, function (resp, status) {
                            console.log(resp);
                        });
                    }
                }, 1500);
            } else {
                var postdata = {
                    userId: parObj.userId,
                    schoolId: respObj.schoolId,
                    name: appCont.resume.uni,
                    type: appCont.resume.classific,
                    property: appCont.resume.level,
                    propertyType: appCont.resume.specialLv == "211" ? 1 : 0,
                    scale: appCont.resume.amount,
                    profession: majorstring,
                    imgUrlBus: appCont.resume.comLicenseUrl,
                    imgUrlAgree: appCont.resume.uniLicenseUrl,
                    discription: appCont.resume.intro
                };
                console.log(postdata);
                EventUtils.ajaxReq('/user/school/modifyInfo', 'post', postdata, function (resp, status) {
                    //  console.log(resp);
                });
            }
        },
        checkExlv: function checkExlv() {
            this.resume.specialLv = (0, _jquery2.default)(".uni-level input[type='radio']:checked").val() == "0" ? "985" : "211";
        },
        modItem: function modItem(item) {
            var pageurl = "uniRequire.html?new=0&userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandSrc=" + appCont.require.demandSrc;
            if (item.demandId) {
                pageurl += "&demandId=" + item.demandId;
            }
            if (item.jobFairId) {
                pageurl += "&jobfairId=" + item.jobFairId;
            }
            window.open(pageurl, "_blank");
        },
        delItem: function delItem(item) {
            if (item.demandId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    demandId: item.demandId
                };
                EventUtils.ajaxReq("/demand/delInfo", "post", postdata, function (resp, status) {
                    if (appCont.require.results.length == 1 && appCont.require.curpage > 1) {
                        appCont.require.curpage -= 1;
                    }
                    (0, _jquery2.default)(".requireBox .pagination a.page").eq(appCont.require.curpage - 1).parent().trigger("click");
                });
            };
            if (item.jobFairId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    jobFairId: item.jobFairId
                };
                EventUtils.ajaxReq("/jobfair/delInfo", "post", postdata, function (resp, status) {
                    if (appCont.require.results.length == 1 && appCont.require.curpage > 1) {
                        appCont.require.curpage -= 1;
                    }
                    (0, _jquery2.default)(".requireBox .pagination a.page").eq(appCont.require.curpage - 1).parent().trigger("click");
                });
            }
        },
        freshItem: function freshItem(item) {
            appModal.showModal = true;
            appModal.show.freshbox = true;
        },
        stickItem: function stickItem(item) {
            appModal.showModal = true;
            appModal.show.stickybox = true;
        },
        priceCal1: function priceCal1(val) {
            var priceInt = parseInt(val);
            if (priceInt == 0) {
                return "- " + priceInt;
            } else if (priceInt > 0) {
                return "+ " + priceInt;
            }
        },
        priceCal2: function priceCal2(val) {
            var priceF = (parseFloat(val) * 100 - parseInt(val) * 100) % 100;
            //    if(priceF*10%1==0) priceF+="0";
            if (priceF < 10) priceF += "0";
            return "." + priceF;
        },
        coopSt: function coopSt(state) {
            switch (state) {
                case "01":
                    return "合作待开始";
                case "02":
                    return "合作进行中";
                case "03":
                    return "合作已完成";
                default:
                    return "合作待开始";
            }
        },
        coopStyle: function coopStyle(state) {
            switch (state) {
                case "01":
                    return { color: "#91daef" };
                case "02":
                    return { color: "#f7aa00" };
                case "03":
                    return { color: "#333" };
            }
        },
        pagesum: function pagesum(totalitems) {
            var totalpage = 1;
            if (totalitems % 3 == 0) {
                totalpage = totalitems / 3;
            } else {
                totalpage = Math.floor(totalitems / 3) + 1;
            }
            return totalpage;
        },
        showpage: function showpage(totalpage) {
            if (totalpage < 3) {
                return totalpage;
            } else {
                return 3;
            }
        },
        topage: function topage(page, type) {
            if (type == "require") {
                demandRequest(appCont.require.demandSrc, page);
            } else if (type == "collect") {
                collectRequest(appCont.collect.timeindex, page);
            } else if (type == "msg-combi") {
                combiMsgRequest(appCont.message.combi.msgsrc, page);
            } else if (type == "msg-recruit") {
                recruitMsgRequest(page);
            } else if (type == "coop") {
                coopRequest(appCont.coop.applystatus, page);
            }
        },
        remainText: function remainText(text) {
            if (1000 - text.length < 0) {
                return 0;
            }
            return 1000 - text.length;
        },
        checkText: function checkText(type) {
            if (type == "resumeintro") {
                var len = this.resume.intro.length;
                if (1000 - len < 0) {
                    alert("最多只能输入1000字！");
                    this.resume.intro = this.resume.intro.slice(0, 1000);
                }
            }
        },
        cancelCollect: function cancelCollect(demandId, id) {
            var postdata = {
                userId: parObj.userId,
                demandId: demandId,
                id: id
            };
            EventUtils.ajaxReq("/demand/delMarkInfo", "post", postdata, function (resp, status) {
                if (appCont.collect.results.length == 1 && appCont.collect.curpage > 1) {
                    appCont.collect.curpage -= 1;
                }
                console.log(resp);
                (0, _jquery2.default)(".collectBox .pagination a.page").eq(appCont.collect.curpage - 1).parent().trigger("click");
            });
        },
        applyCollect: function applyCollect(demandId) {
            var postdata = {
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                demandId: demandId
            };
            EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function (resp, status) {
                console.log(resp);
                if (resp.data) {
                    alert("申请已发送！");
                } else {
                    alert(resp.info);
                }
            });
        },
        popComment: function popComment(item) {
            if (item.releaseType == "1") {
                //发布者为高校
                appModal.comment.cooperId = item.applyUserId;
            }
            if (item.releaseType == "2") {
                //发布者为企业
                appModal.comment.cooperId = item.userId;
            }
            if (!item.releaseType) {
                // 招聘会
                appModal.comment.cooperId = item.applyUserId;
            }
            appModal.showModal = true;
            appModal.show.comment = true;
        },
        popCard: function popCard(applyId, userId) {
            var postdata = {
                userId: userId,
                applyId: applyId
            };
            EventUtils.ajaxReq("/readcard/getCardInfo", "get", postdata, function (resp, status) {
                appModal.cardInfo.cardtype = "inc";
                appModal.cardInfo.applyId = resp.data.applyId;
                var infosets = resp.data.viewReadCard;
                infosets.userAddress = infosets.userAddress ? infosets.userAddress.split(";").join("") : "不详";
                appModal.cardInfo.infosets = infosets;
                appModal.showModal = true;
                appModal.show.minicard = true;
            });
        },
        modifyMobile: function modifyMobile() {
            appModal.show.mobile = true;
            appModal.showModal = true;
        },
        modifyEmail: function modifyEmail() {
            appModal.show.email = true;
            appModal.showModal = true;
        },
        bindWechat: function bindWechat() {
            appModal.show.wechat = true;
            appModal.showModal = true;
        }
    },
    computed: {
        majorArr: function majorArr() {
            var arr = [];
            for (var i = 0; i < this.database.majors.length; i++) {
                arr.push(this.database.majors[i].major);
            }
            return arr;
        },
        wordscal: function wordscal() {
            return 1000 - this.resume.intro.length;
        },
        combimsg: function combimsg() {
            var total = 0;
            for (var i = 0; i < this.message.combi.items.length; i++) {
                if (this.message.combi.items[i].code == "01") {
                    total++;
                }
            };
            return total;
        }
    },
    components: {
        'pagination': pagination
    }
});

var appModal = new Vue({
    el: "#app-modal",
    data: {
        account: {
            money: 0,
            freeFreshTimes: 1
        },
        checkedTrades: [],
        show: {
            stickybox: false,
            stickyhintbox: false,
            freshbox: false,
            freshhintbox: false,
            mobile: false,
            email: false,
            wechat: false,
            preImg: false,
            minicard: false,
            comment: false,
            upload: false
        },
        preImgUrl: "",
        showModal: false,
        cardInfo: {
            cardtype: "uni",
            applyId: "",
            infosets: {
                userName: "",
                imgsrc: "",
                userProperty: "",
                userScale: "",
                tel: "",
                email: "",
                address: "",
                userType: "",
                profession: "",
                description: ""
            }
        },
        trades: [{ title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] }, { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] }, { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] }, { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] }, { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] }],
        sticky: {
            content: [{ duration: "置顶1天", price: 10, hint: "(无折扣仅10元/天)" }, { duration: "置顶3天", price: 27, hint: "(9折仅9元/天)" }, { duration: "置顶5天", price: 40, hint: "(8折仅8元/天)" }, { duration: "置顶10天", price: 70, hint: "(7折仅7元/天)" }],
            sum: 10,
            presum: 10,
            date: "2016-12-30",
            time: "16:08:02",
            discount: "9折",
            sofortBtn: "立即充值",
            planBtn: "立即置顶",
            sofort: true
        },
        fresh: {
            content: [{ duration: "刷新4次（1天）", price: 4, hint: "(无折扣仅1元/次)" }, { duration: "刷新12次（3天）", price: 10.8, hint: "(9折仅0.9元/次)" }, { duration: "刷新20次（5天）", price: 16, hint: "(8折仅0.8元/次)" }, { duration: "刷新40次（10天）", price: 28, hint: "(7折仅0.7元/次)" }],
            sum: 4,
            presum: 4,
            date: "2016-12-30",
            time: "16:08:02",
            discount: "9折",
            smartBtn: "立即充值",
            sofortBtn: "立即刷新",
            smart: true
        },
        comment: {
            cooperId: 0,
            text: ""
        },
        baseInfo: appPorto.oldInfo,
        resumeInfo: appCont.resume
    },
    methods: {
        agreeApply: function agreeApply(applyId) {
            var postdata = {
                applyId: applyId,
                result: 1
            };
            EventUtils.ajaxReq("/readcard/operationApply", "get", postdata, function (resp, status) {
                appModal.show.minicard = false;
                appModal.showModal = false;
            });
        },
        denyApply: function denyApply(applyId) {
            var postdata = {
                applyId: applyId,
                result: 2
            };
            EventUtils.ajaxReq("/readcard/operationApply", "get", postdata, function (resp, status) {
                appModal.show.minicard = false;
                appModal.showModal = false;
            });
        },
        toSmartFresh: function toSmartFresh() {
            this.show.freshhintbox = false;
            this.show.freshbox = true;
        },
        toPlanSticky: function toPlanSticky() {
            this.show.stickyhintbox = false;
            this.show.stickybox = true;
        },
        closeSticky: function closeSticky() {
            this.show.stickybox = false;
            this.showModal = false;
        },
        closeHintSticky: function closeHintSticky() {
            this.show.stickyhintbox = false;
            this.showModal = false;
        },
        closeFresh: function closeFresh() {
            this.show.freshbox = false;
            this.showModal = false;
        },
        closeHintFresh: function closeHintFresh() {
            this.show.freshhintbox = false;
            this.showModal = false;
        },
        checkAutopay: function checkAutopay(obj) {
            (0, _jquery2.default)(obj).toggleClass("on");
        },
        selectStickyItem: function selectStickyItem(index, obj) {
            (0, _jquery2.default)(".sticky-sofort-list .icon-radio").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
            switch (index) {
                case 0:
                    this.sticky.presum = 10;
                    this.sticky.sum = 10;
                    break;
                case 1:
                    this.sticky.presum = 10 * 3;
                    this.sticky.sum = Math.floor(this.sticky.presum * 0.9);
                    break;
                case 2:
                    this.sticky.presum = 10 * 5;
                    this.sticky.sum = Math.floor(this.sticky.presum * 0.8);
                    break;
                case 3:
                    this.sticky.presum = 10 * 10;
                    this.sticky.sum = Math.floor(this.sticky.presum * 0.7);
                    break;
                default:
            }
        },
        selectFreshItem: function selectFreshItem(index, obj) {
            (0, _jquery2.default)(".fresh-smart-list .icon-radio").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
            switch (index) {
                case 0:
                    this.fresh.presum = 1 * 4;
                    this.fresh.sum = 4;
                    break;
                case 1:
                    this.fresh.presum = 1 * 4 * 3;
                    this.fresh.sum = this.fresh.presum * 0.9.toFixed(1);
                    break;
                case 2:
                    this.fresh.presum = 1 * 4 * 5;
                    this.fresh.sum = Math.floor(this.fresh.presum * 0.8).toFixed(1);
                    break;
                case 3:
                    this.fresh.presum = 1 * 4 * 10;
                    this.fresh.sum = Math.floor(this.fresh.presum * 0.7).toFixed(1);
                    break;
                default:
            }
        },
        selectStickWay: function selectStickWay(way, obj) {
            (0, _jquery2.default)(".stick-navs .on").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
            if (way == "sofort") {
                this.sticky.sofort = true;
                this.sticky.sum = 4;
                this.sticky.presum = 4;
            } else {
                this.sticky.sofort = false;
                this.sticky.sum = autoStickSum();
            }
        },
        selectFreshWay: function selectFreshWay(way, obj) {
            (0, _jquery2.default)(".fresh-navs .on").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
            if (way == "smart") {
                this.fresh.smart = true;
                this.fresh.sum = 4;
                this.fresh.presum = 4;
            } else {
                this.fresh.smart = false;
                if (this.account.freeFreshTimes > 0) {
                    this.fresh.sum = 0;
                } else {
                    this.fresh.sum = 1;
                }
            }
        },
        closeTrade: function closeTrade() {
            this.showTrade = false;
            this.showModal = false;
        },
        checkfunc: function checkfunc(item, target) {
            if (!target.checked) {
                this.checkedTrades.remove(item);
            } else if (this.checkedTrades.length >= 3) {
                target.checked = false;
                return false;
            } else {
                this.checkedTrades.push(item);
            }
        },
        submitTrade: function submitTrade() {
            appCont.resume.expect.tradeItems = this.checkedTrades.join();
            this.showTrade = false;
            this.showModal = false;
        },
        cancelTrade: function cancelTrade() {
            this.showTrade = false;
            this.showModal = false;
        },
        hidemodal: function hidemodal() {
            this.showModal = false;
            this.showTrade = false;
            this.showPreview = false;
            for (var key in appModal.show) {
                appModal.show[key] = false;
            }
        },
        stayshow: function stayshow(ev) {
            ev.stopPropagation();
            return false;
        },
        closePorto: function closePorto() {
            this.show.upload = false;
            this.showModal = false;
        },
        remainText: function remainText(text) {
            if (400 - text.length < 0) {
                return 0;
            }
            return 400 - text.length;
        },
        checkText: function checkText(type) {
            if (type == "comment") {
                var len = this.comment.text.length;
                if (len > 400) {
                    alert("最多只能输入400字！");
                    this.comment.text = this.comment.text.slice(0, 400);
                }
            }
        },
        confirmComment: function confirmComment() {
            var postdata = {
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                comment: this.comment.text,
                reportUserId: this.comment.cooperId
            };
            console.log(postdata);
            EventUtils.ajaxReq("/sys/comment", "post", postdata, function (resp, status) {
                appModal.comment.text = "";
                appModal.show.comment = false;
                appModal.showModal = false;
            });
        },
        cancelComment: function cancelComment() {
            this.comment.text = "";
            this.show.comment = false;
            this.showModal = false;
        },
        closeMobile: function closeMobile() {
            this.show.mobile = false;
            this.showModal = false;
        },
        closeWechat: function closeWechat() {
            this.show.wechat = false;
            this.showModal = false;
        },
        closeEmail: function closeEmail() {
            this.show.email = false;
            this.showModal = false;
        }
    },
    watch: {
        "show.minicard": function showMinicard(curval) {
            if (curval) {
                EventUtils.absCenter((0, _jquery2.default)(".minicard"));
            }
        },
        "show.preImg": function showPreImg(curval) {
            if (curval) {
                EventUtils.absCenter((0, _jquery2.default)("#app-modal .preview-file"));
            }
        },
        "show.upload": function showUpload(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .porto-upload"));
                });
            }
        },
        "show.mobile": function showMobile(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .mobile-bind"));
                });
            }
        },
        "show.email": function showEmail(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .email-bind"));
                });
            }
        },
        "show.wechat": function showWechat(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .wechat-bind"));
                });
            }
        },
        "show.comment": function showComment(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .comment-box"));
                });
            }
        },
        "show.stickybox": function showStickybox(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .refresh-box"));
                });
            }
        },
        "show.stickyhintbox": function showStickyhintbox(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .refresh-hint-box"));
                });
            }
        },
        "show.freshbox": function showFreshbox(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .refresh-box"));
                });
            }
        },
        "show.freshhintbox": function showFreshhintbox(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .refresh-hint-box"));
                });
            }
        },
        "sticky.sum": function stickySum(curval) {
            this.sticky.sofortBtn = curval > this.account.money ? "立即充值" : "立即置顶";
            this.sticky.planBtn = curval > this.account.money ? "立即充值" : "立即置顶";
        },
        "fresh.sum": function freshSum(curval) {
            this.fresh.sofortBtn = curval > this.account.money ? "立即充值" : "立即刷新";
            this.fresh.smartBtn = curval > this.account.money ? "立即充值" : "立即刷新";
        }
    },
    mounted: function mounted() {
        this.sticky.sofortBtn = 10 > this.account.money ? "立即充值" : "立即置顶";
        this.fresh.smartBtn = 4 > this.account.money ? "立即充值" : "立即刷新";
    }
});

function init_center() {
    // selectInit();
    selectInitInput();
    selectInitPos();
    navEventBind();
    vipEventBind();
    modalEventBind();
    uploadEventBind();
    refreshEventBind();
    datepickEventBind();
}
init_center();

function uploadEventBind() {
    var options = {
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: 'images/avatar.png'
    };
    var cropper = (0, _jquery2.default)('.imgBox').cropbox(options);
    (0, _jquery2.default)('#upload-file').on('change', function () {
        // if(this.files[0].size)
        // console.log(this.value, this.files[0].size);

        var reader = new FileReader();
        reader.onload = function (e) {
            options.imgSrc = e.target.result;
            cropper = (0, _jquery2.default)('.imgBox').cropbox(options);
        };
        reader.readAsDataURL(this.files[0]);
        this.files = null;
    });
    (0, _jquery2.default)('.zoom-in').on('click', function () {
        cropper.zoomIn();
    });
    (0, _jquery2.default)('.zoom-out').on('click', function () {
        cropper.zoomOut();
    });

    (0, _jquery2.default)('#btnSubmit').on('click', function () {
        var imgsrc = cropper.getDataURL();
        // console.log(imgsrc.length);
        if (imgsrc.length > 500 * 1024) {
            alert("请上传小于500K的头像！");
            return;
        }
        var postdata = {
            userId: parObj.userId,
            userIcon: imgsrc
        };
        EventUtils.ajaxReq("/center/user/uploadIcon", "post", postdata, function (resp, status) {
            (0, _jquery2.default)("#avatar-box").html("<img src='" + resp.data + "' />");
        });
        appModal.show.upload = false;
        appModal.showModal = false;
    });
}

function navEventBind() {

    (0, _jquery2.default)(".sideBox .sub-li p").unbind("click").bind("click", function () {
        (0, _jquery2.default)(this).siblings("p.on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
        (0, _jquery2.default)(".content").children().hide();
        (0, _jquery2.default)(".content").children("." + (0, _jquery2.default)(this).attr("paneid")).show();
        if ((0, _jquery2.default)(this).attr("paneid") == "combi-msg") {
            //请求校企合作消息
            if (appCont.message.combi.state == "发出的邀请") {
                combiMsgRequest(1, 1);
            } else {
                combiMsgRequest(2, 1);
            }
        }
        if ((0, _jquery2.default)(this).attr("paneid") == "recruit-msg") {
            //请求招聘会消息
            recruitMsgRequest(1);
        }
        selectInitPos();
        return false;
    });

    (0, _jquery2.default)(".sideBox>li").unbind("click").bind("click", function () {
        (0, _jquery2.default)(".sideBox").children("li.on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
        (0, _jquery2.default)(".sideBox .sub-li").hide();
        if ((0, _jquery2.default)(this).find(".sub-li").length > 0) {
            (0, _jquery2.default)(this).find(".sub-li").show();
            (0, _jquery2.default)(".content").children().hide();
            (0, _jquery2.default)(".content").children("." + (0, _jquery2.default)(this).find(".sub-li .on").attr("paneid")).show();
        }
        //需求面板请求结果
        if ((0, _jquery2.default)(this).attr("paneid") == "requireBox") {
            //默认请求校企合作的数据
            demandRequest(appCont.require.demandSrc, 1);
        }

        // 收藏面板请求结果
        if ((0, _jquery2.default)(this).attr("paneid") == "collectBox") {
            collectRequest(appCont.collect.timeindex, 1);
        }
        //消息中心
        if ((0, _jquery2.default)(this).attr("paneid") == "combi-msg") {
            //请求校企合作消息
            if (appCont.message.combi.state == "发出的邀请") {
                combiMsgRequest(1, 1);
            } else {
                combiMsgRequest(2, 1);
            }
        }
        //校企合作
        if ((0, _jquery2.default)(this).attr("paneid") == "uni-coop") {
            coopRequest(appCont.coop.applystatus, 1);
        }
        if ((0, _jquery2.default)(this).attr("paneid")) {
            (0, _jquery2.default)(".content").children().hide();
            (0, _jquery2.default)(".content").children("." + (0, _jquery2.default)(this).attr("paneid")).show();
        }
        selectInitPos();
    });
};
//如果有主题跳转信息
if (parObj.theme) {
    switch (parObj.theme) {
        case "vip":
            (0, _jquery2.default)(".sideBox li[paneid='vip-center']").trigger("click");
            break;
        case "require":
            (0, _jquery2.default)(".sideBox li[paneid='requireBox']").trigger("click");
            break;
        case "combi":
            (0, _jquery2.default)(".sideBox li[paneid='uni-coop']").trigger("click");
            break;
        case "collect":
            (0, _jquery2.default)(".sideBox li[paneid='collectBox']").trigger("click");
            break;
    }
}

function vipEventBind() {
    (0, _jquery2.default)(".vip-navs li").each(function (index) {
        (0, _jquery2.default)(this).click(function () {
            (0, _jquery2.default)(".vip-navs li.on").removeClass("on");
            (0, _jquery2.default)(this).addClass("on");
            (0, _jquery2.default)(".vip-cont").removeClass("on");
            (0, _jquery2.default)((0, _jquery2.default)(".vip-cont")[index]).addClass("on");
        });
    });
}

function init_safepos(percent) {
    var p_left = Math.floor((0, _jquery2.default)(".safe-range").width() * percent / 100) - 16 + "px";
    (0, _jquery2.default)(".r-pointer").css("left", p_left);
    (0, _jquery2.default)("#safe-progress").css("width", percent + "%");
}

function modalEventBind() {
    (0, _jquery2.default)(".msg-center").click(function () {
        (0, _jquery2.default)(".modal").show();
        (0, _jquery2.default)(".modal").children().hide();
        (0, _jquery2.default)(".modal .msg-box").show();
    });
    (0, _jquery2.default)(".msg-body li").bind("click", function () {
        (0, _jquery2.default)(".show01").hide();
        (0, _jquery2.default)(".show02").show();
        (0, _jquery2.default)(".msg-head").text("系统消息");
    });
    (0, _jquery2.default)(".back").click(function () {
        (0, _jquery2.default)(".show02").hide();
        (0, _jquery2.default)(".show01").show();
        (0, _jquery2.default)(".msg-head").text("消息中心");
    });
    (0, _jquery2.default)(".close").unbind("click").bind("click", function () {
        (0, _jquery2.default)(this).closest("div").hide();
        (0, _jquery2.default)(".modal").hide();
    });
}

function refreshEventBind() {
    (0, _jquery2.default)(".plan-sticky-table td").click(function () {
        if (!(0, _jquery2.default)(this).hasClass("td-title")) {
            (0, _jquery2.default)(".plan-sticky-table td[col='" + (0, _jquery2.default)(this).attr("col") + "']").removeClass("on");
            (0, _jquery2.default)(this).addClass("on");
            appModal.sticky.sum = autoStickSum();
        }
    });
};

function datepickEventBind() {
    var nowTemp = new Date();
    var timediff = 6 * 24 * 3600 * 1000;
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    (0, _jquery2.default)('#sticktime-from').val(EventUtils.formatDate(nowTemp.getFullYear(), nowTemp.getMonth() + 1, nowTemp.getDate()));
    nowTemp.setDate(nowTemp.getDate() + 6);
    (0, _jquery2.default)('#sticktime-to').val(EventUtils.formatDate(nowTemp.getFullYear(), nowTemp.getMonth() + 1, nowTemp.getDate()));
    var checkin = (0, _jquery2.default)('#sticktime-from').fdatepicker({
        format: 'yyyy-mm-dd',
        onRender: function onRender(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkout.date.valueOf() - timediff) {
            var newDate = new Date(ev.date);
            newDate.setDate(newDate.getDate() + 6);
            checkout.update(newDate);
        }
        appModal.sticky.sum = autoStickSum();
        checkin.hide();
        (0, _jquery2.default)('#sticktime-to')[0].focus();
    }).data('datepicker');
    var checkout = (0, _jquery2.default)('#sticktime-to').fdatepicker({
        format: 'yyyy-mm-dd',
        onRender: function onRender(date) {
            return date.valueOf() < checkin.date.valueOf() + timediff ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        appModal.sticky.sum = autoStickSum();
        checkout.hide();
    }).data('datepicker');
}
//根据计划置顶表单变化计算总价格
function autoStickSum() {
    var summe = 0;
    var tempDate = new Date((0, _jquery2.default)("#sticktime-from").val());
    var diffDays = Math.floor((new Date((0, _jquery2.default)("#sticktime-to").val()) - tempDate) / 1000 / 60 / 60 / 24); //计算起始和终点的日期差值
    (0, _jquery2.default)(".plan-sticky-table tr").each(function (index) {
        if (index == 1) {
            summe += (0, _jquery2.default)(this).find("td.on").length * 70;
        } else if (index == 2) {
            summe += (0, _jquery2.default)(this).find("td.on").length * 50;
        };
    });
    summe = summe * Math.floor((diffDays + 1) / 7);
    if ((diffDays + 1) % 7 != 0) {
        var startWeekday = tempDate.getDay();
        for (var j = 0; j < (diffDays + 1) % 7; j++) {
            var row_index = (j + startWeekday) % 7;
            //  console.log(row_index);
            (0, _jquery2.default)(".plan-sticky-table td[col='" + row_index + "']").each(function () {
                if ((0, _jquery2.default)(this).hasClass("on")) {
                    //        console.log($(this).attr("row"));
                    if ((0, _jquery2.default)(this).attr("row") == "1") {
                        summe += 70;
                    } else if ((0, _jquery2.default)(this).attr("row") == "2") summe += 50;
                }
            });
        }
    };
    return summe;
}

// 请求数据函数列表
// 高校需求数据请求
function demandRequest(index, page) {
    appCont.require.curpage = page;
    if (index == 0) {
        // 校企合作需求
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            demandType: 1,
            index: page,
            count: 3
        };
        EventUtils.ajaxReq("/demand/getList", "get", postdata, function (resp, status) {
            console.log(resp);
            if (resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            };
            appCont.require.demandSrc = 0;
        });
    } else if (index == 1) {
        //招聘会需求
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            jobFairType: 1,
            index: page,
            count: 3
        };
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function (resp, status) {
            console.log(resp);
            if (resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            };
            appCont.require.demandSrc = 1;
        });
    }
}

//收藏信息数据请求
function collectRequest(timeindex, page) {
    appCont.collect.curpage = page;
    appCont.collect.timeindex = timeindex;
    var postdata = {
        userId: parObj.userId,
        loginIdentifier: parObj.loginId,
        timeType: timeindex,
        index: page,
        count: 3
    };
    EventUtils.ajaxReq("/demand/getMarkList", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp.data) {
            appCont.collect.totalpages = resp.data.totalPage;
            appCont.collect.totalitems = resp.data.totalRow;
            appCont.collect.results = resp.data.list;
        } else {
            appCont.collect.results = [];
            appCont.collect.totalitems = 0;
        }
    });
}
// 校企合作消息数据请求
function combiMsgRequest(applystatus, page) {
    appCont.message.combi.curpage = page;
    var postdata = {
        userId: parObj.userId,
        applyStatus: applystatus,
        index: page,
        count: 3
    };
    EventUtils.ajaxReq("/demand/getDemandApply", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.combi.totalitems = resp.data.totalRow;
            appCont.message.combi.totalpages = resp.data.totalPage;
            appCont.message.combi.results = resp.data.list;
        } else {
            appCont.message.combi.results = [];
            appCont.message.combi.totalitems = 0;
        }
        appCont.message.combi.msgsrc = applystatus;
    });
}

function recruitMsgRequest(page) {
    appCont.message.recruit.curpage = page;
    var postdata = {
        userId: parObj.userId,
        index: page,
        count: 3
    };
    EventUtils.ajaxReq("/jobfair/getApplySchool", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.recruit.totalitems = resp.data.totalRow;
            appCont.message.recruit.totalpages = resp.data.totalPage;
            appCont.message.recruit.results = resp.data.list;
        } else {
            appCont.message.recruit.results = [];
            appCont.message.recruit.totalitems = 0;
        }
    });
}

function coopRequest(applyindex, page) {
    appCont.coop.curpage = page;
    var postdata = {
        userId: parObj.userId,
        loginIdentifier: parObj.loginId,
        index: page,
        count: 3,
        applyStatus: applyindex
    };
    console.log(postdata);
    EventUtils.ajaxReq("/demand/getDemandApplyList", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.coop.totalitems = resp.data.totalRow;
            appCont.coop.totalpages = resp.data.totalPage;
            appCont.coop.results = resp.data.list;
        } else {
            appCont.coop.results = [];
            appCont.coop.totalitems = 0;
            appCont.coop.totalpages = 1;
        }
        appCont.coop.applystatus = applyindex;
    });
}

/***/ })

},[52]);