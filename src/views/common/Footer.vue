<template>
  <div class="footer">
    <div style="border-top:1px #1F1F1F solid;text-align:center">
      <p class="alt" style="color:#999; line-height:0">
        <a href target="#nowhere" style="color:#999;">Hi-Vue：</a>
        <span :href="yiyan_url">{{yiyan}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      yiyan: "获取中...",
      yiyan_url: "#nowhere",
    };
  },
  mounted: function () {
    this.axios
      .get("https://v1.hitokoto.cn")
      .then(({ data }) => {
        console.log(data);
        this.yiyan = data.hitokoto;
        this.yiyan_url = data.uuid;
      })
      .catch(console.error);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑", Arial, Helvetica, sans-serif;
}
body {
  font-size: 12px;
}
div {
  font-size: 12px;
}
span {
  font-size: 12px;
}
.footer {
  background: #2b2e33;
}
.footer .alt {
  overflow: hidden;
  padding: 20px 0;
  width: 1160px;
  margin: auto;
}
.footer .alt .foot {
  width: 138px;
  float: left;
}
.footer .alt .foot p {
  color: #fff;
  line-height: 28px;
}
a {
  text-decoration: none;
}
.footer .alt .foot a {
  color: #999;
  display: block;
  line-height: 24px;
}
</style>