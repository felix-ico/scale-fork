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
  tag: 'scale-icon-t-product-usage',
  styleUrl: '../../icon/icon.css'
})
export class TProductUsage {
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
            {this.selected ? (<g><path d="M12 1c6.05 0 11 4.95 11 11s-4.95 11-11 11S1 18.05 1 12 5.95 1 12 1zM6.45 6.45a.722.722 0 01.965-.074l.085.074 4.1 4.1c.15-.05.25-.05.4-.05.85 0 1.5.65 1.5 1.5s-.65 1.5-1.5 1.5-1.5-.65-1.5-1.5c0-.113 0-.197.021-.295l.029-.105-4.1-4.1c-.3-.3-.3-.75 0-1.05zm-1.1 2.1l2.3 2.3c-.08.28-.128.592-.144.91L7.5 12h-3a7.28 7.28 0 01.706-3.172l.144-.278zM12 4.5a7.49 7.49 0 017.496 7.257L19.5 12h-3c0-2.5-2-4.5-4.5-4.5-.32 0-.64.032-.934.096l-.216.054-2.3-2.3c1-.55 2.2-.85 3.45-.85z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 1c6.05 0 11 4.95 11 11s-4.95 11-11 11S1 18.05 1 12 5.95 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zM6.45 6.45a.722.722 0 01.965-.074l.085.074 4.1 4.1c.15-.05.25-.05.4-.05.85 0 1.5.65 1.5 1.5s-.65 1.5-1.5 1.5-1.5-.65-1.5-1.5c0-.113 0-.197.021-.295l.029-.105-4.1-4.1c-.3-.3-.3-.75 0-1.05zm-1.1 2.1l2.3 2.3c-.08.28-.128.592-.144.91L7.5 12h-3a7.28 7.28 0 01.706-3.172l.144-.278zM12 4.5a7.49 7.49 0 017.496 7.257L19.5 12h-3c0-2.5-2-4.5-4.5-4.5-.32 0-.64.032-.934.096l-.216.054-2.3-2.3c1-.55 2.2-.85 3.45-.85z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
