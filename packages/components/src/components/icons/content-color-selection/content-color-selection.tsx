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
  tag: 'scale-icon-content-color-selection',
  styleUrl: '../../icon/icon.css'
})
export class ContentColorSelection {
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
            {this.selected ? (<g><path d="M20.5 19c0 .827-.673 1.5-1.5 1.5h-8.394l11.564-6.677-3.31-5.733-.866 1.5 2.128 3.684-8.981 5.185 7.004-12.131L12.5 3.069v1.732l3.596 2.076L11 15.703V2H2v17c0 1.654 1.345 3 3 3h14c1.654 0 3-1.346 3-3v-3.347l-1.5.867V19zm-12.94-.44a1.5 1.5 0 11-2.121-2.12 1.5 1.5 0 012.121 2.12z" fill-rule="evenodd"></path></g>) : (<g><path d="M20.5 19c0 .827-.673 1.5-1.5 1.5h-8.394l11.564-6.677-3.31-5.733-.866 1.5 2.128 3.684-8.981 5.185 7.004-12.131L12.5 3.069v1.732l3.596 2.076L11 15.703V2H2v17c0 1.654 1.345 3 3 3h14c1.654 0 3-1.346 3-3v-3.347l-1.5.867V19zm-12.94-.44a1.5 1.5 0 11-2.121-2.12 1.5 1.5 0 012.121 2.12z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
