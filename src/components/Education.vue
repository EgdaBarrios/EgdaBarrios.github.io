<template>
  <div class="education">
    <div class="row">
      <div class="column">
        <h4>{{ sectionTitle }}</h4>
      </div>
      <div class="column">
        <p>
          In order to complement my knowledge, and in tone with my vision of becoming a
          well-rounded specialist, I joined <strong>CODERHOUSE´s UX-UI Designer</strong> course
          from <strong>September to December 2020.</strong><br>
          After sixteen very intense weeks, from research to the MVP, I finished my project, a
          PPE Inspection app.
        </p>
        <div class="small-screen">
          <div class="buttons">
            <button class="secondary" @click="showInspectorPopup = true">PPE INSPECTOR</button>
          </div>
        </div>
      </div>
      <div class="column">
        <p>
          In 2019 the world turned upside down, and so did I. We were facing the covid
          pandemic and most of us had to stay home, so I studied; first to keep my mind
          focused on the positive, the things I had control over, but later completely dragged
          into coding.<br>
          So from <strong>July to December 2020</strong>, I studied the fundamentals of <strong>
          Frontend development</strong> at <strong>Laboratoria´s Bootcamp</strong>, a six-month
          program that drives women, in Latam, thru their career path in tech.<br>
          Working both on the hard and soft skills needed, developing real-life projects that
          scaled up in complexity. Solo and in teams, but always giving that
          little extra esthetic feel.
        </p>
        <div class="small-screen">
          <div class="buttons">
            <button class="secondary margin-bottom" @click="showCosplayPopup = true">
              COSPLAY
            </button>
            <button class="secondary margin-bottom" @click="showPokedexPopup = true">
              POKÉDEX
            </button>
            <button class="secondary" @click="showLukeandoPopup = true">
              LUKEANDO
            </button>
          </div>
        </div>
      </div>
      <div class="column margin-bottom">
        <p>
          A long time has passed since I studied <strong>Architecture</strong> at <strong>UCV -
          Universidad Central de Venezuela</strong>, back in my native Country.
          Those were very fine years, filled with new experiences, friends, and knowledge. Had a
          ball designing all kinds of spaces, and building up the art looking presentations.<br>
          Got to participate in some conferences, and travel a bit too!
        </p>
      </div>
    </div>
    <div class="large-screen">
      <div class="row links">
        <div class="column"></div>
        <div class="column">
          <button class="secondary" @click="showInspectorPopup = true">PPE INSPECTOR</button>
        </div>
        <div class="column">
          <button class="secondary margin-bottom" @click="showCosplayPopup = true">COSPLAY</button>
          <button class="secondary margin-bottom" @click="showPokedexPopup = true">POKÉDEX</button>
          <button class="secondary" @click="showLukeandoPopup = true">LUKEANDO</button>
        </div>
        <div class="column"></div>
      </div>
    </div>
    <Popup
      v-if="showInspectorPopup"
      @close="showInspectorPopup = false"
    >
      <template>
        <div class="project-template">
          <div class="information-detail">
            <h2 class="project-name">PPE Inspector</h2>
            <p class="project-summary">
              Mobile APP for PPE (Personal Protective Equipment) inspections. Program, do, register,
              and cloud storage the data.
            </p>
          </div>
          <div class="hero-container">
            <iframe
              src="https://drive.google.com/file/d/1X7-wagVQE8vGmd0vZ_ypGif1n0fPfR0e/preview"
              width="640"
              height="480"
              allow="autoplay"
            >
            </iframe>
          </div>
          <div class="tool-list">
            <div class="tools-used">
              UX-UI Design | Figma prototype
            </div>
            <div class="project-link">
              <span>Click to </span>
              <router-link to="/PPE-Inspector" class="link">
                Go to study case
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </Popup>
    <Popup
      v-if="showCosplayPopup"
      @close="showCosplayPopup = false"
    >
      <template>
        <div class="project-template">
          <div class="information-detail">
            <h2 class="project-name">COSplay</h2>
            <p class="project-summary">
              Social Network for Cosplayers, user authentication, content manipulation.
            </p>
          </div>
          <div class="hero-container">
            <iframe
              src="https://drive.google.com/file/d/1dPxzPPzP_JaEKnvMtj-NNzXYU8Kr_zx4/preview"
              width="640"
              height="480"
              allow="autoplay"
            >
            </iframe>
          </div>
          <div class="tool-list">
            <div class="tools-used">
              SPA | Firebase | HTML | JS | CSS
            </div>
            <div class="project-link">
              <span>Click to </span>
              <a href="https://github.com/EgdaBarrios/LIM013-fe-social-network">
                <span class="link">Go to repository</span>
              </a>
            </div>
          </div>
        </div>
      </template>
    </Popup>
    <Popup
      v-if="showPokedexPopup"
      @close="showPokedexPopup = false"
    >
      <template>
        <div class="project-template">
          <div class="information-detail">
            <h2 class="project-name">POKÉDEX</h2>
            <p class="project-summary">
              Responsive website to show, filter and manipulate data from Pokémon.
            </p>
          </div>
          <div class="hero-container">
            <iframe
              src="https://drive.google.com/file/d/1OKCqexxRqlVae_3GaZu6zDArwRSeNiXF/preview"
              width="640"
              height="480"
              allow="autoplay"
            >
            </iframe>
          </div>
          <div class="tool-list">
            <div class="tools-used">
              HTML | JS | CSS
            </div>
            <div class="project-link">
              <span>Click to </span>
              <a href="https://github.com/EgdaBarrios/LIM013-data-lovers">
                <span class="link">Go to repository</span>
              </a>
            </div>
          </div>
        </div>
      </template>
    </Popup>
    <Popup
      v-if="showLukeandoPopup"
      @close="showLukeandoPopup = false"
    >
      <template>
        <div class="project-template">
          <div class="information-detail">
            <h2 class="project-name">Lukeando</h2>
            <p class="project-summary">
              Mobile banking application layout. Card validation.
            </p>
          </div>
          <div class="hero-container">
            <Slider />
          </div>
          <div class="tool-list">
            <div class="tools-used">
              HTML | JS | CSS
            </div>
            <div class="project-link">
              <span>Click to </span>
              <a href="https://github.com/EgdaBarrios/LIM013-card-validation">
                <span class="link">Go to repository</span>
              </a>
            </div>
          </div>
        </div>
      </template>
    </Popup>
  </div>
</template>

<script>
import Popup from './common/Popup.vue';
import Slider from './Slider.vue';

export default {
  name: 'Education',
  components: {
    Popup,
    Slider,
  },
  data() {
    return {
      sectionTitle: 'Education',
      showInspectorPopup: false,
      showCosplayPopup: false,
      showPokedexPopup: false,
      showLukeandoPopup: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.education {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  justify-content: space-between;
}
.links {
  margin-top: 32px;
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
.secondary {
  padding: 10px 16px;
  border-radius: 24px;
  // border: 1px solid #000000;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.secondary:hover {
  background-color: #00000018;
}
.margin-bottom {
  margin-bottom: 12px;
}
.project-template {
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
}
.hero-container,
.information-detail,
.project-name,
.project-summary,
.tool-list,
.tools-used,
.project-link,
span,
.link {
  background-color: transparent;
}
.hero-container {
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
}
iframe {
  width: 480px;
  height: 360px;
}
.information-detail {
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}
.project-name {
  margin-bottom: 8px;
}
.tool-list {
  display: flex;
  justify-content: space-between;
}
.tools-used,
.project-link {
  margin-top: 8px;
  font-size: 14px;
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
  .secondary {
    padding: 8px 16px;
  }
  .buttons {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
  }
}
</style>
