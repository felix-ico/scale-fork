import{r as t,h as i,a as s,g as l}from"./p-d52b3602.js";const e=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{},this.focusable?{tabindex:0}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},i("g",null,i("path",this.selected?{d:"M13.768 12l4.116-4.116a1.25 1.25 0 00-1.767-1.768L12 10.232 7.884 6.116a1.25 1.25 0 10-1.767 1.768L10.233 12l-4.116 4.116a1.249 1.249 0 101.767 1.768L12 13.768l4.117 4.116a1.246 1.246 0 001.767 0 1.25 1.25 0 000-1.768L13.768 12z","fill-rule":"evenodd"}:{d:"M12.93 12.402l4.47-4.47a.749.749 0 10-1.062-1.06l-4.47 4.47L7.4 6.871a.749.749 0 10-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 001.06 1.061l4.47-4.47 4.47 4.47a.747.747 0 001.06 0 .75.75 0 000-1.06l-4.47-4.47z","fill-rule":"evenodd"})))))}get hostElement(){return l(this)}};e.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{e as scale_icon_action_close}