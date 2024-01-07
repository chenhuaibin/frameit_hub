<script>
export default {
  name: "IndexView",
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
  <div>
    <button @click="changeLanguage">啊按钮</button>
  </div>
<div class="main">
  <span>在这个写你的首页吧</span>
  {{$t('name')}}
</div>
</template>

