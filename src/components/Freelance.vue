<template>
  <div class="freelance">
    <div class="row">
      <div class="column column-spacer">
        <h4>{{ sectionTitle }}</h4>
      </div>
      <div class="column-large">
        <div class="text">
          <p>
            MULTITOP 3D Simulator. Responsive app redesign. Designed and prototyped in Figma.
            Duration: 4 weeks. Role: UX-UI Designer.
          </p>
        </div>
        <div class="text-link">
          <a
            href="https://www.figma.com/proto/RT8C8rBtvss7bo9F2lXNTb/Multitop?node-id=791%3A15757&scaling=scale-down&page-id=791%3A15006&starting-point-node-id=791%3A15757"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            <span class="link">Mobile prototype</span>
            <div class="external-link-icon"></div>
          </a>
          <a
            href="https://www.figma.com/proto/RT8C8rBtvss7bo9F2lXNTb/Multitop?node-id=805%3A18441&scaling=scale-down&page-id=791%3A15007&starting-point-node-id=805%3A18441"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            <span class="link">Desktop prototype</span>
            <div class="external-link-icon"></div>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
      </div>
      <div class="column-large">
        <div class="text">
          <div class="spacer"></div>
          <p>
            VARBUS e-commerce web, designed and prototyped in Figma, developed in Wordpress.
            Duration: 6 weeks. Role: UX-UI Designer | Developer.
          </p>
        </div>
        <div class="text-link">
          <div class="spacer"></div>
          <a
            href="https://grupovarbus.pe/"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            <span class="link">grupovarbus.pe</span>
            <div class="external-link-icon"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'Freelance',
  data() {
    return {
      sectionTitle: 'Freelance',
    };
  },
};
</script>

<style lang="scss" scoped>
.freelance {
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
.column-large {
  width: 74%;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4196078431);
}
a {
  text-decoration: none;
}
.link {
  font-weight: 400;
}
.link:hover {
  color: blue;
}
.external-link {
  display: flex;
}
.external-link-icon {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  margin-top: 4px;
  background-image: url('../assets/icons/external-link.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
.spacer {
  height: 20px;
}
.text {
  width: 66%;
  margin-bottom: 20px;
}
.text-link {
  width: 31%;
}
@media (max-width: 1024px) {
  .row {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .row {
    font-size: 12px;
  }
  .column-large {
    font-size: 12px;
  }
  .external-link-icon {
    width: 12px;
    height: 12px;
    margin-left: 4px;
    margin-top: 3px;
  }
}
@media (max-width: 480px) {
  .row {
    display: flex;
    flex-direction: column;
  }
  .column-large {
    width: 100%;
    line-height: 1.5;
    flex-direction: column;
    margin-top: 32px;
  }
  .column-spacer {
    margin-top: 32px;
  }
  .text {
    width: 100%;
    margin-bottom: 0px;
  }
  .text-link {
    width: 100%;
    margin-bottom: 20px;
  }
  .external-link {
    margin-top: 8px;
  }
  .spacer {
    height: 0px;
  }
}
</style>
