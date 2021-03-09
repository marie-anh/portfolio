<template>
  <div class="seoelp">
    <div class="video_wrapper" id="video_wrapper">
      <video
        src="@/assets/video/seoelpvideointro.mp4"
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
        <h1>Seo-Elp</h1>
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
          <p>Webdesign</p>
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
        <div class="ctext">
          <p>
            Seo-elp est une plateforme d’e-learning spécialisée dans le
            référencement web ou SEO. Ce projet nous a été commandé par sylvain
            Sagot, enseignant à l’Esta. Par groupe de 3, nous avons dû concevoir
            les maquettes de la plateforme et de la landing page, ainsi que son
            intégration. En tant que responsable design, ma mission était la
            recherche d’une identité visuelle pour SEO-ElP ainsi que le
            maquettage de la plateforme dans sa version desktop et mobile.
          </p>
          <a href="http://seo-elp.fr/">Voir le site<span>&#8599;</span></a>
        </div>
        <img src="@/assets/img/seoelplogo.png" alt="Seo-Elp Logo" />
      </div>
    </div>

    <div class="iv">
      <div class="ivexp">
        <div class="titre" v-scroll>
          <h3 class="num">01</h3>
          <h3>identité<br /><span>Visuelle</span></h3>
        </div>
        <div class="ivtext" v-scroll>
          <p>
            Notre client voulait que la plateforme soit ludique et attractive.
            Nous avons donc orienté l’identité visuelle sur cet aspect, en
            recherchant des couleurs vives et joyeuses en marge des couleurs
            courrament utilisées dans d’autres plateformes d’e-learning. Nous
            lui avons ainsi proposé plusieurs combinaisons de couleurs, de
            typohraphies et d'interfaces. Voici celle qui a été retenue.
          </p>
        </div>
      </div>
      <div class="color">
        <h4 v-scroll>Couleurs</h4>
        <div class="colorexp">
          <div class="colortxt">
            <p>
              Les couleurs devaient refléter le ludisme et la convivialité de la
              plateforme. Je me suis donc tournée vers des couleurs vives et
              dynamiques. Pour la composition de l‘harmonie colorée, je suis
              partie d’un bleu vif, couleur associée au SEO, que j’ai utilisé
              comme couleur dominante.
            </p>
            <p>
              J’ai ensuite selectionné les autres couleurs selon un plan
              tétradic. Ce qui m’a permis d’obtenir une harmonie colorée en 4
              tons, permettant ainsi une grande possibilité de variation dans
              l’illustration des modules.
            </p>
          </div>
          <img v-paralax="3" src="@/assets/img/seoelpcolor.png" alt="Noir" />
        </div>
      </div>

      <div class="typo">
        <div class="typoexp">
          <img
            v-paralax="3"
            src="@/assets/img/seoelptypo.gif"
            alt="gif typographies"
          />
          <div class="typotxt">
            <div class="exptypotitre">
              <h4>Typographies</h4>
              <p>
                Le site étant une plateforme d’E-learning, les différents
                contenus textuels se devaient avant tout d’être lisibles. Je me
                suis donc tournée vers deux familles linéales.
              </p>
            </div>
            <p>
              Pour le texte courant, j’ai utilisé Lato, une famille linéale
              moderne et très lisible qui offre beaucoup de variances de
              graisse. Pour les titres et sous-titres, j'ai opté pour Syne, une
              police récente qui dénote par ses arrondies et sa forme, offrant
              une identitée visuelle marquée.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="maquette">
      <div class="titre" v-scroll>
        <h3 class="num">02</h3>
        <h3>Maquettes<br /><span>PC / Mobile</span></h3>
      </div>
      <p>
        La plateforme est divisée en deux vues offrant des fonctionnalitées
        distinctes, une pour les formateurs et une pour les étudiants. Il
        fallait donc penser à l’expérience utilisateur pour chaque vue. Pour
        cela, je me suis basée sur les sondages effectués par les anciens
        étudiants en charge du projet et j’ai adapaté le parcours utilisateur en
        fonction de chacune de nos cibles. Une fois les maquettes réalisées et
        validées par notre client, j’ai effectué des entretiens avec divers
        formateurs pour tester la compréhension du site et récolter des avis.
        Suite à ces entretiens j’ai modifié les maquettes pour améliorer la
        compréhension et l’ergonomie du site.
      </p>
      <div class="desktop">
        <div class="imgmaquette">
          <img v-paralax="2" src="@/assets/img/seoelpdashf.png" alt="" />
          <img v-paralax="2" src="@/assets/img/seoelpstudent.png" alt="" />
          <img v-paralax="2" src="@/assets/img/seoelpagenda.png" alt="" />
          <img v-paralax="2" src="@/assets/img/seoelpdashe.png" alt="" />
        </div>
        <a
          href="https://xd.adobe.com/view/90d37d3f-1d9e-44c2-89cd-ed99fce92071-c580/?fullscreen"
          >Voir la maquette<span>&#8599;</span></a
        >
      </div>
    </div>
    <div class="partenaire" v-scroll>
      <p>
        Ce projet est en collaboration avec Paul Cotogno intégrateur et Paul
        Garnier Communiquant
      </p>
      <div class="part_link">
        <ul>
          <li>
            <a href="http://www.paulcotogno.com/"
              >Paul Cotogno portfolio<span>&#8599;</span></a
            >
          </li>
          <li>
            <a href="http://www.jenesuispasjean.com/"
              >Paul Garnier portfolio<span>&#8599;</span></a
            >
          </li>
        </ul>
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
          <router-link class="np" to="/gallerie">See gallerie</router-link>
        </div>
        <div class="npwrapper">
          <router-link class="np" to="/dreamreality"
            >See next project</router-link
          >
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
      vw.style.webkitTransform =
        "translate3d(0," + window.pageYOffset / 2.5 + "px,0)";
    });
  },
};
</script>

