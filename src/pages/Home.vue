<template>
  <div class="home">
    <div class="header">
      <div class="top-bar">
        <div class="subject">
          <div class="dot"></div>
          <div class="subject-id">
            <span><strong>Egda Beatriz Barrios Del Moral</strong></span>
            <span>Frontend Developer | UX-UI Designer</span>
          </div>
        </div>
        <div class="call-to-action">
          <a
            href="https://drive.google.com/file/d/1hW4Gd-vbdbTFtuB84mV8ufMWFh0SK8lg/view?usp=sharing"
            class="primary"
            target="_blank"
            rel="noopener"
          >
              DOWNLOAD RESUME
          </a>
        </div>
      </div>
      <!--@TODO improvement: implement parallax efect in sections-->
      <!--<nav></nav>-->
    </div>
    <!--@TODO improvement: implement animated landing section-->
    <section id="about">
      <About />
    </section>
    <section id="experience">
      <Experience />
    </section>
    <section id="education">
      <Education />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <div class="footer">
      <div class="inner-footer">
        <div class="column">
          <p>&copy; 2022</p>
        </div>
        <div class="column-large">
          <p>
            Feel free to check my repositories on
            <a
              href="https://github.com/EgdaBarrios"
              class="link"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>, and contact me thru
            <a
              href="https://www.linkedin.com/in/egdabarrios/"
              class="link"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a> and
            <a
              href = "mailto: egdabarrios@gmail.com"
              class="link"
              target="_blank"
              rel="noopener"
            >
              e-mail
            </a>.
          </p>
          <!--@TODO improvement: implement spanish lenguage option-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Education from '@/components/Education.vue';
import Skills from '@/components/Skills.vue';

export default {
  name: 'Home',
  components: {
    About,
    Experience,
    Education,
    Skills,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 83%;
  height: 48px;
  padding: 16px 120px;
  background-color: #efeef5;
}
.top-bar {
  height: 48px;
  top: 16px;
  font-size: 14px;
  border-bottom: 1px solid #0000006b;
  display: flex;
  justify-content: space-between;
}
.subject {
  padding-top: 6px;
  display: flex;
}
.dot {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #000000;
  margin-right: 12px;
  margin-top: 8px;
}
.subject-id {
  display: flex;
  flex-direction: column;
}
.call-to-action {
  margin-top: 12px;
}
.primary {
  height: 36px;
  padding: 10px 16px;
  color: #FFFFFF;
  border-radius: 24px;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: conic-gradient(from 182.37deg at 50% 51.67%, #0F4E60 -1.4deg, #140540 38.55deg,
  #36065C 89.12deg, #7B3E3E 134.08deg, #A38432 179.65deg, #CBC20C 215.37deg,
  #81F359 235.86deg, #1DC75B 258.04deg, #02F0A9 282.4deg, #265D65 326.62deg,
  #0F4E60 358.6deg, #140540 398.55deg);
  cursor: pointer;
}
section {
  padding: 40px 120px;
}
.footer {
  width: 83%;
  height: 32px;
  padding: 16px 120px;
  font-size: 14px;
  background-color: #efeef5;
}
.inner-footer {
  padding-top: 16px;
  border-top: 1px solid #0000006b;
  display: flex;
  justify-content: space-between;
}
.column {
  width: 23%;
}
.column-large {
  width: 74%;
}
a {
  text-decoration: none;
}
.link {
  font-weight: 700;
}
.link:hover {
  color: blue;
}
@media (max-width: 768px) {
  .header,
  section,
  .footer {
    padding: 12px 60px;
  }
  .top-bar,
  .footer {
    font-size: 12px;
  }
}
@media (max-width: 480px) {
  .header,
  section,
  .footer {
    width: 90%;
    padding: 8px 24px;
  }
  .top-bar,
  .footer {
    font-size: 10px;
  }
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 6px;
  }
  .call-to-action {
    margin-top: 9px;
  }
  .primary {
    height: 32px;
    padding: 8px 12px;
    border-radius: 16px;
  }
  .inner-footer {
    flex-direction: column-reverse;
  }
  .column {
    width: 100%;
    padding: 8px 0px;
  }
  .column-large {
    width: 100%;
  }
}
</style>
