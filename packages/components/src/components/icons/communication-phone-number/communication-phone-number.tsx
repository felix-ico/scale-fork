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
  tag: 'scale-icon-communication-phone-number',
  styleUrl: '../../icon/icon.css'
})
export class CommunicationPhoneNumber {
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
            {this.selected ? (<g><path d="M16.05 13.3l-1.7 1.7c-.25.25-.7.3-1 .05-.55-.45-1.4-1.15-2.3-2.05-.9-.9-1.6-1.75-2.05-2.3a.76.76 0 01.05-1l1.7-1.7L7.4 2c-1.1.1-3.45.35-4.7 2.25C1.55 6.1 2.2 8.35 2.4 9c.85 2.35 2.65 5 5.1 7.5 2.5 2.5 5.15 4.3 7.45 5.1.35.1 1.25.4 2.25.4.8 0 1.7-.15 2.5-.65 1.9-1.2 2.15-3.55 2.25-4.7l-5.9-3.35z" fill-rule="evenodd"></path></g>) : (<g><path d="M16.05 13.3l-1.7 1.7c-.25.25-.7.3-1 .05-.55-.45-1.4-1.15-2.3-2.05-.9-.9-1.6-1.75-2.05-2.3a.76.76 0 01.05-1l1.7-1.7L7.4 2c-1.1.1-3.45.35-4.7 2.25C1.55 6.1 2.2 8.35 2.4 9c.85 2.35 2.65 5 5.1 7.5 2.5 2.5 5.15 4.3 7.45 5.1.35.1 1.25.4 2.25.4.8 0 1.7-.15 2.5-.65 1.9-1.2 2.15-3.55 2.25-4.7l-5.9-3.35zm2.9 6.7c-1.25.8-3 .3-3.45.15-2.1-.7-4.55-2.4-6.9-4.75-2.3-2.3-4-4.75-4.7-6.9-.15-.5-.65-2.2.15-3.45C4.5 4.3 5.4 3.8 6.65 3.6l2.3 4.05-.95.9c-.8.8-.9 2.1-.15 3 .5.6 1.25 1.5 2.15 2.45.95.95 1.85 1.7 2.45 2.15.9.7 2.2.65 3-.15l.9-.9 4.05 2.3c-.25 1.25-.7 2.15-1.45 2.6z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
