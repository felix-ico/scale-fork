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
  tag: 'scale-icon-communication-voice-message',
  styleUrl: '../../icon/icon.css'
})
export class CommunicationVoiceMessage {
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
            {this.selected ? (<g><path d="M22.45 3v12.55a3.01 3.01 0 01-2.824 2.995l-.176.005h-7l-3.5 3.5c-.35.35-.75.5-1.2.5-.855 0-1.665-.632-1.744-1.595L6 20.8v-2.3H4.5a3.01 3.01 0 01-2.995-2.824L1.5 15.5V3h20.95zm-11.7 4c.367 0 .691.294.743.651l.007.099v6c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L10 13.75v-6c0-.4.35-.75.75-.75zm3 1c.367 0 .691.294.743.651l.007.099v4c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L13 12.75v-4c0-.4.35-.75.75-.75zm-6 1c.367 0 .691.294.743.651l.007.099v2c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L7 11.75v-2c0-.4.35-.75.75-.75zm9 0c.367 0 .691.294.743.651l.007.099v2c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L16 11.75v-2c0-.4.35-.75.75-.75z" fill-rule="evenodd"></path></g>) : (<g><path d="M22.45 3v12.55a3.01 3.01 0 01-2.824 2.995l-.176.005h-7l-3.5 3.5c-.35.35-.75.5-1.2.5-.855 0-1.665-.632-1.744-1.595L6 20.8v-2.3H4.5a3.01 3.01 0 01-2.995-2.824L1.5 15.5V3h20.95zM21 4.5H3v11c0 .8.576 1.423 1.352 1.493L4.5 17h3v3.8c0 .182.207.322.394.196l.056-.046L11.9 17h7.6c.8 0 1.423-.576 1.493-1.352L21 15.5v-11zM10.75 7c.367 0 .691.294.743.651l.007.099v6c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L10 13.75v-6c0-.4.35-.75.75-.75zm3 1c.367 0 .691.294.743.651l.007.099v4c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L13 12.75v-4c0-.4.35-.75.75-.75zm-6 1c.367 0 .691.294.743.651l.007.099v2c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L7 11.75v-2c0-.4.35-.75.75-.75zm9 0c.367 0 .691.294.743.651l.007.099v2c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L16 11.75v-2c0-.4.35-.75.75-.75z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
