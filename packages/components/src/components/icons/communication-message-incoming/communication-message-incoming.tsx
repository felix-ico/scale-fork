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
  tag: 'scale-icon-communication-message-incoming',
  styleUrl: '../../icon/icon.css'
})
export class CommunicationMessageIncoming {
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
            {this.selected ? (<g><path d="M19.499 3v5.867l-6.153 3.879a1.199 1.199 0 00-.108 1.929l.108.079L17.54 17.5h-6.92l-3.273 3.274c-.339.34-.756.491-1.166.491-.811 0-1.591-.597-1.671-1.514l-.007-.155V17.5H3.361a2.856 2.856 0 01-2.852-2.69l-.005-.167V3H19.5zm.002 7.15V13h3.75a.75.75 0 01.1 1.493l-.1.007H19.5v2.85l-5.498-3.6 5.498-3.6z" fill-rule="evenodd"></path></g>) : (<g><path d="M19.5 3v5.357l-1.5.982V4.5H2v10.143c0 .704.54 1.285 1.227 1.35l.13.007H6v3.596c0 .134.165.237.285.117L9.998 16h4.7l2.264 1.481-.158.014-.161.005h-6.024l-3.274 3.274a1.63 1.63 0 01-1.167.491c-.81 0-1.591-.597-1.671-1.514l-.007-.155V17.5H3.357a2.857 2.857 0 01-2.852-2.69L.5 14.644V3h19zm0 7.15V13h3.75a.75.75 0 01.102 1.493l-.102.007H19.5v2.85l-5.5-3.6 5.5-3.6z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
