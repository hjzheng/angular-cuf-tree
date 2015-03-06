# angular-cuf-tree
基于angular的tree view

![ScreenShot](https://github.com/hjzheng/angular-cuf-nav/raw/master/img/angular-cuf-tree.png)

**Code**

```html
<cuf-tree show-buttons="true">
    <cuf-tree-item label="item-3" href="#page1" has-children="true" show="true">
        <cuf-tree-item label="item-3-1" href="#page2" has-children="true">
            <cuf-tree-item label="item-3-1-1" href="#page3" has-children="true">
                <cuf-tree-item label="item-3-1-1" href="#page4"></cuf-tree-item>
            </cuf-tree-item>
        </cuf-tree-item>
        <cuf-tree-item label="item-3-2" href="#page"></cuf-tree-item>
        <cuf-tree-item label="item-3-3" href="#page"></cuf-tree-item>
        <cuf-tree-item label="item-3-4" href="#page"></cuf-tree-item>
    </cuf-tree-item>
</cuf-tree>
```

### Usage

1. 引入依赖
```html                   
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="build/css/angular-cuf-tree.min.css">
<script src="bower_components/angular/angular.min.js"></script>
<script src="build/js/angular-cuf-tree.min.js"></script>
```                    
                
2. Angularjs模块依赖
```javascript                    
angular.module("test", ["cuf.tree"]);
```                    
                
### API
                    
敬请期待... ...                

