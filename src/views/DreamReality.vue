<template>
  <div class="md">
    <div id="video_wrapper">
      <video src="@/assets/video/mdvideointro.mp4" loop muted autoplay></video>
    </div>
    <header>
      <div class="line1">
        <a @click.prevent="$router.go(-1)" class="back">
          <span>&#8629;</span>
        </a>
        <h1>Dream Reality</h1>
        <div class="categorie">
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 0L24.9213 14.2539L34.6644 3.5718L28.9951 16.872L42.9667 13.1532L31.0068 21.2769L44.771 25.7021L30.3176 26.0702L39.5044 37.2344L27.1464 29.7299L28.839 44.0886L22.5 31.0942L16.161 44.0886L17.8536 29.7299L5.49563 37.2344L14.6824 26.0702L0.229017 25.7021L13.9932 21.2769L2.03328 13.1532L16.0049 16.872L10.3356 3.5718L20.0787 14.2539L22.5 0Z"
              fill="white"
            />
          </svg>
          <p>Motion design</p>
        </div>
      </div>

      <div class="line2">
        <p class="exp">Personal project</p>
        <div class="logiciel">
          <p>Logiciels</p>
          <a href="https://www.adobe.com/products/aftereffects.html">AfterEffect<span>&#8599;</span></a>
          <a href="https://www.adobe.com/products/photoshop.html">Photoshop<span>&#8599;</span></a>
        </div>
      </div>
    </header>

    <div class="concept">
      <h4>Concept</h4>
      <div class="conceptexp">
        <p>
          Dans le cadre de mon cours de Motion Design, j'ai dû réalisé une
          vidéo sur le sujet de mon choix. J'ai choisi la différenciation entre
          rêve et réalité. Pour cela, je me suis inspirée de l'esprit cyberpunk
          et des films tels que <strong>Ghost in the Shell</strong>  ou <strong>Matrix</strong>,  tout en rajoutant ma
          patte personnelle à travers l’harmonie colorée et les typographies. Le
          rendu final reflète cette contradiction entre un monde “physique”
          coloré et imagé contre un monde “crypté” froid et noir, où tout est
          prédéfini.
        </p>
        <img src="@/assets/img/mdlogo.png" alt="Logo cellules" />
      </div>
    </div>

    <div class="story">
      <div class="storyexp">
        <div class="titre" v-scroll>
          <h3 class="num">01</h3>
          <h3>Story <br /><span>Board</span></h3>
        </div>
        <p>
          Avant de me lancer dans l’animation, j’ai élaboré la trame narrative de
          ma vidéo et assemblé les différents visuels. J’ai ensuite mis en
          page ce storyboard en expliquant mes intentions.
          Pour la musique, j’ai choisis d’utiliser le remix d’Alice au Pays des
          Merveilles d’Odezenne. L’histoire d’Alice parcourt aussi cette notion
          d’imaginaire et de réel, en accompagnant le personnage dans son songe.
        </p>
      </div>

      <div class="storypicture"> 
        <img v-paralax="2" src="@/assets/img/mdstorycells.png" alt="" />
        <img v-paralax="3.5" src="@/assets/img/mdstoryfaces.png" alt="" />
        <img v-paralax="5" src="@/assets/img/mdstorypicture.png" alt="" />
      </div>
      <a href="#">See storyboard<span>&#8599;</span></a>
    </div>

    <div class="anim">
      <div class="titre" v-scroll>
        <h3 class="num">02</h3>
        <h3>Animation</h3>
      </div>
      <div class="animgif">
        <img src="@/assets/img/mdpsych.gif" alt="" />
        <img src="@/assets/img/mdreality.gif" alt="" />
      </div>
    </div>

    <div class="video-section">
      <div class="titre" v-scroll>
        <h3 class="num">03</h3>
        <h3>Video</h3>
      </div>
      <div class="video">
        <iframe
          src="https://player.vimeo.com/video/502216348"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
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
          <router-link class="np" to="/gallerie">Show gallerie</router-link>
        </div>
        <div class="npwrapper">
          <router-link class="np" to="/georgesmelies"
            >See next project
          </router-link>
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

<style lang="scss"  scoped>
.md {
  #video_wrapper {
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
        min-height: 100%;
      }
    }
     @include sm {
      height: 700px;
      width: 100vw;
      background-position: center;
      background-size: cover;
      background-image: url(~@/assets/img/gmintrom.gif);
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
        grid-template-columns: 40% 60%;
        p {
          font-size: 1em;
          &.exp {
            margin-left: 10%;
          }
        }
        .logiciel {
          padding: 2% 0 2% 0;
          p {
            font-size: 0.8em;
            display: none;
          }
          a {
            font-size: 1em;
            
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
          width: 50vh;
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
    transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);
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

  .story {
    .storyexp {
      @include lg {
        display: flex;
        justify-content: space-between;
        margin: 5%;
        p {
          width: 50%;
        }
      }
      @include sm {
        padding: 5%;
      }
    }
    .storypicture {
      @include lg {
        display: flex;
        justify-content: space-between;
        margin: 5%;
      }
      @include sm {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 70%;
          margin: 2%;
        }
      }
    }
    a {
      text-decoration: none;
      display: block;
      text-align: center;
      margin: auto;
      text-transform: uppercase;
      font-family: "Trap", sans-serif;
      font-weight: 600;
      color: black;
      @include lg {
        font-size: 1.7em;
      }
      @include sm {
        font-size: 1em;
      }
    }
  }
  .anim {
    .titre {
      margin-left: 5%;
    }
    .animgif {
      @include sm {
        width: 100vw;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      img {
        width: 100%;
        margin-bottom: 5%;
      }
    }
  }
  .video {
    display: flex;
    justify-content: center;
  }


  .next {
    @include lg {
      border-top: black solid 2px;
      display: flex;
      .thanks {
        @include sm {
          display: none;
        }
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 70%;
        padding: 3%;
        border-right: solid 2px black;
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
    .nextpage {
      @include lg {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-content: center;
      }
      @include sm {
        display: flex;
        justify-content: space-between;
        justify-items: center;
      }

      .npwrapper {
        @include lg {
          height: 50%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-bottom: black 2px solid;
          transition: all 0.2s ease;
          padding: 0 0 0 20%;
          &:hover {
            background: black;
            a {
              color: white;
            }
          }
          .np {
            text-align: left;
            color: black;
            transition: all 0.2s ease;
          }
        }
        @include sm {
          display: flex;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border: solid 1px black;
        }
      }
      a {
        text-decoration: none;
        font-family: "Trap";
        font-weight: 800;
        @include lg {
          font-size: 2.3em;
        }
        @include sm {
          font-size: 1.2em;
        }
      }
    }
  }
}
</style>