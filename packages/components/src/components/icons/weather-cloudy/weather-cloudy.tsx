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
  tag: 'scale-icon-weather-cloudy',
  styleUrl: '../../icon/icon.css'
})
export class WeatherCloudy {
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
            {this.selected ? (<g><path d="M10.469 8.3a5.664 5.664 0 015.29 3.608 4.368 4.368 0 012.242 3.81 4.368 4.368 0 01-4.151 4.357l-.211.006H4.81A4.015 4.015 0 01.8 16.07a4.01 4.01 0 011.897-3.405 3.635 3.635 0 013.611-3.256c.23 0 .461.024.697.074A5.659 5.659 0 0110.469 8.3zm9.278 4.646a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.064-.849-.848a.6.6 0 010-.848zM16.601 6.8c1.655 0 3 1.346 3 3 0 1.111-.61 2.08-1.51 2.598a5.558 5.558 0 00-1.379-1.314 6.835 6.835 0 00-2.598-2.947A2.992 2.992 0 0116.6 6.8zm6.25 2.4a.6.6 0 01.097 1.192l-.097.008h-1.2a.6.6 0 01-.097-1.192l.097-.008h1.2zM11.758 4.957a.6.6 0 01.765-.07l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.848-.849a.6.6 0 010-.848zm8.838 0a.6.6 0 01.918.765l-.069.083-.849.849a.596.596 0 01-.848 0 .6.6 0 01-.07-.766l.07-.083.848-.848zM16.601 2.95a.6.6 0 01.592.503l.008.097v1.2a.6.6 0 01-1.192.097L16 4.75v-1.2a.6.6 0 01.6-.6z" fill-rule="evenodd"></path></g>) : (<g><path d="M10.5 8.381a5.577 5.577 0 015.242 3.639A4.246 4.246 0 0118 15.764a4.242 4.242 0 01-4.025 4.23l-.211.006H4.673A3.877 3.877 0 01.8 16.127c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.5 8.381zm0 1.2a4.377 4.377 0 00-2.758.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166A2.677 2.677 0 002 16.127a2.676 2.676 0 002.504 2.668l.169.005h9.09a3.04 3.04 0 003.037-3.036 3.044 3.044 0 00-1.613-2.68l-.178-.088-.243-.11-.082-.253A4.381 4.381 0 0010.5 9.58zm9.246 3.365a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.849-.849a.6.6 0 010-.849zM16.6 6.8c1.654 0 3 1.346 3 3 0 1.132-.63 2.118-1.558 2.63a5.44 5.44 0 00-1.344-1.24 6.765 6.765 0 00-2.628-2.996A2.998 2.998 0 0116.6 6.8zm6.25 2.4a.6.6 0 01.097 1.192l-.097.008h-1.2a.6.6 0 01-.097-1.192l.097-.008h1.2zm-2.254-4.244a.6.6 0 01.917.766l-.069.083-.849.849a.598.598 0 01-.848 0 .6.6 0 01-.07-.766l.07-.083.849-.849zm-8.84 0a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.848-.849a.6.6 0 010-.849zM16.6 2.95a.6.6 0 01.592.503l.008.097v1.2a.6.6 0 01-1.192.097L16 4.75v-1.2a.6.6 0 01.6-.6z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
