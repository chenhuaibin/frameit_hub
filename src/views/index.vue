<script>
import ImageLayout from "@/components/imageLayout.vue";

export default {
  name: "IndexView",
  components: {ImageLayout},
  data(){
   return {localeValue: 'zh'}
  },
  methods:{
    changeLanguage(){
      this.localeValue= this.localeValue === 'zh' ? 'en' : 'zh'
      this.$i18n.locale=this.localeValue
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>这里是文字描述</h1>
      <p>这是一些关于网站内容的文字描述。你可以在这里添加更多详细信息。</p>
    </div>
    <div class="image">
      <img src="../assets/1.webp" alt="图片描述">
    </div>
  </div>
  <image-layout ref="image-layout" title="我是标题1" description="我是标题1的描述" image-side="right" :image-src="require('@/assets/1.webp')"></image-layout>
  <image-layout title="我是标题2" description="我是标题2的描述" image-side="left" :image-src="require('@/assets/1.webp')"></image-layout>
  <image-layout title="我是标题3" description="我是标题3的描述" image-side="right" :image-src="require('@/assets/1.webp')"></image-layout>
  <image-layout title="我是标题4" description="我是标题4的描述" image-side="left" :image-src="require('@/assets/1.webp')"></image-layout>
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
  padding-right: 20px;
}

.image {
  flex: 1;
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

