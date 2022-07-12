<template>
  <div class="experience">
    <div class="row">
      <div class="column">
        <h4>{{ sectionTitle }}</h4>
      </div>
      <div class="column">
        <p>
          My <strong>most recent job</strong> was as <strong>Frontend developer</strong> at
          <strong>Katapult Commerce</strong> (former Mi Aguila), a Colombian-based e-commerce
          platform. Where I remotely coded, <strong>from February until June</strong>, different
          components for their website using <strong>Vuejs</strong>.<br>
          For five months I teamed up with fellow frontend, backend, product, and design
          professionals in a multicultural and agile environment to build, maintain and enhance
          their product.
        </p>
        <div class="small-screen">
          <a
            href="https://www.katapultcommerce.com/"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            <span class="link">katapultcommerce.com</span>
            <div class="external-link-icon"></div>
          </a>
          <a
            href="https://miaguila.com/transporte-corporativo"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            <span class="link">miaguila.com</span>
            <div class="external-link-icon"></div>
          </a>
        </div>
      </div>
      <div class="column">
        <p>
          Before that, I worked in <strong>A&S Consultores</strong>, a local Software Company,
          starting out as a Trainee in <strong>June 2021</strong>. Their program combined theory
          (Vue Js, Angular, Node Js, Microservices, and Agile Methodologies) and practice
          (Administration Web App) in a collaborative and remote working environment.<br>
          Boosting up soon enough to junior <strong>Frontend developer</strong>, working
          <strong>until October</strong> in their software factory.<br>
          Got to use <strong>Angular</strong> and a little of <strong>CSS animation</strong>.
        </p>
        <div class="small-screen">
          <a
            href="https://www.aysconsultores.pe/"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            <span class="link">aysconsultores.pe</span>
            <div class="external-link-icon"></div>
          </a>
        </div>
      </div>
      <div class="column">
        <p>
          As an <strong>Architect</strong>, I've conceived and executed different design field
          projects: Landscape, Architecture, Interior, Furniture, Product, and Graphic Design.<br>
          Worked solo and as an employee.<br>
          Managed and formed part of teams.<br>
          Dealt with customers and contractors.<br>
        </p>
      </div>
    </div>
    <div class="large-screen">
      <div class="row links">
        <div class="column"></div>
        <div class="column">
          <a
            href="https://www.katapultcommerce.com/"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            <span class="link">katapultcommerce.com</span>
            <div class="external-link-icon"></div>
          </a>
          <a
            href="https://miaguila.com/transporte-corporativo"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            <span class="link">miaguila.com</span>
            <div class="external-link-icon"></div>
          </a>
        </div>
        <div class="column">
          <a
            href="https://www.aysconsultores.pe/"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            <span class="link">aysconsultores.pe</span>
            <div class="external-link-icon"></div>
          </a>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'Experience',
  data() {
    return {
      sectionTitle: 'Experience',
    };
  },
};
</script>

<style lang="scss" scoped>
.experience {
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
.large-screen {
  display: block;
}
.small-screen {
  display: none;
}
.links {
  margin-top: 32px;
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
@media (max-width: 1024px) {
  .column {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .column {
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
  .large-screen {
    display: none;
  }
  .small-screen {
    display: block;
  }
  .row {
    display: flex;
    flex-direction: column;
  }
  .column {
    width: 100%;
    flex-direction: column;
    margin-top: 32px;
  }
  .external-link {
    margin-top: 8px;
  }
}
</style>
