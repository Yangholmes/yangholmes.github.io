import{_ as s,c as a,o as p,am as e}from"./chunks/framework.CwIip2Pw.js";const l="/assets/image.BBydLIMm.png",h=JSON.parse('{"title":"ExtJS 自定义 datetimefield 控件","description":"","frontmatter":{"createDate":"2016/05/07","title":"ExtJS 自定义 datetimefield 控件"},"headers":[],"relativePath":"技术的小记/ExtJS 自定义 datetimefield 控件/index.md","filePath":"技术的小记/ExtJS 自定义 datetimefield 控件/index.md","lastUpdated":1754554920000}'),i={name:"技术的小记/ExtJS 自定义 datetimefield 控件/index.md"};function t(c,n,r,m,d,u){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="extjs-自定义-datetimefield-控件" tabindex="-1">ExtJS 自定义 datetimefield 控件 <a class="header-anchor" href="#extjs-自定义-datetimefield-控件" aria-label="Permalink to &quot;ExtJS 自定义 datetimefield 控件&quot;">​</a></h1><p><strong>2016/05/07</strong></p><p>这一年都在使用 ExtJS 5.0 开发系统，经常会遇到的一个场景就是时间日期的选择了。比如说，预定场地的时候就必须由用户选择预定的日期和时间。</p><p>可惜的是，ExtJS 5.0 没有自带一个可以同时选择日期时间的控件（ExtJS 6.0 已经推出了，还没用过，不知道加入这种控件没~），通常偷懒的做法就是，先放一个日期控件，然后再放一个时间控件。用户使用的时候，先选择日期，再选择时间，最后用很别扭的办法将日期和时间拼装起来。</p><p>理想的状态是，提供给用户一个可以同时选择时间和日期的控件，并且数据是“日期+时间”的 Date 类型。既符合使用习惯，又方便开发。</p><p>故第二种偷懒的方式是，从网上扒一个现成的解决方案来用。此法最快，但是在过程中遇到了一个问题，现成可以搜索到的方案都有点旧，大多数还停留在 ExtJS 2.X、3.X 和 4.X 版本，自从 ExtJS 从 4 升级到 5 之后，API 改变了许多，所以并不能直接使用。</p><p>最后只能是自己写一个。准确来说，应该是拿了一份现成的代码修改，这个代码在 ExtJS 5.0 下不能正确运行，但是需要修改的量非常少，所以很感谢这份现成代码的作者，可惜没有署名，不知道是谁。</p><p>ExtJS 5.0 上测试成功，实现方法是：</p><h4 id="_1-自定义一个时间选择器-timepickerfield-继承自-ext-form-field-base-由三个-numberfield-组成。" tabindex="-1">1. 自定义一个时间选择器 TimePickerField，继承自 Ext.form.field.Base，由三个 NumberField 组成。 <a class="header-anchor" href="#_1-自定义一个时间选择器-timepickerfield-继承自-ext-form-field-base-由三个-numberfield-组成。" aria-label="Permalink to &quot;1. 自定义一个时间选择器 TimePickerField，继承自 Ext.form.field.Base，由三个 NumberField 组成。&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  Ext.define(&#39;MyApp.ux.DateTimeField.TimePickerField&#39;, {</span></span>
<span class="line"><span>    extend: &#39;Ext.form.field.Base&#39;,</span></span>
<span class="line"><span>    alias: &#39;widget.timepicker&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    alternateClassName: &#39;Ext.form.field.TimePickerField&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    requires: [&#39;Ext.form.field.Number&#39;],</span></span>
<span class="line"><span>    inputType: &#39;text&#39;,</span></span>
<span class="line"><span>    fieldLabel: &#39;时间&#39;,</span></span>
<span class="line"><span>    labelWidth: 40,</span></span>
<span class="line"><span>    style: &#39;padding:4px 0; margin: 0; &#39;,</span></span>
<span class="line"><span>    value: null,</span></span>
<span class="line"><span>    spinnerCfg: {</span></span>
<span class="line"><span>      width: 50,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    initComponent: function() {</span></span>
<span class="line"><span>      var me = this;</span></span>
<span class="line"><span>      me.value = me.value || Ext.Date.format(new Date(), &#39;H:i:s&#39;);</span></span>
<span class="line"><span>      me.callParent(arguments);</span></span>
<span class="line"><span>      me.spinners = [];</span></span>
<span class="line"><span>      var cfg = Ext.apply({}, me.spinnerCfg, {</span></span>
<span class="line"><span>  //      readOnly: me.readOnly,</span></span>
<span class="line"><span>        disabled: me.disabled,</span></span>
<span class="line"><span>        style: &#39;float: left&#39;,</span></span>
<span class="line"><span>        listeners: {</span></span>
<span class="line"><span>          change: {</span></span>
<span class="line"><span>          fn: me.onSpinnerChange,</span></span>
<span class="line"><span>          scope: me</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      me.hoursSpinner = Ext.create(&#39;Ext.form.field.Number&#39;, Ext.apply({}, cfg, {</span></span>
<span class="line"><span>  //      minValue: -1,</span></span>
<span class="line"><span>  //      maxValue: 24,</span></span>
<span class="line"><span>          minNum: 0,</span></span>
<span class="line"><span>          maxNum: 23,</span></span>
<span class="line"><span>        }));</span></span>
<span class="line"><span>      me.minutesSpinner = Ext.create(&#39;Ext.form.field.Number&#39;, Ext.apply({}, cfg, {</span></span>
<span class="line"><span>  //      minValue: -1,</span></span>
<span class="line"><span>  //      maxValue: 60,</span></span>
<span class="line"><span>            minNum: 0,</span></span>
<span class="line"><span>            maxNum: 59,</span></span>
<span class="line"><span>        }));</span></span>
<span class="line"><span>      me.secondsSpinner = Ext.create(&#39;Ext.form.field.Number&#39;, Ext.apply({}, cfg, {</span></span>
<span class="line"><span>  //      minValue: -1,</span></span>
<span class="line"><span>  //      MAXVALUE: 60,</span></span>
<span class="line"><span>            minNum: 0,</span></span>
<span class="line"><span>            maxNum: 59,</span></span>
<span class="line"><span>        }));</span></span>
<span class="line"><span>      me.spinners.push(me.hoursSpinner, me.minutesSpinner, me.secondsSpinner);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onRender: function() {</span></span>
<span class="line"><span>      var me = this, spinnerWrapDom, spinnerWrap;</span></span>
<span class="line"><span>      me.callParent(arguments);</span></span>
<span class="line"><span>      spinnerWrap = Ext.get(Ext.DomQuery.selectNode(&#39;div&#39;, this.el.dom));</span></span>
<span class="line"><span>      me.callSpinnersFunction(&#39;render&#39;, spinnerWrap);</span></span>
<span class="line"><span>      this.el.dom.getElementsByTagName(&#39;input&#39;)[0].style.display = &#39;none&#39;;</span></span>
<span class="line"><span>      var newTimePicker = Ext.DomHelper.append(spinnerWrap, {</span></span>
<span class="line"><span>        tag: &#39;div&#39;,</span></span>
<span class="line"><span>        cls: &#39;x-form-clear-left&#39;</span></span>
<span class="line"><span>      }, true);</span></span>
<span class="line"><span>      this.setRawValue(this.value);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    _valueSplit: function(v) {</span></span>
<span class="line"><span>      if(Ext.isDate(v)) {</span></span>
<span class="line"><span>        v = Ext.Date.format(v, &#39;H:i:s&#39;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      var split = v.split(&#39;:&#39;);</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        h: split.length &gt; 0 ? split[0] : 0,</span></span>
<span class="line"><span>        m: split.length &gt; 1 ? split[1] : 0,</span></span>
<span class="line"><span>        s: split.length &gt; 2 ? split[2] : 0</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onSpinnerChange: function() {</span></span>
<span class="line"><span>      if(!this.rendered) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      //限制时间范围</span></span>
<span class="line"><span>      var args = arguments; //this, newValue, oldValue, eOpts</span></span>
<span class="line"><span>      args[0].setValue( (args[1]&gt;args[0].maxNum) ? args[0].minNum : args[0].value );</span></span>
<span class="line"><span>      args[0].setValue( (args[1]&lt;args[0].minNum) ? args[0].maxNum : args[0].value );</span></span>
<span class="line"><span>      this.fireEvent(&#39;change&#39;, this, this.getValue(), this.getRawValue());</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 依次调用各输入框函数, call each spinner&#39;s function</span></span>
<span class="line"><span>    callSpinnersFunction: function(funName, args) {</span></span>
<span class="line"><span>      for(var i = 0; i &lt; this.spinners.length; i++) {</span></span>
<span class="line"><span>        if( this.spinners[i][funName] != null &amp;&amp; this.spinners[i][funName] != undefined ){</span></span>
<span class="line"><span>          this.spinners[i][funName](args);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    getRawValue: function() {</span></span>
<span class="line"><span>      if(!this.rendered) {</span></span>
<span class="line"><span>        var date = this.value || new Date();</span></span>
<span class="line"><span>        return this._valueSplit(date);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      else {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>        h: this.hoursSpinner.getValue(),</span></span>
<span class="line"><span>        m: this.minutesSpinner.getValue(),</span></span>
<span class="line"><span>        s: this.secondsSpinner.getValue()</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    setRawValue: function(value) {</span></span>
<span class="line"><span>      var v = this._valueSplit(value);</span></span>
<span class="line"><span>      if(this.hoursSpinner) {</span></span>
<span class="line"><span>        this.hoursSpinner.setValue(v.h);</span></span>
<span class="line"><span>        this.minutesSpinner.setValue(v.m);</span></span>
<span class="line"><span>        this.secondsSpinner.setValue(v.s);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    getValue: function() {</span></span>
<span class="line"><span>      var v = this.getRawValue();</span></span>
<span class="line"><span>      return Ext.String.leftPad(v.h, 2, &#39;0&#39;) + &#39;:&#39; + Ext.String.leftPad(v.m, 2, &#39;0&#39;) + &#39;:&#39;</span></span>
<span class="line"><span>      + Ext.String.leftPad(v.s, 2, &#39;0&#39;);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setValue: function(value) {</span></span>
<span class="line"><span>      this.value = Ext.isDate(value) ? Ext.Date.format(value, &#39;H:i:s&#39;) : value;</span></span>
<span class="line"><span>      if(!this.rendered) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      this.setRawValue(this.value);</span></span>
<span class="line"><span>      this.validate();</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    disable: function() {</span></span>
<span class="line"><span>      this.callParent(arguments);</span></span>
<span class="line"><span>      this.callSpinnersFunction(&#39;disable&#39;, arguments);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    enable: function() {</span></span>
<span class="line"><span>      this.callParent(arguments);</span></span>
<span class="line"><span>      this.callSpinnersFunction(&#39;enable&#39;, arguments);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setReadOnly: function() {</span></span>
<span class="line"><span>      this.callParent(arguments);</span></span>
<span class="line"><span>      this.callSpinnersFunction(&#39;setReadOnly&#39;, arguments);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    clearInvalid: function() {</span></span>
<span class="line"><span>      this.callParent(arguments);</span></span>
<span class="line"><span>      this.callSpinnersFunction(&#39;clearInvalid&#39;, arguments);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    isValid: function(preventMark) {</span></span>
<span class="line"><span>      return this.hoursSpinner.isValid(preventMark) &amp;&amp; this.minutesSpinner.isValid(preventMark)</span></span>
<span class="line"><span>      &amp;&amp; this.secondsSpinner.isValid(preventMark);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    validate: function() {</span></span>
<span class="line"><span>      return this.hoursSpinner.validate() &amp;&amp; this.minutesSpinner.validate() &amp;&amp; this.secondsSpinner.validate();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span></code></pre></div><h4 id="_2-自定义一个-datetimepicker-继承自-ext-picker-date-实际上就是在原有的-datefield-的基础上增加-timepicker-和一个确认按键。" tabindex="-1">2. 自定义一个 DateTimePicker，继承自 Ext.picker.Date，实际上就是在原有的 DateField 的基础上增加 TimePicker 和一个确认按键。 <a class="header-anchor" href="#_2-自定义一个-datetimepicker-继承自-ext-picker-date-实际上就是在原有的-datefield-的基础上增加-timepicker-和一个确认按键。" aria-label="Permalink to &quot;2. 自定义一个 DateTimePicker，继承自 Ext.picker.Date，实际上就是在原有的 DateField 的基础上增加 TimePicker 和一个确认按键。&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  Ext.define(&#39;MyApp.ux.DateTimeField.DateTimePicker&#39;, {</span></span>
<span class="line"><span>    extend: &#39;Ext.picker.Date&#39;,</span></span>
<span class="line"><span>    alias: &#39;widget.datetimepicker&#39;,</span></span>
<span class="line"><span>    requires: [&#39;MyApp.ux.DateTimeField.TimePickerField&#39;,&#39;Ext.dom.Query&#39;],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    todayText: &#39;现在&#39;,</span></span>
<span class="line"><span>    timeLabel: &#39;时间&#39;,</span></span>
<span class="line"><span>    buttonText: &#39;确定&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    initComponent: function() {</span></span>
<span class="line"><span>      this.callParent();</span></span>
<span class="line"><span>      this.value = this.value || new Date();</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onRender: function(container, position) {</span></span>
<span class="line"><span>      this.callParent(arguments);</span></span>
<span class="line"><span>      var me = this;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //确认按键</span></span>
<span class="line"><span>      var btnCfg = Ext.apply({}, {}, {</span></span>
<span class="line"><span>        style: &#39;center&#39;,</span></span>
<span class="line"><span>        listeners: {</span></span>
<span class="line"><span>          click: {</span></span>
<span class="line"><span>            fn: function(){</span></span>
<span class="line"><span>              this.confirmDate();</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            scope: me</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      me.confirmBtn = Ext.create(&#39;Ext.Button&#39;, Ext.apply({}, btnCfg, {</span></span>
<span class="line"><span>        text: &#39;确认&#39;,</span></span>
<span class="line"><span>      }));</span></span>
<span class="line"><span>      me.confirmBtn.render(this.el.child(&#39;div div.x-datepicker-footer&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if(!this.timefield) {</span></span>
<span class="line"><span>        this.timefield = Ext.create(&#39;MyApp.ux.DateTimeField.TimePickerField&#39;, {</span></span>
<span class="line"><span>          fieldLabel: this.timeLabel,</span></span>
<span class="line"><span>          labelWidth: 40,</span></span>
<span class="line"><span>          value: Ext.Date.format(this.value, &#39;H:i:s&#39;),</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      this.timefield.ownerCt = this;//指定范围</span></span>
<span class="line"><span>      this.timefield.on(&#39;change&#39;, this.timeChange, this);//</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      var table = Ext.get(Ext.DomQuery.selectNode(&#39;table&#39;, this.el.dom));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      var tfEl = Ext.DomHelper.insertAfter(table, {</span></span>
<span class="line"><span>        tag: &#39;div&#39;,</span></span>
<span class="line"><span>        style: &#39;border:0px;&#39;,</span></span>
<span class="line"><span>        children: [{</span></span>
<span class="line"><span>          tag: &#39;div&#39;,</span></span>
<span class="line"><span>          cls: &#39;x-datepicker-footer ux-timefield&#39;</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>      }, true);</span></span>
<span class="line"><span>      this.timefield.render(this.el.child(&#39;div div.ux-timefield&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      var p = this.getEl().parent(&#39;div.x-layer&#39;);</span></span>
<span class="line"><span>      if(p) {</span></span>
<span class="line"><span>        p.setStyle(&quot;height&quot;, p.getHeight() + 31);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // listener 时间域修改, timefield change</span></span>
<span class="line"><span>    timeChange: function(tf, time, rawtime) {</span></span>
<span class="line"><span>      this.value = this.fillDateTime(this.value);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    fillDateTime: function(value) {</span></span>
<span class="line"><span>      if(this.timefield) {</span></span>
<span class="line"><span>        var rawtime = this.timefield.getRawValue();</span></span>
<span class="line"><span>        value.setHours(rawtime.h);</span></span>
<span class="line"><span>        value.setMinutes(rawtime.m);</span></span>
<span class="line"><span>        value.setSeconds(rawtime.s);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return value;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    changeTimeFiledValue: function(value) {</span></span>
<span class="line"><span>      this.timefield.un(&#39;change&#39;, this.timeChange, this);</span></span>
<span class="line"><span>      this.timefield.setValue(this.value);</span></span>
<span class="line"><span>      this.timefield.on(&#39;change&#39;, this.timeChange, this);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    setValue: function(value) {</span></span>
<span class="line"><span>      this.value = value;</span></span>
<span class="line"><span>      this.changeTimeFiledValue(value);</span></span>
<span class="line"><span>      return this.update(this.value);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    getValue: function() {</span></span>
<span class="line"><span>      return this.fillDateTime(this.value);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    handleDateClick: function(e, t) {</span></span>
<span class="line"><span>      var me = this,</span></span>
<span class="line"><span>        handler = me.handler;</span></span>
<span class="line"><span>      e.stopEvent();</span></span>
<span class="line"><span>      if(!me.disabled &amp;&amp; t.dateValue &amp;&amp; !Ext.fly(t.parentNode).hasCls(me.disabledCellCls)) {</span></span>
<span class="line"><span>        me.doCancelFocus = me.focusOnSelect === false;</span></span>
<span class="line"><span>        me.setValue(this.fillDateTime(new Date(t.dateValue)));</span></span>
<span class="line"><span>        delete me.doCancelFocus;</span></span>
<span class="line"><span>        me.fireEvent(&#39;select&#39;, me, me.value);</span></span>
<span class="line"><span>        if(handler) {</span></span>
<span class="line"><span>        handler.call(me.scope || me, me, me.value);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        me.onSelect();</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    //确认按键</span></span>
<span class="line"><span>    confirmDate: function(){</span></span>
<span class="line"><span>        var that = this;</span></span>
<span class="line"><span>          that.fireEvent(&#39;select&#39;, that, that.value);//模拟用户选择</span></span>
<span class="line"><span>          that.onSelect();</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    selectToday: function() {</span></span>
<span class="line"><span>      var me = this,</span></span>
<span class="line"><span>        btn = me.todayBtn,</span></span>
<span class="line"><span>        handler = me.handler;</span></span>
<span class="line"><span>      if(btn &amp;&amp; !btn.disabled) {</span></span>
<span class="line"><span>        me.setValue(new Date());</span></span>
<span class="line"><span>        me.fireEvent(&#39;select&#39;, me, me.value);</span></span>
<span class="line"><span>        if(handler) {</span></span>
<span class="line"><span>        handler.call(me.scope || me, me, me.value);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        me.onSelect();</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return me;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span></code></pre></div><h4 id="_3-将-datetimepicker-装载到-ext-form-field-date-中-初始化日期时间的格式。" tabindex="-1">3. 将 DateTimePicker 装载到 Ext.form.field.Date 中，初始化日期时间的格式。 <a class="header-anchor" href="#_3-将-datetimepicker-装载到-ext-form-field-date-中-初始化日期时间的格式。" aria-label="Permalink to &quot;3. 将 DateTimePicker 装载到 Ext.form.field.Date 中，初始化日期时间的格式。&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  Ext.define(&#39;MyApp.ux.DateTimeField.DateTimeField&#39;, {</span></span>
<span class="line"><span>      extend: &#39;Ext.form.field.Date&#39;,</span></span>
<span class="line"><span>      alias: &#39;widget.datetimefield&#39;,</span></span>
<span class="line"><span>      requires: [&#39;MyApp.ux.DateTimeField.DateTimePicker&#39;],</span></span>
<span class="line"><span>      initComponent: function() {</span></span>
<span class="line"><span>        this.format = this.format;</span></span>
<span class="line"><span>        this.callParent();</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      format: &#39;Y-m-d H:i:s&#39;,</span></span>
<span class="line"><span>      createPicker: function() {</span></span>
<span class="line"><span>        var me = this,</span></span>
<span class="line"><span>            format = Ext.String.format;</span></span>
<span class="line"><span>        return Ext.create(&#39;MyApp.ux.DateTimeField.DateTimePicker&#39;, {</span></span>
<span class="line"><span>            ownerCt: me.ownerCt,</span></span>
<span class="line"><span>  //          renderTo: document.body,</span></span>
<span class="line"><span>            floating: true,</span></span>
<span class="line"><span>  //          hidden: true,</span></span>
<span class="line"><span>            focusOnShow: true,</span></span>
<span class="line"><span>            minDate: me.minValue,</span></span>
<span class="line"><span>            maxDate: me.maxValue,</span></span>
<span class="line"><span>            disabledDatesRE: me.disabledDatesRE,</span></span>
<span class="line"><span>            disabledDatesText: me.disabledDatesText,</span></span>
<span class="line"><span>            disabledDays: me.disabledDays,</span></span>
<span class="line"><span>            disabledDaysText: me.disabledDaysText,</span></span>
<span class="line"><span>            format: me.format,</span></span>
<span class="line"><span>            showToday: me.showToday,</span></span>
<span class="line"><span>            startDay: me.startDay,</span></span>
<span class="line"><span>            minText: format(me.minText, me.formatDate(me.minValue)),</span></span>
<span class="line"><span>            maxText: format(me.maxText, me.formatDate(me.maxValue)),</span></span>
<span class="line"><span>            listeners: {</span></span>
<span class="line"><span>                scope: me,</span></span>
<span class="line"><span>                select: me.onSelect</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            keyNavConfig: {</span></span>
<span class="line"><span>                esc: function() {</span></span>
<span class="line"><span>                  me.collapse();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  });</span></span></code></pre></div><p>将以上代码拷到 ux 当中，调用的时候可以 Ext.create 之，也可以 require 之后直接使用 alias。</p><p>效果嘛，就像下图那样：</p><p><img src="`+l+'" alt="效果图"></p>',17)]))}const f=s(i,[["render",t]]);export{h as __pageData,f as default};
