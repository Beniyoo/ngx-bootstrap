(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+g3H":function(t,e,n){"use strict";n.r(e),e.default='<pre class="card card-block card-header">{{ myForm.value | json }}</pre>\n<form [formGroup]="myForm" class="form-inline">\n  <div class="form-group">\n    <div class="btn-group" btnRadioGroup formControlName="radio">\n      <label btnRadio="A" class="btn btn-primary"\n             tabindex="0" role="button">A</label>\n      <label btnRadio="B" class="btn btn-primary"\n             tabindex="0" role="button">B</label>\n      <label btnRadio="C" class="btn btn-primary"\n             tabindex="0" role="button">C</label>\n    </div>\n  </div>\n</form>\n'},"+yoE":function(t,e,n){"use strict";n.r(e),e.default="import { Component, OnInit } from '@angular/core';\nimport { FormBuilder, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'demo-buttons-radio-reactiveforms',\n  templateUrl: './radio-reactiveforms.html'\n})\nexport class DemoButtonsRadioReactiveFormsComponent implements OnInit {\n  myForm: FormGroup;\n\n  constructor(private formBuilder: FormBuilder) {}\n\n  ngOnInit() {\n    this.myForm = this.formBuilder.group({\n      radio: 'C'\n    });\n  }\n}\n"},"1BST":function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-primary" [disabled]="disabled">Button</button>\n<button type="button" class="btn btn-warning" (click)="disabled = !disabled">Enable/Disable</button>\n\n'},"6/7U":function(t,e,n){"use strict";n.r(e),e.default='<pre class="card card-block card-header">{{uncheckableRadioModel || \'null\'}}</pre>\n<div class="btn-group" btnRadioGroup [(ngModel)]="uncheckableRadioModel">\n  <label class="btn btn-info" btnRadio="Left"\n         uncheckable tabindex="0" role="button">Left</label>\n  <label class="btn btn-info" btnRadio="Middle"\n         uncheckable tabindex="0" role="button">Middle</label>\n  <label class="btn btn-info" btnRadio="Right"\n         uncheckable tabindex="0" role="button">Right</label>\n</div>\n'},"7DLv":function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-custom-checkbox-value',\n  templateUrl: './custom-checkbox-value.html'\n})\nexport class DemoButtonsCustomCheckboxValueComponent {\n  singleModel = '1';\n}\n"},"7Wf+":function(t,e,n){"use strict";n.r(e),e.default='<pre class="card card-block card-header">{{singleModel}}</pre>\n<button type="button" class="btn btn-primary"\n        [(ngModel)]="singleModel" btnCheckbox\n        btnCheckboxTrue="1" btnCheckboxFalse="0">\n  Single Toggle\n</button>\n'},EKQK:function(t,e,n){"use strict";n.r(e),e.default='<pre class="card card-block card-header">{{myForm.value | json}}</pre>\n<form [formGroup]="myForm">\n  <div class="btn-group">\n    <label class="btn btn-primary" [class.active]="myForm.value.left"\n           btnCheckbox formControlName="left"\n           tabindex="0" role="button">Left</label>\n    <label class="btn btn-primary" [class.active]="myForm.value.middle"\n           btnCheckbox formControlName="middle"\n           tabindex="0" role="button">Middle</label>\n    <label class="btn btn-primary" [class.active]="myForm.value.right"\n           btnCheckbox formControlName="right"\n           tabindex="0" role="button">Right</label>\n  </div>\n</form>\n'},INbB:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-radio',\n  templateUrl: './radio.html'\n})\nexport class DemoButtonsRadioComponent {\n  radioModel = 'Middle';\n}\n"},VL0J:function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-primary">\n  Single Button\n</button>\n'},WEuY:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-disabled',\n  templateUrl: './disabled.html'\n})\nexport class DemoButtonsDisabledComponent {\n  disabled: boolean = false;\n}\n"},YNeZ:function(t,e,n){"use strict";n.r(e),e.default='<pre class="card card-block card-header">{{checkModel | json}}</pre>\n\n<div class="btn-group">\n  <label class="btn btn-primary" [(ngModel)]="checkModel.left"\n         btnCheckbox tabindex="0" role="button">Left</label>\n  <label class="btn btn-primary" [(ngModel)]="checkModel.middle"\n         btnCheckbox tabindex="0" role="button">Middle</label>\n  <label class="btn btn-primary" [(ngModel)]="checkModel.right"\n         btnCheckbox tabindex="0" role="button">Right</label>\n</div>\n'},ed5y:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-radio-uncheckable',\n  templateUrl: './uncheckable-radio.html'\n})\nexport class DemoButtonsUncheckableRadioComponent {\n  uncheckableRadioModel = 'Middle';\n}\n"},jFwS:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-checkbox',\n  templateUrl: './checkbox.html'\n})\nexport class DemoButtonsCheckboxComponent {\n  checkModel: any = { left: false, middle: true, right: false };\n}\n"},lQGh:function(t,e,n){"use strict";n.r(e);var o=n("Valr"),c=n("QJY3"),r=n("DUip"),i=n("TYT/"),a={provide:c.o,useExisting:Object(i.gb)((function(){return l})),multi:!0},l=function(){function t(){this.btnCheckboxTrue=!0,this.btnCheckboxFalse=!1,this.state=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype}return t.prototype.onClick=function(){this.isDisabled||(this.toggle(!this.state),this.onChange(this.value))},t.prototype.ngOnInit=function(){this.toggle(this.trueValue===this.value)},Object.defineProperty(t.prototype,"trueValue",{get:function(){return void 0===this.btnCheckboxTrue||this.btnCheckboxTrue},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"falseValue",{get:function(){return void 0!==this.btnCheckboxFalse&&this.btnCheckboxFalse},enumerable:!0,configurable:!0}),t.prototype.toggle=function(t){this.state=t,this.value=this.state?this.trueValue:this.falseValue},t.prototype.writeValue=function(t){this.state=this.trueValue===t,this.value=t?this.trueValue:this.falseValue},t.prototype.setDisabledState=function(t){this.isDisabled=t},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=Object(i.Vb)({type:t,selectors:[["","btnCheckbox",""]],hostVars:3,hostBindings:function(t,e){1&t&&Object(i.oc)("click",(function(){return e.onClick()})),2&t&&(Object(i.Pb)("aria-pressed",e.state),Object(i.Sb)("active",e.state))},inputs:{btnCheckboxTrue:"btnCheckboxTrue",btnCheckboxFalse:"btnCheckboxFalse"},features:[Object(i.Nb)([a])]}),t}(),s={provide:c.o,useExisting:Object(i.gb)((function(){return b})),multi:!0},b=function(){function t(t,e,n,o){this.el=t,this.cdr=e,this.group=n,this.renderer=o,this.onChange=Function.prototype,this.onTouched=Function.prototype}return Object.defineProperty(t.prototype,"value",{get:function(){return this.group?this.group.value:this._value},set:function(t){this.group?this.group.value=t:this._value=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=t,this.setDisabledState(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isActive",{get:function(){return this.btnRadio===this.value},enumerable:!0,configurable:!0}),t.prototype.onClick=function(){this.el.nativeElement.attributes.disabled||!this.uncheckable&&this.btnRadio===this.value||(this.value=this.uncheckable&&this.btnRadio===this.value?void 0:this.btnRadio,this._onChange(this.value))},t.prototype.ngOnInit=function(){this.uncheckable=void 0!==this.uncheckable},t.prototype.onBlur=function(){this.onTouched()},t.prototype._onChange=function(t){if(this.group)return this.group.onTouched(),void this.group.onChange(t);this.onTouched(),this.onChange(t)},t.prototype.writeValue=function(t){this.value=t,this.cdr.markForCheck()},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.setDisabledState=function(t){t?this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled"):this.renderer.removeAttribute(this.el.nativeElement,"disabled")},t.\u0275fac=function(e){return new(e||t)(Object(i.ac)(i.p),Object(i.ac)(i.i),Object(i.ac)(d,8),Object(i.ac)(i.P))},t.\u0275dir=Object(i.Vb)({type:t,selectors:[["","btnRadio",""]],hostVars:3,hostBindings:function(t,e){1&t&&Object(i.oc)("click",(function(){return e.onClick()})),2&t&&(Object(i.Pb)("aria-pressed",e.isActive),Object(i.Sb)("active",e.isActive))},inputs:{btnRadio:"btnRadio",uncheckable:"uncheckable",value:"value",disabled:"disabled"},features:[Object(i.Nb)([s])]}),t}(),u={provide:c.o,useExisting:Object(i.gb)((function(){return d})),multi:!0},d=function(){function t(t){this.cdr=t,this.onChange=Function.prototype,this.onTouched=Function.prototype}return Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(t){this._value=t},enumerable:!0,configurable:!0}),t.prototype.writeValue=function(t){this._value=t,this.cdr.markForCheck()},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.setDisabledState=function(t){this.radioButtons&&this.radioButtons.forEach((function(e){e.setDisabledState(t)}))},t.\u0275fac=function(e){return new(e||t)(Object(i.ac)(i.i))},t.\u0275dir=Object(i.Vb)({type:t,selectors:[["","btnRadioGroup",""]],contentQueries:function(t,e,n){var o;1&t&&Object(i.Tb)(n,b,!1),2&t&&Object(i.Fc)(o=Object(i.pc)())&&(e.radioButtons=o)},features:[Object(i.Nb)([u])]}),t}(),p=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[]}},t.\u0275mod=Object(i.Yb)({type:t}),t.\u0275inj=Object(i.Xb)({factory:function(e){return new(e||t)}}),t}(),h=n("k3/p"),f=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-buttons-basic"]],decls:2,vars:0,consts:[["type","button",1,"btn","btn-primary"]],template:function(t,e){1&t&&(i.gc(0,"button",0),i.Tc(1," Single Button\n"),i.fc())},encapsulation:2}),t}(),m=function(){function t(){this.checkModel={left:!1,middle:!0,right:!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-buttons-checkbox"]],decls:10,vars:6,consts:[[1,"card","card-block","card-header"],[1,"btn-group"],["btnCheckbox","","tabindex","0","role","button",1,"btn","btn-primary",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(i.gc(0,"pre",0),i.Tc(1),i.rc(2,"json"),i.fc(),i.gc(3,"div",1),i.gc(4,"label",2),i.oc("ngModelChange",(function(t){return e.checkModel.left=t})),i.Tc(5,"Left"),i.fc(),i.gc(6,"label",2),i.oc("ngModelChange",(function(t){return e.checkModel.middle=t})),i.Tc(7,"Middle"),i.fc(),i.gc(8,"label",2),i.oc("ngModelChange",(function(t){return e.checkModel.right=t})),i.Tc(9,"Right"),i.fc(),i.fc()),2&t&&(i.Ob(1),i.Uc(i.sc(2,4,e.checkModel)),i.Ob(3),i.wc("ngModel",e.checkModel.left),i.Ob(2),i.wc("ngModel",e.checkModel.middle),i.Ob(2),i.wc("ngModel",e.checkModel.right))},directives:[l,c.q,c.t],pipes:[o.k],encapsulation:2}),t}(),g=function(){function t(){this.radioModel="Middle"}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-buttons-radio"]],decls:16,vars:5,consts:[[1,"card","card-block","card-header"],[1,"btn-group"],["btnRadio","Left","tabindex","0","role","button",1,"btn","btn-primary",3,"ngModel","ngModelChange"],["btnRadio","Middle","tabindex","0","role","button",1,"btn","btn-primary",3,"ngModel","ngModelChange"],["btnRadio","Right","tabindex","0","role","button",1,"btn","btn-primary",3,"ngModel","ngModelChange"],["btnRadioGroup","",1,"btn-group",3,"ngModel","ngModelChange"],["btnRadio","Left","tabindex","0","role","button",1,"btn","btn-success"],["btnRadio","Middle","tabindex","0","role","button",1,"btn","btn-success"],["btnRadio","Right","tabindex","0","role","button",1,"btn","btn-success"]],template:function(t,e){1&t&&(i.gc(0,"pre",0),i.Tc(1),i.fc(),i.gc(2,"div",1),i.gc(3,"label",2),i.oc("ngModelChange",(function(t){return e.radioModel=t})),i.Tc(4,"Left"),i.fc(),i.gc(5,"label",3),i.oc("ngModelChange",(function(t){return e.radioModel=t})),i.Tc(6,"Middle"),i.fc(),i.gc(7,"label",4),i.oc("ngModelChange",(function(t){return e.radioModel=t})),i.Tc(8,"Right"),i.fc(),i.fc(),i.gc(9,"div",5),i.oc("ngModelChange",(function(t){return e.radioModel=t})),i.gc(10,"label",6),i.Tc(11,"Left"),i.fc(),i.gc(12,"label",7),i.Tc(13,"Middle"),i.fc(),i.gc(14,"label",8),i.Tc(15,"Right"),i.fc(),i.fc()),2&t&&(i.Ob(1),i.Uc(e.radioModel||"null"),i.Ob(2),i.wc("ngModel",e.radioModel),i.Ob(2),i.wc("ngModel",e.radioModel),i.Ob(2),i.wc("ngModel",e.radioModel),i.Ob(2),i.wc("ngModel",e.radioModel))},directives:[b,c.q,c.t,d],encapsulation:2}),t}(),v=function(){function t(){this.uncheckableRadioModel="Middle"}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-buttons-radio-uncheckable"]],decls:9,vars:2,consts:[[1,"card","card-block","card-header"],["btnRadioGroup","",1,"btn-group",3,"ngModel","ngModelChange"],["btnRadio","Left","uncheckable","","tabindex","0","role","button",1,"btn","btn-info"],["btnRadio","Middle","uncheckable","","tabindex","0","role","button",1,"btn","btn-info"],["btnRadio","Right","uncheckable","","tabindex","0","role","button",1,"btn","btn-info"]],template:function(t,e){1&t&&(i.gc(0,"pre",0),i.Tc(1),i.fc(),i.gc(2,"div",1),i.oc("ngModelChange",(function(t){return e.uncheckableRadioModel=t})),i.gc(3,"label",2),i.Tc(4,"Left"),i.fc(),i.gc(5,"label",3),i.Tc(6,"Middle"),i.fc(),i.gc(7,"label",4),i.Tc(8,"Right"),i.fc(),i.fc()),2&t&&(i.Ob(1),i.Uc(e.uncheckableRadioModel||"null"),i.Ob(1),i.wc("ngModel",e.uncheckableRadioModel))},directives:[d,c.q,c.t,b],encapsulation:2}),t}(),k=function(){function t(t){this.formBuilder=t}return t.prototype.ngOnInit=function(){this.myForm=this.formBuilder.group({left:!1,middle:!0,right:!1})},t.\u0275fac=function(e){return new(e||t)(i.ac(c.e))},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-buttons-checkbox-reactiveforms"]],decls:11,vars:10,consts:[[1,"card","card-block","card-header"],[3,"formGroup"],[1,"btn-group"],["btnCheckbox","","formControlName","left","tabindex","0","role","button",1,"btn","btn-primary"],["btnCheckbox","","formControlName","middle","tabindex","0","role","button",1,"btn","btn-primary"],["btnCheckbox","","formControlName","right","tabindex","0","role","button",1,"btn","btn-primary"]],template:function(t,e){1&t&&(i.gc(0,"pre",0),i.Tc(1),i.rc(2,"json"),i.fc(),i.gc(3,"form",1),i.gc(4,"div",2),i.gc(5,"label",3),i.Tc(6,"Left"),i.fc(),i.gc(7,"label",4),i.Tc(8,"Middle"),i.fc(),i.gc(9,"label",5),i.Tc(10,"Right"),i.fc(),i.fc(),i.fc()),2&t&&(i.Ob(1),i.Uc(i.sc(2,8,e.myForm.value)),i.Ob(2),i.wc("formGroup",e.myForm),i.Ob(2),i.Sb("active",e.myForm.value.left),i.Ob(2),i.Sb("active",e.myForm.value.middle),i.Ob(2),i.Sb("active",e.myForm.value.right))},directives:[c.F,c.r,c.j,l,c.q,c.h],pipes:[o.k],encapsulation:2}),t}(),y=function(){function t(t){this.formBuilder=t}return t.prototype.ngOnInit=function(){this.myForm=this.formBuilder.group({radio:"C"})},t.\u0275fac=function(e){return new(e||t)(i.ac(c.e))},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-buttons-radio-reactiveforms"]],decls:12,vars:4,consts:[[1,"card","card-block","card-header"],[1,"form-inline",3,"formGroup"],[1,"form-group"],["btnRadioGroup","","formControlName","radio",1,"btn-group"],["btnRadio","A","tabindex","0","role","button",1,"btn","btn-primary"],["btnRadio","B","tabindex","0","role","button",1,"btn","btn-primary"],["btnRadio","C","tabindex","0","role","button",1,"btn","btn-primary"]],template:function(t,e){1&t&&(i.gc(0,"pre",0),i.Tc(1),i.rc(2,"json"),i.fc(),i.gc(3,"form",1),i.gc(4,"div",2),i.gc(5,"div",3),i.gc(6,"label",4),i.Tc(7,"A"),i.fc(),i.gc(8,"label",5),i.Tc(9,"B"),i.fc(),i.gc(10,"label",6),i.Tc(11,"C"),i.fc(),i.fc(),i.fc(),i.fc()),2&t&&(i.Ob(1),i.Uc(i.sc(2,2,e.myForm.value)),i.Ob(2),i.wc("formGroup",e.myForm))},directives:[c.F,c.r,c.j,d,c.q,c.h,b],pipes:[o.k],encapsulation:2}),t}(),C=function(){function t(){this.disabled=!1}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-buttons-disabled"]],decls:4,vars:1,consts:[["type","button",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-warning",3,"click"]],template:function(t,e){1&t&&(i.gc(0,"button",0),i.Tc(1,"Button"),i.fc(),i.gc(2,"button",1),i.oc("click",(function(){return e.disabled=!e.disabled})),i.Tc(3,"Enable/Disable"),i.fc()),2&t&&i.wc("disabled",e.disabled)},encapsulation:2}),t}(),M=function(){function t(){this.singleModel="1"}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-custom-checkbox-value"]],decls:4,vars:2,consts:[[1,"card","card-block","card-header"],["type","button","btnCheckbox","","btnCheckboxTrue","1","btnCheckboxFalse","0",1,"btn","btn-primary",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(i.gc(0,"pre",0),i.Tc(1),i.fc(),i.gc(2,"button",1),i.oc("ngModelChange",(function(t){return e.singleModel=t})),i.Tc(3," Single Toggle\n"),i.fc()),2&t&&(i.Ob(1),i.Uc(e.singleModel),i.Ob(1),i.wc("ngModel",e.singleModel))},directives:[l,c.q,c.t],encapsulation:2}),t}(),x=n("ClAA"),R=n("y20O"),O=n("nk7K"),T=n("l3GJ"),w=[{name:"Usage",anchor:"usage",outlet:x.a,content:{doc:n("sUJ9")}},{name:"Examples",anchor:"examples",outlet:R.a,content:[{title:"Basic",anchor:"basic",component:n("rQhE"),html:n("VL0J"),outlet:f},{title:"Checkbox",anchor:"checkbox",description:"<p>Checkbox-like buttons set with variable states</p>",component:n("jFwS"),html:n("YNeZ"),outlet:m},{title:"Custom checkbox value",anchor:"custom-checkbox-value",component:n("7DLv"),html:n("7Wf+"),outlet:M},{title:"Checkbox with Reactive Forms",anchor:'checkbox-reactiveforms"',description:"<p>Checkbox buttons with ReactiveForms</p>",component:n("rjbT"),html:n("EKQK"),outlet:k},{title:"Radio",anchor:"radio-button",description:"<p>Radio buttons with checked/unchecked states. Group can be created in two ways: using\n<code>btnRadioGroup</code> directive or using the same <code>ngModel</code> binding with several buttons (works only for\ntemplate driven forms). Check the demo below for more info.</p>",component:n("INbB"),html:n("uya6"),outlet:g},{title:"Uncheckable Radio",anchor:"uncheckable-radio-button",component:n("ed5y"),html:n("6/7U"),outlet:v},{title:"Radio with Reactive Forms",anchor:"radio-reactiveforms",description:"<p>Radio buttons with ReactiveForms. Example below shows how to use radio buttons with reactive\n forms. Please be aware that for reactive forms it's required to use <code>btnRadioGroup</code> directive along with\n <code>btnRadio</code>'s</p>",component:n("+yoE"),html:n("+g3H"),outlet:y},{title:"Disabled Buttons",anchor:"disabled-buttons",component:n("WEuY"),html:n("1BST"),outlet:C}]},{name:"API Reference",anchor:"api-reference",outlet:O.a,content:[{title:"ButtonCheckboxDirective",anchor:"button-checkbox-directive",outlet:T.b},{title:"ButtonRadioDirective",anchor:"button-radio-directive",outlet:T.b},{title:"ButtonRadioGroupDirective",anchor:"button-radio-group-directive",outlet:T.b}]}],F=n("ybC4"),B=n("oxqd"),j=[{path:"",component:function(){function t(){this.name="Buttons",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/buttons",this.componentContent=w}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["buttons-section"]],decls:16,vars:4,consts:[[3,"name","src","componentContent"],[1,"prettyprint","lang-bash","prettyprinted"],[1,"pln"],[1,"pun"],[3,"content"]],template:function(t,e){1&t&&(i.gc(0,"demo-section",0),i.gc(1,"p"),i.Tc(2,"There are two directives that can make a group of buttons behave like a set of checkboxes, radio buttons, or a hybrid where radio buttons can be unchecked."),i.fc(),i.gc(3,"p"),i.Tc(4,"The easiest way to add the buttons component to your app (will be added to the root module)"),i.fc(),i.gc(5,"pre",1),i.gc(6,"span",2),i.Tc(7,"ng add ngx"),i.fc(),i.gc(8,"span",3),i.Tc(9,"-"),i.fc(),i.gc(10,"span",2),i.Tc(11,"bootstrap "),i.fc(),i.Tc(12," --component "),i.gc(13,"span",2),i.Tc(14,"buttons"),i.fc(),i.fc(),i.bc(15,"docs-section",4),i.fc()),2&t&&(i.wc("name",e.name)("src",e.src)("componentContent",e.componentContent),i.Ob(15),i.wc("content",e.componentContent))},directives:[F.a,B.a],encapsulation:2,changeDetection:0}),t}()}];n.d(e,"DemoButtonsModule",(function(){return D}));var D=function(){function t(){}return t.\u0275mod=i.Yb({type:t}),t.\u0275inj=i.Xb({factory:function(e){return new(e||t)},imports:[[c.k,c.A,o.c,h.a,r.i.forChild(j),p.forRoot()]]}),t}()},rQhE:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoButtonsBasicComponent {}\n"},rjbT:function(t,e,n){"use strict";n.r(e),e.default="import { Component, OnInit } from '@angular/core';\nimport { FormBuilder, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'demo-buttons-checkbox-reactiveforms',\n  templateUrl: './checkbox-reactiveforms.html'\n})\nexport class DemoButtonsCheckboxReactiveFormsComponent implements OnInit {\n  myForm: FormGroup;\n\n  constructor(private formBuilder: FormBuilder) {}\n\n  ngOnInit() {\n    this.myForm = this.formBuilder.group({\n      left: false,\n      middle: true,\n      right: false\n    });\n  }\n}\n"},sUJ9:function(t,e,n){"use strict";n.r(e),e.default="// RECOMMENDED\nimport { ButtonsModule } from 'ngx-bootstrap/buttons';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { ButtonsModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [ButtonsModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},uya6:function(t,e,n){"use strict";n.r(e),e.default='<pre class="card card-block card-header">{{radioModel || \'null\'}}</pre>\n<div class="btn-group">\n  <label class="btn btn-primary" [(ngModel)]="radioModel"\n         btnRadio="Left" tabindex="0" role="button">Left</label>\n  <label class="btn btn-primary" [(ngModel)]="radioModel"\n         btnRadio="Middle" tabindex="0" role="button">Middle</label>\n  <label class="btn btn-primary" [(ngModel)]="radioModel"\n         btnRadio="Right" tabindex="0" role="button">Right</label>\n</div>\n<div class="btn-group" btnRadioGroup [(ngModel)]="radioModel">\n  <label class="btn btn-success" btnRadio="Left"\n         tabindex="0" role="button">Left</label>\n  <label class="btn btn-success" btnRadio="Middle"\n         tabindex="0" role="button">Middle</label>\n  <label class="btn btn-success" btnRadio="Right"\n         tabindex="0" role="button">Right</label>\n</div>\n'}}]);