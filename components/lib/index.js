import Card from './card/index.js';
import Demo from './demo/index.js';
const components = {
  Demo, Card
};
const install = function (Vue) {
  if (install.installed) {
    return;
  }
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
}
const API = {
  install
}
export default API;