<template>
  <div class="slider">
    <transition-group name="fade" tag="div" class="container-height">
      <div v-for="i in [currentIndex]" :key="i" class="container-height">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <!--@TODO improvement: implement prev and next button en general component-->
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'Slider',
  data() {
    return {
      images: [
        require('../assets/images/Lukeando_1.png'),
        require('../assets/images/mockupLukeando_2.png'),
        require('../assets/images/mockupLukeando_3.png'),
        require('../assets/images/mockupLukeando_4.png'),
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 2500);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style lang="scss" scoped>
.slider,
.container-height {
  height: 360px;
  background-color: transparent;
}
.list-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: hidden;
  width:100%;
  opacity: 1;
}
.list-leave-active {
  position: absolute;
}
.fade-enter-from,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
img {
  width:100%;
  height:360px;
}
</style>
