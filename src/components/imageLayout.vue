<script>
export default {
  name: "imageLayout",
  data(){
    return {
      imageScale:0.8,
    }
  },
  props:{
    title:String,
    description: String,
    imageSide:String,
    imageSrc:String,
  },
  methods:{
    handleScroll() {
      const containerRect = this.$el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // 计算图片在视窗中的位置
      const imageTop = containerRect.top;
      const imageBottom = containerRect.bottom;

      // 计算图片在视窗中的垂直中心位置
      const imageCenter = imageTop + (imageBottom - imageTop) / 2;

      // 计算图片在视窗底部一半时的位置
      const bottomHalfPosition = windowHeight - windowHeight / 4;

      // 根据图片在视窗中的位置调整图片大小
      let scale;
      if (imageCenter>bottomHalfPosition){
        scale = 1 - Math.abs((bottomHalfPosition - imageCenter) / bottomHalfPosition);
      }else {
        scale=1;
      }
      this.imageScale = Math.min(1, Math.max( 0.8, scale));
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>


<template>
  <div class="container">
    <div v-if="imageSide==='left'" class="image left" :style="{transform:`scale(${imageScale})`}">
      <img :src="imageSrc" alt="">
    </div>
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ description }} </p>
    </div>
    <div v-if="imageSide==='right'" class="image right" :style="{transform:`scale(${imageScale})`}">
      <img :src="imageSrc" alt="">
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  max-width: 1200px;
  margin:  auto;
  overflow: hidden;
  align-items: center; /* 垂直居中对齐 */
  justify-content: center; /* 水平居中对齐 */
}

.content {
  flex: 1;
}
.image{
  flex: 1;
  transition: transform 0.8s ease-in-out;
}
.left {
  padding-right: 20px;
}
.right {
  padding-left: 20px;
}

img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 100vh;
  object-fit: contain;
  margin: 0 auto;
}
h1, p {
  font-size: 1.5rem;
  margin: 0;
}
</style>