<template>
  <div id="app">
    <Demo />
    <div class="cards">
      <Card
        imgSrc="java.png"
        summary="剑指Java面试-Offer直通车 百度资深面试官授课"
      ></Card>
      <Card
        imgSrc="c.png"
        summary="C语言系统化精讲  重塑你的编程思想 打造坚实的开发基础"
      >
        <template v-slot:footer>
          <div class="footer">
            <div class="level">中级 · 528人报名</div>
            <div class="price">￥299.00</div>
          </div>
        </template>
      </Card>
      <Card imgSrc="spring.png" :width="370" :imgHeight="90">
        本路线旨在帮助想快速掌握SpringBoot应用的工程师，全方位多角度带你升级。
        <template v-slot:footer>
          <div class="footer-spring">
            <div class="level">4步骤 · 6门课</div>
            <div class="level">10965收藏</div>
          </div>
        </template></Card
      >
    </div>
    <div class="btns">
      <yu-button>按钮组件</yu-button>
      <yu-button type="primary" disabled @click="onPrimaryClick"
        >primary按钮</yu-button
      >
      <yu-button type="primary" icon="yu-icon-cuowu" danger
        >danger按钮</yu-button
      >
      <yu-button
        type="primary"
        shape="circle"
        icon="yu-icon-duigou-cu"
        @click="onCircleClick"
      >
      </yu-button>
    </div>
    <yu-modal v-model="visible" title="标题" width="1000px">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <yu-button>取消</yu-button>
        <yu-button type="primary">确定</yu-button>
      </template>
    </yu-modal>
    <yu-input
      placeholder="please input"
      type="password"
      name="username"
      v-model="username"
      showPassword
    ></yu-input>
    <yu-switch
      v-model="flag"
      :activeColor="activeColor"
      :inActiveColor="inActiveColor"
    ></yu-switch>
    <yu-radio-group v-model="gender">
      <yu-radio label="0">男</yu-radio>
      <yu-radio label="1">女</yu-radio>
    </yu-radio-group>
    <yu-checkbox v-model="active">状态</yu-checkbox>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      visible: false,
      username: "",
      flag: false,
      activeColor: "purple",
      inActiveColor: "gray",
      gender: "1",
      active:false,
    };
  },
  methods: {
    onCircleClick(e) {
      console.log("----circle---", e);
      this.visible = true;
      console.log("---username--", this.username);
    },
    onPrimaryClick(e) {
      console.log("----primary----", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.cards,
.btns {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}
.yu-input {
  width: 180px;
}
</style>
