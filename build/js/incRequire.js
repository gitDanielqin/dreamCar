webpackJsonp([4],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var templMajor = '<div style="position:relative" class="pop-major-box">\
          <span @click.stop="pop(1,$event.target)" class="major-input major-input-1"><input type="text" placeholder="一级专业" readonly v-model="selMajor" ></span>\
          <span @click.stop="pop(2,$event.target)" class="major-input major-input-2"><input type="text" placeholder="二级专业" readonly v-model="selSubMajor"></span>\
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
                $(this).css("background-position", bgPos);
                this.initFlag = true;
            }
        });
    }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 24:
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

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(6);
__webpack_require__(19);
__webpack_require__(8);
__webpack_require__(18);
__webpack_require__(24);
__webpack_require__(10);
__webpack_require__(13);
__webpack_require__(11);
__webpack_require__(17);
__webpack_require__(12);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(27);
__webpack_require__(31);
var parObj = EventUtils.urlExtrac(window.location);
console.log(parObj);
var isNewRequire = true;
var respObj = {};
if (parObj.new && parObj.new != "1") {
    //非首次发布
    isNewRequire = false;
}
//初始化数据库信息
EventUtils.initDatabase();

function infoRequest() {
    // if(parObj.demandSrc==0){
    if (parObj.demandSrc == "0") {
        //如果是校企合作需求详情     

        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            demandId: parObj.demandId
        };
        EventUtils.ajaxReq("/demand/getInfo", "get", postdata, function (resp, status) {
            respObj = resp.data;
            console.log(respObj);

            var combidata = {
                datatype: "combi",
                header: respObj.title,
                initAddress: {
                    province: respObj.schoolAddress.split(";")[0],
                    city: respObj.schoolAddress.split(";")[1],
                    district: respObj.schoolAddress.split(";")[2]
                },
                initPosition: {
                    pos_1: respObj.job.split(";")[0],
                    pos_2: respObj.job.split(";")[1],
                    pos_3: respObj.job.split(";")[2]
                },
                incReq: {
                    stuScale: respObj.professionCount,
                    uniLevel: respObj.schoolProperty,
                    uniClassific: respObj.schoolType
                },
                incApply: {
                    posAmount: respObj.jobCount,
                    trainWay: respObj.trainType
                },
                requireDesc: respObj.discription,
                contact: {
                    person: respObj.linkMan,
                    phone: respObj.mobile,
                    address: respObj.companyAddress.split(";").join("-")
                }
            };
            appMain.combiData = combidata;

            (0, _jquery2.default)(".cont-combi .major-input-1 input").val(respObj.profession.split(";")[0]);
            (0, _jquery2.default)(".cont-combi .major-input-2 input").val(respObj.profession.split(";")[1]);
            //初始化联合培养时间表
            (0, _jquery2.default)(".cont-combi .time-table td.on").removeClass("on");
            var timeArray = respObj.trainTime.split(";");
            for (var i = 0; i < timeArray.length; i++) {
                for (var j = 0; j < timeArray[i].length; j++) {
                    if (timeArray[i].charAt(j) == "1") {
                        (0, _jquery2.default)(".cont-combi .time-table .time-tr").eq(i).find("td.t-cell").eq(j).addClass("on");
                    }
                }
            }
        });
    }
    if (parObj.demandSrc == "1") {
        //如果是招聘会需求详情
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            jobFairId: parObj.jobfairId
        };
        EventUtils.ajaxReq("/jobfair/getInfo", "get", postdata, function (resp, status) {
            respObj = resp.data;
            console.log(respObj);
            var initpos = "";
            if (respObj.job) {
                initpos = {
                    pos_1: respObj.job.split(";")[0],
                    pos_2: respObj.job.split(";")[1],
                    pos_3: respObj.job.split(";")[2]
                };
            }
            if (respObj.profession) {
                (0, _jquery2.default)(".cont-recruit .major-input-1 input").val(respObj.profession.split(";")[0]);
                (0, _jquery2.default)(".cont-recruit .major-input-2 input").val(respObj.profession.split(";")[1]);
            }
            var recdata = {
                datatype: "recruit",
                header: respObj.title,
                postype: respObj.workType,
                initPosition: initpos,
                jobAmount: respObj.jobCount,
                scolar: respObj.cvEducation,
                gender: respObj.cvSex,
                worksexp: respObj.cvProject,
                salary: respObj.cvSalary,
                date: respObj.startTime,
                desc: respObj.discription,
                contact: {
                    person: respObj.linkMan,
                    phone: respObj.mobile,
                    address: respObj.jobFairAddress ? respObj.jobFairAddress.split(";").join("-") : ""
                }
            };
            appMain.recruitData = recdata;
            if (respObj.cvWelfare) {
                var welfareArray = respObj.cvWelfare.split(";");
                (0, _jquery2.default)(".cont-recruit .welfare-lis li").each(function () {
                    if (welfareArray.indexOf((0, _jquery2.default)(this).find("span").html()) >= 0) {
                        (0, _jquery2.default)(this).find("i.check-box").addClass("on");
                    }
                });
            }
        });
    }
    if (parObj.demandSrc == "2") {
        //如果是企业直聘需求详情 
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            recruitId: parObj.recruitId
        };
        console.log(postdata);
        EventUtils.ajaxReq("/recruit/getInfo", "get", postdata, function (resp, status) {
            respObj = resp.data;
            console.log(respObj);
            var gender = "";
            switch (respObj.sex) {
                case "1":
                    gender = "男";
                    break;
                case "2":
                    gender = "女";
                    break;
                case "3":
                    gender = "不限";
                    break;
            }
            if (respObj.job) {
                var initpos = {
                    pos_1: respObj.job.split(";")[0],
                    pos_2: respObj.job.split(";")[1],
                    pos_3: respObj.job.split(";")[2]
                };
            } else {
                var initpos = "";
            }
            if (respObj.profession) {
                (0, _jquery2.default)(".cont-direct .major-input-1 input").val(respObj.profession.split(";")[0]);
                (0, _jquery2.default)(".cont-direct .major-input-2 input").val(respObj.profession.split(";")[1]);
            }
            if (respObj.welfare) {
                var welfareArray = respObj.welfare.split(";");
                (0, _jquery2.default)(".cont-direct .welfare-lis li").each(function () {
                    if (welfareArray.indexOf((0, _jquery2.default)(this).find("span").html()) >= 0) {
                        (0, _jquery2.default)(this).find("i.check-box").addClass("on");
                    }
                });
            }
            var directdata = {
                datatype: "direct",
                postype: respObj.workType,
                header: respObj.title,
                initPosition: initpos,
                amount: respObj.recruitCount,
                scolar: respObj.education,
                gender: gender,
                worksexp: respObj.workTime,
                salary: respObj.salary,
                desc: respObj.discription,
                contact: {
                    person: respObj.linkMan,
                    phone: respObj.mobile,
                    address: respObj.companyAddress ? respObj.companyAddress.split(";").join("-") : ""
                }
            };
            appMain.directData = directdata;
        });
    }
};

