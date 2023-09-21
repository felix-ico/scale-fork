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
  tag: 'scale-icon-t-product-magenta-cloud',
  styleUrl: '../../icon/icon.css'
})
export class TProductMagentaCloud {
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
            {this.selected ? (<g><path d="M13.5 3.7c1.9 0 3.6.65 4.95 1.8 1 .85 1.8 1.95 2.25 3.25 1.85.95 3.05 2.95 3.05 5.05 0 3.15-2.6 5.75-5.75 5.75-.5 0-1-.05-1.5-.2a8.77 8.77 0 01-3.75 1.538V15h3.3L12 10l-4.05 5h3.3v6a8.962 8.962 0 01-5.6-2c-1.15.1-2.35-.25-3.35-1-1.25-.95-2.05-2.4-2.05-4.1 0-1.9 1.05-3.6 2.7-4.5C3.2 7.05 5.2 5.25 7.6 5.25c.35 0 .75.05 1.1.15 1.35-1.1 3.05-1.7 4.8-1.7z" fill-rule="evenodd"></path></g>) : (<g><defs><path d="M20.7 8.75c-.45-1.3-1.25-2.4-2.25-3.25-1.35-1.15-3.05-1.8-4.95-1.8-1.75 0-3.45.6-4.8 1.7-.35-.1-.75-.15-1.1-.15-2.4 0-4.4 1.8-4.65 4.15-1.65.9-2.7 2.6-2.7 4.5 0 1.7.8 3.15 2.05 4.1 1 .75 2.2 1.1 3.35 1 1.6 1.3 3.6 2 5.65 2 1.9 0 3.65-.55 5.2-1.65.5.15 1 .2 1.5.2 3.15 0 5.75-2.6 5.75-5.75 0-2.1-1.2-4.1-3.05-5.05zm-2.7 9.3c-.9 0-1.55-.3-1.8-.4-.3.2-1.3 1.25-3.45 1.7V15h3.3L12 10l-4.05 5h3.3v4.5c-.85 0-1.65-.15-2.45-.45a7.49 7.49 0 01-2.65-1.65c-.6.05-1.95.3-3.25-.9-.7-.65-1.2-1.6-1.2-2.65 0-2.75 2.6-3.5 2.65-3.55.05-.2-.2-1.65 1.1-2.8C6.4 6.7 7.7 6.45 9 7c1.55-1.55 3.35-1.9 4.45-1.9 1.5 0 2.85.5 3.95 1.4 1.5 1.25 1.9 2.85 2 3.2 0 0 2.8 1 2.8 4 .05 2.45-1.85 4.35-4.2 4.35z" id="a"></path></defs><use xlinkHref="#a" fill-rule="evenodd"></use></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
