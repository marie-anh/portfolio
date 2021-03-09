<template>
  <div class="home">
    <div class="intro">
      <h1>HNA*</h1>
      <p>welcome to my portfolio</p>
    </div>

    <div class="me">
      <div class="me-title">
        <div id="p_anchor" class="p_wrapper">
          <p>Marie-Anh</p>
        </div>
        <div class="span-txt p_wrapper">
          <p>DEVISY</p>
          <p class="star">*</p>
          <p class="dark">WEBDESIGN</p>
        </div>
        <div class="p_wrapper">
          <p class="dark">STUDENT</p>
        </div>
      </div>
      <p class="left" v-scroll>
        Bonjour, je m'appelle Marie-Anh et je suis une jeune apprentie
        webdesigner, passionnée d'art digital. Vous trouverez ci-dessous
        quelques-uns de mes travaux. Bonne navigation !
      </p>
      <div class="scroll">
        <p>keep scrolling to see my project</p>
        <svg
          width="46"
          height="42"
          viewBox="0 0 46 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 2L44 40M44 40H8.31915M44 40V8.33333"
            stroke="white"
            stroke-width="3"
          />
        </svg>
      </div>
    </div>

    <div id="projets_wrapper">
      <div class="projets_overflow">
        <div data-scroll-container id="projets">
          <h3 data-scroll-sticky>
            explore my <br />
            recent work
          </h3>
          <div data-scroll class="projet">
            <router-link to="/seoelp">
              <img
                src="@/assets/img/seoelp-cover.png"
                alt="SEO-ELP COVER PROJECT"
              />
              <p>SEO-ELP</p>
              <div class="link-projet">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13" cy="13" r="13" fill="black" />
                </svg>
                <p>Webdesign</p>
              </div>
            </router-link>
          </div>

          <div data-scroll class="projet">
            <router-link to="/dreamreality">
              <img
                src="@/assets/img/reality-cover.png"
                alt="Dream / Reality COVER PROJECT"
              />
              <p>Dream / Reality</p>
              <div class="link-projet">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 0L24.9213 14.2539L34.6644 3.5718L28.9951 16.872L42.9667 13.1532L31.0068 21.2769L44.771 25.7021L30.3176 26.0702L39.5044 37.2344L27.1464 29.7299L28.839 44.0886L22.5 31.0942L16.161 44.0886L17.8536 29.7299L5.49563 37.2344L14.6824 26.0702L0.229017 25.7021L13.9932 21.2769L2.03328 13.1532L16.0049 16.872L10.3356 3.5718L20.0787 14.2539L22.5 0Z"
                    fill="black"
                  />
                </svg>
                <p>Motiondesign</p>
              </div>
            </router-link>
          </div>

          <div data-scroll class="projet">
            <router-link to="/georgesmelies">
              <img
                src="@/assets/img/georges-cover.png"
                alt="Georges Méliès COVER PROJECT"
              />
              <p>Georges méliès</p>
              <div class="link-projet">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13" cy="13" r="13" fill="black" />
                </svg>
                <p>Webdesign</p>
              </div>
            </router-link>
          </div>

          <div data-scroll class="projet">
            <router-link to="/campuscar">
              <img
                class="ccar"
                src="@/assets/img/ccintroprojet.png"
                alt="Campus Car COVER PROJECT"
              />
              <p>Campus car</p>
              <div class="link-projet">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13" cy="13" r="13" fill="black" />
                </svg>
                <p>UI/UX Design</p>
              </div>
            </router-link>
          </div>

          <div data-scroll class="projet" style="marginright: 10vw">
            <router-link to="/gallerie">
              <img
                src="@/assets/img/vinyle-cover.png"
                alt="Georges Méliès COVER PROJECT"
              />
              <p>Gallerie</p>
              <div class="link-projet">
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
                    stroke="black"
                    stroke-width="3"
                  />
                </svg>
                <p>Graphisme</p>
              </div>
            </router-link>
          </div>
          <div data-scroll class="projet_blank"></div>
        </div>
      </div>
    </div>

    <div class="contact">
      <h3>
        <div id="p_contact_anchor" class="p_wrapper_contact">
          <p>DO YOU LIKE</p>
        </div>
        <div class="p_wrapper_contact"><p>WHAT YOU SEE SO FAR ?</p></div>
      </h3>
      <div class="contact-infos">
        <div class="pro">
          <div class="pro-title">
            <p>CONTACT ME</p>
          </div>
          <ul class="pro-items">
            <li>
              <a href="mailto:mariedevisy@gmail.com" class="link link--herse">
                <span>mariedevisy@gmail.com</span>
                <svg
                  class="left-one"
                  width="100%"
                  height="18"
                  viewBox="0 0 59 18"
                >
                  <path
                    d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
                    pathLength="1"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="pdf/cv.pdf" class="link link--herse">
                <span> mon CV </span>
                <svg
                  class="link__graphic link__graphic--stroke link__graphic--arc"
                  width="100%"
                  height="18"
                  viewBox="0 0 59 18"
                >
                  <path
                    d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
                    pathLength="1"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1JwTDTj3TRRSN2SOnpAeZGJHhwPYPXa4k/view?usp=sharing"
                class="link link--herse"
              >
                <span> mon BOOK </span>
                <svg
                  class="link__graphic link__graphic--stroke link__graphic--arc"
                  width="100%"
                  height="18"
                  viewBox="0 0 59 18"
                >
                  <path
                    d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
                    pathLength="1"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";

