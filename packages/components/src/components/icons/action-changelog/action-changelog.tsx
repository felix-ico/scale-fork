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
  tag: 'scale-icon-action-changelog',
  styleUrl: '../../icon/icon.css'
})
export class ActionChangelog {
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
            {this.selected ? (<g><path d="M2 15.5l3.44 2.25L2 20v-4.5zm19.25 1a1.25 1.25 0 01.128 2.494L21.25 19h-13a1.25 1.25 0 01-.128-2.494l.128-.006h13zM2 9.5l3.44 2.25L2 14V9.5zm19.25 1a1.25 1.25 0 01.128 2.494L21.25 13h-13a1.25 1.25 0 01-.128-2.494l.128-.006h13zM2 3.5l3.44 2.25L2 8V3.5zm19.25 1a1.25 1.25 0 01.128 2.494L21.25 7h-13a1.25 1.25 0 01-.128-2.494L8.25 4.5h13z" fill-rule="evenodd"></path></g>) : (<g><path d="M2 15.5l3.45 2.25L2 20v-4.5zM21.25 17c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007H7.5V17h13.75zM2 9.5l3.45 2.25L2 14V9.5zM21.25 11c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007H7.5V11h13.75zM2 3.5l3.45 2.25L2 8V3.5zM21.25 5c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007H7.5V5h13.75z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
