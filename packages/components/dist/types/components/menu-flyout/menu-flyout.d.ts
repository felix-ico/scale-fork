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
export declare class MenuFlyout {
  hostElement: HTMLElement;
  /** (optional) Determines whether the flyout should close when a menu item is selected */
  closeOnSelect: boolean;
  /** (optional) Set preference for where the menu appears, space permitting */
  direction: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'right' | 'left';
  /** (optional) Injected styles */
  styles?: string;
  private trigger;
  private lists;
  private activeList;
  handleScaleOpen({ detail }: {
    detail: any;
  }): Promise<void>;
  handleScaleSelect({ detail }: {
    detail: any;
  }): void;
  handleScaleClose({ detail }: {
    detail: any;
  }): void;
  handleWindowScroll(): void;
  handleOutsideClick(event: MouseEvent): void;
  handleKeydown(event: KeyboardEvent): void;
  componentDidLoad(): void;
  setTriggerAttributes(): void;
  closeAll: () => void;
  toggle: () => void;
  getListElement(): HTMLScaleMenuFlyoutListElement;
  render(): any;
}
