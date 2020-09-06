<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(img,item) in items" :key="item">
      <h3 class="medium">{{ img.title }}</h3>
      <img :src="img.url" width="100%" height="100%">
    </el-carousel-item>
  </el-carousel>
</template>

item
<script>
export default {
  name: "Home",
  data() {
    return {
      fuck_items: ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法制"],
      items: [
        {
          url: require("@/assets/leg.jpg"),
          title:"富强",
        },
        {
          url: require("@/assets/leg.jpg"),
          title:"民主",
        },
        {
          url: require("@/assets/leg.jpg"),
          title:"文明",
        },
        {
          url: require("@/assets/leg.jpg"),
          title:"和谐",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #000000;
  font-size: 75px;
  opacity: 0.75;
  line-height: 200px;
  text-align: center;
  margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>