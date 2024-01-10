<template>
  <swiper
      :style="{
      '--swiper-navigation-color': '#fff',
    }"
      :loop="true"
      :thumbs="{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }"
      :modules="modules"
      class="imageSwiper"
      :navigation="true">
    <swiper-slide v-for="(item,index) in imageList" :key="index">
      <img :src="`https://swiperjs.com/demos/images/${item}`" alt=""/>
    </swiper-slide>
  </swiper>
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
    }

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

</style>