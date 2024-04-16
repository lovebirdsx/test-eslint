# 说明

用于测试vscode的eslint插件

## 重现方式：

* 将以下代码`interface IEntityData extends IEditorObject`改为`interface IEntityData extends IEditorObject<'Entity'>`
* 保存文件
* 直接打开（或者关闭再打开）[case1.ts](./src/case1.ts)，发现并没有报错
* 运行`yarn lint`，发现报错

``` shell
.\test-eslint\src\case1.ts
  7:22  error  This assertion is unnecessary since it does not change the type of the expression  @typescript-eslint/no-unnecessary-type-assertion
```
