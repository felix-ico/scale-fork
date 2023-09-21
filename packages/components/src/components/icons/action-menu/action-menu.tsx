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
  tag: 'scale-icon-action-menu',
  styleUrl: '../../icon/icon.css'
})
export class ActionMenu {
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
            {this.selected ? (<g><path d="M14.335 16.055a1.25 1.25 0 01.128 2.494l-.128.006H4.75a1.25 1.25 0 01-.128-2.494l.128-.006h9.585zM19.25 10.5a1.25 1.25 0 01.128 2.494L19.25 13H4.75a1.25 1.25 0 01-.128-2.494l.128-.006h14.5zm0-5.5a1.25 1.25 0 01.128 2.494l-.128.006H4.75a1.25 1.25 0 01-.128-2.494L4.75 5h14.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M14.75 16.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L14.75 18H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h10.5zm5-5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L4.25 11h15.5zm0-5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L19.75 7H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L4.25 5.5h15.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
