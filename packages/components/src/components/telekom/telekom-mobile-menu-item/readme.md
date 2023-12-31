# scale-telekom-mobile-menu-item



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default |
| -------------- | --------------- | ----------- | --------- | ------- |
| `active`       | `active`        |             | `boolean` | `false` |
| `currentLevel` | `current-level` |             | `string`  | `'0'`   |
| `level`        | `level`         |             | `string`  | `'0'`   |
| `open`         | `open`          |             | `boolean` | `false` |


## Events

| Event                        | Description | Type               |
| ---------------------------- | ----------- | ------------------ |
| `scale-close-nav-flyout`     |             | `CustomEvent<any>` |
| `scale-set-menu-item-active` |             | `CustomEvent<any>` |
| `scale-set-menu-item-open`   |             | `CustomEvent<any>` |


## Shadow Parts

| Part                     | Description |
| ------------------------ | ----------- |
| `"icon-right-container"` |             |


## Dependencies

### Used by

 - [scale-telekom-header-data-back-compat](../telekom-header-data-back-compat)

### Depends on

- [scale-icon-navigation-right](../../icons/navigation-right)

### Graph
```mermaid
graph TD;
  scale-telekom-mobile-menu-item --> scale-icon-navigation-right
  scale-telekom-header-data-back-compat --> scale-telekom-mobile-menu-item
  style scale-telekom-mobile-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