<style lang="scss" scoped>
.seoelp {
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
      -webkit-backface-visibility: visible;
      backface-visibility: visible;
      video {
        min-height: 100% !important;
        z-index: -1;
      }
    }
    @include sm {
      height: 700px;
      width: 100vw;
      background-position: center;
      background-size: cover;
      background-image: url(~@/assets/video/seoelpmintro.gif);
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
    transition: all 0.4s cubic-bezier(0.46, 0.2, 0.83, 0.67);
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
        .ctext {
          display: flex;
          flex-direction: column;
          p {
            font-family: paralucent, sans-serif;
            font-weight: 300;
            color: black;
            font-size: 1.5em;
            width: 80%;
            align-self: flex-start;
            padding-right: 5%;
            margin-bottom: 5%;
          }
          a {
            font-size: 1.7em;
            font-family: "Trap";
            font-weight:600;
            text-transform: uppercase;
            color: black;
            text-decoration: none;
          }
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

  .iv {
    background: white;
    border-top: solid 1 px black;
    border-bottom: black solid 1px;
    @include lg {
      .ivexp {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 3%;
        .ivtext {
          width: 60%;
          transition: cubic-bezier(0.46, 0.2, 0.83, 0.67) all 0.4s;
          &.hide {
            opacity: 0;
            transform: translateY(4%);
          }
          p {
            font-size: 1.5em;
          }
        }
      }
      .color {
        h4 {
          font-size: 1.8em;
        }
        .colorexp {
          display: grid;
          grid-template-columns: 70% 40%;
          grid-column-gap: 2%;
          justify-content: space-between;
          .colortxt {
            display: flex;
            justify-content: space-evenly;
            p {
              font-family: paralucent, sans-serif;
              font-size: 1.5em;
              padding-right: 5%;
              width: 50%;
            }
          }
        }
      }
      .typo {
        padding: 6% 5% 2% 5%;
        h4 {
          font-family: "Trap";
          font-weight: 400;
          text-transform: uppercase;
          font-size: 1.8em;
          color: #898989;
          padding-left: 10%;
        }
        .typoexp {
          display: flex;
          justify-content: space-evenly;
          .typotxt {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1%;
            .exptypotitre {
              h4 {
                margin-bottom: 3%;
              }
            }
            p {
              font-family: paralucent, sans-serif;
              font-size: 1.5em;
              padding-left: 10%;
            }
          }
        }
      }
    }
    @include sm {
      .ivexp {
        padding: 5%;
        .ivtext {
          p {
            font-size: 1em;
          }
        }
      }
      .color {
        h4 {
          font-size: 1.5em;
        }
        .colorexp {
          p {
            font-family: paralucent, sans-serif;
            font-size: 1em;
          }
          img {
            margin-top: 10%;
          }
        }
      }
      .typo {
        .typoexp {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          p {
            display: none;
          }
          h4 {
            font-family: "Trap";
            font-weight: 600;
            font-size: 1.5em;
            text-transform: uppercase;
            color: #898989;
            margin-left: 5%;
          }
          img {
            width: 90%;
            height: 90%;
          }
        }
      }
    }
    .ivexp {
      .ivtext {
        p {
          font-family: paralucent, sans-serif;
          font-weight: 300;
          color: black;
        }
      }
    }
    .color {
      padding: 3% 5% 2% 5%;
      h4 {
        font-family: "Trap";
        font-weight: 400;
        text-transform: uppercase;
        color: #898989;
        margin-bottom: 2%;
      }
    }
  }

  .maquette {
    padding: 5%;
    p {
      font-family: paralucent, sans-serif;
      color: black;
      @include lg {
        font-size: 1.5em;
      }
      @include sm {
        font-size: 1em;
      }
    }
    h4 {
      font-family: "Trap";
      font-weight: 400;
      text-transform: uppercase;
      font-size: 1.8em;
      color: #898989;
    }
    .desktop {
      margin-top: 5%;
      .imgmaquette {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          margin: 2%;
          height: 80%;
          width: 80%;
          @include sm {
            margin: 6% 0 6% 0;
          }
        }
      }
      a {
        color: black;
        text-transform: uppercase;
        text-decoration: none;
        font-family: "Trap";
        font-weight: 600;
        text-align: center;
        margin: auto;
        display: block;
        @include lg {
          font-size: 1.7em;
        }
        @include sm {
          font-size: 1em;
        }
      }
    }
  }

  a.top {
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Trap";
    font-weight: 600;
    text-align: center;
    display: block;
    margin: auto;
    @include lg {
      font-size: 1.7em;
    }
    @include sm {
      font-size: 1em;
    }
  }

  .partenaire {
    @include lg {
      display: flex;
      justify-content: space-evenly;
      transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);
      &.hide {
        transform: translateY(20%);
        opacity: 0;
      }
      p {
        font-size: 2.3em;
        width: 60%;
      }
      li {
        margin-bottom: 10%;
        list-style: none;
        a {
          text-transform: uppercase;
          font-family: "Trap";
          font-weight: 600;
          text-decoration: none;
          color: black;
          font-size: 1.4em;
          text-align: center;
          padding-bottom: 3%;
          position: relative;

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
    @include sm {
      text-align: center;
      p {
        font-size: 1.2em;
        padding: 3%;
        width: 100vw;
      }
      .part_link {
        ul {
          display: flex;
          width: 100vw;
          justify-content: space-evenly;
          li {
            list-style: none;
            a {
              text-decoration: none;
              color: black;
              font-size: 0.6em;
              text-transform: uppercase;
              font-family: "Trap";
            }
          }
        }
      }
    }
    P {
      font-family: "Bigilla";
      color: #898989;
      font-weight: 800;
    }
  }
}
</style>