# OwLayout

## Examples

Here is the basic example.

```html
<ow-layout style="height: 100vh;">
    <ow-header class="header">Header</ow-header>
    <ow-content class="content">Content</ow-content>
    <ow-footer class="footer">Footer</ow-footer>
</ow-layout>
```

## OwSider

You can add a sider aside main content.

```html
<ow-layout style="height: 100vh;">
    <ow-sider class="sider">Sider</ow-sider>
    <ow-layout>
        <ow-header class="header">Header</ow-header>
        <ow-content class="content">Content</ow-content>
        <ow-footer class="footer">Footer</ow-footer>
    </ow-layout>
</ow-layout>
```

Adding sider with another way.

```html
<ow-layout style="height: 100vh;">
    <ow-header class="header">Header</ow-header>
    <ow-layout>
        <ow-sider class="sider">Sider</ow-sider>
        <ow-content class="content">Content</ow-content>
    </ow-layout>
    <ow-footer class="footer">Footer</ow-footer>
</ow-layout>
```

You can also toggle sider with props `visible`.

```html
<ow-layout style="height: 100vh;">
    <ow-header class="header">Header</ow-header>
    <ow-layout>
        <ow-sider :visible="visible" class="sider">Sider</ow-sider>
        <ow-content class="content">
            Content
            <button @click="isVisible = !isVisible"></button>
        </ow-content>
    </ow-layout>
    <ow-footer class="footer">Footer</ow-footer>
</ow-layout>
```