var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: EventUtils.securityUrl("index.html?userId=" + parObj.userId),
        centerLink: EventUtils.securityUrl("incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId)
    },
    methods: {
        showMsg: function showMsg() {
            appModal.show.message = true;
            appModal.show.modal = true;
        }
    }
});
var appMain = new Vue({
    el: "#app-main",
    data: {
        newRequire: isNewRequire,
        showpage: {
            page1: parObj.demandSrc == "0" || isNewRequire,
            page2: parObj.demandSrc == "1",
            page3: parObj.demandSrc == "2"
        },
        database: {
            addrData: addArray,
            uni: {
                classific: xqdatabase.uniclassific,
                postype: ["全职", "兼职", "实习", "校园"],
                amount: xqdatabase.majorSum,
                unilevel: xqdatabase.unilevel,
                scolars: xqdatabase.scolarship,
                majors: majorArray
            },
            inc: {
                posAmount: xqdatabase.positionsum,
                worksexp: xqdatabase.worksexp,
                salary: xqdatabase.salary
            },
            trainway: ["企业高管到校", "学生入企", "面议"],
            posdata: posArray,
            welfares: xqdatabase.welfares
        },
        combiData: {
            datatype: "combi",
            header: "",
            initAddress: {
                province: "不限",
                city: "不限",
                district: "不限"
            },
            initPosition: {
                pos_1: "",
                pos_2: "",
                pos_3: ""
            },
            incReq: {
                stuScale: "",
                uniLevel: "不限",
                uniClassific: "不限"
            },
            incApply: {
                posAmount: "",
                trainWay: "企业高管到校"
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
            postype: "不限",
            jobAmount: "",
            scolar: "不限",
            gender: "不限",
            worksexp: "不限",
            salary: "",
            date: "",
            desc: "",
            contact: {
                person: "",
                phone: "",
                address: ""
            }
        },
        directData: {
            datatype: "direct",
            header: "",
            postype: "",
            amount: "",
            scolar: "不限",
            gender: "不限",
            worksexp: "不限",
            salary: "",
            desc: "",
            contact: {
                person: "",
                phone: "",
                address: ""
            }
        }
    },
    methods: {
        clickNav: function clickNav(type, obj) {
            (0, _jquery2.default)(".navs ul li.on").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
            (0, _jquery2.default)(".nav-cont").hide();
            (0, _jquery2.default)(".cont-" + type).show();
            (0, _jquery2.default)(".steps li:nth-of-type(1)").removeClass("past");
            (0, _jquery2.default)(".steps li:nth-of-type(2)").removeClass("on");
            selectInitPos();
        },
        fontCal: function fontCal(str, type) {
            if (str.length <= 1000) {
                return 1000 - str.length;
            } else {
                swal({
                    title: "",
                    text: "已超出最大可输入字数！",
                    type: "warning"
                });
                if (type == "combi") {
                    this.combiData.requireDesc = this.combiData.requireDesc.substr(0, 1000);
                } else if (type == "recruit") {
                    this.recruitData.desc = this.recruitData.desc.substr(0, 1000);
                } else if (type == "direct") {
                    this.directData.desc = this.directData.desc.substr(0, 1000);
                }
                return 1000 - str.length;
            }
        },
        popAddrBox: function popAddrBox(obj) {
            (0, _jquery2.default)(obj).siblings(".addr-box").show();
            selectInitPos();
        },
        confirmIncAddr: function confirmIncAddr(target, type) {
            var incAddress = "";
            var addBox = (0, _jquery2.default)(target).closest(".addr-box");
            addBox.find(".sel-addr input").each(function () {
                if ((0, _jquery2.default)(this).val() == "不限") {
                    swal({
                        title: "",
                        text: "请填写详细的地址信息！",
                        type: "warning"
                    });
                    return false;
                }
                incAddress += (0, _jquery2.default)(this).val() + "-";
            });
            if (addBox.find(".addr-ex").val() != "") {
                incAddress += addBox.find(".addr-ex").val();
            } else {
                incAddress = incAddress.slice(0, -1);
            }
            if (type == "combi") {
                this.combiData.contact.address = incAddress;
            } else if (type == "recruit") {
                this.recruitData.contact.address = incAddress;
            } else if (type == "direct") {
                this.directData.contact.address = incAddress;
            }
            addBox.hide();
        },
        publish: function publish(type) {
            //必填项不能为空！
            var isFilled = true;
            (0, _jquery2.default)(".must-input:visible").each(function () {
                if ((0, _jquery2.default)(this).val() == "") {
                    (0, _jquery2.default)(this).addClass("hint-nullable");
                    isFilled = false;
                } else {
                    (0, _jquery2.default)(this).removeClass("hint-nullable");
                }
            });
            (0, _jquery2.default)(".must-item:visible").each(function () {
                var oInput = (0, _jquery2.default)(this).find("input");
                if (oInput.eq(0).length > 0) {
                    if (oInput.val() == "") {
                        oInput.addClass("hint-nullable");
                        isFilled = false;
                    } else {
                        oInput.removeClass("hint-nullable");
                    }
                }
            });
            if (!isFilled) {
                swal({
                    title: "",
                    text: "请完成所有必填信息！",
                    type: "warning"
                });
                return false;
            }

            if (type == "combi") {
                //检查字段是否规范
                var isValid = true;
                if ((0, _jquery2.default)(".cont-combi .major-input-1 input").val() == "不限") {
                    (0, _jquery2.default)(".cont-combi .major-input input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-combi .major-input input").removeClass("hint-nullable");
                }
                if (this.combiData.incReq.stuScale == "不限") {
                    (0, _jquery2.default)(".cont-combi .pro-count input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-combi .pro-count input").removeClass("hint-nullable");
                }
                if (this.combiData.incApply.posAmount == "不限") {
                    (0, _jquery2.default)(".cont-combi .job-count input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-combi .job-count input").removeClass("hint-nullable");
                }
                if ((0, _jquery2.default)(".cont-combi .sel-pos-1 input").val() == "不限") {
                    (0, _jquery2.default)(".cont-combi .sel-position input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-combi .sel-position input").removeClass("hint-nullable");
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
                    (0, _jquery2.default)(".phone-input:visible").addClass("hint-nullable");
                    swal({
                        title: "",
                        text: "联系方式格式有误！",
                        type: "warning"
                    });
                    return false;
                } else {
                    (0, _jquery2.default)(".phone-input:visible").removeClass("hint-nullable");
                }
                //检测联系人是否符合标准
                if (this.combiData.contact.person && !variableUtils.regExp.name.test(this.combiData.contact.person)) {
                    swal({
                        title: "",
                        text: "联系人姓名过长或格式有误！",
                        type: "warning"
                    });
                    return false;
                }
                //准备发送数据
                if ((0, _jquery2.default)(".cont-combi .time-table").find("td.on").length > 0) {
                    var timestring = "";
                    (0, _jquery2.default)(".cont-combi .time-table .time-tr").each(function () {
                        (0, _jquery2.default)(this).find("td.t-cell").each(function () {
                            timestring += (0, _jquery2.default)(this).hasClass("on") ? "1" : "0";
                        });
                        timestring += ";";
                    });
                    timestring = timestring.slice(0, timestring.length - 1);
                } else {
                    var timestring = "";
                }

                var postdata = {
                    userId: parObj.userId,
                    title: this.combiData.header,
                    demandType: 2,
                    profession: (0, _jquery2.default)(".cont-combi .major-input-1 input").val() + ";" + (0, _jquery2.default)(".cont-combi .major-input-2 input").val(),
                    professionCount: this.combiData.incReq.stuScale,
                    schoolProperty: this.combiData.incReq.uniLevel,
                    schoolType: this.combiData.incReq.uniClassific,
                    schoolAddress: (0, _jquery2.default)(".cont-combi .sel-province input").val() + ";" + (0, _jquery2.default)(".cont-combi .sel-city input").val() + ";" + (0, _jquery2.default)(".cont-combi .sel-district input").val(),
                    job: (0, _jquery2.default)(".cont-combi .sel-pos-1 input").val() + ";" + (0, _jquery2.default)(".cont-combi .sel-pos-2 input").val() + ";" + (0, _jquery2.default)(".cont-combi .sel-pos-3 input").val(),
                    jobCount: this.combiData.incApply.posAmount,
                    trainType: this.combiData.incApply.trainWay,
                    trainTime: timestring,
                    discription: this.combiData.requireDesc,
                    linkMan: this.combiData.contact.person,
                    mobile: this.combiData.contact.phone,
                    companyAddress: this.combiData.contact.address.split("-").join(";")
                };
                if (parObj.demandId) {
                    postdata.demandId = parObj.demandId;
                }
                //     console.log(postdata);
                // console.log(postdata);
                if (isNewRequire) {
                    EventUtils.ajaxReq('/demand/apply', 'post', postdata, function (resp, status) {
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "发布成功！",
                                type: "success",
                                showConfirmButton: false
                            });
                            setTimeout(function () {
                                var link = "incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&theme=require";
                                window.location.href = EventUtils.securityUrl(link);
                            }, 1000);
                        }
                    });
                } else {
                    postdata.demandId = parObj.demandId;
                    EventUtils.ajaxReq('/demand/modifyInfo', 'post', postdata, function (resp, status) {
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "修改成功！",
                                type: "success",
                                showConfirmButton: false
                            });
                            setTimeout(function () {
                                var link = "incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&theme=require";
                                window.location.href = EventUtils.securityUrl(link);
                            }, 1000);
                        }
                    });
                }
            } else if (type == "jobfair") {
                //检测数据是否合规
                var isValid = true;
                if ((0, _jquery2.default)(".cont-recruit .sel-pos-1 input").val() == "不限") {
                    (0, _jquery2.default)(".cont-recruit .sel-position input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-recruit .sel-position input").removeClass("hint-nullable");
                }

                if (this.recruitData.jobAmount == "不限") {
                    (0, _jquery2.default)(".cont-recruit .job-count input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-recruit .job-count input").removeClass("hint-nullable");
                }

                if (this.recruitData.salary == "不限") {
                    (0, _jquery2.default)(".cont-recruit .salary-item input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-recruit .salary-item input").removeClass("hint-nullable");
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
                    (0, _jquery2.default)(".phone-input:visible").addClass("hint-nullable");
                    swal({
                        title: "",
                        text: "联系方式格式有误！",
                        type: "warning"
                    });
                    return false;
                } else {
                    (0, _jquery2.default)(".phone-input:visible").removeClass("hint-nullable");
                }

                //检测联系人是否符合标准
                if (this.recruitData.contact.person && !variableUtils.regExp.name.test(this.recruitData.contact.person)) {
                    swal({
                        title: "",
                        text: "联系人姓名过长或格式有误！",
                        type: "warning"
                    });
                    return false;
                }
                //准备发送数据
                var welfare = "";
                (0, _jquery2.default)(".cont-recruit .welfare-lis li").each(function () {
                    if ((0, _jquery2.default)(this).children("i.check-box").hasClass("on")) {
                        welfare += (0, _jquery2.default)(this).find("span").html() + ";";
                    }
                });
                welfare = welfare.slice(0, -1);
                var postdata = {
                    userId: parObj.userId,
                    jobFairType: 2,
                    title: this.recruitData.header,
                    job: (0, _jquery2.default)(".cont-recruit .sel-pos-1 input").val() + ";" + (0, _jquery2.default)(".cont-recruit .sel-pos-2 input").val() + ";" + (0, _jquery2.default)(".cont-recruit .sel-pos-3 input").val(),
                    workType: this.recruitData.postype,
                    jobCount: this.recruitData.jobAmount,
                    cvEducation: this.recruitData.scolar,
                    profession: (0, _jquery2.default)(".cont-recruit .major-input-1 input").val() + ";" + (0, _jquery2.default)(".cont-recruit .major-input-2 input").val(),
                    cvSex: this.recruitData.gender,
                    cvProject: this.recruitData.worksexp,
                    cvSalary: this.recruitData.salary,
                    cvWelfare: welfare,
                    startTime: (0, _jquery2.default)("#jobfair-date").val(),
                    discription: this.recruitData.desc,
                    linkMan: this.recruitData.contact.person,
                    mobile: this.recruitData.contact.phone,
                    jobFairAddress: this.recruitData.contact.address == "" ? "" : this.recruitData.contact.address.split("-").join(";")
                };
                console.log(postdata);
                if (isNewRequire) {
                    EventUtils.ajaxReq('/jobfair/apply', 'post', postdata, function (resp, status) {
                        if (resp.code = "00000") {
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
                                setTimeout(function () {
                                    var link = "incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&theme=require";
                                    window.location.href = EventUtils.securityUrl(link);
                                }, 1000);
                            }
                        }
                    });
                } else {
                    postdata.jobFairId = parObj.jobfairId;
                    EventUtils.ajaxReq('/jobfair/modifyInfo', 'post', postdata, function (resp, status) {
                        swal({
                            title: "",
                            text: "修改成功！",
                            type: "success",
                            showConfirmButton: false
                        });
                        setTimeout(function () {
                            var link = "incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&theme=require";
                            window.location.href = EventUtils.securityUrl(link);
                        }, 1000);
                    });
                }
            } else if (type == "recruit") {
                //检查数据是否合规
                var isValid = true;
                if ((0, _jquery2.default)(".cont-direct .sel-pos-1 input").val() == "不限") {
                    (0, _jquery2.default)(".cont-direct .sel-position input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-direct .sel-position input").removeClass("hint-nullable");
                }

                if (this.directData.postype == "不限") {
                    (0, _jquery2.default)(".cont-direct .pos-type input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-direct .pos-type input").removeClass("hint-nullable");
                }

                if (this.directData.salary == "不限") {
                    (0, _jquery2.default)(".cont-direct .salary-item input").addClass("hint-nullable");
                    isValid = false;
                } else {
                    (0, _jquery2.default)(".cont-direct .salary-item input").removeClass("hint-nullable");
                }
                if (!isValid) {
                    swal({
                        title: "",
                        text: "必填选项不能为不限！",
                        type: "warning"
                    });
                    return false;
                }

                if (!variableUtils.regExp.phone.test(this.directData.contact.phone) && !variableUtils.regExp.mobile.test(this.directData.contact.phone)) {
                    (0, _jquery2.default)(".phone-input:visible").addClass("hint-nullable");
                    swal({
                        title: "",
                        text: "联系方式格式有误！",
                        type: "warning"
                    });
                    return false;
                } else {
                    (0, _jquery2.default)(".phone-input:visible").removeClass("hint-nullable");
                }
                //检测联系人是否符合标准
                if (this.directData.contact.person && !variableUtils.regExp.name.test(this.directData.contact.person)) {
                    swal({
                        title: "",
                        text: "联系人姓名过长或格式有误！",
                        type: "warning"
                    });
                    return false;
                }
                //准备发送数据
                var sex = 1;
                if (this.directData.gender == "女") {
                    sex = 2;
                } else if (this.directData.gender == "不限") {
                    sex = 3;
                }
                var welfare = "";
                (0, _jquery2.default)(".welfare-lis li").each(function () {
                    if ((0, _jquery2.default)(this).children("i.check-box").hasClass("on")) {
                        welfare += (0, _jquery2.default)(this).find("span").html() + ";";
                    }
                });
                welfare = welfare.slice(0, -1);
                var postdata = {
                    userId: parObj.userId,
                    title: this.directData.header,
                    workType: this.directData.postype,
                    job: (0, _jquery2.default)(".cont-direct .sel-pos-1 input").val() + ";" + (0, _jquery2.default)(".cont-direct .sel-pos-2 input").val() + ";" + (0, _jquery2.default)(".cont-direct .sel-pos-3 input").val(),
                    profession: (0, _jquery2.default)(".cont-direct .major-input-1 input").val() + ";" + (0, _jquery2.default)(".cont-direct .major-input-2 input").val(),
                    recruitCount: this.directData.amount,
                    education: this.directData.scolar,
                    sex: sex,
                    salary: this.directData.salary,
                    workTime: this.directData.worksexp,
                    welfare: welfare,
                    discription: this.directData.desc,
                    linkMan: this.directData.contact.person,
                    mobile: this.directData.contact.phone,
                    companyAddress: this.directData.contact.address != "" ? this.directData.contact.address.split("-").join(";") : ""
                };
                console.log(postdata);
                if (isNewRequire) {
                    EventUtils.ajaxReq('/recruit/apply', 'post', postdata, function (resp, status) {
                        console.log(resp);
                        if (resp.code == "00000") {
                            if (resp.data.status == "0") {
                                swal({
                                    title: "",
                                    text: "您已发布过该岗位，请删除后再发！",
                                    type: "warning"
                                });
                            } else {
                                swal({
                                    title: "",
                                    text: "发布成功！",
                                    type: "success",
                                    showConfirmButton: false
                                });
                                setTimeout(function () {
                                    var link = "incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&theme=require";
                                    window.location.href = EventUtils.securityUrl(link);
                                }, 1000);
                            }
                        }
                    });
                } else {
                    postdata.recruitId = parObj.recruitId;
                    EventUtils.ajaxReq('/recruit/modifyInfo', 'post', postdata, function (resp, status) {
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "修改成功！",
                                type: "success",
                                showConfirmButton: false
                            });
                            setTimeout(function () {
                                var link = "incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&theme=require";
                                window.location.href = EventUtils.securityUrl(link);
                            }, 1000);
                        }
                    });
                }
            }
        }
    },
    watch: {
        'directData.amount': function directDataAmount(curval) {
            if (!/^\d+$/.test(curval) || curval.length > 5) {
                this.directData.amount = curval.slice(0, -1);
            }
        },
        "combiData.contact.phone": function combiDataContactPhone(curval, oldval) {
            if (!/^\d*$/.test(curval) || curval.length > 11) {
                this.combiData.contact.phone = oldval;
            }
        },
        "recruitData.contact.phone": function recruitDataContactPhone(curval, oldval) {
            if (!/^\d*$/.test(curval) || curval.length > 11) {
                this.recruitData.contact.phone = oldval;
            }
        },
        "directData.contact.phone": function directDataContactPhone(curval, oldval) {
            if (!/^\d*$/.test(curval) || curval.length > 11) {
                this.directData.contact.phone = oldval;
            }
        }
    },
    mounted: function mounted() {
        // $(".selectee input").val("不限");
        // $(".major-input input").val("不限");
        (0, _jquery2.default)(".form-cont input").focus(function () {
            (0, _jquery2.default)(".steps li:nth-of-type(1)").addClass("past");
            (0, _jquery2.default)(".steps li:nth-of-type(2)").addClass("on");
        });
        (0, _jquery2.default)("body").click(function () {
            (0, _jquery2.default)(".pop-major").hide();
            (0, _jquery2.default)(".addr-box").hide();
        });
        selectInitInput();
        selectInitPos();
        selectTime();
        selectWelfare();
        datepickEventBind();
    }
});
var appFooter = new Vue({
    el: "#app-footer",
    methods: {
        homeLink: function homeLink() {
            var link = "index.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        }
    }
});
var appModal = new Vue({
    el: "#app-modal",
    data: {
        account: {
            userId: parObj.userId
        },
        show: { modal: false, message: false }
    },
    methods: {
        closeMsg: function closeMsg() {
            this.show.message = false;
            this.show.modal = false;
        }
    },
    watch: {
        "show.message": function showMessage(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .msg-box"));
                });
            } else {
                var postdata = {
                    userId: parObj.userId,
                    index: 1,
                    count: 8
                };
                EventUtils.ajaxReq("/message/getMessageList", "get", postdata, function (resp, status) {
                    if (resp.data && resp.data.count > 0) {
                        (0, _jquery2.default)(".msg-center .msg-info").html(resp.data.count);
                        (0, _jquery2.default)(".msg-center .msg-info").show();
                    } else {
                        (0, _jquery2.default)(".msg-center .msg-info").hide();
                    }
                });
            }
        }
    }
});

