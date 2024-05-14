# 快速开始

#### 安装组件库
```bash
npm i @fiona_cai/yu-ui
```
#### 使用组件库
> 在main.js中引用组件库

```javascript
//全部引入
import '@fiona_cai/yu-ui/dist/css/index.css';
import YUI from '@fiona_cai/yu-ui';
Vue.use(YUI)

//按需引用
import '@fiona_cai/yu-ui/dist/css/demo.css';
import { Demo } from '@fiona_cai/yu-ui';
Vue.use(Demo);
```
