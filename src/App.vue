<template>
  <div id="app">
    <div id="load_wrapper">
      <div class="load_container">
        <div class="loader"></div>
      </div>
      <div class="load_text"><p>LOADING*</p></div>
    </div>

    <router-view /><!--
    -->
    <footer>
      <div class="footer-content">
        <img src="@/assets/img/logo.png" alt="" />
        <p>all the creation are the properties of @hnarm</p>
        <div class="network">
          <a href="https://www.instagram.com/hnarm_/">In</a>
          <a href="https://www.linkedin.com/in/marie-anh-devisy-b2a5661b7/"
            >Lk</a
          >
          <a href="https://www.behance.net/mariedevisf441">Bé</a>
        </div>
      </div>
    </footer>
    <div class="cursor">
      <div class="cursor__inner cursor__inner--circle"></div>
      <div class="cursor__inner cursor__inner--dot"></div>
    </div>
  </div>
</template>

<script>
import { setTransitionHooks } from "vue";
export default {
  methods: {
    initGlobalCursor() {
      var getMousePos = function getMousePos(e) {
        var posx = 0;
        var posy = 0;
        if (!e) e = window.event;

        if (e.pageX || e.pageY) {
          posx = e.pageX;
          posy = e.pageY;
        } else if (e.clientX || e.clientY) {
          posx =
            e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
          posy =
            e.clientY + body.scrollTop + document.documentElement.scrollTop;
        }

        return {
          x: posx,
          y: posy,
        };
      };

      const lerp = (a, b, n) => (1 - n) * a + n * b;
      var DOM = {
        el: document.querySelector(".cursor"),
        dot: document.querySelector(".cursor__inner--dot"),
        circle: document.querySelector(".cursor__inner--circle"),
      };
      var bounds = {
        dot: DOM.dot.getBoundingClientRect(),
        circle: DOM.circle.getBoundingClientRect(),
      };
      var scale = 1;
      var opacity = 1;
      var mousePos = { x: 0, y: 0 };
      var lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
      var lastScale = 1;
      var lastOpacity = 1;

      function initEvents() {
        window.addEventListener("mousemove", function (ev) {
          return (mousePos = getMousePos(ev));
        });
      }
      var render = function render() {
        lastMousePos.dot.x = lerp(
          lastMousePos.dot.x,
          mousePos.x - bounds.dot.width / 2,
          1
        );
        lastMousePos.dot.y = lerp(
          lastMousePos.dot.y,
          mousePos.y - bounds.dot.height / 2,
          1
        );
        lastMousePos.circle.x = lerp(
          lastMousePos.circle.x,
          mousePos.x - bounds.circle.width / 2,
          0.15
        );
        lastMousePos.circle.y = lerp(
          lastMousePos.circle.y,
          mousePos.y - bounds.circle.height / 2,
          0.15
        );
        lastScale = lerp(lastScale, scale, 0.15);
        lastOpacity = lerp(lastOpacity, opacity, 0.1);
        DOM.dot.style.transform = `translateX(${lastMousePos.dot.x}px) translateY(${lastMousePos.dot.y}px)`;
        DOM.circle.style.transform = `translateX(${lastMousePos.circle.x}px) translateY(${lastMousePos.circle.y}px) scale(${lastScale})`;
        DOM.circle.style.opacity = lastOpacity;
        requestAnimationFrame(render);
      };
      initEvents();
      requestAnimationFrame(render);
    },
    
    loaderOut() {
      document.body.style.overflowY = 'hidden';
      window.onload = function () {
        document.getElementById("load_wrapper").style.display = "none";
        document.body.style.overflowY = 'scroll';
      };
    },
  },

  mounted() {
    if (window.innerWidth > 380){
      this.initGlobalCursor();
    } else {
      var nocursor = document.querySelector(".cursor")
      nocursor.style.display ='none';
    }
    this.loaderOut();
  },
};
</script>

