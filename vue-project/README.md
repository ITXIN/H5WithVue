## 规则

views 项目创建文件夹如home,如果里面有多个页面，则文件名称如果多个单词以\_连接命名,home/a_b/

## build

```js
构建：
  npm run build -- --env${env} --pack=all --runtime=offline
只有html打离线包：
  全量：
  npm run build -- --env=prd --pack=all --runtime=offline
  增量：
  npm run build -- --env=prd --pack=inc --runtime=offline
全离线：
  全量：
  npm run build -- --env=prd --pack=all
  增量：
  npm run build -- --env=prd --pack=inc
```

### 本地开发

```js
  npm run start:
  http://localhost:3088/a/b/home_family.html
  http://localhost:3088/a/b/home_family.html#/home
```

### sass

```js
sass --watch sass/home/home.scss:css/home/home.css --style expanded --no-source-map
```
