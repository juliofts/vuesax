(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{139:function(e,a,s){},505:function(e,a,s){"use strict";var l=s(139);s.n(l).a},652:function(e,a,s){"use strict";s.r(a);var l={data:function(){return{value1:"",value2:"",value3:"",value4:"",value5:"",validos:{email:!1,number:!1,url:!1,password:!1,custom:!1}}}},t=(s(505),s(0)),u=Object(t.a)(l,function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"centerx"},[s("vs-input",{attrs:{"vs-valid":e.validos.email,"vs-success-text":"Correo Valido","vs-danger-text":"The email does not meet the requirements","vs-type":"email","vs-label-placeholder":"Email"},on:{"update:vsValid":function(a){e.$set(e.validos,"email",a)}},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),s("vs-input",{attrs:{"vs-valid":e.validos.number,"vs-success-text":"Numero Valido","vs-danger-text":"The minimum is 10 and the maximum 20","vs-max":"20","vs-min":"10","vs-type":"number","vs-label-placeholder":"Number"},on:{"update:vsValid":function(a){e.$set(e.validos,"number",a)}},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),s("vs-input",{attrs:{"vs-valid":e.validos.url,"vs-success-text":"Correo Valido","vs-danger-text":"The email does not meet the requirements","vs-type":"url","vs-label-placeholder":"url"},on:{"update:vsValid":function(a){e.$set(e.validos,"url",a)}},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}}),s("vs-input",{attrs:{"vs-valid":e.validos.password,"vs-success-text":"Password Valida","vs-danger-text":"The password must have at least 8 characters, 1 number, 1 special character","vs-type":"password","vs-label-placeholder":"Password"},on:{"update:vsValid":function(a){e.$set(e.validos,"password",a)}},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}}),s("vs-input",{attrs:{"vs-valid":e.validos.custom,"vs-success-text":"Field is valid","vs-danger-text":"Field must have at least 5 characters","vs-validation-function":function(e){return e.length>5},"vs-type":"custom","vs-label-placeholder":"Custom"},on:{"update:vsValid":function(a){e.$set(e.validos,"custom",a)}},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}}),s("pre",{staticClass:"pre"},[e._v("Valid: "+e._s(e.validos))])],1)},[],!1,null,"32888e4a",null);a.default=u.exports}}]);