<template>
  <div class="georges">
    <div id="video-wrapp"></div>
    <header>
      <div class="line1">
        <a @click.prevent="$router.go(-1)" class="back">
          <span>&#8629;</span>
        </a>
        <h1>Georges Méliès</h1>
        <div class="categorie">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13" cy="13" r="13" fill="white" />
          </svg>
          <p>Webdesign</p>
        </div>
      </div>

      <div class="line2">
        <p class="exp">Personal project</p>
        <div class="logiciel">
          <p>Logiciels</p>
          <a href="https://www.adobe.com/products/xd.html">AdobeXD</a>
          <a href="https://vuejs.org/">Vuejs</a>
          <a href="https://www.adobe.com/products/aftereffects.html">AfterEffect</a>
        </div>
      </div>
    </header>
    <div class="data-scroll">
      <div class="concept">
        <h4>Concept <span>*</span></h4>
        <div class="conceptexp">
          <p>
            Lors d’un examen de fin de semestre, plus connu sous le nom de
            <strong>Boss</strong>, nous avons eu une journée pour confectionner
            un site web sur un réalisateur imposé. Le sujet ainsi lancé, nous
            avions 4 heures pour réaliser la maquette du site dans sa version
            mobile et PC. Nos Seuls impératifs étaient la création d’une page
            filmographie et bibliographie ainsi que la cohérence entre notre
            design et l’univers du réalisateur.
          </p>
          <img src="@/assets/img/gmlogo.png" alt="Georges Méliès Logo" />
        </div>
      </div>

      <div class="iv">
        <div class="ivexp">
          <div class="titre" v-scroll>
            <h3 class="num">01</h3>
            <h3>identité <br /><span>Visuelle</span></h3>
          </div>
          <div class="ivtext" v-scroll>
            <p>
              J’ai recherché dans l'identité visuelle à me rapprocher le plus
              possible de l’univers de <strong>Georges Méliès</strong>. Pour
              cela, j’ai essayé de reproduire un style « print » rappelant les
              vieux journaux de l’époque. Le logo du site est quant à lui une
              étoile à 11 branches représentant celle utilisée dans nombre de
              ses courts métrages.
            </p>
            <p>
              Les films du réalisateur étant jugés comme hors du temps à
              l’époque de leur sorti. J’ai voulu retranscrire cette ambiance
              entre classique et modernisme dans mon design.
            </p>
          </div>
        </div>
        <div class="colortyp" v-paralax="1">
          <div class="color">
            <h4>Couleurs</h4>
            <p>
              Pour les couleurs j’ai utilisé exclusivement le noir et le blanc,
              rappel des films de Méliés.
            </p>
            <div class="colorimg">
              <img src="@/assets/img/gmblack.png" alt="Noir" />
              <img src="@/assets/img/gmwhite.png" alt="White" />
            </div>
          </div>

          <div class="typo">
            <div class="typoexp">
              <h4>Typographies</h4>
              <p>
                Pour les typographies: j’ai choisi pour les titres “Gletsher”,
                une typo avec serif rappelant le coté ancien. pour les
                sous-titre, j’ai utilisé "Trap" une typographie très morderne.
                Enfin pour le texte courant j'ai opté pour “oxygen”, une typo
                mono est très lisible.
              </p>
            </div>
            <div class="typogif">
              <img src="@/assets/video/gmtypo.gif" alt="gif typographies" />
            </div>
          </div>
        </div>
      </div>

      <div class="maquette">
        <div class="titre" v-scroll>
          <h3 class="num">02</h3>
          <h3>
            Maquettes <br />
            <span>PC / Mobile</span>
          </h3>
        </div>
        <p>
          Voici un aperçu des différentes maquettes, avec la page d’accueil du
          site ainsi que la rubrique bibliographie.
        </p>
        <div class="desktimg">
          <img v-paralax="2" id="img1" src="@/assets/img/gmhome.png" alt="" />
          <img v-paralax="8" id="img2" src="@/assets/img/gmbio.png" alt="" />
        </div>
      </div>

      <div class="rework">
        <div class="rework-text">
          <div class="titre" v-scroll>
            <h3 class="num">03</h3>
            <h3>Rework</h3>
          </div>
          <p>
            Une fois l’examen passé j’ai retravaillé la maquette dans sa version
            mobile. En effet le projet m’avait interessé, j’ai ainsi voulu,
            retravailler le design et ajouter quelques interactions en animant
            la maquette sous AfterEffect.
          </p>
        </div>
        <div class="gmmobile">
          <img v-paralax="2" src="@/assets/img/melies.png" alt="" />
          <img v-paralax="4" src="@/assets/img/FINAL-GM_2.gif" alt="" />
          <img v-paralax="2" src="@/assets/img/gmmobilebio.png" alt="" />
        </div>
      </div>

      <a class="top" @click="scrollTop">Back to top<span>&#8593;</span></a>

      <div class="next">
        <div class="thanks">
          <p>Thanks for watching</p>
          <img src="@/assets/img/eyes.png" alt="" />
        </div>
        <div class="nextpage">
          <div class="npwrapper">
            <router-link to="/gallerie" class="np">Show gallerie</router-link>
          </div>
          <div class="npwrapper">
            <router-link class="np" to="/campuscar"
              >See next project</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    var vw = document.getElementById("video-wrapp");

    document.addEventListener("scroll", () => {
      vw.style.backgroundPositionY = window.pageYOffset / 2.5 + "px";
    });
  },
};
</script>

