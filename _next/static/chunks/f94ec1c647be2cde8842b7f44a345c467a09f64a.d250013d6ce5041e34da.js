(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"+0iv":function(e,t,r){"use strict";var n=r("qDJ8");function o(e){return!0===n(e)&&"[object Object]"===Object.prototype.toString.call(e)}e.exports=function(e){var t,r;return!1!==o(e)&&("function"===typeof(t=e.constructor)&&(!1!==o(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf")))}},"+NLY":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(Object.is(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(var n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}},"/MXg":function(e,t,r){var n=r("ZkmD");e.exports=function(){var e=n();return{get:function(t,r){var n=e(t);return n.hasOwnProperty("value")?n.value:r},set:function(t,r){return e(t).value=r,this},has:function(t){return"value"in e(t)},delete:function(t){return delete e(t).value}}}},"005v":function(e,t){var r=function(e){void 0==e&&(e=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,e.constructor==Array?this.init_by_array(e,e.length):this.init_seed(e)};r.prototype.init_seed=function(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<this.N;this.mti++){e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&e)>>>16)<<16)+1812433253*(65535&e)+this.mti,this.mt[this.mti]>>>=0}},r.prototype.init_by_array=function(e,t){var r,n,o;for(this.init_seed(19650218),r=1,n=0,o=this.N>t?this.N:t;o;o--){var i=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(1664525*((4294901760&i)>>>16)<<16)+1664525*(65535&i))+e[n]+n,this.mt[r]>>>=0,n++,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1),n>=t&&(n=0)}for(o=this.N-1;o;o--){i=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(1566083941*((4294901760&i)>>>16)<<16)+1566083941*(65535&i))-r,this.mt[r]>>>=0,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1)}this.mt[0]=2147483648},r.prototype.random_int=function(){var e,t=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var r;for(this.mti==this.N+1&&this.init_seed(5489),r=0;r<this.N-this.M;r++)e=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+this.M]^e>>>1^t[1&e];for(;r<this.N-1;r++)e=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+(this.M-this.N)]^e>>>1^t[1&e];e=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^e>>>1^t[1&e],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,(e^=e>>>18)>>>0},r.prototype.random_int31=function(){return this.random_int()>>>1},r.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},r.prototype.random=function(){return this.random_int()*(1/4294967296)},r.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},r.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)},e.exports=r},"033R":function(e,t,r){"use strict";var n=r("TBio");e.exports=function(e){var t=["'use strict'","var CACHED={}"],r=[],o=e.funcName+"_cwise_thunk";t.push(["return function ",o,"(",e.shimArgs.join(","),"){"].join(""));for(var i=[],a=[],c=[["array",e.arrayArgs[0],".shape.slice(",Math.max(0,e.arrayBlockIndices[0]),e.arrayBlockIndices[0]<0?","+e.arrayBlockIndices[0]+")":")"].join("")],s=[],l=[],f=0;f<e.arrayArgs.length;++f){var u=e.arrayArgs[f];r.push(["t",u,"=array",u,".dtype,","r",u,"=array",u,".order"].join("")),i.push("t"+u),i.push("r"+u),a.push("t"+u),a.push("r"+u+".join()"),c.push("array"+u+".data"),c.push("array"+u+".stride"),c.push("array"+u+".offset|0"),f>0&&(s.push("array"+e.arrayArgs[0]+".shape.length===array"+u+".shape.length+"+(Math.abs(e.arrayBlockIndices[0])-Math.abs(e.arrayBlockIndices[f]))),l.push("array"+e.arrayArgs[0]+".shape[shapeIndex+"+Math.max(0,e.arrayBlockIndices[0])+"]===array"+u+".shape[shapeIndex+"+Math.max(0,e.arrayBlockIndices[f])+"]"))}for(e.arrayArgs.length>1&&(t.push("if (!("+s.join(" && ")+")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"),t.push("for(var shapeIndex=array"+e.arrayArgs[0]+".shape.length-"+Math.abs(e.arrayBlockIndices[0])+"; shapeIndex--\x3e0;) {"),t.push("if (!("+l.join(" && ")+")) throw new Error('cwise: Arrays do not all have the same shape!')"),t.push("}")),f=0;f<e.scalarArgs.length;++f)c.push("scalar"+e.scalarArgs[f]);return r.push(["type=[",a.join(","),"].join()"].join("")),r.push("proc=CACHED[type]"),t.push("var "+r.join(",")),t.push(["if(!proc){","CACHED[type]=proc=compile([",i.join(","),"])}","return proc(",c.join(","),")}"].join("")),e.debug&&console.log("-----Generated thunk:\n"+t.join("\n")+"\n----------"),new Function("compile",t.join("\n"))(n.bind(void 0,e))}},"0GS4":function(e,t,r){"use strict";var n=r("63NL"),o=r("o/2B");function i(e){return new Function("y","return function(){return y}")(e)}function a(e,t){for(var r=new Array(e),n=0;n<e;++n)r[n]=t;return r}e.exports=function(e,t,r,c){function s(e,t,r){switch(r){case"bool":case"int":case"sampler2D":case"samplerCube":return"gl.uniform1i(locations["+t+"],obj"+e+")";case"float":return"gl.uniform1f(locations["+t+"],obj"+e+")";default:var n=r.indexOf("vec");if(!(0<=n&&n<=1&&r.length===4+n)){if(0===r.indexOf("mat")&&4===r.length){var i;if((i=r.charCodeAt(r.length-1)-48)<2||i>4)throw new o("","Invalid uniform dimension type for matrix "+name+": "+r);return"gl.uniformMatrix"+i+"fv(locations["+t+"],false,obj"+e+")"}throw new o("","Unknown uniform data type for "+name+": "+r)}if((i=r.charCodeAt(r.length-1)-48)<2||i>4)throw new o("","Invalid data type");switch(r.charAt(0)){case"b":case"i":return"gl.uniform"+i+"iv(locations["+t+"],obj"+e+")";case"v":return"gl.uniform"+i+"fv(locations["+t+"],obj"+e+")";default:throw new o("","Unrecognized data type for vector "+name+": "+r)}}}function l(e,t){if("object"!==typeof t)return[[e,t]];var r=[];for(var n in t){var o=t[n],i=e;parseInt(n)+""===n?i+="["+n+"]":i+="."+n,"object"===typeof o?r.push.apply(r,l(i,o)):r.push([i,o])}return r}function f(t){for(var n=["return function updateProperty(obj){"],o=l("",t),i=0;i<o.length;++i){var a=o[i],f=a[0],u=a[1];c[u]&&n.push(s(f,u,r[u].type))}return n.push("return obj}"),new Function("gl","locations",n.join("\n"))(e,c)}function u(n,s,l){if("object"===typeof l){var u=p(l);Object.defineProperty(n,s,{get:i(u),set:f(l),enumerable:!0,configurable:!1})}else c[l]?Object.defineProperty(n,s,{get:(d=l,new Function("gl","wrapper","locations","return function(){return gl.getUniform(wrapper.program,locations["+d+"])}")(e,t,c)),set:f(l),enumerable:!0,configurable:!1}):n[s]=function(e){switch(e){case"bool":return!1;case"int":case"sampler2D":case"samplerCube":case"float":return 0;default:var t=e.indexOf("vec");if(0<=t&&t<=1&&e.length===4+t){if((r=e.charCodeAt(e.length-1)-48)<2||r>4)throw new o("","Invalid data type");return"b"===e.charAt(0)?a(r,!1):a(r,0)}if(0===e.indexOf("mat")&&4===e.length){var r;if((r=e.charCodeAt(e.length-1)-48)<2||r>4)throw new o("","Invalid uniform dimension type for matrix "+name+": "+e);return a(r*r,0)}throw new o("","Unknown uniform data type for "+name+": "+e)}}(r[l].type);var d}function p(e){var t;if(Array.isArray(e)){t=new Array(e.length);for(var r=0;r<e.length;++r)u(t,r,e[r])}else for(var n in t={},e)u(t,n,e[n]);return t}var d=n(r,!0);return{get:i(p(d)),set:f(d),enumerable:!0,configurable:!0}}},"1BqX":function(e,t,r){"use strict";t.uniforms=function(e,t){for(var r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),n=[],o=0;o<r;++o){var a=e.getActiveUniform(t,o);if(a){var c=i(e,a.type);if(a.size>1)for(var s=0;s<a.size;++s)n.push({name:a.name.replace("[0]","["+s+"]"),type:c});else n.push({name:a.name,type:c})}}return n},t.attributes=function(e,t){for(var r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),n=[],o=0;o<r;++o){var a=e.getActiveAttrib(t,o);a&&n.push({name:a.name,type:i(e,a.type)})}return n};var n={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube"},o=null;function i(e,t){if(!o){var r=Object.keys(n);o={};for(var i=0;i<r.length;++i){var a=r[i];o[e[a]]=n[a]}}return o[t]}},"2RPy":function(e,t,r){"use strict";var n=r("+0iv");e.exports=function(e){return n(e)||"function"===typeof e||Array.isArray(e)}},"38ab":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let r=e.__glReactGlobalVisitor=e.__glReactGlobalVisitor||[];var n={add(e){r.push(e)},remove(e){const t=r.indexOf(e);-1!==t&&r.splice(t,1)},get:()=>r};t.default=n}).call(this,r("ntbh"))},"49sm":function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},"4Z/T":function(e,t,r){var n;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function i(e){return c(l(e),arguments)}function a(e,t){return i.apply(null,[e].concat(t||[]))}function c(e,t){var r,n,a,c,s,l,f,u,p,d=1,v=e.length,h="";for(n=0;n<v;n++)if("string"===typeof e[n])h+=e[n];else if("object"===typeof e[n]){if((c=e[n]).keys)for(r=t[d],a=0;a<c.keys.length;a++){if(void 0==r)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',c.keys[a],c.keys[a-1]));r=r[c.keys[a]]}else r=c.param_no?t[c.param_no]:t[d++];if(o.not_type.test(c.type)&&o.not_primitive.test(c.type)&&r instanceof Function&&(r=r()),o.numeric_arg.test(c.type)&&"number"!==typeof r&&isNaN(r))throw new TypeError(i("[sprintf] expecting number but found %T",r));switch(o.number.test(c.type)&&(u=r>=0),c.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,c.width?parseInt(c.width):0);break;case"e":r=c.precision?parseFloat(r).toExponential(c.precision):parseFloat(r).toExponential();break;case"f":r=c.precision?parseFloat(r).toFixed(c.precision):parseFloat(r);break;case"g":r=c.precision?String(Number(r.toPrecision(c.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=c.precision?r.substring(0,c.precision):r;break;case"t":r=String(!!r),r=c.precision?r.substring(0,c.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=c.precision?r.substring(0,c.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=c.precision?r.substring(0,c.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}o.json.test(c.type)?h+=r:(!o.number.test(c.type)||u&&!c.sign?p="":(p=u?"+":"-",r=r.toString().replace(o.sign,"")),l=c.pad_char?"0"===c.pad_char?"0":c.pad_char.charAt(1):" ",f=c.width-(p+r).length,s=c.width&&f>0?l.repeat(f):"",h+=c.align?p+r+s:"0"===l?p+s+r:s+p+r)}return h}var s=Object.create(null);function l(e){if(s[e])return s[e];for(var t,r=e,n=[],i=0;r;){if(null!==(t=o.text.exec(r)))n.push(t[0]);else if(null!==(t=o.modulo.exec(r)))n.push("%");else{if(null===(t=o.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){i|=1;var a=[],c=t[2],l=[];if(null===(l=o.key.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(l[1]);""!==(c=c.substring(l[0].length));)if(null!==(l=o.key_access.exec(c)))a.push(l[1]);else{if(null===(l=o.index_access.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(l[1])}t[2]=a}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}r=r.substring(t[0].length)}return s[e]=n}t.sprintf=i,t.vsprintf=a,"undefined"!==typeof window&&(window.sprintf=i,window.vsprintf=a,void 0===(n=function(){return{sprintf:i,vsprintf:a}}.call(t,r,t,e))||(e.exports=n))}()},"5lXm":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=0,()=>++n);t.default=o},"5rLZ":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=(n=r("17x9"))&&n.__esModule?n:{default:n};function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=e=>{var t,r;return r=t=class extends o.Component{constructor(...e){super(...e),s(this,"context",void 0)}getGLSize(){const{props:{width:e,height:t},context:{glSizable:r}}=this;if(e&&t)return[e,t];const[n,o]=r.getGLSize();return[e||n,t||o]}getChildContext(){return{glSizable:this}}render(){const{onConnectSizeComponentRef:t}=this.props,[r,n]=this.getGLSize();return o.default.createElement(e,c({ref:t},this.props,{width:r,height:n}))}},s(t,"displayName",`connectSize(${e.displayName||e.name||"?"})`),s(t,"propTypes",{width:i.default.number,height:i.default.number}),s(t,"contextTypes",{glSizable:i.default.object.isRequired}),s(t,"childContextTypes",{glSizable:i.default.object.isRequired}),r};t.default=l},"63NL":function(e,t,r){"use strict";e.exports=function(e,t){for(var r={},n=0;n<e.length;++n)for(var o=e[n].name.split("."),i=r,a=0;a<o.length;++a){var c=o[a].split("[");if(c.length>1){c[0]in i||(i[c[0]]=[]),i=i[c[0]];for(var s=1;s<c.length;++s){var l=parseInt(c[s]);s<c.length-1||a<o.length-1?(l in i||(s<c.length-1?i[l]=[]:i[l]={}),i=i[l]):i[l]=t?n:e[n].type}}else a<o.length-1?(c[0]in i||(i[c[0]]={}),i=i[c[0]]):i[c[0]]=t?n:e[n].type}return r}},"6v/u":function(e,t){e.exports=function(e){return atob(e)}},"8e5R":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{onSurfaceMount(e){}onSurfaceUnmount(e){}onSurfaceGLContextChange(e,t){}onSurfaceDrawSkipped(e){}onSurfaceDrawStart(e){}onSurfaceDrawError(e){return!1}onSurfaceDrawEnd(e){}onNodeDrawSkipped(e){}onNodeDrawStart(e){}onNodeSyncDeps(e,t,r){}onNodeDraw(e,t){}onNodeDrawEnd(e){}}},"9fJb":function(e,t,r){var n=r("GTa7");e.exports=n.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"])},"9tIV":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=a(r("JwSf")),i=a(r("M/JY"));function a(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u extends n.Component{constructor(...e){super(...e),f(this,"_node",void 0),f(this,"_onRef",(e=>{this._node=e}))}getNodeRef(){return this._node}render(){const e=this.props,{children:t}=e,r=l(e,["children"]);return n.default.createElement(o.default,s({},r,{ref:this._onRef,shader:i.default,blendFunc:{src:"one",dst:"one minus src alpha"},uniformsOptions:{t:{interpolation:"linear"}},uniforms:{t:t}}))}}var p=u;t.default=p},AAS3:function(e,t,r){var n=r("hYYf");e.exports=function(e,t){var r=n(t),o=[];return o=(o=o.concat(r(e))).concat(r(null))}},AJhG:function(e,t,r){"use strict";r.d(t,"a",(function(){return jc})),r.d(t,"b",(function(){return kc}));var n=r("q1tI"),o=r.n(n);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const a="div",c=n.forwardRef(((e,t)=>{const{as:r=a,...o}=e;return n.createElement(r,i({},o,{ref:t}))}));const s=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{};var l=r("i8i4"),f=r.n(l);const u=n.forwardRef(((e,t)=>{var r,o;const{containerRef:a,style:l,...u}=e,p=null!==(r=null==a?void 0:a.current)&&void 0!==r?r:null===globalThis||void 0===globalThis||null===(o=globalThis.document)||void 0===o?void 0:o.body,[,d]=n.useState({});return s((()=>{d({})}),[]),p?f.a.createPortal(n.createElement(c,i({"data-radix-portal":""},u,{ref:t,style:p===document.body?{position:"absolute",top:0,left:0,zIndex:2147483647,...l}:void 0})),p):null}));var p=Object.prototype.hasOwnProperty;function d(e,t){var r,n;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&d(e[n],t[n]););return-1===n}if(!r||"object"===typeof e){for(r in n=0,e){if(p.call(e,r)&&++n&&!p.call(t,r))return!1;if(!(r in t)||!d(e[r],t[r]))return!1}return Object.keys(t).length===n}}return e!==e&&t!==t}var v=r("+NLY"),h=r.n(v),m=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},g=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),x=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},b=function(){function e(t,r,n,o){m(this,e),this.name=t,this.fn=r,this.args=n,this.modifiers=o}return g(e,[{key:"_test",value:function(e){var t=this.fn;try{w(this.modifiers.slice(),t)(e)}catch(r){t=function(){return!1}}try{return w(this.modifiers.slice(),t)(e)}catch(r){return!1}}},{key:"_check",value:function(e){try{w(this.modifiers.slice(),this.fn)(e)}catch(t){if(w(this.modifiers.slice(),(function(e){return e}))(!1))return}if(!w(this.modifiers.slice(),this.fn)(e))throw null}},{key:"_testAsync",value:function(e){var t=this;return new Promise((function(r,n){_(t.modifiers.slice(),t.fn)(e).then((function(t){t?r(e):n(null)})).catch((function(e){return n(e)}))}))}}]),e}();function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"simple";return"object"===typeof e?e[t]:e}function w(e,t){if(e.length){var r=e.shift(),n=w(e,t);return r.perform(n)}return y(t)}function _(e,t){if(e.length){var r=e.shift(),n=_(e,t);return r.performAsync(n)}return function(e){return Promise.resolve(y(t,"async")(e))}}var S=function e(t,r,n){m(this,e),this.name=t,this.perform=r,this.performAsync=n},E=function(e){function t(e,r,n,o){m(this,t);for(var i=arguments.length,a=Array(i>4?i-4:0),c=4;c<i;c++)a[c-4]=arguments[c];var s=x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.rule=e,s.value=r,s.cause=n,s.target=o,s}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Error),t}(),O=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];m(this,e),this.chain=t,this.nextRuleModifiers=r}return g(e,[{key:"_applyRule",value:function(e,t){var r=this;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r.chain.push(new b(t,e.apply(r,o),o,r.nextRuleModifiers)),r.nextRuleModifiers=[],r}}},{key:"_applyModifier",value:function(e,t){return this.nextRuleModifiers.push(new S(t,e.simple,e.async)),this}},{key:"_clone",value:function(){return new e(this.chain.slice(),this.nextRuleModifiers.slice())}},{key:"test",value:function(e){return this.chain.every((function(t){return t._test(e)}))}},{key:"testAll",value:function(e){var t=[];return this.chain.forEach((function(r){try{r._check(e)}catch(n){t.push(new E(r,e,n))}})),t}},{key:"check",value:function(e){this.chain.forEach((function(t){try{t._check(e)}catch(r){throw new E(t,e,r)}}))}},{key:"testAsync",value:function(e){var t=this;return new Promise((function(r,n){R(e,t.chain.slice(),r,n)}))}}]),e}();function R(e,t,r,n){if(t.length){var o=t.shift();o._testAsync(e).then((function(){R(e,t,r,n)}),(function(t){n(new E(o,e,t))}))}else r(e)}function P(){return T(new O)}var z={};function T(e){return new Proxy(e,{get:function(t,r){if(r in t)return t[r];var n=T(e._clone());return r in I?n._applyModifier(I[r],r):r in z?n._applyRule(z[r],r):r in j?n._applyRule(j[r],r):void 0}})}P.extend=function(e){Object.assign(z,e)},P.clearCustomRules=function(){z={}};var I={not:{simple:function(e){return function(t){return!e(t)}},async:function(e){return function(t){return Promise.resolve(e(t)).then((function(e){return!e})).catch((function(e){return!0}))}}},some:{simple:function(e){return function(t){return C(t).some((function(t){try{return e(t)}catch(r){return!1}}))}},async:function(e){return function(t){return Promise.all(C(t).map((function(t){try{return e(t).catch((function(e){return!1}))}catch(r){return!1}}))).then((function(e){return e.some(Boolean)}))}}},every:{simple:function(e){return function(t){return C(t).every(e)}},async:function(e){return function(t){return Promise.all(C(t).map(e)).then((function(e){return e.every(Boolean)}))}}}};function C(e){return"string"===typeof e?e.split(""):e}var j={equal:function(e){return function(t){return t==e}},exact:function(e){return function(t){return t===e}},number:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){return"number"===typeof t&&(e||isFinite(t))}},integer:function(){return function(e){return(Number.isInteger||A)(e)}},numeric:function(){return function(e){return!isNaN(parseFloat(e))&&isFinite(e)}},string:function(){return k("string")},boolean:function(){return k("boolean")},undefined:function(){return k("undefined")},null:function(){return k("null")},array:function(){return k("array")},object:function(){return k("object")},instanceOf:function(e){return function(t){return t instanceof e}},pattern:function(e){return function(t){return e.test(t)}},lowercase:function(){return function(e){return/^([a-z]+\s*)+$/.test(e)}},uppercase:function(){return function(e){return/^([A-Z]+\s*)+$/.test(e)}},vowel:function(){return function(e){return/^[aeiou]+$/i.test(e)}},consonant:function(){return function(e){return/^(?=[^aeiou])([a-z]+)$/i.test(e)}},first:function(e){return function(t){return t[0]==e}},last:function(e){return function(t){return t[t.length-1]==e}},empty:function(){return function(e){return 0===e.length}},length:function(e,t){return function(r){return r.length>=e&&r.length<=(t||e)}},minLength:function(e){return function(t){return t.length>=e}},maxLength:function(e){return function(t){return t.length<=e}},negative:function(){return function(e){return e<0}},positive:function(){return function(e){return e>=0}},between:function(e,t){return function(r){return r>=e&&r<=t}},range:function(e,t){return function(r){return r>=e&&r<=t}},lessThan:function(e){return function(t){return t<e}},lessThanOrEqual:function(e){return function(t){return t<=e}},greaterThan:function(e){return function(t){return t>e}},greaterThanOrEqual:function(e){return function(t){return t>=e}},even:function(){return function(e){return e%2===0}},odd:function(){return function(e){return e%2!==0}},includes:function(e){return function(t){return~t.indexOf(e)}},schema:function(e){return function(e){return{simple:function(t){var r=[];if(Object.keys(e).forEach((function(n){var o=e[n];try{o.check((t||{})[n])}catch(i){i.target=n,r.push(i)}})),r.length>0)throw r;return!0},async:function(t){var r=[],n=Object.keys(e).map((function(n){return e[n].testAsync((t||{})[n]).catch((function(e){e.target=n,r.push(e)}))}));return Promise.all(n).then((function(e){if(r.length>0)throw r;return!0}))}}}(e)},passesAnyOf:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.some((function(t){return t.test(e)}))}},optional:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(r){return t&&"string"===typeof r&&""===r.trim()||void 0!==r&&null!==r&&e.check(r),!0}}};function k(e){return function(t){return Array.isArray(t)&&"array"===e||null===t&&"null"===e||typeof t===e}}function A(e){return"number"===typeof e&&isFinite(e)&&Math.floor(e)===e}var D=P,{toPrimitive:L}=Symbol,N=Symbol.for("sxs.composers"),{assign:M,create:U,defineProperties:F,getOwnPropertyDescriptors:B}=Object,q=(e,t,r)=>M(F(e,B(r)),{[L]:()=>e[t],toString:()=>e[t]}),G=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),$=(e,t)=>e.reduce(((e,r)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e))),e)),[]),{isArray:H}=Array,{from:V}=Array,{prototype:{toString:W}}=Object,X=/\s*,\s*(?![^()]*\))/,K=/([\d.]+)([^]*)/,Y={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Q={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},Z=/\s+(?![^()]*\))/,J=e=>t=>e(..."string"==typeof t?String(t).split(Z):[t]),ee=JSON.stringify,te={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:J(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:J(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:J(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:J(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:J(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:J(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},{ownKeys:re}=Reflect,ne=class extends Set{toString(){return V(this).join("")}get hasChanged(){const{size:e}=this;return()=>e<this.size}},oe=ne;ne.prototype[L]=ne.prototype.toString;var ie="colors",ae="sizes",ce="space",se={gap:ce,gridGap:ce,columnGap:ce,gridColumnGap:ce,rowGap:ce,gridRowGap:ce,inset:ce,insetBlock:ce,insetBlockEnd:ce,insetBlockStart:ce,insetInline:ce,insetInlineEnd:ce,insetInlineStart:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,marginBlock:ce,marginBlockEnd:ce,marginBlockStart:ce,marginInline:ce,marginInlineEnd:ce,marginInlineStart:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,paddingBlock:ce,paddingBlockEnd:ce,paddingBlockStart:ce,paddingInline:ce,paddingInlineEnd:ce,paddingInlineStart:ce,top:ce,right:ce,bottom:ce,left:ce,scrollMargin:ce,scrollMarginTop:ce,scrollMarginRight:ce,scrollMarginBottom:ce,scrollMarginLeft:ce,scrollMarginX:ce,scrollMarginY:ce,scrollMarginBlock:ce,scrollMarginBlockEnd:ce,scrollMarginBlockStart:ce,scrollMarginInline:ce,scrollMarginInlineEnd:ce,scrollMarginInlineStart:ce,scrollPadding:ce,scrollPaddingTop:ce,scrollPaddingRight:ce,scrollPaddingBottom:ce,scrollPaddingLeft:ce,scrollPaddingX:ce,scrollPaddingY:ce,scrollPaddingBlock:ce,scrollPaddingBlockEnd:ce,scrollPaddingBlockStart:ce,scrollPaddingInline:ce,scrollPaddingInlineEnd:ce,scrollPaddingInlineStart:ce,fontSize:"fontSizes",background:ie,backgroundColor:ie,backgroundImage:ie,border:ie,borderBlock:ie,borderBlockEnd:ie,borderBlockStart:ie,borderBottom:ie,borderBottomColor:ie,borderColor:ie,borderInline:ie,borderInlineEnd:ie,borderInlineStart:ie,borderLeft:ie,borderLeftColor:ie,borderRight:ie,borderRightColor:ie,borderTop:ie,borderTopColor:ie,caretColor:ie,color:ie,columnRuleColor:ie,fill:ie,outline:ie,outlineColor:ie,stroke:ie,textDecorationColor:ie,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:ae,minBlockSize:ae,maxBlockSize:ae,inlineSize:ae,minInlineSize:ae,maxInlineSize:ae,width:ae,minWidth:ae,maxWidth:ae,height:ae,minHeight:ae,maxHeight:ae,flexBasis:ae,gridTemplateColumns:ae,gridTemplateRows:ae,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},le=(e,t)=>{for(var r=JSON.stringify(t),n=r.length,o=9;n;)o=Math.imul(o^r.charCodeAt(--n),9**9);return e+(o^o>>>9).toString(36).slice(-5)},fe=e=>e?"-"+e:"",ue=class{constructor(e,t,r="",n=""){this.value=e,this.token=t,this.scale=r,this.prefix=n}get computedValue(){return"var("+this.variable+")"}get variable(){return"-"+fe(this.prefix)+fe(this.scale)+"-"+this.token}toString(){return this.computedValue}},pe=class extends Array{toString(){return this.join("")}get hasChanged(){const e=String(this);return()=>e!==String(this)}},de=pe;pe.prototype[L]=pe.prototype.toString;var ve=e=>{let t,r,n,o,i,a=!1;const c="append"===e.insertionMethod?"append":"prepend";return e=>{"object"==typeof document&&(t||(t=document.head||document.documentElement),r||(r=document.getElementById("stitches")||M(document.createElement("style"),{id:"stitches",textContent:e})),n||(n=r.firstChild||new Text,a=!n.data),o||(o=r.insertBefore(new Text,n)),r.isConnected||t[c](r),o.data=e,!a&&e&&(clearTimeout(i),i=setTimeout((()=>{n.remove(),a=!0}),250)))}},he=e=>{e="object"==typeof e&&e||{};const t={};t.media=M({initial:"all"},e.media),t.theme="object"==typeof e.theme&&e.theme||{},t.themeMap="object"==typeof e.themeMap&&e.themeMap||se,t.utils="object"==typeof e.utils&&e.utils||{};const r=new Set(e.passthru?[...e.passthru,"as","className"]:["as","className"]),n=t.prefix=e.prefix||"sx";t.insertionMethod=e.insertionMethod||"prepend";const o=("function"==typeof t.insertionMethod?t.insertionMethod:ve)(t),i="03kze",a=(e=>{let t,r,n,o;const i={};return a=>{const c=ee(a);return c in i?i[c]:i[c]=((e,t)=>{const r=new WeakSet,n=(e,o,i,a,c)=>{let s="";e:for(const l in e){const f=64===l.charCodeAt(0);for(const u of f&&H(e[l])?e[l]:[e[l]]){if(t&&(l!==a||u!==c)){const e=t(l,u);if(null!==e){s+="object"==typeof e&&e?n(e,o,i,l,u):null==e?"":e;continue e}}if("object"==typeof u&&u&&u.toString===W){r.has(o)&&(r.delete(o),s+="}");const e=Object(l),t=f?o:o.length?$(o,l.split(X)):l.split(X);s+=n(u,t,f?i.concat(e):i),r.has(e)&&(r.delete(e),s+="}"),r.has(t)&&(r.delete(t),s+="}")}else{for(let e=0;e<i.length;++e)r.has(i[e])||(r.add(i[e]),s+=i[e]+"{");o.length&&!r.has(o)&&(r.add(o),s+=o+"{"),s+=(f?l+" ":G(l)+":")+String(u)+";"}}}return s};return n(e,[],[])})(a,((i,a)=>{const c=i.charCodeAt(0),s=64===c?i:/[A-Z]/.test(l=i)?l:l.replace(/-[^]/g,(e=>e[1].toUpperCase()));var l;const f=64===c?i:G(i);if("function"==typeof e.utils[i]){if(e.utils[i]!=n||a!=o)return n=e.utils[i],o=a,n(e)(o)}else if("function"==typeof te[s]&&(te[s]!=n||a!=o))return n=te[s],o=a,n(o);if(o=a,t!=s&&r!=a&&f in Y){t=s,r=a;const e=((e,t)=>t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,r,n,o)=>r+("stretch"===n?`-moz-available${o};${e}:${r}-webkit-fill-available`:`-moz-fit-content${o};${e}:${r}fit-content`)+o)))(f,String(r));if(e!=a)return{[i]:e}}let u=64===c?(i.slice(1)in e.media?"@media "+e.media[i.slice(1)]:i).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,r,n,o,i)=>{const a=K.test(t),c=.0625*(a?-1:1),[s,l]=a?[n,t]:[t,n];return"("+("="===r[0]?"":">"===r[0]===a?"max-":"min-")+s+":"+("="!==r[0]&&1===r.length?l.replace(K,((e,t,n)=>Number(t)+c*(">"===r?1:-1)+n)):l)+(o?") and ("+(">"===o[0]?"min-":"max-")+s+":"+(1===o.length?i.replace(K,((e,t,r)=>Number(t)+c*(">"===o?-1:1)+r)):i):"")+")"})):36===c?("sx"===e.prefix?"-":"--"+e.prefix)+i.replace(/\$/g,"-"):i;const p="object"==typeof a&&a?a:"number"==typeof a&&a&&s in Q?String(a)+"px":((e,t,r)=>t.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((t,n,o,i,a)=>"$"==i==!!o?t:(n||"--"==i?"calc(":"")+"var("+("$"===i?("sx"===r.prefix?"-":"--"+r.prefix)+"-"+(a.includes("$")?"":e in r.themeMap?r.themeMap[e]+"-":"")+a.replace(/\$/g,"-"):i+a)+")"+(n||"--"==i?"*"+(n||"")+(o||"1")+")":""))))(s,String(a),e);return a!=p||f!=u?{[u]:p}:null}))}})(t),c=new oe,s=new oe,l=new oe,f=new oe,u=new oe([c,s,l,f]);let p="";const d=()=>{const e=V(u).join("");p!==e&&o(p=e)},v=(e,t)=>{t="object"==typeof e&&e||Object(t);const r="root"!==(e="string"==typeof e?e:""),o=(r?".":":root,.")+(e=r&&e||le(n,t)),c=q(U(null),"className",{className:e,selector:o}),l={},f=l[o]={};for(const i in t){c[i]=U(null);for(const e in t[i]){let r=String(t[i][e]);r.includes("$")&&(r=r.replace(/\$([$\w-]+)/g,((e,t)=>t.includes("$")?e:"$"+i+e)));const o=c[i][e]=new ue(r,e,i,"sx"===n?"":n);f[o.variable]=o.value}}const u=e===n+i?"":a(l);return q(c,"className",{get className(){const{hasChanged:t}=s;return s.add(u),t()&&d(),e},selector:o})},h=(e,t="")=>{const r=new oe,n=new oe;for(const c in e)if(e[c]!==Object(e[c])||re(e[c]).length){const t=a({[c]:e[c]});("@import"===c?r:n).add(t)}const o=q(U(null),"name",{name:t}),i=q((()=>{let e=c.hasChanged,t=l.hasChanged;return r.forEach((e=>{c.add(e)})),n.forEach((e=>{l.add(e)})),(e()||t())&&d(),o}),"name",{get name(){return String(i())}});return i},m=e=>{const t=new oe,r=new de,o=new oe,c=new oe([t,r,o]);let{variants:s,compoundVariants:l,defaultVariants:u,...p}=e;u=Object(u);const d=le(n,e),v="."+d,h=d===n+i?"":a({[v]:p});f.add(c);const m=U(null),g=[],x=[];for(const n in s)for(const e in s[n]){const t=s[n][e];x.push({[n]:e,css:t})}x.push(...l||[]);for(const n in x){const{css:e,...t}=x[n],o=re(t),i=o.length;for(const r of o)m[r]=m[r]||U(null),m[r][t[r]]=!0;const c=(n,c)=>{n={...n};for(const e in c)void 0!==n[e]||Object(m[e])[n[e]]||(n[e]=c[e]);const s=new Set;if(o.length&&o.every((e=>{const r=n[e],o=String(t[e]);if(o===String(r))return!0;if(r===Object(r))for(const t in r)if(o==String(r[t])&&64===t.charCodeAt(0))return s.add(t),!0}))){let n=Object(e);for(const e of s)n={[e]:n};const c=d+le("",n)+"--"+(1===i?o[0]+"-"+t[o[0]]:"c"+i),l=a({["."+c]:n});return(r[i-1]||(r[i-1]=new oe)).add(l),c}};g.push(c)}return{apply(e,n,o){const i=t.hasChanged,a=r.hasChanged;if(t.add(h),e){n.add(d);for(const t of g){const r=t(e,o);r&&n.add(r)}}if(i()||a())return f.add(c),!0},inline(e,t){const r=le("-",e),n=d==="-"+r?"":a({[v+r]:e});t.add(d+r);const{hasChanged:i}=o;return n&&o.add(n),i()},className:d,defaultVariants:u,selector:v,variantProps:m}},g=v("root",t.theme),x=q({css:(...e)=>{let t,n=[],o=U(null);for(const r of e)if(r===Object(r))if(N in r)for(const e of r[N])n.push(e),M(o,e.defaultVariants);else n.push(t=m(r)),M(o,t.defaultVariants);return t||n.push(t=m({})),q((e=>{const{css:i,...a}=Object(e),c=new Set;let s,l=!1;for(const t of n)l=t.apply(a,c,o)||l;i===Object(i)&&(s=t.inline(i,c)),(l||s)&&d();for(const n in t.variantProps)r.has(n)||delete a[n];void 0!==a.className&&String(a.className).split(/\s+/).forEach(c.add,c);const f=V(c);return a.className=f.join(" "),q(U(null),"className",{get[N](){return n},className:a.className,props:a,selector:t.selector})}),"className",{get[N](){return n},get className(){return t.apply()&&d(),t.className},selector:t.selector})},config:t,global:h,keyframes:e=>{const t=le(n,e);return h({["@keyframes "+t]:e},t)},prefix:n,reset:()=>(c.clear(),s.clear(),l.clear(),f.clear(),g.className,x),theme:M(v,g),get cssText(){return p},getCssString:()=>p},"cssText",{});return x},me=Symbol.for("react.element"),ge=Symbol.for("react.forward_ref"),xe=e=>{const t=he(e);return M(t,{styled:(...e)=>{const r=e.map((e=>Object(e).type?e.type:e)).find((e=>e))||"span",n=t.css(...e.filter((e=>N in Object(e)||e&&"object"==typeof e&&!e.$$typeof)));return Object.setPrototypeOf({render(e,t){const{props:{as:o=r,...i},...a}=n(e);return{constructor:void 0,$$typeof:me,props:i,ref:t,type:o,__v:0}},$$typeof:ge,[N]:n[N],[Symbol.toPrimitive]:()=>n.selector,toString:()=>n.selector,get className(){return n.className},get selector(){return n.selector},type:r},Object(r))}})};function be(e,t){return e.map((function(e,r){return e+t[r]}))}function ye(e,t){return e.map((function(e,r){return e-t[r]}))}function we(e){return Math.hypot.apply(Math,e)}function _e(e,t,r){var n=we(t),o=0===n?0:1/n,i=0===r?0:1/r,a=i*n,c=t.map((function(e){return i*e})),s=t.map((function(e){return o*e}));return{velocities:c,velocity:a,distance:we(e),direction:s}}function Se(e){return Math.sign?Math.sign(e):Number(e>0)-Number(e<0)||+e}function Ee(e,t,r){return 0===t||Math.abs(t)===1/0?function(e,t){return Math.pow(e,5*t)}(e,r):e*t*r/(t+r*e)}function Oe(e,t,r,n){return void 0===n&&(n=.15),0===n?function(e,t,r){return Math.max(t,Math.min(e,r))}(e,t,r):e<t?-Ee(t-e,r-t,n)+t:e>r?+Ee(e-r,r-t,n)+r:e}function Re(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ze(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Te(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function Ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function je(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return Ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ce(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function ke(){}function Ae(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?ke:1===t.length?t[0]:function(){for(var e,r,n=je(t);!(r=n()).done;){var o=r.value;e=o.apply(this,arguments)||e}return e}}function De(e,t){if(void 0===e){if(void 0===t)throw new Error("Must define fallback value if undefined is expected");e=t}return Array.isArray(e)?e:[e,e]}function Le(e){if("function"===typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}return e}function Ne(e,t){void 0===e&&(e={});for(var r={},n=0,o=Object.entries(t);n<o.length;n++){var i=o[n],a=i[0],c=i[1];switch(typeof c){case"function":r[a]=c.call(r,e[a],a,e);break;case"object":r[a]=Ne(e[a],c);break;case"boolean":c&&(r[a]=e[a])}}return r}function Me(){return"undefined"!==typeof window&&"ontouchstart"in window}function Ue(e){return"pointerId"in e?null:"touchend"===e.type?e.changedTouches:e.targetTouches}function Fe(e){return Array.from(Ue(e)).map((function(e){return e.identifier}))}function Be(e){return{buttons:"buttons"in e?e.buttons:0,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey}}var qe=function(e){return e};function Ge(e,t){void 0===t&&(t=qe);var r=Ue(e),n=r?r[0]:e;return t([n.clientX,n.clientY])}var $e={threshold:function(e){return void 0===e&&(e=0),De(e)},rubberband:function(e){switch(void 0===e&&(e=0),e){case!0:return De(.15);case!1:return De(0);default:return De(e)}},enabled:function(e){return void 0===e&&(e=!0),e},triggerAllEvents:function(e){return void 0===e&&(e=!1),e},initial:function(e){return void 0===e&&(e=0),"function"===typeof e?e:De(e)},transform:!0},He=Pe({},$e,{axis:!0,lockDirection:function(e){return void 0===e&&(e=!1),e},bounds:function(e){if(void 0===e&&(e={}),"function"===typeof e)return function(t){return He.bounds(e(t))};var t=e,r=t.left,n=void 0===r?-1/0:r,o=t.right,i=void 0===o?1/0:o,a=t.top,c=void 0===a?-1/0:a,s=t.bottom;return[[n,i],[c,void 0===s?1/0:s]]}}),Ve="undefined"!==typeof window&&window.document&&window.document.createElement,We={enabled:function(e){return void 0===e&&(e=!0),e},domTarget:!0,window:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return void 0===e&&(e=Ve?window:void 0),e})),eventOptions:function(e){var t=void 0===e?{}:e,r=t.passive,n=void 0===r||r,o=t.capture;return{passive:n,capture:void 0!==o&&o}},transform:!0},Xe=Pe({},He,{useTouch:function(e){void 0===e&&(e=!1);var t=Me(),r="undefined"!==typeof window&&"onpointerdown"in window;return!(!e||!t)||!(!t||r)},experimental_preventWindowScrollY:function(e){return void 0===e&&(e=!1),e},threshold:function(e,t,r){var n=r.filterTaps,o=void 0!==n&&n,i=r.lockDirection,a=void 0!==i&&i,c=r.axis,s=De(e,o?3:a||(void 0===c?void 0:c)?1:0);return this.filterTaps=o,s},swipeVelocity:function(e){return void 0===e&&(e=.5),De(e)},swipeDistance:function(e){return void 0===e&&(e=50),De(e)},swipeDuration:function(e){return void 0===e&&(e=250),e},delay:function(e){switch(void 0===e&&(e=0),e){case!0:return 180;case!1:return 0;default:return e}}});function Ke(e){return void 0===e&&(e={}),Ne(e,We)}function Ye(e){return void 0===e&&(e={}),Ne(e,Xe)}function Qe(e){var t=e.domTarget,r=e.eventOptions,n=e.window,o=e.enabled,i=Te(e,["domTarget","eventOptions","window","enabled"]),a=Ke({domTarget:t,eventOptions:r,window:n,enabled:o});return a.drag=Ye(i),a}function Ze(e){return Pe({_active:!1,_blocked:!1,_intentional:[!1,!1],_movement:[0,0],_initial:[0,0],_bounds:[[-1/0,1/0],[-1/0,1/0]],_threshold:[0,0],_lastEventType:void 0,_dragStarted:!1,_dragPreventScroll:!1,_dragIsTap:!0,_dragDelayed:!1,event:void 0,intentional:!1,values:[0,0],velocities:[0,0],delta:[0,0],movement:[0,0],offset:[0,0],lastOffset:[0,0],direction:[0,0],initial:[0,0],previous:[0,0],first:!1,last:!1,active:!1,timeStamp:0,startTime:0,elapsedTime:0,cancel:ke,canceled:!1,memo:void 0,args:void 0},e)}function Je(){return{shared:{hovering:!1,scrolling:!1,wheeling:!1,dragging:!1,moving:!1,pinching:!1,touches:0,buttons:0,down:!1,shiftKey:!1,altKey:!1,metaKey:!1,ctrlKey:!1,locked:!1},drag:Ze({_pointerId:void 0,axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0,tap:!1,swipe:[0,0]}),pinch:Ze({_pointerIds:[],da:[0,0],vdva:[0,0],origin:void 0,turns:0}),wheel:Ze({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),move:Ze({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),scroll:Ze({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0})}}var et=new Map,tt=function(e){return e},rt=function(){function e(e,t){var r=this;void 0===t&&(t=[]),this.controller=e,this.args=t,this.debounced=!0,this.setTimeout=function(e,t){var n;void 0===t&&(t=140),clearTimeout(r.controller.timeouts[r.stateKey]);for(var o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];r.controller.timeouts[r.stateKey]=(n=window).setTimeout.apply(n,[e,t].concat(i))},this.clearTimeout=function(){clearTimeout(r.controller.timeouts[r.stateKey])},this.fireGestureHandler=function(e){if(void 0===e&&(e=!1),r.state._blocked)return r.debounced||(r.state._active=!1,r.clean()),null;if(!e&&!r.state.intentional&&!r.config.triggerAllEvents)return null;if(r.state.intentional){var t=r.state.active,n=r.state._active;r.state.active=n,r.state.first=n&&!t,r.state.last=t&&!n,r.controller.state.shared[r.ingKey]=n}var o=r.controller.pointerIds.size||r.controller.touchIds.size,i=r.controller.state.shared.buttons>0||o>0,a=Pe({},r.controller.state.shared,r.state,r.mapStateValues(r.state),{locked:!!document.pointerLockElement,touches:o,down:i}),c=r.handler(a);return r.state.memo=void 0!==c?c:r.state.memo,a},this.controller=e,this.args=t}var t,r,n,o=e.prototype;return o.updateSharedState=function(e){Object.assign(this.controller.state.shared,e)},o.updateGestureState=function(e){Object.assign(this.state,e)},o.checkIntentionality=function(e,t){return{_intentional:e,_blocked:!1}},o.getMovement=function(e){var t=this.config.rubberband,r=this.state,n=r._bounds,o=r._initial,i=r._active,a=r._intentional,c=r.lastOffset,s=r.movement,l=r._threshold,f=this.getInternalMovement(e,this.state),u=!1===a[0]?nt(f[0],l[0]):a[0],p=!1===a[1]?nt(f[1],l[1]):a[1],d=this.checkIntentionality([u,p],f);if(d._blocked)return Pe({},d,{_movement:f,delta:[0,0]});var v=d._intentional,h=f,m=[!1!==v[0]?f[0]-v[0]:0,!1!==v[1]?f[1]-v[1]:0],g=be(m,c),x=i?t:[0,0];return m=ot(n,be(m,o),x),Pe({},d,{intentional:!1!==v[0]||!1!==v[1],_initial:o,_movement:h,movement:m,values:e,offset:ot(n,g,x),delta:ye(m,s)})},o.clean=function(){this.clearTimeout()},t=e,(r=[{key:"config",get:function(){return this.controller.config[this.stateKey]}},{key:"enabled",get:function(){return this.controller.config.enabled&&this.config.enabled}},{key:"state",get:function(){return this.controller.state[this.stateKey]}},{key:"handler",get:function(){return this.controller.handlers[this.stateKey]}},{key:"transform",get:function(){return this.config.transform||this.controller.config.transform||tt}}])&&Re(t.prototype,r),n&&Re(t,n),e}();function nt(e,t){return Math.abs(e)>=t&&Se(e)*t}function ot(e,t,r){var n=t[0],o=t[1],i=r[0],a=r[1],c=e[0],s=c[0],l=c[1],f=e[1],u=f[0],p=f[1];return[Oe(n,s,l,i),Oe(o,u,p,a)]}function it(e,t,r){var n=e.state,o=t.timeStamp,i=t.type,a=n.values;return{_lastEventType:i,event:t,timeStamp:o,elapsedTime:r?0:o-n.startTime,previous:a}}function at(e,t,r,n){var o=e.state,i=e.config,a=e.stateKey,c=e.args,s=e.transform,l=o.offset,f=r.timeStamp,u=i.initial,p=i.bounds,d=ye(s(i.threshold),s([0,0])).map(Math.abs),v=Pe({},Je()[a],{_active:!0,args:c,values:t,initial:null!=n?n:t,_threshold:d,offset:l,lastOffset:l,startTime:f});return Pe({},v,{_initial:Le(u,v),_bounds:Le(p,v)})}var ct=function(e){var t=this;this.classes=e,this.pointerIds=new Set,this.touchIds=new Set,this.supportsTouchEvents=Me(),this.supportsGestureEvents=function(){try{return"constructor"in GestureEvent}catch(e){return!1}}(),this.bind=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];for(var o,i={},a=je(t.classes);!(o=a()).done;){var c=o.value;new c(t,r).addBindings(i)}var s=function(e){mt(i,e,(function(n){return t.nativeRefs[e](Pe({},t.state.shared,{event:n,args:r}))}))};for(var l in t.nativeRefs)s(l);return t.config.domTarget?pt(t,i):dt(t,i)},this.effect=function(){return t.config.domTarget&&t.bind(),t.clean},this.clean=function(){var e=ht(t.config),r=t.config.eventOptions;e&&xt(e,vt(t.domListeners),r),Object.values(t.timeouts).forEach(clearTimeout),function(e){var t=e.config,r=t.window,n=t.eventOptions,o=e.windowListeners;if(!r)return;for(var i in o){xt(r,o[i],n)}e.windowListeners={}}(t)},this.classes=e,this.state=Je(),this.timeouts={},this.domListeners=[],this.windowListeners={}};function st(e,t){"pointerId"in t?e.pointerIds.add(t.pointerId):e.touchIds=new Set(Fe(t))}function lt(e,t){"pointerId"in t?e.pointerIds.delete(t.pointerId):Fe(t).forEach((function(t){return e.touchIds.delete(t)}))}function ft(e,t,r){var n=e.config,o=e.windowListeners;void 0===r&&(r=n.eventOptions),n.window&&(xt(n.window,o[t],r),delete o[t])}function ut(e,t,r,n){var o=e.config,i=e.windowListeners;void 0===r&&(r=[]),void 0===n&&(n=o.eventOptions),o.window&&(xt(o.window,i[t],n),gt(o.window,i[t]=r,n))}function pt(e,t){var r=e.config,n=e.domListeners,o=ht(r);if(!o)throw new Error("domTarget must be defined");var i=r.eventOptions;xt(o,vt(n),i);for(var a=0,c=Object.entries(t);a<c.length;a++){var s=c[a],l=s[0],f=s[1],u=l.slice(2).toLowerCase();n.push([u,Ae.apply(void 0,f)])}gt(o,n,i)}function dt(e,t){for(var r={},n=e.config.eventOptions.capture?"Capture":"",o=0,i=Object.entries(t);o<i.length;o++){var a=i[o],c=a[0],s=a[1],l=Array.isArray(s)?s:[s];r[c+n]=Ae.apply(void 0,l)}return r}function vt(e){return void 0===e&&(e=[]),e.splice(0,e.length)}function ht(e){var t=e.domTarget;return t&&"current"in t?t.current:t}function mt(e,t,r){e[t]||(e[t]=[]),e[t].push(r)}function gt(e,t,r){void 0===t&&(t=[]),void 0===r&&(r={});for(var n,o=je(t);!(n=o()).done;){var i=n.value,a=i[0],c=i[1];e.addEventListener(a,c,r)}}function xt(e,t,r){void 0===t&&(t=[]),void 0===r&&(r={});for(var n,o=je(t);!(n=o()).done;){var i=n.value,a=i[0],c=i[1];e.removeEventListener(a,c,r)}}function bt(e,t,r){void 0===r&&(r={});var n=function(e){var t=new Set;e.drag&&t.add(et.get("drag"));e.wheel&&t.add(et.get("wheel"));e.scroll&&t.add(et.get("scroll"));e.move&&t.add(et.get("move"));e.pinch&&t.add(et.get("pinch"));e.hover&&t.add(et.get("hover"));return t}(e),i=o.a.useMemo((function(){return new ct(n)}),[]);return i.config=t,i.handlers=e,i.nativeRefs=r,o.a.useEffect(i.effect,[]),i.config.domTarget?yt:i.bind}function yt(){0}var wt=function(e){function t(){return e.apply(this,arguments)||this}ze(t,e);var r=t.prototype;return r.getInternalMovement=function(e,t){return ye(e,t.initial)},r.checkIntentionality=function(e,t){if(!1===e[0]&&!1===e[1])return{_intentional:e,axis:this.state.axis};var r=t.map(Math.abs),n=r[0],o=r[1],i=this.state.axis||(n>o?"x":n<o?"y":void 0);return this.config.axis||this.config.lockDirection?i?this.config.axis&&i!==this.config.axis?{_intentional:e,_blocked:!0,axis:i}:(e["x"===i?1:0]=!1,{_intentional:e,_blocked:!1,axis:i}):{_intentional:[!1,!1],_blocked:!1,axis:i}:{_intentional:e,_blocked:!1,axis:i}},r.getKinematics=function(e,t){var r=this.getMovement(e);if(!r._blocked){var n=t.timeStamp-this.state.timeStamp;Object.assign(r,_e(r.movement,r.delta,n))}return r},r.mapStateValues=function(e){return{xy:e.values,vxvy:e.velocities}},t}(rt);function _t(e){"persist"in e&&"function"===typeof e.persist&&e.persist()}var St=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).ingKey="dragging",t.stateKey="drag",t.setPointerCapture=function(e){if(!t.config.useTouch&&!document.pointerLockElement){var r=e.target,n=e.pointerId;r&&"setPointerCapture"in r&&r.setPointerCapture(n),t.updateGestureState({_dragTarget:r,_dragPointerId:n})}},t.releasePointerCapture=function(){if(!t.config.useTouch&&!document.pointerLockElement){var e=t.state,r=e._dragTarget,n=e._dragPointerId;if(n&&r&&"releasePointerCapture"in r&&(!("hasPointerCapture"in r)||r.hasPointerCapture(n)))try{r.releasePointerCapture(n)}catch(o){}}},t.preventScroll=function(e){t.state._dragPreventScroll&&e.cancelable&&e.preventDefault()},t.getEventId=function(e){return t.config.useTouch?e.changedTouches[0].identifier:e.pointerId},t.isValidEvent=function(e){return t.state._pointerId===t.getEventId(e)},t.shouldPreventWindowScrollY=t.config.experimental_preventWindowScrollY&&t.controller.supportsTouchEvents,t.setUpWindowScrollDetection=function(e){_t(e),ut(t.controller,t.stateKey,[["touchmove",t.preventScroll],["touchend",t.clean.bind(Ie(t))],["touchcancel",t.clean.bind(Ie(t))]],{passive:!1}),t.setTimeout(t.startDrag.bind(Ie(t)),250,e)},t.setUpDelayedDragTrigger=function(e){t.state._dragDelayed=!0,_t(e),t.setTimeout(t.startDrag.bind(Ie(t)),t.config.delay,e)},t.setStartState=function(e){var r=Ge(e,t.transform);t.updateSharedState(Be(e)),t.updateGestureState(Pe({},at(Ie(t),r,e),it(Ie(t),e,!0),{_pointerId:t.getEventId(e)})),t.updateGestureState(t.getMovement(r))},t.onDragStart=function(e){st(t.controller,e),t.enabled&&!t.state._active&&(t.setStartState(e),t.setPointerCapture(e),t.shouldPreventWindowScrollY?t.setUpWindowScrollDetection(e):t.config.delay>0?t.setUpDelayedDragTrigger(e):t.startDrag(e,!0))},t.onDragChange=function(e){if(!t.state.canceled&&t.state._active&&t.isValidEvent(e)&&(t.state._lastEventType!==e.type||e.timeStamp!==t.state.timeStamp)){var r;if(document.pointerLockElement){var n=e.movementX,o=e.movementY;r=be(t.transform([n,o]),t.state.values)}else r=Ge(e,t.transform);var i=t.getKinematics(r,e);if(!t.state._dragStarted){if(t.state._dragDelayed)return void t.startDrag(e);if(!t.shouldPreventWindowScrollY)return;if(t.state._dragPreventScroll||!i.axis)return;if("x"!==i.axis)return void(t.state._active=!1);t.startDrag(e)}var a=Be(e);t.updateSharedState(a);var c=it(Ie(t),e),s=we(i._movement),l=t.state._dragIsTap;l&&s>=3&&(l=!1),t.updateGestureState(Pe({},c,i,{_dragIsTap:l})),t.fireGestureHandler()}},t.onDragEnd=function(e){if(lt(t.controller,e),t.isValidEvent(e)&&(t.clean(),t.state._active)){t.state._active=!1;var r=t.state._dragIsTap,n=t.state.velocities,o=n[0],i=n[1],a=t.state.movement,c=a[0],s=a[1],l=t.state._intentional,f=l[0],u=l[1],p=t.config.swipeVelocity,d=p[0],v=p[1],h=t.config.swipeDistance,m=h[0],g=h[1],x=t.config.swipeDuration,b=Pe({},it(Ie(t),e),t.getMovement(t.state.values)),y=[0,0];b.elapsedTime<x&&(!1!==f&&Math.abs(o)>d&&Math.abs(c)>m&&(y[0]=Se(o)),!1!==u&&Math.abs(i)>v&&Math.abs(s)>g&&(y[1]=Se(i))),t.updateSharedState({buttons:0}),t.updateGestureState(Pe({},b,{tap:r,swipe:y})),t.fireGestureHandler(t.config.filterTaps&&!0===r)}},t.clean=function(){e.prototype.clean.call(Ie(t)),t.state._dragStarted=!1,t.releasePointerCapture(),ft(t.controller,t.stateKey)},t.onCancel=function(){t.state.canceled||(t.updateGestureState({canceled:!0,_active:!1}),t.updateSharedState({buttons:0}),setTimeout((function(){return t.fireGestureHandler()}),0))},t.onClick=function(e){t.state._dragIsTap||e.stopPropagation()},t}ze(t,e);var r=t.prototype;return r.startDrag=function(e,t){void 0===t&&(t=!1),this.state._active&&!this.state._dragStarted&&(t||this.setStartState(e),this.updateGestureState({_dragStarted:!0,_dragPreventScroll:!0,cancel:this.onCancel}),this.clearTimeout(),this.fireGestureHandler())},r.addBindings=function(e){(this.config.useTouch?(mt(e,"onTouchStart",this.onDragStart),mt(e,"onTouchMove",this.onDragChange),mt(e,"onTouchEnd",this.onDragEnd),mt(e,"onTouchCancel",this.onDragEnd)):(mt(e,"onPointerDown",this.onDragStart),mt(e,"onPointerMove",this.onDragChange),mt(e,"onPointerUp",this.onDragEnd),mt(e,"onPointerCancel",this.onDragEnd)),this.config.filterTaps)&&mt(e,this.controller.config.eventOptions.capture?"onClick":"onClickCapture",this.onClick)},t}(wt);function Et(e,t){var r,n,o=[],i=!1;return function(){for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return i&&r===this&&t(c,o)||(n=e.apply(this,c),i=!0,r=this,o=c),n}}function Ot(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var r,n,o,i;if(Array.isArray(e)){if((r=e.length)!==t.length)return!1;for(n=r;0!==n--;)if(!Ot(e[n],t[n]))return!1;return!0}if("function"===typeof Map&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!Ot(n.value[1],t.get(n.value[0])))return!1;return!0}if("function"===typeof Set&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((r=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=r;0!==n--;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if("undefined"!==typeof Element&&e instanceof Element)return!1;for(n=r;0!==n--;)if(("_owner"!==o[n]||!e.$$typeof)&&!Ot(e[o[n]],t[o[n]]))return!1;return!0}return e!==e&&t!==t}function Rt(e,t){try{return Ot(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}function Pt(e,t){void 0===t&&(t={}),et.set("drag",St);var r=Object(n.useRef)();return r.current||(r.current=Et(Qe,Rt)),bt({drag:e},r.current(t))}const zt={prefix:Math.round(1e10*Math.random()),current:0},Tt=n.createContext(zt);const It="div",Ct=n.forwardRef(((e,t)=>{const{as:r=It,...o}=e;return n.createElement(r,i({},o,{ref:t}))}));const jt="span",kt=n.forwardRef(((e,t)=>{const{as:r=jt,...o}=e;return n.createElement(Ct,i({},o,{as:r,ref:t,style:{...e.style,position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}}))}));function At(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}function Dt(...e){return n.useCallback(At(...e),e)}function Lt(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}const Nt=n.forwardRef(((e,t)=>{const{children:r,...o}=e;return 1===n.Children.count(r)?n.createElement(Mt,i({},o,{ref:t}),r):n.createElement(n.Fragment,null,n.Children.map(r,(e=>n.isValidElement(e)&&e.type===Ut?n.createElement(Mt,i({},o,{ref:t}),e.props.children):e)))}));Nt.displayName="Slot";const Mt=n.forwardRef(((e,t)=>{const{children:r,...o}=e,i=n.Children.only(r);return n.isValidElement(i)?n.cloneElement(i,{...Ft(o,i.props),ref:At(t,i.ref)}):null}));Mt.displayName="SlotClone";const Ut=({children:e})=>e;function Ft(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)&&(r[n]=Lt(i,o))}return{...e,...r}}const Bt=n.forwardRef(((e,t)=>{var r,o;const{containerRef:a,style:c,...l}=e,u=null!==(r=null==a?void 0:a.current)&&void 0!==r?r:null===globalThis||void 0===globalThis||null===(o=globalThis.document)||void 0===o?void 0:o.body,[,p]=n.useState({});return s((()=>{p({})}),[]),u?f.a.createPortal(n.createElement(Ct,i({"data-radix-portal":""},l,{ref:t,style:u===document.body?{position:"absolute",top:0,left:0,zIndex:2147483647,...c}:void 0})),u):null})),qt=n.forwardRef(((e,t)=>{const{as:r=Gt,...o}=e;return n.createElement(Ct,i({},o,{as:r,ref:t}))})),Gt=n.forwardRef(((e,t)=>{const{width:r=10,height:o=5,...a}=e;return n.createElement("svg",i({},a,{ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),n.createElement("polygon",{points:"0,0 30,0 15,10"}))})),$t=qt;function Ht(e){const[t,r]=n.useState(void 0);return n.useEffect((()=>{if(e.current){const t=e.current,n=new ResizeObserver((e=>{if(!Array.isArray(e))return;if(!e.length)return;const n=e[0];let o,i;if("borderBoxSize"in n){const e=n.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,i=t.blockSize}else{const e=t.getBoundingClientRect();o=e.width,i=e.height}r({width:o,height:i})}));return n.observe(t,{box:"border-box"}),()=>{r(void 0),n.unobserve(t)}}}),[e]),t}let Vt;const Wt=new Map;function Xt(){const e=[];Wt.forEach(((t,r)=>{const n=r.getBoundingClientRect();var o,i;i=n,((o=t.rect).width!==i.width||o.height!==i.height||o.top!==i.top||o.right!==i.right||o.bottom!==i.bottom||o.left!==i.left)&&(t.rect=n,e.push(t))})),e.forEach((e=>{e.callbacks.forEach((t=>t(e.rect)))})),Vt=requestAnimationFrame(Xt)}function Kt(e){const[t,r]=n.useState();return s((()=>{if(e.current){const t=function(e,t){const r=Wt.get(e);return void 0===r?(Wt.set(e,{rect:{},callbacks:[t]}),1===Wt.size&&(Vt=requestAnimationFrame(Xt))):r.callbacks.push(t),()=>{const r=Wt.get(e);if(void 0===r)return;const n=r.callbacks.indexOf(t);n>-1&&r.callbacks.splice(n,1),0===r.callbacks.length&&(Wt.delete(e),0===Wt.size&&cancelAnimationFrame(Vt))}}(e.current,r);return()=>{r(void 0),t()}}}),[e]),t}function Yt(e){const t=n.createContext(null);function r(e){const{children:r,...o}=e,i=n.useMemo((()=>o),Object.values(o));return n.createElement(t.Provider,{value:i},r)}return r.displayName=e+"Provider",[r,function(r){const o=n.useContext(t);if(null===o)throw new Error(`\`${r}\` must be used within \`${e}\``);return o}]}function Qt(e,t,r){const n=e["x"===r?"left":"top"],o="x"===r?"width":"height",i=e[o],a=t[o];return{before:n-a,start:n,center:n+(i-a)/2,end:n+i-a,after:n+i}}function Zt(e){return{position:"absolute",top:0,left:0,minWidth:"max-content",willChange:"transform",transform:`translate3d(${Math.round(e.x+window.scrollX)}px, ${Math.round(e.y+window.scrollY)}px, 0)`}}function Jt(e,t,r,n,o){const i="top"===t||"bottom"===t,a=o?o.width:0,c=o?o.height:0,s=a/2+n;let l="",f="";return i?(l={start:`${s}px`,center:"center",end:e.width-s+"px"}[r],f="top"===t?`${e.height+c}px`:-c+"px"):(l="left"===t?`${e.width+c}px`:-c+"px",f={start:`${s}px`,center:"center",end:e.height-s+"px"}[r]),`${l} ${f}`}const er={position:"fixed",top:0,left:0,opacity:0,transform:"translate3d(0, -200%, 0)"},tr={position:"absolute",opacity:0};function rr({popperSize:e,arrowSize:t,arrowOffset:r,side:n,align:o}){const i=(e.width-t.width)/2,a=(e.height-t.width)/2,c={top:0,right:90,bottom:180,left:-90}[n],s=Math.max(t.width,t.height),l={width:`${s}px`,height:`${s}px`,transform:`rotate(${c}deg)`,willChange:"transform",position:"absolute",[n]:"100%",direction:nr(n,o)};return"top"!==n&&"bottom"!==n||("start"===o&&(l.left=`${r}px`),"center"===o&&(l.left=`${i}px`),"end"===o&&(l.right=`${r}px`)),"left"!==n&&"right"!==n||("start"===o&&(l.top=`${r}px`),"center"===o&&(l.top=`${a}px`),"end"===o&&(l.bottom=`${r}px`)),l}function nr(e,t){return("top"!==e&&"right"!==e||"end"!==t)&&("bottom"!==e&&"left"!==e||"end"===t)?"ltr":"rtl"}function or(e){return{top:"bottom",right:"left",bottom:"top",left:"right"}[e]}function ir(e,t){return{top:e.top<t.top,right:e.right>t.right,bottom:e.bottom>t.bottom,left:e.left<t.left}}const[ar,cr]=Yt("Popper"),sr=n.forwardRef(((e,t)=>{const{anchorRef:r,side:o="bottom",sideOffset:a,align:c="center",alignOffset:s,collisionTolerance:l,avoidCollisions:f=!0,...u}=e,[p,d]=n.useState(),v=Kt(r),h=n.useRef(null),m=Ht(h),g=n.useRef(null),x=Ht(g),b=Dt(t,h),y=function(){const[e,t]=n.useState(void 0);return n.useEffect((()=>{let e;function r(){t({width:window.innerWidth,height:window.innerHeight})}function n(){window.clearTimeout(e),e=window.setTimeout(r,100)}return r(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),e}(),w=y?DOMRect.fromRect({...y,x:0,y:0}):void 0,{popperStyles:_,arrowStyles:S,placedSide:E,placedAlign:O}=function({anchorRect:e,popperSize:t,arrowSize:r,arrowOffset:n=0,side:o,sideOffset:i=0,align:a,alignOffset:c=0,shouldAvoidCollisions:s=!0,collisionBoundariesRect:l,collisionTolerance:f=0}){if(!e||!t||!l)return{popperStyles:er,arrowStyles:tr};const u=function(e,t,r=0,n=0,o){const i=o?o.height:0,a=Qt(t,e,"x"),c=Qt(t,e,"y"),s=c.before-r-i,l=c.after+r+i,f=a.before-r-i,u=a.after+r+i;return{top:{start:{x:a.start+n,y:s},center:{x:a.center,y:s},end:{x:a.end-n,y:s}},right:{start:{x:u,y:c.start+n},center:{x:u,y:c.center},end:{x:u,y:c.end-n}},bottom:{start:{x:a.start+n,y:l},center:{x:a.center,y:l},end:{x:a.end-n,y:l}},left:{start:{x:f,y:c.start+n},center:{x:f,y:c.center},end:{x:f,y:c.end-n}}}}(t,e,i,c,r),p=u[o][a];if(!1===s){const e=Zt(p);let i=tr;return r&&(i=rr({popperSize:t,arrowSize:r,arrowOffset:n,side:o,align:a})),{popperStyles:{...e,"--radix-popper-transform-origin":Jt(t,o,a,n,r)},arrowStyles:i,placedSide:o,placedAlign:a}}const d=DOMRect.fromRect({...t,...p}),v=(h=l,m=f,DOMRect.fromRect({width:h.width-2*m,height:h.height-2*m,x:h.left+m,y:h.top+m}));var h,m;const g=ir(d,v),x=u[or(o)][a],b=function(e,t,r){const n=or(e);return t[e]&&!r[n]?n:e}(o,g,ir(DOMRect.fromRect({...t,...x}),v)),y=function(e,t,r,n,o){const i="top"===r||"bottom"===r,a=i?"left":"top",c=i?"right":"bottom",s=i?"width":"height",l=t[s]>e[s];return"start"!==n&&"center"!==n||!(o[a]&&l||o[c]&&!l)?"end"!==n&&"center"!==n||!(o[c]&&l||o[a]&&!l)?n:"start":"end"}(t,e,o,a,g),w=Zt(u[b][y]);let _=tr;return r&&(_=rr({popperSize:t,arrowSize:r,arrowOffset:n,side:b,align:y})),{popperStyles:{...w,"--radix-popper-transform-origin":Jt(t,b,y,n,r)},arrowStyles:_,placedSide:b,placedAlign:y}}({anchorRect:v,popperSize:m,arrowSize:x,arrowOffset:p,side:o,sideOffset:a,align:c,alignOffset:s,shouldAvoidCollisions:f,collisionBoundariesRect:w,collisionTolerance:l}),R=void 0!==E;return n.createElement("div",{style:_,"data-radix-popper-wrapper":""},n.createElement(ar,{arrowRef:g,arrowStyles:S,onArrowOffsetChange:d},n.createElement(Ct,i({"data-side":E,"data-align":O},u,{style:{...u.style,animation:R?void 0:"none"},ref:b}))))})),lr=n.forwardRef((function(e,t){const{offset:r,...o}=e,a=cr("PopperArrow"),{onArrowOffsetChange:c}=a;return n.useEffect((()=>c(r)),[c,r]),n.createElement("span",{style:{...a.arrowStyles,pointerEvents:"none"}},n.createElement("span",{ref:a.arrowRef,style:{display:"inline-block",verticalAlign:"top",pointerEvents:"auto"}},n.createElement($t,i({},o,{ref:t,style:{...o.style,display:"block"}}))))})),fr=e=>{const{present:t,children:r}=e,o=function(e){const[t,r]=n.useState(),o=n.useRef({}),i=n.useRef(e),a=n.useRef(),c=e?"mounted":"unmounted",[s,l]=function(e,t){return n.useReducer(((e,r)=>{const n=t[e][r];return null!=n?n:e}),e)}(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return n.useEffect((()=>{const t=o.current,r=i.current;if(r!==e){const n=a.current,o=ur(t);if(e)l("MOUNT");else if("none"===o||"none"===(null==t?void 0:t.display))l("UNMOUNT");else{const e=n!==o;l(r&&e?"ANIMATION_OUT":"UNMOUNT")}i.current=e}}),[e,l]),n.useEffect((()=>{if(t){const e=e=>{const r=ur(o.current).includes(e.animationName);e.target===t&&r&&l("ANIMATION_END")},r=e=>{e.target===t&&(a.current=ur(o.current))};return t.addEventListener("animationstart",r),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",r),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}}),[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:n.useCallback((e=>{e&&(o.current=getComputedStyle(e),r(e))}),[])}}(t),i="function"==typeof r?r({present:o.isPresent}):n.Children.only(r),a=Dt(o.ref,i.ref);return"function"==typeof r||o.isPresent?n.cloneElement(i,{ref:a}):null};function ur(e){return(null==e?void 0:e.animationName)||"none"}function pr(e){const t=n.useRef(e);return n.useEffect((()=>{t.current=e}),[e]),t.current}function dr(e){const t=n.useRef(e);return n.useEffect((()=>{t.current=e})),n.useCallback(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}function vr(e){return{type:"machine.actions.assign",assign:e}}let hr,mr;fr.displayName="Presence";const gr=vr(((e,t)=>{var r;return{...e,id:null!==(r=t.id)&&void 0!==r?r:e.id}})),xr=function(e,{debug:t=!1,warnOnUnknownTransitions:r=!1}={}){let n=e.initial,o=e.context;const i=[],a=c=>{var s,l;const f=e.states[n],u=c.type,p=null===(s=e.on)||void 0===s?void 0:s[u],d=null===(l=f.on)||void 0===l?void 0:l[u],v=null!=p?p:d;if(void 0===v)r&&console.warn(`From state: "${n}", event "${u}" has no transition to any state`);else{const{target:r,actions:s=[],cond:l=(()=>!0)}=v,u=r?e.states[r]:{};if(l(o,c)){const e=(f.exit||[]).concat(s,u.entry||[]);o=function(e,t,r){let n=r;return null==e||e.forEach((e=>{"function"==typeof e?e(n,t,a):"machine.actions.assign"===e.type&&(n=e.assign(n,t))})),n}(e,c,o),r&&(n=r,t&&(console.group("event:",c),console.log("state:",n),console.log("context:",o),console.groupEnd()),i.forEach((e=>e({state:n,context:o}))))}}};return{subscribe:function(e){return i.push(e),()=>{i.splice(i.indexOf(e),1)}},send:a,getContext:function(){return o}}}({initial:"closed",context:{id:null,delayed:!1},on:{FOCUS:{target:"open"}},states:{closed:{entry:[vr((e=>({...e,id:null})))],on:{OPEN:{target:"opening"}}},opening:{entry:[(e,t,r)=>{const n=t.delayDuration,o=()=>r({type:"DELAY_TIMER_END"});void 0===n?o():hr=window.setTimeout(o,n)},gr,vr((e=>({...e,delayed:!0})))],exit:[()=>clearTimeout(hr)],on:{DELAY_TIMER_END:{target:"open"},CLOSE:{target:"closed"}}},open:{entry:[gr],exit:[vr((e=>({...e,delayed:!1})))],on:{OPEN:{target:"open"},CLOSE:{target:"closing",cond:(e,t)=>e.id===t.id}}},closing:{entry:[(e,t,r)=>{var n;const o=null!==(n=t.skipDelayDuration)&&void 0!==n?n:300;mr=window.setTimeout((()=>r({type:"SKIP_DELAY_TIMER_END"})),o)}],exit:[()=>clearTimeout(mr)],on:{OPEN:{target:"open"},SKIP_DELAY_TIMER_END:{target:"closed"}}}}}),[br,yr]=Yt("Tooltip"),wr="button",_r=n.forwardRef(((e,t)=>{const{as:r=wr,...o}=e,a=yr("TooltipTrigger"),c=Dt(t,a.triggerRef);return n.createElement(Ct,i({type:"button","aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},o,{as:r,ref:c,onMouseEnter:Lt(e.onMouseEnter,a.onOpen),onMouseLeave:Lt(e.onMouseLeave,a.onClose),onMouseDown:Lt(e.onMouseDown,a.onClose),onFocus:Lt(e.onFocus,a.onFocus),onBlur:Lt(e.onBlur,a.onClose),onKeyDown:Lt(e.onKeyDown,(e=>{"Enter"!==e.key&&" "!==e.key||a.onClose()}))}))})),Sr=n.forwardRef(((e,t)=>{const{forceMount:r,...o}=e,a=yr("TooltipContent");return n.createElement(fr,{present:r||a.open},n.createElement(Er,i({ref:t},o)))})),Er=n.forwardRef(((e,t)=>{const{children:r,"aria-label":o,anchorRef:a,portalled:c=!0,...s}=e,l=yr("TooltipContent"),f=c?Bt:n.Fragment;return function(e){const t=dr(e);n.useEffect((()=>{const e=e=>{"Escape"===e.key&&t(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[t])}((()=>l.onClose())),n.createElement(f,null,n.createElement(Rr,null),n.createElement(sr,i({"data-state":l.stateAttribute},s,{ref:t,anchorRef:a||l.triggerRef,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)"}}),n.createElement(Ut,null,r),n.createElement(kt,{id:l.contentId,role:"tooltip"},o||r)))})),Or=function(e,t){const r=n.forwardRef(((r,o)=>{const a=e,c={...t.defaultProps,...r};return n.createElement(a,i({},c,{ref:o}))}));return r.displayName=t.displayName||"Extended"+e.displayName,r}(lr,{displayName:"TooltipArrow"});function Rr(){const e=yr("CheckTriggerMoved"),t=Kt(e.triggerRef),r=null==t?void 0:t.left,o=pr(r),i=null==t?void 0:t.top,a=pr(i),c=e.onClose;return n.useEffect((()=>{(void 0!==o&&o!==r||void 0!==a&&a!==i)&&c()}),[c,o,a,r,i]),null}const Pr=e=>{const{children:t,open:r,defaultOpen:o=!1,onOpenChange:i,delayDuration:a=700,skipDelayDuration:c=300}=e,l=n.useRef(null),f=function(e){const t=n.useContext(Tt);return Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)||t!==zt||console.warn("When server rendering, you must wrap your application in an <IdProvider> to ensure consistent ids are generated between the client and server."),n.useMemo((()=>e||`radix-id-${t.prefix}-${++t.current}`),[e])}(),[u=!1,p]=function({prop:e,defaultProp:t,onChange:r=(()=>{})}){const[o,i]=function({defaultProp:e,onChange:t}){const r=n.useState(e),[o]=r,i=n.useRef(o),a=dr(t);return n.useEffect((()=>{i.current!==o&&(a(o),i.current=o)}),[o,i,a]),r}({defaultProp:t,onChange:r}),a=void 0!==e,c=a?e:o,s=dr(r);return[c,n.useCallback((t=>{if(a){const r=t,n="function"==typeof t?r(e):t;n!==e&&s(n)}else i(t)}),[a,e,i,s])]}({prop:r,defaultProp:o,onChange:i}),[d,v]=n.useState(r?"instant-open":"closed");n.useEffect((()=>xr.subscribe((({state:e,context:t})=>{"open"===e&&t.id===f?p(!0):p(!1)}))),[f,p]),n.useEffect((()=>xr.subscribe((({state:e,context:t})=>{t.id===f?v("open"===e?t.delayed?"delayed-open":"instant-open":"closed"):v("closed")}))),[f]);const h=n.useCallback((()=>xr.send({type:"FOCUS",id:f})),[f]),m=n.useCallback((()=>xr.send({type:"OPEN",id:f,delayDuration:a})),[f,a]),g=n.useCallback((()=>xr.send({type:"CLOSE",id:f,skipDelayDuration:c})),[c,f]);return n.useEffect((()=>()=>g()),[g]),s((()=>{!0===r&&xr.send({type:"OPEN",id:f})}),[f,r]),n.createElement(br,{triggerRef:l,contentId:f,open:u,stateAttribute:d,onFocus:h,onOpen:m,onClose:g},t)},zr=_r,Tr=Sr,Ir=Or;function Cr(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}let jr;!function(e){e[e.UNSUPPORTED_INPUT=0]="UNSUPPORTED_INPUT",e[e.NO_COMPONENT_FOR_TYPE=1]="NO_COMPONENT_FOR_TYPE",e[e.UNKNOWN_INPUT=2]="UNKNOWN_INPUT",e[e.DUPLICATE_KEYS=3]="DUPLICATE_KEYS",e[e.ALREADY_REGISTERED_TYPE=4]="ALREADY_REGISTERED_TYPE",e[e.CLIPBOARD_ERROR=5]="CLIPBOARD_ERROR",e[e.THEME_ERROR=6]="THEME_ERROR",e[e.PATH_DOESNT_EXIST=7]="PATH_DOESNT_EXIST",e[e.INPUT_TYPE_OVERRIDE=8]="INPUT_TYPE_OVERRIDE",e[e.EMPTY_KEY=9]="EMPTY_KEY"}(jr||(jr={}));const kr={[jr.UNSUPPORTED_INPUT]:(e,t)=>[`An input with type \`${e}\` input was found at path \`${t}\` but it's not supported yet.`],[jr.NO_COMPONENT_FOR_TYPE]:(e,t)=>[`Type \`${e}\` found at path \`${t}\` can't be displayed in panel because no component supports it yet.`],[jr.UNKNOWN_INPUT]:(e,t)=>[`input at path \`${e}\` is not recognized.`,t],[jr.DUPLICATE_KEYS]:(e,t,r)=>[`Key \`${e}\` of path \`${t}\` already exists at path \`${r}\`. Even nested keys need to be unique. Rename one of the keys.`],[jr.ALREADY_REGISTERED_TYPE]:e=>[`Type ${e} has already been registered. You can't register a component with the same type.`],[jr.CLIPBOARD_ERROR]:e=>["Error copying the value",e],[jr.THEME_ERROR]:(e,t)=>[`Error accessing the theme \`${e}.${t}\` value.`],[jr.PATH_DOESNT_EXIST]:e=>[`Error getting the value at path \`${e}\`. There is probably an error in your \`render\` function.`],[jr.PATH_DOESNT_EXIST]:e=>[`Error accessing the value at path \`${e}\``],[jr.INPUT_TYPE_OVERRIDE]:(e,t,r)=>[`Input at path \`${e}\` already exists with type: \`${t}\`. Its type cannot be overridden with type \`${r}\`.`],[jr.EMPTY_KEY]:()=>["Keys can not be empty, if you want to hide a label use whitespace."]};function Ar(e,t,...r){const[n,...o]=kr[t](...r);console[e]("LEVA: "+n,...o)}const Dr=Ar.bind(null,"warn"),Lr=Ar.bind(null,"log"),Nr=[],Mr={};function Ur(e){let{value:t}=e,r=Cr(e,["value"]);for(let n of Nr){const e=n(t,r);if(e)return e}}function Fr(e,t){let{schema:r}=t,n=Cr(t,["schema"]);e in Mr?Dr(jr.ALREADY_REGISTERED_TYPE,e):(Nr.push(((t,n)=>r(t,n)&&e)),Mr[e]=n)}function Br(e,t,r,n){const{normalize:o}=Mr[e];if(o)return o(t,r,n);if("object"!==typeof t||!("value"in t))return{value:t};const{value:i}=t;return{value:i,settings:Cr(t,["value"])}}function qr(e,t,r){const{format:n}=Mr[e];return n?n(t,r):t}function Gr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Hr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$r(Object(r),!0).forEach((function(t){Gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$r(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Vr=(e,t,r)=>e>r?r:e<t?t:e,Wr=e=>{if(""===e||"number"===typeof e)return e;try{const t=on(e);if(!isNaN(t))return t}catch(t){}return parseFloat(e)},Xr=Math.log(10);function Kr(e){let t=Math.abs(+String(e).replace(".",""));if(0===t)return.01;for(;0!==t&&t%10===0;)t/=10;const r=Math.floor(Math.log(t)/Xr)+1,n=Math.floor(Math.log10(Math.abs(e))),o=Math.pow(10,n-r);return Math.max(o,.001)}const Yr=(e,t,r)=>r===t?0:(e-t)/(r-t),Qr=(e,t,r)=>e*(r-t)+t,Zr=/\(([0-9+\-*/^ .]+)\)/,Jr=/(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/,en=/(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/,tn=/(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/,rn=/(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/,nn=/(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;function on(e){if(isNaN(Number(e))){if(Zr.test(e)){const t=e.replace(Zr,((e,t)=>String(on(t))));return on(t)}if(Jr.test(e)){return on(e.replace(Jr,((e,t,r)=>String(Math.pow(Number(t),Number(r))))))}if(en.test(e)){return on(e.replace(en,((e,t,r)=>String(Number(t)*Number(r)))))}if(tn.test(e)){return on(e.replace(tn,((e,t,r)=>{if(0!=r)return String(Number(t)/Number(r));throw new Error("Division by zero")})))}if(rn.test(e)){return on(e.replace(rn,((e,t,r)=>String(Number(t)+Number(r)))))}if(nn.test(e)){return on(e.replace(nn,((e,t,r)=>String(Number(t)-Number(r)))))}return Number(e)}return Number(e)}let an,cn;function sn(e,t,r={},n){if("object"!==typeof e||Array.isArray(e))return{type:n,input:e,options:Hr({key:t,label:t,optional:!1,disabled:!1},r)};if("__customInput"in e){const{type:r,__customInput:n}=e;return sn(n,t,Cr(e,["type","__customInput"]),r)}const{render:o,label:i,optional:a,disabled:c,hint:s,onChange:l,onEditStart:f,onEditEnd:u,transient:p}=e,d=Cr(e,["render","label","optional","disabled","hint","onChange","onEditStart","onEditEnd","transient"]),v=Hr({render:o,key:t,label:null!==i&&void 0!==i?i:t,hint:s,transient:null!==p&&void 0!==p?p:!!l,onEditStart:f,onEditEnd:u},r);let{type:h}=d,m=Cr(d,["type"]);return h=null!==n&&void 0!==n?n:h,h in an?{type:h,input:m,options:v}:{type:h,input:m,options:Hr(Hr({},v),{},{onChange:l,optional:null!==a&&void 0!==a&&a,disabled:null!==c&&void 0!==c&&c})}}function ln(e,t,r,n){const o=sn(e,t),{type:i,input:a,options:c}=o;if(i)return i in an?o:{type:i,input:Br(i,a,r,n),options:c};let s=Ur(a);return s?{type:s,input:Br(s,a,r,n),options:c}:(s=Ur({value:a}),!!s&&{type:s,input:Br(s,{value:a},r,n),options:c})}function fn(e,t,r,n,o){const{value:i,type:a,settings:c}=e;e.value=pn({type:a,value:i,settings:c},t,r,n),e.fromPanel=o}!function(e){e.BUTTON="BUTTON",e.BUTTON_GROUP="BUTTON_GROUP",e.MONITOR="MONITOR",e.FOLDER="FOLDER"}(an||(an={})),function(e){e.SELECT="SELECT",e.IMAGE="IMAGE",e.NUMBER="NUMBER",e.COLOR="COLOR",e.STRING="STRING",e.BOOLEAN="BOOLEAN",e.INTERVAL="INTERVAL",e.VECTOR3D="VECTOR3D",e.VECTOR2D="VECTOR2D"}(cn||(cn={}));const un=function(e,t,r){this.type="LEVA_ERROR",this.message="LEVA: "+e,this.previousValue=t,this.error=r};function pn({type:e,value:t,settings:r},n,o,i){const a="SELECT"!==e&&"function"===typeof n?n(t):n;let c;try{c=function(e,t,r,n,o,i){const{sanitize:a}=Mr[e];return a?a(t,r,n,o,i):t}(e,a,r,t,o,i)}catch(s){throw new un(`The value \`${n}\` did not result in a correct value.`,t,s)}if(d(c,t))throw new un(`The value \`${n}\` did not result in a value update, which remained the same: \`${t}\`.\n        You can ignore this warning if this is the intended behavior.`,t);return c}const dn=(e,t,r=!1)=>{let n=0;return function(){const o=arguments,i=r&&!n,a=()=>e.apply(this,o);window.clearTimeout(n),n=window.setTimeout(a,t),i&&a()}},vn=e=>e.shiftKey?5:e.altKey?.2:1,hn=(e,{min:t=-1/0,max:r=1/0,suffix:n})=>{const o=parseFloat(e);if(""===e||isNaN(o))throw Error("Invalid number");const i=Vr(o,t,r);return n?i+n:i},mn=e=>{let{value:t}=e,r=Cr(e,["value"]);const{min:n=-1/0,max:o=1/0}=r,i=Cr(r,["min","max"]),a=Vr(parseFloat(t),n,o);let c;if(!Number.isFinite(t)){const e=String(t).match(/[A-Z]+/i);e&&(c=e[0])}let s=r.step;s||(Number.isFinite(n)?s=Number.isFinite(o)?+(Math.abs(o-n)/100).toPrecision(1):+(Math.abs(a-n)/100).toPrecision(1):Number.isFinite(o)&&(s=+(Math.abs(o-a)/100).toPrecision(1)));const l=s?10*Kr(s):Kr(a);s=s||l/10;return{value:a,settings:Hr({initialValue:a,step:s,pad:Math.round(Vr(Math.log10(1/l),0,2)),min:n,max:o,suffix:c},i)}},gn=(e,{step:t,initialValue:r})=>r+Math.round((e-r)/t)*t;var xn=Object.freeze({__proto__:null,schema:e=>"number"===typeof e||"string"===typeof e&&!isNaN(parseFloat(e)),sanitize:hn,format:(e,{pad:t=0,suffix:r})=>{const n=parseFloat(e).toFixed(t);return r?n+r:n},normalize:mn,sanitizeStep:gn});function bn(){return(bn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const yn=Object(n.createContext)({});function wn(){return Object(n.useContext)(yn)}const _n=Object(n.createContext)(null),Sn=Object(n.createContext)(null),En=Object(n.createContext)(null);function On(){return Object(n.useContext)(Sn)}function Rn(e,t){const[r,n]=e.split(" "),o={};return"none"!==r&&(o.boxShadow=`${t.inset?"inset ":""}0 0 0 $borderWidths${[t.key]} $colors${"default"!==r&&r||t.borderColor}`),n&&(o.backgroundColor=n||t.backgroundColor),o}const Pn={$inputStyle:()=>e=>Rn(e,{key:"$input",borderColor:"$highlight1",inset:!0}),$focusStyle:()=>e=>Rn(e,{key:"$focus",borderColor:"$accent2"}),$hoverStyle:()=>e=>Rn(e,{key:"$hover",borderColor:"$accent1",inset:!0}),$activeStyle:()=>e=>Rn(e,{key:"$active",borderColor:"$accent1",inset:!0})},{styled:zn,css:Tn,theme:In,global:Cn,keyframes:jn}=xe({insertionMethod(){let e=null,t=null;return r=>{"object"===typeof document&&(e||(e=document.head||document.documentElement),t||(t=document.getElementById("leva__stitches")||Object.assign(document.createElement("style"),{id:"leva__stitches"})),t.parentNode||e.append(t),t.textContent=r)}},prefix:"leva",theme:{colors:{elevation1:"#292d39",elevation2:"#181c20",elevation3:"#373c4b",accent1:"#0066dc",accent2:"#007bff",accent3:"#3c93ff",highlight1:"#535760",highlight2:"#8c92a4",highlight3:"#fefefe",vivid1:"#ffcc00",toolTipBackground:"$highlight3",toolTipText:"$elevation2"},radii:{xs:"2px",sm:"3px",lg:"10px"},space:{xs:"3px",sm:"6px",md:"10px",rowGap:"7px",colGap:"7px"},fonts:{mono:"ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace",sans:"system-ui, sans-serif"},fontSizes:{root:"11px",toolTip:"$root"},sizes:{rootWidth:"280px",controlWidth:"160px",numberInputMinWidth:"38px",scrubberWidth:"8px",scrubberHeight:"16px",rowHeight:"24px",folderTitleHeight:"20px",checkboxSize:"16px",joystickWidth:"100px",joystickHeight:"100px",colorPickerWidth:"$controlWidth",colorPickerHeight:"100px",imagePreviewWidth:"$controlWidth",imagePreviewHeight:"100px",monitorHeight:"60px",titleBarHeight:"39px"},shadows:{level1:"0 0 9px 0 #00000088",level2:"0 4px 14px #00000033"},borderWidths:{root:"0px",input:"1px",focus:"1px",hover:"1px",active:"1px",folder:"1px"},fontWeights:{label:"normal",folder:"normal",button:"normal"}},utils:Hr(Hr({},Pn),{},{$flex:()=>()=>({display:"flex",alignItems:"center"}),$flexCenter:()=>()=>({display:"flex",alignItems:"center",justifyContent:"center"}),$reset:()=>()=>({outline:"none",fontSize:"inherit",fontWeight:"inherit",color:"inherit",fontFamily:"inherit",border:"none",backgroundColor:"transparent",appearance:"none"}),$draggable:()=>()=>({touchAction:"none",WebkitUserDrag:"none",userSelect:"none"}),$focus:()=>e=>({"&:focus":Pn.$focusStyle()(e)}),$focusWithin:()=>e=>({"&:focus-within":Pn.$focusStyle()(e)}),$hover:()=>e=>({"&:hover":Pn.$hoverStyle()(e)}),$active:()=>e=>({"&:active":Pn.$activeStyle()(e)})})});function kn(e,t){const{theme:r}=Object(n.useContext)(_n);return e in r&&t in r[e]?r[e][t]:(Dr(jr.THEME_ERROR,e,t),"")}Cn({".panel__dragged":{WebkitUserDrag:"none",userSelect:"none",input:{userSelect:"none"},"*":{cursor:"ew-resize !important"}}})();const An=zn("input",{$reset:"",padding:"0 $sm",width:0,minWidth:0,flex:1,height:"100%",variants:{levaType:{number:{textAlign:"right"}}}}),Dn=zn("div",{$draggable:"",height:"100%",$flexCenter:"",position:"relative",padding:"0 $xs",fontSize:"0.8em",opacity:.8,cursor:"default",[`& + ${An}`]:{paddingLeft:0}}),Ln=zn(Dn,{cursor:"ew-resize",marginRight:"-$xs",textTransform:"uppercase",opacity:.3,"&:hover":{opacity:1},variants:{dragging:{true:{backgroundColor:"$accent2",opacity:1}}}}),Nn=zn("div",{$flex:"",position:"relative",borderRadius:"$sm",overflow:"hidden",color:"inherit",height:"$rowHeight",backgroundColor:"$elevation3",$inputStyle:"$elevation1",$hover:"",$focusWithin:""});function Mn(e){let{innerLabel:t,value:r,onUpdate:i,onChange:a,onKeyDown:c,type:s,id:l}=e,f=Cr(e,["innerLabel","value","onUpdate","onChange","onKeyDown","type","id"]);const{id:u,emitOnEditStart:p,emitOnEditEnd:d}=wn(),v=l||u,h=Object(n.useRef)(null),m=Object(n.useCallback)((e=>t=>{const r=t.currentTarget.value;e(r)}),[]);o.a.useEffect((()=>{const e=h.current,t=m((e=>{i(e),d()}));return null===e||void 0===e||e.addEventListener("blur",t),()=>null===e||void 0===e?void 0:e.removeEventListener("blur",t)}),[m,i,d]);const g=Object(n.useCallback)((e=>{"Enter"===e.key&&m(i)(e)}),[m,i]);return o.a.createElement(Nn,null,t&&"string"===typeof t?o.a.createElement(Dn,null,t):t,o.a.createElement(An,bn({levaType:s,ref:h,id:v,type:"text",autoComplete:"off",spellCheck:"false",value:r,onChange:m(a),onFocus:()=>p(),onKeyPress:g,onKeyDown:c},f)))}function Un(e){let{onUpdate:t}=e,r=Cr(e,["onUpdate"]);const i=Object(n.useCallback)((e=>t(Wr(e))),[t]),a=Object(n.useCallback)((e=>{const r="ArrowUp"===e.key?1:"ArrowDown"===e.key?-1:0;if(r){e.preventDefault();const n=e.altKey?.1:e.shiftKey?10:1;t((e=>parseFloat(e)+r*n))}}),[t]);return o.a.createElement(Mn,bn({},r,{onUpdate:i,onKeyDown:a,type:"number"}))}const Fn=zn("div",{}),Bn=zn("div",{position:"relative",background:"$elevation2",transition:"height 300ms ease",variants:{fill:{true:{},false:{}},flat:{false:{},true:{}},isRoot:{true:{},false:{paddingLeft:"$md","&::after":{content:'""',position:"absolute",left:0,top:0,width:"$borderWidths$folder",height:"100%",backgroundColor:"$elevation3",transform:"translateX(-50%)"}}}},compoundVariants:[{isRoot:!0,fill:!1,css:{overflowY:"auto",maxHeight:"calc(100vh - 20px - $$titleBarHeight)"}},{isRoot:!0,flat:!1,css:{borderRadius:"$lg"}}]}),qn=zn("div",{$flex:"",color:"$highlight3",userSelect:"none",cursor:"pointer",height:"$folderTitleHeight",fontWeight:"$folder","> svg":{marginLeft:-4,marginRight:4,cursor:"pointer",fill:"$highlight1"},"&:hover > svg":{fill:"$highlight2"},[`&:hover + ${Bn}::after`]:{backgroundColor:"$highlight2"},[`${Fn}:hover > & + ${Bn}::after`]:{backgroundColor:"$highlight1"},[`${Fn}:hover > & > svg`]:{fill:"$highlight1"}}),Gn=zn("div",{position:"relative",display:"grid",gridTemplateColumns:"100%",rowGap:"$rowGap",transition:"opacity 250ms ease",variants:{toggled:{true:{opacity:1,transitionDelay:"250ms"},false:{opacity:0,transitionDelay:"0ms",pointerEvents:"none"}},isRoot:{true:{"& > div":{paddingLeft:"$md",paddingRight:"$md"},"& > div:first-of-type":{paddingTop:"$sm"},"& > div:last-of-type":{paddingBottom:"$sm"},[`> ${Fn}:not(:first-of-type)`]:{paddingTop:"$sm",marginTop:"$md",borderTop:"$borderWidths$folder solid $colors$elevation1"}}}}}),$n=zn("div",{position:"relative",zIndex:100,display:"grid",rowGap:"$rowGap",gridTemplateRows:"minmax($sizes$rowHeight, max-content)",alignItems:"center",color:"$highlight2",[`${Gn} > &`]:{"&:first-of-type":{marginTop:"$rowGap"},"&:last-of-type":{marginBottom:"$rowGap"}},"&:hover,&:focus-within":{color:"$highlight3"}}),Hn=zn($n,{gridTemplateColumns:"auto $sizes$controlWidth",columnGap:"$colGap"}),Vn=zn("div",{$flex:"",height:"100%",position:"relative",overflow:"hidden","& > div":{marginLeft:"$colGap",padding:"0 $xs",opacity:.4},"& > div:hover":{opacity:.8},"& > div > svg":{display:"none",cursor:"pointer",width:13,minWidth:13,height:13,backgroundColor:"$elevation2"},"&:hover > div > svg":{display:"block"},variants:{align:{top:{height:"100%",alignItems:"flex-start",paddingTop:"$sm"}}}}),Wn=zn("input",{$reset:"",height:0,width:0,opacity:0,margin:0,"& + label":{position:"relative",$flexCenter:"",height:"100%",userSelect:"none",cursor:"pointer",paddingLeft:2,paddingRight:"$sm",pointerEvents:"auto"},"& + label:after":{content:'""',width:6,height:6,backgroundColor:"$elevation3",borderRadius:"50%",$activeStyle:""},"&:focus + label:after":{$focusStyle:""},"& + label:active:after":{backgroundColor:"$accent1",$focusStyle:""},"&:checked + label:after":{backgroundColor:"$accent1"}}),Xn=zn("div",{opacity:1,variants:{disabled:{true:{opacity:.6,pointerEvents:"none"}}}}),Kn=zn("label",{fontWeight:"$label",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","& > svg":{display:"block"}}),Yn=zn("div",{position:"fixed",top:0,bottom:0,right:0,left:0,zIndex:1e3}),Qn=zn("div",{background:"$toolTipBackground",fontFamily:"$sans",fontSize:"$toolTip",padding:"$xs $sm",color:"$toolTipText",borderRadius:"$xs",boxShadow:"$level2",maxWidth:260}),Zn=zn(Ir,{fill:"$toolTipBackground"});function Jn({children:e}){const{className:t}=Object(n.useContext)(_n);return o.a.createElement(u,{className:t},e)}function eo(){const{id:e,disable:t,disabled:r}=wn();return o.a.createElement(o.a.Fragment,null,o.a.createElement(Wn,{id:e+"__disable",type:"checkbox",checked:!r,onChange:()=>t(!r)}),o.a.createElement("label",{htmlFor:e+"__disable"}))}function to(e){const{id:t,optional:r,hint:n}=wn(),i=e.htmlFor||(t?{htmlFor:t}:null);return o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(eo,null),void 0!==n?o.a.createElement(Pr,null,o.a.createElement(zr,bn({as:Kn},i,e)),o.a.createElement(Tr,{side:"top",sideOffset:2},o.a.createElement(Qn,null,n,o.a.createElement(Zn,null)))):o.a.createElement(Kn,bn({},i,e)))}function ro(e){let{align:t}=e,r=Cr(e,["align"]);const{value:i,label:a,key:c}=wn(),{hideCopyButton:s}=Object(n.useContext)(En),l=!s&&void 0!==c,[f,u]=Object(n.useState)(!1);return o.a.createElement(Vn,{align:t,onPointerLeave:()=>u(!1)},o.a.createElement(to,r),l&&o.a.createElement("div",{title:`Click to copy ${"string"===typeof a?a:c} value`},f?o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},o.a.createElement("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})):o.a.createElement("svg",{onClick:async()=>{try{await navigator.clipboard.writeText(JSON.stringify({[c]:null!==i&&void 0!==i?i:""})),u(!0)}catch(e){Dr(jr.CLIPBOARD_ERROR,{[c]:i})}},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},o.a.createElement("path",{d:"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}),o.a.createElement("path",{d:"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"}))))}const no=zn("svg",{fill:"currentColor",transition:"transform 350ms ease, fill 250ms ease"});function oo(e){let{toggled:t}=e,r=Cr(e,["toggled"]);return o.a.createElement(no,bn({width:"9",height:"5",viewBox:"0 0 9 5",xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${t?0:-90}deg)`}},r),o.a.createElement("path",{d:"M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z"}))}function io(e){let{input:t}=e,r=Cr(e,["input"]);return t?o.a.createElement(Hn,r):o.a.createElement($n,r)}function ao({value:e,type:t,settings:r,setValue:o}){const[i,a]=Object(n.useState)(qr(t,e,r)),c=Object(n.useRef)(e),s=Object(n.useRef)(r);s.current=r;const l=Object(n.useCallback)((e=>a(qr(t,e,s.current))),[t]),f=Object(n.useCallback)((e=>{try{o(e)}catch(t){const{type:e,previousValue:r}=t;if("LEVA_ERROR"!==e)throw t;l(r)}}),[l,o]);return Object(n.useEffect)((()=>{d(e,c.current)||l(e),c.current=e}),[e,l]),{displayValue:i,onChange:a,onUpdate:f}}function co(e,t){const{emitOnEditStart:r,emitOnEditEnd:n}=wn();return Pt((t=>{t.first&&(document.body.classList.add("panel__dragged"),r());const o=e(t);return t.last&&(document.body.classList.remove("panel__dragged"),n()),o}),t)}function so(){const e=Object(n.useRef)(null),t=Object(n.useRef)({x:0,y:0}),r=Object(n.useCallback)((r=>{Object.assign(t.current,r),e.current&&(e.current.style.transform=`translate3d(${t.current.x}px, ${t.current.y}px, 0)`)}),[]);return[e,r]}const lo=(e,t)=>{if(!e[t])return null;return Cr(e[t],["__refCount"])};const fo=zn("div",{variants:{hasRange:{true:{position:"relative",display:"grid",gridTemplateColumns:"auto $sizes$numberInputMinWidth",columnGap:"$colGap",alignItems:"center"}}}}),uo=zn("div",{position:"relative",width:"100%",height:2,borderRadius:"$xs",backgroundColor:"$elevation1"}),po=zn("div",{position:"absolute",width:"$scrubberWidth",height:"$scrubberHeight",borderRadius:"$xs",boxShadow:"0 0 0 2px $colors$elevation2",backgroundColor:"$accent2",cursor:"pointer",$active:"none $accent1",$hover:"none $accent3",variants:{position:{left:{borderTopRightRadius:0,borderBottomRightRadius:0,transform:"translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))"},right:{borderTopLeftRadius:0,borderBottomLeftRadius:0,transform:"translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))"}}}}),vo=zn("div",{position:"relative",$flex:"",height:"100%",cursor:"pointer",touchAction:"none"}),ho=zn("div",{position:"absolute",height:"100%",backgroundColor:"$accent2"});function mo({value:e,min:t,max:r,onDrag:i,step:a,initialValue:c}){const s=Object(n.useRef)(null),l=Object(n.useRef)(null),f=Object(n.useRef)(0),u=kn("sizes","scrubberWidth"),p=co((({event:n,first:o,xy:[p],movement:[d],memo:v})=>{if(o){const{width:o,left:i}=s.current.getBoundingClientRect();f.current=o-parseFloat(u);v=(null===n||void 0===n?void 0:n.target)===l.current?e:Qr((p-i)/o,t,r)}const h=v+Qr(d/f.current,0,r-t);return i(gn(h,{step:a,initialValue:c})),v})),d=Yr(e,t,r);return o.a.createElement(vo,bn({ref:s},p()),o.a.createElement(uo,null,o.a.createElement(ho,{style:{left:0,right:100*(1-d)+"%"}})),o.a.createElement(po,{ref:l,style:{left:`calc(${d} * (100% - ${u}))`}}))}const go=o.a.memo((({label:e,onUpdate:t,step:r,innerLabelTrim:i})=>{const[a,c]=Object(n.useState)(!1),s=co((({active:e,delta:[n],event:o,memo:i=0})=>(c(e),i+=n/2,Math.abs(i)>=1&&(t((e=>parseFloat(e)+Math.floor(i)*r*vn(o))),i=0),i)));return o.a.createElement(Ln,bn({dragging:a,title:e.length>1?e:""},s()),e.slice(0,i))}));function xo({label:e,id:t,displayValue:r,onUpdate:n,onChange:i,settings:a,innerLabelTrim:c=1}){const s=c>0&&o.a.createElement(go,{label:e,step:a.step,onUpdate:n,innerLabelTrim:c});return o.a.createElement(Un,{id:t,value:String(r),onUpdate:n,onChange:i,innerLabel:s})}const{sanitizeStep:bo}=xn;var yo=Hr({component:function(){const e=wn(),{label:t,value:r,onUpdate:n,settings:i,id:a}=e,{min:c,max:s}=i,l=s!==1/0&&c!==-1/0;return o.a.createElement(io,{input:!0},o.a.createElement(ro,null,t),o.a.createElement(fo,{hasRange:l},l&&o.a.createElement(mo,bn({value:parseFloat(r),onDrag:n},i)),o.a.createElement(xo,bn({},e,{id:a,label:"value",innerLabelTrim:l?0:1}))))}},Cr(xn,["sanitizeStep"]));var wo=Object.freeze({__proto__:null,schema:(e,t)=>D().schema({options:D().passesAnyOf(D().object(),D().array())}).test(t),sanitize:(e,{values:t})=>{if(t.indexOf(e)<0)throw Error("Selected value doesn't match Select options");return e},format:(e,{values:t})=>t.indexOf(e),normalize:e=>{let t,r,{value:n,options:o}=e;return Array.isArray(o)?(r=o,t=o.map((e=>String(e)))):(r=Object.values(o),t=Object.keys(o)),"value"in e?r.includes(n)||(t.unshift(String(n)),r.unshift(n)):n=r[0],Object.values(o).includes(n)||(o[String(n)]=n),{value:n,settings:{keys:t,values:r}}}});const _o=zn("div",{$flexCenter:"",position:"relative","> svg":{pointerEvents:"none",position:"absolute",right:"$md"}}),So=zn("select",{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0}),Eo=zn("div",{display:"flex",alignItems:"center",width:"100%",height:"$rowHeight",backgroundColor:"$elevation3",borderRadius:"$sm",padding:"0 $sm",cursor:"pointer",[`${So}:focus + &`]:{$focusStyle:""},[`${So}:hover + &`]:{$hoverStyle:""}});function Oo({displayValue:e,value:t,onUpdate:r,id:i,settings:a}){const{keys:c,values:s}=a,l=Object(n.useRef)();return t===s[e]&&(l.current=c[e]),o.a.createElement(_o,null,o.a.createElement(So,{id:i,value:e,onChange:e=>r(s[Number(e.currentTarget.value)])},c.map(((e,t)=>o.a.createElement("option",{key:e,value:t},e)))),o.a.createElement(Eo,null,l.current),o.a.createElement(oo,{toggled:!0}))}var Ro=Hr({component:function(){const{label:e,value:t,displayValue:r,onUpdate:n,id:i,settings:a}=wn();return o.a.createElement(io,{input:!0},o.a.createElement(ro,null,e),o.a.createElement(Oo,{id:i,value:t,displayValue:r,onUpdate:n,settings:a}))}},wo);function Po(e){let{displayValue:t,onUpdate:r,onChange:n}=e,i=Cr(e,["displayValue","onUpdate","onChange"]);return o.a.createElement(Mn,bn({value:t,onUpdate:r,onChange:n},i))}var zo=Hr({component:function(){const{label:e,displayValue:t,onUpdate:r,onChange:n}=wn();return o.a.createElement(io,{input:!0},o.a.createElement(ro,null,e),o.a.createElement(Po,{displayValue:t,onUpdate:r,onChange:n}))}},Object.freeze({__proto__:null,schema:e=>D().string().test(e),sanitize:e=>{if("string"!==typeof e)throw Error("Invalid string");return e}}));var To=Object.freeze({__proto__:null,schema:e=>D().boolean().test(e),sanitize:e=>{if("boolean"!==typeof e)throw Error("Invalid boolean");return e}});const Io=zn("div",{position:"relative",$flex:"",height:"$rowHeight",input:{$reset:"",height:0,width:0,opacity:0,margin:0},label:{position:"relative",$flexCenter:"",userSelect:"none",cursor:"pointer",height:"$checkboxSize",width:"$checkboxSize",backgroundColor:"$elevation3",borderRadius:"$sm",$hover:""},"input:focus + label":{$focusStyle:""},"input:focus:checked + label, input:checked + label:hover":{$hoverStyle:"$accent3"},"input + label:active":{backgroundColor:"$accent1"},"input:checked + label:active":{backgroundColor:"$accent1"},"label > svg":{display:"none",width:"90%",height:"90%",stroke:"$highlight3"},"input:checked + label":{backgroundColor:"$accent2"},"input:checked + label > svg":{display:"block"}});function Co({value:e,onUpdate:t,id:r}){return o.a.createElement(Io,null,o.a.createElement("input",{id:r,type:"checkbox",checked:e,onChange:e=>t(e.currentTarget.checked)}),o.a.createElement("label",{htmlFor:r},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},o.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"}))))}var jo=Hr({component:function(){const{label:e,value:t,onUpdate:r,id:n}=wn();return o.a.createElement(io,{input:!0},o.a.createElement(ro,null,e),o.a.createElement(Co,{value:t,onUpdate:r,id:n}))}},To);function ko({value:e,id:t,valueKey:r,settings:i,onUpdate:a,innerLabelTrim:c}){const s=Object(n.useRef)(e[r]);s.current=e[r];const l=Object(n.useCallback)((e=>a({[r]:pn({type:"NUMBER",value:s.current,settings:i},e)})),[a,i,r]),f=ao({type:"NUMBER",value:e[r],settings:i,setValue:l});return o.a.createElement(xo,{id:t,label:r,value:e[r],displayValue:f.displayValue,onUpdate:f.onUpdate,onChange:f.onChange,settings:i,innerLabelTrim:c})}const Ao=zn("div",{display:"grid",columnGap:"$colGap",gridAutoFlow:"column dense",alignItems:"center",variants:{withLock:{true:{gridTemplateColumns:"10px auto","> svg":{cursor:"pointer"}}}}});function Do(e){let{locked:t}=e,r=Cr(e,["locked"]);return o.a.createElement("svg",bn({width:"10",height:"10",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),t?o.a.createElement("path",{d:"M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}):o.a.createElement("path",{d:"M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function Lo({value:e,onUpdate:t,settings:r,innerLabelTrim:n}){const{id:i,setSettings:a}=wn(),{lock:c,locked:s}=r;return o.a.createElement(Ao,{withLock:c},c&&o.a.createElement(Do,{locked:s,onClick:()=>a({locked:!s})}),Object.keys(e).map(((a,c)=>o.a.createElement(ko,{id:0===c?i:`${i}.${a}`,key:a,valueKey:a,value:e,settings:r[a],onUpdate:t,innerLabelTrim:n}))))}const No=(e,t)=>{const r={};let n=0,o=1/0;Object.entries(e).forEach((([e,i])=>{r[e]=mn(Hr({value:i},t[e])).settings,n=Math.max(n,r[e].step),o=Math.min(o,r[e].pad)}));for(let i in r){const{step:e,min:a,max:c}=t[i]||{};isFinite(e)||isFinite(a)&&isFinite(c)||(r[i].step=n,r[i].pad=o)}return r};function Mo(e){const t=D().array().length(e).every.number();return r=>t.test(r)||(t=>{if(!t||"object"!==typeof t)return!1;const r=Object.values(t);return r.length===e&&r.every((e=>isFinite(e)))})(r)}function Uo(e,t,r){return function(e){return Array.isArray(e)?"array":"object"}(e)===t?e:"array"===t?Object.values(e):function(e,t){return e.reduce(((e,r,n)=>Object.assign(e,{[t[n]]:r})),{})}(e,r)}function Fo(e){return{schema:Mo(e.length),normalize:t=>{let{value:r}=t;return function(e,t,r=[]){const{lock:n=!1}=t,o=Cr(t,["lock"]),i=Array.isArray(e)?"array":"object",a="object"===i?Object.keys(e):r,c=Uo(e,"object",a),s=(l=o)&&("step"in l||"min"in l||"max"in l)?a.reduce(((e,t)=>Object.assign(e,{[t]:o})),{}):o;var l;return{value:"array"===i?e:c,settings:Hr(Hr({},No(c,s)),{},{format:i,keys:a,lock:n,locked:!1})}}(r,Cr(t,["value"]),e)},format:(e,t)=>((e,t)=>Uo(e,"object",t.keys))(e,t),sanitize:(e,t,r)=>((e,t,r)=>{const n=Uo(e,"object",t.keys);for(let a in n)n[a]=hn(n[a],t[a]);const o=Object.keys(n);let i={};if(o.length===t.keys.length)i=n;else{const e=Uo(r,"object",t.keys);if(1===o.length&&t.locked){const t=o[0],r=n[t],a=e[t],c=0!==a?r/a:1;for(let n in e)n===t?i[t]=r:i[n]=e[n]*c}else i=Hr(Hr({},e),n)}return Uo(i,t.format,t.keys)})(e,t,r)}}var Bo=r("Zss7"),qo=r.n(Bo);function Go(){return(Go=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function $o(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}var Ho="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function Vo(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e})),Object(n.useCallback)((function(e){return t.current&&t.current(e)}),[])}var Wo,Xo=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},Ko=function(e){return"touches"in e},Yo=function(e,t){var r=e.getBoundingClientRect(),n=Ko(t)?t.touches[0]:t;return{left:Xo((n.pageX-(r.left+window.pageXOffset))/r.width),top:Xo((n.pageY-(r.top+window.pageYOffset))/r.height)}},Qo=o.a.memo((function(e){var t=e.onMove,r=e.onKey,i=$o(e,["onMove","onKey"]),a=Object(n.useRef)(null),c=Object(n.useRef)(!1),s=Object(n.useState)(!1),l=s[0],f=s[1],u=Vo(t),p=Vo(r),d=Object(n.useCallback)((function(e){e.preventDefault(),(Ko(e)?e.touches.length>0:e.buttons>0)&&a.current?u(Yo(a.current,e)):f(!1)}),[u]),v=Object(n.useCallback)((function(e){var t=e.nativeEvent;t.preventDefault(),function(e){return!(c.current&&!Ko(e)||(c.current||(c.current=Ko(e)),0))}(t)&&(u(Yo(a.current,t)),f(!0))}),[u]),h=Object(n.useCallback)((function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),p({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))}),[p]),m=Object(n.useCallback)((function(){return f(!1)}),[]),g=Object(n.useCallback)((function(e){var t=e?window.addEventListener:window.removeEventListener;t(c.current?"touchmove":"mousemove",d),t(c.current?"touchend":"mouseup",m)}),[d,m]);return Ho((function(){return g(l),function(){l&&g(!1)}}),[l,g]),o.a.createElement("div",Go({},i,{className:"react-colorful__interactive",ref:a,onTouchStart:v,onMouseDown:v,onKeyDown:h,tabIndex:0,role:"slider"}))})),Zo=function(e){return e.filter(Boolean).join(" ")},Jo=function(e){var t=e.color,r=e.left,n=e.top,i=void 0===n?.5:n,a=Zo(["react-colorful__pointer",e.className]);return o.a.createElement("div",{className:a,style:{top:100*i+"%",left:100*r+"%"}},o.a.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},ei=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r},ti=(Math.PI,function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:ei(e.h),s:ei(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:ei(o/2),a:ei(n,2)}}),ri=function(e){var t=ti(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},ni=function(e){var t=ti(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},oi=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var i=Math.floor(t),a=n*(1-r),c=n*(1-(t-i)*r),s=n*(1-(1-t+i)*r),l=i%6;return{r:ei(255*[n,c,a,a,s,n][l]),g:ei(255*[s,n,n,c,a,a][l]),b:ei(255*[a,a,s,n,n,c][l]),a:ei(o,2)}},ii=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,i=Math.max(t,r,n),a=i-Math.min(t,r,n),c=a?i===t?(r-n)/a:i===r?2+(n-t)/a:4+(t-r)/a:0;return{h:ei(60*(c<0?c+6:c)),s:ei(i?a/i*100:0),v:ei(i/255*100),a:o}},ai=o.a.memo((function(e){var t=e.hue,r=e.onChange,n=Zo(["react-colorful__hue",e.className]);return o.a.createElement("div",{className:n},o.a.createElement(Qo,{onMove:function(e){r({h:360*e.left})},onKey:function(e){r({h:Xo(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":ei(t)},o.a.createElement(Jo,{className:"react-colorful__hue-pointer",left:t/360,color:ri({h:t,s:100,v:100,a:1})})))})),ci=o.a.memo((function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:ri({h:t.h,s:100,v:100,a:1})};return o.a.createElement("div",{className:"react-colorful__saturation",style:n},o.a.createElement(Qo,{onMove:function(e){r({s:100*e.left,v:100-100*e.top})},onKey:function(e){r({s:Xo(t.s+100*e.left,0,100),v:Xo(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+ei(t.s)+"%, Brightness "+ei(t.v)+"%"},o.a.createElement(Jo,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:ri(t)})))})),si=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0};function li(e,t,r){var o=Vo(r),i=Object(n.useState)((function(){return e.toHsva(t)})),a=i[0],c=i[1],s=Object(n.useRef)({color:t,hsva:a});Object(n.useEffect)((function(){if(!e.equal(t,s.current.color)){var r=e.toHsva(t);s.current={hsva:r,color:t},c(r)}}),[t,e]),Object(n.useEffect)((function(){var t;si(a,s.current.hsva)||e.equal(t=e.fromHsva(a),s.current.color)||(s.current={hsva:a,color:t},o(t))}),[a,e,o]);var l=Object(n.useCallback)((function(e){c((function(t){return Object.assign({},t,e)}))}),[]);return[a,l]}var fi,ui=function(){Ho((function(){if("undefined"!=typeof document&&!fi){(fi=document.createElement("style")).innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';var e=Wo||r.nc;e&&fi.setAttribute("nonce",e),document.head.appendChild(fi)}}),[])},pi=function(e){var t=e.className,r=e.colorModel,n=e.color,i=void 0===n?r.defaultColor:n,a=e.onChange,c=$o(e,["className","colorModel","color","onChange"]);ui();var s=li(r,i,a),l=s[0],f=s[1],u=Zo(["react-colorful",t]);return o.a.createElement("div",Go({},c,{className:u}),o.a.createElement(ci,{hsva:l,onChange:f}),o.a.createElement(ai,{hue:l.h,onChange:f,className:"react-colorful__last-control"}))},di=function(e){var t=e.className,r=e.hsva,n=e.onChange,i={backgroundImage:"linear-gradient(90deg, "+ni(Object.assign({},r,{a:0}))+", "+ni(Object.assign({},r,{a:1}))+")"},a=Zo(["react-colorful__alpha",t]);return o.a.createElement("div",{className:a},o.a.createElement("div",{className:"react-colorful__alpha-gradient",style:i}),o.a.createElement(Qo,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:Xo(r.a+e.left)})},"aria-label":"Alpha","aria-valuetext":ei(100*r.a)+"%"},o.a.createElement(Jo,{className:"react-colorful__alpha-pointer",left:r.a,color:ni(r)})))},vi=function(e){var t=e.className,r=e.colorModel,n=e.color,i=void 0===n?r.defaultColor:n,a=e.onChange,c=$o(e,["className","colorModel","color","onChange"]);ui();var s=li(r,i,a),l=s[0],f=s[1],u=Zo(["react-colorful",t]);return o.a.createElement("div",Go({},c,{className:u}),o.a.createElement(ci,{hsva:l,onChange:f}),o.a.createElement(ai,{hue:l.h,onChange:f}),o.a.createElement(di,{hsva:l,onChange:f,className:"react-colorful__last-control"}))},hi={defaultColor:{r:0,g:0,b:0,a:1},toHsva:ii,fromHsva:oi,equal:si},mi=function(e){return o.a.createElement(vi,Go({},e,{colorModel:hi}))},gi={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return ii({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(t=oi(e)).r,g:t.g,b:t.b};var t},equal:si},xi=function(e){return o.a.createElement(pi,Go({},e,{colorModel:gi}))},bi=r("17x9"),yi=r.n(bi);function wi(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(t){i(t)}}function c(e){try{s(n.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))}function _i(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function Si(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}Object.create;var Ei=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function Oi(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=Ei.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof t?t:"string"===typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var Ri=[".DS_Store","Thumbs.db"];function Pi(e){return(null!==e.target&&e.target.files?Ii(e.target.files):[]).map((function(e){return Oi(e)}))}function zi(e,t){return wi(this,void 0,void 0,(function(){var r;return _i(this,(function(n){switch(n.label){case 0:return e.items?(r=Ii(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Ci))]):[3,2];case 1:return[2,Ti(ji(n.sent()))];case 2:return[2,Ti(Ii(e.files).map((function(e){return Oi(e)})))]}}))}))}function Ti(e){return e.filter((function(e){return-1===Ri.indexOf(e.name)}))}function Ii(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Ci(e){if("function"!==typeof e.webkitGetAsEntry)return ki(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Di(t):ki(e)}function ji(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Si(arguments[t]));return e}(e,Array.isArray(t)?ji(t):[t])}),[])}function ki(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var r=Oi(t);return Promise.resolve(r)}function Ai(e){return wi(this,void 0,void 0,(function(){return _i(this,(function(t){return[2,e.isDirectory?Di(e):Li(e)]}))}))}function Di(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return wi(i,void 0,void 0,(function(){var i,a,c;return _i(this,(function(s){switch(s.label){case 0:if(t.length)return[3,5];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=s.sent(),e(i),[3,4];case 3:return a=s.sent(),r(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(Ai)),n.push(c),o(),s.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Li(e){return wi(this,void 0,void 0,(function(){return _i(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=Oi(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}var Ni=r("X1Co"),Mi=r.n(Ni);function Ui(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Fi(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Fi(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Fi(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Bi=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},qi=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," bytes")}},Gi=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," bytes")}},$i={code:"too-many-files",message:"Too many files"};function Hi(e,t){var r="application/x-moz-file"===e.type||Mi()(e,t);return[r,r?null:Bi(t)]}function Vi(e,t,r){if(Wi(e.size))if(Wi(t)&&Wi(r)){if(e.size>r)return[!1,qi(r)];if(e.size<t)return[!1,Gi(t)]}else{if(Wi(t)&&e.size<t)return[!1,Gi(t)];if(Wi(r)&&e.size>r)return[!1,qi(r)]}return[!0,null]}function Wi(e){return void 0!==e&&null!==e}function Xi(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=Ui(Hi(e,r),1)[0],i=Ui(Vi(e,n,o),1)[0];return t&&i}))}function Ki(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function Yi(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Qi(e){e.preventDefault()}function Zi(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function Ji(e){return-1!==e.indexOf("Edge/")}function ea(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return Zi(e)||Ji(e)}function ta(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!Ki(e)&&t&&t.apply(void 0,[e].concat(n)),Ki(e)}))}}function ra(e){return function(e){if(Array.isArray(e))return ia(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||oa(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function na(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||oa(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oa(e,t){if(e){if("string"===typeof e)return ia(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ia(e,t):void 0}}function ia(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function aa(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ca(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?aa(Object(r),!0).forEach((function(t){sa(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):aa(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function sa(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function la(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var fa=Object(n.forwardRef)((function(e,t){var r=e.children,i=da(la(e,["children"])),a=i.open,c=la(i,["open"]);return Object(n.useImperativeHandle)(t,(function(){return{open:a}}),[a]),o.a.createElement(n.Fragment,null,r(ca(ca({},c),{},{open:a})))}));fa.displayName="Dropzone";var ua={disabled:!1,getFilesFromEvent:function(e){return wi(this,void 0,void 0,(function(){return _i(this,(function(t){return[2,(r=e,r.dataTransfer&&e.dataTransfer?zi(e.dataTransfer,e.type):Pi(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};fa.defaultProps=ua,fa.propTypes={children:yi.a.func,accept:yi.a.oneOfType([yi.a.string,yi.a.arrayOf(yi.a.string)]),multiple:yi.a.bool,preventDropOnDocument:yi.a.bool,noClick:yi.a.bool,noKeyboard:yi.a.bool,noDrag:yi.a.bool,noDragEventsBubbling:yi.a.bool,minSize:yi.a.number,maxSize:yi.a.number,maxFiles:yi.a.number,disabled:yi.a.bool,getFilesFromEvent:yi.a.func,onFileDialogCancel:yi.a.func,onDragEnter:yi.a.func,onDragLeave:yi.a.func,onDragOver:yi.a.func,onDrop:yi.a.func,onDropAccepted:yi.a.func,onDropRejected:yi.a.func,validator:yi.a.func};var pa={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function da(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ca(ca({},ua),e),r=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,s=t.multiple,l=t.maxFiles,f=t.onDragEnter,u=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,h=t.onDropRejected,m=t.onFileDialogCancel,g=t.preventDropOnDocument,x=t.noClick,b=t.noKeyboard,y=t.noDrag,w=t.noDragEventsBubbling,_=t.validator,S=Object(n.useRef)(null),E=Object(n.useRef)(null),O=Object(n.useReducer)(va,pa),R=na(O,2),P=R[0],z=R[1],T=P.isFocused,I=P.isFileDialogActive,C=P.draggedFiles,j=Object(n.useCallback)((function(){E.current&&(z({type:"openDialog"}),E.current.value=null,E.current.click())}),[z]),k=function(){I&&setTimeout((function(){E.current&&(E.current.files.length||(z({type:"closeDialog"}),"function"===typeof m&&m()))}),300)};Object(n.useEffect)((function(){return window.addEventListener("focus",k,!1),function(){window.removeEventListener("focus",k,!1)}}),[E,I,m]);var A=Object(n.useCallback)((function(e){S.current&&S.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),j()))}),[S,E]),D=Object(n.useCallback)((function(){z({type:"focus"})}),[]),L=Object(n.useCallback)((function(){z({type:"blur"})}),[]),N=Object(n.useCallback)((function(){x||(ea()?setTimeout(j,0):j())}),[E,x]),M=Object(n.useRef)([]),U=function(e){S.current&&S.current.contains(e.target)||(e.preventDefault(),M.current=[])};Object(n.useEffect)((function(){return g&&(document.addEventListener("dragover",Qi,!1),document.addEventListener("drop",U,!1)),function(){g&&(document.removeEventListener("dragover",Qi),document.removeEventListener("drop",U))}}),[S,g]);var F=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),W(e),M.current=[].concat(ra(M.current),[e.target]),Yi(e)&&Promise.resolve(i(e)).then((function(t){Ki(e)&&!w||(z({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),f&&f(e))}))}),[i,f,w]),B=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),W(e);var t=Yi(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return t&&p&&p(e),!1}),[p,w]),q=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),W(e);var t=M.current.filter((function(e){return S.current&&S.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),M.current=t,t.length>0||(z({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),Yi(e)&&u&&u(e))}),[S,u,w]),G=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),W(e),M.current=[],Yi(e)&&Promise.resolve(i(e)).then((function(t){if(!Ki(e)||w){var n=[],o=[];t.forEach((function(e){var t=na(Hi(e,r),2),i=t[0],s=t[1],l=na(Vi(e,c,a),2),f=l[0],u=l[1],p=_?_(e):null;if(i&&f&&!p)n.push(e);else{var d=[s,u];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!s&&n.length>1||s&&l>=1&&n.length>l)&&(n.forEach((function(e){o.push({file:e,errors:[$i]})})),n.splice(0)),z({acceptedFiles:n,fileRejections:o,type:"setFiles"}),d&&d(n,o,e),o.length>0&&h&&h(o,e),n.length>0&&v&&v(n,e)}})),z({type:"reset"})}),[s,r,c,a,l,i,d,v,h,w]),$=function(e){return o?null:e},H=function(e){return b?null:$(e)},V=function(e){return y?null:$(e)},W=function(e){w&&e.stopPropagation()},X=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,s=e.onDragEnter,l=e.onDragOver,f=e.onDragLeave,u=e.onDrop,p=la(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return ca(ca(sa({onKeyDown:H(ta(n,A)),onFocus:H(ta(i,D)),onBlur:H(ta(a,L)),onClick:$(ta(c,N)),onDragEnter:V(ta(s,F)),onDragOver:V(ta(l,B)),onDragLeave:V(ta(f,q)),onDrop:V(ta(u,G))},r,S),o||b?{}:{tabIndex:0}),p)}}),[S,A,D,L,N,F,B,q,G,b,y,o]),K=Object(n.useCallback)((function(e){e.stopPropagation()}),[]),Y=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=la(e,["refKey","onChange","onClick"]),c=sa({accept:r,multiple:s,type:"file",style:{display:"none"},onChange:$(ta(o,G)),onClick:$(ta(i,K)),autoComplete:"off",tabIndex:-1},n,E);return ca(ca({},c),a)}}),[E,r,s,G,o]),Q=C.length,Z=Q>0&&Xi({files:C,accept:r,minSize:c,maxSize:a,multiple:s,maxFiles:l}),J=Q>0&&!Z;return ca(ca({},P),{},{isDragAccept:Z,isDragReject:J,isFocused:T&&!o,getRootProps:X,getInputProps:Y,rootRef:S,inputRef:E,open:$(j)})}function va(e,t){switch(t.type){case"focus":return ca(ca({},e),{},{isFocused:!0});case"blur":return ca(ca({},e),{},{isFocused:!1});case"openDialog":return ca(ca({},e),{},{isFileDialogActive:!0});case"closeDialog":return ca(ca({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=t.isDragActive,n=t.draggedFiles;return ca(ca({},e),{},{draggedFiles:n,isDragActive:r});case"setFiles":return ca(ca({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return ca(ca({},e),{},{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]});default:return e}}function ha(e){let t;const r=new Set,n=(e,n)=>{const o="function"===typeof e?e(t):e;if(o!==t){const e=t;t=n?o:Object.assign({},t,o),r.forEach((r=>r(t,e)))}},o=()=>t,i={setState:n,getState:o,subscribe:(e,n,i)=>n||i?((e,n=o,i=Object.is)=>{let a=n(t);function c(){const r=n(t);if(!i(a,r)){const t=a;e(a=r,t)}}return r.add(c),()=>r.delete(c)})(e,n,i):(r.add(e),()=>r.delete(e)),destroy:()=>r.clear()};return t=e(n,o,i),i}const ma="undefined"===typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?n.useEffect:n.useLayoutEffect;var ga=function(e){const t="function"===typeof e?ha(e):e,r=(e=t.getState,r=Object.is)=>{const[,o]=Object(n.useReducer)((e=>e+1),0),i=t.getState(),a=Object(n.useRef)(i),c=Object(n.useRef)(e),s=Object(n.useRef)(r),l=Object(n.useRef)(!1),f=Object(n.useRef)();let u;void 0===f.current&&(f.current=e(i));let p=!1;(a.current!==i||c.current!==e||s.current!==r||l.current)&&(u=e(i),p=!r(f.current,u)),ma((()=>{p&&(f.current=u),a.current=i,c.current=e,s.current=r,l.current=!1}));const d=Object(n.useRef)(i);return ma((()=>{const e=()=>{try{const e=t.getState(),r=c.current(e);s.current(f.current,r)||(a.current=e,f.current=r,o())}catch(e){l.current=!0,o()}},r=t.subscribe(e);return t.getState()!==d.current&&e(),r}),[]),p?u:f.current};return Object.assign(r,t),r[Symbol.iterator]=function*(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4"),yield r,yield t},r},xa=r("c347"),ba=r.n(xa);const ya=(...e)=>e.filter(Boolean).join(".");function wa(e,t){return Object(n.useMemo)(e,function(e,t){const r=Object(n.useRef)();return(t?d:h.a)(e,r.current)||(r.current=e),r.current}(t,!0))}function _a(e,t,r){return e.useStore((e=>function(e,t){return Object.entries((r=e,n=t,n.reduce(((e,t)=>(r&&r.hasOwnProperty(t)&&(e[t]=r[t]),e)),{}))).reduce(((e,[,{value:t,disabled:r,key:n}])=>(e[n]=r?void 0:t,e)),{});var r,n}(Hr(Hr({},r),e.data),t)),h.a)}function Sa(e=3){const t=Object(n.useRef)(null),r=Object(n.useRef)(null),[o,i]=Object(n.useState)(!1),a=Object(n.useCallback)((()=>i(!0)),[]),c=Object(n.useCallback)((()=>i(!1)),[]);return Object(n.useLayoutEffect)((()=>{if(o){const{bottom:n,top:o,left:i}=t.current.getBoundingClientRect(),{height:a}=r.current.getBoundingClientRect(),c=n+a>window.innerHeight-40?"up":"down";r.current.style.position="fixed",r.current.style.zIndex="10000",r.current.style.left=i+"px","down"===c?r.current.style.top=n+e+"px":r.current.style.bottom=window.innerHeight-o+e+"px"}}),[e,o]),{popinRef:t,wrapperRef:r,shown:o,show:a,hide:c}}const Ea={rgb:"toRgb",hsl:"toHsl",hsv:"toHsv",hex:"toHexString",hex8:"toHex8String"};D.extend({color:()=>e=>qo()(e).isValid()});function Oa(e,{format:t,hasAlpha:r,isString:n}){const o="hex"===t&&r?"hex8":t;if(n)return e.toString(o);const i=e[Ea[o]]();return r?i:function(e,t){const r=Hr({},e);return t.forEach((t=>t in e&&delete r[t])),r}(i,["a"])}const Ra=(e,t)=>{const r=qo()(e);if(!r.isValid())throw Error("Invalid color");return Oa(r,t)};var Pa=Object.freeze({__proto__:null,schema:e=>D().color().test(e),sanitize:Ra,format:(e,t)=>Oa(qo()(e),Hr(Hr({},t),{},{isString:!0,format:"hex"})),normalize:({value:e})=>{const t=qo()(e).getFormat(),r={format:"name"===t||"hex8"===t?"hex":t,hasAlpha:"object"===typeof e?"a"in e:"hex8"===t||/^(rgba)|(hsla)|(hsva)/.test(e),isString:"string"===typeof e};return{value:Ra(e,r),settings:r}}});const za=zn("div",{position:"relative",boxSizing:"border-box",borderRadius:"$sm",overflow:"hidden",cursor:"pointer",height:"$rowHeight",width:"$rowHeight",backgroundColor:"#fff",backgroundImage:'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',$inputStyle:"",$hover:"",zIndex:1,variants:{active:{true:{$inputStyle:"$accent1"}}},"&::before":{content:'""',position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"currentColor",zIndex:1}}),Ta=zn("div",{position:"relative",display:"grid",gridTemplateColumns:"$sizes$rowHeight auto",columnGap:"$colGap",alignItems:"center"}),Ia=zn("div",{width:"$colorPickerWidth",height:"$colorPickerHeight",".react-colorful":{width:"100%",height:"100%",boxShadow:"$level2",cursor:"crosshair"},".react-colorful__saturation":{borderRadius:"$sm $sm 0 0"},".react-colorful__alpha, .react-colorful__hue":{height:10},".react-colorful__last-control":{borderRadius:"0 0 $sm $sm"},".react-colorful__pointer":{height:12,width:12}});function Ca(e,t){return"rgb"!==t?qo()(e).toRgb():e}function ja({value:e,displayValue:t,settings:r,onUpdate:i}){const{emitOnEditStart:a,emitOnEditEnd:c}=wn(),{format:s,hasAlpha:l}=r,{popinRef:f,wrapperRef:u,shown:p,show:d,hide:v}=Sa(),h=Object(n.useRef)(0),[m,g]=Object(n.useState)((()=>Ca(e,s))),x=l?mi:xi,b=()=>{v(),c(),window.clearTimeout(h.current)};return Object(n.useEffect)((()=>()=>window.clearTimeout(h.current)),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(za,{ref:f,active:p,onClick:()=>(g(Ca(e,s)),d(),void a()),style:{color:t}}),p&&o.a.createElement(Jn,null,o.a.createElement(Yn,{onPointerUp:b}),o.a.createElement(Ia,{ref:u,onMouseEnter:()=>window.clearTimeout(h.current),onMouseLeave:e=>0===e.buttons&&void(h.current=window.setTimeout(b,500))},o.a.createElement(x,{color:m,onChange:i}))))}var ka=Hr({component:function(){const{value:e,displayValue:t,label:r,onChange:n,onUpdate:i,settings:a}=wn();return o.a.createElement(io,{input:!0},o.a.createElement(ro,null,r),o.a.createElement(Ta,null,o.a.createElement(ja,{value:e,displayValue:t,onChange:n,onUpdate:i,settings:a}),o.a.createElement(Mn,{value:t,onChange:n,onUpdate:i})))}},Pa);var Aa=Hr({component:function(){const{label:e,displayValue:t,onUpdate:r,settings:n}=wn();return o.a.createElement(io,{input:!0},o.a.createElement(ro,null,e),o.a.createElement(Lo,{value:t,settings:n,onUpdate:r}))}},Fo(["x","y","z"]));const Da=zn("div",{$flexCenter:"",position:"relative",backgroundColor:"$elevation3",borderRadius:"$sm",cursor:"pointer",height:"$rowHeight",width:"$rowHeight",$draggable:"",$hover:"","&:active":{cursor:"none"},"&::after":{content:'""',backgroundColor:"$accent2",height:4,width:4,borderRadius:2}}),La=zn("div",{$flexCenter:"",width:"$joystickWidth",height:"$joystickHeight",borderRadius:"$sm",boxShadow:"$level2",position:"fixed",zIndex:1e4,overflow:"hidden",$draggable:"",transform:"translate(-50%, -50%)",variants:{isOutOfBounds:{true:{backgroundColor:"$elevation1"},false:{backgroundColor:"$elevation3"}}},"> div":{position:"absolute",$flexCenter:"",borderStyle:"solid",borderWidth:1,borderColor:"$highlight1",backgroundColor:"$elevation3",width:"80%",height:"80%","&::after,&::before":{content:'""',position:"absolute",zindex:10,backgroundColor:"$highlight1"},"&::before":{width:"100%",height:1},"&::after":{height:"100%",width:1}},"> span":{position:"relative",zindex:100,width:10,height:10,backgroundColor:"$accent2",borderRadius:"50%"}});function Na({value:e,settings:t,onUpdate:r}){const i=Object(n.useRef)(),a=Object(n.useRef)(0),c=Object(n.useRef)(0),s=Object(n.useRef)(1),[l,f]=Object(n.useState)(!1),[u,p]=Object(n.useState)(!1),[d,v]=so(),h=Object(n.useRef)(null),m=Object(n.useRef)(null);Object(n.useLayoutEffect)((()=>{if(l){const{top:e,left:t,width:r,height:n}=h.current.getBoundingClientRect();m.current.style.left=t+r/2+"px",m.current.style.top=e+n/2+"px"}}),[l]);const{keys:[g,x],joystick:b}=t,y="invertY"===b?1:-1,{[g]:{step:w},[x]:{step:_}}=t,S=kn("sizes","joystickWidth"),E=kn("sizes","joystickHeight"),O=.8*parseFloat(S)/2,R=.8*parseFloat(E)/2,P=Object(n.useCallback)((()=>{i.current||(p(!0),a.current&&v({x:a.current*O}),c.current&&v({y:c.current*-R}),i.current=window.setInterval((()=>{r((e=>{const t=w*a.current*s.current,r=y*_*c.current*s.current;return Array.isArray(e)?{[g]:e[0]+t,[x]:e[1]+r}:{[g]:e[g]+t,[x]:e[x]+r}}))}),16))}),[O,R,r,v,w,_,g,x,y]),z=Object(n.useCallback)((()=>{window.clearTimeout(i.current),i.current=void 0,p(!1)}),[]);Object(n.useEffect)((()=>{function e(e){s.current=vn(e)}return window.addEventListener("keydown",e),window.addEventListener("keyup",e),()=>{window.clearTimeout(i.current),window.removeEventListener("keydown",e),window.removeEventListener("keyup",e)}}),[]);const T=co((({first:t,active:n,delta:[o,i],movement:[l,u]})=>{t&&f(!0);const p=Vr(l,-O,O),d=Vr(u,-R,R);a.current=Math.abs(l)>Math.abs(p)?Math.sign(l-p):0,c.current=Math.abs(u)>Math.abs(d)?Math.sign(d-u):0;let h=e[g],m=e[x];n?(a.current||(h+=o*w*s.current,v({x:p})),c.current||(m-=y*i*_*s.current,v({y:d})),a.current||c.current?P():z(),r({[g]:h,[x]:m})):(f(!1),a.current=0,c.current=0,v({x:0,y:0}),z())}));return o.a.createElement(Da,bn({ref:h},T()),l&&o.a.createElement(Jn,null,o.a.createElement(La,{ref:m,isOutOfBounds:u},o.a.createElement("div",null),o.a.createElement("span",{ref:d}))))}const Ma=zn("div",{display:"grid",columnGap:"$colGap",variants:{withJoystick:{true:{gridTemplateColumns:"$sizes$rowHeight auto"},false:{gridTemplateColumns:"auto"}}}});const Ua=Fo(["x","y"]);var Fa=Hr(Hr({component:function(){const{label:e,displayValue:t,onUpdate:r,settings:n}=wn();return o.a.createElement(io,{input:!0},o.a.createElement(ro,null,e),o.a.createElement(Ma,{withJoystick:!!n.joystick},n.joystick&&o.a.createElement(Na,{value:t,settings:n,onUpdate:r}),o.a.createElement(Lo,{value:t,settings:n,onUpdate:r})))}},Ua),{},{normalize:e=>{let{joystick:t=!0}=e,r=Cr(e,["joystick"]);const{value:n,settings:o}=Ua.normalize(r);return{value:n,settings:Hr(Hr({},o),{},{joystick:t})}}});var Ba=Object.freeze({__proto__:null,sanitize:e=>{if(void 0!==e){if(e instanceof File)try{return URL.createObjectURL(e)}catch(t){return}if("string"===typeof e&&0===e.indexOf("blob:"))return e;throw Error("Invalid image format [undefined | blob |\xa0File].")}},schema:(e,t)=>"object"===typeof t&&"image"in t,normalize:({image:e})=>({value:e})});const qa=zn("div",{position:"relative",display:"grid",gridTemplateColumns:"$sizes$rowHeight auto 20px",columnGap:"$colGap",alignItems:"center"}),Ga=zn("div",{$flexCenter:"",overflow:"hidden",height:"$rowHeight",background:"$elevation3",textAlign:"center",color:"inherit",borderRadius:"$sm",outline:"none",userSelect:"none",cursor:"pointer",$inputStyle:"",$hover:"",$focusWithin:"",$active:"$accent1 $elevation1",variants:{isDragAccept:{true:{$inputStyle:"$accent1",backgroundColor:"$elevation1"}}}}),$a=zn("div",{boxSizing:"border-box",borderRadius:"$sm",height:"$rowHeight",width:"$rowHeight",$inputStyle:"",backgroundSize:"cover",backgroundPosition:"center",variants:{hasImage:{true:{cursor:"pointer",$hover:"",$active:""}}}}),Ha=zn("div",{$flexCenter:"",width:"$imagePreviewWidth",height:"$imagePreviewHeight",borderRadius:"$sm",boxShadow:"$level2",pointerEvents:"none",$inputStyle:"",backgroundSize:"cover",backgroundPosition:"center"}),Va=zn("div",{fontSize:"0.8em",height:"100%",padding:"$rowGap $md"}),Wa=zn("div",{$flexCenter:"",top:"0",right:"0",marginRight:"$sm",height:"100%",cursor:"pointer",variants:{disabled:{true:{color:"$elevation3",cursor:"default"}}},"&::after,&::before":{content:'""',position:"absolute",height:2,width:10,borderRadius:1,backgroundColor:"currentColor"},"&::after":{transform:"rotate(45deg)"},"&::before":{transform:"rotate(-45deg)"}});var Xa=Hr({component:function(){const{label:e,value:t,onUpdate:r}=wn(),{popinRef:i,wrapperRef:a,shown:c,show:s,hide:l}=Sa(),f=Object(n.useCallback)((e=>{e.length&&r(e[0])}),[r]),u=Object(n.useCallback)((e=>{e.stopPropagation(),r(void 0)}),[r]),{getRootProps:p,getInputProps:d,isDragAccept:v}=da({maxFiles:1,accept:"image/*",onDrop:f});return o.a.createElement(io,{input:!0},o.a.createElement(ro,null,e),o.a.createElement(qa,null,o.a.createElement($a,{ref:i,hasImage:!!t,onPointerDown:()=>!!t&&s(),onPointerUp:l,style:{backgroundImage:t?`url(${t})`:"none"}}),c&&!!t&&o.a.createElement(Jn,null,o.a.createElement(Yn,{onPointerUp:l,style:{cursor:"pointer"}}),o.a.createElement(Ha,{ref:a,style:{backgroundImage:`url(${t})`}})),o.a.createElement(Ga,p({isDragAccept:v}),o.a.createElement("input",d()),o.a.createElement(Va,null,v?"drop image":"click or drop")),o.a.createElement(Wa,{onClick:u,disabled:!t})))}},Ba);const Ka=D().number(),Ya=e=>({min:e[0],max:e[1]}),Qa=(e,{bounds:[t,r]},n)=>{const o={min:n[0],max:n[1]},{min:i,max:a}=Hr(Hr({},o),e);return[Vr(Number(i),t,Math.max(t,a)),Vr(Number(a),Math.min(r,i),r)]};var Za=Object.freeze({__proto__:null,schema:(e,t)=>D().array().length(2).every.number().test(e)&&D().schema({min:Ka,max:Ka}).test(t),format:Ya,sanitize:Qa,normalize:({value:e,min:t,max:r})=>{const n={min:t,max:r},o=[t,r],i=Hr(Hr({},No(Ya(e),{min:n,max:n})),{},{bounds:o});return{value:Qa(Ya(e),i,e),settings:i}}});const Ja=zn("div",{display:"grid",columnGap:"$colGap",gridTemplateColumns:"auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)"});function ec(e){let{value:t,bounds:[r,i],onDrag:a}=e,c=Cr(e,["value","bounds","onDrag"]);const s=Object(n.useRef)(null),l=Object(n.useRef)(null),f=Object(n.useRef)(null),u=Object(n.useRef)(0),p=kn("sizes","scrubberWidth"),d=co((({event:e,first:n,xy:[o],movement:[d],memo:v={}})=>{if(n){const{width:n,left:a}=s.current.getBoundingClientRect();u.current=n-parseFloat(p);const c=(null===e||void 0===e?void 0:e.target)===l.current||(null===e||void 0===e?void 0:e.target)===f.current;v.pos=Qr((o-a)/n,r,i);const d=Math.abs(v.pos-t.min)-Math.abs(v.pos-t.max);v.key=d<0||0===d&&v.pos<=t.min?"min":"max",c&&(v.pos=t[v.key])}const h=v.pos+Qr(d/u.current,0,i-r);return a({[v.key]:bo(h,c[v.key])}),v})),v=`calc(${Yr(t.min,r,i)} * (100% - ${p} - 8px) + 4px)`,h=`calc(${1-Yr(t.max,r,i)} * (100% - ${p} - 8px) + 4px)`;return o.a.createElement(vo,bn({ref:s},d()),o.a.createElement(uo,null,o.a.createElement(ho,{style:{left:v,right:h}})),o.a.createElement(po,{position:"left",ref:l,style:{left:v}}),o.a.createElement(po,{position:"right",ref:f,style:{right:h}}))}var tc=Hr({component:function(){const{label:e,displayValue:t,onUpdate:r,settings:n}=wn(),i=Cr(n,["bounds"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(io,{input:!0},o.a.createElement(ro,null,e),o.a.createElement(Ja,null,o.a.createElement(ec,bn({value:t},n,{onDrag:r})),o.a.createElement(Lo,{value:t,settings:i,onUpdate:r,innerLabelTrim:0}))))}},Za);const rc=function(){const e=ga((()=>({data:{}}))),t=(()=>{const e=new Map;return{on:(t,r)=>{let n=e.get(t);void 0===n&&(n=new Set,e.set(t,n)),n.add(r)},off:(t,r)=>{const n=e.get(t);void 0!==n&&(n.delete(r),0===n.size&&e.delete(t))},emit:(t,...r)=>{const n=e.get(t);if(void 0!==n)for(const e of n)e(...r)}}})();this.storeId="_"+Math.random().toString(36).substr(2,9),this.useStore=e;const r={},n=new Set;this.getVisiblePaths=()=>{const e=this.getData(),t=Object.keys(e),o=[];Object.entries(r).forEach((([e,r])=>{r.render&&t.some((t=>0===t.indexOf(e)))&&!r.render(this.get)&&o.push(e+".")}));const i=[];return n.forEach((t=>{t in e&&e[t].__refCount>0&&o.every((e=>-1===t.indexOf(e)))&&(!e[t].render||e[t].render(this.get))&&i.push(t)})),i},this.setOrderedPaths=e=>{e.forEach((e=>n.add(e)))},this.orderPaths=e=>(this.setOrderedPaths(e),e),this.disposePaths=t=>{e.setState((e=>{const r=e.data;return t.forEach((e=>{if(e in r){const t=r[e];t.__refCount--,0===t.__refCount&&t.type in an&&delete r[e]}})),{data:r}}))},this.dispose=()=>{e.setState((()=>({data:{}})))},this.getFolderSettings=e=>r[e]||{},this.getData=()=>e.getState().data,this.addData=(t,r)=>{e.setState((e=>{const n=e.data;return Object.entries(t).forEach((([e,t])=>{let o=n[e];if(o){const{type:e,value:n}=t,i=Cr(t,["type","value"]);e!==o.type?Dr(jr.INPUT_TYPE_OVERRIDE,e):((0===o.__refCount||r)&&Object.assign(o,i),o.__refCount++)}else n[e]=Hr(Hr({},t),{},{__refCount:1})})),{data:n}}))},this.setValueAtPath=(t,r,n)=>{e.setState((e=>{const o=e.data;return fn(o[t],r,t,this,n),{data:o}}))},this.setSettingsAtPath=(t,r)=>{e.setState((e=>{const n=e.data;return n[t].settings=Hr(Hr({},n[t].settings),r),{data:n}}))},this.disableInputAtPath=(t,r)=>{e.setState((e=>{const n=e.data;return n[t].disabled=r,{data:n}}))},this.set=(t,r)=>{e.setState((e=>{const n=e.data;return Object.entries(t).forEach((([e,t])=>{try{fn(n[e],t,void 0,void 0,r)}catch(o){}})),{data:n}}))},this.getInput=e=>{try{return this.getData()[e]}catch(t){Dr(jr.PATH_DOESNT_EXIST,e)}},this.get=e=>{var t;return null===(t=this.getInput(e))||void 0===t?void 0:t.value},this.emitOnEditStart=e=>{t.emit(`onEditStart:${e}`,this.get(e),e,Hr(Hr({},this.getInput(e)),{},{get:this.get}))},this.emitOnEditEnd=e=>{t.emit(`onEditEnd:${e}`,this.get(e),e,Hr(Hr({},this.getInput(e)),{},{get:this.get}))},this.subscribeToEditStart=(e,r)=>(t.on(`onEditStart:${e}`,r),()=>t.off(e,r)),this.subscribeToEditEnd=(e,r)=>(t.on(`onEditEnd:${e}`,r),()=>t.off(e,r));const o=(e,t,n)=>{const i={};return Object.entries(e).forEach((([e,a])=>{if(""===e)return Dr(jr.EMPTY_KEY);let c=ya(t,e);if(a.type===an.FOLDER){const e=o(a.schema,c,n);Object.assign(i,e),c in r||(r[c]=a.settings)}else if(e in n)Dr(jr.DUPLICATE_KEYS,e,c,n[e].path);else{const t=ln(a,e,c,i);if(t){const{type:r,options:o,input:a}=t,{onChange:s,transient:l,onEditStart:f,onEditEnd:u}=o,p=Cr(o,["onChange","transient","onEditStart","onEditEnd"]);i[c]=Hr(Hr(Hr({type:r},p),a),{},{fromPanel:!0}),n[e]={path:c,onChange:s,transient:l,onEditStart:f,onEditEnd:u}}else Dr(jr.UNKNOWN_INPUT,c,a)}})),i};this.getDataFromSchema=e=>{const t={};return[o(e,"",t),t]}},nc=new rc;const oc={collapsed:!1};function ic(e,t){return{type:an.FOLDER,schema:e,settings:Hr(Hr({},oc),t)}}function ac({toggle:e,toggled:t,name:r}){return o.a.createElement(qn,{onClick:()=>e()},o.a.createElement(oo,{toggled:t}),o.a.createElement("div",null,r))}function cc(e){let{type:t,label:r,path:n,valueKey:i,value:a,settings:c,setValue:s,disabled:l}=e,f=Cr(e,["type","label","path","valueKey","value","settings","setValue","disabled"]);const{displayValue:u,onChange:p,onUpdate:d}=ao({type:t,value:a,settings:c,setValue:s}),v=Mr[t].component;return v?o.a.createElement(yn.Provider,{value:Hr({key:i,path:n,id:""+n,label:r,displayValue:u,value:a,onChange:p,onUpdate:d,settings:c,setValue:s,disabled:l},f)},o.a.createElement(Xn,{disabled:l},o.a.createElement(v,null))):(Dr(jr.NO_COMPONENT_FOR_TYPE,t,n),null)}const sc=zn("button",{display:"block",$reset:"",fontWeight:"$button",color:"$highlight3",height:"$rowHeight",borderStyle:"none",borderRadius:"$sm",backgroundColor:"$accent2",cursor:"pointer",$hover:"$accent3",$active:"$accent3 $accent1",$focus:""});const lc=zn("div",{$flex:"",justifyContent:"flex-end",gap:"$colGap"}),fc=zn("button",{$reset:"",cursor:"pointer",borderRadius:"$xs","&:hover":{backgroundColor:"$elevation3"}});const uc=zn("canvas",{height:"$monitorHeight",width:"100%",display:"block",borderRadius:"$sm"});const pc=Object(n.forwardRef)((function({initialValue:e},t){const r=kn("colors","highlight3"),i=kn("colors","elevation2"),a=kn("colors","highlight1"),[c,s]=Object(n.useMemo)((()=>[qo()(a).setAlpha(.4).toRgbString(),qo()(a).setAlpha(.1).toRgbString()]),[a]),l=Object(n.useRef)([e]),f=Object(n.useRef)(e),u=Object(n.useRef)(e),p=Object(n.useRef)(),d=Object(n.useCallback)(((e,t)=>{if(!e)return;const{width:n,height:o}=e,a=new Path2D,p=n/100,d=.05*o;for(let r=0;r<l.current.length;r++){const e=p*r,t=o-Yr(l.current[r],f.current,u.current)*(o-2*d)-d;a.lineTo(e,t)}t.clearRect(0,0,n,o);const v=new Path2D(a);v.lineTo(p*(l.current.length+1),o),v.lineTo(0,o),v.lineTo(0,0);const h=t.createLinearGradient(0,0,0,o);h.addColorStop(0,c),h.addColorStop(1,s),t.fillStyle=h,t.fill(v),t.strokeStyle=i,t.lineJoin="round",t.lineWidth=14,t.stroke(a),t.strokeStyle=r,t.lineWidth=2,t.stroke(a)}),[r,i,c,s]),[v,h]=function(e){const t=Object(n.useRef)(null),r=Object(n.useRef)(null),o=Object(n.useRef)(!1);return Object(n.useEffect)((()=>{const n=dn((()=>{t.current.width=t.current.offsetWidth*window.devicePixelRatio,t.current.height=t.current.offsetHeight*window.devicePixelRatio,e(t.current,r.current)}),250);return window.addEventListener("resize",n),o.current||(n(),o.current=!0),()=>window.removeEventListener("resize",n)}),[e]),Object(n.useEffect)((()=>{r.current=t.current.getContext("2d")}),[]),[t,r]}(d);return Object(n.useImperativeHandle)(t,(()=>({frame:e=>{(void 0===f.current||e<f.current)&&(f.current=e),(void 0===u.current||e>u.current)&&(u.current=e),function(e,t){e.push(t),e.length>100&&e.shift()}(l.current,e),p.current=requestAnimationFrame((()=>d(v.current,h.current)))}})),[v,h,d]),Object(n.useEffect)((()=>()=>cancelAnimationFrame(p.current)),[]),o.a.createElement(uc,{ref:v})})),dc=e=>Number.isFinite(e)?e.toPrecision(2):e.toString(),vc=Object(n.forwardRef)((function({initialValue:e},t){const[r,i]=Object(n.useState)(dc(e));return Object(n.useImperativeHandle)(t,(()=>({frame:e=>i(dc(e))})),[]),o.a.createElement("div",null,r)}));function hc(e){return"function"===typeof e?e():e.current}const mc={[an.BUTTON]:function({onClick:e,label:t}){return o.a.createElement(io,null,o.a.createElement(sc,{onClick:()=>e()},t))},[an.BUTTON_GROUP]:function(e){const{label:t,opts:r}=(({label:e,opts:t})=>{let r="string"===typeof e&&""===e.trim()?null:e,n=t;return"object"===typeof t.opts&&(void 0!==n.label&&(r=t.label),n=t.opts),{label:r,opts:n}})(e);return o.a.createElement(io,{input:!!t},t&&o.a.createElement(ro,null,t),o.a.createElement(lc,null,Object.entries(r).map((([e,t])=>o.a.createElement(fc,{key:e,onClick:()=>t()},e)))))},[an.MONITOR]:function({label:e,objectOrFn:t,settings:r}){const i=Object(n.useRef)(),a=Object(n.useRef)(hc(t));return Object(n.useEffect)((()=>{const e=window.setInterval((()=>{var e;document.hidden||null===(e=i.current)||void 0===e||e.frame(hc(t))}),r.interval);return()=>window.clearInterval(e)}),[t,r.interval]),o.a.createElement(io,{input:!0},o.a.createElement(ro,{align:"top"},e),r.graph?o.a.createElement(pc,{ref:i,initialValue:a.current}):o.a.createElement(vc,{ref:i,initialValue:a.current}))}},gc=o.a.memo((({path:e})=>{const[t,{set:r,setSettings:i,disable:a,storeId:c,emitOnEditStart:s,emitOnEditEnd:l}]=function(e){const t=On(),[r,o]=Object(n.useState)(lo(t.getData(),e)),i=Object(n.useCallback)((r=>t.setValueAtPath(e,r,!0)),[e,t]),a=Object(n.useCallback)((r=>t.setSettingsAtPath(e,r)),[e,t]),c=Object(n.useCallback)((r=>t.disableInputAtPath(e,r)),[e,t]),s=Object(n.useCallback)((()=>t.emitOnEditStart(e)),[e,t]),l=Object(n.useCallback)((()=>t.emitOnEditEnd(e)),[e,t]);return Object(n.useEffect)((()=>{o(lo(t.getData(),e));const r=t.useStore.subscribe(o,(t=>lo(t.data,e)),h.a);return()=>r()}),[t,e]),[r,{set:i,setSettings:a,disable:c,storeId:t.storeId,emitOnEditStart:s,emitOnEditEnd:l}]}(e);if(!t)return null;const{type:f,label:u,key:p}=t,d=Cr(t,["type","label","key"]);if(f in an){const t=mc[f];return o.a.createElement(t,bn({label:u,path:e},d))}return f in Mr?o.a.createElement(cc,bn({key:c+e,type:f,label:u,storeId:c,path:e,valueKey:p,setValue:r,setSettings:i,disable:a,emitOnEditStart:s,emitOnEditEnd:l},d)):(Lr(jr.UNSUPPORTED_INPUT,f,e),null)})),xc=({name:e,path:t,tree:r})=>{const i=On(),a=ya(t,e),{collapsed:c}=i.getFolderSettings(a),[s,l]=Object(n.useState)(!c);return o.a.createElement(Fn,null,o.a.createElement(ac,{name:e,toggled:s,toggle:()=>l((e=>!e))}),o.a.createElement(bc,{parent:a,tree:r,toggled:s}))},bc=o.a.memo((({isRoot:e=!1,fill:t=!1,flat:r=!1,parent:i,tree:a,toggled:c})=>{const{wrapperRef:s,contentRef:l}=function(e){const t=Object(n.useRef)(null),r=Object(n.useRef)(null),o=Object(n.useRef)(!0);return Object(n.useLayoutEffect)((()=>{e||(t.current.style.height="0px",t.current.style.overflow="hidden")}),[]),Object(n.useEffect)((()=>{if(o.current)return void(o.current=!1);let n;const i=t.current,a=()=>{e&&(i.style.removeProperty("height"),i.style.removeProperty("overflow"),r.current.scrollIntoView({behavior:"smooth",block:"nearest"}))};i.addEventListener("transitionend",a,{once:!0});const{height:c}=r.current.getBoundingClientRect();return i.style.height=c+"px",e||(i.style.overflow="hidden",n=window.setTimeout((()=>i.style.height="0px"),50)),()=>{i.removeEventListener("transitionend",a),clearTimeout(n)}}),[e]),{wrapperRef:t,contentRef:r}}(c);return o.a.createElement(Bn,{ref:s,isRoot:e,fill:t,flat:r},o.a.createElement(Gn,{ref:l,isRoot:e,toggled:c},Object.entries(a).map((([e,t])=>"__levaInput"in t?o.a.createElement(gc,{key:t.path,valueKey:t.valueKey,path:t.path}):o.a.createElement(xc,{key:e,name:e,path:i,tree:t})))))})),yc=zn("div",{position:"relative",fontFamily:"$mono",fontSize:"$root",color:"$rootText",backgroundColor:"$elevation1",variants:{fill:{false:{position:"fixed",top:"10px",right:"10px",zIndex:1e3,width:"$rootWidth"},true:{position:"relative",width:"100%"}},flat:{false:{borderRadius:"$lg",boxShadow:"$level1"}},oneLineLabels:{true:{[`${Hn}`]:{gridTemplateColumns:"auto",gridAutoColumns:"minmax(max-content, 1fr)",gridAutoRows:"minmax($sizes$rowHeight), auto)",rowGap:0,columnGap:0,marginTop:"$rowGap"}}},hideTitleBar:{true:{$$titleBarHeight:"0px"},false:{$$titleBarHeight:"$sizes$titleBarHeight"}}},"&,*,*:after,*:before":{boxSizing:"border-box"},"*::selection":{backgroundColor:"$accent2"}}),wc=zn("i",{$flexCenter:"",width:40,userSelect:"none",cursor:"pointer","> svg":{fill:"$highlight1",transition:"transform 350ms ease, fill 250ms ease"},"&:hover > svg":{fill:"$highlight3"},variants:{active:{true:{"> svg":{fill:"$highlight2"}}}}}),_c=zn("div",{display:"flex",alignItems:"stretch",justifyContent:"space-between",height:"$titleBarHeight",variants:{mode:{drag:{cursor:"grab"}}}}),Sc=zn("div",{$flex:"",position:"relative",width:"100%",overflow:"hidden",transition:"height 250ms ease",color:"$highlight3",paddingLeft:"$md",[`> ${wc}`]:{height:30},variants:{toggled:{true:{height:30},false:{height:0}}}}),Ec=zn("input",{$reset:"",flex:1,position:"relative",height:30,width:"100%",backgroundColor:"transparent",fontSize:"10px",borderRadius:"$root","&:focus":{},"&::placeholder":{color:"$highlight2"}}),Oc=zn("div",{$flexCenter:"",flex:1,"> svg":{fill:"$highlight1"},color:"$highlight1",variants:{drag:{true:{$draggable:"","> svg":{transition:"fill 250ms ease"},"&:hover":{color:"$highlight3"},"&:hover > svg":{fill:"$highlight3"}}},filterEnabled:{false:{paddingRight:40}}}}),Rc=o.a.forwardRef((({setFilter:e,toggle:t},r)=>{const[i,a]=Object(n.useState)(""),c=Object(n.useMemo)((()=>dn(e,250)),[e]);return Object(n.useEffect)((()=>{c(i)}),[i,c]),o.a.createElement(o.a.Fragment,null,o.a.createElement(Ec,{ref:r,value:i,placeholder:"[Open filter with CMD+SHIFT+L]",onPointerDown:e=>e.stopPropagation(),onChange:e=>{const r=e.currentTarget.value;t(!0),a(r)}}),o.a.createElement(wc,{onClick:()=>(e(""),void a("")),style:{visibility:i?"visible":"hidden"}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"14",width:"14",viewBox:"0 0 20 20",fill:"currentColor"},o.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"}))))}));function Pc({setFilter:e,onDrag:t,toggle:r,toggled:i,title:a,drag:c,filterEnabled:s}){const[l,f]=Object(n.useState)(!1),u=Object(n.useRef)(null);Object(n.useEffect)((()=>{var e,t;l?null===(e=u.current)||void 0===e||e.focus():null===(t=u.current)||void 0===t||t.blur()}),[l]);const p=Pt((({offset:[e,r]})=>t({x:e,y:r})),{filterTaps:!0});return Object(n.useEffect)((()=>{const e=e=>{"L"===e.key&&e.shiftKey&&e.metaKey&&f((e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(_c,{mode:c?"drag":void 0},o.a.createElement(wc,{active:!i,onClick:()=>r()},o.a.createElement(oo,{toggled:i,width:12,height:8})),o.a.createElement(Oc,bn({},c?p():{},{drag:c,filterEnabled:s}),void 0===a&&c?o.a.createElement("svg",{width:"20",height:"10",viewBox:"0 0 28 14",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("circle",{cx:"2",cy:"2",r:"2"}),o.a.createElement("circle",{cx:"14",cy:"2",r:"2"}),o.a.createElement("circle",{cx:"26",cy:"2",r:"2"}),o.a.createElement("circle",{cx:"2",cy:"12",r:"2"}),o.a.createElement("circle",{cx:"14",cy:"12",r:"2"}),o.a.createElement("circle",{cx:"26",cy:"12",r:"2"})):a),s&&o.a.createElement(wc,{active:l,onClick:()=>f((e=>!e))},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M9 9a2 2 0 114 0 2 2 0 01-4 0z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",clipRule:"evenodd"})))),o.a.createElement(Sc,{toggled:l},o.a.createElement(Rc,{ref:u,setFilter:e,toggle:r})))}function zc(e){let{store:t,hidden:r=!1,theme:i,collapsed:a=!1}=e,c=Cr(e,["store","hidden","theme","collapsed"]);const s=wa((()=>function(e){const t={colors:{elevation1:"#292d39",elevation2:"#181c20",elevation3:"#373c4b",accent1:"#0066dc",accent2:"#007bff",accent3:"#3c93ff",highlight1:"#535760",highlight2:"#8c92a4",highlight3:"#fefefe",vivid1:"#ffcc00",toolTipBackground:"$highlight3",toolTipText:"$elevation2"},radii:{xs:"2px",sm:"3px",lg:"10px"},space:{xs:"3px",sm:"6px",md:"10px",rowGap:"7px",colGap:"7px"},fonts:{mono:"ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace",sans:"system-ui, sans-serif"},fontSizes:{root:"11px",toolTip:"$root"},sizes:{rootWidth:"280px",controlWidth:"160px",numberInputMinWidth:"38px",scrubberWidth:"8px",scrubberHeight:"16px",rowHeight:"24px",folderTitleHeight:"20px",checkboxSize:"16px",joystickWidth:"100px",joystickHeight:"100px",colorPickerWidth:"$controlWidth",colorPickerHeight:"100px",imagePreviewWidth:"$controlWidth",imagePreviewHeight:"100px",monitorHeight:"60px",titleBarHeight:"39px"},shadows:{level1:"0 0 9px 0 #00000088",level2:"0 4px 14px #00000033"},borderWidths:{root:"0px",input:"1px",focus:"1px",hover:"1px",active:"1px",folder:"1px"},fontWeights:{label:"normal",folder:"normal",button:"normal"}};if(!e)return{theme:t,className:""};Object.keys(e).forEach((r=>{Object.assign(t[r],e[r])}));const r=In(e).className;return{theme:t,className:r}}(i)),[i]),[l,f]=Object(n.useState)(!a);return!t||r?null:o.a.createElement(_n.Provider,{value:s},o.a.createElement(Tc,bn({store:t},c,{toggled:l,setToggle:f,rootClass:s.className})))}const Tc=o.a.memo((({store:e,rootClass:t,fill:r=!1,flat:i=!1,oneLineLabels:a=!1,titleBar:c={title:void 0,drag:!0,filter:!0},hideCopyButton:s=!1,toggled:l,setToggle:f})=>{var u,p;const d=(e=>{const[t,r]=Object(n.useState)(e.getVisiblePaths());return Object(n.useEffect)((()=>{r(e.getVisiblePaths());const t=e.useStore.subscribe(r,e.getVisiblePaths,h.a);return()=>t()}),[e]),t})(e),[v,m]=Object(n.useState)(""),g=Object(n.useMemo)((()=>((e,t)=>{const r={},n=t?t.toLowerCase():null;return e.forEach((e=>{const[t,o]=function(e){const t=e.split(".");return[t.pop(),t.join(".")||void 0]}(e);(!n||t.toLowerCase().indexOf(n)>-1)&&ba()(r,o,{[t]:{__levaInput:!0,path:e}})})),r})(d,v)),[d,v]),[x,b]=so(),y=d.length>0,w="object"===typeof c&&c.title||void 0,_="object"!==typeof c||(null===(u=c.drag)||void 0===u||u),S="object"!==typeof c||(null===(p=c.filter)||void 0===p||p);return o.a.createElement(En.Provider,{value:{hideCopyButton:s}},o.a.createElement(yc,{ref:x,className:t,fill:r,flat:i,oneLineLabels:a,hideTitleBar:!c,style:{display:y?"block":"none"}},c&&o.a.createElement(Pc,{onDrag:b,setFilter:m,toggle:e=>f((t=>null!==e&&void 0!==e?e:!t)),toggled:l,title:w,drag:_,filterEnabled:S}),y&&o.a.createElement(Sn.Provider,{value:e},o.a.createElement(bc,{isRoot:!0,fill:r,flat:i,tree:g,toggled:l}))))}));let Ic=!1,Cc=null;function jc(e){let{isRoot:t=!1}=e,r=Cr(e,["isRoot"]);return Object(n.useEffect)((()=>(Ic=!0,!t&&Cc&&(Cc.remove(),Cc=null),()=>{t||(Ic=!1)})),[t]),o.a.createElement(zc,bn({store:nc},r))}function kc(e,t,r,i,a){const{folderName:c,schema:s,folderSettings:l,hookSettings:u,deps:p}=function(e,t,r,n,o){let i,a,c,s,l;return"string"===typeof e?(a=e,i=t,Array.isArray(r)?l=r:r&&("store"in r?(s=r,l=n):(c=r,Array.isArray(n)?l=n:(s=n,l=o)))):(i=e,Array.isArray(t)?l=t:(s=t,l=r)),{schema:i,folderName:a,folderSettings:c,hookSettings:s,deps:l||[]}}(e,t,r,i,a),d="function"===typeof s,v=Object(n.useRef)(!1),m=Object(n.useRef)(!0),g=wa((()=>{v.current=!0;const e="function"===typeof s?s():s;return c?{[c]:ic(e,l)}:e}),p);!function(e){Object(n.useEffect)((()=>{e&&!Ic&&(Cc||(Cc=document.getElementById("leva__root")||Object.assign(document.createElement("div"),{id:"leva__root"}),document.body&&(document.body.appendChild(Cc),f.a.render(o.a.createElement(jc,{isRoot:!0}),Cc))),Ic=!0)}),[e])}(!(null!==u&&void 0!==u&&u.store));const[x]=Object(n.useState)((()=>(null===u||void 0===u?void 0:u.store)||nc)),[b,y]=Object(n.useMemo)((()=>x.getDataFromSchema(g)),[x,g]),[w,_,S,E,O]=Object(n.useMemo)((()=>{const e=[],t=[],r={},n={},o={};return Object.values(y).forEach((({path:i,onChange:a,onEditStart:c,onEditEnd:s,transient:l})=>{e.push(i),a?(r[i]=a,l||t.push(i)):t.push(i),c&&(n[i]=c),s&&(o[i]=s)})),[e,t,r,n,o]}),[y]),R=Object(n.useMemo)((()=>x.orderPaths(w)),[w,x]),P=_a(x,_,b),z=Object(n.useCallback)((e=>{const t=Object.entries(e).reduce(((e,[t,r])=>Object.assign(e,{[y[t].path]:r})),{});x.set(t,!1)}),[x,y]);return Object(n.useEffect)((()=>{const e=!m.current&&v.current;return x.addData(b,e),m.current=!1,v.current=!1,()=>x.disposePaths(R)}),[x,R,b]),Object(n.useEffect)((()=>{const e=[];return Object.entries(S).forEach((([t,r])=>{r(x.get(t),t,Hr({initial:!0,get:x.get},x.getInput(t)));const n=x.useStore.subscribe((([e,n])=>r(e,t,Hr({initial:!1,get:x.get},n))),(e=>{const r=e.data[t];return[r.disabled?void 0:r.value,r]}),h.a);e.push(n)})),()=>e.forEach((e=>e()))}),[x,S]),Object(n.useEffect)((()=>{const e=[];return Object.entries(E).forEach((([t,r])=>e.push(x.subscribeToEditStart(t,r)))),Object.entries(O).forEach((([t,r])=>e.push(x.subscribeToEditEnd(t,r)))),()=>e.forEach((e=>e()))}),[E,O,x]),d?[P,z]:P}Fr(cn.SELECT,Ro),Fr(cn.IMAGE,Xa),Fr(cn.NUMBER,yo),Fr(cn.COLOR,ka),Fr(cn.STRING,zo),Fr(cn.BOOLEAN,jo),Fr(cn.INTERVAL,tc),Fr(cn.VECTOR3D,Aa),Fr(cn.VECTOR2D,Fa)},B9vp:function(e,t,r){var n=r("4Z/T").sprintf,o=r("tCpK"),i=r("st01"),a=r("kR76");e.exports=function(e,t,r){"use strict";var c=i(t)||"of unknown name (see npm glsl-shader-name)",s="unknown type";void 0!==r&&(s=r===o.FRAGMENT_SHADER?"fragment":"vertex");for(var l=n("Error compiling %s shader %s:\n",s,c),f=n("%s%s",l,e),u=e.split("\n"),p={},d=0;d<u.length;d++){var v=u[d];if(""!==v&&"\0"!==v){var h=parseInt(v.split(":")[2]);if(isNaN(h))throw new Error(n("Could not parse error: %s",v));p[h]=v}}var m=a(t).split("\n");for(d=0;d<m.length;d++)if(p[d+3]||p[d+2]||p[d+1]){var g=m[d];if(l+=g+"\n",p[d+1]){var x=p[d+1];x=x.substr(x.split(":",3).join(":").length+1).trim(),l+=n("^^^ %s\n\n",x)}}return{long:l.trim(),short:f.trim()}}},BEtg:function(e,t){function r(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},BkhO:function(e,t,r){var n=r("Xs3h");n=n.slice().filter((function(e){return!/^(gl\_|texture)/.test(e)})),e.exports=n.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"])},CyWo:function(e,t,r){"use strict";var n=r("evCr");function o(e,t,r,n){var i=e.indexOf(t,r);return"\\"===e.charAt(i-1)?o(e,t,i+1):i}function i(e,t){return!0===t.keepDoubleQuotes&&'"'===e||(!0===t.keepSingleQuotes&&"'"===e||t.keepQuotes)}function a(e,t,r){return"function"===typeof e.keepEscaping?e.keepEscaping(t,r):!0===e.keepEscaping||"\\"===t[r+1]}e.exports=function(e,t,r){if("string"!==typeof e)throw new TypeError("expected a string");"function"===typeof t&&(r=t,t=null),"string"===typeof t&&(t={sep:t});var c,s=n({sep:"."},t),l=s.quotes||['"',"'","`"];!0===s.brackets?c={"<":">","(":")","[":"]","{":"}"}:s.brackets&&(c=s.brackets);var f,u=[],p=[],d=[""],v=s.sep,h=e.length,m=-1;function g(){if(c&&p.length)return c[p[p.length-1]]}for(;++m<h;){var x=e[m],b=e[m+1],y={val:x,idx:m,arr:d,str:e};if(u.push(y),"\\"!==x){if(c&&c[x]){p.push(x);var w=g(),_=m+1;if(-1!==e.indexOf(w,_+1))for(;p.length&&_<h;){var S=e[++_];if("\\"!==S)if(-1===l.indexOf(S)){if(w=g(),p.length&&-1===e.indexOf(w,_+1))break;c[S]?p.push(S):w===S&&p.pop()}else _=o(e,S,_+1);else S++}if(-1===(f=_)){d[d.length-1]+=x;continue}x=e.slice(m,f+1),y.val=x,y.idx=m=f}if(-1!==l.indexOf(x)){if(-1===(f=o(e,x,m+1))){d[d.length-1]+=x;continue}x=!0===i(x,s)?e.slice(m,f+1):e.slice(m+1,f),y.val=x,y.idx=m=f}"function"===typeof r&&(r(y,u),x=y.val,m=y.idx),y.val!==v||!1===y.split?d[d.length-1]+=y.val:d.push("")}else y.val=!0===a(s,e,m)?x+b:b,y.escaped=!0,"function"===typeof r&&r(y),d[d.length-1]+=y.val,m++}return d}},Cz5J:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(e,t,r)=>{let n;return"webgl2"!==r&&"auto"!==r||(n=e.getContext("webgl2",t)),n||"webgl"!==r&&"auto"!==r||(n=e.getContext("webgl",t)||e.getContext("webgl-experimental",t)||e.getContext("experimental-webgl",t)),n};t.default=n},EEdt:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("TGEO");class o extends n.WebGLTextureLoaderAsyncHashCache{canLoad(e){return e instanceof HTMLVideoElement}inputHash(e){return e}loadNoCache(e){const{gl:t}=this,{width:r,height:n}=e;let o;return{dispose:()=>{clearTimeout(o)},promise:new Promise(((r,n)=>{const i=()=>{if(e.videoWidth>0){const n=t.createTexture(),{videoWidth:o,videoHeight:i}=e;t.bindTexture(t.TEXTURE_2D,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),r({texture:n,width:o,height:i})}else o=setTimeout(i,100)};i()}))}}update(e){const{gl:t}=this,r=this.get(e);r&&(t.bindTexture(t.TEXTURE_2D,r.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e))}}n.globalRegistry.add(o);var i=o;t.default=i},F16p:function(e,t,r){"use strict";e.exports=function(e,t,r){return 0===e.length?e:t?(r||e.sort(t),function(e,t){for(var r=1,n=e.length,o=e[0],i=e[0],a=1;a<n;++a)if(i=o,t(o=e[a],i)){if(a===r){r++;continue}e[r++]=o}return e.length=r,e}(e,t)):(r||e.sort(),function(e){for(var t=1,r=e.length,n=e[0],o=e[0],i=1;i<r;++i,o=n)if(o=n,(n=e[i])!==o){if(i===t){t++;continue}e[t++]=n}return e.length=t,e}(e))}},FRc1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=a(r("JwSf")),i=a(r("M/JY"));function a(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u extends n.Component{constructor(...e){super(...e),f(this,"_node",void 0),f(this,"_onRef",(e=>{this._node=e}))}getNodeRef(){return this._node}render(){const e=this.props,{children:t}=e,r=l(e,["children"]);return n.default.createElement(o.default,s({},r,{ref:this._onRef,shader:i.default,blendFunc:{src:"one",dst:"one minus src alpha"},uniformsOptions:{t:{interpolation:"nearest"}},uniforms:{t:t}}))}}var p=u;t.default=p},GTa7:function(e,t){e.exports=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]},H7XF:function(e,t,r){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,n=l(e),a=n[0],c=n[1],s=new i(function(e,t,r){return 3*(t+r)/4-r}(0,a,c)),f=0,u=c>0?a-4:a;for(r=0;r<u;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],s[f++]=t>>16&255,s[f++]=t>>8&255,s[f++]=255&t;2===c&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,s[f++]=255&t);1===c&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,s[f++]=t>>8&255,s[f++]=255&t);return s},t.fromByteArray=function(e){for(var t,r=e.length,o=r%3,i=[],a=16383,c=0,s=r-o;c<s;c+=a)i.push(f(e,c,c+a>s?s:c+a));1===o?(t=e[r-1],i.push(n[t>>2]+n[t<<4&63]+"==")):2===o&&(t=(e[r-2]<<8)+e[r-1],i.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return i.join("")};for(var n=[],o=[],i="undefined"!==typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,s=a.length;c<s;++c)n[c]=a[c],o[a.charCodeAt(c)]=c;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function f(e,t,r){for(var o,i,a=[],c=t;c<r;c+=3)o=(e[c]<<16&16711680)+(e[c+1]<<8&65280)+(255&e[c+2]),a.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return a.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},HDXh:function(e,t,r){"use strict";(function(e){var n=r("H7XF"),o=r("kVK+"),i=r("49sm");function a(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function c(e,t){if(a()<t)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=s.prototype:(null===e&&(e=new s(t)),e.length=t),e}function s(e,t,r){if(!s.TYPED_ARRAY_SUPPORT&&!(this instanceof s))return new s(e,t,r);if("number"===typeof e){if("string"===typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(this,e)}return l(this,e,t,r)}function l(e,t,r,n){if("number"===typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n);s.TYPED_ARRAY_SUPPORT?(e=t).__proto__=s.prototype:e=p(e,t);return e}(e,t,r,n):"string"===typeof t?function(e,t,r){"string"===typeof r&&""!==r||(r="utf8");if(!s.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(t,r),o=(e=c(e,n)).write(t,r);o!==n&&(e=e.slice(0,o));return e}(e,t,r):function(e,t){if(s.isBuffer(t)){var r=0|d(t.length);return 0===(e=c(e,r)).length||t.copy(e,0,0,r),e}if(t){if("undefined"!==typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!==typeof t.length||(n=t.length)!==n?c(e,0):p(e,t);if("Buffer"===t.type&&i(t.data))return p(e,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function f(e){if("number"!==typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function u(e,t){if(f(t),e=c(e,t<0?0:0|d(t)),!s.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function p(e,t){var r=t.length<0?0:0|d(t.length);e=c(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function d(e){if(e>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|e}function v(e,t){if(s.isBuffer(e))return e.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!==typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return B(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return q(e).length;default:if(n)return B(e).length;t=(""+t).toLowerCase(),n=!0}}function h(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return I(this,t,r);case"utf8":case"utf-8":return R(this,t,r);case"ascii":return z(this,t,r);case"latin1":case"binary":return T(this,t,r);case"base64":return O(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function m(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function g(e,t,r,n,o){if(0===e.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"===typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:x(e,t,r,n,o);if("number"===typeof t)return t&=255,s.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):x(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function x(e,t,r,n,o){var i,a=1,c=e.length,s=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,c/=2,s/=2,r/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){var f=-1;for(i=r;i<c;i++)if(l(e,i)===l(t,-1===f?0:i-f)){if(-1===f&&(f=i),i-f+1===s)return f*a}else-1!==f&&(i-=i-f),f=-1}else for(r+s>c&&(r=c-s),i=r;i>=0;i--){for(var u=!0,p=0;p<s;p++)if(l(e,i+p)!==l(t,p)){u=!1;break}if(u)return i}return-1}function b(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;if(i%2!==0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var a=0;a<n;++a){var c=parseInt(t.substr(2*a,2),16);if(isNaN(c))return a;e[r+a]=c}return a}function y(e,t,r,n){return G(B(t,e.length-r),e,r,n)}function w(e,t,r,n){return G(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function _(e,t,r,n){return w(e,t,r,n)}function S(e,t,r,n){return G(q(t),e,r,n)}function E(e,t,r,n){return G(function(e,t){for(var r,n,o,i=[],a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,o=r%256,i.push(o),i.push(n);return i}(t,e.length-r),e,r,n)}function O(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function R(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,a,c,s,l=e[o],f=null,u=l>239?4:l>223?3:l>191?2:1;if(o+u<=r)switch(u){case 1:l<128&&(f=l);break;case 2:128===(192&(i=e[o+1]))&&(s=(31&l)<<6|63&i)>127&&(f=s);break;case 3:i=e[o+1],a=e[o+2],128===(192&i)&&128===(192&a)&&(s=(15&l)<<12|(63&i)<<6|63&a)>2047&&(s<55296||s>57343)&&(f=s);break;case 4:i=e[o+1],a=e[o+2],c=e[o+3],128===(192&i)&&128===(192&a)&&128===(192&c)&&(s=(15&l)<<18|(63&i)<<12|(63&a)<<6|63&c)>65535&&s<1114112&&(f=s)}null===f?(f=65533,u=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),o+=u}return function(e){var t=e.length;if(t<=P)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=P));return r}(n)}t.Buffer=s,t.SlowBuffer=function(e){+e!=e&&(e=0);return s.alloc(+e)},t.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"===typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}(),t.kMaxLength=a(),s.poolSize=8192,s._augment=function(e){return e.__proto__=s.prototype,e},s.from=function(e,t,r){return l(null,e,t,r)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(e,t,r){return function(e,t,r,n){return f(t),t<=0?c(e,t):void 0!==r?"string"===typeof n?c(e,t).fill(r,n):c(e,t).fill(r):c(e,t)}(null,e,t,r)},s.allocUnsafe=function(e){return u(null,e)},s.allocUnsafeSlow=function(e){return u(null,e)},s.isBuffer=function(e){return!(null==e||!e._isBuffer)},s.compare=function(e,t){if(!s.isBuffer(e)||!s.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){if(!i(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=s.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var a=e[r];if(!s.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,o),o+=a.length}return n},s.byteLength=v,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)m(this,t,t+1);return this},s.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},s.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},s.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?R(this,0,e):h.apply(this,arguments)},s.prototype.equals=function(e){if(!s.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},s.prototype.compare=function(e,t,r,n,o){if(!s.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return-1;if(t>=r)return 1;if(this===e)return 0;for(var i=(o>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0),c=Math.min(i,a),l=this.slice(n,o),f=e.slice(t,r),u=0;u<c;++u)if(l[u]!==f[u]){i=l[u],a=f[u];break}return i<a?-1:a<i?1:0},s.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)},s.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"===typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,e,t,r);case"utf8":case"utf-8":return y(this,e,t,r);case"ascii":return w(this,e,t,r);case"latin1":case"binary":return _(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var P=4096;function z(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function T(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function I(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=F(e[i]);return o}function C(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function j(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function k(e,t,r,n,o,i){if(!s.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function A(e,t,r,n){t<0&&(t=65535+t+1);for(var o=0,i=Math.min(e.length-r,2);o<i;++o)e[r+o]=(t&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function D(e,t,r,n){t<0&&(t=4294967295+t+1);for(var o=0,i=Math.min(e.length-r,4);o<i;++o)e[r+o]=t>>>8*(n?o:3-o)&255}function L(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function N(e,t,r,n,i){return i||L(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function M(e,t,r,n,i){return i||L(e,0,r,8),o.write(e,t,r,n,52,8),r+8}s.prototype.slice=function(e,t){var r,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),s.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=s.prototype;else{var o=t-e;r=new s(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+e]}return r},s.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||j(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},s.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||j(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},s.prototype.readUInt8=function(e,t){return t||j(e,1,this.length),this[e]},s.prototype.readUInt16LE=function(e,t){return t||j(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUInt16BE=function(e,t){return t||j(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUInt32LE=function(e,t){return t||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUInt32BE=function(e,t){return t||j(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||j(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},s.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||j(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},s.prototype.readInt8=function(e,t){return t||j(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},s.prototype.readInt16LE=function(e,t){t||j(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){t||j(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return t||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return t||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readFloatLE=function(e,t){return t||j(e,4,this.length),o.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return t||j(e,4,this.length),o.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return t||j(e,8,this.length),o.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return t||j(e,8,this.length),o.read(this,e,!1,52,8)},s.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||k(this,e,t,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},s.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||k(this,e,t,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},s.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,1,255,0),s.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):A(this,e,t,!0),t+2},s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):A(this,e,t,!1),t+2},s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):D(this,e,t,!0),t+4},s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):D(this,e,t,!1),t+4},s.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var o=Math.pow(2,8*r-1);k(this,e,t,r,o-1,-o)}var i=0,a=1,c=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===c&&0!==this[t+i-1]&&(c=1),this[t+i]=(e/a>>0)-c&255;return t+r},s.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var o=Math.pow(2,8*r-1);k(this,e,t,r,o-1,-o)}var i=r-1,a=1,c=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===c&&0!==this[t+i+1]&&(c=1),this[t+i]=(e/a>>0)-c&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,1,127,-128),s.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):A(this,e,t,!0),t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):A(this,e,t,!1),t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):D(this,e,t,!0),t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||k(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),s.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):D(this,e,t,!1),t+4},s.prototype.writeFloatLE=function(e,t,r){return N(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return N(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return M(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return M(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o,i=n-r;if(this===e&&r<t&&t<n)for(o=i-1;o>=0;--o)e[o+t]=this[o+r];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+i),t);return i},s.prototype.fill=function(e,t,r,n){if("string"===typeof e){if("string"===typeof t?(n=t,t=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"===typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"===typeof e)for(i=t;i<r;++i)this[i]=e;else{var a=s.isBuffer(e)?e:B(new s(e,n).toString()),c=a.length;for(i=0;i<r-t;++i)this[i+t]=a[i%c]}return this};var U=/[^+\/0-9A-Za-z-_]/g;function F(e){return e<16?"0"+e.toString(16):e.toString(16)}function B(e,t){var r;t=t||1/0;for(var n=e.length,o=null,i=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function q(e){return n.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(U,"")).length<2)return"";for(;e.length%4!==0;)e+="=";return e}(e))}function G(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}}).call(this,r("ntbh"))},HbIt:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e){var t,r,n;n=void 0,(r="gl")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,this.gl=e}dispose(){}canLoad(e){return!1}load(e){return Promise.reject("load() is not implemented")}get(e){return null}update(e){}}},IDFI:function(e,t,r){"use strict";e.exports=function(e){for(var t=new Array(e),r=0;r<e;++r)t[r]=r;return t}},IrQ8:function(e,t,r){"use strict";t.shader=function(e,t,r){return f(e).getShaderReference(t,r)},t.program=function(e,t,r,n,o){return f(e).getProgram(t,r,n,o)};var n=r("o/2B"),o=r("B9vp"),i=new("undefined"===typeof WeakMap?r("/MXg"):WeakMap),a=0;function c(e,t,r,n,o,i,a){this.id=e,this.src=t,this.type=r,this.shader=n,this.count=i,this.programs=[],this.cache=a}function s(e){this.gl=e,this.shaders=[{},{}],this.programs={}}c.prototype.dispose=function(){if(0===--this.count){for(var e=this.cache,t=e.gl,r=this.programs,n=0,o=r.length;n<o;++n){var i=e.programs[r[n]];i&&(delete e.programs[n],t.deleteProgram(i))}t.deleteShader(this.shader),delete e.shaders[this.type===t.FRAGMENT_SHADER|0][this.src]}};var l=s.prototype;function f(e){var t=i.get(e);return t||(t=new s(e),i.set(e,t)),t}l.getShaderReference=function(e,t){var r=this.gl,i=this.shaders[e===r.FRAGMENT_SHADER|0],s=i[t];if(s&&r.isShader(s.shader))s.count+=1;else{var l=function(e,t,r){var i=e.createShader(t);if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){var a=e.getShaderInfoLog(i);try{var c=o(a,r,t)}catch(s){throw console.warn("Failed to format compiler error: "+s),new n(a,"Error compiling shader:\n"+a)}throw new n(a,c.short,c.long)}return i}(r,e,t);s=i[t]=new c(a++,t,e,l,[],1,this)}return s},l.getProgram=function(e,t,r,o){var i=[e.id,t.id,r.join(":"),o.join(":")].join("@"),a=this.programs[i];return a&&this.gl.isProgram(a)||(this.programs[i]=a=function(e,t,r,o,i){var a=e.createProgram();e.attachShader(a,t),e.attachShader(a,r);for(var c=0;c<o.length;++c)e.bindAttribLocation(a,i[c],o[c]);if(e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){var s=e.getProgramInfoLog(a);throw new n(s,"Error linking program: "+s)}return a}(this.gl,e.shader,t.shader,r,o),e.programs.push(i),t.programs.push(i)),a}},JwSf:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=h(r("QLaP")),o=v(r("q1tI")),i=h(r("17x9")),a=h(r("zqV6")),c=h(r("tbvF")),s=h(r("nXQg")),l=h(r("dLFq")),f=v(r("laZL")),u=h(r("Um7X")),p=h(r("5lXm"));function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function v(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const b={zero:"ZERO",one:"ONE","src color":"SRC_COLOR","one minus src color":"ONE_MINUS_SRC_COLOR","src alpha":"SRC_ALPHA","one minus src alpha":"ONE_MINUS_SRC_ALPHA","dst color":"DST_COLOR","one minus dst color":"ONE_MINUS_DST_COLOR","dst alpha":"DST_ALPHA","one minus dst alpha":"ONE_MINUS_DST_ALPHA","constant color":"CONSTANT_COLOR","one minus constant color":"ONE_MINUS_CONSTANT_COLOR","constant alpha":"CONSTANT_ALPHA","one minus constant alpha":"ONE_MINUS_CONSTANT_ALPHA","src alpha saturate":"SRC_ALPHA_SATURATE"},y=({width:e,height:t},{glSizable:r})=>{if(e&&t)return[e,t];const[n,o]=r.getGLSize();return[e||n,t||o]},w=(e,t)=>{if(t in e)return e[t];if(t in b){const r=b[t];if(r in e)return e[r]}console.warn("Invalid blendFunc. Got:",t)},_=(e,t)=>{switch(t){case"clamp to edge":return e.CLAMP_TO_EDGE;case"repeat":return e.REPEAT;case"mirrored repeat":return e.MIRRORED_REPEAT;default:return console.warn("Invalid wrap. Got:",t),e.CLAMP_TO_EDGE}},S=(e,t,r)=>{var n=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,n);var o=e.createTexture();if(!o)throw new Error("createTexture returned null");return e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),{handle:n,color:o,bind:()=>{e.bindFramebuffer(e.FRAMEBUFFER,n),e.viewport(0,0,t,r)},syncSize:(n,i)=>{n===t&&i===r||(t=n,r=i,e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,i,0,e.RGBA,e.UNSIGNED_BYTE,null))},dispose:()=>{e.deleteFramebuffer(n),e.deleteTexture(o)}}},E={interpolation:"linear",wrap:["clamp to edge","clamp to edge"]},O=(e,t)=>{const r=g(g({},E),t);let n,o,i=((e,t)=>{switch(t){case"linear":return e.LINEAR;case"nearest":return e.NEAREST;default:return console.warn("Invalid interpolation. Got:",t),e.LINEAR}})(e,r.interpolation);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),Array.isArray(r.wrap)?2!==r.wrap.length?(console.warn("textureOptions wrap: should be an array of 2 values. Got:",r.wrap),n=o=e.CLAMP_TO_EDGE):(n=_(e,r.wrap[0]),o=_(e,r.wrap[1])):n=o=_(e,r.wrap),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,o)},R={shader:i.default.object.isRequired,uniformsOptions:i.default.object,uniforms:i.default.object,ignoreUnusedUniforms:i.default.any,sync:i.default.bool,width:i.default.number,height:i.default.number,children:i.default.any,backbuffering:i.default.bool,blendFunc:i.default.object,clear:i.default.object,onDraw:i.default.func};class P extends o.Component{constructor(...e){super(...e),x(this,"drawProps",this.props),x(this,"context",void 0),x(this,"framebuffer",void 0),x(this,"backbuffer",void 0),x(this,"_needsRedraw",!1),x(this,"capturePixelsArray",void 0),x(this,"id",(0,p.default)()),x(this,"uniformsBus",{}),x(this,"dependencies",[]),x(this,"dependents",[]),x(this,"_resolveElement",((e,t,r)=>{if(!o.default.isValidElement(t)){if("function"!==typeof t)return;if(t=t(this.redraw),!o.default.isValidElement(t))return}return o.default.createElement(l.default,{key:e+(r?"."+r:""),uniform:e,index:r},t)})),x(this,"_renderUniformElement",(e=>{const{uniforms:t}=this.props;let r=t[e];return Array.isArray(r)?r.map(((t,r)=>this._resolveElement(e,t,r))):this._resolveElement(e,r,0)})),x(this,"redraw",(()=>{this._needsRedraw||(this._needsRedraw=!0,this.dependents.forEach((e=>e.redraw())))})),x(this,"flush",(()=>{this.context.glSurface._draw()})),x(this,"_latestShaderInfo",void 0),x(this,"_shader",void 0)}getChildContext(){return{glParent:this,glSizable:this}}componentDidMount(){const{glSurface:{gl:e}}=this.context;e&&this._prepareGLObjects(e),this.context.glParent._addGLNodeChild(this),this.redraw(),this.props.sync&&this.flush()}componentWillUnmount(){const{capturePixelsArray:e}=this;this._destroyGLObjects(),e&&a.default.freeUint8(e),this._needsRedraw=!1,this.context.glParent._removeGLNodeChild(this),this.dependencies.forEach((e=>e._removeDependent(this)))}_syncNextDrawProps(e,t){const r=y(e,t);this.framebuffer&&this.framebuffer.syncSize(...r),this.backbuffer&&this.backbuffer.syncSize(...r),(0,n.default)(e.backbuffering===this.drawProps.backbuffering,"Node backbuffering prop must not changed. (not yet supported)"),this.drawProps=e}render(){const{children:e,uniforms:t}=this.props,{glSurface:{RenderLessElement:r}}=this.context;return o.default.createElement(r,null,e,Object.keys(t).map(this._renderUniformElement))}componentDidUpdate(){this._syncNextDrawProps(this.props,this.context),this.redraw(),this.props.sync&&this.flush()}getGLShortName(){const{shader:e}=this.drawProps;return`Node(${(0,f.isShaderIdentifier)(e)?f.default.getShortName(e):"<inline>"})`}getGLName(){const{shader:e}=this.drawProps,t=(0,f.isShaderIdentifier)(e)?f.default.getName(e):"<inline>";return`Node#${this.id}(${t})`}getGLSize(){return y(this.drawProps,this.context)}getGLOutput(){const{framebuffer:e}=this;return(0,n.default)(e,"Node#getGLOutput: framebuffer is not defined. It cannot be called on a root Node"),e.color}getGLBackbufferOutput(){const{backbuffer:e}=this;return(0,n.default)(e,"Node#getGLBackbufferOutput: backbuffer is not defined. Make sure `backbuffering` prop is defined"),e.color}setDrawProps(e){const t=g(g({},this.drawProps),e);this._syncNextDrawProps(t,this.context),this.redraw(),t.sync&&this.flush()}capture(e,t,r,o){const[i,a]=this.getGLSize(),{gl:s}=this.context.glSurface;(0,n.default)(s,"gl is no longer available"),void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=i-e),void 0===o&&(o=a-t),(0,n.default)(e>=0&&e+r<=i&&t>=0&&t+o<=a,"capture(%s,%s,%s,%s): requested rectangle is out of bounds (%s,%s)",e,t,r,o,i,a);const l=r*o*4,f=this._captureAlloc(l);return this._bind(),s.readPixels(e,t,r,o,s.RGBA,s.UNSIGNED_BYTE,f),(0,c.default)(f,[o,r,4]).step(-1,1,1).transpose(1,0,2)}_destroyGLObjects(){const{glSurface:e}=this.context;if(e.glIsAvailable()){const{framebuffer:e,backbuffer:t,_shader:r}=this;r&&r.dispose(),e&&e.dispose(),t&&t.dispose()}delete this._shader,delete this.framebuffer,delete this.backbuffer}_prepareGLObjects(e){const[t,r]=this.getGLSize(),{glParent:o,glSurface:i}=this.context;if(o===i)(0,n.default)(!this.drawProps.backbuffering,"`backbuffering` is currently not supported for a Root Node. Try to wrap %s in a <LinearCopy> or <NearestCopy>.",this.getGLName());else{const n=S(e,t,r);if(this.framebuffer=n,this.drawProps.backbuffering){const n=S(e,t,r);this.backbuffer=n}}}_onContextLost(){this.dependencies.forEach((e=>e._onContextLost())),this._destroyGLObjects()}_onContextRestored(e){this._prepareGLObjects(e),this.dependencies.forEach((t=>t._onContextRestored(e))),this._needsRedraw=!0}_addGLNodeChild(e){}_removeGLNodeChild(e){}_addUniformBus(e,t,r){(this.uniformsBus[t]||(this.uniformsBus[t]=[]))[r]=e}_removeUniformBus(e,t,r){const n=this.uniformsBus[t]||(this.uniformsBus[t]=[]);n[r]===e&&(n[r]=null)}_addDependent(e){-1===this.dependents.indexOf(e)&&((0,u.default)(this,e),this.dependents.push(e))}_removeDependent(e){const t=this.dependents.indexOf(e);-1!==t&&this.dependents.splice(t,1)}_syncDependencies(e){const t=this.dependencies,r=e.filter((e=>-1===t.indexOf(e))),n=t.filter((t=>-1===e.indexOf(t)));return r.forEach((e=>e._addDependent(this))),n.forEach((e=>e._removeDependent(this))),this.dependencies=e,[r,n]}_bind(){this.framebuffer?this.framebuffer.bind():this.context.glSurface._bindRootNode()}_captureAlloc(e){let{capturePixelsArray:t}=this;t&&e!==t.length&&(a.default.freeUint8(t),t=null);const r=t||a.default.mallocUint8(e);return this.capturePixelsArray=r,r}_getShader(e){const{glSurface:t}=this.context,r=this.getGLName();if((0,n.default)(e,r+": shader prop must be provided"),(0,f.isShaderIdentifier)(e))return t._getShader(e);const o=(0,f.shaderDefinitionToShaderInfo)((0,f.ensureShaderDefinition)(e," in "+r),r),i=this._latestShaderInfo;let a=this._shader;return a&&i&&(0,f.shaderInfoEquals)(i,o)||(a&&(a.dispose(),delete this._shader),a=t._makeShader(o),this._latestShaderInfo=o,this._shader=a),a}_draw(){const{glSurface:e}=this.context,{gl:t}=e,r=e.getVisitors(),o=this.getGLName();if(!t||!this._needsRedraw)return void r.forEach((e=>e.onNodeDrawSkipped(this)));const{backbuffering:i,uniforms:a,uniformsOptions:c,shader:f,blendFunc:u,clear:p,onDraw:d,ignoreUnusedUniforms:v}=this.drawProps;if(!this.framebuffer){const{glSizable:e}=this.context,[t,r]=e.getGLSize(),[i,a]=this.getGLSize();(0,n.default)(i===t&&a===r,o+" is root but have overrided {width=%s,height=%s} which doesn't match Surface size {width=%s,height=%s}. Try to wrap your Node in a <NearestCopy> or <LinearCopy>",i,a,t,r)}const h=this._getShader(f);this._needsRedraw=!1;const{types:m}=h,g=[],x=[];let b=0;const y=Object.keys(m.uniforms),_=Object.keys(a),{uniformsBus:S}=this;for(let n in S)n in a||_.push(n);const E=new Map,R=(r,i,a)=>{let c,f,u=r;if("function"===typeof u&&(u=u(this.redraw)),u){if((e=>"Backbuffer"===e?(console.warn('Backbuffer is deprecated, use Uniform.Backbuffer instead: `import {Uniform} from "gl-react"`'),!0):e===s.default.Backbuffer)(u))this.drawProps.backbuffering||console.warn(`${o}, uniform ${a}: you must set \`backbuffering\` on Node when using Backbuffer`),f={glNode:this,glNodePickBackbuffer:!0};else if((e=>e&&"object"===typeof e&&"BackbufferFrom"===e.type)(u)){(0,n.default)("object"===typeof u,"invalid backbufferFromNode. Got: %s",u);let e=u.node;e instanceof l.default&&(e=e.getGLRenderableNode(),(0,n.default)(e,"backbufferFromNode(bus) but bus.getGLRenderableNode() is %s",e)),(0,n.default)(e instanceof P,"invalid backbufferFromNode(obj): obj must be an instanceof Node or Bus. Got: %s",u),e.drawProps.backbuffering||console.warn(`${o}, uniform ${a}: you must set \`backbuffering\` on the Node referenced in backbufferFrom(${e.getGLName()})`),f={glNode:e,glNodePickBackbuffer:!0}}else if(u instanceof P)c=u,f={glNode:u};else if(u instanceof l.default){const e=u.getGLRenderableNode();if(e)c=e,f={glNode:e};else{c=u;const e=u.getGLRenderableContent();e?u=e:(console.warn(`${o}, uniform ${a}: child is not renderable. Got:`,e),f={directTexture:null})}}}else void 0===u&&console.warn(`${o}, uniform '${a}' is undefined.If you explicitely want to clear a texture, set it to null.`);if(!f&&u){const{loader:t,input:r}=e._resolveTextureLoader(u);if(t){const e=t.get(r);if(e)t.update(r),f={directTexture:e.texture,directTextureSize:[e.width,e.height]};else{const e=t.load(r);x.push(e)}}else console.warn(`${o}, uniform ${a}: no loader found for value`,r,u)}c&&g.push(c);const p=f?i:null;return{getMetaInfo:()=>({initialObj:r,obj:u,dependency:c,textureOptions:p}),getSize:()=>{const e=[2,2];return f?"directTextureSize"in f?f.directTextureSize:f.glNode?f.glNode.getGLSize():e:e},prepare:()=>{const r=f&&(f.directTexture||f.glNode&&(f.glNodePickBackbuffer?f.glNode.getGLBackbufferOutput():f.glNode.getGLOutput()))||e.getEmptyTexture();if(E.has(r))return E.get(r);const n=b++;return t.activeTexture(t.TEXTURE0+n),t.bindTexture(t.TEXTURE_2D,r),O(t,p),E.set(r,n),n}}},z=_.map((e=>{const t=m.uniforms[e];if(!t){return!0===v||v instanceof Array&&v.includes(e)||console.warn(`${o} uniform '${e}' is not declared, nor used, in your shader code`),{key:e,value:void 0}}const r=a[e];if(y.splice(y.indexOf(e),1),"sampler2D"===t){const n=S[e],{getMetaInfo:o,prepare:i}=R(n&&n[0]||r,c[e],e);return{key:e,type:t,getMetaInfo:o,prepare:i}}if(r===s.default.Resolution)return{key:e,type:t,value:this.getGLSize()};if((i=r)&&"object"===typeof i&&"TextureSize"===i.type){(0,n.default)(r&&"object"===typeof r,"unexpected textureSize object. Got: %s",r);const{getSize:i}=R(r.obj,null,e),a=i();a||console.warn(`${o}, uniform ${e}: texture size is undetermined`);const c=r.ratio?a?a[0]/a[1]:1:a||[0,0];return{key:e,type:t,value:c}}if(Array.isArray(t)&&"sampler2D"===t[0]){let n;const i=S[e],a=((e,t)=>{const r=[],n=Math.max(e.length,t.length);for(let o=0;o<n;o++)r[o]=t[o]||e[o];return r})(Array.isArray(r)?r:[],Array.isArray(i)?i:[]);a.length?a.length!==t.length?(console.warn(`${o}, uniform '${e}' should be an array of exactly ${t.length} textures (not ${a.length}).`),n=t.map((()=>null))):n=a:(console.warn(`${o}, uniform '${e}' should be an array of textures.`),n=t.map((()=>null)));const s=c[e],l=n.map(((t,r)=>R(t,s,e+"["+r+"]")));return{key:e,type:t,getMetaInfo:()=>l.reduce(((e,t)=>e.concat(t.getMetaInfo())),[]),prepare:()=>l.map((e=>e.prepare()))}}return void 0===r&&console.warn(`${o}, uniform '${e}' is undefined.`),{key:e,type:t,value:r};var i}));if(0!==y.length&&console.warn(o+": Missing uniforms: "+y.map((e=>`'${e}'`)).join(", ")+"\nall uniforms must be provided because implementations might share and reuse a Shader Program"),x.length>0)return Promise.all(x).then(this.redraw),void r.forEach((e=>e.onNodeDrawSkipped(this)));r.forEach((e=>e.onNodeDrawStart(this)));const[T,I]=this._syncDependencies(g);if(r.forEach((e=>e.onNodeSyncDeps(this,T,I))),i){const{backbuffer:e,framebuffer:t}=this;this.backbuffer=t,e&&(this.framebuffer=e)}if(this.dependencies.forEach((e=>e._draw())),r.forEach((e=>e.onNodeDraw(this,z))),h.bind(),this._bind(),z.forEach((e=>{const t=e.prepare?e.prepare():e.value;void 0!==t&&(h.uniforms[e.key]=t)})),u){const e=w(t,u.src),r=w(t,u.dst);e&&r&&t.blendFunc(e,r)}p&&(t.clearColor(...p.color),t.clear(t.COLOR_BUFFER_BIT)),t.drawArrays(t.TRIANGLES,0,3),d&&d(),r.forEach((e=>e.onNodeDrawEnd(this)))}}t.default=P,x(P,"propTypes",R),x(P,"defaultProps",{uniformsOptions:{},uniforms:{},blendFunc:{src:"src alpha",dst:"one minus src alpha"},clear:{color:[0,0,0,0]}}),x(P,"contextTypes",{glParent:i.default.object.isRequired,glSurface:i.default.object.isRequired,glSizable:i.default.object.isRequired}),x(P,"childContextTypes",{glParent:i.default.object.isRequired,glSizable:i.default.object.isRequired})},KN1S:function(e,t,r){"use strict";var n=r("0GS4"),o=r("fpEm"),i=r("63NL"),a=r("IrQ8"),c=r("1BqX"),s=r("o/2B");function l(e){this.gl=e,this.gl.lastAttribCount=0,this._vref=this._fref=this._relink=this.vertShader=this.fragShader=this.program=this.attributes=this.uniforms=this.types=null}var f=l.prototype;function u(e,t){return e.name<t.name?-1:1}f.bind=function(){var e;this.program||this._relink();var t=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES),r=this.gl.lastAttribCount;if(t>r)for(e=r;e<t;e++)this.gl.enableVertexAttribArray(e);else if(r>t)for(e=t;e<r;e++)this.gl.disableVertexAttribArray(e);this.gl.lastAttribCount=t,this.gl.useProgram(this.program)},f.dispose=function(){for(var e=this.gl.lastAttribCount,t=0;t<e;t++)this.gl.disableVertexAttribArray(t);this.gl.lastAttribCount=0,this._fref&&this._fref.dispose(),this._vref&&this._vref.dispose(),this.attributes=this.types=this.vertShader=this.fragShader=this.program=this._relink=this._fref=this._vref=null},f.update=function(e,t,r,l){if(!t||1===arguments.length){var f=e;e=f.vertex,t=f.fragment,r=f.uniforms,l=f.attributes}var p=this,d=p.gl,v=p._vref;p._vref=a.shader(d,d.VERTEX_SHADER,e),v&&v.dispose(),p.vertShader=p._vref.shader;var h=this._fref;if(p._fref=a.shader(d,d.FRAGMENT_SHADER,t),h&&h.dispose(),p.fragShader=p._fref.shader,!r||!l){var m=d.createProgram();if(d.attachShader(m,p.fragShader),d.attachShader(m,p.vertShader),d.linkProgram(m),!d.getProgramParameter(m,d.LINK_STATUS)){var g=d.getProgramInfoLog(m);throw new s(g,"Error linking program:"+g)}r=r||c.uniforms(d,m),l=l||c.attributes(d,m),d.deleteProgram(m)}(l=l.slice()).sort(u);var x,b=[],y=[],w=[];for(x=0;x<l.length;++x){var _=l[x];if(_.type.indexOf("mat")>=0){for(var S=0|_.type.charAt(_.type.length-1),E=new Array(S),O=0;O<S;++O)E[O]=w.length,y.push(_.name+"["+O+"]"),"number"===typeof _.location?w.push(_.location+O):Array.isArray(_.location)&&_.location.length===S&&"number"===typeof _.location[O]?w.push(0|_.location[O]):w.push(-1);b.push({name:_.name,type:_.type,locations:E})}else b.push({name:_.name,type:_.type,locations:[w.length]}),y.push(_.name),"number"===typeof _.location?w.push(0|_.location):w.push(-1)}var R=0;for(x=0;x<w.length;++x)if(w[x]<0){for(;w.indexOf(R)>=0;)R+=1;w[x]=R}var P=new Array(r.length);function z(){p.program=a.program(d,p._vref,p._fref,y,w);for(var e=0;e<r.length;++e)P[e]=d.getUniformLocation(p.program,r[e].name)}z(),p._relink=z,p.types={uniforms:i(r),attributes:i(l)},p.attributes=o(d,p,b,w),Object.defineProperty(p,"uniforms",n(d,p,r,P))},e.exports=function(e,t,r,n,o){var i=new l(e);return i.update(t,r,n,o),i}},KxLE:function(e,t,r){"use strict";e.exports=function(e,t,r){for(var n in e)if(!1===t.call(r,e[n],n,e))break}},LhdL:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r("OTww"))&&n.__esModule?n:{default:n};t.default=class{constructor(e,t=o.default){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"loaders",void 0),this.loaders=t.get().map((t=>new t(e)))}dispose(){this.loaders.forEach((e=>e.dispose()))}resolve(e){return this.loaders.find((t=>t.canLoad(e)))}}},"M/JY":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("dEu3"));function o(e){return e&&e.__esModule?e:{default:e}}var i=o(r("laZL")).default.create({copy:{frag:n.default`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
void main(){
  gl_FragColor=texture2D(t,uv);
}`}}).copy;t.default=i},MAJC:function(e,t,r){"use strict";e.exports=function(e){return"undefined"!==typeof e&&null!==e&&("object"===typeof e||"function"===typeof e)}},Ni9w:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(){var e,t,r;r=[],(t="_loaders")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}add(e){this._loaders.push(e),this._loaders.sort(((e,t)=>("number"===typeof t.priority?t.priority:0)-("number"===typeof e.priority?e.priority:0)))}remove(e){const t=this._loaders.indexOf(e);-1!==t&&this._loaders.splice(t,1)}get(){return this._loaders}}},O8XB:function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i,a,c,s,l=p(r("tbvF")),f=p(r("Ytbt")),u=p(r("zqV6"));function p(e){return e&&e.__esModule?e:{default:e}}"undefined"===typeof e&&(n.Buffer=(i=o=class{},s=t=>t instanceof e,(c="isBuffer")in(a=o)?Object.defineProperty(a,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[c]=s,i));t.default=(e,t,r,n)=>{const o="undefined"!==typeof WebGLRenderingContext&&e instanceof WebGLRenderingContext;let i=r.dtype,a=r.shape.slice(),c=e.getParameter(e.MAX_TEXTURE_SIZE);if(a[0]<0||a[0]>c||a[1]<0||a[1]>c)throw new Error("gl-react: Invalid texture size");let s=function(e,t){return 3===e.length?1===t[2]&&t[1]===e[0]*e[2]&&t[0]===e[2]:1===t[0]&&t[1]===e[0]}(a,r.stride.slice()),p=0;"float32"===i?p=e.FLOAT:"float64"===i?(p=e.FLOAT,s=!1,i="float32"):"uint8"===i?p=e.UNSIGNED_BYTE:(p=e.UNSIGNED_BYTE,s=!1,i="uint8");let d,v=0,h=0;if(2===a.length)h=v=e.LUMINANCE,a=[a[0],a[1],1],r=(0,l.default)(r.data,a,[r.stride[0],r.stride[1],1],r.offset);else{if(3!==a.length)throw new Error("gl-texture2d: Invalid shape for texture");if(1===a[2])h=v=e.ALPHA,o||(n=!1);else if(2===a[2])h=v=e.LUMINANCE_ALPHA,o||(n=!1);else if(3===a[2])v=e.RGB,h=o?e.RGB:e.RGB32F;else{if(4!==a[2])throw new Error("gl-texture2d: Invalid shape for pixel coords");v=e.RGBA,h=o?e.RGBA:e.RGBA32F}}p!==e.FLOAT||n||(p=e.UNSIGNED_BYTE,s=!1);let m,g=r.size;if(s)d=0===r.offset&&r.data.length===g?r.data:r.data.subarray(r.offset,r.offset+g);else{let t=[a[2],a[2]*a[0],1];if("float32"!==i&&"float64"!==i||p!==e.UNSIGNED_BYTE){m=u.default.malloc(g,i);let e=(0,l.default)(m,a,t,0);f.default.assign(e,r)}else{m=u.default.malloc(g,"uint8"),function(e,t){f.default.muls(e,t,255)}((0,l.default)(m,a,t,0),r)}d=m.subarray(0,g)}e.texImage2D(e.TEXTURE_2D,0,h,a[0],a[1],0,v,p,d),m&&u.default.free(m)}}).call(this,r("HDXh").Buffer,r("ntbh"))},OTww:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r("Ni9w"))&&n.__esModule?n:{default:n};const i="undefined"===typeof window?e:window,a="__webglTextureLoader_registry";var c=i[a]||(i[a]=new o.default);t.default=c}).call(this,r("ntbh"))},QLaP:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o,i,a,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,i,a,c],f=0;(s=new Error(t.replace(/%s/g,(function(){return l[f++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},QM7d:function(e,t,r){"use strict";var n=r("033R");function o(){this.argTypes=[],this.shimArgs=[],this.arrayArgs=[],this.arrayBlockIndices=[],this.scalarArgs=[],this.offsetArgs=[],this.offsetArgIndex=[],this.indexArgs=[],this.shapeArgs=[],this.funcName="",this.pre=null,this.body=null,this.post=null,this.debug=!1}e.exports=function(e){var t=new o;t.pre=e.pre,t.body=e.body,t.post=e.post;var r=e.args.slice(0);t.argTypes=r;for(var i=0;i<r.length;++i){var a=r[i];if("array"===a||"object"===typeof a&&a.blockIndices){if(t.argTypes[i]="array",t.arrayArgs.push(i),t.arrayBlockIndices.push(a.blockIndices?a.blockIndices:0),t.shimArgs.push("array"+i),i<t.pre.args.length&&t.pre.args[i].count>0)throw new Error("cwise: pre() block may not reference array args");if(i<t.post.args.length&&t.post.args[i].count>0)throw new Error("cwise: post() block may not reference array args")}else if("scalar"===a)t.scalarArgs.push(i),t.shimArgs.push("scalar"+i);else if("index"===a){if(t.indexArgs.push(i),i<t.pre.args.length&&t.pre.args[i].count>0)throw new Error("cwise: pre() block may not reference array index");if(i<t.body.args.length&&t.body.args[i].lvalue)throw new Error("cwise: body() block may not write to array index");if(i<t.post.args.length&&t.post.args[i].count>0)throw new Error("cwise: post() block may not reference array index")}else if("shape"===a){if(t.shapeArgs.push(i),i<t.pre.args.length&&t.pre.args[i].lvalue)throw new Error("cwise: pre() block may not write to array shape");if(i<t.body.args.length&&t.body.args[i].lvalue)throw new Error("cwise: body() block may not write to array shape");if(i<t.post.args.length&&t.post.args[i].lvalue)throw new Error("cwise: post() block may not write to array shape")}else{if("object"!==typeof a||!a.offset)throw new Error("cwise: Unknown argument type "+r[i]);t.argTypes[i]="offset",t.offsetArgs.push({array:a.array,offset:a.offset}),t.offsetArgIndex.push(i)}}if(t.arrayArgs.length<=0)throw new Error("cwise: No array arguments specified");if(t.pre.args.length>r.length)throw new Error("cwise: Too many arguments in pre() block");if(t.body.args.length>r.length)throw new Error("cwise: Too many arguments in body() block");if(t.post.args.length>r.length)throw new Error("cwise: Too many arguments in post() block");return t.debug=!!e.printCode||!!e.debug,t.funcName=e.funcName||"cwise",t.blockSize=e.blockSize||64,n(t)}},R9Te:function(e,t,r){"use strict";var n=r("CyWo"),o=r("z08I"),i=r("+0iv"),a=r("vCtr");function c(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e}e.exports=function(e,t,r){if(!a(e))return e;if(Array.isArray(t)&&(t=[].concat.apply([],t).join(".")),"string"!==typeof t)return e;for(var s=n(t,{sep:".",brackets:!0}).filter(c),l=s.length,f=-1,u=e;++f<l;){var p=s[f];f===l-1?i(u[p])&&i(r)?u[p]=o({},u[p],r):u[p]=r:(a(u[p])||(u[p]={}),u=u[p])}return e}},RjOF:function(e,t,r){"use strict";var n,o="";e.exports=function(e,t){if("string"!==typeof e)throw new TypeError("expected a string");if(1===t)return e;if(2===t)return e+e;var r=e.length*t;if(n!==e||"undefined"===typeof n)n=e,o="";else if(o.length>=r)return o.substr(0,r);for(;r>o.length&&t>1;)1&t&&(o+=e),t>>=1,e+=e;return o=(o+=e).substr(0,r)}},Ry8g:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=e=>{const t=e.getExtension("WEBGL_lose_context");t&&t.loseContext()}},SMLl:function(e,t,r){"use strict";var n=r("RjOF");e.exports=function(e,t,r){return n(r="undefined"!==typeof r?r+"":" ",t)+e}},TBio:function(e,t,r){"use strict";var n=r("F16p");function o(e,t,r){var n,o,i=e.length,a=t.arrayArgs.length,c=t.indexArgs.length>0,s=[],l=[],f=0,u=0;for(n=0;n<i;++n)l.push(["i",n,"=0"].join(""));for(o=0;o<a;++o)for(n=0;n<i;++n)u=f,f=e[n],0===n?l.push(["d",o,"s",n,"=t",o,"p",f].join("")):l.push(["d",o,"s",n,"=(t",o,"p",f,"-s",u,"*t",o,"p",u,")"].join(""));for(l.length>0&&s.push("var "+l.join(",")),n=i-1;n>=0;--n)f=e[n],s.push(["for(i",n,"=0;i",n,"<s",f,";++i",n,"){"].join(""));for(s.push(r),n=0;n<i;++n){for(u=f,f=e[n],o=0;o<a;++o)s.push(["p",o,"+=d",o,"s",n].join(""));c&&(n>0&&s.push(["index[",u,"]-=s",u].join("")),s.push(["++index[",f,"]"].join(""))),s.push("}")}return s.join("\n")}function i(e,t,r){for(var n=e.body,o=[],i=[],a=0;a<e.args.length;++a){var c=e.args[a];if(!(c.count<=0)){var s=new RegExp(c.name,"g"),l="",f=t.arrayArgs.indexOf(a);switch(t.argTypes[a]){case"offset":var u=t.offsetArgIndex.indexOf(a);f=t.offsetArgs[u].array,l="+q"+u;case"array":l="p"+f+l;var p="l"+a,d="a"+f;if(0===t.arrayBlockIndices[f])1===c.count?"generic"===r[f]?c.lvalue?(o.push(["var ",p,"=",d,".get(",l,")"].join("")),n=n.replace(s,p),i.push([d,".set(",l,",",p,")"].join(""))):n=n.replace(s,[d,".get(",l,")"].join("")):n=n.replace(s,[d,"[",l,"]"].join("")):"generic"===r[f]?(o.push(["var ",p,"=",d,".get(",l,")"].join("")),n=n.replace(s,p),c.lvalue&&i.push([d,".set(",l,",",p,")"].join(""))):(o.push(["var ",p,"=",d,"[",l,"]"].join("")),n=n.replace(s,p),c.lvalue&&i.push([d,"[",l,"]=",p].join("")));else{for(var v=[c.name],h=[l],m=0;m<Math.abs(t.arrayBlockIndices[f]);m++)v.push("\\s*\\[([^\\]]+)\\]"),h.push("$"+(m+1)+"*t"+f+"b"+m);if(s=new RegExp(v.join(""),"g"),l=h.join("+"),"generic"===r[f])throw new Error("cwise: Generic arrays not supported in combination with blocks!");n=n.replace(s,[d,"[",l,"]"].join(""))}break;case"scalar":n=n.replace(s,"Y"+t.scalarArgs.indexOf(a));break;case"index":n=n.replace(s,"index");break;case"shape":n=n.replace(s,"shape")}}}return[o.join("\n"),n,i.join("\n")].join("\n").trim()}function a(e){for(var t=new Array(e.length),r=!0,n=0;n<e.length;++n){var o=e[n],i=o.match(/\d+/);i=i?i[0]:"",0===o.charAt(0)?t[n]="u"+o.charAt(1)+i:t[n]=o.charAt(0)+i,n>0&&(r=r&&t[n]===t[n-1])}return r?t[0]:t.join("")}e.exports=function(e,t){for(var r=t[1].length-Math.abs(e.arrayBlockIndices[0])|0,c=new Array(e.arrayArgs.length),s=new Array(e.arrayArgs.length),l=0;l<e.arrayArgs.length;++l)s[l]=t[2*l],c[l]=t[2*l+1];var f=[],u=[],p=[],d=[],v=[];for(l=0;l<e.arrayArgs.length;++l){e.arrayBlockIndices[l]<0?(p.push(0),d.push(r),f.push(r),u.push(r+e.arrayBlockIndices[l])):(p.push(e.arrayBlockIndices[l]),d.push(e.arrayBlockIndices[l]+r),f.push(0),u.push(e.arrayBlockIndices[l]));for(var h=[],m=0;m<c[l].length;m++)p[l]<=c[l][m]&&c[l][m]<d[l]&&h.push(c[l][m]-p[l]);v.push(h)}var g=["SS"],x=["'use strict'"],b=[];for(m=0;m<r;++m)b.push(["s",m,"=SS[",m,"]"].join(""));for(l=0;l<e.arrayArgs.length;++l){g.push("a"+l),g.push("t"+l),g.push("p"+l);for(m=0;m<r;++m)b.push(["t",l,"p",m,"=t",l,"[",p[l]+m,"]"].join(""));for(m=0;m<Math.abs(e.arrayBlockIndices[l]);++m)b.push(["t",l,"b",m,"=t",l,"[",f[l]+m,"]"].join(""))}for(l=0;l<e.scalarArgs.length;++l)g.push("Y"+l);if(e.shapeArgs.length>0&&b.push("shape=SS.slice(0)"),e.indexArgs.length>0){var y=new Array(r);for(l=0;l<r;++l)y[l]="0";b.push(["index=[",y.join(","),"]"].join(""))}for(l=0;l<e.offsetArgs.length;++l){var w=e.offsetArgs[l],_=[];for(m=0;m<w.offset.length;++m)0!==w.offset[m]&&(1===w.offset[m]?_.push(["t",w.array,"p",m].join("")):_.push([w.offset[m],"*t",w.array,"p",m].join("")));0===_.length?b.push("q"+l+"=0"):b.push(["q",l,"=",_.join("+")].join(""))}var S=n([].concat(e.pre.thisVars).concat(e.body.thisVars).concat(e.post.thisVars));for((b=b.concat(S)).length>0&&x.push("var "+b.join(",")),l=0;l<e.arrayArgs.length;++l)x.push("p"+l+"|=0");e.pre.body.length>3&&x.push(i(e.pre,e,s));var E=i(e.body,e,s),O=function(e){for(var t=0,r=e[0].length;t<r;){for(var n=1;n<e.length;++n)if(e[n][t]!==e[0][t])return t;++t}return t}(v);O<r?x.push(function(e,t,r,n){for(var i=t.length,a=r.arrayArgs.length,c=r.blockSize,s=r.indexArgs.length>0,l=[],f=0;f<a;++f)l.push(["var offset",f,"=p",f].join(""));for(f=e;f<i;++f)l.push(["for(var j"+f+"=SS[",t[f],"]|0;j",f,">0;){"].join("")),l.push(["if(j",f,"<",c,"){"].join("")),l.push(["s",t[f],"=j",f].join("")),l.push(["j",f,"=0"].join("")),l.push(["}else{s",t[f],"=",c].join("")),l.push(["j",f,"-=",c,"}"].join("")),s&&l.push(["index[",t[f],"]=j",f].join(""));for(f=0;f<a;++f){for(var u=["offset"+f],p=e;p<i;++p)u.push(["j",p,"*t",f,"p",t[p]].join(""));l.push(["p",f,"=(",u.join("+"),")"].join(""))}for(l.push(o(t,r,n)),f=e;f<i;++f)l.push("}");return l.join("\n")}(O,v[0],e,E)):x.push(o(v[0],e,E)),e.post.body.length>3&&x.push(i(e.post,e,s)),e.debug&&console.log("-----Generated cwise routine for ",t,":\n"+x.join("\n")+"\n----------");var R=[e.funcName||"unnamed","_cwise_loop_",c[0].join("s"),"m",O,a(s)].join("");return new Function(["function ",R,"(",g.join(","),"){",x.join("\n"),"} return ",R].join(""))()}},TGEO:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WebGLTextureLoader",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"WebGLTextureLoaderAsyncHashCache",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"WebGLTextureLoaderSyncHashCache",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"LoadersRegistry",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"LoaderResolver",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"globalRegistry",{enumerable:!0,get:function(){return s.default}});var n=l(r("HbIt")),o=l(r("cDsr")),i=l(r("VYxY")),a=l(r("Ni9w")),c=l(r("LhdL")),s=l(r("OTww"));function l(e){return e&&e.__esModule?e:{default:e}}},TKux:function(e,t,r){"use strict";r.d(t,"b",(function(){return Xh})),r.d(t,"c",(function(){return Kh})),r.d(t,"a",(function(){return Yh}));var n={};r.r(n),r.d(n,"n",(function(){return et})),r.d(n,"title",(function(){return tt})),r.d(n,"Shader",(function(){return rt}));var o={};r.r(o),r.d(o,"n",(function(){return ot})),r.d(o,"title",(function(){return it})),r.d(o,"exportSize",(function(){return at})),r.d(o,"exportStart",(function(){return ct})),r.d(o,"exportEnd",(function(){return st})),r.d(o,"exportFramePerSecond",(function(){return lt})),r.d(o,"exportSpeed",(function(){return ft})),r.d(o,"Shader",(function(){return ut}));var i={};r.r(i),r.d(i,"n",(function(){return dt})),r.d(i,"title",(function(){return vt})),r.d(i,"Shader",(function(){return ht}));var a={};r.r(a),r.d(a,"n",(function(){return wt})),r.d(a,"title",(function(){return _t})),r.d(a,"Shader",(function(){return Et}));var c={};r.r(c),r.d(c,"n",(function(){return Pt})),r.d(c,"title",(function(){return zt})),r.d(c,"Shader",(function(){return Tt}));var s={};r.r(s),r.d(s,"n",(function(){return Ct})),r.d(s,"title",(function(){return jt})),r.d(s,"Shader",(function(){return kt}));var l={};r.r(l),r.d(l,"n",(function(){return Dt})),r.d(l,"title",(function(){return Lt})),r.d(l,"Shader",(function(){return Nt}));var f={};r.r(f),r.d(f,"n",(function(){return Ut})),r.d(f,"title",(function(){return Ft})),r.d(f,"Shader",(function(){return Bt}));var u={};r.r(u),r.d(u,"n",(function(){return Gt})),r.d(u,"title",(function(){return $t})),r.d(u,"exportSize",(function(){return Ht})),r.d(u,"exportStart",(function(){return Vt})),r.d(u,"exportEnd",(function(){return Wt})),r.d(u,"exportFramePerSecond",(function(){return Xt})),r.d(u,"exportSpeed",(function(){return Kt})),r.d(u,"Shader",(function(){return Yt}));var p={};r.r(p),r.d(p,"n",(function(){return Zt})),r.d(p,"title",(function(){return Jt})),r.d(p,"Shader",(function(){return er}));var d={};r.r(d),r.d(d,"n",(function(){return rr})),r.d(d,"title",(function(){return nr})),r.d(d,"Shader",(function(){return or}));var v={};r.r(v),r.d(v,"n",(function(){return ar})),r.d(v,"title",(function(){return cr})),r.d(v,"Shader",(function(){return sr}));var h={};r.r(h),r.d(h,"n",(function(){return fr})),r.d(h,"title",(function(){return ur})),r.d(h,"Shader",(function(){return pr}));var m={};r.r(m),r.d(m,"n",(function(){return vr})),r.d(m,"title",(function(){return hr})),r.d(m,"Shader",(function(){return mr}));var g={};r.r(g),r.d(g,"n",(function(){return Pr})),r.d(g,"title",(function(){return zr})),r.d(g,"Shader",(function(){return Tr}));var x={};r.r(x),r.d(x,"n",(function(){return kr})),r.d(x,"title",(function(){return Ar})),r.d(x,"Shader",(function(){return Dr}));var b={};r.r(b),r.d(b,"n",(function(){return Nr})),r.d(b,"title",(function(){return Mr})),r.d(b,"Shader",(function(){return Ur}));var y={};r.r(y),r.d(y,"n",(function(){return Br})),r.d(y,"title",(function(){return qr})),r.d(y,"Shader",(function(){return Gr}));var w={};r.r(w),r.d(w,"n",(function(){return Hr})),r.d(w,"title",(function(){return Vr})),r.d(w,"Shader",(function(){return Wr}));var _={};r.r(_),r.d(_,"n",(function(){return Kr})),r.d(_,"title",(function(){return Yr})),r.d(_,"Shader",(function(){return Qr}));var S={};r.r(S),r.d(S,"n",(function(){return en})),r.d(S,"title",(function(){return tn})),r.d(S,"Shader",(function(){return rn}));var E={};r.r(E),r.d(E,"n",(function(){return an})),r.d(E,"title",(function(){return cn})),r.d(E,"Shader",(function(){return sn}));var O={};r.r(O),r.d(O,"n",(function(){return fn})),r.d(O,"title",(function(){return un})),r.d(O,"Shader",(function(){return pn}));var R={};r.r(R),r.d(R,"n",(function(){return vn})),r.d(R,"title",(function(){return hn})),r.d(R,"Shader",(function(){return mn}));var P={};r.r(P),r.d(P,"n",(function(){return xn})),r.d(P,"title",(function(){return bn})),r.d(P,"Shader",(function(){return yn}));var z={};r.r(z),r.d(z,"n",(function(){return Sn})),r.d(z,"title",(function(){return En})),r.d(z,"Shader",(function(){return On}));var T={};r.r(T),r.d(T,"n",(function(){return zn})),r.d(T,"title",(function(){return Tn})),r.d(T,"exportSize",(function(){return In})),r.d(T,"exportStart",(function(){return Cn})),r.d(T,"exportEnd",(function(){return jn})),r.d(T,"exportFramePerSecond",(function(){return kn})),r.d(T,"exportSpeed",(function(){return An})),r.d(T,"Shader",(function(){return Dn}));var I={};r.r(I),r.d(I,"n",(function(){return Mn})),r.d(I,"title",(function(){return Un})),r.d(I,"Shader",(function(){return Fn}));var C={};r.r(C),r.d(C,"n",(function(){return Gn})),r.d(C,"title",(function(){return $n})),r.d(C,"Shader",(function(){return Hn}));var j={};r.r(j),r.d(j,"n",(function(){return Wn})),r.d(j,"title",(function(){return Xn})),r.d(j,"Shader",(function(){return Kn}));var k={};r.r(k),r.d(k,"n",(function(){return Qn})),r.d(k,"title",(function(){return Zn})),r.d(k,"Shader",(function(){return Jn}));var A={};r.r(A),r.d(A,"n",(function(){return to})),r.d(A,"title",(function(){return ro})),r.d(A,"Shader",(function(){return oo}));var D={};r.r(D),r.d(D,"n",(function(){return ao})),r.d(D,"title",(function(){return co})),r.d(D,"Shader",(function(){return so}));var L={};r.r(L),r.d(L,"n",(function(){return fo})),r.d(L,"title",(function(){return uo})),r.d(L,"Shader",(function(){return po}));var N={};r.r(N),r.d(N,"n",(function(){return ho})),r.d(N,"title",(function(){return mo})),r.d(N,"Shader",(function(){return go}));var M={};r.r(M),r.d(M,"n",(function(){return yo})),r.d(M,"title",(function(){return wo})),r.d(M,"Shader",(function(){return _o}));var U={};r.r(U),r.d(U,"n",(function(){return Oo})),r.d(U,"title",(function(){return Ro})),r.d(U,"Shader",(function(){return Po}));var F={};r.r(F),r.d(F,"n",(function(){return To})),r.d(F,"title",(function(){return Io})),r.d(F,"Shader",(function(){return Co}));var B={};r.r(B),r.d(B,"n",(function(){return Ao})),r.d(B,"title",(function(){return Do})),r.d(B,"Shader",(function(){return Lo}));var q={};r.r(q),r.d(q,"n",(function(){return Mo})),r.d(q,"title",(function(){return Uo})),r.d(q,"Shader",(function(){return Fo}));var G={};r.r(G),r.d(G,"n",(function(){return qo})),r.d(G,"title",(function(){return Go})),r.d(G,"Shader",(function(){return $o}));var $={};r.r($),r.d($,"n",(function(){return Vo})),r.d($,"title",(function(){return Wo})),r.d($,"Shader",(function(){return Xo}));var H={};r.r(H),r.d(H,"n",(function(){return Yo})),r.d(H,"title",(function(){return Qo})),r.d(H,"Shader",(function(){return Zo}));var V={};r.r(V),r.d(V,"n",(function(){return ti})),r.d(V,"title",(function(){return ri})),r.d(V,"Shader",(function(){return ni}));var W={};r.r(W),r.d(W,"n",(function(){return ii})),r.d(W,"title",(function(){return ai})),r.d(W,"Shader",(function(){return ci}));var X={};r.r(X),r.d(X,"n",(function(){return li})),r.d(X,"title",(function(){return fi})),r.d(X,"Shader",(function(){return ui}));var K={};r.r(K),r.d(K,"n",(function(){return di})),r.d(K,"title",(function(){return vi})),r.d(K,"Shader",(function(){return hi}));var Y={};r.r(Y),r.d(Y,"n",(function(){return gi})),r.d(Y,"title",(function(){return xi})),r.d(Y,"Shader",(function(){return bi}));var Q={};r.r(Q),r.d(Q,"n",(function(){return wi})),r.d(Q,"title",(function(){return _i})),r.d(Q,"exportSize",(function(){return Si})),r.d(Q,"exportStart",(function(){return Ei})),r.d(Q,"exportEnd",(function(){return Oi})),r.d(Q,"exportFramePerSecond",(function(){return Ri})),r.d(Q,"exportSpeed",(function(){return Pi})),r.d(Q,"Shader",(function(){return zi}));var Z={};r.r(Z),r.d(Z,"n",(function(){return Ci})),r.d(Z,"title",(function(){return ji})),r.d(Z,"Shader",(function(){return ki}));var J={};r.r(J),r.d(J,"n",(function(){return Di})),r.d(J,"title",(function(){return Li})),r.d(J,"exportSize",(function(){return Ni})),r.d(J,"exportStart",(function(){return Mi})),r.d(J,"exportEnd",(function(){return Ui})),r.d(J,"exportFramePerSecond",(function(){return Fi})),r.d(J,"exportSpeed",(function(){return Bi})),r.d(J,"Shader",(function(){return qi}));var ee={};r.r(ee),r.d(ee,"n",(function(){return $i})),r.d(ee,"title",(function(){return Hi})),r.d(ee,"Shader",(function(){return Vi}));var te={};r.r(te),r.d(te,"n",(function(){return Xi})),r.d(te,"title",(function(){return Ki})),r.d(te,"Shader",(function(){return Yi}));var re={};r.r(re),r.d(re,"n",(function(){return Zi})),r.d(re,"title",(function(){return Ji})),r.d(re,"Shader",(function(){return ea}));var ne={};r.r(ne),r.d(ne,"n",(function(){return ra})),r.d(ne,"title",(function(){return na})),r.d(ne,"exportSize",(function(){return oa})),r.d(ne,"exportStart",(function(){return ia})),r.d(ne,"exportEnd",(function(){return aa})),r.d(ne,"exportFramePerSecond",(function(){return ca})),r.d(ne,"exportSpeed",(function(){return sa})),r.d(ne,"Shader",(function(){return la}));var oe={};r.r(oe),r.d(oe,"n",(function(){return ua})),r.d(oe,"title",(function(){return pa})),r.d(oe,"Shader",(function(){return da}));var ie={};r.r(ie),r.d(ie,"n",(function(){return ha})),r.d(ie,"title",(function(){return ma})),r.d(ie,"exportSize",(function(){return ga})),r.d(ie,"exportStart",(function(){return xa})),r.d(ie,"exportEnd",(function(){return ba})),r.d(ie,"exportFramePerSecond",(function(){return ya})),r.d(ie,"exportSpeed",(function(){return wa})),r.d(ie,"Shader",(function(){return _a}));var ae={};r.r(ae),r.d(ae,"exportSize",(function(){return Ra})),r.d(ae,"exportStart",(function(){return Pa})),r.d(ae,"exportEnd",(function(){return za})),r.d(ae,"exportFramePerSecond",(function(){return Ta})),r.d(ae,"exportSpeed",(function(){return Ia})),r.d(ae,"exportMP4vb",(function(){return Ca})),r.d(ae,"n",(function(){return ja})),r.d(ae,"title",(function(){return ka})),r.d(ae,"nfts",(function(){return Aa})),r.d(ae,"Shader",(function(){return La}));var ce={};r.r(ce),r.d(ce,"n",(function(){return Ua})),r.d(ce,"title",(function(){return Fa})),r.d(ce,"description",(function(){return Ba})),r.d(ce,"Shader",(function(){return qa}));var se={};r.r(se),r.d(se,"n",(function(){return Ha})),r.d(se,"title",(function(){return Va})),r.d(se,"Shader",(function(){return Wa}));var le={};r.r(le),r.d(le,"n",(function(){return Ka})),r.d(le,"title",(function(){return Ya})),r.d(le,"exportEnd",(function(){return Qa})),r.d(le,"exportFramePerSecond",(function(){return Za})),r.d(le,"preload",(function(){return Ja})),r.d(le,"Shader",(function(){return ec}));var fe={};r.r(fe),r.d(fe,"n",(function(){return rc})),r.d(fe,"title",(function(){return nc})),r.d(fe,"exportEnd",(function(){return oc})),r.d(fe,"exportFramePerSecond",(function(){return ic})),r.d(fe,"exportSpeed",(function(){return ac})),r.d(fe,"Logic",(function(){return cc})),r.d(fe,"Shader",(function(){return pc}));var ue={};r.r(ue),r.d(ue,"n",(function(){return hc})),r.d(ue,"title",(function(){return mc})),r.d(ue,"exportSize",(function(){return gc})),r.d(ue,"exportStart",(function(){return xc})),r.d(ue,"exportEnd",(function(){return bc})),r.d(ue,"exportFramePerSecond",(function(){return yc})),r.d(ue,"exportSpeed",(function(){return wc})),r.d(ue,"exportMP4vb",(function(){return _c})),r.d(ue,"Logic",(function(){return Ec})),r.d(ue,"Shader",(function(){return zc}));var pe={};r.r(pe),r.d(pe,"n",(function(){return Ic})),r.d(pe,"title",(function(){return Cc})),r.d(pe,"exportEnd",(function(){return jc})),r.d(pe,"nfts",(function(){return kc})),r.d(pe,"Shader",(function(){return Ac}));var de={};r.r(de),r.d(de,"n",(function(){return Lc})),r.d(de,"title",(function(){return Nc})),r.d(de,"exportSize",(function(){return Mc})),r.d(de,"exportStart",(function(){return Uc})),r.d(de,"exportEnd",(function(){return Fc})),r.d(de,"exportFramePerSecond",(function(){return Bc})),r.d(de,"exportSpeed",(function(){return qc})),r.d(de,"exportSkipFrame",(function(){return Gc})),r.d(de,"exportPaletteGenOnce",(function(){return $c})),r.d(de,"exportPaletteSize",(function(){return Hc})),r.d(de,"nfts",(function(){return Vc})),r.d(de,"Shader",(function(){return Wc}));var ve={};r.r(ve),r.d(ve,"n",(function(){return Yc})),r.d(ve,"title",(function(){return Qc})),r.d(ve,"exportSize",(function(){return Zc})),r.d(ve,"exportStart",(function(){return Jc})),r.d(ve,"exportEnd",(function(){return es})),r.d(ve,"exportFramePerSecond",(function(){return ts})),r.d(ve,"exportSpeed",(function(){return rs})),r.d(ve,"exportSkipFrame",(function(){return ns})),r.d(ve,"exportPaletteGenOnce",(function(){return os})),r.d(ve,"exportPaletteSize",(function(){return is})),r.d(ve,"Shader",(function(){return as}));var he={};r.r(he),r.d(he,"n",(function(){return ls})),r.d(he,"title",(function(){return fs})),r.d(he,"exportSize",(function(){return us})),r.d(he,"exportStart",(function(){return ps})),r.d(he,"exportEnd",(function(){return ds})),r.d(he,"exportFramePerSecond",(function(){return vs})),r.d(he,"exportSpeed",(function(){return hs})),r.d(he,"exportSkipFrame",(function(){return ms})),r.d(he,"exportPaletteGenOnce",(function(){return gs})),r.d(he,"exportPaletteSize",(function(){return xs})),r.d(he,"Shader",(function(){return bs}));var me={};r.r(me),r.d(me,"n",(function(){return _s})),r.d(me,"title",(function(){return Ss})),r.d(me,"exportSize",(function(){return Es})),r.d(me,"exportStart",(function(){return Os})),r.d(me,"exportEnd",(function(){return Rs})),r.d(me,"exportFramePerSecond",(function(){return Ps})),r.d(me,"exportSpeed",(function(){return zs})),r.d(me,"exportSkipFrame",(function(){return Ts})),r.d(me,"exportPaletteGenOnce",(function(){return Is})),r.d(me,"exportPaletteSize",(function(){return Cs})),r.d(me,"Shader",(function(){return js}));var ge={};r.r(ge),r.d(ge,"n",(function(){return Ds})),r.d(ge,"title",(function(){return Ls})),r.d(ge,"exportSize",(function(){return Ns})),r.d(ge,"exportStart",(function(){return Ms})),r.d(ge,"exportEnd",(function(){return Us})),r.d(ge,"exportFramePerSecond",(function(){return Fs})),r.d(ge,"exportSpeed",(function(){return Bs})),r.d(ge,"exportPaletteGenOnce",(function(){return qs})),r.d(ge,"exportPaletteSize",(function(){return Gs})),r.d(ge,"Shader",(function(){return $s}));var xe={};r.r(xe),r.d(xe,"n",(function(){return Vs})),r.d(xe,"title",(function(){return Ws})),r.d(xe,"exportSize",(function(){return Xs})),r.d(xe,"exportStart",(function(){return Ks})),r.d(xe,"exportEnd",(function(){return Ys})),r.d(xe,"exportFramePerSecond",(function(){return Qs})),r.d(xe,"exportSpeed",(function(){return Zs})),r.d(xe,"exportPaletteGenOnce",(function(){return Js})),r.d(xe,"exportPaletteSize",(function(){return el})),r.d(xe,"Shader",(function(){return tl}));var be={};r.r(be),r.d(be,"n",(function(){return nl})),r.d(be,"title",(function(){return ol})),r.d(be,"exportSize",(function(){return il})),r.d(be,"exportStart",(function(){return al})),r.d(be,"exportEnd",(function(){return cl})),r.d(be,"exportFramePerSecond",(function(){return sl})),r.d(be,"exportSpeed",(function(){return ll})),r.d(be,"exportPaletteGenOnce",(function(){return fl})),r.d(be,"exportPaletteSize",(function(){return ul})),r.d(be,"Shader",(function(){return pl}));var ye={};r.r(ye),r.d(ye,"n",(function(){return vl})),r.d(ye,"title",(function(){return hl})),r.d(ye,"exportSize",(function(){return ml})),r.d(ye,"exportStart",(function(){return gl})),r.d(ye,"exportEnd",(function(){return xl})),r.d(ye,"exportFramePerSecond",(function(){return bl})),r.d(ye,"exportSpeed",(function(){return yl})),r.d(ye,"exportPaletteGenOnce",(function(){return wl})),r.d(ye,"exportPaletteSize",(function(){return _l})),r.d(ye,"nfts",(function(){return Sl})),r.d(ye,"Shader",(function(){return El}));var we={};r.r(we),r.d(we,"n",(function(){return Rl})),r.d(we,"title",(function(){return Pl})),r.d(we,"exportSize",(function(){return zl})),r.d(we,"exportStart",(function(){return Tl})),r.d(we,"exportEnd",(function(){return Il})),r.d(we,"exportFramePerSecond",(function(){return Cl})),r.d(we,"exportSpeed",(function(){return jl})),r.d(we,"exportPaletteGenOnce",(function(){return kl})),r.d(we,"exportPaletteSize",(function(){return Al})),r.d(we,"Shader",(function(){return Ll}));var _e={};r.r(_e),r.d(_e,"n",(function(){return Ml})),r.d(_e,"title",(function(){return Ul})),r.d(_e,"exportSize",(function(){return Fl})),r.d(_e,"exportStart",(function(){return Bl})),r.d(_e,"exportEnd",(function(){return ql})),r.d(_e,"exportFramePerSecond",(function(){return Gl})),r.d(_e,"exportSpeed",(function(){return $l})),r.d(_e,"exportPaletteGenOnce",(function(){return Hl})),r.d(_e,"exportPaletteSize",(function(){return Vl})),r.d(_e,"Shader",(function(){return Xl}));var Se={};r.r(Se),r.d(Se,"n",(function(){return Yl})),r.d(Se,"title",(function(){return Ql})),r.d(Se,"exportSize",(function(){return Zl})),r.d(Se,"exportStart",(function(){return Jl})),r.d(Se,"exportEnd",(function(){return ef})),r.d(Se,"exportFramePerSecond",(function(){return tf})),r.d(Se,"exportSpeed",(function(){return rf})),r.d(Se,"exportPaletteGenOnce",(function(){return nf})),r.d(Se,"exportPaletteSize",(function(){return of})),r.d(Se,"Shader",(function(){return cf}));var Ee={};r.r(Ee),r.d(Ee,"n",(function(){return lf})),r.d(Ee,"title",(function(){return ff})),r.d(Ee,"exportSize",(function(){return uf})),r.d(Ee,"exportStart",(function(){return pf})),r.d(Ee,"exportEnd",(function(){return df})),r.d(Ee,"exportFramePerSecond",(function(){return vf})),r.d(Ee,"exportSpeed",(function(){return hf})),r.d(Ee,"exportPaletteGenOnce",(function(){return mf})),r.d(Ee,"exportPaletteSize",(function(){return gf})),r.d(Ee,"Shader",(function(){return xf}));var Oe={};r.r(Oe),r.d(Oe,"n",(function(){return yf})),r.d(Oe,"title",(function(){return wf})),r.d(Oe,"exportSize",(function(){return _f})),r.d(Oe,"exportStart",(function(){return Sf})),r.d(Oe,"exportEnd",(function(){return Ef})),r.d(Oe,"exportFramePerSecond",(function(){return Of})),r.d(Oe,"exportSpeed",(function(){return Rf})),r.d(Oe,"exportPaletteGenOnce",(function(){return Pf})),r.d(Oe,"exportPaletteSize",(function(){return zf})),r.d(Oe,"Shader",(function(){return Tf}));var Re={};r.r(Re),r.d(Re,"n",(function(){return Cf})),r.d(Re,"title",(function(){return jf})),r.d(Re,"exportSize",(function(){return kf})),r.d(Re,"exportStart",(function(){return Af})),r.d(Re,"exportEnd",(function(){return Df})),r.d(Re,"exportFramePerSecond",(function(){return Lf})),r.d(Re,"exportSpeed",(function(){return Nf})),r.d(Re,"exportPaletteGenOnce",(function(){return Mf})),r.d(Re,"exportPaletteSize",(function(){return Uf})),r.d(Re,"Shader",(function(){return Ff}));var Pe={};r.r(Pe),r.d(Pe,"n",(function(){return qf})),r.d(Pe,"title",(function(){return Gf})),r.d(Pe,"exportSize",(function(){return $f})),r.d(Pe,"exportStart",(function(){return Hf})),r.d(Pe,"exportEnd",(function(){return Vf})),r.d(Pe,"exportFramePerSecond",(function(){return Wf})),r.d(Pe,"exportSpeed",(function(){return Xf})),r.d(Pe,"exportPaletteGenOnce",(function(){return Kf})),r.d(Pe,"exportPaletteSize",(function(){return Yf})),r.d(Pe,"Shader",(function(){return Qf}));var ze={};r.r(ze),r.d(ze,"n",(function(){return Jf})),r.d(ze,"title",(function(){return eu})),r.d(ze,"exportSize",(function(){return tu})),r.d(ze,"exportStart",(function(){return ru})),r.d(ze,"exportEnd",(function(){return nu})),r.d(ze,"exportFramePerSecond",(function(){return ou})),r.d(ze,"exportSpeed",(function(){return iu})),r.d(ze,"exportPaletteGenOnce",(function(){return au})),r.d(ze,"exportPaletteSize",(function(){return cu})),r.d(ze,"Shader",(function(){return su}));var Te={};r.r(Te),r.d(Te,"n",(function(){return fu})),r.d(Te,"title",(function(){return uu})),r.d(Te,"exportSize",(function(){return pu})),r.d(Te,"exportStart",(function(){return du})),r.d(Te,"exportEnd",(function(){return vu})),r.d(Te,"exportFramePerSecond",(function(){return hu})),r.d(Te,"exportSpeed",(function(){return mu})),r.d(Te,"exportPaletteGenOnce",(function(){return gu})),r.d(Te,"exportPaletteSize",(function(){return xu})),r.d(Te,"Shader",(function(){return bu}));var Ie={};r.r(Ie),r.d(Ie,"n",(function(){return wu})),r.d(Ie,"title",(function(){return _u})),r.d(Ie,"exportSize",(function(){return Su})),r.d(Ie,"exportStart",(function(){return Eu})),r.d(Ie,"exportEnd",(function(){return Ou})),r.d(Ie,"exportFramePerSecond",(function(){return Ru})),r.d(Ie,"exportSpeed",(function(){return Pu})),r.d(Ie,"exportPaletteGenOnce",(function(){return zu})),r.d(Ie,"exportPaletteSize",(function(){return Tu})),r.d(Ie,"Shader",(function(){return Iu}));var Ce={};r.r(Ce),r.d(Ce,"n",(function(){return ju})),r.d(Ce,"title",(function(){return ku})),r.d(Ce,"exportSize",(function(){return Au})),r.d(Ce,"exportStart",(function(){return Du})),r.d(Ce,"exportEnd",(function(){return Lu})),r.d(Ce,"exportFramePerSecond",(function(){return Nu})),r.d(Ce,"exportSpeed",(function(){return Mu})),r.d(Ce,"exportPaletteGenOnce",(function(){return Uu})),r.d(Ce,"exportPaletteSize",(function(){return Fu})),r.d(Ce,"Shader",(function(){return Bu}));var je={};r.r(je),r.d(je,"n",(function(){return Gu})),r.d(je,"title",(function(){return $u})),r.d(je,"exportSize",(function(){return Hu})),r.d(je,"exportStart",(function(){return Vu})),r.d(je,"exportEnd",(function(){return Wu})),r.d(je,"exportFramePerSecond",(function(){return Xu})),r.d(je,"exportSpeed",(function(){return Ku})),r.d(je,"exportPaletteGenOnce",(function(){return Yu})),r.d(je,"exportPaletteSize",(function(){return Qu})),r.d(je,"Shader",(function(){return Zu}));var ke={};r.r(ke),r.d(ke,"n",(function(){return ep})),r.d(ke,"title",(function(){return tp})),r.d(ke,"exportSize",(function(){return rp})),r.d(ke,"exportStart",(function(){return np})),r.d(ke,"exportEnd",(function(){return op})),r.d(ke,"exportFramePerSecond",(function(){return ip})),r.d(ke,"exportSpeed",(function(){return ap})),r.d(ke,"exportPaletteGenOnce",(function(){return cp})),r.d(ke,"exportPaletteSize",(function(){return sp})),r.d(ke,"Shader",(function(){return lp}));var Ae={};r.r(Ae),r.d(Ae,"n",(function(){return up})),r.d(Ae,"title",(function(){return pp})),r.d(Ae,"exportSize",(function(){return dp})),r.d(Ae,"exportStart",(function(){return vp})),r.d(Ae,"exportEnd",(function(){return hp})),r.d(Ae,"exportFramePerSecond",(function(){return mp})),r.d(Ae,"exportSpeed",(function(){return gp})),r.d(Ae,"exportPaletteGenOnce",(function(){return xp})),r.d(Ae,"exportPaletteSize",(function(){return bp})),r.d(Ae,"Shader",(function(){return yp}));var De={};r.r(De),r.d(De,"n",(function(){return _p})),r.d(De,"title",(function(){return Sp})),r.d(De,"exportSize",(function(){return Ep})),r.d(De,"exportStart",(function(){return Op})),r.d(De,"exportEnd",(function(){return Rp})),r.d(De,"exportFramePerSecond",(function(){return Pp})),r.d(De,"exportSpeed",(function(){return zp})),r.d(De,"exportPaletteGenOnce",(function(){return Tp})),r.d(De,"exportPaletteSize",(function(){return Ip})),r.d(De,"Shader",(function(){return Cp}));var Le={};r.r(Le),r.d(Le,"n",(function(){return kp})),r.d(Le,"title",(function(){return Ap})),r.d(Le,"exportSize",(function(){return Dp})),r.d(Le,"exportStart",(function(){return Lp})),r.d(Le,"exportEnd",(function(){return Np})),r.d(Le,"exportFramePerSecond",(function(){return Mp})),r.d(Le,"exportSpeed",(function(){return Up})),r.d(Le,"exportPaletteGenOnce",(function(){return Fp})),r.d(Le,"exportPaletteSize",(function(){return Bp})),r.d(Le,"Shader",(function(){return qp}));var Ne={};r.r(Ne),r.d(Ne,"n",(function(){return $p})),r.d(Ne,"title",(function(){return Hp})),r.d(Ne,"exportSize",(function(){return Vp})),r.d(Ne,"exportStart",(function(){return Wp})),r.d(Ne,"exportEnd",(function(){return Xp})),r.d(Ne,"exportFramePerSecond",(function(){return Kp})),r.d(Ne,"exportSpeed",(function(){return Yp})),r.d(Ne,"exportPaletteGenOnce",(function(){return Qp})),r.d(Ne,"exportPaletteSize",(function(){return Zp})),r.d(Ne,"Shader",(function(){return Jp}));var Me={};r.r(Me),r.d(Me,"n",(function(){return td})),r.d(Me,"title",(function(){return rd})),r.d(Me,"exportSize",(function(){return nd})),r.d(Me,"exportStart",(function(){return od})),r.d(Me,"exportEnd",(function(){return id})),r.d(Me,"exportFramePerSecond",(function(){return ad})),r.d(Me,"exportSpeed",(function(){return cd})),r.d(Me,"exportPaletteGenOnce",(function(){return sd})),r.d(Me,"exportPaletteSize",(function(){return ld})),r.d(Me,"Shader",(function(){return fd}));var Ue={};r.r(Ue),r.d(Ue,"n",(function(){return pd})),r.d(Ue,"title",(function(){return dd})),r.d(Ue,"exportSize",(function(){return vd})),r.d(Ue,"exportStart",(function(){return hd})),r.d(Ue,"exportEnd",(function(){return md})),r.d(Ue,"exportFramePerSecond",(function(){return gd})),r.d(Ue,"exportSpeed",(function(){return xd})),r.d(Ue,"exportPaletteGenOnce",(function(){return bd})),r.d(Ue,"exportPaletteSize",(function(){return yd})),r.d(Ue,"Shader",(function(){return wd}));var Fe={};r.r(Fe),r.d(Fe,"n",(function(){return Sd})),r.d(Fe,"title",(function(){return Ed})),r.d(Fe,"exportSize",(function(){return Od})),r.d(Fe,"exportStart",(function(){return Rd})),r.d(Fe,"exportEnd",(function(){return Pd})),r.d(Fe,"exportFramePerSecond",(function(){return zd})),r.d(Fe,"exportSpeed",(function(){return Td})),r.d(Fe,"exportPaletteGenOnce",(function(){return Id})),r.d(Fe,"exportPaletteSize",(function(){return Cd})),r.d(Fe,"Shader",(function(){return jd}));var Be={};r.r(Be),r.d(Be,"n",(function(){return Ad})),r.d(Be,"title",(function(){return Dd})),r.d(Be,"exportSize",(function(){return Ld})),r.d(Be,"exportStart",(function(){return Nd})),r.d(Be,"exportEnd",(function(){return Md})),r.d(Be,"exportFramePerSecond",(function(){return Ud})),r.d(Be,"exportSpeed",(function(){return Fd})),r.d(Be,"exportPaletteGenOnce",(function(){return Bd})),r.d(Be,"exportPaletteSize",(function(){return qd})),r.d(Be,"Shader",(function(){return Gd}));var qe={};r.r(qe),r.d(qe,"n",(function(){return Hd})),r.d(qe,"title",(function(){return Vd})),r.d(qe,"exportSize",(function(){return Wd})),r.d(qe,"exportStart",(function(){return Xd})),r.d(qe,"exportEnd",(function(){return Kd})),r.d(qe,"exportFramePerSecond",(function(){return Yd})),r.d(qe,"exportSpeed",(function(){return Qd})),r.d(qe,"exportPaletteGenOnce",(function(){return Zd})),r.d(qe,"exportPaletteSize",(function(){return Jd})),r.d(qe,"Shader",(function(){return ev}));var Ge={};r.r(Ge),r.d(Ge,"n",(function(){return rv})),r.d(Ge,"title",(function(){return nv})),r.d(Ge,"exportSize",(function(){return ov})),r.d(Ge,"exportStart",(function(){return iv})),r.d(Ge,"exportEnd",(function(){return av})),r.d(Ge,"exportFramePerSecond",(function(){return cv})),r.d(Ge,"exportSpeed",(function(){return sv})),r.d(Ge,"exportPaletteGenOnce",(function(){return lv})),r.d(Ge,"exportPaletteSize",(function(){return fv})),r.d(Ge,"Shader",(function(){return uv}));var $e={};r.r($e),r.d($e,"n",(function(){return dv})),r.d($e,"title",(function(){return vv})),r.d($e,"exportSize",(function(){return hv})),r.d($e,"exportStart",(function(){return mv})),r.d($e,"exportEnd",(function(){return gv})),r.d($e,"exportFramePerSecond",(function(){return xv})),r.d($e,"exportSpeed",(function(){return bv})),r.d($e,"exportPaletteGenOnce",(function(){return yv})),r.d($e,"exportPaletteSize",(function(){return wv})),r.d($e,"Shader",(function(){return _v}));var He={};r.r(He),r.d(He,"n",(function(){return Ev})),r.d(He,"title",(function(){return Ov})),r.d(He,"exportSize",(function(){return Rv})),r.d(He,"exportStart",(function(){return Pv})),r.d(He,"exportEnd",(function(){return zv})),r.d(He,"exportFramePerSecond",(function(){return Tv})),r.d(He,"exportSpeed",(function(){return Iv})),r.d(He,"exportPaletteGenOnce",(function(){return Cv})),r.d(He,"exportPaletteSize",(function(){return jv})),r.d(He,"Shader",(function(){return kv}));var Ve={};r.r(Ve),r.d(Ve,"n",(function(){return Dv})),r.d(Ve,"title",(function(){return Lv})),r.d(Ve,"exportSize",(function(){return Nv})),r.d(Ve,"exportStart",(function(){return Mv})),r.d(Ve,"exportEnd",(function(){return Uv})),r.d(Ve,"exportFramePerSecond",(function(){return Fv})),r.d(Ve,"exportSpeed",(function(){return Bv})),r.d(Ve,"exportPaletteGenOnce",(function(){return qv})),r.d(Ve,"exportPaletteSize",(function(){return Gv})),r.d(Ve,"Shader",(function(){return $v}));var We={};r.r(We),r.d(We,"n",(function(){return Vv})),r.d(We,"title",(function(){return Wv})),r.d(We,"exportSize",(function(){return Xv})),r.d(We,"exportStart",(function(){return Kv})),r.d(We,"exportEnd",(function(){return Yv})),r.d(We,"exportFramePerSecond",(function(){return Qv})),r.d(We,"exportSpeed",(function(){return Zv})),r.d(We,"exportPaletteGenOnce",(function(){return Jv})),r.d(We,"exportPaletteSize",(function(){return eh})),r.d(We,"Shader",(function(){return th}));var Xe={};r.r(Xe),r.d(Xe,"n",(function(){return nh})),r.d(Xe,"title",(function(){return oh})),r.d(Xe,"exportSize",(function(){return ih})),r.d(Xe,"exportStart",(function(){return ah})),r.d(Xe,"exportEnd",(function(){return ch})),r.d(Xe,"exportFramePerSecond",(function(){return sh})),r.d(Xe,"exportSpeed",(function(){return lh})),r.d(Xe,"exportPaletteGenOnce",(function(){return fh})),r.d(Xe,"exportPaletteSize",(function(){return uh})),r.d(Xe,"Shader",(function(){return ph}));var Ke={};r.r(Ke),r.d(Ke,"n",(function(){return vh})),r.d(Ke,"title",(function(){return hh})),r.d(Ke,"exportSize",(function(){return mh})),r.d(Ke,"exportStart",(function(){return gh})),r.d(Ke,"exportEnd",(function(){return xh})),r.d(Ke,"exportFramePerSecond",(function(){return bh})),r.d(Ke,"exportSpeed",(function(){return yh})),r.d(Ke,"exportPaletteGenOnce",(function(){return wh})),r.d(Ke,"exportPaletteSize",(function(){return _h})),r.d(Ke,"Shader",(function(){return Sh}));var Ye={};r.r(Ye),r.d(Ye,"n",(function(){return Oh})),r.d(Ye,"title",(function(){return Rh})),r.d(Ye,"exportSize",(function(){return Ph})),r.d(Ye,"exportStart",(function(){return zh})),r.d(Ye,"exportEnd",(function(){return Th})),r.d(Ye,"exportFramePerSecond",(function(){return Ih})),r.d(Ye,"exportSpeed",(function(){return Ch})),r.d(Ye,"exportPaletteGenOnce",(function(){return jh})),r.d(Ye,"exportPaletteSize",(function(){return kh})),r.d(Ye,"Shader",(function(){return Ah}));var Qe={};r.r(Qe),r.d(Qe,"n",(function(){return Lh})),r.d(Qe,"title",(function(){return Nh})),r.d(Qe,"exportSize",(function(){return Mh})),r.d(Qe,"exportStart",(function(){return Uh})),r.d(Qe,"exportEnd",(function(){return Fh})),r.d(Qe,"exportFramePerSecond",(function(){return Bh})),r.d(Qe,"exportSpeed",(function(){return qh})),r.d(Qe,"exportPaletteGenOnce",(function(){return Gh})),r.d(Qe,"exportPaletteSize",(function(){return $h})),r.d(Qe,"Shader",(function(){return Hh}));var Ze=r("nKUr"),Je=r("rr/c");const et=1,tt="Hello 2020",rt=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:nt.day001,uniforms:{time:e}}),nt=Je.Shaders.create({day001:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
float vingt (vec2 p) {
  p *= 1.1;
  p -= 0.1;
  return step(0.3, p.x) * step(p.x, 0.5) * 
  step(0.5, p.y) * step(p.y, 1.0) +
  step(0., p.x) * step(p.x, 0.2) * 
  step(0., p.y) * step(p.y, 0.5) +
  step(0., p.x) * step(p.x, 0.5) * 
  step(0., p.y) * step(p.y, 0.2) +
  step(0., p.x) * step(p.x, 0.5) * 
  step(0.4, p.y) * step(p.y, 0.6) +
  step(0., p.x) * step(p.x, 0.5) * 
  step(0.8, p.y) * step(p.y, 1.0) +
  step(0.6, p.x) * step(p.x, 1.0) * 
  step(0.1, p.y) * step(p.y, 0.9) -
  step(0.7, p.x) * step(p.x, 0.9) * 
  step(0.2, p.y) * step(p.y, 0.8);
}
void main() {
  vec2 p = uv + 0.1 * vec2(cos(uv.x*10.+time*0.1), sin(1.0+uv.y*10.+time*0.2));
  p -= 0.2 * pow(time*0.1, 1.3);
  vec2 r = p * (0.1+pow(0.2*time, 1.2));
  float s = vingt(mod(r, 1.0)) * step(mod(r.x, 4.0), 2.0) * step(mod(r.y, 2.0), 1.0);
  gl_FragColor = vec4(
    mix(
      vec3(1., 1., 1.),
      vec3(uv.x, uv.y, 0.5 + 0.2 * cos(time)),
      step(0.5, s)
    ), 1.0);
}`}}),ot=2,it="stripes",at=400,ct=0,st=60,lt=24,ft=1,ut=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:pt.node,uniforms:{time:e}}),pt=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define GIF
 
float shape (vec2 p, float d) {
  float t = 0.5 + time * 0.05;
  t = pow(t, 2.);
  t += d * 0.003 * pow(t, 1.1);
  p -= 0.5;
  p /= 2.0;
  p *= mat2(cos(t), -sin(t), sin(t), cos(t));
  p += 0.5;
  t *= 2.;
  vec2 c = p - vec2(.5+0.2*cos(t), .5-0.2*sin(t));
  p *= length(c);
  float m = mod(p.x * 5.* smoothstep(0., 5., t) + t * c.y, 1.0);
  return step(length(vec2(m, p.y) - .5), .42);
}

void main() {
  vec3 c = vec3(0.);
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      vec2 uvP = uv;
      uvP += vec2(x, y) / 800.0;
      c += vec3(
        shape(uvP, -1.),
        shape(uvP, 0.),
        shape(uvP, 1.)
      );
    }
  }
  c /= 4.;
  #ifdef GIF
  c *= smoothstep(60., 59., time) * smoothstep(0., 1., time);
  #endif
  gl_FragColor = vec4(c, 1.0);
}`}}),dt=3,vt="zephyr",ht=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:mt.node,uniforms:{time:e}}),mt=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

float flower (vec2 p, float n, float s, float r) {
  float a = 0.5 + 0.5 * atan(p.y, p.x) / PI;
  float d = length(p);
  float amp = (1. + 0.5 * cos((r + a * n) * 2. * PI)) / 3.;
  return step(d, s * amp);
}

float helios (vec2 p, float n, float s, float r) {
  return step(
    length(p) - step(length(p), 0.03),
    s * fract(r + n * (0.5 + 0.5 * atan(p.y, p.x) / PI)));
}

vec2 pattern (vec2 p, vec2 m) {
  float f = 0.5 * m.y * step(1., mod(0.5 + p.x / m.x, 2.));
  p.y += f;
  p = mod(p + m / 2., m) - m / 2.;
  return p;
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 clr (float f) {
  float c = cos(time);
  f += 0.2 * (1. + sign(c) * pow(abs(c), 0.2));
  return palette(
    f,
    vec3(0.5),
    vec3(0.5),
    vec3(1.00, 1.00, 1.00),
    vec3(0.0, 0.2, 0.3)
  );
}

void main() {
  vec3 c = mix(
    mix(
      clr(0.2),
      clr(0.18),
      helios(uv - 0.5, 5., 0.4, 0.2 * time)
    ),
    clr(.2 + .1 * cos(6. * time + floor(10.0 * uv.y + 0.5))),
    flower(pattern(uv, vec2(0.2)), 5., 0.1, time)
  );
  gl_FragColor = vec4(c, 1.0);
}`}});var gt=r("q1tI"),xt=r.n(gt);const bt=Je.Shaders.create({InitGameOfLife:{frag:Je.GLSL`
  precision highp float;
  uniform float seed;
  // i
  varying vec2 uv;
  float random (vec2 uv) {
    return fract(sin(dot(uv + seed, vec2(12.9898,78.233))) * 43758.5453);
  }
  // i
  void main() {
    gl_FragColor = vec4(vec3(step(0.5, random(uv))), 1.0);
  }`},GameOfLife:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform float size;
  uniform sampler2D t; // the previous world state
  void main() {
    float prev = step(0.5, texture2D(t, uv).r);
    float c = 1.0 / size;
    float sum =
    step(0.5, texture2D(t, uv + vec2(-1.0, -1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2(-1.0,  0.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2(-1.0,  1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 0.0,  1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 1.0,  1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 1.0,  0.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 1.0, -1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 0.0, -1.0)*c).r);
    float next = prev==1.0 && sum >= 2.0 && sum <= 3.0 || sum == 3.0 ? 1.0 : 0.0;
    gl_FragColor = vec4(vec3(next), 1.0);
  }`}}),yt=xt.a.memo((({tick:e,size:t,refreshEveryTicks:r})=>e%(r||1/0)===0?Object(Ze.jsx)(Je.Node,{shader:bt.InitGameOfLife,uniforms:{seed:Math.random()},width:t,height:t,backbuffering:!0,sync:!0}):Object(Ze.jsx)(Je.Node,{shader:bt.GameOfLife,width:t,height:t,backbuffering:!0,sync:!0,uniforms:{t:Je.Uniform.Backbuffer,size:t}}))),wt=4,_t="Ray of Life";let St;const Et=({time:e})=>{St||(St=e);const t=e-St,r=Math.floor(10*t),n=r+25,o=10*(1+Math.floor(r/50)),i=10*(1+Math.floor(n/50));return Object(Ze.jsx)(Ot,{time:e,a:Object(Ze.jsx)(Je.NearestCopy,{children:Object(Ze.jsx)(yt,{refreshEveryTicks:50,tick:r,size:o})}),b:Object(Ze.jsx)(Je.NearestCopy,{children:Object(Ze.jsx)(yt,{refreshEveryTicks:50,tick:n,size:i})})})},Ot=({a:e,b:t,time:r})=>Object(Ze.jsx)(Je.Node,{uniforms:{a:e,b:t,time:r},shader:Rt.main}),Rt=Je.Shaders.create({main:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D a, b;

const float PI = ${Math.PI};

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
  float t = mod(time * 0.2, 2.);
  vec2 p = uv - .5;
  float x = 0.5 + 0.5 * atan(p.y, p.x) / PI;
  float y = mod((sqrt(1.6 * length(p)) - 2. * time / 5.), 2.);
  x = mod(x + 0.1 * y, 1.);
  float y1 = fract(y);
  float y2 = fract(y - 1.);
  float sa = step(1., y);
  float sb = step(y, 1.);
  float wallA = texture2D(a, vec2(x, y1)).r;
  float wallB = texture2D(b, vec2(x, y2)).r;
  float fade = smoothstep(.01, .011, length(p));
  vec3 c =
    palette(
      .5 +
      fade * (
      0.02 * step(fract(20. * x), 0.5) +
      .1 * sa * wallA -
      .1 * sb * wallB ),
      vec3(.8),
      vec3(.5),
      vec3(.3, .9, .9),
      vec3(0.8, 0.3, 0.2)
    );
  gl_FragColor = vec4(c, 1.0);
}`}}),Pt=5,zt="Here We Go Again",Tt=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:It.node,uniforms:{time:e}}),It=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

float opRepF(in float p, in float s) {
  return mod(p+s*0.5,s)-s*0.5;
}
vec2 opRep(in vec2 p, in float s) {
  return mod(p+s*0.5,s)-s*0.5;
}

mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float sphere (vec3 p, float r) {
  return length(p)-r;
}

float box (vec3 p, vec3 c) {
  return length(max(abs(p)-c,0.));
}

float smin( float a, float b, float k ) {
  float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
  return mix( b, a, h ) - k*h*(1.0-h);
}

float smax(float a,float b, float k) {
    return -smin(-a,-b,k);
}

float shape (vec3 p) {
  float a = box(p, vec3(3.));
  float b = sphere(p, 3.8);
  return max(-b, a);
}

float shape2 (vec3 p) {
  vec3 w = vec3(p);
  p.xy = opRep(p.xy, 2.);
  p.z = opRepF(p.z, 2.);
  float s = sphere(p, 1.4 + 0.6 * cos(6. * time));
  s = max(s, box(w, vec3(3.)));
  return s;
}

float SDF(vec3 p) {
  float s = 99.;
  p.x -= 3.;
  p.zy *= rot(cos(time / 5.));
  p.zx *= rot(cos(time / 2.));
  p.yx *= rot(0.5 * sin(time / 3.));
  p.z = opRepF(p.z, 20.);
  p.z -= 3.;
  p.x = opRepF(p.x, 20.);
  p.x -= 3.;
  float s1 = min(s, shape(p));
  p.z += 7.;
  p.x += 7.;
  float s2 = min(s, shape2(p));
  return min(s1, s2);
}

void main() {
  vec3 p = vec3 (0., 0., -14.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  vec3 c =
    pow(smoothstep(50., 0., p.z), 3.) *
    sqrt(vec3(1. - shad));
  gl_FragColor = vec4(c,1.0);
}`}}),Ct=6,jt="Bestagons",kt=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:At.node,uniforms:{time:e}}),At=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float SEED = ${Math.random()};

// from http://glslsandbox.com/e#43182.0
#define SQRT3 1.7320508
const vec2 s = vec2(1.0, SQRT3);
float hex(in vec2 p){
  p = abs(p);
  return max(dot(p, s*.5), p.x);
}
vec4 getHex(vec2 p) {
  vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
  vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
  return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
}
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
///////////////////////////////////////////


vec4 scene (vec4 h) {
  vec2 p = h.xy;
  vec2 id = h.zw;
  float one = step(0., p.x+s.y*p.y) * step(0., s.y*p.y-p.x);
  float two = step(0., p.x-s.y*p.y) * step(0., p.x);
  float thr = step(p.x+s.y*p.y, 0.) * step(p.x, 0.);
  float special =
      step(mod(id.y, 4.), mod(id.x, 3.5)) *
      step(mod(id.x + 3.*id.y, 5.), 0.5);
  vec3 c =
  palette(
    0.1 * one + 0.2 * two + 0.3 * thr,
    vec3(0.5),
    vec3(0.5),
    vec3(1.00, 1.00, 1.00),
    vec3(
      mod(id.y * 73.6, 1.) * special * smoothstep(1.0, 0.0, cos(time + 0.1 * uv.x)),
      0.8 * fract((id)*0.01))
  );
  return vec4(c, 1.0);
}

void main() {
  vec2 p = 1000.0 * SEED + 0.3 * time + 5. * uv;
  gl_FragColor = scene(getHex(p));
}`}}),Dt=7,Lt="Worms party",Nt=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Mt.node,uniforms:{time:e}}),Mt=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

// from http://glslsandbox.com/e#43182.0
#define SQRT3 1.7320508
const vec2 s = vec2(1.0, SQRT3);
float hex(in vec2 p){
  p = abs(p);
  return max(dot(p, s*.5), p.x);
}
vec4 getHex(vec2 p) {
  vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
  vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
  return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
}
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
///////////////////////////////////////////

mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}

vec2 id;

float SDF(vec3 p) {
  // The whole 3D objects are defined in this function
  p.z += 3. + cos(0.5 * time);
  p.yz *= rot(-1. + 0.1 * pow(.5 + .5*cos(0.9 * time), 4.) + 0.2 * cos(.08 * time));
  p.xz *= rot(.1 * time);
  vec4 h = getHex(p.xz);
  id = h.zw;
  p.x = h.x;
  p.z = h.y;
  p.x += 0.1 * sin(4.*(p.z + p.y + time - 0.03 * id.x));
  return sdSegment(p.xyz, 3., 0.25);
}

void main() {
  vec3 p = vec3 (0., 0., -10.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }

  // Coloring
  vec3 c =
    pow(smoothstep(50., 0., p.z), 3.) *
    // it was pretty hard to get a nice palette.
    // not satisfied with current result..
    palette(
      shad,
      vec3(.5),
      vec3(.5),
      vec3(1., 0.2, 0.),
      vec3(
        0.6,
        0.5  + 0.5 * cos(time + 10. * length(id)),
        0.3 + 0.2 * cos(.7*time + 13. * length(id))
      )) *
    sqrt(vec3(1. - shad));
  gl_FragColor = vec4(c,1.0);
}`}}),Ut=8,Ft="moontains",Bt=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:qt.node,uniforms:{time:e}}),qt=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

//////// https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in vec2 c, float h )
{
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(c.x/c.y,-1.0);
    
  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
/////////

vec3 clr (float f) {
  return palette(
    f,
    vec3(0.5),
    vec3(0.5),
    vec3(1.00, 1.00, 1.00),
    //vec3(0.3, 0.6, 1.)
    vec3(0.3, 0.15, 1.)
  );
}

float SDF(vec3 p) {
  p.z += 4.;
  p.y -= 2.;
  p.x += 4. + .2 * cos(2. * time);
  float s = sdCone(p, vec2(1. + .1 *  cos(p.z*8. - 5.*time), 2.), 6.) - .5;
  p.x -= 3.;
  s = min(s, sdCone(p, vec2(1. + .1 *  cos(p.z*13. - 9.*time), 2.), 6.)-.8);
  p.x -= 3.;
  s = min(s, sdCone(p, vec2(1. + .1 *  sin(p.z*11. - 7.*time), 2.), 6.)-.9);
  p.x -= 3.;
  s = min(s, sdCone(p, vec2(1. + .1 *  sin(p.z*10. - 5.*time), 2.), 6.)-.5);
  p.x -= -15. + 20. * fract(.1 * time);
  p.z -= 3.;
  p.y -= 5. + .3 * cos(2. * time);
  s = min(s, max(0.6-length(p-vec3(0.3, 0.1, 0.1)), length(p)-0.6));
  return s;
}

void main() {
  vec3 p = vec3 (0., 0., -10.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  
  // Coloring
  vec3 c =
    clr(p.z * 0.2) *
    pow(smoothstep(50., 0., p.z), 3.) *
    vec3(sqrt(1. - shad));
  gl_FragColor = vec4(c,1.0);
}
`}}),Gt=9,$t="Virus",Ht=400,Vt=16.3,Wt=26,Xt=24,Kt=.8,Yt=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Qt.node,uniforms:{time:e}}),Qt=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}
mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h); }

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdSphere( vec3 p, float d ) {
  return length(p) - d;
}

float sdParticle( vec3 p, float d, float dist ) {
  return opSmoothUnion(
    length(p) - d,
    sdSegment(p.yxz+vec3(0.,dist,0.), dist, 0.2 * d),
    0.2
  );
}

// badly failing at making a "good" radial repeat
vec3 opRepeatPolar (vec3 p, float n, float R, float offsetA) {
  float SCALE = n/(2. * PI);
  vec2 pos2d = p.xz;
  float r = length(pos2d) / R;
  pos2d = vec2(log(r), offsetA + atan(p.z, p.x)) * SCALE;
  pos2d.y = fract(pos2d.y) - 0.5;
  return vec3(pos2d, SCALE * p.y / r);
}

vec3 opRep( in vec3 p, in vec3 c ) {
  vec3 q = mod(p+0.5*c,c)-0.5*c;
  return q;
}

float sdVirus (vec3 p, vec3 gp) {
  p.yz *= rot(-1.4 + 0.1 * cos((0.2 + gp.z * 0.001) * time));
  p.xz *= rot(0.01 * gp.z + 0.3 * cos(1. + 0.3 * time + 0.1 * gp.z));
  p.xy *= rot(.02 * gp.z + 0.3 * sin(0.4 * time));
  float s = sdSphere(p, 2.);
  p.y = abs(p.y);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p, 18., 2.2, 0.),
    0.2,
    0.4
  ), 0.2);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0., 1., 0.), 14., 1.9, 0.),
    0.15,
    0.4
  ), 0.3);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0., 1.7, 0.), 10., 1.5, 0.),
    0.15,
    0.4
  ), 0.3);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0., 2.1, 0.), 6., 0.6, .2),
    0.18,
    0.0
  ), 0.2);
  return s;
}

float SDF(vec3 p) {
  vec3 gp = p;
  float SCALE = 6./PI;
  p.xy *= rot(.04 * time);
  float s = sdVirus(p, gp);
  p -= vec3(4., 4., 4.);
  p.xy *= rot(p.z * .05);
  p.yz *= rot(p.z * .01);
  p.x += 0.7 * time;
  p.y += 0.8 * time;
  p.z -= time;
  float dist = 10. * smoothstep(10., 0., time);
  p = opRep(p, vec3(9.4 + dist, 6.4 + dist, 10. + dist));
  s = min(s, mix(99., sdVirus(p, gp), step(1., gp.z)));
  return s;
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float z, float shad) {
  float p = sqrt(1. - shad);
  vec3 c =
  palette(p,
    vec3(.5, .4, .9),
    vec3(.6),
    vec3(0.6, 0.5, 0.4),
    vec3(0.3-time, 0.5, 0.9))
  * p
  * smoothstep(30., 5., z);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  float edge = min(min(uv.x, 1.-uv.x), min(uv.y, 1.-uv.y));
  gl_FragColor = vec4(
    mix(
      color(p.z, shad),
      color(0., 0.5),
      step(edge, 0.02)
    )
    , 1.0);
}
`}}),Zt=10,Jt="ring",er=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:tr.node,uniforms:{time:e}}),tr=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}
mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h); }

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdSphere( vec3 p, float d ) {
  return length(p) - d;
}

float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a)) * r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}

float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}

float REP;

float SDF(vec3 p, float nb) {
  p.z -= 5. + 2. * cos(3. * time);

  pR(p.yz, abs(0.6 * cos(0.2 * time)));

  pR(p.xy, 0.7 * time);
  
  float middle = sdSphere(p, 1.5);
  float m = pModPolar(p.xy, 3. + mod(floor(1337.9 * floor(nb)), 8.));
  p.x -= time;

  REP = pMod1(p.x, 4.);
  p.y += 20.;
  float s = sdSegment(p, 40., 0.3);
  p.y -= 20.;
  float bounce = cos(REP+ 2. * m + 12. * time);
  s = opSmoothUnion(s, sdSphere(p - vec3(.0, .0, .3 * bounce), (1. + 0.3 * bounce) * smoothstep(.5, .4, sin(0.2 * time))), 0.3);

  p.x -= 2.;

  pR(p.yz, 10. * time);

  s = min(s, sdBox(p, vec3(0.2)));

  return opSmoothUnion(middle, s, 0.3);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float d, float shad) {
  vec3 c =
  palette(fract(0.5 + 0.01 * time * REP),
    vec3(.6),
    vec3(.6),
    vec3(1.),
    vec3(0.6, 0.4, 0.2))
  * sqrt(1. - shad);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  float nb = 0.2 * time;
  for (int i=0; i<60; i++) {
    float d = SDF(p, nb);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  gl_FragColor = vec4(
    smoothstep(0.02, 0.04, abs(fract(nb+0.02))) *
    color(length(p.xy), shad),
    1.0);
}
`}}),rr=11,nr="magic mouse",or=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:ir.node,uniforms:{time:e}}),ir=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a)) * r;
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}

float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h); }

float sdSphere( vec3 p, float d ) {
  return length(p) - d;
}

float opMouse (vec3 p) {
  return opSmoothUnion(
    sdSphere(p, 1.),
    min(
      sdSphere(p + vec3(-.8, 0., .8), 0.5),
      sdSphere(p + vec3(.8, 0., .8), 0.5)
    ),
    0.1
  );
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

float REP;
float POL;
float BIG;

float SDF(vec3 p) {
  vec3 bp = p;
  pR(bp.yz, 0.9);
  pR(bp.xy, 2. * time);
  float bigMouse = opMouse(bp);
  BIG = step(bigMouse, 0.001);
  p.x -= 20. + 3. * cos(time) + 0.2 * time;
  p.y -= 4.;
  p.z -= 7. + 0.1 * time;
  pR(p.yz, 0.6 + abs(0.4 * cos(0.15 * time)));
  pR(p.xy, 0.8 * time);
  float n = 10. + time;
  POL = pModPolar(p.xy, n);
  p.x -= time;
  REP = pMod1(p.x, 10. - 4. * smoothstep(0., 30., time));
  p.z += abs(2. * cos(
    time *
    (2. + 0.2 * REP + POL/n)
  ));
  return opSmoothUnion(
    opMouse(p),
    bigMouse,
    3.
  );
}

vec3 color (float d, float shad) {
  vec3 c =
  mix(
  palette((0.2) * POL,
    vec3(1.),
    vec3(0.5),
    vec3(1., 1., 1. - 0.7 * REP),
    vec3(0.9, 0.2, 0.6)),
    vec3(1.2),
    BIG
  )
  * sqrt(1. - shad);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  gl_FragColor = vec4(
    color(length(p.xy), shad),
    1.0);
}
`}}),ar=12,cr="floor is lava",sr=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:lr.node,uniforms:{time:e}}),lr=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

float SDF(vec3 p) {
  pR(p.yz, 2.5 + 0.3 * abs(0.8 + cos(time)));
  pR(p.xz, 2.);
  float s = 4. * cos(0.2 * p.x + 2. * time) * sin(0.1 * p.z + 1.3 * time);
  pR(p.xz, 1.);
  s += 1.6 * cos(0.2 * p.x + 5. * time) * cos(0.5 * p.z + time);
  pR(p.xz, 0.1 * time);
  s += 0.6 * cos(0.7 * p.x + 1. * time) * sin(0.9 * p.z);
  pR(p.xz, time);
  s += 0.4 * length(p);
  s += -p.y + 3.;
  return s;
}

vec3 color (float d, float shad) {
  vec3 c = palette(
    shad,
    vec3(.5),
    vec3(.5),
    vec3(0.0, 0.8, 0.9),
    vec3(0.1, 0.9, 0.4 * fract(3. * time))
  ) * sqrt(1. - shad);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  gl_FragColor = vec4(
    color(p.z, shad),
    1.0);
}
`}}),fr=13,ur="chip",pr=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:dr.node,uniforms:{time:e}}),dr=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.6),
    vec3(.3),
    vec3(1.),
    vec3(.2, .55, .75)
  );
}

void main() {
  vec2 p = uv - .5;
  vec2 ap = abs(p);
  float rect = max(ap.x, ap.y) - .2; // rect
  float m = 8.;
  float squircle = pow(pow(ap.x, m) + pow(ap.y, m), 1./m) - .2; // squircle
  float a = 0.5 + 0.5 * atan(p.y, p.x) / PI;
  vec3 glow =
    step(0., rect) *
    ( pow(smoothstep(0.3, 0., squircle), 8.)
      + 0.2 * smoothstep(0.02, 0., rect)
      - 0.3 ) *
    color(a + 0.8 + 0.1 * time);
  vec3 shade =
    step(rect, 0.) * 0.4 * (.05 + vec3(p.y - p.x));
  gl_FragColor = vec4(shade + glow, 1.0);
}
`}}),vr=14,hr="seizure",mr=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:gr.node,uniforms:{time:e}}),gr=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.6 + .1 * cos(.3 * time)),
    vec3(1.),
    vec3(0.22, 0.5, 0.77)
  );
}

void main() {
  float tri = max(
    0.2 - uv.y,
    max( 0.6 * uv.y - uv.x - 0.,
         0.6 * uv.y + uv.x - 1.));
  tri = max(-step(fract(time), 0.5), tri); // blink 500ms
  gl_FragColor = vec4(
    step(tri, 0.) * color(1.6 * (uv.y + time)) +
    step(0., tri) * color(sqrt(max(tri, 0.)) - 2. * time),
    1.0);
}
`}}),xr=Je.Shaders.create({blur1D:{frag:Je.GLSL`precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform vec2 direction, resolution;

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

void main () {
  gl_FragColor = blur9(t, uv, resolution, direction);
}`}});var br=({width:e,height:t,pixelRatio:r,direction:n,children:o})=>Object(Ze.jsx)(Je.Node,{shader:xr.blur1D,width:e,height:t,pixelRatio:r,uniforms:{direction:n,resolution:Je.Uniform.Resolution,t:o}});const yr=Math.sqrt(2)/2;var wr=(e,t,r)=>{const n=2*t*Math.ceil(e/2)/r;switch((e-1)%4){case 0:return[n,0];case 1:return[0,n];case 2:return[n*yr,n*yr];case 3:return[n*yr,-n*yr]}};const _r=({width:e,height:t,pixelRatio:r,factor:n,children:o,passes:i,directionForPass:a})=>{const c=s=>s<=0?o:Object(Ze.jsx)(br,{width:e,height:t,pixelRatio:r,direction:a(s,n,i),children:c(s-1)});return c(i)};_r.defaultProps={passes:2,directionForPass:wr};var Sr=_r;const Er=Je.Shaders.create({blur1D:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t, map;
uniform vec2 direction, resolution;

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

void main () {
  gl_FragColor = blur9(t, uv, resolution, direction * texture2D(map, uv).rg);
}`}});var Or=({width:e,height:t,map:r,pixelRatio:n,direction:o,children:i})=>Object(Ze.jsx)(Je.Node,{shader:Er.blur1D,width:e,height:t,pixelRatio:n,uniforms:{direction:o,resolution:Je.Uniform.Resolution,t:i,map:r}});const Rr=({width:e,height:t,map:r,pixelRatio:n,factor:o,children:i,passes:a,directionForPass:c})=>{const s=l=>l<=0?i:Object(Ze.jsx)(Or,{width:e,height:t,map:r,pixelRatio:n,direction:c(l,o,a),children:s(l-1)});return s(a)};Rr.defaultProps={passes:2,directionForPass:wr};const Pr=15,zr="parametric",Tr=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(Cr,{persistence:.98+.02*Math.cos(e)+-.8*Math.exp(-e),children:Object(Ze.jsx)(Sr,{passes:4,factor:.2,children:Object(Ze.jsx)(Ir,{time:e})})})}),Ir=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:jr.node,uniforms:{time:e}}),Cr=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:jr.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),jr=Je.Shaders.create({persistence:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t, back;
uniform float persistence;
void main () {
  gl_FragColor =
    texture2D(t, uv) + persistence*texture2D(back, uv);
}
    `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec2 parametric (in float t) {
  return vec2(
    sin(PI * t) + 0.8 * sin(4. * PI * t) + sin(128. * PI * t) * 0.5,
    cos(PI * t) + 0.8 * cos(4. * PI * t) + cos(128. * PI * t) * 0.5
  );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.4),
    vec3(.4),
    vec3(1.),
    vec3(.0, .33, .66)
  );
}

void main() {
  // this implement some variations of scale/speed/size to make it more trippy
  float base = mod(time, 30.);
  vec2 p = mix(2., 6., smoothstep(0., 10., base)) * (uv - .5);
  float speed = smoothstep(0., 5., base) * 3.;
  float size = 0.01 + 0.1 * smoothstep(8., 0., base);
  // interpolation of parametric function
  vec3 clr = vec3(0.);
  for (float f = 0.; f<1.; f+=1./500.) {
    float t = time + f/60.;
    vec2 c = parametric(speed * t);
    float m = smoothstep(1.1 * size, size, length(p - c));
    if (m > .0) {
      clr = m * color(t);
      break;
    }
  }
  gl_FragColor = vec4(clr, 1.0);
}
`}}),kr=16,Ar="reuleaux",Dr=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Lr.node,uniforms:{time:e}}),Lr=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float sphere (vec3 p, float r) {
  return length(p)-r;
}

float sdReuleaux(vec3 p, float edge) {
  p.y -= edge / 6.;
  p.z -= edge / 6.;
  float h = edge * sqrt(3.) / 2.;
  float a = sphere(p - vec3(0., h / 2., 0.), edge);
  float b = sphere(p + vec3(.5 * edge, h / 2., 0.), edge);
  float c = sphere(p + vec3(-.5 * edge, h / 2., 0.), edge);
  float d = sphere(p + vec3(0., 0., h), edge);
  return max(max(max(a, b), c), d);
}

float shape(vec3 p, float edge, float diverge) {
  float h = edge * sqrt(3.) / 2.;
  float a = sdReuleaux(p + diverge * vec3(0., -h / 2.-edge / 6., -edge / 6.), edge);
  float b = sdReuleaux(p + diverge * vec3(.5 * edge, h / 2. - edge / 6., -edge / 6.), edge);
  float c = sdReuleaux(p + diverge * vec3(-.5 * edge, h / 2.- edge / 6., -edge / 6.), edge);
  float d = sdReuleaux(p + diverge * vec3(0., 0.-edge / 6., h-edge / 6.), edge);
  return min(min(min(a, b), c), d);
}

float SDF(vec3 p) {
  p.yz *= rot(PI/3.);
  p.y += 3.;
  float m = mod(time, 2.2);
  float t1 = min(m, 1.);
  float t2 = max(0., min(m - 1., 1.));
  t1 *= smoothstep(2.1, 1.9, m);
  t2 *= smoothstep(2.1, 1.9, m);
  p.yz *= rot(-PI/3. * t2);
  return shape(p, 3., 2. * (t1 - t2));
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.8),
    vec3(.8),
    vec3(1., .8, .9),
    vec3(.1, .3, .7)
  );
}

void main() {
  vec3 p = vec3(0., 0., -10.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  vec3 c =
    pow(smoothstep(10., -3., p.z), 4.) *
    sqrt(1. - shad) *
    color(0.5 * time);
  gl_FragColor = vec4(c, 1.0);
}`}}),Nr=17,Mr="screws",Ur=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Fr.node,uniforms:{time:e}}),Fr=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0, height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));

	// distance to tip
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}

	// distance to base ring
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}

float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

float sphere (vec3 p, float r) {
  return length(p)-r;
}

float box (vec3 p, vec3 c) {
  return length(max(abs(p)-c,0.));
}

float opU( float d1, float d2 ) {
	return min(d1, d2);
}

float opD( float d1, float d2 ) {
	return max(d1, -d2);
}

float opSmoothSubtraction( float d1, float d2, float k ) {
    float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
    return mix( d2, -d1, h ) + k*h*(1.0-h); }

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void opDig (inout vec3 p, float dig, float k) {
  p.y -= 1.5;
  p.y += dig * 2.2;
  pR(p.xz, dig * k * .5 * PI);
}

float sdScrewHead (vec3 p, vec2 id, float screwW) {
  float r1 = random(id * .01);
  float w = .4;
  float h = .02 * (1. + mod(floor(r1 * 13.), 2.));
  float h2 = .3 * step(r1, .5);
  float sw = 0.5 + 0.5 * step(r1, .3);
  p.y -= 1.;
  vec3 pcut = p - vec3(.0, .1, 0.);
  float cut = box(pcut, vec3(.5 * sw, .04, .02));
  pcut.x -= 10. * step(r1, .7);
  pR(pcut.xz, PI/2.);
  cut = opU(cut, box(pcut, vec3(.5, .04, .02)));
  float head = fCylinder(p + vec3(.0, h2, 0.), 0.12 + screwW, h2);

  if (mod(29. * r1, 7.) < 1.) {
    pModPolar(p.xz, 6.);
    h += .02;
    p.y -= h;
    head = opU(head, box(p, vec3(w * .7, h, w * .7)));
    p.y += h;
    h *= 0.4;
  }
  else {
    head = opU(head, opD(sphere(vec3(1., 4., 1.) * p, w), p.y));
  }
  head = opU(head, fCylinder(p + vec3(.0, h/2., 0.), w, h));

  float s = opSmoothSubtraction(cut, head, .05);
  return s;
}

float sdScrew (vec3 p, float w, float k) {
  float bottom = fCone((p + vec3(.0, 1., .0)) * vec3(1., -1., 1.), w, 3. * w);
  float c = cos(k*p.y);
  float s = sin(k*p.y);
  mat2  m = mat2(c,-s,s,c);
  p.xz *= m;
  return opU(
    box(p, vec3(.2, 1., w)),
    bottom
  );
}

float SDF(vec3 p) {
  // plane floor
  float res = p.y;
  // repeat
  vec2 id = vec2(
    pMod1(p.x, 2.),
    pModInterval1(p.z, 2., -2., 1.)
  );
  float dig = .5 + .5 * cos(0.5 * time * (random(id) + 0.1 * (0.7 * id.x + 2. * id.y - 3.)));
  float k = 8. + 8. * random(id * .001);
  float w = .08 + 0.04 * mod(id.x, 3.);
  // card
  float card = opD(
    box(p, vec3(.8, 0.05, .8)),
    fCylinder(p, 2. * w, .1)
  );
  res = opU(res, card);
  p.y -= .05;
  // screw
  opDig(p, dig, k);
  res = opU(res, sdScrewHead(p, id, w));
  res = opU(res, sdScrew(p, w, k));
  return res;
}

vec3 color (vec3 p) {
  vec3 col =
    vec3(.3) +
    step(.01, p.y) * vec3(.3) +
    step(.11, p.y) * mix(
      vec3(.4, .2, -0.2),
      vec3(.0),
      step(fract(0.25 + (p.x + p.z)/4.), 0.5)
    );

  return col;
}

float raycast( in vec3 ro, in vec3 rd ) {
  float res = -1.0;
  float t = 0.;
  for(int i=0; i<200; i++ ) {
    float h = SDF( ro+rd*t );
    if( abs(h)<(0.0001*t) ) {
        res = t;
        break;
    }
    t += h * .5;
  }
  return res;
}

float calcSoftshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax ) {
    // bounding volume
    float res = 1.0;
    float t = mint;
    for( int i=0; i<24; i++ ) {
		float h = SDF( ro + rd*t );
        float s = clamp(8.0*h/t,0.0,1.0);
        res = min( res, s*s*(3.0-2.0*s) );
        t += clamp( h, 0.02, 0.2 );
        if( res<0.004 ) break;
    }
    return clamp( res, 0.0, 1.0 );
}

vec3 calcNormal( in vec3 pos ) {
  vec2 e = vec2(1.0,-1.0)*0.5773*0.0005;
  return normalize( e.xyy*SDF( pos + e.xyy ) +
          e.yyx*SDF( pos + e.yyx ) +
          e.yxy*SDF( pos + e.yxy ) +
          e.xxx*SDF( pos + e.xxx ));
}

float calcAO( in vec3 pos, in vec3 nor ) {
	float occ = 0.0;
  float sca = 1.0;
  for( int i=0; i<5; i++ ) {
      float h = 0.01 + 0.12*float(i)/4.0;
      float d = SDF( pos + h*nor );
      occ += (h-d)*sca;
      sca *= 0.95;
      if( occ>0.35 ) break;
  }
  return clamp( 1.0 - 3.0*occ, 0.0, 1.0 ) * (0.5+0.5*nor.y);
}

void main() {
  vec3 p = vec3(0., 0., 0.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  p.y += 3.5;
  p.x -= 1.5 - time;
  p.z -= 1.5;
  pR(dir.yz, -.9);
  pR(dir.xz, 0.5 * PI + 0.2 * cos(0.5 * time));

  float t = raycast(p, dir);
  vec3 pos = p + t * dir;
  vec3 nor = calcNormal(pos);
  vec3 ref = reflect(dir, nor);
  float occ = calcAO(pos, nor);

  vec3 lin = vec3(0.0);
  vec3 col = color(pos);
  // sun
  {
    float phase = sin(PI * time / 30.);
    vec3  lig = normalize( vec3(-0.5, 0.4 + phase, -0.7) );
    vec3  hal = normalize( lig - dir );
    float dif = clamp( dot( nor, lig ), 0.0, 1.0 );
  // if( dif>0.0001 )
	      dif *= calcSoftshadow( pos, lig, 0.02, 2.5 );
float spe = pow( clamp( dot( nor, hal ), 0.0, 1.0 ),16.0);
          spe *= dif;
          spe *= 0.04+0.96*pow(clamp(1.0-dot(hal,lig),0.0,1.0),5.0);
    lin += col*1.4*dif*vec3(1.30,1.00,0.70);
  }
  // sky
  {
    float dif = sqrt(clamp( 0.5+0.5*nor.y, 0.0, 1.0 ));
          dif *= occ;
    float spe = smoothstep( -0.2, 0.2, ref.y );
          spe *= dif;
          spe *= 0.04+0.96 * pow(clamp(1.0+dot(nor,dir),0.0,1.0), 5.0 );
          spe *= calcSoftshadow( pos, ref, 0.02, 2.5 );
    lin += col*0.9*dif*vec3(0.8,0.8,1.);
  }
  col = lin;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`}}),Br=18,qr="queen",Gr=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:$r.node,uniforms:{time:e}}),$r=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
float merge (float a, float b) {
  return min(1., a + b);
}
float flower (vec2 p, float n, float s) {
  float a = 0.5 + 0.5 * atan(p.y, p.x) / PI;
  float d = length(p);
  float amp = (1.4 + cos((a * n) * 2. * PI)) / 3.;
  float co = cos(PI/4.);
  float si = sin(PI/4.);
  p *= mat2(co,si,-si,co);
  p = abs(p);
  return smoothstep(0.01 + 0.5 * s, 0.5 * s, max(p.x, p.y)) * smoothstep(d-.01, d+.01, s * amp);
}
float flowerDot (vec2 p, float s) {
  p = abs(p);
  return smoothstep(0.06, 0.05, length(4. * p - s));
}
float circle (vec2 p) {
  return smoothstep(.04, .03, abs(length(p-.5) - .44));
}
float edgeShape (vec2 p) {
  p = 2. * abs(p-.5);
  float a = max(p.x, p.y);
  float b = min(p.x, p.y);
  return smoothstep(.54, .56, a * b * abs(cos(13. * a - 6. * b)));
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1., 1., 0.8),
    vec3(.5, .3, .5)
  );
}

vec3 tile (vec2 p, vec2 g) {
  vec3 c = color(.3);
  c = mix(c, color(.4), merge(circle(p), circle(fract(p + .5))));
  c = mix(c, color(.6), merge(flower(p-.5, 4., 0.35), flowerDot(p-.5, 0.35)));
  c = mix(c, color(.2 + .15 * abs(cos(time + 0.05 * (g.x + g.y)))), edgeShape(p));
  return c;
}

void main() {
  vec2 g = (uv * 2. + vec2(0.01, -0.1) * time) * (1. + 0.01 * cos(time) + 0.01 * time);
  vec2 pos = fract(g);
  gl_FragColor = vec4(tile(pos, g), 1.0);

}`}}),Hr=19,Vr="they were six",Wr=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Xr.node,uniforms:{time:e}}),Xr=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
// from http://glslsandbox.com/e#43182.0 / 007 example
#define SQRT3 1.7320508
const vec2 s = vec2(1.0, SQRT3);
float hex(in vec2 p){
  p = abs(p);
  return max(dot(p, s*.5), p.x);
}
vec4 getHex(vec2 p) {
  vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
  vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
  return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
}
// utilities from classical SDF
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a)) * r;
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
//////
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.7, .9, smoothstep(-1., 1., cos(4. * time + uv.y))),
    vec3(.1, .2, .3)
  );
}

vec3 tile (vec2 p, vec2 g) {
  float r1 = pModPolar(p, 6.); // we start by projecting our hex system into 6 triangles
  p.x -= 1./3.; // move to center of the triangle
  pR(p, (mod(r1, 2.) - .5) * PI / 3.); // depending on oddity, we will rotate counter or clockwise
  float r2 = 1. + pModPolar(p, 3.); // then split again the triangle by 3
  // color index in grid system, see explanation at the end of this file
  float index = mod(2. + mod(3. - mod(floor(.5*(r1 + 5.)), 3.), 3.) - r2, 3.);
  return color(0.1 * index); // pick color from palette!
}

float blob (vec2 p, float t) {
  float cycle = sin(11. * t);
  float cycle2 = cos(.1 * t);
  float climb = mod(.2 * t, 1.8);
  float stopAt = .8;
  // bounce jumps
  p -= vec2(
    .04 * sign(cycle) * pow(abs(cycle), 0.25) * step(climb, stopAt),
    .1 + 0.1 * pow(abs(cycle), 0.5) * step(climb, stopAt)
    + min(stopAt, climb)
    - step(stopAt, climb) * (climb - stopAt) * .82
  );
  vec2 disf = vec2(1./(0.9 - 0.3 * abs(cycle) * step(climb, stopAt)), 1.);
  return smoothstep(.024, .025, length(p * disf));
}

void main() {
  float t = time * smoothstep(0., 10., time);
  // hex grid
  vec2 g = uv * 3. + vec2(0., 0.5 * t);
  vec4 r = getHex(g);
  vec3 c = tile(r.xy * vec2(1., -1.), r.zw);
  // adding blobs
  float nb = step(8., t) + step(19., t) + step(25., t) + 3. * step(30., t);
  vec2 p = uv + vec2(.08, .0);
  float f = pMod1(p.x, 1. / 6.);
  p += step(nb + .1, f);
  c = mix(vec3(1.), c, blob(p, t + (1337. * f)));
  gl_FragColor = vec4(c, 1.0);
}`}}),Kr=20,Yr="trippy tiles",Qr=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(Zr,{persistence:.85,children:Object(Ze.jsx)(Je.Node,{shader:Jr.node,uniforms:{time:e}})})}),Zr=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:Jr.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),Jr=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      persistence
    );
  }
      `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
// from http://glslsandbox.com/e#43182.0 / 007 example
#define SQRT3 1.7320508
const vec2 s = vec2(1.0, SQRT3);
float hex(in vec2 p){
  p = abs(p);
  return max(dot(p, s*.5), p.x);
}
vec4 getHex(vec2 p) {
  vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
  vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
  return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
}
// utilities from classical SDF
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a)) * r;
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
//////
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.5, .2 + mod(.03 * time + 0.2, .3), .8 - mod(.01 * time, .4))
  );
}

vec3 tile (vec2 p, float t) {
  float r1 = pModPolar(p, 6.);
  p.x -= 1./3.;
  pR(p, t);
  float r2 = 1. + pModPolar(p, 3.);
  float index = mod(r2 + mod(-r1, floor(2. + mod(3. * t, 3.))), 3.);
  return color(0.25 * index);
}

void main() {
  float t = pow(0.1 * time, 1.6);
  vec2 p = uv - .5;
  pR(p, .1 * t);
  vec2 g = p * (2. + floor(mod(.2 * time, 4.))) + vec2(0., .2 * t);
  vec4 r = getHex(g);
  vec3 c = tile(r.xy * vec2(1., -1.), t);
  gl_FragColor = vec4(c, 1.0);
}`}}),en=21,tn="HODL",rn=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(nn,{persistence:Math.min(.99,.015*e),time:e,children:Object(Ze.jsx)(Je.Node,{shader:on.node,uniforms:{time:e}})})}),nn=({children:e,persistence:t,time:r})=>Object(Ze.jsx)(Je.Node,{shader:on.shakePersistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t,time:r}}),on=Je.Shaders.create({shakePersistence:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t, back;
uniform float time;
uniform float persistence;
mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}
void main () {
  gl_FragColor = 1.02 * mix(
    texture2D(t, uv),
    texture2D(back, uv + vec2(.0, 0.005) * rot(pow(time, 1.5))),
    persistence
  );
}
    `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};

float rect2d (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float d2d (vec2 p, float w, float h) {
  return min(rect2d(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float bitcoin2d (vec2 p) {
  p.y -= 0.1;
  p.x += .02;
  float inner = d2d(p, 0.04, 0.06);
  float outer = d2d(p, 0.1, 0.1);
  float top = max(-inner, outer);
  top = min(top, rect2d(p - vec2(-.12, .08), vec2(.02)));
  top = min(top, rect2d(p - vec2(-.06, .14), vec2(.02, .04)));
  top = min(top, rect2d(p - vec2(.04, .14), vec2(.02, .04)));
  p.x -= .01;
  p.y += 0.2;
  inner = d2d(p, 0.04, 0.06);
  outer = d2d(p, 0.11, 0.12);
  float bottom = max(-inner, outer);
  bottom = min(bottom, rect2d(p - vec2(-.13, -.09), vec2(.03)));
  bottom = min(bottom, rect2d(p - vec2(-.06, -.16), vec2(.02, .04)));
  bottom = min(bottom, rect2d(p - vec2(.04, -.16), vec2(.02, .04)));
  float f = min(top, bottom);
  return f;
}

vec3 cBase = vec3(.8, .5, .0);
vec3 cMain = vec3(1., .8, .6);
vec3 cSec = vec3(.9, .6, .1);

void main() {
  vec2 p = uv - .5;
  p.y -= 0.05 * min(1., time * .02);
  p *= 1.2;
  float phase = cos(pow(.2 * time, 1.8));
  p.x /= .02 + .98 * abs(phase);
  float shape = mix(bitcoin2d(p), 1., step(phase, .0));
  float d = length(p);
  vec3 c =
    smoothstep(.3, .7, length(uv-.5)) * cBase * .3 +
    step(shape, 0.01) * step(0., shape) * cMain +
    step(0.013, shape) * step(d, 0.41) * mix(cBase, cSec, smoothstep(.003, .002, abs(mod(d, .02)-.01))) +
    step(0.013, shape) * step(d, 0.48) * smoothstep(.011, .01, abs(d-.43)) * cMain;
  gl_FragColor = vec4(c * ((.3 * phase + .7 * abs(phase)) + .4), 1.0);
}`}}),an=22,cn="atoms",sn=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:ln.node,uniforms:{time:e,t:"/images/einstein-tongue-out.jpg"}}),ln=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D t;

const float PI = ${Math.PI};

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    .8 - .8 * t,
    vec3(.5),
    vec3(.5),
    vec3(.4, .7, .6),
    vec3(.1, .1, .2)
  );
}

void main() {
  float rez = max(1., 64. - 8. * floor(.03 * time));
  vec2 g = mod(uv * rez, rez);
  g -= rez / 2.;
  g += .5 * rez * vec2(cos(1.5 + .5 * time), sin(.5 * time)) * smoothstep(20., 10., time);
  g *= min(1., pow(.02 + .012 * time, 1.8));
  g += rez / 2.;
  vec2 l = fract(g);
  vec2 gf = floor(g) + .5;
  g -= rez / 2.;
  g *= .8 + .2 * pow(time * .05, 1.2) * cos(.3 * time) * length(g / rez) * .5 * (1. + pow(time * .01, 1.3) * vec2(cos(g.x + .9 * time), sin(g.y + 1.1 * time)));
  g += rez / 2.;
  float r = texture2D(t, g / rez).r;
  float rf = texture2D(t, gf / rez).r;
  vec3 c = smoothstep(.01, .0, length(l-.5) - r * 0.5) * mix(color(rf), vec3(rf), min(1., .002 * time));
  gl_FragColor = vec4(c, 1.);
}`}}),fn=23,un="Hexacubes",pn=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:dn.node,uniforms:{time:e}}),dn=Je.Shaders.create({node:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform float time;
  const float PI = ${Math.PI};
  // https://iquilezles.org/www/articles/palettes/palettes.htm
  vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b*cos( 6.28318*(c*t+d) );
  }
  // from http://glslsandbox.com/e#43182.0 / 007 example
  #define SQRT3 1.7320508
  const vec2 s = vec2(1.0, SQRT3);
  float hex(in vec2 p){
    p = abs(p);
    return max(dot(p, s*.5), p.x);
  }
  vec4 getHex(vec2 p) {
    vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
    vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
    return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
  }
  // utilities from classical SDF
  float pModPolar(inout vec2 p, float repetitions) {
    float angle = 2.*PI/repetitions;
    float a = atan(p.y, p.x) + angle/2.;
    float r = length(p);
    float c = floor(a/angle);
    a = mod(a,angle) - angle/2.;
    p = vec2(cos(a), sin(a)) * r;
    if (abs(c) >= (repetitions/2.)) c = abs(c);
    return c;
  }
  void pR(inout vec2 p, float a) {
    p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
  }
    //////
  vec3 color (float t) {
    return palette(
      t,
      vec3(.5),
      vec3(.5),
      vec3(1.),
      vec3(.9, .1, .2)
    );
  }

  float tile (vec2 p, vec2 g, vec2 g2) {
    pR(p, PI / 6.);
    float r1 = pModPolar(p, 3.);
    p.x -= 1./3.;
    float change = smoothstep(-.5, 1., cos(time));
    pR(p, change * PI / 3.);
    float r2 = 1. + pModPolar(p, 3.);
    float index = mod(r1 + r2, 3.);
    return index;
  }

  void main() {
    vec2 p = uv - .5;
    p.x += .1 * time;
    vec2 g = p * 2.;
    vec4 r = getHex(g);
    vec4 r2 = getHex(g + vec2(-.2 * time, .4 * time));
    float i = tile(r.xy, r.zw, r2.zw);
    float sz = 0.03;
    pR(g, PI/3.);
    float m = smoothstep(.48, .52, mod(g.x, sz) / sz);
    vec3 c = color(
      .5 * smoothstep(.45, .5, abs(fract(.1 * time)-.5)) +
      i * .1 +
      0.02 * m +
      -0.1 * (r2.z - r2.w));
    gl_FragColor = vec4(c, 1.0);
  }
      `}}),vn=24,hn="dark cubes",mn=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:gn.node,uniforms:{time:e}}),gn=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

uniform bool cameraMode;
uniform vec3 origin;
uniform mat3 rotation;

#define MAX_DIST 	60.
#define MIN_DIST	.001

const float PI = ${Math.PI};
const float PI2 = ${2*Math.PI};

vec2 opU (vec2 a, vec2 b) {
  return (a.x<b.x) ? a : b;
}
vec2 opI (vec2 a, vec2 b) {
  return (a.x>b.x) ? a : b;
}

float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}

float vmax(vec3 v) {
  return max(max(v.x, v.y), v.z);
}

float fBox(vec3 p, vec3 b, float r) {
	vec3 d = abs(p) - b;
  return length(max(d, vec3(0))) + vmax(min(d, vec3(0)))-r;
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec2 shape (vec3 p, float a, float b) {
  float m = abs(2. + .3 * a + .4 * b);
  m *= step(2., mod(2.7 * a + 13.3 * b, 4.));
  vec2 o = vec2(fBox(p, vec3(1.), .0), m);
  pR(p.xy, .05 * time + .2 * a);
  pR(p.yz, -.2 * time - .4 * b);
  pR(p.xz, .4 * time + .1 * a - b);
  p *= 1. + .5 * cos(2. * time + .1 * a);
  p.xy += .2 * vec2(cos(.2 * time - a * 3.), sin(.3 * time + b));
  o = opI(o, vec2(fBox(p, vec3(1.), .0), m));
  return o;
}

vec2 map(vec3 p) {
  vec2 o = vec2(MAX_DIST, 0.);
  p.x -= 1. + .5 * time;
  p.y += 14. * sqrt(smoothstep(20., 2., time));
  pR(p.yz, PI/6.);
  pR(p.xz, .05 * time);
  float a = pMod1(p.z, 4.);
  float b = pMod1(p.x, 5.);
  o = opU(o, vec2(p.y, 1.));
  p.y -= 1.8 + .7 * cos(2. * time + 2. * (b + a));
  o = opU(o, shape(p, a, b));
  return o;
}


// Boilerplate inspired from https://www.shadertoy.com/view/WscBDS

// Tetrahedron technique @iq
// https://www.iquilezles.org/www/articles/normalsSDF
vec3 getNormal(vec3 p, float t){
    float e = MIN_DIST *t;
    vec2 h = vec2(1.,-1.)*.57735027;
    return normalize( h.xyy*map( p + h.xyy*e ).x +
					  h.yyx*map( p + h.yyx*e ).x +
					  h.yxy*map( p + h.yxy*e ).x +
					  h.xxx*map( p + h.xxx*e ).x );
}

vec2 marcher(vec3 ro, vec3 rd, int maxsteps) {
	float d = 0.;
    float m = -1.;
    for(int i=0; i<300; i++){
      if (i>maxsteps) break;
    	vec2 t = map(ro + rd * d);
        if(abs(t.x)<d*MIN_DIST||d>MAX_DIST) break;
        d += i<64 ? t.x*.45 : t.x * .85;
        m  = t.y;
    }
	return vec2(d,m);
}

float getDiff(vec3 p, vec3 n, vec3 lpos) {
    vec3 l = normalize(lpos-p);
    float dif = clamp(dot(n,l),.01 , 1.);
    float shadow = marcher(p + n * .01, l, 128).x;
    if(shadow < length(p -  lpos)) dif *= .25;
    return dif;
}

vec3 camera(vec3 lp, vec3 ro, vec2 uv) {
	vec3 cf = normalize(lp - ro),
         cr = normalize(cross(vec3(0,1,0),cf)),
         cu = normalize(cross(cf,cr)),
         c  = ro + cf *.85,
         i  = c + uv.x * cr + uv.y * cu,
         rd = i - ro;
    return rd;
}


vec3 shp;
vec2 sid,sip,bid;
float saveHash, ti, tf, tg;
vec3 thp;
vec2 tip,fid;
float thsh;

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return clamp(palette(
    t,
    vec3(.4),
    vec3(.9),
    vec3(.3, .5, .6),
    vec3(1., .6, .4)
  ), 0., 1.);
}

vec3 getColor(float m) {
  if (m < 2.) return vec3(.0);
  return color(m*.2);
}

vec4 mainImage() {
    vec3 C = vec3(0.),
        FC =  vec3(.2);
    vec3 lp = vec3(0.,0.,0.),
         ro = vec3(2.25,2.15,11.5);
	vec3 rd = camera(lp,ro,uv-.5);
  vec2 t = marcher(ro,rd, 256);
  thsh = saveHash;
  thp = shp;
	tip = sip;

  if(t.x<MAX_DIST){
  	vec3 p = ro + rd * t.x;
  	vec3 n = getNormal(p, t.x);
      vec3 lpos = vec3(1.5,2.5, 16.25);
  	float diff = getDiff(p, n, lpos);
		vec3 h = getColor(t.y);
      C+=diff * h;
      if(t.y>0.){
      	vec3 rr=reflect(rd,n);
          vec2 tr = marcher(p ,rr, 192);
		thsh = saveHash;
          thp = shp;
          tip = sid;
          if(tr.x<MAX_DIST){
              p += rr*tr.x;
              n = getNormal(p,tr.x);
              diff = getDiff(p,n,lpos);
              h = max(getColor(tr.y),FC);
              C+=(diff * h)*.4;

              if(t.y>0.){
                  rr=reflect(rr,n);
                  tr = marcher(p ,rr, 192);
                  thsh = saveHash;
                  thp = shp;
                  tip = sid;
                  if(tr.x<MAX_DIST){
                      p += rr*tr.x;
                      n = getNormal(p,tr.x);
                      diff = getDiff(p,n,lpos);
                      h = max(getColor(tr.y),FC);
                      C+=(diff * h)*.4;
                  }
              }

          }
      }
    }
    C = mix( C, FC, 1.-exp(-.00015*t.x*t.x*t.x));
    return vec4(pow(C, vec3(0.4545)),1.0);
}

void main() {
  gl_FragColor = mainImage();
}`}}),xn=25,bn="Mandelbrot",yn=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(wn,{persistence:.9,children:Object(Ze.jsx)(Sr,{passes:4,factor:.1,children:Object(Ze.jsx)(Je.Node,{shader:_n.node,uniforms:{time:e}})})})}),wn=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:_n.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),_n=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      persistence
    );
  }
      `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  float ti = 2. * time + 10.;
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.7, .5 + .1 * cos(.01 * ti), .5),
    vec3(.5 + .2 * sin(-.07 * ti), .6 + .1 * cos(.01 * ti), .7 + .1 * sin(.3 + .03 * ti))
  );
}

float mandelbrot (vec2 init) {
  vec2 p = init;
  for (float iter = 0.; iter < 400.; iter += 1.) {
    p = vec2(p.x * p.x - p.y * p.y, 2. * p.x * p.y) + init;
    if (length(p) >= 2.0) {
      return iter / 400.;
    }
  }
  return 1.;
}

void main() {
  float acc = pow(smoothstep(0., 30., time), 1.4); // 0->1 for first 30s
  float zoom = .5 + .2 * pow(time, 1.8) * acc; // zoom in
  vec2 init = 2. * (uv - .5) / zoom;
  pR(init, .1 * time * (1. - acc)); // rotate a bit on the center
  init += vec2(.335, .388); // offset to center
  gl_FragColor = vec4(color(mandelbrot(init)), 1.0);
}
`}}),Sn=26,En="fumes",On=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(Rn,{persistence:.9,children:Object(Ze.jsx)(Sr,{passes:4,factor:Math.min(.6,.01*e),children:Object(Ze.jsx)(Je.Node,{shader:Pn.node,uniforms:{time:e}})})})}),Rn=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:Pn.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),Pn=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      persistence
    );
  }
      `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  float ti = 2. * time + 60.;
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(0.5, .5 + .5 * cos(.01 * ti), 1.),
    vec3(.8 + .2 * sin(-.07 * ti), .1 + .05 * cos(.02 * ti), .1 + .1 * sin(.3 + .03 * ti))
  );
}

float gre1 (vec2 init, float t) {
  vec2 p = init;
  for (float iter = 0.; iter < 200.; iter += 1.) {
    p = vec2(
      (1. + cos(t)) * p.x * p.x - 2. *  p.y * p.y + .1 * cos(.1 * t),
      (3. + sin(t)) * p.x * p.y - .2 * cos(.3 * t + p.y)
    ) + init;
    if (length(p) >= 2.0) {
      return iter / 200.;
    }
  }
  return 0.;
}

void main() {
  float t = .1 * time;
  float zoom = 1. + .2 * t;
  vec2 init = 2. * (uv - .5) / zoom;
  pR(init, -PI/2. + .05 * time);
  init -= vec2(.8, .0);
  gl_FragColor = vec4(color(pow(gre1(init, t), .5)), 1.0);
}
`}}),zn=27,Tn="real burning ship",In=400,Cn=0,jn=60,kn=12,An=2,Dn=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(Ln,{persistence:.8+.05*Math.random(),time:e,children:Object(Ze.jsx)(Je.Node,{shader:Nn.node,uniforms:{time:e}})})}),Ln=({children:e,persistence:t,time:r})=>Object(Ze.jsx)(Je.Node,{shader:Nn.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t,time:r}}),Nn=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  uniform float time;
  void main () {
    vec2 offset = vec2(0.002 * (cos(2. * time) + 0.4 * sin(5. * time)), -0.006);
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv + offset),
      persistence
    );
  }
      `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

float tt = time;

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.7, .2 + min(.1, .01 * tt), .2)
  );
}

float mandelbrot (vec2 init) {
  vec2 p = init;
  for (float iter = 0.; iter < 400.; iter += 1.) {
    p = vec2(
      p.x * p.x - p.y * p.y,
      2. * abs(p.x * p.y) + 0.0003 * tt
    ) + init;
    if (length(p) >= 2.0) {
      return iter / 400.;
    }
  }
  return -1.;
}

void main() {
  float zoom = 20.;
  vec2 init = 2. * (uv - .5) / zoom;
  init.x *= -1.;
  pR(init, -3.14);
  init += vec2(-1.76, -.03 - 0.0003 * tt);
  float f = mandelbrot(init);
  vec3 clr = color(f); // vec3(1.-pow(f, 0.5)))
  vec3 c = mix(clr, vec3(0.), step(f, -0.1));

  #if ${0}
  c *= smoothstep(59., 58., time);
  #endif
  gl_FragColor = vec4(c, 1.0);
}
`}}),Mn=28,Un="No, I'M Batman",Fn=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(Bn,{persistence:.5+.48*Math.min(1,e/60),children:Object(Ze.jsx)(Je.Node,{shader:qn.node,uniforms:{time:e}})})}),Bn=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:qn.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),qn=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  uniform float time;
  void main () {
    vec2 offset = vec2(0.);
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv + offset),
      persistence
    );
  }
      `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t - 0.3 + time / 60.,
    vec3(.5),
    vec3(.5),
    vec3(.3, 1.,.8),
    vec3(.8, .3, .7)
  );
}

float mandelbrot (vec2 init) {
  vec2 p = init;
  for (float iter = 0.; iter < 200.; iter += 1.) {
    p = vec2(
      abs(p.x * p.x - p.y * p.y),
      2. * p.x * p.y
    ) + init;
    if (length(p) >= 2.0) {
      return iter / 200.;
    }
  }
  return -1.;
}

void main() {
  float zooming = pow(smoothstep(0., 30., time), 1.5);
  float rotating = smoothstep(20., 30., time);
  float zoom = .4 + 21.6 * pow(fract(.2 * time * zooming), 2.);
  vec2 init = 2. * (uv - .5);
  init /= zoom;
  pR(init, min(40., time-20.) * time * rotating);
  init += vec2(0., 1.788);
  pR(init, -PI/2.);
  float f = mandelbrot(init);
  vec3 clr = color(mix(step(f, 1.), f, rotating));
  vec3 c = mix(clr, vec3(0.), step(f, -0.1));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Gn=29,$n="sdBitcoin(p)",Hn=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Vn.node,uniforms:{time:e}}),Vn=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

float sdBox (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float sdD (vec2 p, float w, float h) {
  return min(sdBox(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float sdUpperD (vec2 p) {
  p.x += .02;
  p.y -= .1;
  float inner = sdD(p + vec2(-0.025, 0.012), 0.037, 0.055);
  float outer = sdD(p, 0.1, 0.1);
  return max(-inner, outer);
}
float sdLowerD (vec2 p) {
  p.x += .01;
  p.y += .085;
  float outer = sdD(p, 0.11, 0.11);
  float inner = sdD(p - vec2(0.023, 0.01), 0.045, 0.058);
  return max(-inner, outer);
}
float sdRevCornerRadius(vec2 p) {
  return max(
    sdBox(p, vec2(.5)),
    -min(
      (p.x - p.y) / 2.,
      length(p + vec2(.5, -.5)) - 1.
    )
  );
}
float sdBitcoin (vec2 p) {
  float bottom = sdLowerD(p);
  bottom = min(bottom, max(
    sdBox(p + vec2(.15, .165), vec2(.04, .03)), // bottom-left shape
    -(p.x - .216 * p.y + 0.142)) // 12.5° cut
  );
  bottom = min(bottom, sdRevCornerRadius((p + vec2(0.135, -0.135)) * vec2(1., -1.) * 30.));
  float top = sdUpperD(p);
  top = min(top, sdBox(p - vec2(-.15, .175), vec2(.034, .025)));
  top = min(top, sdRevCornerRadius((p + vec2(0.135, 0.12)) * vec2(1., 1.) * 30.));
  p.x += .01;
  float hash = max(
    sdBox(p, vec2(0.07, .285)),
    -min(
      sdBox(p, vec2(0.022, 1.)),
      sdBox(p, vec2(1., .15))
    )
  );
  return min(min(top, bottom), hash);
}

void main() {
  vec2 p = uv - .5;
  p *= 1.5 + cos(time);
  float shape = sdBitcoin(p);
  float d = length(p);
  vec3 c =
    smoothstep(.005, 0., shape) * vec3(1.);
  c += 0.5 * smoothstep(.25, .2, fract(shape*15. + 0.5));
  gl_FragColor = vec4(c, 1.0);
}`}}),Wn=30,Xn="21 millions",Kn=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Yn.node,uniforms:{time:e,numberInCirculation:18557031}}),Yn=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform float numberInCirculation;

#define SIZE 275.

float sdBox (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float sdD (vec2 p, float w, float h) {
  return min(sdBox(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float sdUpperD (vec2 p) {
  p.x += .02;
  p.y -= .1;
  float inner = sdD(p + vec2(-0.025, 0.012), 0.037, 0.055);
  float outer = sdD(p, 0.1, 0.1);
  return max(-inner, outer);
}
float sdLowerD (vec2 p) {
  p.x += .01;
  p.y += .085;
  float outer = sdD(p, 0.11, 0.11);
  float inner = sdD(p - vec2(0.023, 0.01), 0.045, 0.058);
  return max(-inner, outer);
}
float sdRevCornerRadius(vec2 p) {
  return max(
    sdBox(p, vec2(.5)),
    -min(
      (p.x - p.y) / 2.,
      length(p + vec2(.5, -.5)) - 1.
    )
  );
}
float sdBitcoin2D (vec2 p) {
  float bottom = sdLowerD(p);
  bottom = min(bottom, max(
    sdBox(p + vec2(.15, .165), vec2(.04, .03)), // bottom-left shape
    -(p.x - .216 * p.y + 0.142)) // 12.5° cut
  );
  bottom = min(bottom, sdRevCornerRadius((p + vec2(0.135, -0.135)) * vec2(1., -1.) * 30.));
  float top = sdUpperD(p);
  top = min(top, sdBox(p - vec2(-.15, .175), vec2(.034, .025)));
  top = min(top, sdRevCornerRadius((p + vec2(0.135, 0.12)) * vec2(1., 1.) * 30.));
  p.x += .01;
  float hash = max(
    sdBox(p, vec2(0.07, .285)),
    -min(
      sdBox(p, vec2(0.022, 1.)),
      sdBox(p, vec2(1., .15))
    )
  );
  return min(min(top, bottom), hash);
}

float sdBitcoin (in vec3 p, in float L, in float sz) {
  p.y += 0.05;
  p.y -= min(L, max(0.0, p.y));
  float plane = abs(p.y);
  return max(sdBitcoin2D(p.xz / sz), plane);
}

float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) {
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}

const vec3 rep = vec3(.65, .3, .5);

float unzooming = (.5 + .5 * cos(2.8 + .2 * time)) * smoothstep(5., 10., time);

vec2 map (vec3 p) {
  vec3 id = vec3(
    pModInterval1(p.x, rep.x, 0., SIZE),
    pModInterval1(p.y, rep.y, -SIZE, 0.),
    pModInterval1(p.z, rep.z, 0., SIZE)
  );
  float a = numberInCirculation/SIZE;
  float b = a/SIZE;
  float circ = step(SIZE + id.y - b, 0.);
  float d = sdBitcoin2D(.8 * (id.zx / SIZE - .5));
  float sz = 1. - 0.5 * step(d, 0.) - 0.3 * abs(cos(3. * time + d * 20.)) - .23* unzooming;
  p.y += 0.05 * cos(.8 * id.x + .7 *  time) * sin(.7 * id.z + .5 * time);
  p.x += 0.05 * cos(8. * id.y + .5 * time) * sin(4.7 * id.z + .3 * time);
  p.z += 0.05 * cos(7. * id.x + .6 * time) * sin(8. * id.y + .4 * time);
  return vec2(
    sdBitcoin(p.zyx, .1, sz)
    , 1. + circ);
}

vec3 color (float material) {
  if (material == 0.) return vec3(0.);
  return mix(
    vec3(1.),
    vec3(246./255., 145./255., 29./255.),
    step(material, 1.5)
  );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float getDiff(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  vec3 origin = vec3(-.1, 1., .1);
  origin += vec3(-100. - time, 200. - 2. * time, time) * pow(unzooming, 2.);
  vec3 dir = normalize(vec3(uv - .5, 1.));
  vec3 poi = rep * vec3(SIZE, -SIZE, SIZE) * smoothstep(.0, .5, unzooming);
  dir = lookAt(origin, poi) * dir;
  float material = 0.;
  vec3 p = origin;
  for (int i=0; i<400; i++) {
    vec2 hit = map(p);
    p += dir * hit.x * mix(.5, .9, unzooming);
    if (hit.x < 0.001) {
      material = hit.y;
      break;
    }
  }
  vec3 n = normal(p);
  vec3 lpos = vec3(0., 5., -4.);
  vec3 c = color(material) * getDiff(p, n, lpos);
  gl_FragColor = vec4(c, 1.0);
}`}}),Qn=31,Zn="alien tower",Jn=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:eo.node,uniforms:{time:e,numberInCirculation:18557031}}),eo=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform float numberInCirculation;

vec2 map (vec3 p);

#define PI ${Math.PI}

// FROM https://www.shadertoy.com/view/4sdGWN

#define HASHSCALE1 .1031

float hash(float p) {
	vec3 p3  = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 randomSphereDir(vec2 rnd) {
	float s = rnd.x*PI*2.;
	float t = rnd.y*2.-1.;
	return vec3(sin(s), cos(s), t) / sqrt(1.0 + t * t);
}
vec3 randomHemisphereDir(vec3 dir, float i) {
	vec3 v = randomSphereDir( vec2(hash(i+1.), hash(i+2.)) );
	return v * sign(dot(v, dir));
}

float ambientOcclusion( in vec3 p, in vec3 n, in float maxDist, in float falloff ) {
  const int nbIte = 12;
  const float nbIteInv = 1./float(nbIte);
  const float rad = 1.-1.*nbIteInv;
  float ao = 0.0;
  for( int i=0; i<nbIte; i++ ) {
    float l = hash(float(i))*maxDist;
    vec3 rd = normalize(n+randomHemisphereDir(n, l )*rad)*l;
    ao += (l - max(map( p + rd ).x, 0.)) / maxDist * falloff;
  }
  return clamp( 1.-ao*nbIteInv, 0., 1.);
}

// https://mercury.sexy/hg_sdf/

float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) {
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}

// GRE's

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float sdReuleaux(vec3 p, float edge, float L) {
  p.y -= min(L, max(0.0, p.y));
  p.z -= edge / 6.;
  float h = edge * sqrt(3.) / 2.;
  float a = length(p - vec3(0., 0., h / 2.)) - edge;
  float b = length(p + vec3(.5 * edge, 0., h / 2.)) - edge;
  float c = length(p + vec3(-.5 * edge, 0., h / 2.)) - edge;
  return max(max(max(a, b), c), abs(p.y));
}

float sdSegment(vec3 p, float s, float L) {
  p.y -= min(L, max(0.0, p.y));
  return max(length(p)-s, abs(p.y));
}

vec2 map (vec3 p) {
  float s = p.y; // ground
  for (float f=0.; f<20.; f+=1.) {
    float t = .4 * time - f * pow(1. + .6 * time, .5) + f * pow(1. + .8 * time - sin(time), .2);
    p.xz -= .075 * vec2(cos(-t), sin(-t));
    pR(p.xz, t / 3. + PI / 2.);
    float cut = .55 * smoothstep(.8, 1., sin(time - (.03 + 0.0002 * time) * f))-length(p.xz);
    s = min(s, max(sdReuleaux(p, 1., .1), cut));
    p.y -= .11 + 0.0005 * time;
  }
  return vec2(s, 1.);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float getDiff(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  float glitch = 0.0001 * time; // NB intentional glitch over time of the raymarcher
  vec2 t = vec2(999., 0.);
  for (int i=0; i<70; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.01 + glitch) {
      t = hit;
      break;
    }
  }
  return t;
}

vec3 color (float material) {
  if (material == 0.) return vec3(0.);
  return vec3(1.);
}

void main() {
  float zoom = sin(.2 * time);
  vec3 origin = vec3(0., 4., -3.2 + .4 * zoom);
  vec3 dir = normalize(vec3(uv - .5, 1.));
  pR(dir.yz, -.6 + .05 * zoom);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = vec3(0.5);
  c += color(hit.y) * vec3(.6, .4, .3) * getDiff(p, n, vec3(-2., 5., -4.));
  c += color(hit.y) * vec3(.2, .4, .5) * getDiff(p, n, vec3(2., 5., -4.));
  c *= ambientOcclusion(p, n, 2., 1.);
  gl_FragColor = vec4(c, 1.0);
}`}}),to=32,ro="GoL valley";let no;const oo=({time:e})=>{no||(no=e);const t=e-no,r=Math.floor(12*t);return Object(Ze.jsx)(Je.Node,{shader:io.node,uniforms:{time:e,t:Object(Ze.jsx)(yt,{refreshEveryTicks:100,tick:r,size:100})}})},io=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D t;

vec2 map (vec3 p);

#define PI ${Math.PI}
#define SIZE_F ${100}.

// https://mercury.sexy/hg_sdf/

float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) {
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
// FROM https://www.shadertoy.com/view/4sdGWN

#define HASHSCALE1 .1031

float hash(float p) {
	vec3 p3  = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 randomSphereDir(vec2 rnd) {
	float s = rnd.x*PI*2.;
	float t = rnd.y*2.-1.;
	return vec3(sin(s), cos(s), t) / sqrt(1.0 + t * t);
}
vec3 randomHemisphereDir(vec3 dir, float i) {
	vec3 v = randomSphereDir( vec2(hash(i+1.), hash(i+2.)) );
	return v * sign(dot(v, dir));
}

float ambientOcclusion( in vec3 p, in vec3 n, in float maxDist, in float falloff ) {
  const int nbIte = 12;
  const float nbIteInv = 1./float(nbIte);
  const float rad = 1.-1.*nbIteInv;
  float ao = 0.0;
  for( int i=0; i<nbIte; i++ ) {
    float l = hash(float(i))*maxDist;
    vec3 rd = normalize(n+randomHemisphereDir(n, l )*rad)*l;
    ao += (l - max(map( p + rd ).x, 0.)) / maxDist * falloff;
  }
  return clamp( 1.-ao*nbIteInv, 0., 1.);
}

// GRE's

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float sdSegment(vec3 p, float s, float L) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - s;
}

vec2 map (vec3 p) {
  p.y -= .02 * pow(abs(.5 * SIZE_F - p.x + .3 * sin(.3 * p.z + time)), 2.);
  float s = p.y; // ground
  float x = pModInterval1(p.x, 1., 0., SIZE_F);
  p.z += .5 * mod(x, 2.);
  vec2 id = vec2(x, pModInterval1(p.z, 1., 0., SIZE_F));
  vec4 lk = texture2D(t, id / SIZE_F);
  s = min(s, sdSegment(p, .4, lk.r));
  return vec2(s, 1.);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x - map(p-eps.xyy).x,
		map(p+eps.yxy).x - map(p-eps.yxy).x,
		map(p+eps.yyx).x - map(p-eps.yyx).x
	));
}

float getDiff(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<100; i++) {
    vec2 hit = map(p);
    p += dir * hit.x * .7;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

vec3 color (float material) {
  if (material == 0.) return vec3(0.);
  return vec3(1.);
}

void main() {
  float zoom = cos(.2 * time);
  vec3 origin = vec3(SIZE_F/2., 9. - 5. * zoom, .5 * zoom - 2.);
  vec3 dir = normalize(vec3(uv - .5, 1. + .5 * zoom));
  pR(dir.yz, -.3 + .1 * zoom);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = vec3(0.);
  c += color(hit.y) * vec3(.5, .2, .1) * getDiff(p, n, vec3(0., 5., -4.));
  c += color(hit.y) * vec3(.5, .5, .7) * getDiff(p, n, vec3(SIZE_F, 5., -4.));
  c += color(hit.y) * vec3(2., 1.6, 1.) * getDiff(p, n, vec3(.5 * SIZE_F, 5., .3 * SIZE_F));
  c += .5;
  float a = ambientOcclusion(p, n, 1.5, 0.8);
  c *= a;
  c = mix(c, vec3(.9) + .1 * a, pow(clamp(.025 * length(origin - p), 0., 1.), 1.4));
  gl_FragColor = vec4(c, 1.0);
}`}}),ao=33,co="x(x+32y)%(tN+1)%n";const so=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:lo.node,uniforms:{time:e}}),lo=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.1, .3, .4)
  );
}

float cell (vec2 p) {
  float m = 2. + floor(.05 * time);
  return mod(mod(p.x * (p.x + 32. * p.y), m * floor(time) + 1.), m);
}

void main() {
  float unzoom = 32. + 2. * time;
  vec2 offset = vec2(-.25 * unzoom, -2. * pow(time, 1.3));
  vec3 c = color(.1 * cell(floor(uv * unzoom + offset)));
  gl_FragColor = vec4(c, 1.0);
}`}}),fo=34,uo="\u230a2cos(x)sin(y+t)\u230b%7";const po=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:vo.node,uniforms:{time:e}}),vo=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
#define PI ${Math.PI}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.6, 1., .4),
    vec3(.9, .2, .7)
  );
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float cell (vec2 p) {
  return mod(floor(2. * cos(p.x) * sin(p.y + time)), 7.);
}

void main() {
  float unzoom = 32.;
  vec2 offset = time * vec2(1., -1.);
  vec2 p = uv * unzoom + offset;
  pR(p, PI/4.);
  vec3 c = color(.1 * floor(.2 * time) + (.1 + .005 * time) * cell(floor(p)));
  gl_FragColor = vec4(c, 1.0);
}`}}),ho=35,mo="aie confiance",go=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(xo,{persistence:.6,children:Object(Ze.jsx)(Je.Node,{shader:bo.node,uniforms:{time:e}})})}),xo=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:bo.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),bo=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      persistence
    );
  }
      `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
#define PI ${Math.PI}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t, float l) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.3, .5, .7),
    vec3(.5 * (time - .4 * l), .5, .3)
  );
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float cell (vec2 p) {
  return mod(p.x * p.y, 3.);
}

void main() {
  vec2 offset = time * vec2(.5, -2. - .01 * time);
  vec2 center = uv - .5;
  float a = atan(center.y, center.x);
  float l = pow(length(center), 1. / (4. + min(50., .2 * time)));
  vec2 p = vec2(a * 2.025, l * 40.) + offset;
  pR(p, PI/4.);
  vec3 c = color(cell(floor(p)), l);
  gl_FragColor = vec4(c, 1.0);
}`}}),yo=36,wo="crois en moi",_o=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(So,{children:Object(Ze.jsx)(Je.Node,{shader:Eo.node,uniforms:{time:e}})})}),So=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:Eo.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),Eo=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      .6 + .5 * length(uv-.5)
    );
  }
      `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
#define PI ${Math.PI}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.9, 1., .7),
    vec3(.1, .6, .3)
  );
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float cell (vec2 p) {
  return mod(p.x * p.x + 6. * p.y, 4.);
}

void main() {
  vec2 offset = vec2(0., -time * 3.);
  vec2 center = uv - .5;
  float a = atan(center.y, center.x);
  float l = pow(length(center), .1);
  vec2 p = vec2(a * .9, l * 40.) + offset;
  pR(p, PI/4.);
  float n = .01 * time + .1 * pow(abs(sin(time)), 4.);
  vec3 c = color(2. + .1 * time + n * cell(floor(p)));
  gl_FragColor = vec4(c, 1.0);
}`}}),Oo=37,Ro="sdBrick",Po=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:zo.node,uniforms:{time:e}}),zo=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);

#define PI ${Math.PI}

// https://mercury.sexy/hg_sdf/

float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) {
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}

float vmax(vec2 v) {
	return max(v.x, v.y);
}

float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}

float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}

float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 getColor (float t) {
  return palette(
    fract(floor(t * 16.)/16.),
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.1, .4, .7)
  );
}


// FROM https://www.shadertoy.com/view/4sdGWN

#define HASHSCALE1 .1031

float hash(float p) {
	vec3 p3  = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 randomSphereDir(vec2 rnd) {
	float s = rnd.x*PI*2.;
	float t = rnd.y*2.-1.;
	return vec3(sin(s), cos(s), t) / sqrt(1.0 + t * t);
}
vec3 randomHemisphereDir(vec3 dir, float i) {
	vec3 v = randomSphereDir( vec2(hash(i+1.), hash(i+2.)) );
	return v * sign(dot(v, dir));
}

float ambientOcclusion( in vec3 p, in vec3 n, in float maxDist, in float falloff ) {
  const int nbIte = 12;
  const float nbIteInv = 1./float(nbIte);
  const float rad = 1.-1.*nbIteInv;
  float ao = 0.0;
  for( int i=0; i<nbIte; i++ ) {
    float l = hash(float(i))*maxDist;
    vec3 rd = normalize(n+randomHemisphereDir(n, l )*rad)*l;
    ao += (l - max(map( p + rd ).x, 0.)) / maxDist * falloff;
  }
  return clamp( 1.-ao*nbIteInv, 0., 1.);
}


// GRE's

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float sdBrick(vec3 p, float w, float h) {
  p.y -= .5;
  float s = fBox(p, vec3(w / 2., .5, h / 2.));
  p.x += w / 2. + .5;
  p.z += h / 2. + .5;
  p.y -= .6;
  pModInterval1(p.x, 1., 1., w);
  pModInterval1(p.z, 1., 1., h);
  s = min(s, fCylinder(p, .2, .1));
  return s;
}

vec3 move (vec3 p, float z, float y) {
  float r = step(mod(y, 2.), 0.);
  pR(p.xz, r * PI/2.);
  p.z += z;
  p.y -= y;
  return p;
}

vec2 map (vec3 p) {
  vec2 s = vec2(min(p.y, 40. - p.z), 1.); // ground
  pR(p.xz, PI/4.);
  float speed = .5;
  float P = 50. * speed;
  float phase = floor(time / P);
  for (float y=0.; y<=5.; y+=1.) {
    for (float z=-2.; z<=2.; z+=1.) {
      float id = 2. + z + 5. * y;
      float tId = id * speed;
      float t2 = mod(time, 50. * speed);
      float t = mod(t2>25.*speed ? 50.-t2 : t2, 25. * speed);
      if (t < tId) continue;
      float animating = step(t, tId + speed);
      float m = fract(t / speed) * animating;
      vec3 q = move(p, z, y);
      q.y -= pow((animating - m) * 3., 2.);
      s = opU(s, vec2(sdBrick(q, 5., 1.), 2. + (1. + phase) * id));
    }
  }
  return s;
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<70; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}


vec3 color (float material) {
  if (material == 0.) return vec3(0.);
  if (material == 1.) return vec3(1.);
  return getColor(.03 * material);
}

void main() {
  vec3 origin = vec3(0., 8., -8.);
  vec3 dir = normalize(vec3(uv - .5, 1.));
  pR(dir.yz, -.6);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = .2 * color(hit.y);
  c += color(hit.y) * vec3(.7, .7, 1.) * diffuse(p, n, vec3(-5., 10., -6.));
  c += color(hit.y) * vec3(1., .7, .7) * diffuse(p, n, vec3(10., 10., -2.));
  c += color(hit.y) * vec3(.5) * diffuse(p, n, vec3(0., 10., -50.));
  c *= ambientOcclusion(p, n, 2., 1.5);
  c += smoothstep(5., 20., p.z);
  gl_FragColor = vec4(c, 1.0);
}`}}),To=38,Io="Golden mandelbulb",Co=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(jo,{persistence:.5,children:Object(Ze.jsx)(Je.Node,{shader:ko.node,uniforms:{time:e}})})}),jo=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:ko.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),ko=Je.Shaders.create({persistence:{frag:Je.GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t, back;
    uniform float persistence;
    void main () {
      gl_FragColor = mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
    }
        `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);


void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

#define PI ${Math.PI}

// FROM https://www.shadertoy.com/view/4sdGWN

#define HASHSCALE1 .1031

float hash(float p) {
	vec3 p3  = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 randomSphereDir(vec2 rnd) {
	float s = rnd.x*PI*2.;
	float t = rnd.y*2.-1.;
	return vec3(sin(s), cos(s), t) / sqrt(1.0 + t * t);
}
vec3 randomHemisphereDir(vec3 dir, float i) {
	vec3 v = randomSphereDir( vec2(hash(i+1.), hash(i+2.)) );
	return v * sign(dot(v, dir));
}

float ambientOcclusion( in vec3 p, in vec3 n, in float maxDist, in float falloff ) {
  const int nbIte = 12;
  const float nbIteInv = 1./float(nbIte);
  const float rad = 1.-1.*nbIteInv;
  float ao = 0.0;
  for( int i=0; i<nbIte; i++ ) {
    float l = hash(float(i))*maxDist;
    vec3 rd = normalize(n+randomHemisphereDir(n, l )*rad)*l;
    ao += (l - max(map( p + rd ).x, 0.)) / maxDist * falloff;
  }
  return clamp( 1.-ao*nbIteInv, 0., 1.);
}

// huge kudos to https://www.iquilezles.org/www/articles/mandelbulb/mandelbulb.htm
vec2 mandelbulb(vec3 p) {
  vec3 w = p;
  float dz = 1.;
  float m = dot(w,w);
  float index = 0.;
  for (int i=0; i<6; i++) {
    dz = 8.0*pow(sqrt(m),7.0)*dz + 1.0;
    float x = w.x; float x2 = x*x; float x4 = x2*x2;
    float y = w.y; float y2 = y*y; float y4 = y2*y2;
    float z = w.z; float z2 = z*z; float z4 = z2*z2;

    float k3 = x2 + z2;
    float k2 = inversesqrt( k3*k3*k3*k3*k3*k3*k3 );
    float k1 = x4 + y4 + z4 - 6.0*y2*z2 - 6.0*x2*y2 + 2.0*z2*x2;
    float k4 = x2 - y2 + z2;

    w.x =  64.0*x*y*z*(x2-z2)*k4*(x4-6.0*x2*z2+z4)*k1*k2;
    w.y = -16.0*y2*k3*k4*k4 + k1*k1;
    w.z = -8.0*y*k4*(x4*x4 - 28.0*x4*x2*z2 + 70.0*x4*z4 - 28.0*x2*z2*z4 + z4*z4)*k1*k2;

    w += p;

    m = dot(w,w);
    if (m>256.) break;
    index += 1.;
  }

  return vec2(0.25*log(m)*sqrt(m)/dz, 2. + index);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 map (vec3 p) {
  vec2 s = vec2(min(p.y, 40. - p.z), 1.); // ground
  p.y -= 1.;
  pR(p.xz, .05 * time);
  pR(p.yz, -.1 * time);
  s = opU(s, mandelbulb(p));
  return s;
}

vec3 color (float t) {
  if (t < 2.) return vec3(.9);
  return palette(
    .1 * t + time * step(mod(time, 10.), 5.),
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.5, .4, .2)
  );
}

void main() {
  vec3 origin = vec3(0., 3., -2.8);
  origin *= .7 + .3 * cos(.2 * time);
  vec3 clr = vec3(0.);
  // Anti aliasing
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      vec2 uvP = uv;
      uvP += vec2(x, y) / 800.;
      vec3 dir = normalize(vec3(uvP - .5, 1.));
      pR(dir.yz, -.5);
      vec3 p = origin;
      vec2 hit = marcher(p, dir);
      vec3 n = normal(p);
      vec3 c = vec3(0.);
      c += color(hit.y) * vec3(1., .5, .2) * diffuse(p, n, vec3(-5., 6., -4.));
      c += color(hit.y) * vec3(.2, .5, 1.) * diffuse(p, n, vec3(5., 6., -4.));
      c += color(hit.y) * vec3(.6) * diffuse(p, n, vec3(0., 8., -2.));
      c *= ambientOcclusion(p, n, 1.8, 1.2);
      c += smoothstep(5., 10., p.z);
      clr += c;
    }
  }
  clr /= 4.;
  gl_FragColor = vec4(clr, 1.0);
}`}}),Ao=39,Do="metaballs",Lo=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:No.node,uniforms:{time:e}}),No=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 map (vec3 p) {
  float ground = p.y;
  p.y -= 1.5;
  float d = length(p) - .2;
  d = fOpUnionSoft(.5, d, length(p+.3 * vec3(sin(3. + .5 * time), sin(.6 * time), cos(.7 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.4 * vec3(cos(time), sin(time), cos(.6 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.5 * vec3(-sin(.9 * time), cos(1.1 * time), -sin(.8 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(sin(1.+time), cos(-time), sin(.8 * time))) - .2);
  return vec2(min(ground, d), 0.);
}

void main() {
  vec3 origin = vec3(0., 4., -3.);
  vec3 clr = vec3(0.);
  // anti aliasing
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      vec2 uvP = uv;
      uvP += vec2(x, y) / 800.;
      vec3 dir = normalize(vec3(uvP - .5, 1.));
      pR(dir.yz, -.8);
      vec3 p = origin;
      vec2 hit = marcher(p, dir);
      vec3 n = normal(p);
      vec3 c = vec3(0.2);
      vec3 lamp1 = vec3(-6., 8., -4.);
      c += vec3(1., .7, .5) * diffuse(p, n, lamp1)
      * softshadow(p, normalize(lamp1 - p), 0.02, 10., 3.);
      vec3 lamp2 = vec3(6., 8., -4.);
      c += vec3(.5, .6, .7) * diffuse(p, n, lamp2)
        * softshadow(p, normalize(lamp2 - p), 0.02, 10., 20.);
      clr += c;
    }
  }
  clr /= 4.;
  gl_FragColor = vec4(clr, 1.0);
}`}}),Mo=40,Uo="pen-o-plasma",Fo=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Bo.node,uniforms:{time:e}}),Bo=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

#define PI ${Math.PI}

// HG_SDF
float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}

float vmax(vec2 v) {
	return max(v.x, v.y);
}

float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}

float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}

float vmin(vec2 v) {
	return min(v.x, v.y);
}

float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}

float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}

float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}

float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 map (vec3 p) {
  float t = .3 * time;
  vec2 s = vec2(p.y, 0.); // ground
  p.y -= 2.;
  float d = length(p) - .2;
  d = fOpUnionSoft(.5, d, length(p+.8 * vec3(cos(t), sin(.9 * t), 0.)) - .1);
  d = fOpUnionSoft(.5, d, length(p+.8 * vec3(cos(.8 * t), 0., -sin(t))) - .1);
  d = fOpUnionSoft(.5, d, length(p+.8 * vec3(0., -cos(t), sin(.7 * t))) - .1);
  pR(p.xy, t);
  pR(p.xz, t);
  d = fOpUnionSoft(.3, d, fBox(p, vec3(.3)));
  s = opU(s, vec2(d, 1.));
  return s;
}

vec3 color (float t, float m) {
  vec2 d = uv * 50.;
  vec2 id = floor(d);
  vec2 c = d - id;
  float l = .1 * mix(1.5, .9, sqrt(t));
  float s1 = smoothstep(.8 * l, l, abs(c.x-c.y));
  float s2 = smoothstep(.8 * l, l, abs(c.x-1.+c.y));
  float mul = 1. + step(t, .5);
  l *= mul;
  float s3 = smoothstep(.8 * l, l, length(fract(c * mul) - .5));
  float s = 1.;
  if (t < .4) s=min(s, s1);
  if (t < .6) s=min(s, s2);
  if (t < .2 || t > .6) s = min(s, s3);
  if (mod(t, .2)>.1 && mod(id.x+id.y, 2.)<1.) s=1.;
  return vec3(s);
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

void main() {
  vec3 origin = vec3(0., 4., -2.);
  vec3 clr = vec3(0.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.));
  pR(dir.yz, -.8);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = vec3(0.);
  float d = 2. + 1.6 * cos(.2 * time);
  vec3 lamp1 = d * vec3(0., 10., 2.);
  float v = 1.;
  c +=
    vec3(v, .0, .0)
    * diffuse(p, n, lamp1)
    * softshadow(p, normalize(lamp1 - p), 2., 10., 8.);

  vec3 lamp2 = d * vec3(-4., 5., -3.);
  c +=
    vec3(.0, .0, v)
    * diffuse(p, n, lamp2)
    * softshadow(p, normalize(lamp2 - p), 2., 10., 8.);

  vec3 lamp3 = d * vec3(4., 5., -3.);
  c +=
    vec3(.0, v, .0)
    * diffuse(p, n, lamp3)
    * softshadow(p, normalize(lamp3 - p), 2., 10., 8.);

  c = mix(c, vec3(1.), color((c.r+c.g+c.b)/3., hit.y));

  clr += c;

  gl_FragColor = vec4(clr, 1.0);
}`}}),qo=41,Go="reflection",$o=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Ho.node,uniforms:{time:e}}),Ho=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);
vec3 shade (vec2 m);
float glossyness (float m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

// from HG_SDF
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

// gre's
vec3 reflection (vec3 p, vec3 n, float maxDist) {
  vec3 o = vec3(0.);
  float bounced = 0.;
  vec3 dir = n;
  vec2 r;
  float total = 0.;
  for (int i=0; i<4; i++) {
    dir = reflect(dir, n);
    r = marcher(p, dir);
    bounced += r.x;
    if (bounced > maxDist) break;
    p += r.x * dir;
    n = normal(p);
    o += lighting(r, p, n, dir) * clamp((maxDist - bounced) / maxDist, 0., 1.);
    total += 1.;
    p += dir; // we need to progress a bit more to not have ray staying at same pos
    if (glossyness(r.y)<=.0) {
      break;
    }
  }
	return o / total;
}

float glossyness(float m) {
  return 0.8 * step(.8, m);
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  return palette(
    (m - 1.) * .3,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.0, .33, .66)
  );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

vec2 map (vec3 p) {
  vec2 ground = vec2(p.y, 0.1);
  p.y -= 1.5;
  float d = length(p) - .2;
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(sin(3. + .5 * time), .0, cos(.7 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.4 * vec3(cos(time), sin(time), cos(.6 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.5 * vec3(-sin(.9 * time), cos(1.1 * time), .0)) - .2);
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(.0, cos(-time), sin(.8 * time))) - .2);
  vec2 metaballs = vec2(d, 1.);

  pR(p.xz, .5 * time);

  vec2 s = opU(ground, metaballs);

  return s;
}

float specularStrength (float m) {
  if (m < 1.) return 0.0;
  return 4.0;
}
float specularPow (float m) {
  return 64.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

vec3 emitColor(vec2 hit) {
  float m = hit.y;
  return vec3(0.);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = emitColor(hit);
  vec3 lamp1 = vec3(-6., 8., -4.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    vec3(1., .7, .5) * (
      // ambient
      0.1 +
      // diffuse
      shade(hit)
      * diffuse(p, n, lamp1)
      * softshadow(p, ldir1, 0.02, 10., 4.) +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(6., 8., -4.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    vec3(.5, .6, .7) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit)
    * diffuse(p, n, lamp2)
    * softshadow(p, ldir2, 0.02, 10., 20.) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

void main() {
  vec3 origin = vec3(0., 4., -4.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.));
  pR(dir.yz, -.7);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = lighting(hit, p, n, dir);
  float glossy = glossyness(hit.y); // TODO fresnel
  c = mix(c, reflection(p, n, 10.), glossy);
  gl_FragColor = vec4(c, 1.0);
}`}}),Vo=42,Wo="reflection party",Xo=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Ko.node,uniforms:{time:e}}),Ko=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);
vec3 shade (vec2 m);
float glossyness (float m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

// from HG_SDF
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}

float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fCapsule(vec3 p, float r, float c) {
	return mix(length(p.xz) - r, length(vec3(p.x, abs(p.y) - c, p.z)) - r, step(c, abs(p.y)));
}
float fTorus(vec3 p, float smallRadius, float largeRadius) {
	return length(vec2(length(p.xz) - largeRadius, p.y)) - smallRadius;
}
float fHexagonCircumcircle(vec3 p, vec2 h) {
	vec3 q = abs(p);
	return max(q.y - h.y, max(q.x*sqrt(3.)*0.5 + q.z*0.5, q.z) - h.x);
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

// gre's
vec3 reflection (vec3 p, vec3 n, float maxDist) {
  vec3 o = vec3(0.);
  float bounced = 0.;
  vec3 dir = n;
  vec2 r;
  float total = 0.;
  for (int i=0; i<4; i++) {
    dir = reflect(dir, n);
    r = marcher(p, dir);
    bounced += r.x;
    if (bounced > maxDist) break;
    p += r.x * dir;
    n = normal(p);
    o += lighting(r, p, n, dir) * clamp((maxDist - bounced) / maxDist, 0., 1.);
    total += 1.;
    p += dir; // we need to progress a bit more to not have ray staying at same pos
    if (glossyness(r.y)<=.0) {
      break;
    }
  }
	return o / total;
}

float glossyness(float m) {
  return 0.8 * step(.8, m);
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  return palette(
    (m - 1.) * .3,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.0, .33, .66)
  );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

vec2 map (vec3 p) {
  vec2 ground = vec2(p.y, 0.1);
  p.y -= 1.5;
  float d = length(p) - .2;
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(sin(3. + .5 * time), .0, cos(.7 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.4 * vec3(cos(time), sin(time), cos(.6 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.5 * vec3(-sin(.9 * time), cos(1.1 * time), .0)) - .2);
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(.0, cos(-time), sin(.8 * time))) - .2);
  vec2 metaballs = vec2(d, 1.);

  pR(p.xz, .5 * time);

  p.y += .5;
  vec2 s = opU(ground, metaballs);
  p.x += 1.;
  s = opU(s, vec2(fBox(p, vec3(.3)), 2.));
  p.z += 2.;
  s = opU(s, vec2(fCapsule(p, .3, .5), 3.));
  p.x -= 2.;
  s = opU(s, vec2(fTorus(p.xzy, .1, .3), 4.));
  p.z -= 2.;
  {
    vec3 w = p;
    pR(w.xz, 2. * time);
    s = opU(s, vec2(fHexagonCircumcircle(w, vec2(.3, .4)), 5.));
  }

  return s;
}

float specularStrength (float m) {
  if (m < 1.) return 0.0;
  return 6.0;
}
float specularPow (float m) {
  return 128.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

float dayTime = .5 + .5 * cos(.2 * time);

vec3 emitColor(vec2 hit) {
  float m = hit.y;
  if (m >= 1. && mod(pow(time, 1.2) + m, 5.) < .9) {
    return mix(0., 1., smoothstep(.2, .15, dayTime)) * shade(hit);
  }
  return vec3(0.);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  float lightOn = smoothstep(.1, .5, dayTime);
  vec3 c = emitColor(hit);
  vec3 lamp1 = vec3(-6., 8., -4.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    lightOn *
    vec3(1., .7, .5) * (
      // ambient
      0.1 +
      // diffuse
      shade(hit)
      * diffuse(p, n, lamp1)
      * softshadow(p, ldir1, 0.02, 10., 4.) +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(6., 8., -4.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    lightOn *
    vec3(.5, .6, .7) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit)
    * diffuse(p, n, lamp2)
    * softshadow(p, ldir2, 0.02, 10., 20.) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

void main() {
  vec3 origin = vec3(0., 4., -4.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.));
  pR(dir.yz, -.7);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = lighting(hit, p, n, dir);
  float glossy = glossyness(hit.y); // TODO fresnel
  c = mix(c, reflection(p, n, 10.), glossy);
  gl_FragColor = vec4(c, 1.0);
}`}}),Yo=43,Qo="irreconcilable queens",Zo=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(Jo,{persistence:.4,children:Object(Ze.jsx)(Je.Node,{shader:ei.node,uniforms:{time:e}})})}),Jo=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:ei.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),ei=Je.Shaders.create({persistence:{frag:Je.GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t, back;
    uniform float persistence;
    void main () {
      gl_FragColor = mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
    }
        `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

vec2 map (vec3 p);
vec3 shade (vec2 m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0., height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001 || p.z > 20.) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float inOutCubic (float t) {
  return mix(4.*t*t*t, (t-1.)*(2.*t-2.)*(2.*t-2.)+1., step(.5, t));
}

float specularStrength (float m) {
  if (m<1.) return .1;
  return 5.0;
}
float specularPow (float m) {
  return 32.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 1., -6.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    vec3(1., .7, .5) * (
      // ambient
      0.2 +
      // diffuse
      shade(hit)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      * softshadow(p, ldir1, 0.02, 8., 16.) +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(4., 8., -7.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    vec3(.6, .7, .9) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit)
    * (.5 + .5 * diffuse(p, n, lamp2)) // half lambert
    * softshadow(p, ldir2, 0.02, 8., 12.) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  return vec3(mix(.05, 1., fract(m) * 2.));
}
// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    fCone(p * vec3(1., -1., 1.), .12, .5),
    fCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
  pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

// tiles are of 1m x 1m
vec2 sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.1, manhattan),
    o
  );
  return vec2(fBox(p, vec3(4.4, 0.04, 4.4)), m);
}

vec2 sdChessPiece(vec3 p, float id, float white) {
  return vec2(sdChessQueen((p - vec3(0., 1.4, 0.)) / 1.4), id + .5 * white);
}

vec2 map (vec3 p) {
  // animation timings
  float phase = mod(time, 4.);
  float whiteMove = inOutCubic(min(
      1.5 * min(1., phase),
      max(0., 1. - 1.5 * max(0., phase-2.))
    ));
  phase -= 1.;
  float blackMove = inOutCubic(min(
      min(1., 1.5 * max(0., phase)),
      max(0., 1. - 1.5 * max(0., phase-2.))
    ));

  vec2 s = vec2(p.y, 0.1); // ground
  p.y -= .04;
  s = opU(s, sdChessboard(p));
  p.y -= .04;
  p.xz += vec2(3.5);
  p.x -= 3.;
  s = opU(s, sdChessPiece(p - vec3(whiteMove, 0., 0.), 10., 0.5));
  p.z -= 7.;
  s = opU(s, sdChessPiece(p - vec3(blackMove, 0., 0.), 10., 0.));
  return s;
}

void main() {
  vec3 origin = vec3(0., 2., -6.);
  origin.x += sin(2. * PI * time / 4.);
  vec3 c = vec3(0.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.));
  pR(dir.yz, -.4);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),ti=44,ri="royal meeting",ni=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:oi.node,uniforms:{time:e}}),oi=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
#define PI ${Math.PI}

vec2 map (vec3 p);
vec3 shade (vec2 m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0., height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<100; i++) {
    vec2 hit = map(p);
    p += dir * hit.x * .8;
    if (hit.x < 0.001 || p.z > 20.) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float inOutCubic (float t) {
  return mix(4.*t*t*t, (t-1.)*(2.*t-2.)*(2.*t-2.)+1., step(.5, t));
}

float specularStrength (float m) {
  if (m<1.) return .1;
  if (m<10.) return .5;
  return 1.0;
}
float specularPow (float m) {
  return 8.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 4., -6.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    vec3(.6, .7, .8) * (
      // ambient
      0.25 +
      // diffuse
      shade(hit)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(0., 8., -7.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    vec3(1., .7, .5) * (
    // ambient
    0.05 +
    // diffuse
    shade(hit)
    * (.5 + .5 *diffuse(p, n, lamp2)) // half lambert
    * softshadow(p, ldir2, 0.02, 8., 20.) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  return vec3(mix(.05, 1., fract(m) * 2.));
}
// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    fCone(p * vec3(1., -1., 1.), .12, .5),
    fCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
  pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

// tiles are of 1m x 1m
vec2 sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.1, manhattan),
    o
  );
  return vec2(fBox(p, vec3(4.4, 0.04, 4.4)), m);
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  if (id == 10.) s = sdChessKing((p - vec3(0., 1.4, 0.)) / 1.4);
  if (id == 11.) s = sdChessQueen((p - vec3(0., 1.4, 0.)) / 1.4);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

vec2 map (vec3 p) {
  vec2 s = vec2(p.y, 0.1); // ground
  pR(p.xz, .1 * time);
  p.y -= .04;
  s = opU(s, sdChessboard(p));
  p.y -= .04;
  p.xz += vec2(3.5);
  float x = pModInterval1(p.x, 1., 0., 8.);
  float y = pModInterval1(p.z, 1., 0., 8.);
  float id = 10. + step(1., mod(x, 2.));
  float m = sdChessPieceId(id, 0.5 * step(mod(x+y, 2.), .9));
  float hill = step(3., x) * step(x, 4.) * step(3., y) * step(y, 4.);
  // tradeoff: as we use pMod, we need to give the marcher a fake distance to next cell..
  float piece = mix(.4, sdChessPiece(p, id), hill);
  s = opU(s, vec2(piece, m));
  return s;
}

void main() {
  vec3 origin = vec3(0., 3., -3.);
  vec3 c = vec3(0.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.5));
  pR(dir.yz, -.6);
  #if 0
  // debug ortho camera
  origin += vec3(2. * (uvP - .5), 0.);
  dir = vec3(0., 0., 1.);
  #endif
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),ii=45,ai="wood pawns army",ci=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:si.node,uniforms:{time:e,wood:"/images/seamless-wood-background-1.jpg"}}),si=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

vec2 map (vec3 p);
vec3 shade (vec2 m, vec3 p);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0., height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  vec2 hit = vec2(999., 0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<100; i++) {
    vec2 h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += .9 * h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .1;
  if (m<10.) return .1;
  return 1.;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 3., -6.);
  vec3 lamp1dir = normalize(lamp1 - p);
  c +=
    vec3(.6, .7, .8) * (
      // ambient
      0.105+
      // diffuse
      shade(hit, p)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      * softshadow(p, lamp1dir, 0.02, 8., 20.) +
      // specular
      .5 * specular(n, hit.y, lamp1dir, dir, 60.)
    );
  vec3 lamp2 = vec3(4., 7., -7.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c +=
    vec3(1., .85, .7) * (
    // ambient
    0.05 +
    // diffuse
    shade(hit, p)
    * (.5 + .5 *diffuse(p, n, lamp2)) // half lambert
    * softshadow(p, lamp2dir, 0.02, 8., 20.) +
    // specular
    specular(n, hit.y, lamp2dir, dir, 30.)
  );
  vec3 lamp3 = vec3(0., 8., 10.);
  vec3 lamp3dir = normalize(lamp3 - p);
  c +=
    vec3(.3) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit, p)
    * (.5 + .5 *diffuse(p, n, lamp3)) // half lambert
    +
    // specular
    specular(n, hit.y, lamp3dir, dir, 80.)
  );
  return c;
}

vec3 shade (vec2 hit, vec3 p) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  float wFactor = fract(m) * 2.;
  p *= 1.2;
  vec2 tUV = vec2(
    fract(p.x + .3 * p.y),
    fract(p.z - .7 * p.y)
  );
  float piece = step(10.,m);
  vec3 c = mix(
    vec3(.18, .05, .03),
    vec3(.7, .5, .3) + piece * vec3(.3, .45, .4),
    wFactor);
  vec3 t = texture2D(wood, tUV).r * c;
  return t;
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    fCone(p * vec3(1., -1., 1.), .12, .5),
    fCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
  pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    fCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}


// tiles are of 1m x 1m
vec2 sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.38, manhattan),
    o
  );
  return vec2(fBox(p, vec3(4.4, 0.2, 4.4)), m);
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

vec2 map (vec3 p) {
  vec2 s = vec2(p.y, 0.1); // ground
  p.y -= .1;
  s = opU(s, sdChessboard(p));
  p.y -= .1;
  p.xz += vec2(3.5);
  float x = pModInterval1(p.x, 1., 0., 7.);
  float y = pModInterval1(p.z, 1., 0., 7.);
  float id = 15.;
  float m = sdChessPieceId(id, 0.5 * step(y, 3.5));
  float selected = step(1., abs(y-3.5));
  // tradeoff: as we use pMod, we need to give the marcher a fake distance to next cell..
  float piece = mix(0.4, sdChessPiece(p, id), selected);
  s = opU(s, vec2(piece, m));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  float zoom = .5 + .5 * cos(.3 * time);
  origin = vec3(0., 3. + 5. * zoom, 0.);
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 2.5));
  // debug ortho camera
  #if 0
  origin += vec3(3. * (uvP - .5)- vec2(0., 2.), 0.);
  dir = vec3(0., 0., 1.);
  #endif
  origin.x = 6. * cos(.2 * time);
  origin.z = 10. * sin(.3 * time);
  dir = lookAt(origin, vec3(0., 1., -1.)) * dir;
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),li=46,fi="Bank of Bicoin",ui=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:pi.node,uniforms:{time:e}}),pi=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

// camera origin
vec3 origin;

vec2 map (vec3 p);
vec3 shade (vec2 m, vec3 p);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0., height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  vec2 hit = vec2(999., 0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<100; i++) {
    vec2 h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += .9 * h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  return 0.;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-6., 10., -6.);
  vec3 lamp1dir = normalize(lamp1 - p);
  c +=
    vec3(1., .7, .4) * (
      // ambient
      0.1+
      // diffuse
      shade(hit, p)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      * softshadow(p, lamp1dir, 0.02, 8., 12.) +
      // specular
      specular(n, hit.y, lamp1dir, dir, 40.)
    );
  vec3 lamp2 = vec3(4., 6., 6.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c +=
    .8 * vec3(.0,.6,1.) * (
      // ambient
      0.1 +
      // diffuse
      shade(hit, p)
      * (.5 + .5 * diffuse(p, n, lamp2)) // half lambert
      * softshadow(p, lamp2dir, 0.02, 8., 30.) +
      // specular
      specular(n, hit.y, lamp2dir, dir, 40.)
    );
  return c;
}

vec3 shade (vec2 hit, vec3 p) {
  float m = hit.y;
  if (m==0.1) return vec3(.7);
  if (m==2.) return vec3(.2);
  return vec3(1.);
}

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdBox (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float sdD (vec2 p, float w, float h) {
  return min(sdBox(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float sdUpperD (vec2 p) {
  p.x += .02;
  p.y -= .1;
  float inner = sdD(p + vec2(-0.025, 0.012), 0.037, 0.055);
  float outer = sdD(p, 0.1, 0.1);
  return max(-inner, outer);
}
float sdLowerD (vec2 p) {
  p.x += .01;
  p.y += .085;
  float outer = sdD(p, 0.11, 0.11);
  float inner = sdD(p - vec2(0.023, 0.01), 0.045, 0.058);
  return max(-inner, outer);
}
float sdRevCornerRadius(vec2 p) {
  return max(
    sdBox(p, vec2(.5)),
    -min(
      (p.x - p.y) / 2.,
      length(p + vec2(.5, -.5)) - 1.
    )
  );
}
float sdBitcoin2D (vec2 p) {
  float bottom = sdLowerD(p);
  bottom = min(bottom, max(
    sdBox(p + vec2(.15, .165), vec2(.04, .03)), // bottom-left shape
    -(p.x - .216 * p.y + 0.142)) // 12.5° cut
  );
  bottom = min(bottom, sdRevCornerRadius((p + vec2(0.135, -0.135)) * vec2(1., -1.) * 30.));
  float top = sdUpperD(p);
  top = min(top, sdBox(p - vec2(-.15, .175), vec2(.034, .025)));
  top = min(top, sdRevCornerRadius((p + vec2(0.135, 0.12)) * vec2(1., 1.) * 30.));
  p.x += .01;
  float hash = max(
    sdBox(p, vec2(0.07, .285)),
    -min(
      sdBox(p, vec2(0.022, 1.)),
      sdBox(p, vec2(1., .15))
    )
  );
  return min(min(top, bottom), hash);
}

float sdBitcoin (in vec3 p, in float L, in float sz) {
  p.y += 0.05;
  p.y -= min(L, max(0.0, p.y));
  float plane = abs(p.y);
  return max(sdBitcoin2D(-p.xz / sz), plane);
}

vec2 map (vec3 p) {
  vec2 s = vec2(p.y, 0.1); // ground
  float f = min(
    sdBitcoin((p+vec3(.5,0.,0.)).zyx, 1.5, 1.),
    sdBitcoin((p-vec3(.5,0.,0.)).zyx * vec3(-1.,1.,1.), 1.8, 1.)
  );
  f = fOpUnionSoft(.1, f, sdBitcoin(p, 2., 2.));
  f = min(f, sdSegment(p - vec3(.16, 0., -.02), 2.5, .01));
  s = opU(s, vec2(f, 1.));
  s = opU(s, vec2(
    min(
      sdBitcoin((p-vec3(-1.5,0.,.5)).zyx, .1, 20.),
      sdBox(p-vec3(.01, 0., 0.), vec3(.12, .05, 2.))
    )
  , 2.));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  origin = vec3(0., 6., 0.);
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 2.5));
  // debug ortho camera
  #if 0
  origin += vec3(3. * (uvP - .5)- vec2(0., 2.), 0.);
  dir = vec3(0., 0., 1.);
  #endif
  origin.x += 6. * sin(.5 + .2 * time);
  origin.z += 4. * cos(.2 * time);
  dir = lookAt(origin, vec3(0., 1., 0.)) * dir;
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),di=47,vi="glow experiment",hi=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:mi.node,uniforms:{time:e}}),mi=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

// camera origin
vec3 origin;

vec2 map (vec3 p);
vec3 shade (vec2 m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

// glowing is an output that contains the rgb color that is glowing with a alpha that contains how much it's glowing (not bounded)
vec2 marcher (inout vec3 p, vec3 dir, inout vec4 glowing) {
  vec2 hit = vec2(999., 0.);
  float t = 0.;
  float ph = 0.;
  float tA = 0.;
  vec3 tC = vec3(0.);

  for (int i=0; i<150; i++) {
    vec2 h = map(p + t * dir);
    h.x = min(.3, h.x);
    t += h.x;
    if (h.x < .001 || p.z > 20.) {
      hit = h;
      break;
    }
    if (h.y > 1.) {
      float a = .8 * ph * pow(smoothstep(.8, .0, h.x), 16.);
      ph = h.x;
      tC += a * shade(h);
      tA += a;
    }
  }

  glowing = vec4(tC / tA, min(1., tA));

  p += t * dir;
  return hit;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 clr = shade(hit);
  float glow = step(1., hit.y);
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-6., 12., -4.);
  vec3 lamp1dir = normalize(lamp1 - p);
  vec3 lamp2 = vec3(6., 6., -4.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c = .8 * glow * clr;
  c +=
    .6 *
    (.45 * cos(time) + .5) *
    vec3(1., .7, .5) * (
      // ambient
      0.1 +
      // diffuse
      clr *
      // glow have half lambert
      mix(diffuse(p, n, lamp1), 1., .5 * glow)  *
      // glow don't receive shadows
      mix(softshadow(p, lamp1dir, 0.02, 8., 20.), 1., glow)
    );
  c +=
    .8 *
    (.45 * sin(2. * time) + .5) *
    vec3(.1, .4, .6) * (
      // ambient
      0.1 +
      // diffuse
      clr *
      // glow have half lambert
      mix(diffuse(p, n, lamp2), 1., .5 * glow)  *
      // glow don't receive shadows
      mix(softshadow(p, lamp2dir, 0.02, 8., 10.), 1., glow)
    );
  return c;
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t + time,
    vec3(.5),
    vec3(.5),
    vec3(1., 1.1, 1.),
    vec3(.1, .3, .5)
  );
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m<1.) return vec3(m);
  return vec3(color(fract(m)));
}

vec2 map (vec3 p) {
  vec2 s = vec2(p.y, .7); // ground
  p.y -= .5;
  // non glowing objects
  s = opU(s, vec2(fBox(p, vec3(.5)), .4));
  s = opU(s, vec2(fBox(p+vec3(1.2, 0.1, 1.2), vec3(.4)), 2.2));
  s = opU(s, vec2(fBox(p+vec3(-1.2, 0.1, 1.2), vec3(.4)), 2.7));

  // glowing objects
  p.y -= .6;
  s = opU(s, vec2(fSphere(p, .3), 2.));
  s = opU(s, vec2(fSphere(p+vec3(1.2, -1. + .8 * cos(time), 1.2), .3), 2.2));
  s = opU(s, vec2(fSphere(p+vec3(-1.2, -1. + .8 * sin(time), 1.2), .3), 2.7));
  s = opU(s, vec2(sdSegment((p+vec3(1., 0.6, 1.2)).zxy, 2., .05), 2.2+.5*smoothstep(-1., 1., p.x + .5 * cos(time))));
  pR(p.xz, time);
  pR(p.xy, .5);
  s = opU(s, vec2(sdSegment(p.zxy, 4., .05), 2.));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  origin = vec3(0., 10., -9.);
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 2.5));
  origin.x += 6. * sin(.5 + .2 * time);
  dir = lookAt(origin, vec3(0., 0., 0.)) * dir;
  vec3 p = origin;
  vec4 glowing = vec4(0.);
  vec2 hit = marcher(p, dir, glowing);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  if (glowing.a>0.) {
    c = mix(c, glowing.rgb, glowing.a);
  }
  gl_FragColor = vec4(c, 1.0);
}`}}),gi=48,xi="Starry Night",bi=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:yi.node,uniforms:{time:e,img:"/images/seamless-wood2.jpg"}}),yi=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D img;

#define PI ${Math.PI}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(
      .68 + .03 * cos(2. + .8 * time),
      .75 + .05 * sin(.6 * time),
      .25 + .07 * cos(.5 * time)
    )
  );
}

void main() {
  vec2 p = uv - .5;
  float t = pow(time * .2, 1.4);
  float a = (atan(p.y, p.x)/PI+1.)/2.;
  float b = pow(fract((3. + 2. * cos(.5 * t)) * length(p)- t), 2.);
  vec3 clr = mix(
    color(texture2D(img, vec2(a, b)).r),
    color(.5),
    smoothstep(.09, .08, length(p) + .01 * cos(time + a * 6. * PI + sin(a * 8. * PI - time) - cos(a * 10. * PI + pow(time-10., 1.4))))
  );
  gl_FragColor = vec4(clr, 1.0);
}`}}),wi=49,_i="chinese lantern",Si=400,Ei=0,Oi=20,Ri=24,Pi=1.1,zi=({time:e})=>Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(Ti,{persistence:.8,children:Object(Ze.jsx)(Je.Node,{shader:Ii.node,uniforms:{time:e}})})}),Ti=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:Ii.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),Ii=Je.Shaders.create({persistence:{frag:Je.GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t, back;
    uniform float persistence;
    void main () {
      gl_FragColor = mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
    }
        `},node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);


void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

#define PI ${Math.PI}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

// huge kudos to https://www.iquilezles.org/www/articles/mandelbulb/mandelbulb.htm
vec2 mandelbulb(vec3 p) {
  vec3 w = p;
  float dz = 1.;
  float m = dot(w,w);
  float index = 0.;
  for (int i=0; i<4; i++) {
    dz = 8.0*pow(sqrt(m),7.0)*dz + 1.0;
    float x = w.x; float x2 = x*x; float x4 = x2*x2;
    float y = w.y; float y2 = y*y; float y4 = y2*y2;
    float z = w.z; float z2 = z*z; float z4 = z2*z2;

    float k3 = x2 + z2;
    float k2 = inversesqrt( k3*k3*k3*k3*k3*k3*k3 );
    float k1 = x4 + y4 + z4 - 6.0*y2*z2 - 6.0*x2*y2 + 2.0*z2*x2;
    float k4 = x2 - y2 + z2;

    k1 += .4 * sin(.9 * time);
    k4 += (.05 + pow(.005 * time, .5)) * cos(.8 * time);

    w.x =  64.0*x*y*z*(x2-z2)*k4*(x4-6.0*x2*z2+z4)*k1*k2;
    w.y = -16.0*y2*k3*k4*k4 + k1*k1;
    w.z = -8.0*y*k4*(x4*x4 - 28.0*x4*x2*z2 + 70.0*x4*z4 - 28.0*x2*z2*z4 + z4*z4)*k1*k2;

    w += p * (.5 + 2. * pow(smoothstep(.5, 1., sin(.2 * time)), 2.));

    m = dot(w,w);
    if (m>256.) break;
    index += 1.;
  }

  return vec2(0.25*log(m)*sqrt(m)/dz, 2. + index);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  vec2 hit = vec2(999., 0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<60; i++) {
    vec2 h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += .9 * h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

vec2 map (vec3 p) {
  vec2 s = vec2(min(p.y, 40. - p.z), 1.); // ground
  float z = p.z;
  p.y -= 1.;
  pR(p.xz, .05 * time);
  pR(p.yz, -.1 * time);
  s = opU(s, mandelbulb(p));
  return s;
}

vec3 color (float t) {
  if (t < 2.) return vec3(.9);
  return palette(
    .2 * t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.9, .2, .3)
  );
}

float specularStrength (float m) {
  return 2.;
}

float specularPow (float m) {
  return 8.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

vec3 shade (vec2 hit) {
  return color(hit.y);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-10., 10., -5.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    vec3(.8, .6, .4) * (
      // ambient
      0.1 +
      // diffuse
      shade(hit)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      * softshadow(p, ldir1, 0.02, 8., 20.) +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(0., 10., 0.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    vec3(.4, .6, .8) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit)
    * diffuse(p, n, lamp2) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  vec3 origin = vec3(0., 4., -4.);
  vec3 clr = vec3(0.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.6 + .5 * sin(.2 * time)));
  dir = lookAt(origin, vec3(0., 1., 0.)) * dir;
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = lighting(hit, p, n, dir);
  clr += c;
  gl_FragColor = vec4(clr, 1.0);
}`}}),Ci=50,ji="jumpy rooks",ki=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Ai.node,uniforms:{time:e,wood:"/images/seamless-wood2.jpg"}}),Ai=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec4
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// ADAPTED from https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in float r, float h ) {
  p.y -= h;
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(r/h,-1.0);

  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  HIT hit = HIT(0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<120; i++) {
    HIT h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .0;
  if (m<10.) return .3;
  return .8;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 5. + cos(time), -5.);
  vec3 lamp1dir = normalize(lamp1 - p);
  c +=
    vec3(1., .8, .7) * (
      // ambient
      0.1
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      + specular(n, hit.y, lamp1dir, dir, 60.)
    );
  vec3 lamp2 = vec3(4., 7., -3.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c +=
    vec3(.6) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 *diffuse(p, n, lamp2)) // half lambert
      * softshadow(p, lamp2dir, 0.02, 8., 32.)
    + specular(n, hit.y, lamp2dir, dir, 20.)
  );
  vec3 lamp3 = vec3(0., 2., 10.);
  vec3 lamp3dir = normalize(lamp3 - p);
  c +=
    vec3(.1, .2, .4) * (
    // ambient
    0.0
    // diffuse
    + shade(hit, p)
      * diffuse(p, n, lamp3) // half lambert
    + specular(n, hit.y, lamp3dir, dir, 10.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  float m = hit.y;
  if (m < 1.) return vec3(.8);
  float wFactor = fract(m) * 2.;
  vec2 p = hit.zw;
  vec2 tUV = fract(p);
  float piece = step(10., m);
  vec3 t = pow(texture2D(wood, tUV).r, .5) * mix(
    vec3(.4, .2, .15) * (1. - .3 * piece),
    vec3(.9, .8, .6) * (1. + piece),
    wFactor
  );
  return t;
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    sdCone(p * vec3(1., -1., 1.), .12, .5),
    sdCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
  pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    sdCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}

float sdChessRook (vec3 p) {
  p.y += .34;
  // body
  float d = max(
    sdCone(p + vec3(0., .5, 0.), .14, .6),
    p.y + .05
  );
  // crown
  vec3 q = p;
  q.y -= .2;
  q.y *= -1.;
  float cyl = max(
    abs(p.y) - .06,
    sdCone(q, .16, .5)
  );
  q = p - vec3(0., .06, 0.);
  float dif = max(
    abs(q.y) - .02,
    min(
      min(abs(q.z), abs(q.x)) - .02,
      length(q.xz) - .08
    )
  );
  d = min(d, max(cyl, -dif));
  // crown base
  d = min(
    d,
    min(
      fDisc(p + vec3(.0, .07, .0), .08)-.01,
      fDisc(p + vec3(.0, .09, .0), .06)-.02
    ));
  // body base
  p.y += 0.5;
  d = fOpUnionSoft(.03, d,
    min(
      fDisc(p, .05) - .1,
      min(
        fDisc(p-vec3(.0, .05, .0), .1)-.05,
        fDisc(p-vec3(.0, .01, .0), .14)-.03
      )
    )
  );
  return d;
}

// tiles are of 1m x 1m
HIT sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.38, manhattan),
    o
  );
  return HIT(fBox(p, vec3(4.4, 0.2, 4.4)), m, p.x, p.z);
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  // if (id == 12.) s = sdChessBishop(p);
  // if (id == 13.) s = sdChessKnight(p);
  if (id == 14.) s = sdChessRook(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

HIT map (vec3 p) {
  HIT s = HIT(p.y, 0.1, 0., 0.); // ground
  p.y -= .1;
  s = opU(s, sdChessboard(p));
  p.y -= .1;
  p.xz += vec2(3.5);
  float id, m, piece;

  float x = pModInterval1(p.x, 1., 0., 7.);
  float y = pModInterval1(p.z, 1., 0., 7.);
  p.y -= .5 * abs(cos(4. * time + .2 * length(vec2(x-3., y-3.))));
  id = 14.;
  m = sdChessPieceId(id, .5 * mod(1. + x + y, 2.));
  piece = sdChessPiece(p, id);
  s = opU(s, HIT(piece, m, p.x + .3 * p.y, p.z - .7 * p.y));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  origin = vec3(0., 6., -3.);
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 2.5));
  float zoom = 7. - 4. * cos(.4 * time);
  origin.x = zoom * cos(.10 * time);
  origin.z = zoom * sin(.09 * time);
  dir = lookAt(origin, vec3(-0.5, 0.5, -0.5)) * dir;

  // debug ortho camera
  #if 0
  origin.x = -0.5;
  origin.y = 1.;
  origin.z = -3.;
  origin += vec3(3. * (uvP - .5)- vec2(0., 0.), 0.);
  dir = normalize(vec3(0., 0., 1.));
  #endif

  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),Di=51,Li="symmetry chess",Ni=400,Mi=0,Ui=20,Fi=24,Bi=1,qi=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Gi.node,uniforms:{time:e,wood:"/images/seamless-wood2.jpg"}}),Gi=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec4
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// ADAPTED from https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in float r, float h ) {
  p.y -= h;
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(r/h,-1.0);

  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  HIT hit = HIT(0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<80; i++) {
    HIT h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .0;
  if (m<10.) return .3;
  return .8;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 0.5, -5.);
  vec3 lamp1dir = normalize(lamp1 - p);
  c +=
    vec3(.8, .9, .4) * (
      // ambient
      0.1
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      + specular(n, hit.y, lamp1dir, dir, 60.)
    );
  vec3 lamp2 = vec3(4., 2., -3.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c +=
    vec3(1., .4, .3) * (
    // ambient
    0.3
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, lamp2)) // half lambert
      * softshadow(p, lamp2dir, 0.02, 4., 32.)
    + specular(n, hit.y, lamp2dir, dir, 20.)
  );
  vec3 lamp3 = vec3(0., 1.5 + cos(2. * PI * time), 10.);
  vec3 lamp3dir = normalize(lamp3 - p);
  c +=
    vec3(.5) * (
    // ambient
    .1
    // diffuse
    + shade(hit, p)
      * diffuse(p, n, lamp3) // half lambert
    + specular(n, hit.y, lamp3dir, dir, 10.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  float m = hit.y;
  if (m < 1.) return vec3(.8);
  float wFactor = fract(m) * 2.;
  vec2 p = hit.zw;
  vec2 tUV = fract(p);
  float piece = step(10., m);
  vec3 t = texture2D(wood, tUV).r * mix(
    vec3(.1),
    vec3(.9),
    wFactor
  );
  return t;
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    sdCone(p * vec3(1., -1., 1.), .12, .5),
    sdCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
   pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    sdCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}

float sdChessRook (vec3 p) {
  p.y += .4;
  // body
  float d = max(
    sdCone(p + vec3(0., .5, 0.), .14, .6),
    p.y + .05
  );
  // crown
  vec3 q = p;
  q.y -= .2;
  q.y *= -1.;
  float cyl = max(
    abs(p.y) - .06,
    sdCone(q, .16, .5)
  );
  q = p - vec3(0., .06, 0.);
  float dif = max(
    abs(q.y) - .02,
    min(
      min(abs(q.z), abs(q.x)) - .02,
      length(q.xz) - .08
    )
  );
  d = min(d, max(cyl, -dif));
  // crown base
  d = min(
    d,
    min(
      fDisc(p + vec3(.0, .07, .0), .08)-.01,
      fDisc(p + vec3(.0, .09, .0), .06)-.02
    ));
  // body base
  p.y += 0.5;
  d = fOpUnionSoft(.03, d,
    min(
      fDisc(p, .05) - .1,
      min(
        fDisc(p-vec3(.0, .05, .0), .1)-.05,
        fDisc(p-vec3(.0, .01, .0), .14)-.03
      )
    )
  );
  return d;
}

// tiles are of 1m x 1m
HIT sdChessboardMini (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(1., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(1.1, manhattan),
    o
  );
  return HIT(fBox(p, vec3(1.2, 0.1, 1.2)), m, p.x - .5 * p.y, p.z + .5 * p.y);
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  // if (id == 12.) s = sdChessBishop(p);
  // if (id == 13.) s = sdChessKnight(p);
  if (id == 14.) s = sdChessRook(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

HIT piece (vec3 p, float id, float w) {
  float m = sdChessPieceId(id, w);
  float piece = sdChessPiece(p, id);
  return HIT(piece, m, p.x + .3 * p.y, p.z - .7 * p.y);
}

HIT board (vec3 p) {
  p.y -= .05;
  HIT s = sdChessboardMini(p);
  p.y -= .05;
  p.xz += vec2(0.5);
  float x = pModInterval1(p.x, 1., 0., 1.);
  float y = pModInterval1(p.z, 1., 0., 1.);
  s = opU(s, piece(p, 10. + x + 4. * y, mod(x + y, 2.)));
  return s;
}

HIT map (vec3 p) {
  HIT s = HIT(20. - length(p), 0.1, 0., 0.); // inside sphere
  s = opU(s, board(p));
  s = opU(s, board(vec3(0., 3.2, 0.) - p));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  float zoom = 4. + sin(2. * PI * .05 * time);
  origin = vec3(
    zoom * cos(.1 * 2. * PI * time),
    1.6 + cos(.1 * 2. * PI * time),
    zoom * sin(.1 * 2. * PI * time)
  );
  vec3 c = vec3(0.);
  vec3 dir;
  vec2 uvP = uv;

  #if 0
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      uvP = uv + vec2(x, y) / 800.0;
  #endif
      dir = normalize(vec3(uvP - .5, .8));
      dir = lookAt(origin, vec3(0., 1.6, 0.)) * dir;

  #if 0
    }
  }
  c /= 4.0;
  #endif

  // debug ortho camera
  #if 0
  origin.x = -0.5;
  origin.y = 1.;
  origin.z = -3.;
  origin += vec3(3. * (uvP - .5)- vec2(0., 0.), 0.);
  dir = normalize(vec3(0., 0., 1.));
  #endif

  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  // special cell shading effect on pieces
  if (hit.y > 9.) {
    c *= 1.2 - .5 * step(-.8, dot(dir, n));
  }
  gl_FragColor = vec4(c, 1.0);
}`}}),$i=52,Hi="knights dance",Vi=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Wi.node,uniforms:{time:e,wood:"/images/seamless-wood2.jpg"}}),Wi=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec4
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// ADAPTED from https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in float r, float h ) {
  p.y -= h;
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(r/h,-1.0);

  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  HIT hit = HIT(0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<100; i++) {
    HIT h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .0;
  if (m<10.) return .2;
  return 1.;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 l, ldir;
  vec3 c = vec3(0.);
  l = vec3(-4., 4., -4.);
  ldir = normalize(l - p);
  c +=
    .8 * vec3(1., .8, .5) * (
      // ambient
      0.15
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, l)) // half lambert
        * softshadow(p, ldir, 0.02, 4., 16.)
      + specular(n, hit.y, ldir, dir, 20.)
    );
  l = vec3(4., 3., -4.);
  ldir = normalize(l - p);
  c +=
    .8 * vec3(.4, .5, .7) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
    + specular(n, hit.y, ldir, dir, 40.)
  );
  l = vec3(0., 3., -2.);
  ldir = normalize(l - p);
  c +=
    vec3(.5) * (
    // diffuse
    + shade(hit, p)
      * diffuse(p, n, l)
    + specular(n, hit.y, ldir, dir, 80.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  float m = hit.y;
  if (m < 1.) return vec3(.8);
  float wFactor = fract(m) * 2.;
  vec2 p = hit.zw;
  vec2 tUV = fract(p);
  float piece = step(10., m);
  return (.5 + .5 * texture2D(wood, tUV).r) * mix(
    mix(vec3(.35, .2, .15), vec3(.1), piece),
    mix(vec3(.8, .7, .5), vec3(.9), piece),
    wFactor
  );
}

// tiles are of 1m x 1m
HIT sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.1, manhattan),
    o
  );
  return HIT(fBox(p, vec3(4.4, 0.2, 4.4)), m, .3 * (p.x - p.y), .3 * (p.z + p.y));
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    sdCone(p * vec3(1., -1., 1.), .12, .5),
    sdCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
   pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    sdCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}

float sdChessRook (vec3 p) {
  p.y += .4;
  // body
  float d = max(
    sdCone(p + vec3(0., .5, 0.), .14, .6),
    p.y + .05
  );
  // crown
  vec3 q = p;
  q.y -= .2;
  q.y *= -1.;
  float cyl = max(
    abs(p.y) - .06,
    sdCone(q, .16, .5)
  );
  q = p - vec3(0., .06, 0.);
  float dif = max(
    abs(q.y) - .02,
    min(
      min(abs(q.z), abs(q.x)) - .02,
      length(q.xz) - .08
    )
  );
  d = min(d, max(cyl, -dif));
  // crown base
  d = min(
    d,
    min(
      fDisc(p + vec3(.0, .07, .0), .08)-.01,
      fDisc(p + vec3(.0, .09, .0), .06)-.02
    ));
  // body base
  p.y += 0.5;
  d = fOpUnionSoft(.03, d,
    min(
      fDisc(p, .05) - .1,
      min(
        fDisc(p-vec3(.0, .05, .0), .1)-.05,
        fDisc(p-vec3(.0, .01, .0), .14)-.03
      )
    )
  );
  return d;
}

float sdChessKnight (vec3 p) {
  float d = min(
    fDisc(p + vec3(.0, .91, .0), .04) - .08,
    fDisc(p + vec3(.0, .96, .0), .12) - .04
  );
  vec3 q = p + vec3(0., .6, .0);
  q.y += .05;
  d = min(d, fBox(q, vec3(.03, .16, .0)) - .05);
  q.y -= .05;
  pR(q.xy, 1.);
  q.x += .05;
  q.y += .05;
  d = fOpUnionSoft(.1, d, fBox(q, vec3(.02, .08, .0)) - .03);
  q.y -= .15;
  q.x -= .2;
  float hair = fSphere(q * vec3(1., 3., 2.), .04);
  q.x += .05;
  q.x -= .08;
  q.y += .12;
  pR(q.xy, -.1);
  d = fOpUnionSoft(.05, d, max(
    fBox(q, vec3(.02, .08, .0)) - .05,
    -min(
      fSphere((q + vec3(.0, .12, .0)) * vec3(3., 2., 1.), .06),
      fSphere((vec3(q.x * 1.5, q.y, abs(q.z)) - vec3(.02, .03, .07)), .03)
    )
  ));
  d = fOpUnionSoft(.2, d, hair);
  return d;
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  // if (id == 12.) s = sdChessBishop(p);
  if (id == 13.) s = sdChessKnight(p);
  if (id == 14.) s = sdChessRook(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

HIT piece (vec3 p, float id, float w) {
  float m = sdChessPieceId(id, w);
  float piece = sdChessPiece(p, id);
  return HIT(piece, m, p.x + .3 * p.y, p.z - .7 * p.y);
}

// t: 0->1
// from and to are relative delta
vec2 moveKnight (float t, vec2 from, vec2 to) {
  vec2 d = to - from;
  vec2 ad = abs(d);
  float s = ad.x + ad.y;
  return from + d * mix(
    // longer first
    vec2(
      smoothstep(0., ad.x, s * t),
      smoothstep(ad.x, s, s * t)
    ),
    vec2(
      smoothstep(ad.y, s, s * t),
      smoothstep(0., ad.y, s * t)
    ),
    step(ad.x, ad.y)
  );
}

vec2 knightPhase (float i) {
  // I wish it was just one formula
  if (i==0.) return vec2(0., -1.);
  if (i==1.) return vec2(-1., 1.);
  if (i==2.) return vec2(1., 0.);
  if (i==3.) return vec2(-1., -1.);
  if (i==4.) return vec2(0., 1.);
  if (i==5.) return vec2(1., -1.);
  if (i==6.) return vec2(-1., 0.);
  if (i==7.) return vec2(1., 1.);
}

HIT knight (vec3 p, float offset, float i) {
  float t0 = mod(4. * offset + time, 32.);
  float t1 = mod(t0, 4.);
  t0 = floor(t0 / 4.);
  vec2 from = knightPhase(t0);
  vec2 to = knightPhase(mod(t0+1., 8.));
  p.xz += moveKnight(max(0., t1-i), from, to);
  pR(p.xz, mod(i, 2.) * PI);
  return piece(p, 13., mod(i, 2.));
}

HIT board (vec3 p) {
  vec3 q = p+vec3(-.4,0.,0.);
  p.y -= .05;
  HIT s = sdChessboard(p);
  p.y -= .05;
  p.xz += 3.5;
  s = opU(s, knight(p - vec3(2., 0., 2.), 0., 1.));
  s = opU(s, knight(p - vec3(5., 0., 5.), 4., 3.));
  s = opU(s, knight(p - vec3(5., 0., 2.), 2., 0.));
  s = opU(s, knight(p - vec3(2., 0., 5.), 6., 2.));
  return s;
}

HIT map (vec3 p) {
  HIT s = HIT(20. - length(p), 0.1, 0., 0.); // inside sphere
  s = opU(s, board(p));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  origin = vec3(
    3. * cos(.18 * time),
    3. + 1. * cos(.1 * time),
    -7. + 2. * sin(.13 * time)
  );
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 1.5));
  dir = lookAt(origin, vec3(0., 0., 0.)) * dir;

  // debug ortho camera
  #if 0
  origin.x = -0.5;
  origin.y = 1.;
  origin.z = -3.;
  origin += vec3(2.8 * (uvP - .5)- vec2(0., 0.), 0.);
  dir = normalize(vec3(0., 0., 1.));
  #endif

  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),Xi=53,Ki="cross waves",Yi=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Qi.node,uniforms:{time:e}}),Qi=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(1., .2, .3)
  );
}

void main() {
  float ci = 0.;
  float z = 5. + .01 * time;
  vec2 p = uv;
  p.y -= .1 * time;
  vec2 id = floor(p * z);
  p *= z;
  float even = mod(id.y, 2.);
  p.x += even * .5;
  p = fract(p);
  p.y = mix(p.y, 1.-p.y, even);
  float y = p.y;
  p.y = min(y, 1.-y);
  float alt = step(y, p.y);
  p.x = fract(p.x + mix(-time, time, alt));
  float l = length(p - vec2(.5, .0));
  float smooth = .01;
  float a = smoothstep(-smooth, smooth, abs(l-0.1)-.05);
  float b = smoothstep(-smooth, smooth, abs(l-0.4)-.05);
  float c = smoothstep(smooth, -smooth, abs(l-0.25)-.08);
  ci += a * b;
  ci += (1. + alt) * c;
  float mul = .2 + .3 * cos(.2 * time);
  vec3 from = color(floor(ci) * mul);
  vec3 to = color(ceil(ci) * mul);
  gl_FragColor = vec4(mix(from, to, fract(ci)), 1.0);
  /*
  // debug palette
  if (uv.y < .05) {
    gl_FragColor = vec4(color(uv.x), 1.0);
  }
  */
}`}}),Zi=54,Ji="chess set",ea=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:ta.node,uniforms:{time:e,wood:"/images/seamless-wood2.jpg"}}),ta=Je.Shaders.create({node:{frag:Je.GLSL`#version 300 es
precision highp float;
in vec2 uv;
out vec4 color;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec4
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// ADAPTED from https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in float r, float h ) {
  p.y -= h;
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(r/h,-1.0);

  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  HIT hit = HIT(0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<140; i++) {
    HIT h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .0;
  if (m<10.) return .3;
  return 1.;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 l, ldir;
  vec3 c = vec3(0.);
  l = vec3(-4., 4., -4.);
  ldir = normalize(l - p);
  c +=
    vec3(1., .8, .5) * (
      // ambient
      0.1
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, l)) // half lambert
      + specular(n, hit.y, ldir, dir, 20.)
    );
  l = vec3(4., 3., -4.);
  ldir = normalize(l - p);
  c +=
    vec3(.4, .5, .7) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
      * softshadow(p, ldir, 0.02, 4., 16.)
    + specular(n, hit.y, ldir, dir, 40.)
  );
  l = vec3(0., 3., 4.);
  ldir = normalize(l - p);
  c +=
    vec3(.3) * (
    // ambient
    0.05
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
    + specular(n, hit.y, ldir, dir, 80.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  float m = hit.y;
  if (m < 1.) {
    return mix(vec3(.8), vec3(.4, .5, .8), smoothstep(-2., 6., _p.y));
  }
  float wFactor = fract(m) * 2.;
  vec2 p = hit.zw;
  vec2 tUV = fract(p);
  float piece = step(10., m);
  return (.5 + .5 * texture(wood, tUV).r) * mix(
    mix(vec3(.35, .2, .15), vec3(.1), piece),
    mix(vec3(.8, .7, .5), vec3(.9), piece),
    wFactor
  );
}

// tiles are of 1m x 1m
HIT sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(1.+floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.1, manhattan),
    o
  );
  return HIT(fBox(p, vec3(4.4, 0.2, 4.4)), m, .3 * (p.x - p.y), .3 * (p.z + p.y));
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    sdCone(p * vec3(1., -1., 1.), .12, .5),
    sdCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
   pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    sdCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}

float sdChessBishop (vec3 p) {
  p.y += .2;
  float head = fOpUnionSoft(
    .15,
    fDisc(p + vec3(0., -.04, 0.), .03)-.01,
    fSphere((p + vec3(0., .09, 0.)) * vec3(1., 1.6, 1.), .1)
  );
  vec3 q = p;
  q.x += .05;
  pR(q.xy, .6);
  float cut = fBox(q, vec3(.01, .1, .1));
  head = max(head, -cut);
  head = min(head, min(
    fSphere(p + vec3(0., .18, 0.), .05),
    fDisc(p + vec3(0., .23, 0.), .07)-.02
  ));
  float d = fOpUnionSoft(
    .03,
    sdCone(p + vec3(0., .75, 0.), .16, .78),
    head
  );
  p.y += .56;
  float base = min(
    fDisc(p, .04) - .08,
    fDisc(p+vec3(.0, .05, .0), .12) - .04
  );
  d = min(d, base);
  return d;
}

float sdChessRook (vec3 p) {
  p.y += .4;
  // body
  float d = max(
    sdCone(p + vec3(0., .5, 0.), .14, .6),
    p.y + .05
  );
  // crown
  vec3 q = p;
  q.y -= .2;
  q.y *= -1.;
  float cyl = max(
    abs(p.y) - .06,
    sdCone(q, .16, .5)
  );
  q = p - vec3(0., .06, 0.);
  float dif = max(
    abs(q.y) - .02,
    min(
      min(abs(q.z), abs(q.x)) - .02,
      length(q.xz) - .08
    )
  );
  d = min(d, max(cyl, -dif));
  // crown base
  d = min(
    d,
    min(
      fDisc(p + vec3(.0, .07, .0), .08)-.01,
      fDisc(p + vec3(.0, .09, .0), .06)-.02
    ));
  // body base
  p.y += 0.5;
  d = fOpUnionSoft(.03, d,
    min(
      fDisc(p, .05) - .1,
      min(
        fDisc(p-vec3(.0, .05, .0), .1)-.05,
        fDisc(p-vec3(.0, .01, .0), .14)-.03
      )
    )
  );
  return d;
}

float sdChessKnight (vec3 p) {
  float d = min(
    fDisc(p + vec3(.0, .91, .0), .04) - .08,
    fDisc(p + vec3(.0, .96, .0), .12) - .04
  );
  vec3 q = p + vec3(0., .6, .0);
  q.y += .05;
  d = min(d, fBox(q, vec3(.03, .16, .0)) - .05);
  q.y -= .05;
  pR(q.xy, 1.);
  q.x += .05;
  q.y += .05;
  d = fOpUnionSoft(.1, d, fBox(q, vec3(.02, .08, .0)) - .03);
  q.y -= .15;
  q.x -= .2;
  float hair = fSphere(q * vec3(1., 3., 2.), .04);
  q.x += .05;
  q.x -= .08;
  q.y += .12;
  pR(q.xy, -.1);
  d = fOpUnionSoft(.05, d, max(
    fBox(q, vec3(.02, .08, .0)) - .05,
    -min(
      fSphere((q + vec3(.0, .12, .0)) * vec3(3., 2., 1.), .06),
      fSphere((vec3(q.x * 1.5, q.y, abs(q.z)) - vec3(.02, .03, .07)), .03)
    )
  ));
  d = fOpUnionSoft(.2, d, hair);
  return d;
}

float sdChessPiece(vec3 p, float id) {
  float s = .3;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  if (id == 12.) s = sdChessBishop(p);
  if (id == 13.) s = sdChessKnight(p);
  if (id == 14.) s = sdChessRook(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

HIT piece (vec3 p, float id, float w) {
  float m = sdChessPieceId(id, w);
  float piece = sdChessPiece(p, id);
  return HIT(piece, m, p.x + .3 * p.y, p.z - .7 * p.y);
}

HIT board (vec3 p) {
  p.y -= .05;
  HIT s = sdChessboard(p);
  p.y -= .05;
  p.xz += 3.5;
  float x = 7. - pModInterval1(p.x, 1., 0., 7.);
  float y = pModInterval1(p.z, 1., 0., 7.);
  float sx = min(x, 7.-x);
  float sy = min(y, 7.-y);
  float white = step(y, 3.);
  float id = mix(
    10. // first line
    + step(sx, 0.)
    + step(sx, 1.)
    + step(sx, 2.)
    + step(sx, 3.)
    - step(4., x) * step(x, 4.),
    15., // second line (pawns)
    step(1., sy)
  ) * step(sy, 1.);
  s = opU(s, piece(p, id, white));
  return s;
}

HIT map (vec3 p) {
  HIT s = HIT(20. - length(p), 0.1, 0., 0.); // inside sphere
  s = opU(s, board(p));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  float t = .2 * time;
  float z = .5 + .5 * cos(.3 * t);
  float dist = 12. - 6. * pow(z, 0.5);
  origin = vec3(
    dist * cos(t),
    2. + 6. * z,
    dist * sin(t)
  );
  vec3 poi = vec3(0., 0.3, 1. - 6. * pow(z, 4.));
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 1.5));
  dir = lookAt(origin, poi) * dir;

  // debug ortho camera
  #if 0
  origin.x = -0.5;
  origin.y = 1.;
  origin.z = -3.;
  origin += vec3(2.4 * (uvP - .5)- vec2(0., 0.), 0.);
  dir = normalize(vec3(0., 0., 1.));
  #endif

  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  color = vec4(c, 1.0);
}`}}),ra=55,na="cube d'or",oa=400,ia=0,aa=20,ca=24,sa=1,la=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:fa.node,uniforms:{time:e}}),fa=Je.Shaders.create({node:{frag:Je.GLSL`#version 300 es
precision highp float;
in vec2 uv;
out vec4 color;
uniform float time;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec2
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float fBoxCheap(vec3 p, vec3 b) {
	return vmax(abs(p) - b);
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.0005, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  HIT hit = HIT(0.);
  float t = 0.;
  for (int i=0; i<100; i++) {
    HIT h = map(p + t * dir);
    t += h.x;
    if (abs(h.x) < .0005) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  return step(.5, m);
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 l, ldir;
  vec3 c = vec3(0.);
  l = vec3(-3., 2., 2.);
  ldir = normalize(l - p);
  c +=
    vec3(.9, .6, .3) * (
      // ambient
      0.2
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, l)) // half lambert
      + specular(n, hit.y, ldir, dir, 20.)
    );
  l = vec3(3., 1., 3.);
  ldir = normalize(l - p);
  c +=
    vec3(.3, .5, .9) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
    + specular(n, hit.y, ldir, dir, 40.)
  );
  l = vec3(4., 3., -4.);
  ldir = normalize(l - p);
  c +=
    vec3(.4) * (
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
      * softshadow(p, ldir, 0.02, 4., 18.)
    + specular(n, hit.y, ldir, dir, 60.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  return mix(
    vec3(.9, .65, .0),
    vec3(.8),
    step(hit.y, .5)
  );
}

HIT sdObject (vec3 p) {
  p.y += .5;
  p.y = abs(p.y);
  p.y -= .45;
  vec3 size = vec3(.5, .02, .02);
  float s = 99.;
  pR(p.xy, -PI/2.);
  p -= .5;
  for (int i = 0; i <= 32; i++) {
    size.x -= .013;
    s = min(s, fBoxCheap(p + size, size));
    p = vec3(p.y, p.z, -p.x - 2. * size.x);
  }
  size.x += .3;
  s = min(s, fBoxCheap(p + size, size));
  return HIT(s, 1.);
}

HIT map (vec3 p) {
  HIT s = HIT(min(p.y+.5, 20.-length(p)), 0.); // inside sphere
  p.y -= .9;
  s = opU(s, sdObject(p));
  return s;
}

void main() {
  float t = .2 * PI * time;
  float zoom = .4;
  float h = cos(.5 * t);
  origin = zoom * vec3(
    4. * cos(t),
    2.5 + h,
    -4. * sin(t)
  );
  vec3 focus = vec3(0., .5 + .5 * h, 0.);
  vec3 c = vec3(0.);

  vec2 uvP = uv;
  #if ${0}
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      uvP = uv + vec2(x, y) / 800.0;
  #endif
      vec3 dir = normalize(vec3(uvP - .5, 1.));
      dir = lookAt(origin, focus) * dir;
      vec3 p = origin;
      HIT hit = marcher(p, dir);
      vec3 n = normal(p);
      c += lighting(hit, p, n, dir);
  #if ${0}
    }
  }
  c /= 4.;
  #endif
  color = vec4(c, 1.0);
}`}}),ua=56,pa="jade forest",da=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:va.node,uniforms:{time:e}}),va=Je.Shaders.create({node:{frag:Je.GLSL`#version 300 es
precision highp float;
in vec2 uv;
out vec4 color;
uniform float time;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec2
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);
float specularStrength (float m);

float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.0005, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

HIT marcher (inout vec3 p, vec3 dir) {
  HIT hit = HIT(0., 2.); // 2. because it's our tree that tends to glitch
  float t = 0.;
  for (int i=0; i<100; i++) {
    HIT h = map(p + t * dir);
    t += min(.3, h.x);
    if (abs(h.x) < .0001) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 l, ldir;
  vec3 c = vec3(0.);
  l = vec3(-5., 6., -3.);
  ldir = normalize(l - p);
  c +=
    vec3(.8, .5, .2) * (
      // ambient
      0.1
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, l)) // half lambert
      + specular(n, hit.y, ldir, dir, 100.)
    );
  l = vec3(3., 1., -3.);
  ldir = normalize(l - p);
  c +=
    vec3(.2, .5, 1.) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
    + specular(n, hit.y, ldir, dir, 10.)
  );

  l = vec3(.6, 1., .5);
  ldir = normalize(l);
  c +=
  vec3(.6) * (
  // ambient
  0.0
  // diffuse
  + shade(hit, p)
    * (.5 + .5 * diffuse(p, n, l)) // half lambert
    * softshadow(p, ldir, 0.02, 4., 20.)
  + specular(n, hit.y, ldir, dir, 50.)
  );
  return c;
}

float specularStrength (float m) {
  return .03 + .9 * step(1.5, m);
}

vec3 shade (HIT hit, vec3 _p) {
  return mix(
    vec3(.3, .65, .4 * fract(hit.y)),
    mix(
      vec3(1.),
      vec3(.2, .25, .3),
      step(hit.y, 0.5)
    ),
    step(hit.y, 1.5)
  );
}

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
}

HIT sdObject (vec3 p, vec2 id) {
  p.y -= .2;
  float s = fCylinder(p, .05, .2);
  p.y -= .4;
  float r1 = random(id);
  float r2 = random(id.yx);
  float size = 3. + pow(r1, 2.) * 6.;
  for (float f = 0.; f < size; f++) {
    float r3 = random(vec2(f, r1));
    float r4 = random(vec2(f, r2));
    float r5 = min(r3, r4);
    vec3 q = p;
    float i = pModPolar(q.xz, 20. - 2. * f);
    pR(q.xy,  -.8 - .2*r2 - .05 * f + .05 * r3);
    vec3 sz = vec3(.5-.05*f-.02*r4, .02, .05-.0035*f-.02*r5);
    s = min(s, fBox(q, sz-.01)-.01);
    p.y -= .1;
  }
  return HIT(s, 2. + random(id * .3));
}

HIT map (vec3 p) {
  HIT s = HIT(6.-length(p), 0.); // inside sphere
  s = opU(s, HIT(p.y, 1.));
  p.z += time;
  float x = pMod1(p.x, .7);
  p.z -= .5 * mod(x, 2.);
  float y = pMod1(p.z, .8);
  vec2 id = vec2(x, y);
  s = opU(s, sdObject(p, id));
  return s;
}

void main() {
  float t = .5 * time;
  float h = cos(.3 * t);
  origin = vec3(
    .35 + .1 * cos(t),
    .9 + .4 * h,
    -2.
  );
  vec3 focus = vec3(.5, .8 + .3 * h, 0.);
  vec3 c = vec3(0.);
  vec3 dir = normalize(vec3(uv - .5, 1.));
  dir = lookAt(origin, focus) * dir;
  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  // snow. (cheap effect IKR)
  c = mix(
    c,
    vec3(1.),
    smoothstep(.96, 1., random(.01 * floor(100. * (p.xy - vec2(.0, -time)))))
  );
  // mist
  c = mix(c, vec3(1.), pow(smoothstep(1., 4., length(p-origin)), .5));
  color = vec4(c, 1.0);
}`}}),ha=57,ma="Virus v2",ga=400,xa=0,ba=20,ya=24,wa=.8,_a=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Sa.node,uniforms:{time:e}}),Sa=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

float t = 2. * PI * time / 20.0;

mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h); }

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdSphere( vec3 p, float d ) {
  return length(p) - d;
}

float sdParticle( vec3 p, float d, float dist ) {
  return opSmoothUnion(
    length(p) - d,
    sdSegment(p.yxz+vec3(0.,dist,0.), dist, 0.2 * d),
    0.2
  );
}

// badly failing at making a "good" radial repeat
vec3 opRepeatPolar (vec3 p, float n, float R, float offsetA) {
  float SCALE = n/(2. * PI);
  vec2 pos2d = p.xz;
  float r = length(pos2d) / R;
  pos2d = vec2(log(r), offsetA + atan(p.z, p.x)) * SCALE;
  pos2d.y = fract(pos2d.y) - 0.5;
  return vec3(pos2d, SCALE * p.y / r);
}

vec3 opRep( in vec3 p, in vec3 c ) {
  vec3 q = mod(p+0.5*c,c)-0.5*c;
  return q;
}

float sdVirus (vec3 p, vec3 gp) {
  p.yz *= rot(-1.4 + 0.1 * cos(t));
  p.xz *= rot(0.01 * gp.z + 0.3 * cos(1. + 2. * t + 0.1 * gp.z));
  p.xy *= rot(.02 * gp.z + 0.3 * sin(3. * t));
  float s = sdSphere(p, 2.);
  p.y = abs(p.y);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p, 18., 2.2, 0.),
    0.2,
    0.4
  ), 0.2);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0.05 * cos(3. * t), 1., 0.05 * sin(4.*t)), 14., 1.9, 0.),
    0.15,
    0.4
  ), 0.3);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0.+ 0.05 * cos(5.*t), 1.6,0.05 * sin(6.*t)), 10., 1.5, 0.),
    0.15,
    0.4
  ), 0.3);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0., 2.1, 0.), 6., 0.6, .2),
    0.18,
    0.0
  ), 0.2);
  return s;
}

float SDF(vec3 p) {
  vec3 gp = p;
  float SCALE = 6./PI;
  float s = sdVirus(p, gp);
  p -= vec3(4., 4., 4.);
  p.xy *= rot(p.z * .07);
  p.yz *= rot(p.z * .05);
  p.x += 0.7 * time;
  p.y += 0.8 * time;
  p.z -= 2.0 * time;
  p += 50.;
  p = opRep(p, vec3(7.4, 5.4, 6.));
  p *= 2.0;
  p.z *= 10.0 * smoothstep(5., 0., abs(mod(time, 30.0)-10.));
  p.z += 10.0 * abs(mod(time, 1.0)) * smoothstep(0., 5., abs(mod(time, 30.0)-10.));
  s = opSmoothUnion(s, sdVirus(p, gp), 1.0);
  return s;
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float z, float shad) {
  float p = sqrt(1. - shad);
  vec3 c =
  palette(p,
    vec3(.5),
    vec3(.7),
    vec3(0.15, 0.5, 0.35 + 0.05 * cos(8. * t)),
    vec3(1.0, 0.4, 0.5))
  * p
  * smoothstep(30., 5., z);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<90; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/90.;
      break;
    }
    p += d * dir * 0.5;
  }
  float edge = min(min(uv.x, 1.-uv.x), min(uv.y, 1.-uv.y));
  gl_FragColor = vec4(
    mix(
      color(p.z, shad),
      color(0., 0.5),
      step(edge, 0.02)
    )
    , 1.0);
}
`}});var Ea=r("005v"),Oa=r.n(Ea);const Ra=400,Pa=0,za=30,Ta=20,Ia=1,Ca="5M",ja=58,ka="Mandelglitch",Aa=[{url:"https://ethblock.art/create/17",text:"Mint on ethblock.art"},{url:"https://ghostmarket.io/asset/pha/ghost/3008841254969814369262311336331954453497120774334547905246474374493804042898/",text:"ghostmarket.io: 400 KCAL"},{url:"https://www.hicetnunc.xyz/objkt/3063",text:"hicetnunc.xyz: Mandelglitch #1 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3068",text:"hicetnunc.xyz: Mandelglitch #2 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3071",text:"hicetnunc.xyz: Mandelglitch #3 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3072",text:"hicetnunc.xyz: Mandelglitch #4 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3073",text:"hicetnunc.xyz: Mandelglitch #5 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3077",text:"hicetnunc.xyz: Mandelglitch #6 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3088",text:"hicetnunc.xyz: Mandelglitch #7 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3574",text:"hicetnunc.xyz: Mandelglitch #8 (5 XTZ)"}];const Da=e=>e<.5?2*e*e:(4-2*e)*e-1;const La=({time:e,n:t,exporting:r})=>{const n=Object(gt.useMemo)((()=>function(e,t=0){const r=e?3:50,n=new Oa.a(t);return Array(r).fill(null).map((()=>Array(12).fill(null).map((()=>n.random()))))}(r,t)),[t,r]),o=e/10%n.length,i=Math.floor(o),a=o-i;let[c,s,l,f,u,p,d,v,h,m,g,x]=(b=n[i%n.length],y=n[(i+1)%n.length],w=Da(a),b.map(((e,t)=>e*(1-w)+y[t]*w)));var b,y,w;return l=Da(l),Object(Ze.jsx)(Je.LinearCopy,{children:Object(Ze.jsx)(Ma,{persistence:r?0:.8,children:Object(Ze.jsx)(Je.Node,{shader:Na.main,uniforms:{aa:r?2:0,time:e,resolution:Je.Uniform.Resolution,travel:c,love:s,dark:l,rot:r?2*Math.PI/za:.1,s1:f,s2:u,s3:p,s4:d,s5:v,s6:h,s7:m,s8:g,s9:x}})})})},Na=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor =
      mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
  }
      `},main:{frag:Je.GLSL`
  #version 300 es
precision highp float;
in vec2 uv;
out vec4 color;

uniform vec2 resolution;
uniform float aa;
uniform float time;
uniform float rot;
uniform float love, travel, dark;
uniform float s1, s2, s3, s4, s5, s6, s7, s8, s9;

const float PI = ${Math.PI};
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 pal (float t) {
  return palette(
    t + 0.5 * dark * dark,
    vec3(.85 - .5 * dark),
    vec3(.5),
    vec3(1.),
    vec3(0.8 + 0.2 * s1, 0.2 * s2, .2)
  );
}
float run (vec2 init) {
  float iterations = 200. + 300. * love;
  vec2 p = init;
  for (float iter = 0.; iter < iterations; iter += 1.) {
    // original mandelbrot formula is:
    // p = vec2( p.x * p.x - p.y * p.y, 2. * p.x * p.y) + init;
    float x2 = p.x * p.x;
    float y2 = p.y * p.y;
    float xy = p.x * p.y;
    float a = 1. + .1 * (s1 - 0.5) * s2;
    float b = -1. + .1 * (s1 - 0.5) * s2;
    float c = 0.0 + 2. * (s2 - 0.5) * s3;
    float d = max(0., pow(s8, 2.) - 0.5) * cos(100. * s7 * s2 * s9 * p.y);
    float e = max(0., pow(s9, 2.) - 0.5) * sin(100. * s2 * s1 * p.x);
    float f = 2. + s6 - s6 * s6 * s6;
    vec2 offset = init + mix(vec2(0.0), vec2(s4, s5) - .5, s3 * s4 * s5);
    p = vec2(
      a * x2 + b * y2 + c * xy + d,
      f * xy + e
    ) + offset;
    if (length(p) >= 2.0) {
      return iter / iterations;
    }
  }
  return 0.;
}
vec3 shade (vec2 uv) {
  float zoom = (0.5 + 12. * s7 * s7 * s7) * (1.5 + 0.5 * travel);
  float focusAngle = 4. * travel;
  float focusAmp = 0.1 + 0.4 * s7;
  vec2 init = 2. * (uv - .5) / zoom;
  pR(init, rot * time);
  init -= vec2(.6, .0);
  init += focusAmp * vec2(cos(focusAngle), sin(focusAngle));
  return pal(pow(run(init), .5));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec2 uvRatio = 0.5 + (uv - 0.5) * ratio;
  vec3 c = vec3(0.);
  float total = 0.0;
  vec2 uvP = uvRatio;
  c += shade(uvRatio);
  total += 1.0;
  if (aa > 0.) {
    for (float x=-.5; x<=.5; x += 1. / aa) {
      for (float y=-.5; y<=.5; y += 1. / aa) {
        uvP = uvRatio;
        uvP += 0.5 * vec2(x, y) / resolution;
        c += shade(uvP);
        total += 1.0;
      }
    }
  }
  c /= total;
  color = vec4(c, 1.0);
}
  `}}),Ma=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:Na.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),Ua=59,Fa="Pixels 256",Ba="There will be only 256 patterns generated by this single fragment shader.",qa=({time:e,n:t,exporting:r})=>Object(Ze.jsx)(Ga,{n:t+1+(r?0:Math.floor(e))}),Ga=xt.a.memo((({n:e})=>{const t=new Oa.a(e%256),r=t.random(),n=t.random(),o=t.random(),i=t.random(),a=t.random(),c=t.random();return Object(Ze.jsx)(Je.Node,{shader:$a.node,uniforms:{s1:r,s2:n,s3:o,s4:i,s5:a,s6:c}})})),$a=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float s1,s2,s3,s4,s5,s6;

float m = 1. + floor(6. * s3 * s3 * s3);
float b = 1. + floor(10. * s2 * s2 * s2);
float unzoom = floor(8. - 8. * s6 * s6 + s1 * 10.);

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette( t + 0.2 * s5, vec3(.5), vec3(.6), vec3(1.0, 1.0, 1.0),
    vec3(
      0.8 * s1,
      0.3 * s2,
      0.1 + 0.3 * s3
    )
  /*
  vec3(
    0.5 + 0.3 * s1,
    0.8 - 0.2 * s3,
    1.0 - 0.2 * s2
  )
  */ );
}
float cell (vec2 p) {
  return mod(mod(
    0.001 * s3 * (cos(8. * s4 * p.x) + sin(8. * s4 * p.y)) +
    (floor(8. * mix(p.x, p.y, s4)) / 8.0) *
    floor(s6 * p.x + s5 * s5 * 20. * p.y)
  , b), m);
}
void main() {
  vec2 offset = vec2(-.25 * unzoom, -.25 * unzoom);
  vec3 c = color((.1 + .3 * s6 * s6) * cell(floor(uv * unzoom + offset)));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Ha=60,Va="Bitcoin rainbow",Wa=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Xa.node,uniforms:{time:e}}),Xa=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.6 + .1 * cos(.3 * time)),
    vec3(1.),
    vec3(0.22, 0.5, 0.77)
  );
}

const float PI = ${Math.PI};

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdBox (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float sdD (vec2 p, float w, float h) {
  return min(sdBox(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float sdUpperD (vec2 p) {
  p.x += .02;
  p.y -= .1;
  float inner = sdD(p + vec2(-0.025, 0.012), 0.037, 0.055);
  float outer = sdD(p, 0.1, 0.1);
  return max(-inner, outer);
}
float sdLowerD (vec2 p) {
  p.x += .01;
  p.y += .085;
  float outer = sdD(p, 0.11, 0.11);
  float inner = sdD(p - vec2(0.023, 0.01), 0.045, 0.058);
  return max(-inner, outer);
}
float sdRevCornerRadius(vec2 p) {
  return max(
    sdBox(p, vec2(.5)),
    -min(
      (p.x - p.y) / 2.,
      length(p + vec2(.5, -.5)) - 1.
    )
  );
}
float sdBitcoin2D (vec2 p) {
  float bottom = sdLowerD(p);
  bottom = min(bottom, max(
    sdBox(p + vec2(.15, .165), vec2(.04, .03)), // bottom-left shape
    -(p.x - .216 * p.y + 0.142)) // 12.5° cut
  );
  bottom = min(bottom, sdRevCornerRadius((p + vec2(0.135, -0.135)) * vec2(1., -1.) * 30.));
  float top = sdUpperD(p);
  top = min(top, sdBox(p - vec2(-.15, .175), vec2(.034, .025)));
  top = min(top, sdRevCornerRadius((p + vec2(0.135, 0.12)) * vec2(1., 1.) * 30.));
  p.x += .01;
  float hash = max(
    sdBox(p, vec2(0.07, .285)),
    -min(
      sdBox(p, vec2(0.022, 1.)),
      sdBox(p, vec2(1., .15))
    )
  );
  return min(min(top, bottom), hash);
}

void main() {
  float v = sdBitcoin2D(uv-.5);
  v = max(-step(fract(time), 0.5), v); // blink 500ms
  gl_FragColor = vec4(
    step(v, 0.) * color(1.6 * (uv.y + time)) +
    step(0., v) * color(sqrt(max(v, 0.)) - 2. * time),
    1.0);
}
`}}),Ka=61,Ya="Binance gradients",Qa=1,Za=30,Ja=["/images/shaders/binance.dist.png"],ec=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:tc.node,uniforms:{time:e,image:"/images/shaders/binance.dist.png"}}),tc=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D image;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(1.0, 1.0, .5),
    vec3(.5),
    vec3(1.),
    vec3(0.2 + 0.1 * cos(0.3 * time), 0.3 + 0.1 * sin(0.2 * time), 0.5 + 0.2 * cos(0.1 * time))
  );
}

void main() {
  float v = texture2D(image, uv).a - 0.5;
  gl_FragColor = vec4(
    step(v, 0.) * color(uv.y + 2. * time) +
    step(0., v) * color(sqrt(max(v, 0.)) - time),
    1.0);
}
`}}),rc=62,nc="Overgrowth",oc=20,ic=40,ac=1,cc=({generation:e,size:t,n:r})=>Object(Ze.jsx)(Je.Node,{width:t,height:t,shader:dc.logic,uniforms:{generation:e,prev:Je.Uniform.Backbuffer,size:t,seed:r/100},backbuffering:!0}),sc=xt.a.memo(cc),lc=({time:e,generation:t,n:r})=>Object(Ze.jsx)(Je.Node,{shader:dc.render,uniforms:{time:e,logic:Object(Ze.jsx)(sc,{generation:t,size:140,n:r})},uniformsOptions:{logic:{interpolation:"nearest"}}}),fc=xt.a.memo(lc),uc=1e3*Math.random(),pc=({time:e,n:t})=>Object(Ze.jsx)(fc,{n:t+uc,time:e,generation:Math.floor(30*e)},t),dc=Je.Shaders.create({logic:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float generation;
uniform float size;
uniform sampler2D prev;
uniform float seed;

${"\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nfloat cnoise(vec2 P){\n  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation\n  vec4 ix = Pi.xzxz;\n  vec4 iy = Pi.yyww;\n  vec4 fx = Pf.xzxz;\n  vec4 fy = Pf.yyww;\n  vec4 i = permute(permute(ix) + iy);\n  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...\n  vec4 gy = abs(gx) - 0.5;\n  vec4 tx = floor(gx + 0.5);\n  gx = gx - tx;\n  vec2 g00 = vec2(gx.x,gy.x);\n  vec2 g10 = vec2(gx.y,gy.y);\n  vec2 g01 = vec2(gx.z,gy.z);\n  vec2 g11 = vec2(gx.w,gy.w);\n  vec4 norm = 1.79284291400159 - 0.85373472095314 * \n    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));\n  g00 *= norm.x;\n  g01 *= norm.y;\n  g10 *= norm.z;\n  g11 *= norm.w;\n  float n00 = dot(g00, vec2(fx.x, fy.x));\n  float n10 = dot(g10, vec2(fx.y, fy.y));\n  float n01 = dot(g01, vec2(fx.z, fy.z));\n  float n11 = dot(g11, vec2(fx.w, fy.w));\n  vec2 fade_xy = fade(Pf.xy);\n  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n  return 2.3 * n_xy;\n}\n"}

void main() {
  if (generation == 0.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }
  float dp = 1. / size;
  // we retrieve previous values of cell and sibling cells
  vec4 vcenter = texture2D(prev, uv);
  vec4 vright = texture2D(prev, uv+vec2(dp,0.0));
  vec4 vleft = texture2D(prev, uv+vec2(-dp,0.0));
  vec4 vtop = texture2D(prev, uv+vec2(0.0,dp));
  vec4 vbottom = texture2D(prev, uv+vec2(0.0,-dp));
  vec4 vtopright = texture2D(prev, uv+vec2(dp,dp));
  vec4 vtopleft = texture2D(prev, uv+vec2(-dp,dp));
  vec4 vbottomleft = texture2D(prev, uv+vec2(-dp,-dp));
  vec3 c = vcenter.rgb;
  vec4 vbottomright = texture2D(prev, uv+vec2(dp,dp));
  float gen = smoothstep(0.0, 50.0, generation);
  if (gen < 1.0) {
    // TERRAIN BUILDING
    // we use perlin noise to modulate terrain with different harmonies
    float freq = 0.5 + 3.0 * gen + fract(seed);
    vec2 disp = vec2(6. * gen + seed, -40. * gen + 50. * fract(seed + 0.4));
    float n = cnoise(disp + uv * freq);
    n += 0.1;
    n *= 1.2 - uv.y; // top part have less ground
    // average ground increase ground propagation
    float rs = vleft.r + vright.r + vbottom.r + vtop.r;
    // accumulate over each step
    c.r = mix(
      mix(n, c.r, 0.8 + 0.2 * gen),
      rs / 4.0,
      0.2 * gen
    );
  }
  else {
    // GROWING EVOLUTION
    float n1 = cnoise(0.233 * uv + vec2(0.109 * generation, 0.0));
    float n2 = cnoise(6.11 * uv + vec2(0.0, 0.2111 * generation));
    float n3 = cnoise(13.82 * uv + vec2(0.0, 0.0211 * generation));
    float n4 = cnoise(55.31 * uv + n1 + n2 + n3 + 0.31 * generation);
    // sprount from ground
    float threshold = 0.14;
    c.g += 0.1 * 
      step(threshold, vbottom.r) *
      step(c.r, threshold) *
      max(0.0, n1);
    // grows up
    c.g += 0.2 * vbottom.g * step(c.b, 0.0) * step(c.r, threshold) * max(0.0, n1 + n2);
    // sometimes can spread from edges
    float edgespread =
    step(0.6, vright.g + vleft.g + vbottomleft.g + vbottomright.g)
      * step(c.r, 0.1)
      * smoothstep(-0.6, -0.7, n4);
    c.g += 0.2 * edgespread * max(0.5, 2. * n3);
    c.b += edgespread;
    c.b -= 0.01;
    // environment constraints
    c.g *= 0.98;
    c.g -= 0.01 *
      step(0.0, vtop.g) *
      step(0.0, c.g) *
      smoothstep(0.8, 1.0, n3 + n2);
  }
  gl_FragColor = vec4(c, 1.0);
}
    `},render:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D logic;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (vec3 state) {
  float ground = smoothstep(0.1, 0.15, state.r);
  float grass = state.g;
  float phase = cos(0.5 * time);
  return mix(
    palette(
      0.4 + 0.2 * grass + 0.2 * phase,
      vec3(0.0, 1.0, 0.0),
      vec3(.5),
      vec3(1.),
      vec3(0.4, 0.3, 0.1)
    ),
    palette(
      0.1 * phase + 0.6 - 0.4 * ground,
      vec3(.5),
      vec3(.5),
      vec3(1.),
      vec3(0.7, 0.55, 0.4)
    ),
    step(grass, 0.0)
  );
}

void main() {
  vec3 state = texture2D(logic, uv).rgb;
  gl_FragColor = vec4(color(state), 1.0);
}
`}});var vc=r("AJhG");const hc=63,mc="Relics",gc=400,xc=2,bc=4,yc=20,wc=1,_c="5M",Sc={colors:[.7,.55,.4],logicSize:80,amp:1,base:2,persistance:.89,delta:.5,seed:0};console.log(Object.keys(Sc).map((e=>String(Sc[e]))).join("_"));const Ec=({g:e,size:t,seed:r,amp:n,base:o,persistance:i,delta:a})=>Object(Ze.jsx)(Je.Node,{width:t,height:t,shader:Tc.logic,uniforms:{amp:n,base:o,g:e,prev:Je.Uniform.Backbuffer,size:t,seed:r,persistance:i,delta:a},backbuffering:!0},t),Oc=xt.a.memo(Ec),Rc=({g:e,colors:t,amp:r,base:n,persistance:o,delta:i,logicSize:a,seed:c})=>Object(Ze.jsx)(Je.Node,{shader:Tc.render,uniforms:{colors:t,logic:Object(Ze.jsx)(Oc,{amp:r,base:n,g:e,size:a,seed:c,persistance:o,delta:i})},uniformsOptions:{logic:{interpolation:"nearest"}}}),Pc=xt.a.memo(Rc),zc=({time:e})=>{const{colors:t,logicSize:r,amp:n,base:o,persistance:i,delta:a,seed:c}=Object(vc.b)(Sc);return Object(Ze.jsx)(Pc,{amp:n,base:o,g:Math.floor(20*e)%40,colors:t,persistance:i,delta:a,seed:c,logicSize:r})},Tc=Je.Shaders.create({logic:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D prev;
uniform float g;
uniform float size;
uniform float seed;
uniform float amp;
uniform float base;
uniform float persistance;
uniform float delta;
#define PI ${Math.PI}

${"\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nfloat cnoise(vec2 P){\n  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation\n  vec4 ix = Pi.xzxz;\n  vec4 iy = Pi.yyww;\n  vec4 fx = Pf.xzxz;\n  vec4 fy = Pf.yyww;\n  vec4 i = permute(permute(ix) + iy);\n  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...\n  vec4 gy = abs(gx) - 0.5;\n  vec4 tx = floor(gx + 0.5);\n  gx = gx - tx;\n  vec2 g00 = vec2(gx.x,gy.x);\n  vec2 g10 = vec2(gx.y,gy.y);\n  vec2 g01 = vec2(gx.z,gy.z);\n  vec2 g11 = vec2(gx.w,gy.w);\n  vec4 norm = 1.79284291400159 - 0.85373472095314 * \n    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));\n  g00 *= norm.x;\n  g01 *= norm.y;\n  g10 *= norm.z;\n  g11 *= norm.w;\n  float n00 = dot(g00, vec2(fx.x, fy.x));\n  float n10 = dot(g10, vec2(fx.y, fy.y));\n  float n01 = dot(g01, vec2(fx.z, fy.z));\n  float n11 = dot(g11, vec2(fx.w, fy.w));\n  vec2 fade_xy = fade(Pf.xy);\n  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n  return 2.3 * n_xy;\n}\n"}

void main() {
  vec4 vcenter = texture2D(prev, uv);
  // we retrieve previous values of cell and sibling cells
  float dp = 1. / size;
  vec4 vright = texture2D(prev, uv+vec2(dp,0.0));
  vec4 vleft = texture2D(prev, uv+vec2(-dp,0.0));
  vec4 vtop = texture2D(prev, uv+vec2(0.0,dp));
  vec4 vbottom = texture2D(prev, uv+vec2(0.0,-dp));
  vec4 vtopright = texture2D(prev, uv+vec2(dp,dp));
  vec4 vtopleft = texture2D(prev, uv+vec2(-dp,dp));
  vec4 vbottomleft = texture2D(prev, uv+vec2(-dp,-dp));
  vec4 vbottomright = texture2D(prev, uv+vec2(dp,dp));
  vec3 c = vcenter.rgb;
  // we use perlin noise to modulate terrain with different harmonies
  float freq = amp * (base + 1.5 * cos(0.2 * PI * g) + 0.033 * g);
  vec2 disp = vec2(5.2342 * seed, 6.417 - 0.18 * g);
  float n = cnoise(disp + uv * freq);
  n += 0.05;
  float l = length(uv - .5);
  n *= smoothstep(0.4, 0.3, l);
  float rs = vleft.r + vright.r + vbottom.r + vtop.r + vbottomleft.r + vbottomright.r + vtopleft.r + vtopright.r;
  c.r = mix(
    mix(n, c.r, persistance),
    rs / 8.0,
    delta + cos(0.1 * PI * g)
  );
  gl_FragColor = vec4(c, 1.0);
}
    `},render:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D logic;
uniform vec3 colors;
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (vec3 state) {
  return palette(
    state.r,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    colors
  );
}
void main() {
  vec3 state = texture2D(logic, uv).rgb;
  gl_FragColor = vec4(color(state), 1.0);
}
`}}),Ic=64,Cc="Intersection",jc=8*Math.PI,kc=[{url:"https://www.hicetnunc.xyz/objkt/28592",text:"hic et nunc NFT"}],Ac=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Dc.render,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Dc=Je.Shaders.create({render:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform vec2 resolution;

#define PI ${Math.PI}

float sdCircle(vec2 p, float r) {
  return length(p) - r;
}
float sdBox( in vec2 p, in vec2 b ) {
    vec2 d = abs(p)-b;
    return length(max(d,0.0)) + min(max(d.x,d.y),0.0);
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
vec2 pModMirror2(inout vec2 p, vec2 size) {
	vec2 halfsize = size*0.5;
	vec2 c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	p *= mod(c,vec2(2.))*2. - vec2(1.);
	return c;
}

float shape (vec2 p, float d) {
  float t = time + 0.01 * d;
  p -= 0.5;
  p *= 1.0 + 0.02 * min(pow(1.+t, 0.9), 400.);
  p.y += 0.001 * sin(t) * d;
  pModMirror2(p, vec2(0.4 + 1. / t));
  float size = 0.5 + abs(0.5 * cos(0.2 * t)); 
  float s = sdCircle(p, 0.4 * size);
  s = max(s, sdBox(p + vec2(0.4 * size * cos(2. * t), 0.), vec2(0.2 * size)));
  pR(p, -0.5 * t);
  float a = pModPolar(p, 8.0);
  p.x -= 0.3 * size + smoothstep(10., 30., t) * 0.05 * cos(PI * a + 4. * t);
  float boxes = sdBox(p, vec2(0.05 * pow(1.+t, 0.1) * size));
  s = max(min(s, boxes), -max(s, boxes));
  return smoothstep(0.0, 0.0005, s);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec2 base = 0.5 + (uv - 0.5) * ratio;  
  gl_FragColor = vec4(
    shape(base, -1.),
    shape(base, 1.),
    shape(base, 0.5),
    1.0);
}
`}}),Lc=65,Nc="Duality",Mc=800,Uc=4,Fc=8,Bc=30,qc=1,Gc=3,$c=!0,Hc=16,Vc=[{url:"https://hicetnunc.xyz/objkt/64326",text:"hic et nunc NFT"}],Wc=({time:e})=>Object(Ze.jsx)(Je.NearestCopy,{children:Object(Ze.jsx)(Xc,{persistence:.3,children:Object(Ze.jsx)(Je.Node,{shader:Kc.render,uniforms:{resolution:Je.Uniform.Resolution,time:e}})})}),Xc=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:Kc.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),Kc=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor =
      mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
  }
      `},render:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform vec2 resolution;

#define PI ${Math.PI}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}
float fOpIntersectionRound(float a, float b, float r) {
	vec2 u = max(vec2(r + a,r + b), vec2(0));
	return min(-r, max (a, b)) + length(u);
}
float fOpDifferenceRound (float a, float b, float r) {
	return fOpIntersectionRound(a, -b, r);
}

float shape (vec2 p, float d) {
  float t = 0.5 * PI * time + 0.005 * d;
  float radius = 0.1;
  float smoothing = 0.1;
  p -= 0.5;
  pR(p, t);
  vec2 q = p;
  pR(p, -2. * t + cos(2. * t));
  float s = fOpDifferenceRound(
    fOpUnionRound(
      q.x, // axis
      length(p + vec2(0.3, 0.0)) - radius, // first circle
      smoothing),
    length(p - vec2(0.3, 0.0)) - radius, // second circle (cropped out)
    smoothing);
  return smoothstep(0.0, 1.0 / min(resolution.x, resolution.y), s);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec2 base = 0.5 + (uv - 0.5) * ratio;  
  float a = shape(base, -1.);
  float b = shape(base, 0.);
  gl_FragColor = vec4(a, b, b, 1.0);
}
`}}),Yc=66,Qc="hicetnunc",Zc=800,Jc=2,es=Jc+8,ts=30,rs=1,ns=7,os=!0,is=16,as=({time:e})=>Object(Ze.jsx)(Je.NearestCopy,{children:Object(Ze.jsx)(cs,{persistence:.5,children:Object(Ze.jsx)(Je.Node,{shader:ss.render,uniforms:{resolution:Je.Uniform.Resolution,time:e,freq:2}})})}),cs=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:ss.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),ss=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor =
      mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
  }
      `},render:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform float freq;
uniform vec2 resolution;

#define PI ${Math.PI}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
float sdBox( in vec2 p, in vec2 b ) {
    vec2 d = abs(p)-b;
    return length(max(d,0.0)) + min(max(d.x,d.y),0.0);
}
float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float shape (vec2 p, float d) {
  float t = .5 * PI * time + 0.01 * d;
  float radius = 0.1;
  float smoothing = 0.05;
  p -= 0.5;
  vec2 q = p;
  q.x += 0.3 * cos(t);
  q.y += 0.1 * sin(t);
  pR(q, t + sin(freq * t));
  
  p *= 20.0;
  p.x += 5.;
  float s = sdBox(p, vec2(0.5, 1.5));
  p.x -= 1.;
  s = min(s, sdBox(p, vec2(0.5, 0.5)));
  p.x -= 1.;
  s = min(s, sdBox(p, vec2(0.5, 1.5)));
  p.x -= 3.;
  s = min(s, sdBox(p - vec2(0., 1.), vec2(1.5, 0.5)));
  s = min(s, sdBox(p + vec2(0., 1.), vec2(1.5, 0.5)));
  p.x -= 3.;
  s = min(s, sdBox(p, vec2(0.5, 1.5)));
  p.x -= 1.;
  s = min(s, sdBox(p-vec2(0., 1.), vec2(0.5, 0.5)));
  p.x -= 1.;
  s = min(s, sdBox(p, vec2(0.5, 1.5)));
  s /= 20.0;
  
  s = fOpUnionRound(q.x, s, smoothing);
  float v = smoothstep(0.0, 1.0 / min(resolution.x, resolution.y), s);
  return mix(v, 1. - v, step(0., sin(t)));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec2 base = 0.5 + (uv - 0.5) * ratio;  
  float a = shape(base, -1.);
  float b = shape(base, 1.);
  gl_FragColor = vec4(a, b, b, 1.0);
}
`}}),ls=67,fs="Jumping blob",us=800,ps=2,ds=ps+8,vs=30,hs=1,ms=7,gs=!0,xs=16,bs=({time:e})=>Object(Ze.jsx)(Je.NearestCopy,{children:Object(Ze.jsx)(ys,{persistence:.6,children:Object(Ze.jsx)(Je.Node,{shader:ws.render,uniforms:{resolution:Je.Uniform.Resolution,time:e,freq:2}})})}),ys=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:ws.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),ws=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor =
      mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
  }
      `},render:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform float freq;
uniform vec2 resolution;


#define PI ${Math.PI}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}
float fOpIntersectionRound(float a, float b, float r) {
	vec2 u = max(vec2(r + a,r + b), vec2(0));
	return min(-r, max (a, b)) + length(u);
}
float fOpDifferenceRound (float a, float b, float r) {
	return fOpIntersectionRound(a, -b, r);
}

float shape (vec2 p, float d) {
  float t = 0.5 * PI * time + d;
  float radius = 0.18;
  float smoothing = 0.2;
  float dist = 0.2;
  p -= 0.5;
  pR(p, PI / 2.0);
  vec2 q = p;
  pR(p, -2. * t + cos(t));
  float s = fOpDifferenceRound(
    fOpUnionRound(
      max(q.x, 0.1 + q.x),
      length(p + vec2(dist, 0.0)) - radius,
      smoothing),
    length(p - vec2(dist, 0.0)) - radius,
    smoothing);
  return smoothstep(0.0, 1.0 / min(resolution.x, resolution.y), s);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec2 base = 0.5 + (uv - 0.5) * ratio;  
  float a = shape(base, -0.02);
  float b = shape(base, 0.0);
  float c = shape(base, 0.01);
  float m = min(min(a, b), c);
  gl_FragColor = vec4(
    b,
    m,
    m,
    1.0
  );
}
`}}),_s=68,Ss="ring",Es=800,Os=2,Rs=Os+10,Ps=30,zs=1,Ts=7,Is=!0,Cs=128,js=({time:e})=>Object(Ze.jsx)(Je.NearestCopy,{children:Object(Ze.jsx)(ks,{persistence:.9,children:Object(Ze.jsx)(Je.Node,{shader:As.render,uniforms:{resolution:Je.Uniform.Resolution,time:e,freq:2}})})}),ks=({children:e,persistence:t})=>Object(Ze.jsx)(Je.Node,{shader:As.persistence,backbuffering:!0,uniforms:{t:e,back:Je.Uniform.Backbuffer,persistence:t}}),As=Je.Shaders.create({persistence:{frag:Je.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor =
      mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
  }
      `},render:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform float freq;
uniform vec2 resolution;

${"\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nfloat cnoise(vec2 P){\n  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation\n  vec4 ix = Pi.xzxz;\n  vec4 iy = Pi.yyww;\n  vec4 fx = Pf.xzxz;\n  vec4 fy = Pf.yyww;\n  vec4 i = permute(permute(ix) + iy);\n  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...\n  vec4 gy = abs(gx) - 0.5;\n  vec4 tx = floor(gx + 0.5);\n  gx = gx - tx;\n  vec2 g00 = vec2(gx.x,gy.x);\n  vec2 g10 = vec2(gx.y,gy.y);\n  vec2 g01 = vec2(gx.z,gy.z);\n  vec2 g11 = vec2(gx.w,gy.w);\n  vec4 norm = 1.79284291400159 - 0.85373472095314 * \n    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));\n  g00 *= norm.x;\n  g01 *= norm.y;\n  g10 *= norm.z;\n  g11 *= norm.w;\n  float n00 = dot(g00, vec2(fx.x, fy.x));\n  float n10 = dot(g10, vec2(fx.y, fy.y));\n  float n01 = dot(g01, vec2(fx.z, fy.z));\n  float n11 = dot(g11, vec2(fx.w, fy.w));\n  vec2 fade_xy = fade(Pf.xy);\n  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n  return 2.3 * n_xy;\n}\n"}

#define PI ${Math.PI}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}
float fOpIntersectionRound(float a, float b, float r) {
	vec2 u = max(vec2(r + a,r + b), vec2(0));
	return min(-r, max (a, b)) + length(u);
}
float fOpDifferenceRound (float a, float b, float r) {
	return fOpIntersectionRound(a, -b, r);
}

float shape (vec2 p, float d) {
  float t = 0.2 * PI * (time + d);
  p -= 0.5;
  vec2 p1 = p;
  vec2 p2 = p;
  pR(p1, - 2. * t);
  pR(p2, t);
  float n = cnoise(10.0 + 5. * p1);
  float n2 = cnoise(7. * p2);
  float r = 0.18 + 0.1 * sin(t);
  float s = abs(fOpUnionRound(
    length(p - vec2(0.1 * cos(t), 0.0)) - r - 0.1 * n,
    length(p) - r - 0.1 * n2,
    0.2
  ))-0.05;
  return smoothstep(0.0, 1.0 / min(resolution.x, resolution.y), s);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec2 base = 0.5 + (uv - 0.5) * ratio;  
  float a = shape(base, -0.05);
  float b = shape(base, 0.0);
  float c = shape(base, 0.05);
  gl_FragColor = vec4(
    a,
    b,
    c,
    1.0
  );
}
`}}),Ds=69,Ls="Bananas paradize",Ns=400,Ms=0,Us=20,Fs=20,Bs=1,qs=!0,Gs=128,$s=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Hs.node,uniforms:{time:e,resolution:Je.Uniform.Resolution}}),Hs=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;

uniform vec2 resolution;
uniform float time;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec2
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);
float specularStrength (float m);

vec2 pMod2(inout vec2 p, vec2 size) {
	vec2 c = floor((p + size*0.5)/size);
	p = mod(p + size*0.5,size) - size*0.5;
	return c;
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
float fOpUnionSoft(float a, float b, float r) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0.))) + vmax(min(d, vec3(0.)));
}
float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}
float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);
    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);
    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);
    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));
    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
    return o4.y * d.y + o4.x * (1.0 - d.y);
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.0005, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, float mint, float maxt, float k ) {
  float res = 1.0;
  float ph = 1e20;
  float t = mint;
  for (int i=0; i<40; i++) {
    float h = 0.5 * map(ro + rd*t).x;
    if (t>=maxt) break;
    if( h<0.001) return 0.0;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
  }
  return res;
}

HIT marcher (inout vec3 p, vec3 dir) {
  HIT hit = HIT(0., 2.); // 2. because it's our tree that tends to glitch
  float t = 0.;
  for (int i=0; i<120; i++) {
    HIT h = map(p + t * dir);
    t += 0.8 * min(.3, h.x);
    if (abs(h.x) < .0001) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 l, ldir;
  vec3 c = vec3(0.);
  l = vec3(-2., 4., -1.);
  ldir = normalize(l - p);
  c +=
  vec3(0.9, 0.7, 0.5) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
      * (0.5 + 0.5 * softshadow(p, ldir, 0.05, 5., 20.))
    + specular(n, hit.y, ldir, dir, 20.)
  );
  l = vec3(2., 6., -2.);
  ldir = normalize(l - p);
  c +=
  vec3(0.3, 0.5, 0.6) * (
  // ambient
  0.1
  // diffuse
  + shade(hit, p)
    * (.5 + .5 * diffuse(p, n, l)) // half lambert
  + specular(n, hit.y, ldir, dir, 40.)
  );
  return c;
}

float specularStrength (float m) {
  return 0.1;
}

vec3 shade (HIT hit, vec3 _p) {
  if (hit.y < 2.0) return vec3(.8);
  if (hit.y < 3.0) {
    float m = hit.y - 2.0;
    return mix(
      vec3(1.0, 0.9, 0.0),
      vec3(0.3, 1.0, 0.0),
      0.6 * m
    );
  }
  if (hit.y < 4.0) {
    return mix(vec3(0.6, 1.0, 0.0), vec3(0.5, 0.3, 0.2), fract(hit.y));
  }
  return vec3(0.0);
}

HIT banana (vec3 p, vec2 id) {
  float r1 = fract(id.y * 44.15 - id.x * 745.739);
  float r2 = fract(id.x * 133.6109);
  float r3 = fract(id.y * 56.857);
  p.y -= 0.5;
  pR(p.xy, p.y * (0.9 + r2 + r3));
  p.y += 0.5;
  float m = 0.999 * max(smoothstep(0.8, 1.0, p.y) + smoothstep(0.001, 0., 0.02 + p.y - 0.04 * r1), 0.1 * r3 * r3); // material
  float n1 = noise(111. * (p - id.y));
  float n2 = noise(5. * (p + id.x - id.y));
  m += 0.999 * smoothstep(0.9, 1.0, m);
  m += 2. * smoothstep(0.01, 0.0, 0.6 - n1 * n2);
  m = min(1.999, m);
  float k = 0.2 + 0.1 * r1;
  float s = 0.25 + 0.15 * r2;
  float body = fOpUnionSoft(
    sdSegment(p, 1.0, 0.04),
    fBox(p - vec3(0., 0.45, 0.), vec3(0.06, s, 0.04)),
    k
  );
  HIT h = HIT(body, 2.0 + m);
  return h;
}


HIT map (vec3 p) {
  HIT s = HIT(10. - length(p), 0.); // inside sphere
  s = opU(s, HIT(p.y, 1.));
  p.x -= 0.5;
  p.z += time * smoothstep(20., 60., time);
  vec2 id = pMod2(p.xz, vec2(1.0));
  id.x += 7. * id.y;
  p.y -= 0.1 + 0.2 * cos(0.1 * PI * time + id.x);
  pR(p.xz, PI * 0.2 * time);
  pR(p.xy, -0.5);
  s = opU(s, banana(p, id));
  return s;
}

vec3 scene(vec2 uv) {
  origin = vec3(
    0.1 * cos(.1 * PI * time),
    1.0 + 0.5 * sin(.1 * PI * time),
    -2.
  );
  vec3 focus = vec3(0.5 * sin(.2 * PI * time), .6, 0.);
  vec3 c = vec3(0.);
  vec3 dir = normalize(vec3(uv - .5, 1.));
  dir = lookAt(origin, focus) * dir;
  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  c = mix(c, vec3(0.9), pow(smoothstep(4., 10., length(p-origin)), .5));
  return c;
}

vec3 render() {
  vec3 c = vec3(0.);
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec2 base = 0.5 + (uv - 0.5) * ratio;
  c += scene(base);
  return c;
}

void main() {
  vec3 c = render();
  gl_FragColor = vec4(c, 1.0);
}
`}}),Vs=70,Ws="warp1",Xs=400,Ks=0,Ys=20,Qs=20,Zs=1,Js=!1,el=256,tl=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:rl.node,uniforms:{time:e,resolution:Je.Uniform.Resolution}}),rl=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;

uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// adapted work from https://www.iquilezles.org/
float hash1( vec2 p ) {
  p = 50.0*fract( p*0.3183099 );
  return fract( p.x*p.y*(p.x+p.y) );
}
float noise( in vec2 x ) {
  vec2 p = floor(x);
  vec2 w = fract(x);
  vec2 u = w*w*w*(w*(w*6.0-15.0)+10.0);
  float a = hash1(p+vec2(0,0));
  float b = hash1(p+vec2(1,0));
  float c = hash1(p+vec2(0,1));
  float d = hash1(p+vec2(1,1));
  return -1.0+2.0*( a + (b-a)*u.x + (c-a)*u.y + (a - b - c + d)*u.x*u.y );
}
const mat2 m2 = mat2( 0.4,  1.0, -1.2,  0.5 );
float fbm( in vec2 x ) {
  float f = 1.8;
  float s = 0.5;
  float a = 0.0;
  float b = 0.4;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b*n;
    b *= s;
    x = f * m2 * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    vec3(0.9,0.1,0.2)
  );
}

float pattern( in vec2 p ) {
  vec2 q = vec2( fbm( p + vec2(1.0, 0.01 * time) ),
                 fbm( p + vec2(4.9,2.9) ) );
  vec2 r = vec2( fbm( p + 3.*q + vec2(2.0,5.5) ),
                 fbm( p + 3.*q + vec2(3.,1.) ) );
  return fbm( p + 4.*r + vec2(4.0, 0.5)+ vec2(1.0, 0.1 * time) );
}

void main() {
  vec3 c = pal(0.1 * time + smoothstep(0.5, 0.2, length(uv - .5)) * pattern(0.5 * uv));
  gl_FragColor = vec4(c, 1.0);
}
`}}),nl=71,ol="warp2",il=640,al=0,cl=20,sl=24,ll=1,fl=!1,ul=256,pl=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:dl.node,uniforms:{time:e}}),dl=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;

uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    vec3(0.1,0.28,0.32)
  );
}

float pattern(in vec2 p, float t) {
  vec2 q = vec2( fbm( p ),
                 fbm( p + vec2(4.3,1.2) ) );
  vec2 r = vec2( fbm( p + 3.*q + vec2(2.7,5.3) ),
                 fbm( p + 3.*q + vec2(3.3 + 0.2 * cos(0.1 * t),11.4 + 0.2 * sin(0.1 * t)) ) );
  return fbm( p + 3.*r + cos(0.05 * t) - sin(0.05 * t) );
}

void main() {
  float l = smoothstep(0.2, 0.4, length(uv-.5));
  vec3 c = pal(
    0.6 * l * pattern(uv, -time * 2. * PI) +
    0.6 * pattern(4.4 + 0.5 * uv, time * 2. * PI)
  );
  gl_FragColor = vec4(c, 1.0);
}
`}}),vl=72,hl="Planet Hole",ml=640,gl=0,xl=20,bl=24,yl=1,wl=!1,_l=256,Sl=[{url:"https://hicetnunc.xyz/objkt/87918",text:"hic et nunc NFT"}],El=({time:e,n:t})=>{const r=new Oa.a(t),n=.2+3*r.random()*r.random(),o=.2+10*r.random()*r.random(),i=r.random(),a=[i+.2-.5*r.random(),i+.02-.1*r.random(),i-.02+.1*r.random()];return Object(Ze.jsx)(Je.Node,{shader:Ol.node,uniforms:{resolution:Je.Uniform.Resolution,time:e,a:n,b:o,c:a}})},Ol=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;

uniform float a, b;
uniform vec3 c;

uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    c
  );
}

float pattern(float t, in vec2 p) {
  vec2 q = vec2( fbm( p ),
                 fbm( p + vec2(12.08,1.23) ) );
  vec2 r = vec2( fbm( q + p ),
                fbm( q + vec2(8.37,0.28) ) );
  return fbm( p + a*q + b * r + 0.1 * t );
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  p += 0.2 * (vec2(
    pattern(0.2 * time, 0.2 * p + vec2(1., 0.)),
    pattern(0.2 * time, 0.2 * p + vec2(0., 1.)))-0.5);
  float l = length(p);
  float v = pattern(time, p);
  float mul = 3.;
  float f = fract(v * mul);
  float value = floor(v * mul) / mul;
  c += pal(value * step(l, 0.4) * step(0.1, l));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Rl=73,Pl="purple square corridor",zl=640,Tl=0,Il=20,Cl=24,jl=1,kl=!1,Al=256,Dl=72e5,Ll=({time:e})=>{const t=Date.now(),r=t/Dl-Math.floor(t/Dl);return Object(Ze.jsx)(Je.Node,{shader:Nl.node,uniforms:{resolution:Je.Uniform.Resolution,time:e+1e3*r,speed:.01,c:[.8,.1,.3]}})},Nl=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;

uniform float speed;
uniform vec3 c;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    c
  );
}

float pattern(in vec2 p) {
  vec2 q = vec2( fbm( .08 * p ),
                 fbm( .08 * p + vec2(2.08,1.23) ) );
  vec2 r = vec2( fbm( 1.6 * q ),
                fbm( q + vec2(.37,.28) ) );
  return fbm(  .2 * p + r + speed * time );
}

vec2 disp(in vec2 p) {
  vec2 q = vec2( fbm( 0.2 * p ), fbm( 0.2 * p + vec2(12.08,1.23) ) );
  return 0.2 * (0.5-vec2( fbm( 0.1 * p + q + 0.03 * time ), fbm( 0.1 * p + 0.6 * q - 0.03 * time ) ));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  p += disp(p);
  float l = max(abs(p.x),abs(p.y));
  float v = pattern(p);
  float mul = 16.;
  float f = fract(v * mul);
  float value = (1. + floor(v * mul)) / (mul + 1.);
  c += mix(vec3(1.), pal(value), step(0.6, fract(20. * l - time)));
  // value += 0.1 * step(0.6, fract(20. * pow(l, 0.7 + 0.4 * cos(0.2 * time)) - time));
  c += pal(value);
  gl_FragColor = vec4(c, 1.0);
}
`}}),Ml=74,Ul="blue square corridor",Fl=640,Bl=0,ql=20,Gl=24,$l=1,Hl=!1,Vl=256,Wl=72e5,Xl=({time:e})=>{const t=Date.now(),r=t/Wl-Math.floor(t/Wl);return Object(Ze.jsx)(Je.Node,{shader:Kl.node,uniforms:{resolution:Je.Uniform.Resolution,time:e+1e3*r,speed:.01,c:[0,.3,.4]}})},Kl=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;

uniform float speed;
uniform vec3 c;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    c
  );
}

float pattern(in vec2 p) {
  vec2 q = vec2( fbm( .08 * p ),
                 fbm( .08 * p + vec2(2.08,1.23) ) );
  vec2 r = vec2( fbm( 1.6 * q ),
                fbm( q + vec2(.37,.28) ) );
  return fbm(  .2 * p + r + speed * time );
}

vec2 disp(in vec2 p) {
  vec2 q = vec2( fbm( 0.2 * p ), fbm( 0.2 * p + vec2(12.08,1.23) ) );
  return (0.3 + 0.1 * cos(0.5 * time)) * (0.5-vec2( fbm( 0.1 * p + q + 0.03 * time ), fbm( 0.1 * p + 0.6 * q - 0.03 * time ) ));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  p += disp(p);
  float l = max(abs(p.x),abs(p.y));
  float v = pattern(p);
  float mul = 16.;
  float f = fract(v * mul);
  float value = (1. + floor(v * mul)) / (mul + 1.);
  value -= 0.1 * step(0.6, fract(10. * pow(l, 0.7 + 0.4 * cos(0.2 * time)) - time));
  c += pal(value);
  gl_FragColor = vec4(c, 1.0);
}
`}}),Yl=75,Ql="moir\xe9 square smoke",Zl=640,Jl=0,ef=20,tf=24,rf=1,nf=!1,of=256,af=36e5,cf=({time:e})=>{const t=Date.now(),r=t/af-Math.floor(t/af);return Object(Ze.jsx)(Je.Node,{shader:sf.node,uniforms:{resolution:Je.Uniform.Resolution,time:e+1e3*r,speed:.01}})},sf=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;

uniform float speed;
uniform vec3 c;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.7),
    vec3(0.6),
    vec3(1.),
    vec3(0.5, 0.15, 0.25)
  );
}

float pattern(in vec2 p) {
  vec2 q = vec2( fbm( p ),
                 fbm( p + vec2(2.08,0.23) ) );
  vec2 r = vec2( fbm( 1.6 * q + speed * time ),
                fbm( q + vec2(.7,.2) ) );
  return fbm(  p + 2. * r + speed * time );
}

vec2 disp(in vec2 p) {
  vec2 q = vec2( fbm( 0.2 * p ), fbm( 0.2 * p + vec2(12.08,1.23) ) );
  return (0.3 + 0.1 * cos(0.5 * time)) * (0.5-vec2( fbm( 0.3 * p + q + 0.01 * time ), fbm( 0.3 * p + 0.6 * q - 0.01 * time ) ));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  p += disp(p);
  float l = max(abs(p.x),abs(p.y));
  float v = pattern(0.3 * p);
  float mul = 32.;
  float f = fract(v * mul);
  float value = (1. + floor(v * mul)) / (mul + 1.);
  value -= 0.1 * step(0.5, fract(90. * pow(l, 0.9 + 0.05 * cos(0.8 * time)) - time));
  c += pal(value);
  gl_FragColor = vec4(c, 1.0);
}
`}}),lf=76,ff="Purple",uf=640,pf=0,df=20,vf=24,hf=1,mf=!1,gf=256,xf=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:bf.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),bf=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    vec3(0.6, 0.1, 0.3)
  );
}

float scene(in vec2 p) {
  vec2 q = vec2( fbm( p ),
                 fbm( p + vec2(6.08,0.23) ) );
  vec2 r = vec2( fbm( 3. * q + 0.03 * time ),
                fbm( q + vec2(.3,.2) ) );
  return fbm( p + 3. * r + 0.02 * time );
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  float v = scene(p);
  c += pal(v);
  gl_FragColor = vec4(c, 1.0);
}
`}}),yf=77,wf="Roses",_f=512,Sf=0,Ef=8,Of=20,Rf=1,Pf=!1,zf=64,Tf=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:If.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),If=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.9),
    vec3(1.),
    vec3(0.5, 0.1, 0.3)
  );
}

float scene(in vec2 p) {
  vec2 q = vec2( fbm( 1. * p ),
                 fbm( 1. * p + vec2(0.08,.73) ) );
  vec2 r = vec2( fbm( 6. * q - 0.07 * time ),
                fbm( q + vec2(.1, .4) ) );
  return fbm( p + 8. * r + 0.8 * time );
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  float v = scene(p);
  c += pal(v);
  gl_FragColor = vec4(c, 1.0);
}
`}}),Cf=78,jf="Nature",kf=512,Af=0,Df=10,Lf=16,Nf=1,Mf=!1,Uf=64,Ff=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Bf.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Bf=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.75),
    vec3(0.5),
    vec3(1.),
    vec3(0.1, 0.2, 0.7)
  );
}

float scene(in vec2 p) {
  vec2 q = vec2( fbm( 8. * p ), fbm( 10. * p + vec2(0.15,8.3) ) );
  vec2 r = vec2( fbm( 6. * q + time ),
                fbm( 10.5 * q + vec2(1.71, 5.1) ) );
  return fbm( 0.4 * p + 0.1 * r + 8. );
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  float v = scene(p);
  c += pal(v);
  gl_FragColor = vec4(c, 1.0);
}
`}}),qf=79,Gf="Circle",$f=512,Hf=0,Vf=10,Wf=16,Xf=1,Kf=!1,Yf=64,Qf=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Zf.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Zf=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.75),
    vec3(0.5),
    vec3(1.),
    vec3(0.1, 0.2, 0.7)
  );
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 0.5 * p ), fbm( 0.5 * p + vec2(0.15,8.3) ) );
  vec2 r = vec2( fbm( 2. * q ),
                fbm( 2. * q + vec2(1.71, 5.1) ) );
  float v = length(p) + 1.0 * fbm( 0.4 * p + 0.1 * r + 8.);
  return smoothstep(0.4, 0.41, fract(20.0 * v + t));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += vec3(
    scene(p, time - 0.05),
    scene(p, time),
    scene(p, time + 0.05)
  );
  gl_FragColor = vec4(c, 1.0);
}
`}}),Jf=80,eu="Morphing Tunnel",tu=512,ru=0,nu=10,ou=16,iu=1,au=!1,cu=64,su=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:lu.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),lu=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    vec3(0.3, 0.6, 0.8)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 0.1 * p ), fbm( 0.1 * p + vec2(0.15,8.3) ) );
  vec2 r = vec2( fbm( 2. * q ),
                fbm( 2. * q + vec2(1.71, 5.1) ) );
  float v = fOpUnionRound(
    length(p+vec2(0.1, 0.1 * cos(2. * t))),
    length(p-vec2(0.1, 0.1 * sin(2. * t))),
    0.5) +
    1.0 * fbm( 0.4 * p + 0.1 * r + 8.);
  return pow(fract(12.0 * v - 2. * t), 2.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),fu=81,uu="Red Blue Stripes",pu=512,du=0,vu=10,hu=16,mu=1,gu=!1,xu=64,bu=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:yu.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),yu=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    vec3(0.6, 0.2, 0.15)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 2.0 * p ), fbm( 2.0 * p + vec2(0.15,8.3) ) );
  vec2 r = vec2( fbm( 8. * q ),
                fbm( 2. * q + vec2(1.71, 5.1) ) );
  float v = fOpUnionRound(
    length(p+vec2(0.2 * sin(0.5 * PI * t), 0.2 * cos(PI * t))),
    0.5 - abs(fract(3. * p.x) - 0.5),
    0.8) +
    1.0 * fbm( 0.4 * p + 0.5 * r + 8. + 0.2 * t);
  return pow(fract(5.0 * v + 2. * t), 2.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),wu=82,_u="Mountain waves",Su=512,Eu=0,Ou=10,Ru=16,Pu=1,zu=!1,Tu=64,Iu=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Cu.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Cu=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    vec3(0.2, 0.4, 0.5)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 0.5 * p  ), fbm( 0.5 * p + 0.01 * t + vec2(0.15,8.3) ) );
  vec2 r = vec2( fbm( 0.1 * q ),
                fbm( 0.1 * q + vec2(1.71, 5.1) ) );
  float v = p.x +
    1.0 * fbm( p + 0.5 * r + 8.);
  return pow(fract(12.0 * v + 2. * t), 2.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),ju=83,ku="Pink Plume",Au=512,Du=0,Lu=10,Nu=16,Mu=1,Uu=!1,Fu=64,Bu=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:qu.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),qu=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    vec3(1.0, 0.7, 0.8)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 2.0 * p  ), fbm( 1.0 * p + 0.01 * t + vec2(0.15,8.3) ) );
  vec2 r = vec2( fbm( 8. * q + t ),
                fbm( 1. * q + vec2(1.71, 5.1) ) );
  float v = max(p.x, p.y) +
    2.0 * fbm( 0.3 * p + 0.5 * r + 8.);
  return 0.3 * pow(fract(1.0 * v - t), 2.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Gu=84,$u="Flame Waves",Hu=512,Vu=0,Wu=10,Xu=16,Ku=1,Yu=!1,Qu=64,Zu=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Ju.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Ju=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.8),
    vec3(1.),
    vec3(0.5, 0.3, 0.2)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( p  ), fbm( p + 0.1 * t + vec2(0.15,8.3) ) );
  vec2 r = vec2( fbm( 2. * q ),
                fbm( 2. * q + vec2(1.71, 5.1) ) );
  float v =  p.x + fbm( p + 0.1 * r + 8.);
  return 0.15 + 0.5 * pow(fract(2.0 * v - 0.25 * t), 2.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),ep=85,tp="Flaming Borders",rp=512,np=0,op=10,ip=16,ap=1,cp=!1,sp=64,lp=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:fp.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),fp=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.8),
    vec3(1.),
    vec3(0.5, 0.1, 0.1)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 0.1 * p ), fbm( 0.1 * p + vec2(0.15,8.3) ) );
  vec2 r = vec2( fbm( 4. * q ),
                fbm( 4. * q + vec2(1.71, 5.1) ) );
  float v =  length(p) + 0.5 * fbm( p + 0.1 * r + 8. - 0.5 * t) + 0.1 * t;
  return 0.2 + 0.5 * pow(fract(8.0 * v), 4.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),up=86,pp="Waves",dp=512,vp=0,hp=10,mp=16,gp=1,xp=!1,bp=64,yp=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:wp.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),wp=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.5),
    vec3(1.),
    vec3(0.75, 0.1, 0.12)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 0.1 * p ), fbm( 0.1 * p + vec2(0.15,8.3) ) );
  vec2 r = vec2( fbm( 4. * q ),
                fbm( 4. * q + vec2(1.71, 5.1) ) );
  float v =  p.y + 0.5 * fbm( p + 0.1 * r + 8. - 0.1 * t) + 0.05 * t;
  return 0.1 + pow(fract(2.0 * v), 4.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),_p=87,Sp="Square Waves",Ep=512,Op=0,Rp=10,Pp=16,zp=1,Tp=!1,Ip=64,Cp=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:jp.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),jp=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.6),
    vec3(1.),
    vec3(0.4, 0.1, 1.0)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( p ), fbm( 0.5 * p + vec2(0.15,3.32) ) );
  vec2 r = vec2( fbm( 8. * q ),
                fbm( 2. * q + vec2(1.71, 5.1) ) );
  float v = max(max(p.x, p.y), max(-p.x, -p.y)) + 0.8 * fbm( p + 0.6 * r + 8. - 0.1 * t) + 0.1 * t;
  return 0.2 + pow(fract(3.0 * v), 4.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),kp=88,Ap="Unboxing",Dp=512,Lp=0,Np=10,Mp=16,Up=1,Fp=!1,Bp=64,qp=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Gp.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Gp=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.6),
    vec3(1.),
    vec3(0.1, 0.1, 0.08)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( p ), fbm( 0.5 * p + vec2(0.15,3.32) ) );
  vec2 r = vec2( fbm( 5. * q ),
                fbm( 2. * q + vec2(1.71, 5.1) ) );
  float v = max(max(p.x, p.y), max(-p.x, -p.y)) + 0.5 * fbm( 0.1 * p + r + 8.) - 0.1 * t;
  return 0.2 + pow(fract(3.0 * v), 4.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),$p=89,Hp="Creepy",Vp=512,Wp=0,Xp=10,Kp=16,Yp=1,Qp=!1,Zp=64,Jp=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:ed.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),ed=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.6),
    vec3(1.),
    vec3(0.1, 0.1, 0.08)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 4. * p ), fbm( 0.1 * p + vec2(0.15,3.32) ) );
  vec2 r = vec2( fbm( 10. * q - 0.1 * t ),
                fbm( 2. * q + vec2(1.71, 5.1) ) );
  float v = max(max(p.x, p.y), max(-p.x, -p.y)) + 0.5 * fbm( 0.1 * p + r + 8.);
  return pow(fract(3.0 * v), 2.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),td=90,rd="Square Path",nd=512,od=0,id=10,ad=16,cd=1,sd=!1,ld=64,fd=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:ud.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),ud=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.6),
    vec3(1.),
    vec3(0.4, 0.6, 0.7)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 3. * p ), fbm( 0.1 * p + vec2(0.15,3.32) ) );
  vec2 r = vec2( fbm( 8. * q - 0.1 * t ),
                fbm( 2. * q + vec2(1.71, 5.1) ) );
  float v = max(max(p.x, p.y), max(-p.x, -p.y)) + 0.4 * fbm( 0.1 * p + r + 8. + 0.6 * t) - 0.1 * t;
  return pow(fract(2.0 * v), 8.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),pd=91,dd="Door Path",vd=512,hd=0,md=10,gd=16,xd=1,bd=!1,yd=64,wd=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:_d.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),_d=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.6),
    vec3(1.),
    vec3(0.4, 0.5, 0.6)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 10. * p ), fbm( 0.1 * p + vec2(0.15,3.32) ) );
  vec2 r = vec2( fbm( 0.5 * q - 0.5 * t ),
                fbm( 10.0 * q + vec2(1.71, 5.1) ) );
  float v = max(max(p.x, .5 * p.y), max(-p.x, -.5 * p.y)) + 0.8 * fbm( 0.1 * p + 0.2 * r + 8. + 0.2 * t) + 0.5 * t;
  return 0.6 * pow(fract(2.0 * v), 8.0);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Sd=92,Ed="Green Cosmos",Od=512,Rd=0,Pd=10,zd=16,Td=1,Id=!1,Cd=64,jd=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:kd.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),kd=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.8),
    vec3(1.),
    vec3(0.5, 0.7, 0.3)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( p ), fbm( 0.1 * p + vec2(0.1,3.32) ) );
  vec2 r = vec2( fbm( 20. * q ),
                fbm( 30. * q + vec2(1.34 + 0.01 * t, 4.1) ) );
  float v = fbm(p + 0.4 * r - 0.01 * t);
  return smoothstep(0.5, 1.0, fract(2. * v));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Ad=93,Dd="Is it alive",Ld=512,Nd=0,Md=10,Ud=16,Fd=1,Bd=!1,qd=64,Gd=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:$d.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),$d=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5),
    vec3(0.8),
    vec3(1.),
    vec3(0.4, 0.3, 0.2)
  );
}

float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 0.2 * p ), fbm( 0.2 * p + vec2(0.1,3.32) ) );
  vec2 r = vec2( fbm( 2. * q ),
                fbm( 3. * q + vec2(1.34 - 0.05 * t, 0.1 * t) ) );
  float v = fbm(p + 2. * r - 0.05 * t);
  v += 0.8 * length(p) + 0.2;
  return smoothstep(0.3, 1.0, fract(2. * v));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Hd=94,Vd="Sand",Wd=512,Xd=0,Kd=10,Yd=16,Qd=1,Zd=!1,Jd=128,ev=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:tv.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),tv=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.7, 0.5, 0.5),
    vec3(0.5, 0.2, 0.3),
    vec3(1.0),
    vec3(0.9, 0.7, 0.3)
  );
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 5. * p ), fbm( 8. * p + vec2(7.5,3.32) ) );
  vec2 r = vec2( fbm(20. * q + 10.0 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t))),
                fbm( 50. * q + vec2(7.0, 1.3) ) );
  float v = 3. * fbm(p + 0.1 * r);
  v += 3. * p.y + 0.2 * t;
  return .5 * fbm(q) + smoothstep(0.3, 1.0, fract(v));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),rv=95,nv="Diamond Dream",ov=512,iv=0,av=10,cv=16,sv=1,lv=!1,fv=128,uv=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:pv.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),pv=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.8, 0.5, 0.5),
    vec3(0.2, 0.7, 0.2),
    vec3(1.0),
    vec3(0.7, 0.4, 0.3)
  );
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( p ), fbm( p + vec2(7.5,3.32) ) );
  vec2 r = vec2( fbm(10. * q + 1.5 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t))),
                fbm( q + vec2(7.0, 1.3)));
  float v = 10.0 * fbm(0.2 * p + r * p.y);
  v += 0.5 * t - 8.0 * min(p.x, -p.x);
  return fbm(r) +  smoothstep(0.0, 1.0, fract(v));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),dv=96,vv="Blue Brain",hv=512,mv=0,gv=10,xv=16,bv=1,yv=!1,wv=128,_v=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Sv.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Sv=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5, 0.5, 0.5),
    vec3(0.5, 0.5, 0.5),
    vec3(1.0),
    vec3(0.9, 0.2, 0.3)
  );
}

float scene(in vec2 p, float t) {
  p += 1.;
  vec2 q = vec2( fbm(0.8 * p), fbm(0.3 * p + vec2(7.5,3.32) ) );
  q += 0.1 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t));
  vec2 r = vec2( fbm(8. * q),
                fbm( 5. * q + vec2(1.6, 1.3)));
  float v = 1.2 * fbm(p + 3. * r);
  return fbm(r) + smoothstep(0.8, 1.0, fract(v));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Ev=97,Ov="Blue Yellow Storm",Rv=512,Pv=0,zv=10,Tv=16,Iv=1,Cv=!1,jv=128,kv=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Av.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Av=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.7, 0.4, 0.2),
    vec3(0.4, 0.4, 0.7),
    vec3(1.),
    vec3(0.2, 0.3, 0.6)
  );
}

float scene(in vec2 p, float t) {
  p += 1.;
  vec2 q = vec2( fbm(3. * p), fbm(0.8 * p + vec2(7.5,3.32) ) );
  q += 0.2 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t));
  vec2 r = vec2( fbm(q),
                fbm( 10. * q + vec2(10.6, 1.3)));
  float v = fract(fbm(p + 0.5 * r) + 2. * p.y + 0.1 * t);
  return 0.1 * fbm(r) + smoothstep(0.0, 1.0, v);
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Dv=98,Lv="Crossing",Nv=512,Mv=0,Uv=10,Fv=16,Bv=1,qv=!1,Gv=64,$v=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Hv.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Hv=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5, 0.5, 0.5),
    vec3(0.8, 0.8, 0.8),
    vec3(1.),
    vec3(0.2, 0.6, 0.8)
  );
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 0.2 * p ), fbm( 0.2 * p + vec2(1.15,0.32) ) );
  vec2 r = vec2( fbm( 1.5 * q ),
                fbm( q + vec2(1.71, 5.1) ) );
  float v = -0.05 * t + min(max(p.x, p.y), min(-p.x, -p.y)) + fbm( p + 0.2 * r + 0.1 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t)));
  return 0.6 * fbm(r) + smoothstep(0.5, 1.0, fract(18.0 * v));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Vv=99,Wv="Wave fire storm",Xv=512,Kv=0,Yv=10,Qv=16,Zv=1,Jv=!1,eh=64,th=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:rh.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),rh=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.8, 0.5, 0.6),
    vec3(0.4, 0.6, 0.6),
    vec3(1.2),
    vec3(0.6, 0.7, 0.75)
  );
}

float scene(in vec2 p, float t) {
  p.x *= 1.6;
  vec2 q = vec2( fbm( p ), fbm( p + vec2(1.15,0.32) ) );
  vec2 r = vec2( fbm( 2.1 * q ),
                fbm( 2.7 * q + vec2(1.71, 5.1) ) );
  // pR(p, PI / 4.);
  r += 0.5 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t));
  float v = p.y +
    2.0 * fbm( 0.2 * p + 0.2 * r);
  v *= 2.0;
  v += cos(0.2 * PI * t) * mod(floor(v), 2.0);
  return v;
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 base = (uv - 0.5) * ratio;
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      vec2 d = 0.5 * vec2(x,y) / resolution;
      vec2 p = base + d;
      c += pal(scene(p, time));
    }
  }
  c /= 4.0;
  gl_FragColor = vec4(c, 1.0);
}
`}}),nh=100,oh="Cloud tunnel",ih=512,ah=0,ch=10,sh=16,lh=1,fh=!1,uh=64,ph=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:dh.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),dh=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.3, 0.1, 0.2),
    vec3(1.0, 0.8, 0.8),
    vec3(1.),
    vec3(0.2, 0.3, 0.4)
  );
}

float scene(in vec2 p, float t) {
  p.x *= 1.6;
  vec2 q = vec2( fbm( p ), fbm( p + vec2(1.15,0.32) ) );
  q += 0.5 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t));
  vec2 r = vec2( fbm( 3.1 * q ),
                fbm( 2.7 * q + vec2(1.71, 5.1) ) );
  float v = 0.8 * length(p) + 3.0 * fbm( 4. + 0.2 * p + 0.2 * r) - 0.5 * t;
  return v;
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 base = (uv - 0.5) * ratio;
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      vec2 d = 0.5 * vec2(x,y) / resolution;
      vec2 p = base + d;
      c += pal(scene(p, time));
    }
  }
  c /= 4.0;
  gl_FragColor = vec4(c, 1.0);
}
`}}),vh=101,hh="Scale cloud",mh=512,gh=0,xh=10,bh=16,yh=1,wh=!1,_h=64,Sh=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Eh.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Eh=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.7, 0.2, 0.3),
    vec3(0.5, 0.8, 0.7),
    vec3(1.0),
    vec3(0.2, 0.3, 0.4)
  );
}

float scene(in vec2 p, float t) {
  p.x *= 1.6;
  vec2 q = vec2( fbm( p ), fbm( p + vec2(1.15,0.32) ) );
  q += 0.2 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t));
  vec2 r = vec2( fbm( 2.1 * q ),
                fbm( 2.7 * q + vec2(1.71, 5.1) ) );
  float v = -0.8 * p.y + 0.5 * p.x * cos(0.4 * PI * t) + 2.0 * fbm( 5.+ 0.4 * p + 0.2 * r);
  return 0.5 * fbm(r) + smoothstep(0.1, 0.9, fract(v));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Oh=102,Rh="Pinky green cloud",Ph=512,zh=0,Th=10,Ih=16,Ch=1,jh=!1,kh=64,Ah=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Dh.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Dh=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.8, 0.2, 0.5),
    vec3(0.2, 0.8, 0.3),
    vec3(1.0),
    vec3(0.3, 0.6, 0.5)
  );
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 0.5 * p ), fbm( 0.2 * p + vec2(1.15,0.32) ) );
  vec2 r = vec2( fbm( 10.1 * q ),
                fbm( 5.7 * q + vec2(1.71, 5.1) ) );
  r += 0.2 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t));
  p.y += 0.8;
  float v = 3. * length(p) + 3. * fbm( p + 0.5 * r);
  float c = 0.5 * fbm(r) + v + 0.1 * t;
  return 0.3 * fbm(q) + c;
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Lh=103,Nh="Spiral noise",Mh=512,Uh=0,Fh=10,Bh=16,qh=1,Gh=!1,$h=64,Hh=({time:e})=>Object(Ze.jsx)(Je.Node,{shader:Vh.node,uniforms:{resolution:Je.Uniform.Resolution,time:e}}),Vh=Je.Shaders.create({node:{frag:Je.GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 resolution;
uniform float time;
#define PI ${Math.PI}

// from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}
float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
const mat2 m2 = mat2( 0.6,  0.8, -0.8,  0.6 );
float fbm( in vec2 x ) {
  float f = 2.0;
  float s = 0.55;
  float a = 0.0;
  float b = 0.5;
  for( int i=0; i<9; i++ ) {
    float n = noise(x);
    a += b * n;
    b *= s;
    x = f * x;
  }
	return a;
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){
  return a+b*cos(6.28318*(c*t+d));
}
vec3 pal(float t){
  return palette(
    t,
    vec3(0.5, 0.5, 0.9),
    vec3(0.5, 0.5, 0.5),
    vec3(1.0),
    vec3(0.8, 0.0, 0.1)
  );
}

float scene(in vec2 p, float t) {
  vec2 q = vec2( fbm( 0.5 * p ), fbm( 0.2 * p + vec2(1.15,0.32) ) );
  vec2 r = vec2( fbm( 10.1 * q + 2.0 * vec2(cos(0.2 * PI * t), sin(0.2 * PI * t)) ),
                fbm( 10.7 * q + vec2(1.71, 5.1) ));
  float v = 8. * (length(p) + 0.1 * atan(p.y, p.x) - 0.5 * t) + 2. * fbm( p + 2.5 * r);
  float c = 0.5 * fbm(r) + v;
  return 0.3 * fbm(q) + c;
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec3 c = vec3(0.);
  vec2 p = (uv - 0.5) * ratio;
  c += pal(scene(p, time));
  gl_FragColor = vec4(c, 1.0);
}
`}}),Wh=[n,o,i,a,c,s,l,f,u,p,d,v,h,m,g,x,b,y,w,_,S,E,O,R,P,z,T,I,C,j,k,A,D,L,N,M,U,F,B,q,G,$,H,V,W,X,K,Y,Q,Z,J,ee,te,re,ne,oe,ie,ae,ce,se,le,fe,ue,pe,de,ve,he,me,ge,xe,be,ye,we,_e,Se,Ee,Oe,Re,Pe,ze,Te,Ie,Ce,je,ke,Ae,De,Le,Ne,Me,Ue,Fe,Be,qe,Ge,$e,He,Ve,We,Xe,Ke,Ye,Qe];function Xh(){return Wh}function Kh(){let e=Xh();return e[e.length-1]}function Yh(e){return Xh().find((t=>t.n===e))}},UWhB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("dv69")),o=i(r("8e5R"));function i(e){return e&&e.__esModule?e:{default:e}}const a=e=>Array.isArray(e)?e.reduce(((e,t)=>e.concat(a(t))),[]):[String(e.dependency&&e.dependency.getGLName()||e.initialObj)].concat(e.textureOptions?[e.textureOptions]:[]);class c extends o.default{constructor(...e){var t,r,n;super(...e),n=0,(r="groupNestedLvl")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}onSurfaceGLContextChange(e,t){t?(0,n.default)(e.getGLName()+" _context acquired_"):(0,n.default)(e.getGLName()+" _context lost_")}onSurfaceDrawSkipped(){}onSurfaceDrawStart(e){const[t,r]=e.getGLSize();console.groupCollapsed("Surface draw"),this.groupNestedLvl=1,(0,n.default)("_size_ `"+t+"`x`"+r+"`")}onSurfaceDrawError(e){for(console.error(e);this.groupNestedLvl>0;)console.groupEnd(),this.groupNestedLvl--;return!0}onSurfaceDrawEnd(){this.groupNestedLvl--,console.groupEnd()}onNodeDrawSkipped(e){(0,n.default)(e.getGLName()+" redraw _skipped_: "+(e.context.glSurface.gl?e._needsRedraw?"":"no need to redraw":"no gl context available!"))}onNodeDrawStart(e){this.groupNestedLvl++,console.group(e.getGLName())}onNodeSyncDeps(e,t,r){t.length&&console.log(e.getGLName()+" +deps "+t.map((e=>e.getGLName())).join(", ")),r.length&&console.log(e.getGLName()+" -deps "+t.map((e=>e.getGLName())).join(", "))}onNodeDraw(e,t){const{blendFunc:r,clear:o}=e.props;this.groupNestedLvl++,console.group("DRAW "+e.getGLName());const[i,c]=e.getGLSize();(0,n.default)("_size_ `"+i+"`x`"+c+"` _clear_ `"+JSON.stringify(o)+"` _blendFunc_ `"+JSON.stringify(r)+"`"),(0,n.default)("_"+t.length+" uniforms:_"),t.forEach((e=>{let{key:t,type:r,value:o,getMetaInfo:i}=e;r=String(r||"UNKNOWN");const c=void 0===o?"":Array.isArray(o)?"["+o.map((e=>"`"+String(e)+"`")).join(",")+"]":"`"+String(o)+"`";let s="";for(let n=r.length+t.length-18;n<0;n++)s+=" ";(0,n.default)(`${s}*${"UNKNOWN"===r?"[c='color:red']UNKNOWN[c]":r}* _${t}_ = ${c}`,...i?a(i()):[])}))}onNodeDrawEnd(){this.groupNestedLvl-=2,console.groupEnd(),console.groupEnd()}}t.default=c},Um7X:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,r){if((0,n.default)(t!==r,"gl-react: Found a loop in the rendering graph.\nIf you want to get back previous state, please use `backbuffering` instead"),r instanceof o.default)for(let n=0;n<r.dependents.length;n++)e(t,r.dependents[n])};var n=i(r("QLaP")),o=i(r("JwSf"));function i(e){return e&&e.__esModule?e:{default:e}}},VYxY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r("HbIt"))&&n.__esModule?n:{default:n};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a extends o.default{constructor(...e){super(...e),i(this,"results",new Map),i(this,"promises",new Map),i(this,"_disposed",!1)}inputHash(e){return""}getNoCache(e){throw new Error("getNoCache must be implemented")}dispose(){const{gl:e,results:t,promises:r}=this;t.forEach((e=>{this.disposeTexture(e.texture)})),t.clear(),r.clear(),this._disposed=!0}disposeTexture(e){this.gl.deleteTexture(e)}get(e){const t=this.inputHash(e),r=this.results.get(t);if(r)return r;const n=this.getNoCache(e);return this.results.set(t,n),n}load(e){const t=this.inputHash(e),r=this.promises.get(t);if(r)return r;const n=Promise.resolve(this.get(e));return this.promises.set(t,n),n}}var c=a;t.default=c},W9HR:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("nKUr"),o=r("MX0m"),i=r.n(o),a=(r("q1tI"),r("YFqc")),c=r.n(a);function s({withBreadcrumb:e,text:t}){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h1",{className:"jsx-2295160083 title",children:[e?Object(n.jsx)(c.a,{href:"/",children:Object(n.jsx)("a",{className:"jsx-2295160083",children:"greweb.me"})}):null,e?" / ":"",t]}),Object(n.jsx)(i.a,{id:"2295160083",children:[".title.jsx-2295160083{text-align:center;margin:0.5em 0;font-size:1.5rem;}"]})]})}},X1Co:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},Xs3h:function(e,t){e.exports=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]},Ytbt:function(e,t,r){"use strict";var n=r("QM7d"),o={body:"",args:[],thisVars:[],localVars:[]};function i(e){if(!e)return o;for(var t=0;t<e.args.length;++t){var r=e.args[t];e.args[t]=0===t?{name:r,lvalue:!0,rvalue:!!e.rvalue,count:e.count||1}:{name:r,lvalue:!1,rvalue:!0,count:1}}return e.thisVars||(e.thisVars=[]),e.localVars||(e.localVars=[]),e}function a(e){for(var t=[],r=0;r<e.args.length;++r)t.push("a"+r);return new Function("P",["return function ",e.funcName,"_ndarrayops(",t.join(","),") {P(",t.join(","),");return a0}"].join(""))(function(e){return n({args:e.args,pre:i(e.pre),body:i(e.body),post:i(e.proc),funcName:e.funcName})}(e))}var c={add:"+",sub:"-",mul:"*",div:"/",mod:"%",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"};!function(){for(var e in c){var r=c[e];t[e]=a({args:["array","array","array"],body:{args:["a","b","c"],body:"a=b"+r+"c"},funcName:e}),t[e+"eq"]=a({args:["array","array"],body:{args:["a","b"],body:"a"+r+"=b"},rvalue:!0,funcName:e+"eq"}),t[e+"s"]=a({args:["array","array","scalar"],body:{args:["a","b","s"],body:"a=b"+r+"s"},funcName:e+"s"}),t[e+"seq"]=a({args:["array","scalar"],body:{args:["a","s"],body:"a"+r+"=s"},rvalue:!0,funcName:e+"seq"})}}();var s={not:"!",bnot:"~",neg:"-",recip:"1.0/"};!function(){for(var e in s){var r=s[e];t[e]=a({args:["array","array"],body:{args:["a","b"],body:"a="+r+"b"},funcName:e}),t[e+"eq"]=a({args:["array"],body:{args:["a"],body:"a="+r+"a"},rvalue:!0,count:2,funcName:e+"eq"})}}();var l={and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">="};!function(){for(var e in l){var r=l[e];t[e]=a({args:["array","array","array"],body:{args:["a","b","c"],body:"a=b"+r+"c"},funcName:e}),t[e+"s"]=a({args:["array","array","scalar"],body:{args:["a","b","s"],body:"a=b"+r+"s"},funcName:e+"s"}),t[e+"eq"]=a({args:["array","array"],body:{args:["a","b"],body:"a=a"+r+"b"},rvalue:!0,count:2,funcName:e+"eq"}),t[e+"seq"]=a({args:["array","scalar"],body:{args:["a","s"],body:"a=a"+r+"s"},rvalue:!0,count:2,funcName:e+"seq"})}}();var f=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan"];!function(){for(var e=0;e<f.length;++e){var r=f[e];t[r]=a({args:["array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(b)",thisVars:["this_f"]},funcName:r}),t[r+"eq"]=a({args:["array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a"],body:"a=this_f(a)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"eq"})}}();var u=["max","min","atan2","pow"];!function(){for(var e=0;e<u.length;++e){var r=u[e];t[r]=a({args:["array","array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(b,c)",thisVars:["this_f"]},funcName:r}),t[r+"s"]=a({args:["array","array","scalar"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(b,c)",thisVars:["this_f"]},funcName:r+"s"}),t[r+"eq"]=a({args:["array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(a,b)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"eq"}),t[r+"seq"]=a({args:["array","scalar"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(a,b)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"seq"})}}();var p=["atan2","pow"];!function(){for(var e=0;e<p.length;++e){var r=p[e];t[r+"op"]=a({args:["array","array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(c,b)",thisVars:["this_f"]},funcName:r+"op"}),t[r+"ops"]=a({args:["array","array","scalar"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(c,b)",thisVars:["this_f"]},funcName:r+"ops"}),t[r+"opeq"]=a({args:["array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(b,a)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"opeq"}),t[r+"opseq"]=a({args:["array","scalar"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(b,a)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"opseq"})}}(),t.any=n({args:["array"],pre:o,body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:1}],body:"if(a){return true}",localVars:[],thisVars:[]},post:{args:[],localVars:[],thisVars:[],body:"return false"},funcName:"any"}),t.all=n({args:["array"],pre:o,body:{args:[{name:"x",lvalue:!1,rvalue:!0,count:1}],body:"if(!x){return false}",localVars:[],thisVars:[]},post:{args:[],localVars:[],thisVars:[],body:"return true"},funcName:"all"}),t.sum=n({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:1}],body:"this_s+=a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"sum"}),t.prod=n({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=1"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:1}],body:"this_s*=a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"prod"}),t.norm2squared=n({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:2}],body:"this_s+=a*a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"norm2squared"}),t.norm2=n({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:2}],body:"this_s+=a*a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return Math.sqrt(this_s)"},funcName:"norm2"}),t.norminf=n({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:4}],body:"if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"norminf"}),t.norm1=n({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:3}],body:"this_s+=a<0?-a:a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"norm1"}),t.sup=n({args:["array"],pre:{body:"this_h=-Infinity",args:[],thisVars:["this_h"],localVars:[]},body:{body:"if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",args:[{name:"_inline_1_arg0_",lvalue:!1,rvalue:!0,count:2}],thisVars:["this_h"],localVars:[]},post:{body:"return this_h",args:[],thisVars:["this_h"],localVars:[]}}),t.inf=n({args:["array"],pre:{body:"this_h=Infinity",args:[],thisVars:["this_h"],localVars:[]},body:{body:"if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",args:[{name:"_inline_1_arg0_",lvalue:!1,rvalue:!0,count:2}],thisVars:["this_h"],localVars:[]},post:{body:"return this_h",args:[],thisVars:["this_h"],localVars:[]}}),t.argmin=n({args:["index","array","shape"],pre:{body:"{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",args:[{name:"_inline_0_arg0_",lvalue:!1,rvalue:!1,count:0},{name:"_inline_0_arg1_",lvalue:!1,rvalue:!1,count:0},{name:"_inline_0_arg2_",lvalue:!1,rvalue:!0,count:1}],thisVars:["this_i","this_v"],localVars:[]},body:{body:"{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",args:[{name:"_inline_1_arg0_",lvalue:!1,rvalue:!0,count:2},{name:"_inline_1_arg1_",lvalue:!1,rvalue:!0,count:2}],thisVars:["this_i","this_v"],localVars:["_inline_1_k"]},post:{body:"{return this_i}",args:[],thisVars:["this_i"],localVars:[]}}),t.argmax=n({args:["index","array","shape"],pre:{body:"{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",args:[{name:"_inline_0_arg0_",lvalue:!1,rvalue:!1,count:0},{name:"_inline_0_arg1_",lvalue:!1,rvalue:!1,count:0},{name:"_inline_0_arg2_",lvalue:!1,rvalue:!0,count:1}],thisVars:["this_i","this_v"],localVars:[]},body:{body:"{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",args:[{name:"_inline_1_arg0_",lvalue:!1,rvalue:!0,count:2},{name:"_inline_1_arg1_",lvalue:!1,rvalue:!0,count:2}],thisVars:["this_i","this_v"],localVars:["_inline_1_k"]},post:{body:"{return this_i}",args:[],thisVars:["this_i"],localVars:[]}}),t.random=a({args:["array"],pre:{args:[],body:"this_f=Math.random",thisVars:["this_f"]},body:{args:["a"],body:"a=this_f()",thisVars:["this_f"]},funcName:"random"}),t.assign=a({args:["array","array"],body:{args:["a","b"],body:"a=b"},funcName:"assign"}),t.assigns=a({args:["array","scalar"],body:{args:["a","b"],body:"a=b"},funcName:"assigns"}),t.equals=n({args:["array","array"],pre:o,body:{args:[{name:"x",lvalue:!1,rvalue:!0,count:1},{name:"y",lvalue:!1,rvalue:!0,count:1}],body:"if(x!==y){return false}",localVars:[],thisVars:[]},post:{args:[],localVars:[],thisVars:[],body:"return true"},funcName:"equals"})},ZWFy:function(e,t,r){"use strict";e.exports=function(e,t){if(null===e||"undefined"===typeof e)throw new TypeError("expected first argument to be an object.");if("undefined"===typeof t||"undefined"===typeof Symbol)return e;if("function"!==typeof Object.getOwnPropertySymbols)return e;for(var r=Object.prototype.propertyIsEnumerable,n=Object(e),o=arguments.length,i=0;++i<o;)for(var a=Object(arguments[i]),c=Object.getOwnPropertySymbols(a),s=0;s<c.length;s++){var l=c[s];r.call(a,l)&&(n[l]=a[l])}return n}},ZkmD:function(e,t,r){var n=r("szI9");e.exports=function(){var e={};return function(t){if(("object"!==typeof t||null===t)&&"function"!==typeof t)throw new Error("Weakmap-shim: Key must be object");var r=t.valueOf(e);return r&&r.identity===e?r:n(t,e)}}},Zss7:function(e,t,r){var n;!function(o){var i=/^\s+/,a=/\s+$/,c=0,s=o.round,l=o.min,f=o.max,u=o.random;function p(e,t){if(t=t||{},(e=e||"")instanceof p)return e;if(!(this instanceof p))return new p(e,t);var r=function(e){var t={r:0,g:0,b:0},r=1,n=null,c=null,s=null,u=!1,p=!1;"string"==typeof e&&(e=function(e){e=e.replace(i,"").replace(a,"").toLowerCase();var t,r=!1;if(I[e])e=I[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};if(t=F.rgb.exec(e))return{r:t[1],g:t[2],b:t[3]};if(t=F.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=F.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=F.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=F.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=F.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=F.hex8.exec(e))return{r:D(t[1]),g:D(t[2]),b:D(t[3]),a:U(t[4]),format:r?"name":"hex8"};if(t=F.hex6.exec(e))return{r:D(t[1]),g:D(t[2]),b:D(t[3]),format:r?"name":"hex"};if(t=F.hex4.exec(e))return{r:D(t[1]+""+t[1]),g:D(t[2]+""+t[2]),b:D(t[3]+""+t[3]),a:U(t[4]+""+t[4]),format:r?"name":"hex8"};if(t=F.hex3.exec(e))return{r:D(t[1]+""+t[1]),g:D(t[2]+""+t[2]),b:D(t[3]+""+t[3]),format:r?"name":"hex"};return!1}(e));"object"==typeof e&&(B(e.r)&&B(e.g)&&B(e.b)?(d=e.r,v=e.g,h=e.b,t={r:255*k(d,255),g:255*k(v,255),b:255*k(h,255)},u=!0,p="%"===String(e.r).substr(-1)?"prgb":"rgb"):B(e.h)&&B(e.s)&&B(e.v)?(n=N(e.s),c=N(e.v),t=function(e,t,r){e=6*k(e,360),t=k(t,100),r=k(r,100);var n=o.floor(e),i=e-n,a=r*(1-t),c=r*(1-i*t),s=r*(1-(1-i)*t),l=n%6;return{r:255*[r,c,a,a,s,r][l],g:255*[s,r,r,c,a,a][l],b:255*[a,a,s,r,r,c][l]}}(e.h,n,c),u=!0,p="hsv"):B(e.h)&&B(e.s)&&B(e.l)&&(n=N(e.s),s=N(e.l),t=function(e,t,r){var n,o,i;function a(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=k(e,360),t=k(t,100),r=k(r,100),0===t)n=o=i=r;else{var c=r<.5?r*(1+t):r+t-r*t,s=2*r-c;n=a(s,c,e+1/3),o=a(s,c,e),i=a(s,c,e-1/3)}return{r:255*n,g:255*o,b:255*i}}(e.h,n,s),u=!0,p="hsl"),e.hasOwnProperty("a")&&(r=e.a));var d,v,h;return r=j(r),{ok:u,format:e.format||p,r:l(255,f(t.r,0)),g:l(255,f(t.g,0)),b:l(255,f(t.b,0)),a:r}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=s(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=s(this._r)),this._g<1&&(this._g=s(this._g)),this._b<1&&(this._b=s(this._b)),this._ok=r.ok,this._tc_id=c++}function d(e,t,r){e=k(e,255),t=k(t,255),r=k(r,255);var n,o,i=f(e,t,r),a=l(e,t,r),c=(i+a)/2;if(i==a)n=o=0;else{var s=i-a;switch(o=c>.5?s/(2-i-a):s/(i+a),i){case e:n=(t-r)/s+(t<r?6:0);break;case t:n=(r-e)/s+2;break;case r:n=(e-t)/s+4}n/=6}return{h:n,s:o,l:c}}function v(e,t,r){e=k(e,255),t=k(t,255),r=k(r,255);var n,o,i=f(e,t,r),a=l(e,t,r),c=i,s=i-a;if(o=0===i?0:s/i,i==a)n=0;else{switch(i){case e:n=(t-r)/s+(t<r?6:0);break;case t:n=(r-e)/s+2;break;case r:n=(e-t)/s+4}n/=6}return{h:n,s:o,v:c}}function h(e,t,r,n){var o=[L(s(e).toString(16)),L(s(t).toString(16)),L(s(r).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function m(e,t,r,n){return[L(M(n)),L(s(e).toString(16)),L(s(t).toString(16)),L(s(r).toString(16))].join("")}function g(e,t){t=0===t?0:t||10;var r=p(e).toHsl();return r.s-=t/100,r.s=A(r.s),p(r)}function x(e,t){t=0===t?0:t||10;var r=p(e).toHsl();return r.s+=t/100,r.s=A(r.s),p(r)}function b(e){return p(e).desaturate(100)}function y(e,t){t=0===t?0:t||10;var r=p(e).toHsl();return r.l+=t/100,r.l=A(r.l),p(r)}function w(e,t){t=0===t?0:t||10;var r=p(e).toRgb();return r.r=f(0,l(255,r.r-s(-t/100*255))),r.g=f(0,l(255,r.g-s(-t/100*255))),r.b=f(0,l(255,r.b-s(-t/100*255))),p(r)}function _(e,t){t=0===t?0:t||10;var r=p(e).toHsl();return r.l-=t/100,r.l=A(r.l),p(r)}function S(e,t){var r=p(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,p(r)}function E(e){var t=p(e).toHsl();return t.h=(t.h+180)%360,p(t)}function O(e){var t=p(e).toHsl(),r=t.h;return[p(e),p({h:(r+120)%360,s:t.s,l:t.l}),p({h:(r+240)%360,s:t.s,l:t.l})]}function R(e){var t=p(e).toHsl(),r=t.h;return[p(e),p({h:(r+90)%360,s:t.s,l:t.l}),p({h:(r+180)%360,s:t.s,l:t.l}),p({h:(r+270)%360,s:t.s,l:t.l})]}function P(e){var t=p(e).toHsl(),r=t.h;return[p(e),p({h:(r+72)%360,s:t.s,l:t.l}),p({h:(r+216)%360,s:t.s,l:t.l})]}function z(e,t,r){t=t||6,r=r||30;var n=p(e).toHsl(),o=360/r,i=[p(e)];for(n.h=(n.h-(o*t>>1)+720)%360;--t;)n.h=(n.h+o)%360,i.push(p(n));return i}function T(e,t){t=t||6;for(var r=p(e).toHsv(),n=r.h,o=r.s,i=r.v,a=[],c=1/t;t--;)a.push(p({h:n,s:o,v:i})),i=(i+c)%1;return a}p.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,n=this.toRgb();return e=n.r/255,t=n.g/255,r=n.b/255,.2126*(e<=.03928?e/12.92:o.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:o.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:o.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=j(e),this._roundA=s(100*this._a)/100,this},toHsv:function(){var e=v(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=v(this._r,this._g,this._b),t=s(360*e.h),r=s(100*e.s),n=s(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=d(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=d(this._r,this._g,this._b),t=s(360*e.h),r=s(100*e.s),n=s(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return h(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,n,o){var i=[L(s(e).toString(16)),L(s(t).toString(16)),L(s(r).toString(16)),L(M(n))];if(o&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1))return i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0);return i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:s(this._r),g:s(this._g),b:s(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+s(this._r)+", "+s(this._g)+", "+s(this._b)+")":"rgba("+s(this._r)+", "+s(this._g)+", "+s(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:s(100*k(this._r,255))+"%",g:s(100*k(this._g,255))+"%",b:s(100*k(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+s(100*k(this._r,255))+"%, "+s(100*k(this._g,255))+"%, "+s(100*k(this._b,255))+"%)":"rgba("+s(100*k(this._r,255))+"%, "+s(100*k(this._g,255))+"%, "+s(100*k(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(C[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+m(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=p(e);r="#"+m(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return p(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(y,arguments)},brighten:function(){return this._applyModification(w,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(g,arguments)},saturate:function(){return this._applyModification(x,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(S,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(z,arguments)},complement:function(){return this._applyCombination(E,arguments)},monochromatic:function(){return this._applyCombination(T,arguments)},splitcomplement:function(){return this._applyCombination(P,arguments)},triad:function(){return this._applyCombination(O,arguments)},tetrad:function(){return this._applyCombination(R,arguments)}},p.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]="a"===n?e[n]:N(e[n]));e=r}return p(e,t)},p.equals=function(e,t){return!(!e||!t)&&p(e).toRgbString()==p(t).toRgbString()},p.random=function(){return p.fromRatio({r:u(),g:u(),b:u()})},p.mix=function(e,t,r){r=0===r?0:r||50;var n=p(e).toRgb(),o=p(t).toRgb(),i=r/100;return p({r:(o.r-n.r)*i+n.r,g:(o.g-n.g)*i+n.g,b:(o.b-n.b)*i+n.b,a:(o.a-n.a)*i+n.a})},p.readability=function(e,t){var r=p(e),n=p(t);return(o.max(r.getLuminance(),n.getLuminance())+.05)/(o.min(r.getLuminance(),n.getLuminance())+.05)},p.isReadable=function(e,t,r){var n,o,i=p.readability(e,t);switch(o=!1,(n=function(e){var t,r;t=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase(),r=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA");"small"!==r&&"large"!==r&&(r="small");return{level:t,size:r}}(r)).level+n.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},p.mostReadable=function(e,t,r){var n,o,i,a,c=null,s=0;o=(r=r||{}).includeFallbackColors,i=r.level,a=r.size;for(var l=0;l<t.length;l++)(n=p.readability(e,t[l]))>s&&(s=n,c=p(t[l]));return p.isReadable(e,c,{level:i,size:a})||!o?c:(r.includeFallbackColors=!1,p.mostReadable(e,["#fff","#000"],r))};var I=p.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},C=p.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(I);function j(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function k(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"===typeof e&&-1!=e.indexOf("%")}(e);return e=l(t,f(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),o.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function A(e){return l(1,f(0,e))}function D(e){return parseInt(e,16)}function L(e){return 1==e.length?"0"+e:""+e}function N(e){return e<=1&&(e=100*e+"%"),e}function M(e){return o.round(255*parseFloat(e)).toString(16)}function U(e){return D(e)/255}var F=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",r="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function B(e){return!!F.CSS_UNIT.exec(e)}e.exports?e.exports=p:void 0===(n=function(){return p}.call(t,r,t,e))||(e.exports=n)}(Math)},aiXG:function(e,t){e.exports=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]},b0oO:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("nKUr"),o=r("MX0m"),i=r.n(o);r("q1tI");function a({children:e}){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{className:"jsx-1329991137",children:e}),Object(n.jsx)(i.a,{id:"1329991137",children:["header.jsx-1329991137{padding:1rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]})]})}},bPVu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("TGEO");class o extends n.WebGLTextureLoaderAsyncHashCache{canLoad(e){return"string"===typeof e}inputHash(e){return e}loadNoCache(e){const{gl:t}=this;let r;return{promise:new Promise(((t,n)=>r=function(e,t,r){let n=new window.Image;return"data:"!==e.slice(0,5)&&(n.crossOrigin=!0),n.onload=function(){n&&t(n),n=null},n.onabort=n.onerror=r,n.src=e,function(){n&&(n.onload=null,n.onerror=null,n.onabort=null,n.src="",n=null)}}(e,t,n))).then((e=>{const{width:r,height:n}=e,o=t.createTexture();return t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),{texture:o,width:r,height:n}})),dispose:()=>r()}}}n.globalRegistry.add(o);var i=o;t.default=i},bQgK:function(e,t,r){(function(t){(function(){var r,n,o,i,a,c;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(r()-a)/1e6},n=t.hrtime,i=(r=function(){var e;return 1e9*(e=n())[0]+e[1]})(),c=1e9*t.uptime(),a=i-c):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,r("8oxB"))},c347:function(e,t,r){"use strict";var n=r("2RPy"),o=r("fdwk"),i=r("jO/C"),a=r("R9Te");e.exports=function(e,t,r){if(!n(e))throw new TypeError("expected an object");if("string"!==typeof t||null==r)return o.apply(null,arguments);if("string"===typeof r)return a(e,t,r),e;var c=i(e,t);return n(r)&&n(c)&&(r=o({},c,r)),a(e,t,r),e}},cDsr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r("HbIt"))&&n.__esModule?n:{default:n};function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=new Promise((()=>{}));class c extends o.default{constructor(...e){super(...e),i(this,"disposes",new Map),i(this,"inputs",new Map),i(this,"promises",new Map),i(this,"results",new Map),i(this,"_disposed",!1)}inputHash(e){return""}loadNoCache(e){return{promise:Promise.reject(new Error("loadNoCache is not implemented")),dispose:()=>{}}}dispose(){const{gl:e,promises:t,results:r,inputs:n,disposes:o}=this;o.forEach((e=>e())),r.forEach((e=>{this.disposeTexture(e.texture)})),t.clear(),r.clear(),n.clear(),o.clear(),this._disposed=!0}disposeTexture(e){this.gl.deleteTexture(e)}load(e){const t=this.inputHash(e),r=this.promises.get(t);if(r)return r;const n=this.loadNoCache(e);this.disposes.set(t,n.dispose);const o=n.promise.then((e=>this.promises.has(t)?(this.disposes.delete(t),this.results.set(t,e),e):a));return this.promises.set(t,o),o}get(e){return this.results.get(this.inputHash(e))}cancelLoad(e){const t=this.inputHash(e);this.promises.delete(t);const r=this.disposes.get(t);r&&(r(),this.disposes.delete(t))}}var s=c;t.default=s},cpVT:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},dEu3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,...t){let r="";for(let n=0;n<e.length;n++)r+=(0===n?"":t[n-1])+e[n];return r},t.GLSLSymbol=void 0;t.GLSLSymbol="GLSL"},dGjt:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.list=void 0;var n=u(r("QLaP")),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=u(r("17x9")),a=u(r("KN1S")),c=(u(r("dLFq")),u(r("laZL"))),s=u(r("38ab")),l=r("TGEO");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const v={children:i.default.any.isRequired,style:i.default.any,preload:i.default.array,onLoad:i.default.func,onLoadError:i.default.func,onContextLost:i.default.func,onContextRestored:i.default.func,visitor:i.default.object};let h=0;const m=[];t.list=()=>m.slice(0);const g=Object.keys(v);t.default=({GLView:e,RenderLessElement:t,mapRenderableContent:r,requestFrame:f,cancelFrame:u})=>{var x,b;return b=x=class extends o.Component{constructor(...e){super(...e),d(this,"id",++h),d(this,"gl",void 0),d(this,"buffer",void 0),d(this,"loaderResolver",void 0),d(this,"glView",void 0),d(this,"root",void 0),d(this,"shaders",{}),d(this,"_preparingGL",[]),d(this,"_needsRedraw",!1),d(this,"state",{ready:!1,rebootId:0,debug:!1}),d(this,"RenderLessElement",t),d(this,"mapRenderableContent",r),d(this,"redraw",(()=>{this._needsRedraw=!0})),d(this,"flush",(()=>{this._draw()})),d(this,"_emptyTexture",void 0),d(this,"_onContextCreate",(e=>{this._prepareGL(e,(()=>{this.setState({ready:!0},(()=>{try{this._handleLoad()}catch(e){this._handleError(e)}}))}),this._handleError)})),d(this,"_onContextFailure",(e=>{this._handleError(e)})),d(this,"_onContextLost",(()=>{this.props.onContextLost&&this.props.onContextLost(),this._stopLoop(),this._destroyGL(),this.root&&this.root._onContextLost()})),d(this,"_onContextRestored",(e=>{this.root&&this.root._onContextRestored(e),this._prepareGL(e,this._handleRestoredSuccess,this._handleRestoredFailure)})),d(this,"_onRef",(e=>{this.glView=e})),d(this,"_handleError",(e=>{const{onLoadError:t}=this.props;t?t(e):console.error(e)})),d(this,"_handleRestoredFailure",(()=>{})),d(this,"_handleRestoredSuccess",(()=>{this.redraw(),this.flush(),this._startLoop(),this.props.onContextRestored&&this.props.onContextRestored()})),d(this,"_handleLoad",(()=>{this.root||console.warn(this.getGLName()+" children does not contain any discoverable Node");const{onLoad:e}=this.props;this.redraw(),this.flush(),this._startLoop(),e&&e()})),d(this,"_loopRaf",void 0)}getChildContext(){return{glParent:this,glSurface:this,glSizable:this}}componentDidMount(){m.push(this),this.getVisitors().forEach((e=>e.onSurfaceMount(this)))}componentWillUnmount(){this._stopLoop(),this._destroyGL();const e=m.indexOf(this);-1!==e&&m.splice(e,1),this.getVisitors().forEach((e=>e.onSurfaceUnmount(this)))}componentDidUpdate(){this.redraw()}render(){const{props:t,state:{ready:r,rebootId:n,debug:i}}=this,{children:a,style:c}=t,s={};return Object.keys(t).forEach((e=>{-1===g.indexOf(e)&&(s[e]=t[e])})),o.default.createElement(e,p({key:n,debug:i,ref:this._onRef,onContextCreate:this._onContextCreate,onContextFailure:this._onContextFailure,onContextLost:this._onContextLost,onContextRestored:this._onContextRestored,style:c},s),r?a:null)}rebootForDebug(){this._stopLoop(),this._destroyGL(),this.setState((({rebootId:e})=>({rebootId:e+1,ready:!1,debug:!0})))}getVisitors(){return s.default.get().concat(this.props.visitor||[])}getGLSize(){const{gl:e}=this;return[e?e.drawingBufferWidth:0,e?e.drawingBufferHeight:0]}getGLName(){return`Surface#${this.id}`}getGLShortName(){return"Surface"}captureAsDataURL(...t){const{glView:r}=this;return(0,n.default)(r,"GLView is mounted"),(0,n.default)(r.captureAsDataURL,"captureAsDataURL is not defined in %s",e.displayName||e.name),r.captureAsDataURL(...t)}captureAsBlob(...t){const{glView:r}=this;return(0,n.default)(r,"GLView is mounted"),(0,n.default)(r.captureAsBlob,"captureAsBlob is not defined in %s",e.displayName||e.name),r.captureAsBlob(...t)}capture(e,t,r,o){return(0,n.default)(this.root,"Surface#capture: surface is not yet ready or don't have any root Node"),this.root.capture(e,t,r,o)}glIsAvailable(){return!!this.gl}getEmptyTexture(){let{gl:e,_emptyTexture:t}=this;return(0,n.default)(e,"getEmptyTexture called while gl was not defined"),t||(this._emptyTexture=t=e.createTexture(),e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,2,2,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))),t}_destroyGL(){const{gl:e}=this;if(e){this.gl=null,this._emptyTexture&&(e.deleteTexture(this._emptyTexture),this._emptyTexture=null),this.loaderResolver&&this.loaderResolver.dispose();for(let e in this.shaders)this.shaders[e].dispose();this.shaders={},e.deleteBuffer(this.buffer),this.getVisitors().map((e=>e.onSurfaceGLContextChange(this,null)))}}_prepareGL(e,t,r){this.gl=e,this.getVisitors().map((t=>t.onSurfaceGLContextChange(this,e))),this.loaderResolver=new l.LoaderResolver(e),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1);const n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,4,4,-1]),e.STATIC_DRAW),this.buffer=n;const{preload:o}=this.props,i=[];(o||[]).forEach((e=>{if(!e)return void console.warn("Can't preload value",e);const{loader:t,input:r}=this._resolveTextureLoader(e);if(!t)return void console.warn("Can't preload input",e,r);t.get(r)||i.push(t.load(r))})),this._preparingGL=i,i.length>0?Promise.all(i).then(t,r):t()}_addGLNodeChild(e){(0,n.default)(!this.root,"Surface can only contains a single root. Got: %s",this.root&&this.root.getGLName()),this.root=e,e._addDependent(this),this.redraw()}_removeGLNodeChild(e){this.root=null,this.redraw()}_resolveTextureLoader(e){let t=e;return{loader:this.loaderResolver&&this.loaderResolver.resolve(t),input:t}}_makeShader({frag:e,vert:t},r){const{gl:o}=this;(0,n.default)(o,"gl is not available");const i=(0,a.default)(o,t,e);for(let n in i.attributes)i.attributes[n].pointer();return i}_getShader(e){const{shaders:t}=this;return t[e.id]||(t[e.id]=this._makeShader(c.default.get(e),c.default.getName(e)))}_bindRootNode(){const{gl:e}=this;(0,n.default)(e,"gl context not available"),e.bindFramebuffer(e.FRAMEBUFFER,null);const[t,r]=this.getGLSize();e.viewport(0,0,t,r)}_startLoop(){u(this._loopRaf);const e=()=>{this._loopRaf=f(e),this._needsRedraw&&this._draw()};this._loopRaf=f(e)}_stopLoop(){u(this._loopRaf)}_draw(){const{gl:e,root:t,glView:r}=this;(0,n.default)(r,"GLView is mounted");const o=this.getVisitors();if(e&&t&&this._needsRedraw){this._needsRedraw=!1,o.forEach((e=>e.onSurfaceDrawStart(this))),r.beforeDraw&&r.beforeDraw(e);try{t._draw()}catch(i){let e=!1;if(o.forEach((t=>{e=t.onSurfaceDrawError(i)||e})),!e)throw console.warn(i),i;return}r.afterDraw&&r.afterDraw(e),o.forEach((e=>e.onSurfaceDrawEnd(this)))}else o.forEach((e=>e.onSurfaceDrawSkipped(this)))}},d(x,"propTypes",v),d(x,"childContextTypes",{glSurface:i.default.object.isRequired,glParent:i.default.object.isRequired,glSizable:i.default.object.isRequired}),b}},dLFq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r("QLaP")),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=f(r("17x9")),a=f(r("JwSf")),c=f(r("Um7X")),s=f(r("5lXm"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class p extends o.Component{constructor(...e){super(...e),u(this,"id",(0,s.default)()),u(this,"context",void 0),u(this,"dependents",[]),u(this,"glNode",null),u(this,"glBusRootNode",void 0),u(this,"onRef",(e=>{this.glBusRootNode=e})),u(this,"redraw",(()=>{this.dependents.forEach((e=>e.redraw()))})),u(this,"_draw",(()=>{}))}componentDidMount(){const{uniform:e,index:t}=this.props;if(e){const{glParent:r}=this.context;(0,n.default)(r instanceof a.default,'a <Bus uniform=".." /> needs to be inside a Node'),r._addUniformBus(this,e,t)}this.redraw()}componentWillUnmount(){const{uniform:e,index:t}=this.props;if(e){const{glParent:r}=this.context;(0,n.default)(r instanceof a.default,'a <Bus uniform=".." /> needs to be inside a Node'),r._removeUniformBus(this,e,t)}}componentDidUpdate({uniform:e,index:t}){const{uniform:r,index:o}=this.props;if(r&&(r!==e||o!==t)){const{glParent:i}=this.context;(0,n.default)(i instanceof a.default,'a <Bus uniform=".." /> needs to be inside a Node'),e&&i._removeUniformBus(this,e,t),i._addUniformBus(this,r,o)}this.redraw()}getChildContext(){return{glParent:this}}_addGLNodeChild(e){this.glNode=e,this.context.glParent.redraw()}_removeGLNodeChild(e){this.glNode=null}_addDependent(e){-1===this.dependents.indexOf(e)&&((0,c.default)(this,e),this.dependents.push(e))}_removeDependent(e){const t=this.dependents.indexOf(e);-1!==t&&this.dependents.splice(t,1)}getGLRenderableNode(){return this.glNode}getGLRenderableContent(){const{mapRenderableContent:e}=this.context.glSurface,{glBusRootNode:t}=this;return t&&e?e(t):null}getGLName(){return`Bus(${this.glNode?this.glNode.getGLName():String(this.getGLRenderableContent())})`}getGLShortName(){const e=this.getGLRenderableContent(),t=String(e&&e.constructor&&e.constructor.name||e);return`Bus(${this.glNode?this.glNode.getGLShortName():t})`}capture(e,t,r,o){return(0,n.default)(this.glNode,"Bus does not contain any Node"),this.glNode.capture(e,t,r,o)}_onContextLost(){const{glNode:e}=this;e&&e._onContextLost()}_onContextRestored(e){const{glNode:t}=this;t&&t._onContextRestored(e)}render(){const{children:e}=this.props,{glSurface:{RenderLessElement:t,mapRenderableContent:r}}=this.context;return o.default.createElement(t,{ref:r?this.onRef:void 0},"function"===typeof e?e(this.redraw):e)}}t.default=p,u(p,"defaultProps",{index:0}),u(p,"contextTypes",{glParent:i.default.object.isRequired,glSurface:i.default.object.isRequired}),u(p,"childContextTypes",{glParent:i.default.object.isRequired})},dv69:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const{userAgent:n,vendor:o}="undefined"!==typeof navigator?navigator:{userAgent:"",vendor:""};var i,a,c,s,l,f,u,p,d,v,h,m,g;d=function(...e){return e.forEach((function(t){return"string"===typeof t?e=e.concat(m(t)):e.push(t)})),g.apply(window,e)},g=function(...e){return Function.prototype.apply.call(console.log,console,e)},c=[{regex:/\*([^\*]+)\*/,replacer:function(e,t){return"%c"+t+"%c"},styles:function(){return["font-style: italic",""]}},{regex:/_([^_]+)_/,replacer:function(e,t){return"%c"+t+"%c"},styles:function(){return["font-weight: bold",""]}},{regex:/`([^`]+)`/,replacer:function(e,t){return"%c"+t+"%c"},styles:function(){return["background: rgb(255, 255, 219); padding: 1px 5px; border: 1px solid rgba(0, 0, 0, 0.1)",""]}},{regex:/\[c=(?:"|')?((?:(?!(?:"|')\]).)*)(?:"|')?\]((?:(?!\[c\]).)*)\[c\]/,replacer:function(e,t,r){return"%c"+r+"%c"},styles:function(e){return[e[1],""]}}],l=function(e){var t;return t=!1,c.forEach((function(r){if(r.regex.test(e))return t=!0})),t},s=function(e){var t;return t=[],c.forEach((function(r){var n;if(n=e.match(r.regex))return t.push({format:r,match:n})})),t.sort((function(e,t){return e.match.index-t.match.index}))},m=function(e){var t,r;for(r=[];l(e);)t=s(e)[0],e=e.replace(t.format.regex,t.format.replacer),r=r.concat(t.format.styles(t.match));return[e].concat(r)},p=function(){return/Safari/.test(n)&&/Apple Computer/.test(o)},u=function(){return/OPR/.test(n)&&/Opera/.test(o)},f=function(){return/Firefox/.test(n)},h=function(){var e;return!!(e=n.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/))&&537.38<=parseInt(e[1],10)+parseInt(e[2],10)/100},v=function(){var e;return!!(e=n.match(/OPR\/(\d+)\./))&&15<=parseInt(e[1],10)},a=function(){return"undefined"!==typeof window&&(window.console.firebug||window.console.exception)},(i=function(){return/MSIE/.test(n)}()||f()&&!a()||u()&&!v()||p()&&!h()?g:d).l=g;var x=i;t.default=x},e0Q9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Surface=void 0;var n=r("rr/c"),o=a(r("xEkU")),i=a(r("v25H"));function a(e){return e&&e.__esModule?e:{default:e}}r("h/uW");const c=(0,n.createSurface)({GLView:i.default,RenderLessElement:"span",mapRenderableContent:e=>e instanceof Element?e.firstElementChild:null,requestFrame:o.default,cancelFrame:o.default.cancel});t.Surface=c},evCr:function(e,t,r){"use strict";var n=r("2RPy"),o=r("ZWFy");function i(e,t){for(var r in t)l(t,r)&&(e[r]=t[r])}function a(e){return e&&"string"===typeof e}function c(e){var t={};for(var r in e)t[r]=e[r];return t}function s(e){return e&&"object"===typeof e||n(e)}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=Object.assign||function(e){if(null===e||"undefined"===typeof e)throw new TypeError("Cannot convert undefined or null to object");s(e)||(e={});for(var t=1;t<arguments.length;t++){var r=arguments[t];a(r)&&(r=c(r)),s(r)&&(i(e,r),o(e,r))}return e}},fdwk:function(e,t,r){"use strict";var n=r("2RPy"),o=r("KxLE");function i(e,t){for(var r=arguments.length,n=0;++n<r;){var i=arguments[n];c(i)&&o(i,a,e)}return e}function a(e,t){if(function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e}(t)){var r=this[t];c(e)&&c(r)?i(r,e):this[t]=e}}function c(e){return n(e)&&!Array.isArray(e)}e.exports=i},fpEm:function(e,t,r){"use strict";e.exports=function(e,t,r,o){for(var i={},s=0,l=r.length;s<l;++s){var f=r[s],u=f.name,p=f.type,d=f.locations;switch(p){case"bool":case"int":case"float":a(e,t,d[0],o,1,i,u);break;default:if(p.indexOf("vec")>=0){if((v=p.charCodeAt(p.length-1)-48)<2||v>4)throw new n("","Invalid data type for attribute "+u+": "+p);a(e,t,d[0],o,v,i,u)}else{if(!(p.indexOf("mat")>=0))throw new n("","Unknown data type for attribute "+u+": "+p);var v;if((v=p.charCodeAt(p.length-1)-48)<2||v>4)throw new n("","Invalid data type for attribute "+u+": "+p);c(e,t,d,o,v,i,u)}}}return i};var n=r("o/2B");function o(e,t,r,n,o,i){this._gl=e,this._wrapper=t,this._index=r,this._locations=n,this._dimension=o,this._constFunc=i}var i=o.prototype;function a(e,t,r,n,i,a,c){for(var s=["gl","v"],l=[],f=0;f<i;++f)s.push("x"+f),l.push("x"+f);s.push("if(x0.length===void 0){return gl.vertexAttrib"+i+"f(v,"+l.join()+")}else{return gl.vertexAttrib"+i+"fv(v,x0)}");var u=Function.apply(null,s),p=new o(e,t,r,n,i,u);Object.defineProperty(a,c,{set:function(t){return e.disableVertexAttribArray(n[r]),u(e,n[r],t),t},get:function(){return p},enumerable:!0})}function c(e,t,r,n,o,i,c){for(var s=new Array(o),l=new Array(o),f=0;f<o;++f)a(e,t,r[f],n,o,s,f),l[f]=s[f];Object.defineProperty(s,"location",{set:function(e){if(Array.isArray(e))for(var t=0;t<o;++t)l[t].location=e[t];else for(t=0;t<o;++t)l[t].location=e+t;return e},get:function(){for(var e=new Array(o),t=0;t<o;++t)e[t]=n[r[t]];return e},enumerable:!0}),s.pointer=function(t,i,a,c){t=t||e.FLOAT,i=!!i,a=a||o*o,c=c||0;for(var s=0;s<o;++s){var l=n[r[s]];e.vertexAttribPointer(l,o,t,i,a,c+s*o),e.enableVertexAttribArray(l)}};var u=new Array(o),p=e["vertexAttrib"+o+"fv"];Object.defineProperty(i,c,{set:function(t){for(var i=0;i<o;++i){var a=n[r[i]];if(e.disableVertexAttribArray(a),Array.isArray(t[0]))p.call(e,a,t[i]);else{for(var c=0;c<o;++c)u[c]=t[o*i+c];p.call(e,a,u)}}return t},get:function(){return s},enumerable:!0})}i.pointer=function(e,t,r,n){var o=this,i=o._gl,a=o._locations[o._index];i.vertexAttribPointer(a,o._dimension,e||i.FLOAT,!!t,r||0,n||0),i.enableVertexAttribArray(a)},i.set=function(e,t,r,n){return this._constFunc(this._locations[this._index],e,t,r,n)},Object.defineProperty(i,"location",{get:function(){return this._locations[this._index]},set:function(e){return e!==this._locations[this._index]&&(this._locations[this._index]=0|e,this._wrapper.program=null),0|e}})},"h/uW":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CanvasTextureLoader",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"VideoTextureLoader",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ImageURLTextureLoader",{enumerable:!0,get:function(){return i.default}});var n=a(r("l8j9")),o=a(r("EEdt")),i=a(r("bPVu"));function a(e){return e&&e.__esModule?e:{default:e}}},hK8l:function(e,t,r){"use strict";function n(e,t,r){var o=0|e[r];if(o<=0)return[];var i,a=new Array(o);if(r===e.length-1)for(i=0;i<o;++i)a[i]=t;else for(i=0;i<o;++i)a[i]=n(e,t,r+1);return a}e.exports=function(e,t){switch("undefined"===typeof t&&(t=0),typeof e){case"number":if(e>0)return function(e,t){var r,n;for(r=new Array(e),n=0;n<e;++n)r[n]=t;return r}(0|e,t);break;case"object":if("number"===typeof e.length)return n(e,t,0)}return[]}},hYYf:function(e,t,r){e.exports=function(e){var t,r,u,p=0,d=0,v=s,h=[],m=[],g=1,x=0,b=0,y=!1,w=!1,_="",S=i,E=n;"300 es"===(e=e||{}).version&&(S=c,E=a);var O={},R={};for(p=0;p<S.length;p++)O[S[p]]=!0;for(p=0;p<E.length;p++)R[E[p]]=!0;return function(e){return m=[],null!==e?function(e){p=0,e.toString&&(e=e.toString());var r;_+=e.replace(/\r\n/g,"\n"),u=_.length;for(;t=_[p],p<u;){switch(r=p,v){case 0:p=j();break;case 1:p=C();break;case 2:p=I();break;case 3:p=k();break;case 4:p=L();break;case 11:p=D();break;case 5:p=N();break;case l:p=M();break;case 9:p=T();break;case s:p=z()}if(r!==p)switch(_[r]){case"\n":x=0,++g;break;default:++x}}return d+=p,_=_.slice(p),m}(e):function(e){h.length&&P(h.join(""));return v=10,P("(eof)"),m}()};function P(e){e.length&&m.push({type:f[v],data:e,position:b,line:g,column:x})}function z(){return h=h.length?[]:h,"/"===r&&"*"===t?(b=d+p-1,v=0,r=t,p+1):"/"===r&&"/"===t?(b=d+p-1,v=1,r=t,p+1):"#"===t?(v=2,b=d+p,p):/\s/.test(t)?(v=9,b=d+p,p):(y=/\d/.test(t),w=/[^\w_]/.test(t),b=d+p,v=y?4:w?3:l,p)}function T(){return/[^\s]/g.test(t)?(P(h.join("")),v=s,p):(h.push(t),r=t,p+1)}function I(){return"\r"!==t&&"\n"!==t||"\\"===r?(h.push(t),r=t,p+1):(P(h.join("")),v=s,p)}function C(){return I()}function j(){return"/"===t&&"*"===r?(h.push(t),P(h.join("")),v=s,p+1):(h.push(t),r=t,p+1)}function k(){if("."===r&&/\d/.test(t))return v=5,p;if("/"===r&&"*"===t)return v=0,p;if("/"===r&&"/"===t)return v=1,p;if("."===t&&h.length){for(;A(h););return v=5,p}if(";"===t||")"===t||"("===t){if(h.length)for(;A(h););return P(t),v=s,p+1}var e=2===h.length&&"="!==t;if(/[\w_\d\s]/.test(t)||e){for(;A(h););return v=s,p}return h.push(t),r=t,p+1}function A(e){for(var t,r,n=0;;){if(t=o.indexOf(e.slice(0,e.length+n).join("")),r=o[t],-1===t){if(n--+e.length>0)continue;r=e.slice(0,1).join("")}return P(r),b+=r.length,(h=h.slice(r.length)).length}}function D(){return/[^a-fA-F0-9]/.test(t)?(P(h.join("")),v=s,p):(h.push(t),r=t,p+1)}function L(){return"."===t||/[eE]/.test(t)?(h.push(t),v=5,r=t,p+1):"x"===t&&1===h.length&&"0"===h[0]?(v=11,h.push(t),r=t,p+1):/[^\d]/.test(t)?(P(h.join("")),v=s,p):(h.push(t),r=t,p+1)}function N(){return"f"===t&&(h.push(t),r=t,p+=1),/[eE]/.test(t)?(h.push(t),r=t,p+1):("-"!==t&&"+"!==t||!/[eE]/.test(r))&&/[^\d]/.test(t)?(P(h.join("")),v=s,p):(h.push(t),r=t,p+1)}function M(){if(/[^\d\w_]/.test(t)){var e=h.join("");return v=R[e]?8:O[e]?7:6,P(h.join("")),v=s,p}return h.push(t),r=t,p+1}};var n=r("GTa7"),o=r("aiXG"),i=r("Xs3h"),a=r("9fJb"),c=r("BkhO"),s=999,l=9999,f=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"]},hmBY:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("nKUr"),o=r("MX0m"),i=r.n(o);r("q1tI");function a({children:e}){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("main",{className:"jsx-1508801263",children:e}),Object(n.jsx)(i.a,{id:"1508801263",children:["main.jsx-1508801263{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]})]})}},"jO/C":function(e,t){function r(e){return e?Array.isArray(e)?e.join("."):e:""}e.exports=function(e,t,n,o,i){if(null===(a=e)||"object"!==typeof a&&"function"!==typeof a||!t)return e;var a;if(t=r(t),n&&(t+="."+r(n)),o&&(t+="."+r(o)),i&&(t+="."+r(i)),t in e)return e[t];for(var c=t.split("."),s=c.length,l=-1;e&&++l<s;){for(var f=c[l];"\\"===f[f.length-1];)f=f.slice(0,-1)+"."+c[++l];e=e[f]}return e}},kR76:function(e,t,r){var n=r("SMLl");e.exports=function(e,t,r){t="number"===typeof t?t:1,r=r||": ";var o=e.split(/\r?\n/),i=String(o.length+t-1).length;return o.map((function(e,o){var a=o+t,c=String(a).length;return n(a,i-c)+r+e})).join("\n")}},"kVK+":function(e,t){t.read=function(e,t,r,n,o){var i,a,c=8*o-n-1,s=(1<<c)-1,l=s>>1,f=-7,u=r?o-1:0,p=r?-1:1,d=e[t+u];for(u+=p,i=d&(1<<-f)-1,d>>=-f,f+=c;f>0;i=256*i+e[t+u],u+=p,f-=8);for(a=i&(1<<-f)-1,i>>=-f,f+=n;f>0;a=256*a+e[t+u],u+=p,f-=8);if(0===i)i=1-l;else{if(i===s)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,n),i-=l}return(d?-1:1)*a*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var a,c,s,l=8*i-o-1,f=(1<<l)-1,u=f>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:i-1,v=n?1:-1,h=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(c=isNaN(t)?1:0,a=f):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),(t+=a+u>=1?p/s:p*Math.pow(2,1-u))*s>=2&&(a++,s/=2),a+u>=f?(c=0,a=f):a+u>=1?(c=(t*s-1)*Math.pow(2,o),a+=u):(c=t*Math.pow(2,u-1)*Math.pow(2,o),a=0));o>=8;e[r+d]=255&c,d+=v,c/=256,o-=8);for(a=a<<o|c,l+=o;l>0;e[r+d]=255&a,d+=v,a/=256,l-=8);e[r+d-v]|=128*h}},l8j9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("TGEO");class o extends n.WebGLTextureLoaderSyncHashCache{constructor(...e){var t,r,n;super(...e),n={},(r="disposes")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}canLoad(e){return e instanceof HTMLCanvasElement}inputHash(e){return e}getNoCache(e){const{gl:t}=this,{width:r,height:n}=e,o=t.createTexture();return t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),{texture:o,width:r,height:n}}update(e){const{gl:t}=this,{texture:r}=this.get(e);t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e)}}n.globalRegistry.add(o);var i=o;t.default=i},laZL:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.isShaderIdentifier=function(e){return"object"===typeof e&&!!e&&e.type===a&&"string"===typeof e.id},t.ensureShaderDefinition=d,t.shaderDefinitionToShaderInfo=g,t.shaderInfoEquals=function(e,t){return e.frag===t.frag&&e.vert===t.vert},t.default=void 0;var n=i(r("QLaP")),o=i(r("dEu3"));function i(e){return e&&e.__esModule?e:{default:e}}const a="ShaderID",c={},s={},l={},f=(u=0,()=>(++u).toString());var u;const p={100:o.default`
attribute vec2 _p;
varying vec2 uv;
void main() {
gl_Position = vec4(_p,0.0,1.0);
uv = vec2(0.5, 0.5) * (_p+vec2(1.0, 1.0));
}`,"300 es":o.default`#version 300 es
in vec2 _p;
out vec2 uv;
void main() {
gl_Position = vec4(_p,0.0,1.0);
uv = vec2(0.5, 0.5) * (_p+vec2(1.0, 1.0));
}`};function d(e,t=""){return(0,n.default)(e&&"string"===typeof e.frag,"A `frag` GLSL code (string) is required"+t),e}const v="#version";function h(e){const t=e.indexOf("\n"),r=t>-1?e.slice(0,t):e;return r.startsWith(v)?r.slice(v.length+1):"100"}const m=(e,t)=>t?e+"\n#define SHADER_NAME "+t+"\n":e;function g({frag:e,vert:t},r){const n=h(e=e.trim());if(t){if(n!==h(t=t.trim()))throw new Error("GLSL shader vert and frag version must match")}else if(!(t=p[n]))throw new Error("gl-react: could not find static vertex shader for GLSL version '"+n+"'");return{frag:e=m(e,r),vert:t=m(t,r)}}var x=e.__glReactShaders=e.__glReactShaders||{create(e){const t={};return Object.keys(e).forEach((r=>{const n=d(e[r]," in Shaders.create({ "+r+": ... })"),o=f(),i=Object.freeze({type:a,id:o});c[o]=n,s[o]=r,t[r]=i;const u=g(n,r);l[o]=u})),t},getName:e=>(s[e.id]||"???")+`#${String(e.id)}`,getShortName:e=>s[e.id]||"???",get:e=>((0,n.default)(e.id in c,"Shader %s does not exist. Make sure you don't have gl-react dup issue: `npm ls gl-react`",e.id),l[e.id])};t.default=x}).call(this,r("ntbh"))},nXQg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={Backbuffer:"_Backbuffer_",backbufferFrom:e=>({type:"BackbufferFrom",node:e}),Resolution:"_Resolution_",textureSize:e=>({type:"TextureSize",obj:e}),textureSizeRatio:e=>({type:"TextureSize",obj:e,ratio:!0})};t.default=n},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}e.exports=t}},r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{}},i=!0;try{e[t](o,o.exports,n),i=!1}finally{i&&delete r[t]}return o.exports}return n.ab=t+"/",n(149)}()}).call(this,"/")},"o/2B":function(e,t){function r(e,t,r){this.shortMessage=t||"",this.longMessage=r||"",this.rawError=e||"",this.message="gl-shader: "+(t||e||"")+(r?"\n"+r:""),this.stack=(new Error).stack}r.prototype=new Error,r.prototype.name="GLError",r.prototype.constructor=r,e.exports=r},pIo5:function(e,t,r){"use strict";function n(e){var t=32;return(e&=-e)&&t--,65535&e&&(t-=16),16711935&e&&(t-=8),252645135&e&&(t-=4),858993459&e&&(t-=2),1431655765&e&&(t-=1),t}t.INT_BITS=32,t.INT_MAX=2147483647,t.INT_MIN=-1<<31,t.sign=function(e){return(e>0)-(e<0)},t.abs=function(e){var t=e>>31;return(e^t)-t},t.min=function(e,t){return t^(e^t)&-(e<t)},t.max=function(e,t){return e^(e^t)&-(e<t)},t.isPow2=function(e){return!(e&e-1)&&!!e},t.log2=function(e){var t,r;return t=(e>65535)<<4,t|=r=((e>>>=t)>255)<<3,t|=r=((e>>>=r)>15)<<2,(t|=r=((e>>>=r)>3)<<1)|(e>>>=r)>>1},t.log10=function(e){return e>=1e9?9:e>=1e8?8:e>=1e7?7:e>=1e6?6:e>=1e5?5:e>=1e4?4:e>=1e3?3:e>=100?2:e>=10?1:0},t.popCount=function(e){return 16843009*((e=(858993459&(e-=e>>>1&1431655765))+(e>>>2&858993459))+(e>>>4)&252645135)>>>24},t.countTrailingZeros=n,t.nextPow2=function(e){return e+=0===e,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,(e|=e>>>16)+1},t.prevPow2=function(e){return e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,(e|=e>>>16)-(e>>>1)},t.parity=function(e){return e^=e>>>16,e^=e>>>8,e^=e>>>4,27030>>>(e&=15)&1};var o=new Array(256);!function(e){for(var t=0;t<256;++t){var r=t,n=t,o=7;for(r>>>=1;r;r>>>=1)n<<=1,n|=1&r,--o;e[t]=n<<o&255}}(o),t.reverse=function(e){return o[255&e]<<24|o[e>>>8&255]<<16|o[e>>>16&255]<<8|o[e>>>24&255]},t.interleave2=function(e,t){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e&=65535)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t&=65535)|t<<8))|t<<4))|t<<2))|t<<1))<<1},t.deinterleave2=function(e,t){return(e=65535&((e=16711935&((e=252645135&((e=858993459&((e=e>>>t&1431655765)|e>>>1))|e>>>2))|e>>>4))|e>>>16))<<16>>16},t.interleave3=function(e,t,r){return e=1227133513&((e=3272356035&((e=251719695&((e=4278190335&((e&=1023)|e<<16))|e<<8))|e<<4))|e<<2),(e|=(t=1227133513&((t=3272356035&((t=251719695&((t=4278190335&((t&=1023)|t<<16))|t<<8))|t<<4))|t<<2))<<1)|(r=1227133513&((r=3272356035&((r=251719695&((r=4278190335&((r&=1023)|r<<16))|r<<8))|r<<4))|r<<2))<<2},t.deinterleave3=function(e,t){return(e=1023&((e=4278190335&((e=251719695&((e=3272356035&((e=e>>>t&1227133513)|e>>>2))|e>>>4))|e>>>8))|e>>>16))<<22>>22},t.nextCombination=function(e){var t=e|e-1;return t+1|(~t&-~t)-1>>>n(e)+1}},qDJ8:function(e,t,r){"use strict";e.exports=function(e){return null!=e&&"object"===typeof e&&!1===Array.isArray(e)}},rQ2n:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("nKUr"),o=r("MX0m"),i=r.n(o);r("q1tI");function a({children:e}){return Object(n.jsxs)("div",{className:"jsx-3621368397 container",children:[e,Object(n.jsx)(i.a,{id:"3621368397",children:[".container.jsx-3621368397{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]})]})}},rhSW:function(e,t){e.exports={0:"NONE",1:"ONE",2:"LINE_LOOP",3:"LINE_STRIP",4:"TRIANGLES",5:"TRIANGLE_STRIP",6:"TRIANGLE_FAN",256:"DEPTH_BUFFER_BIT",512:"NEVER",513:"LESS",514:"EQUAL",515:"LEQUAL",516:"GREATER",517:"NOTEQUAL",518:"GEQUAL",519:"ALWAYS",768:"SRC_COLOR",769:"ONE_MINUS_SRC_COLOR",770:"SRC_ALPHA",771:"ONE_MINUS_SRC_ALPHA",772:"DST_ALPHA",773:"ONE_MINUS_DST_ALPHA",774:"DST_COLOR",775:"ONE_MINUS_DST_COLOR",776:"SRC_ALPHA_SATURATE",1024:"STENCIL_BUFFER_BIT",1028:"FRONT",1029:"BACK",1032:"FRONT_AND_BACK",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",2304:"CW",2305:"CCW",2849:"LINE_WIDTH",2884:"CULL_FACE",2885:"CULL_FACE_MODE",2886:"FRONT_FACE",2928:"DEPTH_RANGE",2929:"DEPTH_TEST",2930:"DEPTH_WRITEMASK",2931:"DEPTH_CLEAR_VALUE",2932:"DEPTH_FUNC",2960:"STENCIL_TEST",2961:"STENCIL_CLEAR_VALUE",2962:"STENCIL_FUNC",2963:"STENCIL_VALUE_MASK",2964:"STENCIL_FAIL",2965:"STENCIL_PASS_DEPTH_FAIL",2966:"STENCIL_PASS_DEPTH_PASS",2967:"STENCIL_REF",2968:"STENCIL_WRITEMASK",2978:"VIEWPORT",3024:"DITHER",3042:"BLEND",3088:"SCISSOR_BOX",3089:"SCISSOR_TEST",3106:"COLOR_CLEAR_VALUE",3107:"COLOR_WRITEMASK",3317:"UNPACK_ALIGNMENT",3333:"PACK_ALIGNMENT",3379:"MAX_TEXTURE_SIZE",3386:"MAX_VIEWPORT_DIMS",3408:"SUBPIXEL_BITS",3410:"RED_BITS",3411:"GREEN_BITS",3412:"BLUE_BITS",3413:"ALPHA_BITS",3414:"DEPTH_BITS",3415:"STENCIL_BITS",3553:"TEXTURE_2D",4352:"DONT_CARE",4353:"FASTEST",4354:"NICEST",5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5124:"INT",5125:"UNSIGNED_INT",5126:"FLOAT",5386:"INVERT",5890:"TEXTURE",6401:"STENCIL_INDEX",6402:"DEPTH_COMPONENT",6406:"ALPHA",6407:"RGB",6408:"RGBA",6409:"LUMINANCE",6410:"LUMINANCE_ALPHA",7680:"KEEP",7681:"REPLACE",7682:"INCR",7683:"DECR",7936:"VENDOR",7937:"RENDERER",7938:"VERSION",9728:"NEAREST",9729:"LINEAR",9984:"NEAREST_MIPMAP_NEAREST",9985:"LINEAR_MIPMAP_NEAREST",9986:"NEAREST_MIPMAP_LINEAR",9987:"LINEAR_MIPMAP_LINEAR",10240:"TEXTURE_MAG_FILTER",10241:"TEXTURE_MIN_FILTER",10242:"TEXTURE_WRAP_S",10243:"TEXTURE_WRAP_T",10497:"REPEAT",10752:"POLYGON_OFFSET_UNITS",16384:"COLOR_BUFFER_BIT",32769:"CONSTANT_COLOR",32770:"ONE_MINUS_CONSTANT_COLOR",32771:"CONSTANT_ALPHA",32772:"ONE_MINUS_CONSTANT_ALPHA",32773:"BLEND_COLOR",32774:"FUNC_ADD",32777:"BLEND_EQUATION_RGB",32778:"FUNC_SUBTRACT",32779:"FUNC_REVERSE_SUBTRACT",32819:"UNSIGNED_SHORT_4_4_4_4",32820:"UNSIGNED_SHORT_5_5_5_1",32823:"POLYGON_OFFSET_FILL",32824:"POLYGON_OFFSET_FACTOR",32854:"RGBA4",32855:"RGB5_A1",32873:"TEXTURE_BINDING_2D",32926:"SAMPLE_ALPHA_TO_COVERAGE",32928:"SAMPLE_COVERAGE",32936:"SAMPLE_BUFFERS",32937:"SAMPLES",32938:"SAMPLE_COVERAGE_VALUE",32939:"SAMPLE_COVERAGE_INVERT",32968:"BLEND_DST_RGB",32969:"BLEND_SRC_RGB",32970:"BLEND_DST_ALPHA",32971:"BLEND_SRC_ALPHA",33071:"CLAMP_TO_EDGE",33170:"GENERATE_MIPMAP_HINT",33189:"DEPTH_COMPONENT16",33306:"DEPTH_STENCIL_ATTACHMENT",33635:"UNSIGNED_SHORT_5_6_5",33648:"MIRRORED_REPEAT",33901:"ALIASED_POINT_SIZE_RANGE",33902:"ALIASED_LINE_WIDTH_RANGE",33984:"TEXTURE0",33985:"TEXTURE1",33986:"TEXTURE2",33987:"TEXTURE3",33988:"TEXTURE4",33989:"TEXTURE5",33990:"TEXTURE6",33991:"TEXTURE7",33992:"TEXTURE8",33993:"TEXTURE9",33994:"TEXTURE10",33995:"TEXTURE11",33996:"TEXTURE12",33997:"TEXTURE13",33998:"TEXTURE14",33999:"TEXTURE15",34e3:"TEXTURE16",34001:"TEXTURE17",34002:"TEXTURE18",34003:"TEXTURE19",34004:"TEXTURE20",34005:"TEXTURE21",34006:"TEXTURE22",34007:"TEXTURE23",34008:"TEXTURE24",34009:"TEXTURE25",34010:"TEXTURE26",34011:"TEXTURE27",34012:"TEXTURE28",34013:"TEXTURE29",34014:"TEXTURE30",34015:"TEXTURE31",34016:"ACTIVE_TEXTURE",34024:"MAX_RENDERBUFFER_SIZE",34041:"DEPTH_STENCIL",34055:"INCR_WRAP",34056:"DECR_WRAP",34067:"TEXTURE_CUBE_MAP",34068:"TEXTURE_BINDING_CUBE_MAP",34069:"TEXTURE_CUBE_MAP_POSITIVE_X",34070:"TEXTURE_CUBE_MAP_NEGATIVE_X",34071:"TEXTURE_CUBE_MAP_POSITIVE_Y",34072:"TEXTURE_CUBE_MAP_NEGATIVE_Y",34073:"TEXTURE_CUBE_MAP_POSITIVE_Z",34074:"TEXTURE_CUBE_MAP_NEGATIVE_Z",34076:"MAX_CUBE_MAP_TEXTURE_SIZE",34338:"VERTEX_ATTRIB_ARRAY_ENABLED",34339:"VERTEX_ATTRIB_ARRAY_SIZE",34340:"VERTEX_ATTRIB_ARRAY_STRIDE",34341:"VERTEX_ATTRIB_ARRAY_TYPE",34342:"CURRENT_VERTEX_ATTRIB",34373:"VERTEX_ATTRIB_ARRAY_POINTER",34466:"NUM_COMPRESSED_TEXTURE_FORMATS",34467:"COMPRESSED_TEXTURE_FORMATS",34660:"BUFFER_SIZE",34661:"BUFFER_USAGE",34816:"STENCIL_BACK_FUNC",34817:"STENCIL_BACK_FAIL",34818:"STENCIL_BACK_PASS_DEPTH_FAIL",34819:"STENCIL_BACK_PASS_DEPTH_PASS",34877:"BLEND_EQUATION_ALPHA",34921:"MAX_VERTEX_ATTRIBS",34922:"VERTEX_ATTRIB_ARRAY_NORMALIZED",34930:"MAX_TEXTURE_IMAGE_UNITS",34962:"ARRAY_BUFFER",34963:"ELEMENT_ARRAY_BUFFER",34964:"ARRAY_BUFFER_BINDING",34965:"ELEMENT_ARRAY_BUFFER_BINDING",34975:"VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",35040:"STREAM_DRAW",35044:"STATIC_DRAW",35048:"DYNAMIC_DRAW",35632:"FRAGMENT_SHADER",35633:"VERTEX_SHADER",35660:"MAX_VERTEX_TEXTURE_IMAGE_UNITS",35661:"MAX_COMBINED_TEXTURE_IMAGE_UNITS",35663:"SHADER_TYPE",35664:"FLOAT_VEC2",35665:"FLOAT_VEC3",35666:"FLOAT_VEC4",35667:"INT_VEC2",35668:"INT_VEC3",35669:"INT_VEC4",35670:"BOOL",35671:"BOOL_VEC2",35672:"BOOL_VEC3",35673:"BOOL_VEC4",35674:"FLOAT_MAT2",35675:"FLOAT_MAT3",35676:"FLOAT_MAT4",35678:"SAMPLER_2D",35680:"SAMPLER_CUBE",35712:"DELETE_STATUS",35713:"COMPILE_STATUS",35714:"LINK_STATUS",35715:"VALIDATE_STATUS",35716:"INFO_LOG_LENGTH",35717:"ATTACHED_SHADERS",35718:"ACTIVE_UNIFORMS",35719:"ACTIVE_UNIFORM_MAX_LENGTH",35720:"SHADER_SOURCE_LENGTH",35721:"ACTIVE_ATTRIBUTES",35722:"ACTIVE_ATTRIBUTE_MAX_LENGTH",35724:"SHADING_LANGUAGE_VERSION",35725:"CURRENT_PROGRAM",36003:"STENCIL_BACK_REF",36004:"STENCIL_BACK_VALUE_MASK",36005:"STENCIL_BACK_WRITEMASK",36006:"FRAMEBUFFER_BINDING",36007:"RENDERBUFFER_BINDING",36048:"FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",36049:"FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",36050:"FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",36051:"FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",36053:"FRAMEBUFFER_COMPLETE",36054:"FRAMEBUFFER_INCOMPLETE_ATTACHMENT",36055:"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",36057:"FRAMEBUFFER_INCOMPLETE_DIMENSIONS",36061:"FRAMEBUFFER_UNSUPPORTED",36064:"COLOR_ATTACHMENT0",36096:"DEPTH_ATTACHMENT",36128:"STENCIL_ATTACHMENT",36160:"FRAMEBUFFER",36161:"RENDERBUFFER",36162:"RENDERBUFFER_WIDTH",36163:"RENDERBUFFER_HEIGHT",36164:"RENDERBUFFER_INTERNAL_FORMAT",36168:"STENCIL_INDEX8",36176:"RENDERBUFFER_RED_SIZE",36177:"RENDERBUFFER_GREEN_SIZE",36178:"RENDERBUFFER_BLUE_SIZE",36179:"RENDERBUFFER_ALPHA_SIZE",36180:"RENDERBUFFER_DEPTH_SIZE",36181:"RENDERBUFFER_STENCIL_SIZE",36194:"RGB565",36336:"LOW_FLOAT",36337:"MEDIUM_FLOAT",36338:"HIGH_FLOAT",36339:"LOW_INT",36340:"MEDIUM_INT",36341:"HIGH_INT",36346:"SHADER_COMPILER",36347:"MAX_VERTEX_UNIFORM_VECTORS",36348:"MAX_VARYING_VECTORS",36349:"MAX_FRAGMENT_UNIFORM_VECTORS",37440:"UNPACK_FLIP_Y_WEBGL",37441:"UNPACK_PREMULTIPLY_ALPHA_WEBGL",37442:"CONTEXT_LOST_WEBGL",37443:"UNPACK_COLORSPACE_CONVERSION_WEBGL",37444:"BROWSER_DEFAULT_WEBGL"}},"rr/c":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Bus",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"connectSize",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"createSurface",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"listSurfaces",{enumerable:!0,get:function(){return i.list}}),Object.defineProperty(t,"GLSL",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"LinearCopy",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"NearestCopy",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"Node",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Shaders",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"Uniform",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Visitor",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"VisitorLogger",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Visitors",{enumerable:!0,get:function(){return v.default}}),t.Backbuffer=void 0;var n=m(r("dLFq")),o=m(r("5rLZ")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("dGjt")),a=m(r("dEu3")),c=m(r("9tIV")),s=m(r("FRc1")),l=m(r("JwSf")),f=m(r("laZL")),u=m(r("nXQg")),p=m(r("8e5R")),d=m(r("UWhB")),v=m(r("38ab"));function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function m(e){return e&&e.__esModule?e:{default:e}}r("y0kB");t.Backbuffer="Backbuffer"},st01:function(e,t,r){var n=r("AAS3"),o=r("6v/u");e.exports=function(e){for(var t=Array.isArray(e)?e:n(e),r=0;r<t.length;r++){var i=t[r];if("preprocessor"===i.type){var a=i.data.match(/\#define\s+SHADER_NAME(_B64)?\s+(.+)$/);if(a&&a[2]){var c=a[1],s=a[2];return(c?o(s):s).trim()}}}}},szI9:function(e,t){e.exports=function(e,t){var r={identity:t},n=e.valueOf;return Object.defineProperty(e,"valueOf",{value:function(e){return e!==t?n.apply(this,arguments):r},writable:!0}),r}},tCpK:function(e,t,r){var n=r("rhSW");e.exports=function(e){return n[e]}},tbvF:function(e,t,r){var n=r("IDFI"),o=r("BEtg"),i="undefined"!==typeof Float64Array;function a(e,t){return e[0]-t[0]}function c(){var e,t=this.stride,r=new Array(t.length);for(e=0;e<r.length;++e)r[e]=[Math.abs(t[e]),e];r.sort(a);var n=new Array(r.length);for(e=0;e<n.length;++e)n[e]=r[e][1];return n}function s(e,t){var r=["View",t,"d",e].join("");t<0&&(r="View_Nil"+e);var o="generic"===e;if(-1===t){var i="function "+r+"(a){this.data=a;};var proto="+r+".prototype;proto.dtype='"+e+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+r+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+r+"(a){return new "+r+"(a);}";return new Function(i)()}if(0===t){i="function "+r+"(a,d) {this.data = a;this.offset = d};var proto="+r+".prototype;proto.dtype='"+e+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+r+"_copy() {return new "+r+"(this.data,this.offset)};proto.pick=function "+r+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+r+"_get(){return "+(o?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+r+"_set(v){return "+(o?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+r+"(a,b,c,d){return new "+r+"(a,d)}";return new Function("TrivialArray",i)(l[e][0])}i=["'use strict'"];var a=n(t),s=a.map((function(e){return"i"+e})),f="this.offset+"+a.map((function(e){return"this.stride["+e+"]*i"+e})).join("+"),u=a.map((function(e){return"b"+e})).join(","),p=a.map((function(e){return"c"+e})).join(",");i.push("function "+r+"(a,"+u+","+p+",d){this.data=a","this.shape=["+u+"]","this.stride=["+p+"]","this.offset=d|0}","var proto="+r+".prototype","proto.dtype='"+e+"'","proto.dimension="+t),i.push("Object.defineProperty(proto,'size',{get:function "+r+"_size(){return "+a.map((function(e){return"this.shape["+e+"]"})).join("*"),"}})"),1===t?i.push("proto.order=[0]"):(i.push("Object.defineProperty(proto,'order',{get:"),t<4?(i.push("function "+r+"_order(){"),2===t?i.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):3===t&&i.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):i.push("ORDER})")),i.push("proto.set=function "+r+"_set("+s.join(",")+",v){"),o?i.push("return this.data.set("+f+",v)}"):i.push("return this.data["+f+"]=v}"),i.push("proto.get=function "+r+"_get("+s.join(",")+"){"),o?i.push("return this.data.get("+f+")}"):i.push("return this.data["+f+"]}"),i.push("proto.index=function "+r+"_index(",s.join(),"){return "+f+"}"),i.push("proto.hi=function "+r+"_hi("+s.join(",")+"){return new "+r+"(this.data,"+a.map((function(e){return["(typeof i",e,"!=='number'||i",e,"<0)?this.shape[",e,"]:i",e,"|0"].join("")})).join(",")+","+a.map((function(e){return"this.stride["+e+"]"})).join(",")+",this.offset)}");var d=a.map((function(e){return"a"+e+"=this.shape["+e+"]"})),v=a.map((function(e){return"c"+e+"=this.stride["+e+"]"}));i.push("proto.lo=function "+r+"_lo("+s.join(",")+"){var b=this.offset,d=0,"+d.join(",")+","+v.join(","));for(var h=0;h<t;++h)i.push("if(typeof i"+h+"==='number'&&i"+h+">=0){d=i"+h+"|0;b+=c"+h+"*d;a"+h+"-=d}");i.push("return new "+r+"(this.data,"+a.map((function(e){return"a"+e})).join(",")+","+a.map((function(e){return"c"+e})).join(",")+",b)}"),i.push("proto.step=function "+r+"_step("+s.join(",")+"){var "+a.map((function(e){return"a"+e+"=this.shape["+e+"]"})).join(",")+","+a.map((function(e){return"b"+e+"=this.stride["+e+"]"})).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(h=0;h<t;++h)i.push("if(typeof i"+h+"==='number'){d=i"+h+"|0;if(d<0){c+=b"+h+"*(a"+h+"-1);a"+h+"=ceil(-a"+h+"/d)}else{a"+h+"=ceil(a"+h+"/d)}b"+h+"*=d}");i.push("return new "+r+"(this.data,"+a.map((function(e){return"a"+e})).join(",")+","+a.map((function(e){return"b"+e})).join(",")+",c)}");var m=new Array(t),g=new Array(t);for(h=0;h<t;++h)m[h]="a[i"+h+"]",g[h]="b[i"+h+"]";i.push("proto.transpose=function "+r+"_transpose("+s+"){"+s.map((function(e,t){return e+"=("+e+"===undefined?"+t+":"+e+"|0)"})).join(";"),"var a=this.shape,b=this.stride;return new "+r+"(this.data,"+m.join(",")+","+g.join(",")+",this.offset)}"),i.push("proto.pick=function "+r+"_pick("+s+"){var a=[],b=[],c=this.offset");for(h=0;h<t;++h)i.push("if(typeof i"+h+"==='number'&&i"+h+">=0){c=(c+this.stride["+h+"]*i"+h+")|0}else{a.push(this.shape["+h+"]);b.push(this.stride["+h+"])}");return i.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),i.push("return function construct_"+r+"(data,shape,stride,offset){return new "+r+"(data,"+a.map((function(e){return"shape["+e+"]"})).join(",")+","+a.map((function(e){return"stride["+e+"]"})).join(",")+",offset)}"),new Function("CTOR_LIST","ORDER",i.join("\n"))(l[e],c)}var l={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};e.exports=function(e,t,r,n){if(void 0===e)return(0,l.array[0])([]);"number"===typeof e&&(e=[e]),void 0===t&&(t=[e.length]);var a=t.length;if(void 0===r){r=new Array(a);for(var c=a-1,f=1;c>=0;--c)r[c]=f,f*=t[c]}if(void 0===n){n=0;for(c=0;c<a;++c)r[c]<0&&(n-=(t[c]-1)*r[c])}for(var u=function(e){if(o(e))return"buffer";if(i)switch(Object.prototype.toString.call(e)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(e)?"array":"generic"}(e),p=l[u];p.length<=a+1;)p.push(s(u,p.length-1));return(0,p[a+1])(e,t,r,n)}},v25H:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=s(r("17x9")),i=s(r("QLaP")),a=s(r("Cz5J")),c=s(r("Ry8g"));function s(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h={onContextCreate:o.default.func.isRequired,onContextFailure:o.default.func.isRequired,onContextLost:o.default.func.isRequired,onContextRestored:o.default.func.isRequired,webglContextAttributes:o.default.object,width:o.default.number.isRequired,height:o.default.number.isRequired,style:o.default.object,pixelRatio:o.default.number,version:o.default.string};class m extends n.Component{render(){const{error:e}=this.props;let t=String(e.rawError||e.message||e),r=String(e.longMessage||e.rawError||"");return n.default.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,padding:"1em",background:"#a00",color:"#fff",fontSize:"12px",lineHeight:"1.2em",fontStyle:"normal",fontWeight:"normal",fontFamily:"monospace",overflow:"auto"}},n.default.createElement("div",{style:{fontWeight:"bold",marginBottom:"1em"}},t),n.default.createElement("div",{style:{whiteSpace:"pre"}},r))}}class g extends n.Component{constructor(...e){super(...e),v(this,"state",{error:null}),v(this,"webglContextAttributes",void 0),v(this,"canvas",void 0),v(this,"gl",void 0),v(this,"_onContextLost",(e=>{e.preventDefault(),this.gl=null,this.props.onContextLost()})),v(this,"_onContextRestored",(()=>{this.gl=this._createContext(),this.props.onContextRestored(this.gl)})),v(this,"onRef",(e=>{this.canvas=e})),v(this,"debugError",null),v(this,"afterDraw",null)}componentDidMount(){const{onContextCreate:e,onContextFailure:t}=this.props,r=this._createContext();if(r){this.gl=r,e(r);const{canvas:t}=this;(0,i.default)(t,"canvas is not settled in GLViewDOM#componentDidMount"),t.addEventListener("webglcontextlost",this._onContextLost),t.addEventListener("webglcontextrestored",this._onContextRestored)}else t(new Error("no-webgl-context"))}componentWillUnmount(){this.gl&&((0,c.default)(this.gl),this.gl=null);const{canvas:e}=this;e&&(e.removeEventListener("webglcontextlost",this._onContextLost),e.removeEventListener("webglcontextrestored",this._onContextRestored))}render(){const{error:e}=this.state;let t=this.props,{width:r,height:o,pixelRatio:i,style:a,debug:c,version:s}=t,l=d(t,["width","height","pixelRatio","style","debug","version"]);i||(i=Number("object"===typeof window&&window.devicePixelRatio||1));for(let n in h)l.hasOwnProperty(n)&&delete l[n];return n.default.createElement("span",{style:p(p({position:"relative"},a),{},{display:"inline-block",width:r,height:o})},n.default.createElement("canvas",f({ref:this.onRef,style:{width:r,height:o},width:r*i,height:o*i},l)),e?n.default.createElement(m,{error:e}):null)}_createContext(){const{webglContextAttributes:e,debug:t,version:r}=this.props,n=(0,a.default)(this.canvas,t?p(p({},e),{},{preserveDrawingBuffer:!0}):e,r||"auto");return this.webglContextAttributes=e||{},n}captureAsDataURL(...e){return this.webglContextAttributes.preserveDrawingBuffer||console.warn("Surface#captureAsDataURL is likely to not work if you don't define webglContextAttributes={{ preserveDrawingBuffer: true }}"),(0,i.default)(this.canvas,"canvas is no longer available"),this.canvas.toDataURL(...e)}captureAsBlob(...e){return this.webglContextAttributes.preserveDrawingBuffer||console.warn("Surface#captureAsBlob is likely to not work if you don't define webglContextAttributes={{ preserveDrawingBuffer: true }}"),Promise.resolve().then((()=>new Promise(((t,r)=>this.canvas?this.canvas.toBlob(t,...e):r(new Error("canvas is no longer available"))))))}}t.default=g,v(g,"propTypes",h)},vCtr:function(e,t,r){"use strict";e.exports=function(e){return"undefined"!==typeof e&&null!==e&&("object"===typeof e||"function"===typeof e)}},xEkU:function(e,t,r){(function(t){for(var n=r("bQgK"),o="undefined"===typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",c=o["request"+a],s=o["cancel"+a]||o["cancelRequest"+a],l=0;!c&&l<i.length;l++)c=o[i[l]+"Request"+a],s=o[i[l]+"Cancel"+a]||o[i[l]+"CancelRequest"+a];if(!c||!s){var f=0,u=0,p=[];c=function(e){if(0===p.length){var t=n(),r=Math.max(0,16.666666666666668-(t-f));f=r+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(f)}catch(r){setTimeout((function(){throw r}),0)}}),Math.round(r))}return p.push({handle:++u,callback:e,cancelled:!1}),u},s=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return c.call(o,e)},e.exports.cancel=function(){s.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=c,e.cancelAnimationFrame=s}}).call(this,r("ntbh"))},y0kB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r("TGEO"),i=(n=r("O8XB"))&&n.__esModule?n:{default:n};class a extends o.WebGLTextureLoaderSyncHashCache{constructor(e){super(e),function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"floatSupported",void 0),this.floatSupported=e.getExtension("OES_texture_float_linear")}canLoad(e){return e.shape&&e.data&&e.stride}inputHash(e){return e}getNoCache(e){const{gl:t}=this,r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const[n,o]=e.shape;return(0,i.default)(t,r,e,this.floatSupported),{texture:r,width:n,height:o}}update(e){const{gl:t}=this,{texture:r}=this.get(e);t.bindTexture(t.TEXTURE_2D,r),(0,i.default)(t,r,e,this.floatSupported)}}o.globalRegistry.add(a);var c=a;t.default=c},z08I:function(e,t,r){"use strict";var n=r("MAJC");function o(e,t){for(var r in t)i(t,r)&&(e[r]=t[r])}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e){n(e)||(e={});for(var t=arguments.length,r=1;r<t;r++){var i=arguments[r];n(i)&&o(e,i)}return e}},zqV6:function(e,t,r){"use strict";(function(e){var n=r("pIo5"),o=r("hK8l"),i=r("HDXh").Buffer;e.__TYPEDARRAY_POOL||(e.__TYPEDARRAY_POOL={UINT8:o([32,0]),UINT16:o([32,0]),UINT32:o([32,0]),BIGUINT64:o([32,0]),INT8:o([32,0]),INT16:o([32,0]),INT32:o([32,0]),BIGINT64:o([32,0]),FLOAT:o([32,0]),DOUBLE:o([32,0]),DATA:o([32,0]),UINT8C:o([32,0]),BUFFER:o([32,0])});var a="undefined"!==typeof Uint8ClampedArray,c="undefined"!==typeof BigUint64Array,s="undefined"!==typeof BigInt64Array,l=e.__TYPEDARRAY_POOL;l.UINT8C||(l.UINT8C=o([32,0])),l.BIGUINT64||(l.BIGUINT64=o([32,0])),l.BIGINT64||(l.BIGINT64=o([32,0])),l.BUFFER||(l.BUFFER=o([32,0]));var f=l.DATA,u=l.BUFFER;function p(e){if(e){var t=e.length||e.byteLength,r=n.log2(t);f[r].push(e)}}function d(e){e=n.nextPow2(e);var t=n.log2(e),r=f[t];return r.length>0?r.pop():new ArrayBuffer(e)}function v(e){return new Uint8Array(d(e),0,e)}function h(e){return new Uint16Array(d(2*e),0,e)}function m(e){return new Uint32Array(d(4*e),0,e)}function g(e){return new Int8Array(d(e),0,e)}function x(e){return new Int16Array(d(2*e),0,e)}function b(e){return new Int32Array(d(4*e),0,e)}function y(e){return new Float32Array(d(4*e),0,e)}function w(e){return new Float64Array(d(8*e),0,e)}function _(e){return a?new Uint8ClampedArray(d(e),0,e):v(e)}function S(e){return c?new BigUint64Array(d(8*e),0,e):null}function E(e){return s?new BigInt64Array(d(8*e),0,e):null}function O(e){return new DataView(d(e),0,e)}function R(e){e=n.nextPow2(e);var t=n.log2(e),r=u[t];return r.length>0?r.pop():new i(e)}t.free=function(e){if(i.isBuffer(e))u[n.log2(e.length)].push(e);else{if("[object ArrayBuffer]"!==Object.prototype.toString.call(e)&&(e=e.buffer),!e)return;var t=e.length||e.byteLength,r=0|n.log2(t);f[r].push(e)}},t.freeUint8=t.freeUint16=t.freeUint32=t.freeBigUint64=t.freeInt8=t.freeInt16=t.freeInt32=t.freeBigInt64=t.freeFloat32=t.freeFloat=t.freeFloat64=t.freeDouble=t.freeUint8Clamped=t.freeDataView=function(e){p(e.buffer)},t.freeArrayBuffer=p,t.freeBuffer=function(e){u[n.log2(e.length)].push(e)},t.malloc=function(e,t){if(void 0===t||"arraybuffer"===t)return d(e);switch(t){case"uint8":return v(e);case"uint16":return h(e);case"uint32":return m(e);case"int8":return g(e);case"int16":return x(e);case"int32":return b(e);case"float":case"float32":return y(e);case"double":case"float64":return w(e);case"uint8_clamped":return _(e);case"bigint64":return E(e);case"biguint64":return S(e);case"buffer":return R(e);case"data":case"dataview":return O(e);default:return null}return null},t.mallocArrayBuffer=d,t.mallocUint8=v,t.mallocUint16=h,t.mallocUint32=m,t.mallocInt8=g,t.mallocInt16=x,t.mallocInt32=b,t.mallocFloat32=t.mallocFloat=y,t.mallocFloat64=t.mallocDouble=w,t.mallocUint8Clamped=_,t.mallocBigUint64=S,t.mallocBigInt64=E,t.mallocDataView=O,t.mallocBuffer=R,t.clearCache=function(){for(var e=0;e<32;++e)l.UINT8[e].length=0,l.UINT16[e].length=0,l.UINT32[e].length=0,l.INT8[e].length=0,l.INT16[e].length=0,l.INT32[e].length=0,l.FLOAT[e].length=0,l.DOUBLE[e].length=0,l.BIGUINT64[e].length=0,l.BIGINT64[e].length=0,l.UINT8C[e].length=0,f[e].length=0,u[e].length=0}}).call(this,r("ntbh"))}}]);