export default {
  methods: {
    txtAppear() {
      document.addEventListener("scroll", () => {
        var ps = document.querySelectorAll(".me-title p"),
          p_anchor = document.getElementById("p_anchor");

        if (ps && p_anchor) {
          if (
            window.pageYOffset + window.innerHeight * 0.7 >
            p_anchor.offsetTop
          ) {
            for (var i = 0; i < ps.length; i++) {
              var p = ps[i];

              p.classList.add("appear");
            }
          } else {
            for (var i = 0; i < ps.length; i++) {
              var p = ps[i];

              p.classList.remove("appear");
            }
          }

          var psc = document.querySelectorAll(".contact h3 p"),
            pca = document.getElementById("p_contact_anchor");

          if (window.pageYOffset + window.innerHeight * 0.8 > pca.offsetTop) {
            for (var f = 0; f < psc.length; f++) {
              var pc = psc[f];

              pc.classList.add("appear");
            }
          } else {
            for (var f = 0; f < psc.length; f++) {
              var pc = psc[f];

              pc.classList.remove("appear");
            }
          }
        }
      });
    },
  },
  mounted() {
    this.txtAppear();

    if (window.innerWidth > 380) {
      const lscroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        direction: "horizontal",
      });
    }
  },
};
</script>

<style lang="scss">
.home {
  background: black;
  color: white;
  @include sm {
    .intro {
      background-size: 180%;
      background-repeat: no-repeat;
      h1 {
        font-size: 17vh;
      }
      p {
        font-size: 2.3vh;
        margin-top: -2.5vh;
      }
    }
  }
  @include lg {
    .intro {
      background-size: cover;
      h1 {
        font-size: 30vh;
      }
      p {
        font-size: 3.8vh;
        margin-top: -3.5vh;
      }
    }
  }

  .intro {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(~@/assets/video/homeintro.gif);
    background-position: center;
    h1 {
      font-family: "Bigilla";
      font-weight: 400;
    }
    p {
      text-align: justify;
      font-family: "Trap";
      font-weight: 400;
      text-transform: uppercase;
      color: #898989;
    }
  }
  .me {
    .me-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
      .span-txt.p_wrapper {
        display: flex;
        p {
          margin: 0;
          transition-delay: 0.2s;
        }
      }
      .p_wrapper {
        width: fit-content;
        height: fit-content;
        overflow: hidden;
        &:last-of-type() {
          p {
            transition-delay: 0.8s;
          }
        }
        p {
          @include lg {
            font-size: 10vw;
          }
          @include sm {
            font-size: 10vw;
          }
          font-family: "Bigilla";
          text-transform: uppercase;
          transition: all 1s cubic-bezier(0.4, 0, 0, 1);
          transform: translateY(100%);
          &.appear {
            transform: translateY(0);
          }
          &.dark {
            color: #898989;
          }
          &.star {
            font-family: "Trap";
            @include sm {
              padding-top: 2%;
            }
            @include lg {
              padding-top: 1%;
            }
          }
        }
      }
    }
    p {
      &.left {
        @include lg {
          text-align: right;
          border-right: 1px solid white;
          padding: 40px 20px 40px 30vw;
          margin: 5% 5vw 0 0;
          //transition: cubic-bezier(0.4, 0, 0, 1) 0.5s all;
          //&.hide {
          //opacity: 0;
          // transform: translateX(6%);
          //}
        }
        @include sm {
          text-align: center;
          padding: 5%;
        }
      }
      @include lg {
        font-size: 1.9em;
      }
      @include sm {
        font-size: 1em;
      }
      font-family: paralucent, sans-serif;
      font-weight: 300;
      font-style: normal;
      color: #f9f9f9;
    }
    .scroll {
      @include lg {
        padding: 2%;
        width: 30vw;
        display: flex;
        flex-direction: column;
        margin: 3vh 0 0 0;
      }
      @include sm {
        display: flex;
        justify-content: space-evenly;
        padding: 5%;
      }
      p {
        font-family: "Trap";
        text-transform: uppercase;
        @include lg {
          font-size: 1.6em;
        }
        @include sm {
          font-size: 0.8em;
          color: #898989;
        }
      }
      svg {
        @include lg {
          margin-left: auto;
          align-self: flex-end;
        }
        @include sm {
          width: 3vw;
          height: 100%;
        }
      }
    }
  }

  #projets_wrapper {
    @include lg {
       height: 350vh;
    }
    width: 100vw;
    background: #e5e5e5;
    color: black;
    @include sm {
      height: 80vh;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      align-content: center;
      justify-content: center;
      }
    .projets_overflow {
      @include lg {
        height: 100vh;
        position: sticky;
        top: 0;
        overflow-x: hidden;
        width: 100vw;
      }
      @include sm {
        display: flex;
        justify-content: center;
        align-content: center;
      }
      #projets {
        @include lg {
          height: 100vh;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: fit-content;
          width: 300vw;
          transition: all 0.2s ease;
          padding-right: 20vw;
        }
        @include sm {
          display: flex;
          align-items: center;
          width: fit-content;
          width: 100vw;
          height: 100vh;
        }

        h3 {
          font-family: "Bigilla";
          text-transform: uppercase;
          z-index: -3;
          top: 0;
          align-self: flex-start;
          left: 2%;
          color: #c1c1c1;
          @include lg {
            font-size: 12vh;
          }
          @include sm {
            display: none;
          }
        }
        .projet {
          display: flex;
          flex-direction: column;
          @include sm {
            align-items: center;
            justify-content: center;
            margin: 0 5%;
          }
          img {
            @include lg {
              width: 35vw;
              height: 100%;
            }
            @include sm {
              width: 70vw;
              height: 100%;
            }
          }
          a {
            font-family: "Bigilla";
            font-weight: 800;
            
            text-transform: uppercase;
            color: black;
            text-decoration: none;
            @include lg {font-size: 5vw;}
            @include sm {font-size: 9vw;}
            p {
              @include sm {
                text-align: center;
              }
            }
          }
          .link-projet {
            display: flex;
            align-items: center;
            @include sm {
              justify-content: center;
            }
            svg {
              @include sm {
                width: 2vw;
              }
              margin: 0 1vw 0 0;
            }
            p {
              
              font-family: "Trap";
              font-weight: 600;
              text-transform: uppercase;
              @include lg {font-size: 2vw;}
              @include sm {font-size: 3vw;}
            }
          }
        }
        .projet_blank {
          width: 40vw;
          background: transparent;
        }
      }
    }
  }
  .contact {
    h3 {
      font-family: "Bigilla";
      color: #898989;
      @include lg {
        font-size: 16vh;
        margin: 8% 2% 6% 6%;
      }
      @include sm {
        padding-top: 10%;
        padding-left: 5%;
        font-size: 6vh;
      }
      .p_wrapper_contact {
        width: fit-content;
        height: fit-content;
        overflow: hidden;
        p {
          transform: translateY(100%);
          transition: all 1s cubic-bezier(0.4, 0, 0, 1);
          &.appear {
            transform: translateY(0);
          }
        }
      }
    }
    .contact-infos {
      display: flex;
      flex-direction: column;
      @include sm {
        margin-left: 5%;
        margin-top: 10%;
      }
      .pro {
        @include lg {
          width: 60%;
          margin: 3% 2% 2% 30%;
        }
        .pro-title {
          border-bottom: solid 1px white;
          p {
            font-family: "Trap";
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 2%;
            @include lg {
              font-size: 2em;
            }
            @include sm {
              font-size: 1.2em;
            }
          }
        }
        .pro-items {
          @include lg {
            display: flex;
            margin-top: 2%;
            justify-content: space-between;
          }
          @include sm {
            display: flex;
            flex-direction: column;
            margin-bottom: 20%;
          }
          li {
            list-style: none;
            @include lg {
              display: flex;
              flex-wrap: nowrap;
              justify-content: center;
              align-items: center;
            }
            @include sm {
              display: table-cell;
              margin: 3% 0 2% 0;
            }
            a {
              font-family: "Bigilla";
              text-decoration: none;
              color: #e5e5e5;
              width: min-content;
              position: relative;
              white-space: nowrap;
              @include sm {
                font-size: 1.2em;
                svg {
                  display: none;
                }
              }
              @include lg {
                font-size: 1.8em;
                svg {
                  top: 73%;
                  left: -35%;
                  position: absolute;
                  &.left-one {
                    left: -45%;
                  }
                  path {
                    stroke-dasharray: 1;
                    stroke-dashoffset: 1;
                    transition: stroke-dashoffset 0.4s
                      cubic-bezier(0.7, 0, 0.3, 1);
                  }
                }
                &:hover {
                  svg {
                    path {
                      stroke-dashoffset: 0;
                      transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
                      transition-duration: 0.3s;
                      stroke: white;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>