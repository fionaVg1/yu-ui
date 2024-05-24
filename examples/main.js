import Vue from 'vue'
import App from './App.vue'
import '../components/css/font/iconfont.css';
import '../components/css/demo.scss';
import '../components/css/card.scss';
import '../components/css/button.scss';
import '../components/css/modal.scss';
import '../components/css/input.scss';
import '../components/css/switch.scss';
import '../components/css/radio.scss';
import '../components/css/checkbox.scss';
import Demo from '../components/lib/demo/index.js';
import Card from '../components/lib/card/index.js';
import Button from '../components/lib/button/index.js';
import Modal from '../components/lib/modal/index.js';
import Input from '../components/lib/input/index.js';
import Switch from '../components/lib/switch/index.js';
import Radio from '../components/lib/radio/index.js';
import RadioGroup from '../components/lib/radio-group/index.js';
import Checkbox from '../components/lib/checkbox/index.js';

Vue.use(Demo);
Vue.use(Card);
Vue.use(Button);
Vue.use(Modal);
Vue.use(Input);
Vue.use(Switch);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
}).$mount('#app')
