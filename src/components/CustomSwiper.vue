<template>
  <div class="carousel">
    <div class="carousel-slides" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="handleClick">
      <transition name="fade">
        <div v-if="showControl" @click.stop="prevSlide" class="carousel-prev-icon icon-left"></div>
      </transition>

      <img
          v-for="(image, index) in images"
          :key="index"
          :src="require(`@/assets/${image}`)"
          :style="{left: index * 100 + '%', 'transform': dynamicstyle}"
          alt=""
      />
      <transition name="fade">
        <div v-if="showControl" @click.stop="nextSlide" class="carousel-prev-icon icon-right"></div>
      </transition>

    </div>

  </div>
</template>
<script>
export default {
  name:'CustomSwiper',
  data() {
    return {
      images: [
        '2.jpg',
        '3.jpg',
        '4.jpg',
      ],
      dynamicstyle: "", //动态样式
      currentSlide: 0, //播放序号
      interval: Object,
      showControl:false
    }
  },
  mounted() {
    // 自动播放动画
    // this.startSlideshow()
  },
  methods: {
    nextSlide() {
      // 每次指针加一
      this.currentSlide = (this.currentSlide + 1) % this.images.length
      this.setStyle();
    },
    prevSlide() {
      // 每次减一，为负数时循环
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;

      this.setStyle();
    },
    // 图片动画
    setStyle() {
      this.dynamicstyle = `translatex(-${this.currentSlide * 100}%)`;

    },
    // 定时器
    startSlideshow() {
      this.interval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
        this.setStyle();
      }, 3000)
    },
    stopSlideshow() {
      clearInterval(this.interval)
    },
    handleMouseEnter(){
      this.showControl=true
    },
    handleMouseLeave(){
      this.showControl=false
    },
    handleClick(event){
      const mouseX = event.clientX;
      const containerWidth = this.$el.offsetWidth;
      const middle = containerWidth / 2;
      if (mouseX < middle) {
        // 左边点击，执行上一页的逻辑
        this.prevSlide();
      } else {
        // 右边点击，执行下一页的逻辑
        this.nextSlide();
      }
    }
  }
}
</script>
<style scoped>
.carousel {
  position: relative;
}
.carousel-slides {
  position: relative;
  width: 60%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color:transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.carousel-slides img {
  display: inline-block;
  position: absolute;
  object-fit: cover;
  height: 100%;
  transition: 0.5s transform ease-in-out;
}
.carousel-prev-icon{
  position: absolute;
  height: 40px;
  width: 40px;
  border: none;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 999;
  cursor: pointer;
}
.carousel-controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}
.icon-left {
  left: 10px;
  background-image: url('../assets/arrow-left.png');
}
.icon-right {
  right: 10px;
  background-image: url('../assets/arrow-right.png');
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s; /* 添加透明度过渡效果，时长为0.5秒 */
}
.fade-enter, .fade-leave-to {
  opacity: 0; /* 设置透明度为0，元素初始隐藏 */
}
</style>

