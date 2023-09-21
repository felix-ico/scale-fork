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
  tag: 'scale-icon-communication-blog',
  styleUrl: '../../icon/icon.css'
})
export class CommunicationBlog {
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
            {this.selected ? (<g><path d="M11.775 19.452l1.898 1.9-2.607.707.71-2.607zm9.836-9.307a1.376 1.376 0 011.073 2.238l-.1.112-8.044 8.037-1.946-1.947 8.044-8.037c.269-.268.62-.403.973-.403zM19.115 2v8.047l-5.781 5.777h-2.686l-3.122 3.122a1.556 1.556 0 01-1.112.469c-.771 0-1.513-.566-1.593-1.436l-.007-.156v-1.998h-1.09a2.724 2.724 0 01-2.719-2.558L1 13.1V2h18.115z" fill-rule="evenodd"></path></g>) : (<g><path d="M11.775 19.452l1.898 1.9-2.607.707.71-2.607zm9.836-9.307a1.376 1.376 0 011.073 2.238l-.1.112-8.044 8.037-1.946-1.947 8.044-8.037c.269-.268.62-.403.973-.403zM19.115 2v8.047l-1.431 1.43V3.43H2.43v9.67c0 .67.51 1.221 1.162 1.288l.132.006h2.52v3.429c0 .114.086.148.135.157l.035.005a.11.11 0 00.07-.023l.031-.027 3.54-3.54 4.71-.001-1.431 1.43h-2.686l-3.122 3.122a1.556 1.556 0 01-1.112.469c-.771 0-1.513-.566-1.593-1.436l-.007-.156v-1.998h-1.09a2.724 2.724 0 01-2.719-2.558L1 13.1V2h18.115z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
