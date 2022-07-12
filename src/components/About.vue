<template>
  <div class="about">
    <h1>
      Passionate about making ideas come alive. As a former Architect,<br>designing
      and intervening physical spaces, now as a Frontend<br>developer/UX-UI Designer,
      occupying the virtual one.
    </h1>
    <p>
      Looking forward to continuing growing as a professional <strong>developer
      </strong>, building clean, structured code.<br>As a <strong>designer</strong>,
      creating beautiful and functional products that are delightful and easy to
      interact with.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
}
h1 {
  margin-bottom: 16px;
  font-size: 28px;
}
p {
  font-size: 20px;
  line-height: 1.5;
}
@media (max-width: 768px) {
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
}
</style>
