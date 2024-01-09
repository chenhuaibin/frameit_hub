<template>
  <div class="carousel-slides">
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        :loop="true"
        @slideChange="onSlideChange"
        :navigation="true"
        :scrollbar="true"
    >
      <swiper-slide   v-for="(image, index) in images"
                      :key="index">
        <img class="swiper_image" :src="require(`@/assets/${image}`)" alt="">
      </swiper-slide>

    </swiper>

  </div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return  {
      images: [
        '2.jpg',
        '3.jpg',
        '4.jpg',
      ],
      modules:[Navigation,Pagination,Scrollbar]
    }
  },
  methods:{
    prevEl(item,index){
      console.log(item,index)
    },
    nextEl(){

    },
    onSlideChange(swiper) {
      console.log(swiper);
    },
    onSwiper(swiper){
      console.log(swiper);
    }
  },
};
</script>

<style>
.carousel-slides {
  width: 60%;
  height: 100vh;
  max-height: 100vh;
  background-color:transparent;
  display: flex;
  margin: auto;
}
.carousel-slides img {
  object-fit: cover;
  height: 100%;
  transition: 0.5s transform ease-in-out;
}
.swiper-button-next {
  background-image: url('@/assets/arrow-left.png');
}

.swiper-button-prev {
  background-image: url('@/assets/arrow-right.png');
}
</style>