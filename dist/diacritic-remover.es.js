function e(e){return"string"==typeof e}class t{get(t,r,i){return e(r)&&1===r.length?this.diacriticTrap(t,r):Reflect.get(t,r,i)}has(t,r){return e(r)&&1===r.length||Reflect.has(t,r)}diacriticTrap(e,t){}}class r extends t{diacriticTrap(t,r){const i=t.isUpperCase(r),s=r.toLowerCase(),n=Object.keys(t.dictionary).find(r=>e(t.dictionary[r])&&t.dictionary[r].includes(s));return i&&n?n.toUpperCase():n||r}}class i extends t{diacriticTrap(e,t){const r=e.dictionary[t.toLowerCase()];return r?e.isUpperCase(t)?r.toUpperCase():r:t}}class s extends t{diacriticTrap(e,t){const r=e.dictionary[t.toLowerCase()];return r?r+r.toUpperCase():t}}class n extends t{diacriticTrap(e,t){const r=e.dictionary[t.toLowerCase()];let i="";return r&&(i=e.isUpperCase(t)?r.toUpperCase():r),new RegExp(`[${t}${i}]`,"u")}}class a extends t{diacriticTrap(e,t){return new RegExp(`[${t}${e.insensitiveMatcher[t]||""}]`,"ui")}}class c{constructor(e){const t=e.reduce((e,t)=>(Object.entries(t).forEach(([t,r])=>{if(t in e){const i=r.split("").filter(r=>!e[t].includes(r)).join("");e[t]+=i}else e[t]=r}),e),{});this.dictionary=Object.freeze(t),this.matcher=new Proxy(this,new i),this.insensitiveMatcher=new Proxy(this,new s),this.validator=new Proxy(this,new n),this.insensitiveValidator=new Proxy(this,new a)}matcherBy(e){return[...Object.keys(this.dictionary).filter(t=>e.test(t)).map(e=>this.dictionary[e]),...Object.keys(this.dictionary).filter(t=>e.test(t.toUpperCase())).map(e=>this.dictionary[e.toUpperCase()].toUpperCase())].join("")}replace(e){return e.replace(/./g,e=>this[e])}isUpperCase(e=""){return e.toUpperCase()===e}isLowerCase(e=""){return e.toLowerCase()===e}}var o={a:"áäâàåÄąāãă",e:"éèêëěÊęėēё",i:"íîïi̇řìįī",o:"óôöòøōõơ",u:"úûüùůŭųūư",y:"ýÿŷỳ",n:"ñňŋņń",l:"ḷŀłļĺľ",h:"ḥĥȟħ",c:"çčćĉĊ",g:"ğĝǧģĠġ",s:"şšŝṣșſś","у":"ў","и":"йѝ","е":"ё",d:"đďðḏ",z:"žŻźż",t:"ťțțṭ",w:"ẅŵẃẁ",ae:"æ",ss:"ß","α":"ά","ε":"έ","η":"ή","ι":"ίΐϊ","ο":"ό","υ":"ύΰϋ","ω":"ώ",j:"ĵ",oe:"œ","":"ʰ'ʼ·׳",ii:"î",k:"ķ","к":"ќ","г":"ѓґ",ij:"ĳ",r:"ŕ","і":"ї"};export default class extends c{constructor(...e){return super(e.length?e:[o]),Object.defineProperty(this,"dictionary",{enumerable:!1,configurable:!1}),new Proxy(this,new r)}}
