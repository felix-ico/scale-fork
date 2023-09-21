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
  tag: 'scale-icon-content-country',
  styleUrl: '../../icon/icon.css'
})
export class ContentCountry {
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
            {this.selected ? (<g><path d="M5 23a.75.75 0 11-1.5 0V3.325A1.745 1.745 0 014.25 0 1.745 1.745 0 015 3.325zM6.502 3.433c3.416-.71 5.513.352 7.401 1.313 3.397 1.728 4.94 1.922 9.597.042v11.423c0 1.46-.816 3.741-4.75 3.909-2.07.088-3.628-.57-5.527-1.537l-.367-.186c-1.736-.872-3.48-1.611-6.355-.927z" fill-rule="evenodd"></path></g>) : (<g><path d="M13.903 4.746C11.753 3.652 9.332 2.427 5 3.836v-.511A1.745 1.745 0 004.25 0a1.745 1.745 0 00-.75 3.325V23A.75.75 0 105 23v-5.076c4.037-1.459 6.076-.433 8.223.66 1.899.965 3.457 1.624 5.527 1.535 3.934-.167 4.75-2.448 4.75-3.908V4.788c-4.657 1.88-6.2 1.686-9.597-.042zM22 16.211c0 2.199-2.359 2.378-3.393 2.404-1.915.05-3.278-.644-4.704-1.369-1.46-.742-3.043-1.548-5.263-1.548-1.052 0-2.247.18-3.64.634V5.418c4.042-1.462 6.075-.427 8.223.665 2.235 1.136 4.54 2.31 8.777.893v9.235z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
