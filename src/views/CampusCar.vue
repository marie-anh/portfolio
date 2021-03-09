<template>
  <div class="campuscar">
    <div class="video_wrapper" id="video_wrapper">
      <video
        src="@/assets/video/campuscarvideointro.mp4"
        autoplay
        muted
        loop
      ></video>
    </div>
    <header>
      <div class="line1">
        <a @click.prevent="$router.go(-1)" class="back">
          <span>&#8629;</span>
        </a>
        <h1>Campus car</h1>
        <div class="categorie">
          <svg
            width="10"
            height="10"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13" cy="13" r="13" fill="white" />
          </svg>
          <p>UI/UX Design</p>
        </div>
      </div>

      <div class="line2">
        <p class="exp">group project</p>
        <div class="logiciel">
          <p>Logiciels</p>
          <a href="https://www.adobe.com/products/xd.html">AdobeXD<span>&#8599;</span></a>
          <a href="https://www.adobe.com/products/aftereffects.html">AfterEffect<span>&#8599;</span></a>
        </div>
      </div>
    </header>

    <div class="concept">
      <h4>Concept</h4>
      <div class="conceptexp">
        <p>
          Campus Car est une application de covoiturage réservée aux étudiants,
          employés et enseignants de l’IUT de Belfort Montbéliard. Ce projet
          nous a était présenté dans le cadre de la spécialité webdesign, nous
          avons ainsi dû concevoir la maquette prototypée de l’application en
          suivant les méthodes d’UI et UX design et une réflexion orientée sur
          l’expérience utilisateur.
        </p>
        <img src="@/assets/img/ccconcept.png" alt="Seo-Elp Logo" />
      </div>
    </div>
    <div class="etude">
      <div class="titre" v-scroll>
        <h3 class="num">01</h3>
        <h3>Étude <br /><span>Préalable</span></h3>
      </div>
      <div class="etudeexp">
        <div class="etudetxt">
          <p>
            Avant de s’attaquer au design de l’interface, nous avons dû nous
            pencher sur l’expérience et le chemin utilisateur. Après une étude
            de la concurrence et la réalisation de persona, nous avons réalisé
            plusieurs cartes d’expérience pour dégager le chemin utilisateur,
            certaines fonctionnalités et points de rupture. Ce travail nous a
            permis de concevoir un Userflow exposant le parcours utilisateur
            ainsi que les diverses pages présentes sur l’application.
          </p>
          <a href="https://drive.google.com/file/d/1coG5ZLDRodl264BWuSe996NpiKMY9rQq/view?usp=sharing">Lire l'etude prealable<span>&#8599;</span></a>
        </div>
        <img v-paralax="3" src="@/assets/img/userflow_Campuscar.png" alt="" />
      </div>
    </div>

    <div class="wireframes">
      <div class="titre" v-scroll>
        <h3 class="num">02</h3>
        <h3>WIREFRAMES</h3>
      </div>
      <p>
        Prochaine étape de notre design process : Les Wireframes, soit le «
        squelette » de l’application. Dans cette étape j’ai réalisé les
        différentes pages des wireframes en réfléchissant à la structure et la
        disposition des différents composants. Aidée du Userflow nous avons
        déterminé et designé les différentes pages sans se soucier de
        l’esthétique de l’application. Cette étape permet une plus grande
        concentration sur l’expérience utilisateur, l’ergonomie et la
        compréhension du site.
      </p>
      <div class="wireframeimg">
        <img v-paralax="2" src="@/assets/img/ccwtrajets.png" alt="" />
        <img v-paralax="5" src="@/assets/img/ccwinfos.png" alt="" />
        <img v-paralax="2" src="@/assets/img/ccwnotifs.png" alt="" />
        <img v-paralax="5" src="@/assets/img/ccwprofil.png" alt="" />
      </div>
      <a href="#">See wireframes<span>&#8599;</span></a>
    </div>

    <div class="maquette">
      <div class="titre" v-scroll>
        <h3 class="num">03</h3>
        <h3>
          Maquette <br />
          Graphique
        </h3>
      </div>
      <p>
        L’étape finale consistait à réaliser la maquette graphique du site. Nous
        avons ainsi défini un design system pour l’application. Notre but : des
        couleurs vives qui rappellent notre IUT, à savoir le vert et le violet.
        Des ombres et de la perspective entre les différents composants en
        s'inspirant du style dit « néomorphisme ». Nous avons ensuite ajouté des
        illustrations 3D organisées en scènes pour l’attrait, et choisi des
        typographies lisibles, mais à forte personnalité.
      </p>
      <div class="maquetteimg-wrapp">
        <div class="maquettegimg">
          <img v-paralax="4" src="@/assets/img/ccmintro.png" alt="" />
          <img v-paralax="2" src="@/assets/img/ccmtrajets.png" alt="" />
          <img v-paralax="4" src="@/assets/img/ccminfos.png" alt="" />
        </div>

        <div class="maquettegimg">
          <img v-paralax="2" src="@/assets/img/ccmreserv.png" alt="" />
          <img v-paralax="4" src="@/assets/img/ccmnotifs.png" alt="" />
          <img v-paralax="2" src="@/assets/img/ccmprofil.png" alt="" />
        </div>
      </div>
      <a href="#">See maquette<span>&#8599;</span></a>
    </div>

    <div class="partenaire" v-scroll>
      <p>Ce projet est en collaboration avec Violette Gruillot</p>
      <a href="http://violettegruillot.fr/"
        >Go check her portfolio<span>&#8599;</span></a
      >
    </div>

    <a class="top" @click="scrollTop">Back to top<span>&#8593;</span></a>

    <div class="next">
      <div class="thanks">
        <p>Thanks for watching</p>
        <img src="@/assets/img/eyes.png" alt="" />
      </div>
      <div class="nextpage">
        <div class="npwrapper">
          <router-link class="np" to="/gallerie">Show gallerie</router-link>
        </div>
        <div class="npwrapper">
          <router-link class="np" to="/seoelp">See next project </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var vw = document.getElementById("video_wrapper");

    document.addEventListener("scroll", () => {
      vw.style.transform = "translateY(" + window.pageYOffset / 2.5 + "px)";
    });
  },
};
</script>

