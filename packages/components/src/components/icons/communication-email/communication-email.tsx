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
  tag: 'scale-icon-communication-email',
  styleUrl: '../../icon/icon.css'
})
export class CommunicationEmail {
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
            {this.selected ? (<g><path d="M23.5 6.665V17.5a3 3 0 01-2.824 2.995l-.176.005h-17a3 3 0 01-2.995-2.824L.5 17.5V6.715l8.97 7.61a3.89 3.89 0 004.889.138l.171-.138 8.97-7.66zm0-3.165v1.19l-9.945 8.49c-.85.727-2.08.765-2.97.115l-.145-.115L.5 4.745V3.5h23z" fill-rule="evenodd"></path></g>) : (<g><path d="M.5 3.5v14c0 1.65 1.35 3 3 3h17c1.65 0 3-1.35 3-3v-14H.5zM22 5v.95l-8.45 7.25c-.9.75-2.2.75-3.1 0L2 5.95V5h20zm-1.5 14h-17c-.85 0-1.5-.65-1.5-1.5V7.95l7.45 6.4c.75.65 1.65.95 2.55.95.9 0 1.8-.3 2.55-.95L22 7.95v9.55c0 .85-.65 1.5-1.5 1.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
