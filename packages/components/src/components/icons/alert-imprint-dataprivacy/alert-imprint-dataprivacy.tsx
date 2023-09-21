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
  tag: 'scale-icon-alert-imprint-dataprivacy',
  styleUrl: '../../icon/icon.css'
})
export class AlertImprintDataprivacy {
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
            {this.selected ? (<g><path d="M12 1l9.5 2.15v8c0 2.85-.95 5.55-2.6 7.75a12.863 12.863 0 01-4.844 3.9l-.378.167-.18.075-.343.133-.314.113-.413.135-.428.127c-2.64-.754-4.43-2.062-5.508-3.078l-.277-.27-.241-.25a5.328 5.328 0 01-.108-.118l-.19-.216-.158-.189-.218-.279c-1.674-2.152-2.707-4.808-2.794-7.616L2.5 11.15v-8L12 1zm-1.4 12l1.4 1.4 1.4-1.4h1c.897 0 1.66.624 1.911 1.494l.039.156.15.85h-9l.15-.85c.142-.897.908-1.571 1.793-1.644L9.6 13h1zM12 6.5c1.4 0 2.5 1 2.5 2.5 0 1.55-1.05 3-2.5 3s-2.5-1.5-2.5-3 1.1-2.5 2.5-2.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 1l9.5 2.15v8c0 2.85-.95 5.55-2.6 7.75a12.863 12.863 0 01-4.844 3.9l-.378.167-.18.075-.343.133-.314.113-.413.135-.428.127c-2.64-.754-4.43-2.062-5.508-3.078l-.277-.27-.241-.25a5.328 5.328 0 01-.108-.118l-.19-.216-.158-.189-.218-.279c-1.674-2.152-2.707-4.808-2.794-7.616L2.5 11.15v-8L12 1zm0 1.5L4 4.35v6.8c0 4.95 3.3 9.35 8 10.8 4.606-1.421 7.867-5.675 7.996-10.504L20 11.15v-6.8L12 2.5zM10.6 13l1.4 1.4 1.4-1.4h1c.897 0 1.66.624 1.911 1.494l.039.156.15.85h-9l.15-.85c.142-.897.908-1.571 1.793-1.644L9.6 13h1zM12 6.5c1.4 0 2.5 1 2.5 2.5 0 1.55-1.05 3-2.5 3s-2.5-1.5-2.5-3 1.1-2.5 2.5-2.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
