<template>
    <div class="customSwiper"  ref="swiperLayout" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <transition name="fade">
        <div v-if="showControl" @click.stop="prevSlide" class="carousel-prev-icon icon-left"></div>
      </transition>
      <swiper
          :style="{
      '--swiper-navigation-color': '#fff',
    }"
          :loop="true"
          :thumbs="{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }"
          :modules="modules"
          class="imageSwiper"
          @swiper="imageSwiperMethod"
          :navigation="false">
        <swiper-slide v-for="(item,index) in imageList" :key="index">
          <img :src="`https://swiperjs.com/demos/images/${item}`" alt=""/>
        </swiper-slide>
      </swiper>
      <transition name="fade">
        <div v-if="showControl" @click.stop="nextSlide" class="carousel-prev-icon icon-right"></div>
      </transition>
    </div>

    <swiper
        @swiper="setThumbsSwiper"
        :slidesPerView="thumbsSizePre"
        :freeMode="true"
        :space-between="15"
        :watchSlidesProgress="true"
        :modules="modules"
        class="thumbsSwiper"
    >
      <swiper-slide v-for="(item,index) in imageList" :key="index">
        <img :src="`https://swiperjs.com/demos/images/${item}`" alt=""/>
      </swiper-slide>
    </swiper>

</template>
<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default {
  name:"GallerySwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      imageList:['nature-1.jpg','nature-2.jpg','nature-3.jpg','nature-4.jpg',
        'nature-5.jpg','nature-6.jpg','nature-7.jpg','nature-8.jpg',
        'nature-9.jpg','nature-10.jpg',
      ],
      thumbsSizePre:9,
       imageSwiper:ref(null),
      showControl:false
    }
  },
  methods:{
    imageSwiperMethod(swiper){
      this.imageSwiper=swiper;
    },
    prevSlide(){
      this.imageSwiper.slidePrev();
    },
    nextSlide(){
      this.imageSwiper.slideNext();
    },
    handleMouseEnter(){
      this.showControl=true
    },
    handleMouseLeave(){
      this.showControl=false
    },
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>
<style>

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.imageSwiper {
  height: 90%;
  width: 100%;
}

.thumbsSwiper {
  height: 100px;
  box-sizing: border-box;
  padding: 10px 10px;
  background-color: black;
}

.thumbsSwiper .swiper-slide {
  height: 100%;
  opacity: 0.55 ;
}

.thumbsSwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.customSwiper{
  position: relative;
  overflow: hidden;
  background-color:transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.carousel-prev-icon{
  position: absolute;
  height: 40px;
  width: 40px;
  background-size: contain;
  z-index: 999;
  cursor: pointer;
}
.icon-left {
  left: 20px;
  background-image: url('../assets/arrow-left.png');
}
.icon-right {
  right: 20px;
  background-image: url('../assets/arrow-right.png');
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s; /* 添加透明度过渡效果，时长为0.5秒 */
}
.fade-enter, .fade-leave-to {
  opacity: 0; /* 设置透明度为0，元素初始隐藏 */
}
</style>