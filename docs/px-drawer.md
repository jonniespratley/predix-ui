# px-drawer
This is the documentation.


## Usage

```react
frame: true
---
const style = {
  height: 300,
  position: 'relative',
  display: 'flex'
};
<div style={style}>
  <px.Drawer persistent opened>
    This is the children
  </px.Drawer>
  <div>
  <h4>Main Content</h4>
  </div>
</div>
```

```react
frame: true
---
const style = {
  height: 300,
  position: 'relative'
};
<div style={style}>
  <px.Drawer opened>
    This is the children
  </px.Drawer>
</div>
```


```html

<template id="demo-1" is="dom-bind">
  <style is="custom-style">
    .demo-container-1 {
      position: relative;
      overflow: hidden;
      height: 50vh;
    }
    .drawer-alt-1 {
      --px-drawer: {
        background: #242326;
        color: #fff;
      }
    }
    .drawer-alt-1__user {
      --px-table-row-media-img: {
        width: 24px;
      }
    }
    .drawer-alt-1__user-table {
      position: absolute;
      bottom: 0;
      width: 100%;
      --px-table-view: {
        background-color: #323232;
        color: #fff;
      }
    }
    .drawer-alt-1 .selected {
      background-color: #0a9ec1;
      color: #fff;
    }
  </style>
  <div class="demo-container-1">
    <px-drawer-layout>
      <px-drawer id="drawer-1" class="drawer-alt-1" persistent overlay>
        <px-table-view class="drawer-alt-1__table" selected-class="selected" selected="0">
          <template is="dom-repeat" items="[[navItems]]">
            <px-table-row title="{{item.label}}" icon="{{item.icon}}" icon-size="24" modifier="tappable"></px-table-row>
          </template>
        </px-table-view>
        <px-table-view class="drawer-alt-1__user-table">
          <px-table-row class="drawer-alt-1__user" title="{{user.name}}" image="{{user.image}}" modifier="tappable" icon-right="fa:fa-cog"></px-table-row>
        </px-table-view>
      </px-drawer>
      <px-navbar title="Example Drawer Alt 1">
        <button drawer-toggle right>Toggle Drawer</button>
      </px-navbar>
      <div class="layout">
        <div class="layout__item">
          <section class="u-p">
            <h2>Example Drawer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
      </div>
    </px-drawer-layout>
  </div>
</template>
<script type="text/javascript">
  var scope = document.getElementById('demo-1');
  scope.navItems = navItems;
  scope.user = user;
</script>
```
