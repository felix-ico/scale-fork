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
  tag: 'scale-icon-action-shopping-cart',
  styleUrl: '../../icon/icon.css'
})
export class ActionShoppingCart {
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
            {this.selected ? (<g><path d="M5.5 20a2 2 0 110 4 2 2 0 010-4zm15 0a2 2 0 110 4 2 2 0 010-4zM.06.455A.755.755 0 01.949.027l.096.033 2.27.975a2.984 2.984 0 011.42 1.275l.1.19h18.24l-.895 9.41a2.986 2.986 0 01-2.612 2.693l-.183.017-13.145.85.065.67c.07.727.637 1.286 1.35 1.353l.145.007h13.45a.749.749 0 01.102 1.493L21.25 19H7.8a2.98 2.98 0 01-2.964-2.538l-.021-.177L3.63 3.655a1.51 1.51 0 00-.771-1.175l-.134-.065-2.27-.975A.75.75 0 01.06.455z" fill-rule="evenodd"></path></g>) : (<g><path d="M5.5 20a2 2 0 110 4 2 2 0 010-4zm15 0a2 2 0 110 4 2 2 0 010-4zM.06.455A.755.755 0 01.949.027l.096.033 2.27.975a2.984 2.984 0 011.42 1.275l.1.19h18.24l-.895 9.41a2.986 2.986 0 01-2.612 2.693l-.183.017-13.145.85.065.67c.07.727.637 1.286 1.35 1.353l.145.007h13.45a.749.749 0 01.102 1.493L21.25 19H7.8a2.98 2.98 0 01-2.964-2.538l-.021-.177L3.63 3.655a1.51 1.51 0 00-.771-1.175l-.134-.065-2.27-.975A.75.75 0 01.06.455zM21.43 4H5.17l.935 9.975 13.185-.85a1.495 1.495 0 001.376-1.22l.019-.135L21.43 4z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
