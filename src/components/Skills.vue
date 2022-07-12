<template>
  <div class="skills">
    <div class="row">
      <div class="column">
        <h4>{{ sectionTitle }}</h4>
      </div>
      <div class="column-medium">
        <p>
          JavaScript, HTML, CSS, Vuejs, Angular, prototyping and web layout, responsive, user-
          centered design, Figma, Agile Methodologies (SCRUM), are some of the tech skills
          I´ve acquired this +1 year in the industry.
        </p>
      </div>
      <div class="column-medium">
        <p>
          As for the soft ones, I can say (and other people do too) that I´m a creative, curious,
          ever-learning person who likes to be amazed, writing, gardening, and has kind of a
          dark sense of humor.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      sectionTitle: 'Skills',
    };
  },
};
</script>

<style lang="scss" scoped>
.skills {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  justify-content: space-between;
}
.column {
  width: 23%;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
}
.column-medium {
  width: 36%;
  line-height: 1.5;
}
@media (max-width: 1024px) {
  .column {
    font-size: 14px;
  }
  .column-medium {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .column {
    font-size: 12px;
  }
  .column-medium {
    font-size: 12px;
  }
}
@media (max-width: 480px) {
  .row {
    display: flex;
    flex-direction: column;
  }
  .column-medium {
    width: 100%;
    flex-direction: column;
    margin-top: 32px;
  }
}
</style>
