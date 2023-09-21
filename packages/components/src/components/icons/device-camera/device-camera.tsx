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
  tag: 'scale-icon-device-camera',
  styleUrl: '../../icon/icon.css'
})
export class DeviceCamera {
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
            {this.selected ? (<g><path d="M21.78 7L20 8.785V5H2v1.5H.5v4H2V17a3 3 0 003 3h12a3 3 0 003-3v-1.785L21.78 17h1.72V7h-1.72zM9 15.775v-6.55l5 3.275-5 3.275z" fill-rule="evenodd"></path></g>) : (<g><path d="M20 5v3.8L21.8 7h1.7v10h-1.7L20 15.2V17a3.01 3.01 0 01-2.824 2.995L17 20H5a3.01 3.01 0 01-2.995-2.824L2 17v-6.5H.5v-4H2V5h18zm-1.5 1.5h-15V17c0 .8.576 1.423 1.352 1.493L5 18.5h12c.8 0 1.423-.576 1.493-1.352L18.5 17V6.5zM9 9.25l5 3.25-5 3.25v-6.5zm13-.35l-2 2v2.2l2 2V8.9z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
