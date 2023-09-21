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
  tag: 'scale-icon-communication-feedback',
  styleUrl: '../../icon/icon.css'
})
export class CommunicationFeedback {
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
            {this.selected ? (<g><path d="M12 1c5.8 0 10.5 4.7 10.45 10.55 0 5.8-4.7 10.5-10.5 10.5a10.41 10.41 0 01-2.69-.345L8.9 21.6l-1.45 1.45c-.35.35-.75.5-1.2.5-.855 0-1.665-.632-1.744-1.595L4.5 21.8v-2.95c-1.85-1.9-3-4.5-3-7.35C1.5 5.7 6.2 1 12 1zm4.25 11.5c.45 0 .75.35.75.75a.772.772 0 01-.651.743L16.25 14h-8.7c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h8.7zm0-3.5c.45 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007h-8.7c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L7.55 9h8.7z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 1c5.8 0 10.5 4.7 10.45 10.55 0 5.8-4.7 10.5-10.5 10.5a10.41 10.41 0 01-2.69-.345L8.9 21.6l-1.45 1.45c-.35.35-.75.5-1.2.5-.855 0-1.665-.632-1.744-1.595L4.5 21.8v-2.95c-1.85-1.9-3-4.5-3-7.35C1.5 5.7 6.2 1 12 1zm0 1.5c-4.95 0-9 4.05-9 9 0 2.243.82 4.395 2.373 6.065l.227.235.45.45v3.55c0 .188.14.234.21.246l.04.004c.037 0 .075-.028.112-.063L8.55 19.85l.85.25c.85.25 1.7.4 2.6.4 4.95 0 9-4.05 9-9s-4.05-9-9-9zm4.25 10c.45 0 .75.35.75.75a.772.772 0 01-.651.743L16.25 14h-8.7c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h8.7zm0-3.5c.45 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007h-8.7c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L7.55 9h8.7z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
