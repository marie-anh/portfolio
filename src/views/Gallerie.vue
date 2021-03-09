<template>
  <div class="gallerie">
    <div class="video_wrapper" id="video_wrapper">
      <video src="@/assets/video/gallerieintro.mp4" autoplay muted loop></video>
    </div>
    <header>
      <div class="line1">
        <a @click.prevent="$router.go(-1)" class="back">
          <span>&#8629;</span>
        </a>
        <h1>Gallerie Graphique</h1>
        <div class="categorie">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 9.5C18.5 13.8467 14.7678 17.5 10 17.5C5.23215 17.5 1.5 13.8467 1.5 9.5C1.5 5.15329 5.23215 1.5 10 1.5C14.7678 1.5 18.5 5.15329 18.5 9.5Z"
              fill="none"
              stroke="white"
              stroke-width="2"
            />
          </svg>
          <p>graphisme</p>
        </div>
      </div>
    </header>

    <div class="gallerie-scene">
      <div class="bckg_img" id="img1">
        <div class="caption">
          <h5>COVER ODEZENNE FRONT</h5>
          <p>Photoshop</p>
        </div>
      </div>

      <div class="bckg_img" id="img2">
        <div class="caption">
          <h5>COVER ODEZENNE BACK</h5>
          <p>Photoshop</p>
        </div>
      </div>

      <div class="bckg_img" id="img3">
        <div class="caption">
          <h5>VLAD</h5>
          <p>Photoshop</p>
        </div>
      </div>

      <div class="bckg_img" id="img4">
        <div class="caption">
          <h5>ROLL THE DICE</h5>
          <p>Photoshop <span>&#10042;</span> Blender</p>
        </div>
      </div>

      <div class="bckg_img" id="img5">
        <div class="caption">
          <h5>HAVE A NICE TRIP</h5>
          <p>Photoshop</p>
        </div>
      </div>

      <div class="bckg_img" id="img6">
        <div class="caption">
          <h5>Miller cover</h5>
          <p>Photoshop <span>&#10042;</span> Illustrator</p>
        </div>
      </div>

      <div class="bckg_img" id="img7">
        <div class="caption">
          <h5>H</h5>
          <p>Blender</p>
        </div>
      </div>

      <div class="bckg_img" id="img8">
        <div class="caption">
          <h5>ARCA</h5>
          <p>Photoshop</p>
        </div>
      </div>

      <div class="bckg_img" id="img9">
        <div class="caption">
          <h5>HNA</h5>
          <p>Photoshop<span>&#10042;</span> Illustrator</p>
        </div>
      </div>
    </div>
    <div class="photo">
      <h3>Photographie</h3>
      <img src="@/assets/img/gallerie/photos.png" alt="" />
    </div>

    <div class="court-metrage">
      <h3>Court-métrage</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/i1Xp4eUj44A"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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

<style lang="scss">
.gallerie {
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
      }
    }
    @include sm {
      display: none;
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
  }

  .gallerie-scene {
    @include lg {
      padding: 5%;
      background-color: black;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
    @include sm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 10%;
      background-color: black;
    }
    .bckg_img {
      @include lg {
        width: 70vh;
        height: 70vh;
        margin: 0 0 8% 0;
      }
      @include sm {
        width: 30vh;
        height: 30vh;
        margin: 0 0 5% 0;
      }
      display: flex;
      justify-content: center;
      .caption {
        @include lg {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: RGBA(0, 0, 0, 0.9);
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: all 0.4s ease;
          &:hover {
            opacity: 1;
          }
        }
        @include sm {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: RGBA(0, 0, 0, 0.9);
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: all 0.4s ease;
          &:hover {
            opacity: 1;
          }
        }

        h5 {
          font-family: "bigilla";
          text-transform: uppercase;
          color: white;
          @include lg {font-size: 2.5em;}
          @include sm {font-size: 1.2em;}
        }
        p {
          color: #898989;
          font-family: "Trap";
          
          font-weight: 600;
          @include lg {font-size: 1.5em;}
          @include sm {font-size: 1em;}
        }
      }
    }
    #img1 {
      background-image: url("~@/assets/img/gallerie/odezennefront.png");
      background-size: cover;
      transition: ease-in 0.5s all;
      &:hover {
        transform: scale(1.06);
      }
    }
    #img2 {
      background-image: url("~@/assets/img/gallerie/odezenneback.png");
      background-size: cover;
      transition: ease-in 0.5s all;
      &:hover {
        transform: scale(1.06);
      }
    }
    #img3 {
      background-image: url("~@/assets/img/gallerie/vlad.png");
      background-size: cover;
      transition: ease-in 0.5s all;
      &:hover {
        transform: scale(1.06);
      }
    }
    #img4 {
      background-image: url("~@/assets/img/gallerie/dice.png");
      background-size: cover;
      transition: ease-in 0.5s all;
      &:hover {
        transform: scale(1.06);
      }
    }
    #img5 {
      background-image: url("~@/assets/img/gallerie/champi.png");
      background-size: cover;
      transition: ease-in 0.5s all;
      &:hover {
        transform: scale(1.06);
      }
    }
    #img6 {
      background-image: url("~@/assets/img/gallerie/millerfront.png");
      background-size: cover;
      transition: ease-in 0.5s all;
      &:hover {
        transform: scale(1.06);
      }
    }
    #img7 {
      background-image: url("~@/assets/img/gallerie/h.png");
      background-size: cover;
      transition: ease-in 0.5s all;
      &:hover {
        transform: scale(1.06);
      }
    }
    #img8 {
      background-image: url("~@/assets/img/gallerie/arca.png");
      background-size: cover;
      transition: ease-in 0.5s all;
      &:hover {
        transform: scale(1.06);
      }
    }

    #img9 {
      background-image: url("~@/assets/img/gallerie/hna.png");
      background-size: cover;
      transition: ease-in 0.5s all;
      &:hover {
        transform: scale(1.06);
      }
    }
  }
  .photo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    h3 {
      font-family: "Bigilla";
      color: white;
      @include lg {font-size: 3em;}
      @include sm {
        font-size: 1.5em;
      margin-top: 10%;
      }
    }
    img {
      padding: 5%;
      @include sm {
        width: 100vw;
        height: 100%;
      }
    }
  }
  .court-metrage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    h3 {
      font-family: "Bigilla";
      color: white;
      @include lg {font-size: 3em;}
       @include sm {
        font-size: 1.5em;
      margin-top: 10%;
      margin-bottom: 8%;
      }
    }
    iframe {
      margin: 5%;
      @include sm {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>