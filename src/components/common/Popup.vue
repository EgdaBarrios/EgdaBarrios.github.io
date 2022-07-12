<template>
  <div class="popup">
    <div class="popup-inner">
      <div class="row">
        <button
          class="popup-close"
          @click="$emit('close')"
        >
          &times;
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-inner {
  width: 480px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #FFFFFF;
  padding: 32px;
}
.row {
  display: flex;
  justify-content: flex-end;
  background-color: #FFFFFF;
}
.popup-close {
  width: 36px;
  height: 36px;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #FFFFFF;
  cursor: pointer;
}
.popup-close:hover {
  color: #000000af;
}
</style>
