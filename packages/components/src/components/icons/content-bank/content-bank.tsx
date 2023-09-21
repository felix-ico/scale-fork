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
  tag: 'scale-icon-content-bank',
  styleUrl: '../../icon/icon.css'
})
export class ContentBank {
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
            {this.selected ? (<g><path d="M13.25 4.75a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM23.5 4.5v4H.5v-4L12 .5l11.5 4zm0 15.5v2H.5v-2a3 3 0 012-2.826V10h3v7h2v-7H11v7h2v-7h3.5v7h2v-7h3v7.174c1.165.412 2 1.52 2 2.826z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 3.5a1.25 1.25 0 100 2.498A1.25 1.25 0 0012 3.5zM2 7V5.566l10-3.478 10 3.478V7H2zm15 10h3V8.5h-3V17zm-6.5 0h3V8.5h-3V17zM4 17h3V8.5H4V17zm18 3v.5H2V20c0-.827.674-1.5 1.5-1.5h17c.828 0 1.5.673 1.5 1.5zm1.5-11.5v-4L12 .5.5 4.5v4h2v8.674A3 3 0 00.5 20v2h23v-2a3 3 0 00-2-2.826V8.5h2z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
