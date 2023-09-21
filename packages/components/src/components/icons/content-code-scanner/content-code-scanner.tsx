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
  tag: 'scale-icon-content-code-scanner',
  styleUrl: '../../icon/icon.css'
})
export class ContentCodeScanner {
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
            {this.selected ? (<g><path d="M2 21.5h9v-9H2v9zM3.5 14h6v6h-6v-6zM5 18.5h3v-3H5v3zM2 11h9V2H2v9zm1.5-7.5h6v6h-6v-6zM5 8h3V5H5v3zm12 11.25v2.25h4.5V17h-2.25v2.25H17zM12.5 2v9h9V2h-9zM20 9.5h-6v-6h6v6zM18.5 5h-3v3h3V5zM17 12.5h-2.25v2.25H12.5V17h2.25v2.25H17V17h2.25v-2.25H17V12.5zm-4.5 9h2.25v-2.25H12.5v2.25zm6.75-6.75h2.25V12.5h-2.25v2.25z" fill-rule="evenodd"></path></g>) : (<g><path d="M2 21.5h9v-9H2v9zM3.5 14h6v6h-6v-6zM5 18.5h3v-3H5v3zM2 11h9V2H2v9zm1.5-7.5h6v6h-6v-6zM5 8h3V5H5v3zm12 11.25v2.25h4.5V17h-2.25v2.25H17zM12.5 2v9h9V2h-9zM20 9.5h-6v-6h6v6zM18.5 5h-3v3h3V5zM17 12.5h-2.25v2.25H12.5V17h2.25v2.25H17V17h2.25v-2.25H17V12.5zm-4.5 9h2.25v-2.25H12.5v2.25zm6.75-6.75h2.25V12.5h-2.25v2.25z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