<style lang="scss" scoped>
.georges {
  #video-wrapp {
    @include lg {
      height: 100vh;
      width: 100vw;
      background-image: url(~@/assets/video/gmcoverintro.gif);
      background-position: center;
      background-size: cover;
      transition: all 0.02s cubic-bezier(0.46, 0.2, 0.83, 0.67);
    }
    @include sm {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
       background-image: url(~@/assets/img/FINAL-GM_2.gif);
       
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
          font-size: 3vh;
          padding-top: 5%;
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
        grid-template-columns: 40% 60%;
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
            display: none;
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
          height: 30%;
          width: 30%;
          display: block;
          margin: auto;
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

        p {
          font-family: paralucent, sans-serif;
          font-weight: 300;
          color: black;
          font-size: 1.5em;
          width: 50%;
          align-self: flex-start;
          padding-right: 5%;
          margin-right: 20%;
        }
        img {
          align-self: center;
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

  h4 {
    color: #898989;
    font-family: "Trap";
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0.5em;
    @include lg {
      font-size: 3.5em;
    }
    @include sm {
      font-size: 1.5em;
    }
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

  .iv {
    border-top: solid 1 px black;
    border-bottom: black solid 1px;
    .ivexp {
      @include lg {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 3% 5% 3%;
      }
      @include sm {
      }
      .ivtext {
        @include lg {
          width: 60%;
          transition: all 0.2s cubic-bezier(0.46, 0.2, 0.83, 0.67);
          &.hide {
            opacity: 0;
            transform: translateY(5%);
          }
          p {
            font-size: 1.5em;
          }
        }
        @include sm {
          padding: 5%;
          font-size: 1em;
          p {
            font-size: 1em;
          }
        }
        p {
          font-family: paralucent, sans-serif;
          font-weight: 300;
          color: black;
        }
      }
    }
    .colortyp {
      @include lg {
        border-top: black solid 1px;
        display: flex;
        .color {
          padding: 2.5%;
          width: 50%;
          border-right: solid black 1px;
          .colorimg {
            display: flex;
            justify-content: space-evenly;
            margin-top: 10%;
          }
        }
        .typo {
          display: flex;
          .typoexp {
            padding: 3%;
          }
          .typogif {
            img {
              height: 440px;
              width: 520px;
            }
          }
        }
      }
      @include sm {
        padding: 5%;
        .color {
          p {
            display: none;
          }
          .colorimg {
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 3%;
          }
        }
        .typo {
          padding: 5%;
          .typoexp {
            p {
              display: none;
            }
          }
          .typogif {
            display: flex;
            justify-content: center;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }

  .maquette {
    @include lg {
      p {
        font-size: 2em;
        margin-left: 3%;
        width: 50%;
      }
      .desktimg {
        display: flex;
        justify-content: flex-start;
        justify-content: space-evenly;
        margin-top: 5%;
        #img1 {
          height: 1200px;
          width: 580px;
          margin-top: 2%;
        }
        #img2 {
          height: 935px;
          width: 625px;
          margin-top: -5%;
        }
      }
    }
    @include sm {
      display: none;
    }
  }
  .rework {
    @include lg {
      border-top: black solid 1px;
      margin-top: 10%;
    }
    @include sm {
      padding: 5%;
    }
    .rework-text {
      @include lg {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3%;
        transition: all 0.3s ease-in;
        p {
          width: 60%;
          &.hide {
            opacity: 0;
            transform: translateY(5%);
          }
        }
      }
    }
    .gmmobile {
      @include lg {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        img {
          height: 90%;
        }
      }
      @include sm {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 80%;
        }
      }
    }
  }
  .next {
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
