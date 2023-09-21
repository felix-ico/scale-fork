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
  tag: 'scale-icon-content-android',
  styleUrl: '../../icon/icon.css'
})
export class ContentAndroid {
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
            {this.selected ? (<g><path d="M5.805 8.22l.002 8.996a1.476 1.476 0 001.479 1.478l1.007.001.001 3.072a1.386 1.386 0 102.772 0v-3.072h1.871l.001 3.071a1.387 1.387 0 002.773 0l-.001-3.07 1.01-.002a1.48 1.48 0 001.48-1.48l-.002-8.997-12.393.002zm9.039-2.746h-.001a.523.523 0 01-.523-.524.528.528 0 01.524-.525.524.524 0 010 1.049zm-5.687.001A.523.523 0 119.16 4.43a.523.523 0 01-.003 1.046zm5.903-2.73l.967-1.768a.192.192 0 10-.337-.185l-.977 1.786a6.655 6.655 0 00-2.717-.57c-.971 0-1.891.203-2.71.566L8.308.794a.192.192 0 10-.337.183l.968 1.765c-1.902.982-3.187 2.85-3.186 4.994h12.488c0-2.145-1.282-4.009-3.181-4.992zm6.446 6.596a1.386 1.386 0 10-2.772.001l.001 5.805a1.385 1.385 0 102.772 0l-.001-5.806zM3.88 7.957a1.385 1.385 0 00-1.386 1.386l.001 5.806a1.384 1.384 0 001.385 1.386h.001c.765 0 1.386-.619 1.386-1.384V9.343c0-.765-.622-1.387-1.387-1.386z" fill-rule="evenodd"></path></g>) : (<g><path d="M5.805 8.22l.002 8.996a1.476 1.476 0 001.479 1.478l1.007.001.001 3.072a1.386 1.386 0 102.772 0v-3.072h1.871l.001 3.071a1.387 1.387 0 002.773 0l-.001-3.07 1.01-.002a1.48 1.48 0 001.48-1.48l-.002-8.997-12.393.002zm9.039-2.746h-.001a.523.523 0 01-.523-.524.528.528 0 01.524-.525.524.524 0 010 1.049zm-5.687.001A.523.523 0 119.16 4.43a.523.523 0 01-.003 1.046zm5.903-2.73l.967-1.768a.192.192 0 10-.337-.185l-.977 1.786a6.655 6.655 0 00-2.717-.57c-.971 0-1.891.203-2.71.566L8.308.794a.192.192 0 10-.337.183l.968 1.765c-1.902.982-3.187 2.85-3.186 4.994h12.488c0-2.145-1.282-4.009-3.181-4.992zm6.446 6.596a1.386 1.386 0 10-2.772.001l.001 5.805a1.385 1.385 0 102.772 0l-.001-5.806zM3.88 7.957a1.385 1.385 0 00-1.386 1.386l.001 5.806a1.384 1.384 0 001.385 1.386h.001c.765 0 1.386-.619 1.386-1.384V9.343c0-.765-.622-1.387-1.387-1.386z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