<style lang="scss">
#load_wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#cecece, #fff);
  .load_container {
    width: 160px;
    height: 160px;
    border-radius: 100%;
    background: linear-gradient(
      165deg,
      rgba(255, 255, 255, 1) 0%,
      rgb(153, 153, 153) 40%,
      rgb(65, 65, 65) 98%,
      rgb(10, 10, 10) 100%
    );
    position: relative;
    .loader {
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border-bottom: 0 solid #ffffff05;
        box-shadow: 0 -10px 20px 20px #ffffff40 inset,
          0 -5px 15px 10px #ffffff50 inset, 0 -2px 5px #ffffff80 inset,
          0 -3px 2px #ffffffbb inset, 0 2px 0px #ffffff, 0 2px 3px #ffffff,
          0 5px 5px #ffffff90, 0 10px 15px #ffffff60, 0 10px 20px 20px #ffffff40;
        filter: blur(3px);
        animation: 2s rotate linear infinite;
      }
    }
  }
  .load_text {
    overflow: hidden;
    width: fit-content;
    height: fit-content;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-45%, -50%);
    p {
      font-family: "Bigilla";
      color: black;
      font-size: 8vh;
      animation: 1.5s up cubic-bezier(0.4, 0, 0, 1) forwards;
    }
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes up {
  from {
    transform: translate(0, 100%);
  }
  to {
    transform: translate(0, 0);
  }
}

@import url("https://use.typekit.net/rzq8lfw.css");
@import url("https://use.typekit.net/rzq8lfw.css");

@font-face {
  font-family: Bigilla;
  src: url($font-path + "Bigilla-Bold.woff") format("woff");
  font-weight: 800;
}

@font-face {
  font-family: Bigilla;
  src: url($font-path + "Bigilla.woff") format("woff");
  font-weight: 400;
}

@font-face {
  font-family: Trap;
  src: url($font-path + "Trap-SemiBold.woff") format("woff");
  font-weight: 600;
}
@font-face {
  font-family: Trap;
  src: url($font-path + "Trap-Regular.woff") format("woff");
  font-weight: 400;
}

body {
  user-select: none;
  background: white;
  width: 100vw;
  overflow-x: hidden;
  margin: 0;
  scroll-behavior: smooth;
  cursor: none;
  &::-webkit-scrollbar-track {
	background-color: black;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
  background-color:white;	
	border-radius: 10%;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.cursor__inner {
  z-index: 9999;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
}
.cursor__inner--dot {
  height: 9px;
  width: 9px;
  background-color: #898989;
}
.cursor__inner--circle {
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  background-color: RGBA(137, 137, 137, 0.8);
  mix-blend-mode: color-dodge;
}
.top {
  font-family: "Trap";
  font-weight: 700;
  text-transform: uppercase;
  color: black;
  padding: 3%;
  text-decoration: none;
  display: block;
  margin: auto;
  text-align: center;
  @include sm {font-size: 1.2em;}
  @include lg { font-size: 1.7em;}
  span {
    padding-left: 1em;
    font-weight: 800;
  }
}
.next {
  @include lg {
    border-top: black solid 2px;
    display: flex;
    .thanks {
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
  @include sm {
    display: flex;
    width: 100vw;
    border-top: solid 1px black;
    .thanks {
      p {
        display: none;
      }
    }
    .nextpage {
      display: flex;
      flex-direction: column;
      align-content: center;
      width: -webkit-fill-available;
      .npwrapper {
        height: 50%;
        width: 100%;
        border-bottom: solid 1px black;
        display: flex;
        align-items: center;
        .np {
          padding: 5%;
          color: black;
          text-decoration: none;
          font-family: "Trap";
          font-weight: 800;
          font-size: 12m;
          text-align: left;
        }
      }
    }
  }
  .nextpage {
    @include lg {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-content: center;
      .npwrapper {
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
      a {
        text-decoration: none;
        font-family: "Trap";
        font-weight: 800;
        font-size: 2.3em;
      }
    }
  }
}
footer {
  background: black;
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    img {
      height: 100px;
      margin: 1%;
      @include lg {
        width: 80px;
      }
      @include sm {
        width: 15%;
        height: 20%;
      }
    }
    p {
      font-family: paralucent, sans-serif;
      color: white;
      font-weight: 200;
      font-style: normal;
      margin: 1% 0;
      @include lg {
        font-size: 1.7em;
      }
      @include sm {
        font-size: 1em;
      }
    }
    .network {
      display: flex;
      justify-content: space-between;
      margin: 1%;
      a {
        @include lg {
          font-size: 1.7em;
          margin: 5%;
        }
        @include sm {
          font-size: 1em;
          margin: 10%;
        }
        color: white;
        text-decoration: none;
        font-family: paralucent, sans-serif;
        font-weight: 300;
        font-style: normal;
      }
    }
  }
}
</style>
