<template>
  <div class="PPEInspector">
    <div v-for="(image, index) in images" :key="index">
      <img :src="image" class="project-image" />
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'PPEInspector',
  data() {
    return {
      images: [
        require('../assets/images/PPEInspector_00.png'),
        require('../assets/images/PPEInspector_01.png'),
        require('../assets/images/PPEInspector_02.png'),
        require('../assets/images/PPEInspector_03.png'),
        require('../assets/images/PPEInspector_04.png'),
        require('../assets/images/PPEInspector_05.png'),
        require('../assets/images/PPEInspector_06.png'),
        require('../assets/images/PPEInspector_07.png'),
        require('../assets/images/PPEInspector_08A.png'),
        require('../assets/images/PPEInspector_08B.png'),
        require('../assets/images/PPEInspector_08C.png'),
        require('../assets/images/PPEInspector_09.png'),
        require('../assets/images/PPEInspector_10.png'),
        require('../assets/images/PPEInspector_11.png'),
        require('../assets/images/PPEInspector_12A.png'),
        require('../assets/images/PPEInspector_12B.png'),
        require('../assets/images/PPEInspector_12C.png'),
        require('../assets/images/PPEInspector_12D.png'),
        require('../assets/images/PPEInspector_13.png'),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.PPEInspector {
  width: 100%;
}
.project-image {
  width: 100%;
  height: auto;
}
</style>
