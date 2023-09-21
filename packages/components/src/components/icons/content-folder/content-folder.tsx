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
  tag: 'scale-icon-content-folder',
  styleUrl: '../../icon/icon.css'
})
export class ContentFolder {
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
            {this.selected ? (<g><defs><path d="M11.5 4.5c-.3 0-.6-.15-.85-.35l-.45-.45c-.7-.75-1.65-1.2-2.7-1.2H1V19c0 1.65 1.35 3 3 3h16c1.65 0 3-1.35 3-3V4.5H11.5z" id="a"></path></defs><use xlinkHref="#a" fill-rule="evenodd"></use></g>) : (<g><defs><path d="M7.5 2.5c1.05 0 2 .45 2.7 1.2l.45.45c.25.2.55.35.85.35H23V19c0 1.65-1.35 3-3 3H4c-1.65 0-3-1.35-3-3V2.5zm0 1.5h-5v15c0 .85.65 1.5 1.5 1.5h16c.85 0 1.5-.65 1.5-1.5V6h-10c-.7 0-1.4-.3-1.9-.85l-.45-.45C8.7 4.25 8.1 4 7.5 4z" id="a"></path></defs><use xlinkHref="#a" fill-rule="evenodd"></use></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
