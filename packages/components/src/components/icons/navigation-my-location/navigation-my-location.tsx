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
  tag: 'scale-icon-navigation-my-location',
  styleUrl: '../../icon/icon.css'
})
export class NavigationMyLocation {
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
            {this.selected ? (<g><path d="M12 1a.75.75 0 01.75.75v1.79a8.5 8.5 0 017.71 7.71h1.79a.75.75 0 110 1.5h-1.79a8.5 8.5 0 01-7.71 7.71v1.79a.75.75 0 11-1.5 0v-1.79a8.5 8.5 0 01-7.71-7.71H1.75a.75.75 0 110-1.5h1.79a8.5 8.5 0 017.71-7.71V1.75A.75.75 0 0112 1zm0 9a2 2 0 100 4 2 2 0 000-4z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 1c.367 0 .691.294.743.651l.007.099v1.8a8.448 8.448 0 017.674 7.44l.026.26h1.8c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007h-1.8a8.448 8.448 0 01-7.44 7.674l-.26.026v1.8c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651l-.007-.099v-1.8a8.448 8.448 0 01-7.674-7.44l-.026-.26h-1.8c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h1.8a8.448 8.448 0 017.44-7.674l.26-.026v-1.8c0-.4.35-.75.75-.75zm0 4c-3.85 0-7 3.15-7 7s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7zm0 5a2 2 0 110 4 2 2 0 010-4z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
