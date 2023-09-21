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
  tag: 'scale-icon-action-remove',
  styleUrl: '../../icon/icon.css'
})
export class ActionRemove {
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
            {this.selected ? (<g><path d="M16 .5v3h5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L21.5 5h-1.05l-.8 15.65c-.096 1.54-1.305 2.757-2.824 2.845l-.176.005H7.4c-1.54 0-2.803-1.16-2.984-2.674L4.4 20.65 3.55 5H2.5c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L2.5 3.5H8v-3h8zm-4 7.25c.367 0 .691.294.743.651l.007.099v10c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651l-.007-.099v-10c0-.4.35-.75.75-.75zm3.5 0c.367 0 .691.294.743.651l.007.099v10c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651l-.007-.099v-10c0-.4.35-.75.75-.75zm-7 0c.367 0 .691.294.743.651l.007.099v10c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L7.75 18.5v-10c0-.4.35-.75.75-.75zm6-5.75h-5v1.5h5V2z" fill-rule="evenodd"></path></g>) : (<g><path d="M16 .5v3h5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L21.5 5h-1.05l-.8 15.65c-.096 1.54-1.305 2.757-2.824 2.845l-.176.005H7.4c-1.54 0-2.803-1.16-2.984-2.674L4.4 20.65 3.55 5H2.5c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L2.5 3.5H8v-3h8zM18.95 5H5.05l.85 15.6a1.482 1.482 0 001.36 1.394L7.4 22h9.2c.753 0 1.373-.531 1.485-1.261l.015-.139.85-15.6zM12 7.75c.367 0 .691.294.743.651l.007.099v10c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651l-.007-.099v-10c0-.4.35-.75.75-.75zm3.5 0c.367 0 .691.294.743.651l.007.099v10c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651l-.007-.099v-10c0-.4.35-.75.75-.75zm-7 0c.367 0 .691.294.743.651l.007.099v10c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L7.75 18.5v-10c0-.4.35-.75.75-.75zm6-5.75h-5v1.5h5V2z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
