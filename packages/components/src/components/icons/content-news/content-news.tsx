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
  tag: 'scale-icon-content-news',
  styleUrl: '../../icon/icon.css'
})
export class ContentNews {
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
            {this.selected ? (<g><path d="M22.5 3v15.5a3 3 0 01-3 3h-15a3 3 0 01-3-3V3h21zm-4.75 13h-4a.75.75 0 000 1.5h4a.75.75 0 100-1.5zM11 11H5.5v6.5H11V11zm6.75 2.5h-4a.75.75 0 100 1.5h4a.75.75 0 100-1.5zm0-2.5h-4a.75.75 0 000 1.5h4a.75.75 0 100-1.5zm.75-4h-13v2h13V7z" fill-rule="evenodd"></path></g>) : (<g><path d="M22.5 3v15.5a3.01 3.01 0 01-2.824 2.995l-.176.005h-15a3.01 3.01 0 01-2.995-2.824L1.5 18.5V3h21zM21 4.5H3v14c0 .8.576 1.423 1.352 1.493L4.5 20h15c.8 0 1.423-.576 1.493-1.352L21 18.5v-14zM17.75 16c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007h-4c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L13.75 16h4zM11 11v6.5H5.5V11H11zm6.75 2.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L17.75 15h-4c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h4zm0-2.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007h-4c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L13.75 11h4zm.75-4v2h-13V7h13z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
