/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-weather-cloudy-sleet',
  styleUrl: '../../icon/icon.css'
})
export class WeatherCloudySleet {
  @Element() hostElement: HTMLElement;

  /** (optional) The width and height in pixels */
  @Prop({ reflect: true }) size?: number = 24;
  /** (optional) Sets the icon color via the `fill` attribute */
  @Prop() fill?: string = 'currentColor';
  /** (optional) Alias for `fill` */
  @Prop() color?: string = 'currentColor';
  /** (optional) If `true`, the icon changes visually */
  @Prop({ reflect: true }) selected?: boolean = false;
  /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
  @Prop() decorative?: boolean = false;
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  @Prop() accessibilityTitle?: string;
  /** (optional) If `true` the icon can receive focus */
  @Prop() focusable?: boolean = false;

  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }

  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return (
      <Host>
        <svg class="scale-icon" xmlns="http://www.w3.org/2000/svg" width={this.size} height={this.size} viewBox="0 0 24 24" {...ariaHidden} {...focusable}>
          {this.accessibilityTitle && <title>{this.accessibilityTitle}</title>}
          <g fill={((this.fill === 'currentColor') ? this.color : this.fill)}>
            {this.selected ? (<g><path d="M11.599 19.171a.138.138 0 01.23.077v.046l-.47 3a1.2 1.2 0 01-1.372 1c-.954-.149-1.337-1.29-.713-1.985l.087-.088 2.238-2.05zm-5.079-3.35L7.201 17l.68-1.179 1.04.6-.68 1.178H9.6v1.2H8.24l.68 1.178-1.04.6L7.2 19.4l-.68 1.179-1.04-.6.681-1.18h-1.36V17.6h1.36l-.68-1.18 1.04-.6zm7.356-2.006a.12.12 0 01.197.062l.002.045-.522 3.333a1.302 1.302 0 11-2.256-1.068l.091-.092 2.488-2.28zM10.507 5.95a5.56 5.56 0 015.233 3.674 4.25 4.25 0 012.261 3.753 4.236 4.236 0 01-3.168 4.1l.004-.02.522-3.334a1.42 1.42 0 00-2.243-1.363l-.117.096-2.49 2.281a2.626 2.626 0 00-.283.303l-.12.165L7.7 14.21a1 1 0 00-.881-.06l-.12.058-2.698 1.552a.999.999 0 00-.494.748l-.007.118v.802a3.861 3.861 0 01-2.7-3.683c0-1.4.755-2.684 1.952-3.366.102-1.822 1.608-3.273 3.443-3.273.27 0 .54.033.806.098a5.53 5.53 0 013.505-1.255zm9.24 4.596a.6.6 0 01.765-.069l.083.07.85.848a.6.6 0 01-.775.912l-.074-.064-.849-.848a.6.6 0 010-.849zM16.601 4.4c1.654 0 3 1.345 3 3 0 1.132-.63 2.118-1.558 2.63a5.43 5.43 0 00-1.344-1.24 6.768 6.768 0 00-2.628-2.996 2.997 2.997 0 012.53-1.394zm6.25 2.4a.6.6 0 01.097 1.192L22.85 8h-1.2a.6.6 0 01-.098-1.192l.098-.008h1.2zM11.757 2.556a.6.6 0 01.765-.069l.084.07.849.848a.6.6 0 01-.775.912l-.074-.064-.849-.848a.6.6 0 010-.849zm8.84 0a.6.6 0 01.917.766l-.07.083-.848.848a.596.596 0 01-.849 0 .6.6 0 01-.07-.765l.07-.083.85-.849zM16.6.55a.6.6 0 01.592.503l.008.097v1.2a.6.6 0 01-1.193.097L16 2.35v-1.2a.6.6 0 01.6-.6z" fill-rule="evenodd"></path></g>) : (<g><path d="M11.828 19.294l-.47 3a1.201 1.201 0 01-1.25 1.013l-.122-.013c-.995-.155-1.368-1.392-.626-2.072l2.238-2.05a.138.138 0 01.23.122zM6.52 15.821l.68 1.18.681-1.179 1.04.6L8.24 17.6H9.6v1.2H8.239l.68 1.178-1.039.6L7.2 19.4l-.68 1.18-1.04-.601.681-1.179H4.8v-1.2h1.361l-.68-1.179 1.039-.6zm7.554-1.899l-.522 3.334a1.302 1.302 0 01-1.354 1.098l-.132-.014c-1.078-.168-1.483-1.508-.678-2.245l2.487-2.28a.12.12 0 01.199.107zM10.5 5.982a5.577 5.577 0 015.242 3.638A4.246 4.246 0 0118 13.364a4.24 4.24 0 01-3.273 4.121l.011-.044.2-1.278a3.04 3.04 0 001.862-2.8 3.044 3.044 0 00-1.613-2.68l-.178-.087-.243-.11-.082-.253A4.381 4.381 0 0010.5 7.18a4.377 4.377 0 00-2.757.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166A2.677 2.677 0 002 13.727c0 1.028.584 1.921 1.437 2.368l.163.079v1.272a3.877 3.877 0 01-2.8-3.719c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.5 5.981zm10.012 4.495l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.849-.849a.6.6 0 01.766-.918zM16.6 4.4c1.654 0 3 1.346 3 3 0 1.132-.63 2.118-1.558 2.63a5.44 5.44 0 00-1.344-1.24 6.765 6.765 0 00-2.628-2.996A2.998 2.998 0 0116.6 4.4zm6.25 2.4a.6.6 0 01.097 1.192L22.85 8h-1.2a.6.6 0 01-.097-1.192l.097-.008h1.2zm-1.406-4.244a.6.6 0 01.07.766l-.07.083-.849.849a.598.598 0 01-.848 0 .6.6 0 01-.07-.766l.07-.083.849-.849a.6.6 0 01.848 0zm-8.922-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.848-.849a.6.6 0 01.765-.918zM16.6.55a.6.6 0 01.592.503l.008.097v1.2a.6.6 0 01-1.192.097L16 2.35v-1.2a.6.6 0 01.6-.6z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
