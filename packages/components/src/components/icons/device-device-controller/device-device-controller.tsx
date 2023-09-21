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
  tag: 'scale-icon-device-device-controller',
  styleUrl: '../../icon/icon.css'
})
export class DeviceDeviceController {
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
            {this.selected ? (<g><path d="M18.003 7v10.5a6 6 0 01-11.995.225l-.005-.225V7h12zm-6 3.5a3 3 0 100 6 3 3 0 000-6zm0 1.5a1.501 1.501 0 010 3c-.826 0-1.5-.673-1.5-1.5s.674-1.5 1.5-1.5zm0-8.442c1.2 0 2.291.469 3.105 1.23l.17.168-1.106 1.009a3.043 3.043 0 00-4.194-.136l-.143.136-1.107-1.01a4.534 4.534 0 013.276-1.397zm0-3.002a7.52 7.52 0 015.29 2.175l.2.205-1.106 1.009a6.026 6.026 0 00-8.578-.19l-.189.19-1.106-1.009a7.528 7.528 0 015.49-2.38z" fill-rule="evenodd"></path></g>) : (<g><path d="M8.725 4.955l1.107 1.01a3.043 3.043 0 014.336 0l1.107-1.009a4.537 4.537 0 00-6.55 0zM12 2.056c1.725 0 3.279.728 4.383 1.889l1.107-1.009A7.528 7.528 0 0012 .556a7.528 7.528 0 00-5.49 2.38l1.107 1.009A6.033 6.033 0 0112 2.056zM6 7v10.5a6 6 0 0012 0V7H6zm10.5 10.5c0 2.482-2.018 4.5-4.5 4.5a4.505 4.505 0 01-4.5-4.5v-9h9v9zm-4.5-1a3 3 0 100-6 3 3 0 000 6zm0-4.5c.827 0 1.5.673 1.5 1.5S12.827 15 12 15s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
