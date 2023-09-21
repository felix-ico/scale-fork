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
  tag: 'scale-icon-action-minimize-screen',
  styleUrl: '../../icon/icon.css'
})
export class ActionMinimizeScreen {
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
            {this.selected ? (<g><path d="M11.245 12.755l-1.76 8.43-2.45-2.45L2.88 22.89a1.252 1.252 0 01-1.868-1.66l.098-.11 4.155-4.155-2.45-2.465 8.43-1.745zM22.005.743c.332 0 .65.132.885.367a1.25 1.25 0 01.096 1.68l-.096.105-4.155 4.155 2.45 2.45-8.43 1.745 1.745-8.43 2.465 2.45L21.12 1.11a1.25 1.25 0 01.885-.367z" fill-rule="evenodd"></path></g>) : (<g><path d="M11.245 12.755l-1.76 8.43L6.68 18.38l-4.155 4.155a.754.754 0 01-.53.22.754.754 0 01-.53-.22.744.744 0 01-.073-.975l.073-.085L5.62 17.32l-2.805-2.805 8.43-1.76zm10.23-11.29a.745.745 0 011.06 0c.268.264.293.68.073.975l-.073.085L18.38 6.68l2.805 2.805-8.43 1.76 1.76-8.43L17.32 5.62l4.155-4.155z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
