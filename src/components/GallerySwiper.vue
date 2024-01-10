<template>
  <swiper
      :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
      :navigation="true"
      :loop="true"
      :thumbs="{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }"
      :modules="modules"
      class="mySwiper2"
  >
    <swiper-slide v-for="(item,index) in imageList" :key="index">
      <img :src="`https://swiperjs.com/demos/images/${item}`" alt=""/>
    </swiper-slide>
  </swiper>
  <swiper
      @swiper="setThumbsSwiper"
      :slidesPerView="thumbsSizePre"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
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
      thumbsSizePre:8
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


.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>