if (parObj.new && parObj.new != "1") {
    //非首次发布
    infoRequest();
}

function selectRepos() {
    (0, _jquery2.default)(".selectee ul").each(function () {
        var sibInput = (0, _jquery2.default)(this).siblings("input");
        //console.log(sibInput.height());
        (0, _jquery2.default)(this).width(sibInput.outerWidth() - 2);
        (0, _jquery2.default)(this).css({
            left: sibInput.css("margin-left") + "px",
            top: 25 + "px"
        });
    });
}

//时间表选择事件
function selectTime() {
    (0, _jquery2.default)(".time-table .t-cell").click(function () {
        if ((0, _jquery2.default)(this).hasClass("on")) {
            (0, _jquery2.default)(this).removeClass("on");
        } else {
            (0, _jquery2.default)(this).addClass("on");
        }
    });
}
// 福利点击事件
function selectWelfare() {
    (0, _jquery2.default)(".welfare-lis .check-box").click(function () {
        if ((0, _jquery2.default)(this).hasClass("on")) {
            (0, _jquery2.default)(this).removeClass("on");
        } else {
            (0, _jquery2.default)(this).addClass("on");
        }
    });
}

//招聘会日期选择
function datepickEventBind() {
    var nowTemp = new Date();
    var timediff = 6 * 24 * 3600 * 1000;
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    (0, _jquery2.default)('#jobfair-date').val(EventUtils.formatDate(nowTemp.getFullYear(), nowTemp.getMonth() + 1, nowTemp.getDate()));
    var jobfairdate = (0, _jquery2.default)('#jobfair-date').fdatepicker({
        format: 'yyyy-mm-dd',
        onRender: function onRender(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        jobfairdate.hide();
    }).data('datepicker');
}

/***/ })

},[62]);