import{r as t,h as i,a as s,g as e}from"./p-d52b3602.js";const a=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{},this.focusable?{tabindex:0}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},i("g",null,i("path",this.selected?{d:"M12 19a7 7 0 110-14 7 7 0 010 14zM2 2v17a3 3 0 003 3h14a3 3 0 003-3V2H2zm12.5 11.25a1.25 1.25 0 11.001-2.5 1.25 1.25 0 010 2.5zm-5 0a1.25 1.25 0 11.001-2.5 1.25 1.25 0 010 2.5zm3.25-6.693V8.5h-1.5V6.557C8.573 6.925 6.5 9.223 6.5 12c0 2.777 2.072 5.075 4.75 5.443V15.5h1.5v1.943c2.678-.368 4.75-2.666 4.75-5.443 0-2.777-2.072-5.075-4.75-5.443z","fill-rule":"evenodd"}:{d:"M14.5 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm-5 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.75-6.693V8.5h1.5V6.557c2.678.368 4.75 2.666 4.75 5.443 0 2.777-2.072 5.075-4.75 5.443V15.5h-1.5v1.943C8.573 17.075 6.5 14.777 6.5 12c0-2.777 2.072-5.075 4.75-5.443zM12 19a7 7 0 100-14 7 7 0 000 14zm8.5 0c0 .827-.672 1.5-1.5 1.5H5c-.827 0-1.5-.673-1.5-1.5V3.5h17V19zM2 2v17a3 3 0 003 3h14a3 3 0 003-3V2H2z","fill-rule":"evenodd"})))))}get hostElement(){return e(this)}};a.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{a as scale_icon_home_power_socket}