<style lang="scss" scoped>
.campuscar {
  .video_wrapper {
    @include lg {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: -2;
      video {
        min-height: 100% !important;
        z-index: -1;
        width: 100vw;
      }
    }
   @include sm {
      height: 700px;
      width: 100vw;
      background-position: center;
      background-size: cover;
      background-image: url(~@/assets/img/ccintroprojetm.gif);
      z-index: -1;
      position: relative;
      video {
        display: none;
      }
    }
  }
  header {
    background: white;

    @include sm {
      .line1 {
        grid-template-columns: 8% auto 30%;
        .back {
          font-size: 2vh;
        }
        h1 {
          font-size: 4vh;
          padding-top: 2%;
        }
        .categorie {
          text-align: center;
          p {
            font-size: 2vh;
            padding-right: 6%;
          }
          svg {
            visibility: hidden;
          }
        }
      }
      .line2 {
        grid-template-columns: 30% 70%;
        p {
          font-size: 1em;
          &.exp {
            margin-left: 10%;
          }
        }
        .logiciel {
          padding: 2% 0 2% 2%;
          p {
            font-size: 0.8em;
            visibility: hidden;
          }
          a {
            font-size: 1em;
            padding-right: 3%;
          }
        }
      }
    }
    @include lg {
      .line1 {
        grid-template-columns: 6% auto 30%;
        h1 {
          font-weight: 400;
          font-size: 13vh;
        }
        .back {
          font-size: 8vh;
        }
        .categorie {
          p {
            font-size: 5vh;
            margin: 0 1vw;
          }
          svg {
            visibility: initial;
          }
        }
      }
      .line2 {
        grid-template-columns: 40% 60%;
        p {
          font-size: 4vh;
          &.exp {
            margin-left: 20%;
          }
        }
        .logiciel {
          padding: 1.45%;
          p {
            visibility: visible;
            font-size: 4vh;
          }
          a {
            font-size: 3vh;
          }
        }
      }
    }
    .line1 {
      display: grid;
      width: 100vw;
      justify-items: stretch;
      align-items: center;
      border-bottom: solid 1px black;
      .back {
        align-self: stretch;
        background: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h1 {
        align-self: stretch;
        font-family: "Bigilla";
        text-transform: uppercase;
        text-align: left;
        margin: 0 0 0 2vw;
      }
      .categorie {
        align-self: stretch;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: white;
        background: black;
        p {
          font-family: "trap";
          text-transform: uppercase;
        }
        svg {
          height: 50px;
          width: 50px;
        }
      }
    }

    .line2 {
      display: grid;
      align-items: center;
      border-bottom: black solid 1px;
      p {
        font-family: paralucent, sans-serif;
        font-weight: 300;
        font-style: normal;
      }

      .logiciel {
        display: flex;
        justify-content: space-around;
        border-left: solid 1px black;
        p {
          color: #898989;
          font-family: "trap";
          font-weight: 400;
          text-transform: uppercase;
        }
        a {
          color: black;
          font-family: paralucent, sans-serif;
          font-weight: 300;
          text-decoration: none;
        }
      }
    }
  }

  .titre {
    @include lg {
      .num {
        font-size: 27vh;
      }
      h3 {
        font-size: 10vh;
        margin-left: 3%;
      }
    }

    @include sm {
      transition: 0.5s ease all;
      &.hide {
        opacity: 0;
        transform: translateY(10%);
      }
      .num {
        font-size: 15vh;
      }
      h3 {
        font-size: 5vh;
        margin-left: 4%;
      }
    }

    background: white;
    display: flex;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.46, 0.2, 0.83, 0.67);
    &.hide {
      opacity: 0;
      transform: translateY(3%);
    }
    .num {
      font-family: "Bigilla";
      font-weight: 800;
      color: #898989;
    }
    h3 {
      font-family: "Bigilla";
      font-weight: 400;
      text-transform: uppercase;
      color: #898989;
    }
  }

  .concept {
    @include sm {
      padding: 5%;
      h4 {
        font-size: 2em;
        margin-bottom: 0.5em;
        margin-top: 5%;
      }
      .conceptexp {
        p {
          font-family: paralucent, sans-serif;
          font-weight: 300;
          color: black;
          font-size: 1em;
          margin-bottom: 10%;
        }
        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    @include lg {
      padding: 5%;
      h4 {
        font-size: 3.5em;
        margin-bottom: 0.5em;
      }
      .conceptexp {
        display: flex;
        justify-content: space-between;
        p {
          font-family: paralucent, sans-serif;
          font-weight: 300;
          color: black;
          font-size: 1.5em;
          width: 50%;
          align-self: flex-start;
          padding-right: 5%;
        }
        img {
          align-self: center;
          height: 50%;
          width: 50%;
        }
      }
    }

    background: white;
    h4 {
      color: #898989;
      font-family: "Trap";
      font-weight: 600;
      text-transform: uppercase;
      span {
        font-weight: 800;
      }
    }
  }

  h4 {
    color: #898989;
    font-family: "Trap";
    font-weight: 400;
    text-transform: uppercase;
    font-size: 3.5em;
    margin-bottom: 0.5em;
  }
  p {
    font-family: paralucent, sans-serif;
    font-weight: 300;
    @include lg {
      font-size: 1.5em;
    }
    @include sm {
      font-size: 1em;
    }
  }

  .etude {
    border-top: solid 1px black;
    .etudeexp {
      @include lg {
        padding: 5%;
        display: flex;
      }
      .etudetxt {
        @include sm {
          padding: 5%;
        }
      }
      a {
        display: block;
        font-family: "Trap";
        font-weight: 600;

        text-decoration: none;
        text-transform: uppercase;
        color: black;
        margin-top: 10%;
        @include lg {
          font-size: 1.3em;
        }
        @include sm {
          font-size: 1em;
        }
      }
      img {
        height: 50%;
        width: 50%;
        margin-top: -20%;
        @include sm {
          display: none;
        }
      }
    }
  }

  .wireframes {
    a {
      display: block;
      margin: auto;
      text-transform: uppercase;
      font-family: "Trap";
      font-weight: 600;
      text-decoration: none;
      color: black;
      text-align: center;
      @include lg {
        font-size: 1.3em;
      }
      @include sm {
        font-size: 1em;
      }
    }
    p {
      padding: 5%;
    }
    .wireframeimg {
      @include lg {
        padding: 5%;
        display: flex;
        justify-content: center;
      }
      @include sm {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      }
      img {
        padding: 4%;
        @include sm {
          width: 100%;
        }
      }
    }
  }

  .maquette {
    margin-top: 5%;
    a {
      display: block;
      margin: auto;
      text-transform: uppercase;
      font-family: "Trap";
      font-weight: 600;
      text-decoration: none;
      color: black;
      text-align: center;
      @include lg {
        font-size: 1.3em;
      }
      @include sm {
        font-size: 1em;
      }
    }
    p {
      padding: 5%;
    }
    .maquetteimg-wrapp {
      @include lg {
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .maquettegimg {
        @include lg {
          display: flex;
          justify-content: center;
          margin-bottom: 3%;
        }
        @include sm {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        img {
          padding: 3%;

          @include sm {
            height: 80%;
            width: 80%;
          }
        }
      }
    }
  }

  .partenaire {
    @include lg {
      display: flex;
      justify-content: space-evenly;
      padding: 5%;
      transition: all 0.5s cubic-bezier(0.65, 0.14, 0.83, 0.67);
      &.hide {
        transform: translateY(20%);
        opacity: 0;
      }
    }
    @include sm {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5%;
    }

    P {
      font-family: "Bigilla";
      color: #898989;
      font-weight: 800;
      @include lg {
        font-size: 2em;
      }
      @include sm {
        font-size: 1.5em;
        text-align: center;
        margin-bottom: 3%;
      }
    }
    a {
      text-transform: uppercase;
      font-family: "Trap";
      font-weight: 600;
      text-decoration: none;
      color: black;
      text-align: center;
      position: relative;
      @include sm {
        font-size: 1em;
      }
      @include lg {
        font-size: 1.4em;
        &:after {
          background: none repeat scroll 0 0 transparent;
          bottom: 0;
          content: "";
          display: block;
          height: 2px;
          left: 50%;
          position: absolute;
          background: black;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
          width: 0;
        }
        &:hover:after {
          width: 100%;
          left: 0;
        }
      }
    }
  }

  .thanks {
    p {
      font-family: "Trap";
      font-weight: 600;
      color: black;
      font-size: 10vh;
      text-align: right;
      margin-right: 5%;
      text-transform: uppercase;
    }
  }
}
</style>