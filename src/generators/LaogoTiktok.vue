<!-- @format -->

<template>
  <section id="laogo-tiktok">
    <div class="logo-area" :style="{ fontFamily: fonts[fontIndex] }">
      <div class="logo-box">
        <div
          class="logo-edit-area"
          id="logo"
          :style="{
            'font-size': fontSize + 'px',
            'background-color': suffixColor
          }"
        ></div>
      </div>
    </div>

    <div class="customize">
      <div class="customize-color" id="prefixColor">
        <h2>Text</h2>
        <div>
          <label>{{ prefixText + " : " }}</label
          ><b-form-input type="color" v-model="prefixColor"></b-form-input>
        </div>
        <div>
          <label>{{ suffixText + " : " }}</label
          ><b-form-input type="color" v-model="suffixColor"></b-form-input>
        </div>
        <div>
          <label id="font-lb">Font : </label>
          <b-button
            id="font-bt"
            variant="dark"
            :style="{ fontFamily: fonts[fontIndex] }"
            @click="changeFont"
            >{{ fonts[fontIndex] }}</b-button
          >
          <b-tooltip target="font-bt" title="change" placement="bottom"></b-tooltip>
        </div>
      </div>

      <div class="customize-misc">
        <h2>Style</h2>
        <div>
          Font Size:
          <b-form-input
            type="range"
            variant="dark"
            min="45"
            max="150"
            v-model="fontSize"
          ></b-form-input>
          {{ fontSize }}px
        </div>
        <div>
          <b-button variant="outline-dark" @click="reverseColor">Reverse<br />Color</b-button>
          <b-button variant="outline-dark" @click="reverseFix">Reverse<br />Fix</b-button>
        </div>
      </div>
    </div>

    <div class="download-share">
      <button @click="download">Download</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "LaogoTiktok",
  data() {
    return {
      prefixColor: "#ffffff",
      suffixColor: "#ffffff",
      fontIndex: 0,
      reverse: false,
      fontSize: "60",
      prefixText: this.$store.getters.prefix,
      suffixText: this.$store.getters.suffix,
      fonts: ["AnuDaw", "MamaLove"]
    };
  },
  methods: {
    updatePrefix(e) {
      this.$store.commit("changePrefix", e.target.childNodes[0].nodeValue);
    },
    updateSuffix(e) {
      this.$store.commit("changeSuffix", e.target.childNodes[0].nodeValue);
    },
    changeFont() {
      this.fontIndex = (this.fontIndex + 1) % this.fonts.length;
    },
    reverseFix() {
      this.reverse = !this.reverse;
    },
    reverseColor() {
      let tmp = this.prefixColor;
      this.prefixColor = this.suffixColor;
      this.suffixColor = tmp;
    },
    downloadImage(imgsrc, name) {
      //下载图片地址和图片名
      let image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL("image/png");
        let a = document.createElement("a");
        let event = new MouseEvent("click");
        a.download = name || "photo";
        a.href = url;
        a.dispatchEvent(event);
      };
      image.src = imgsrc;
    },
    download() {
      let that = this;
      let node = document.getElementById("logo");
      domtoimage.toPng(node).then(function(res) {
        console.log(res);
        that.downloadImage(res, that.prefixText + "_" + that.suffixText);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#logo {
  position: relative;
  width: 37px;
  height: 218px;
  margin: 100px auto;
  z-index: 1;
  background: #fff;
  filter: drop-shadow(-10px -10px 0 #24f6f0) contrast(150%) brightness(110%);
  box-shadow: 11.6px 10px 0 0 #fe2d52;
  z-index: 10;
  // transform: skewX(-5deg);
  animation: move 5s infinite ease-in;
  top: -60px;

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border: 37px solid #fff;
    border-top: 37px solid transparent;
    border-radius: 50%;
    top: 123px;
    left: -137px;
    transform: rotate(45deg);
    filter: drop-shadow(16px 0px 0 #fe2d52);
    // mix-blend-mode: overlay;
  }

  &::after {
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    border: 30px solid transparent;
    border-bottom-color: #fff;
    top: -100px;
    right: -172px;
    border-radius: 100%;
    transform: rotate(45deg);
    z-index: -10;
    filter: drop-shadow(14px 0 0 #fe2d52);
  }
}

@keyframes move {
  4% {
    transform: skewX(7deg) translate(-30px);
  }
  7% {
    transform: skewX(-6deg) translate(18px);
  }
  9% {
    transform: skewX(5deg) translate(-8px);
  }
  10% {
    transform: skewX(-4deg) translate(6px);
  }
  11% {
    transform: skewX(3deg) translate(-4px);
  }
  12% {
    transform: skewX(-2deg) translate(2px);
  }
  13% {
    transform: skewX(1deg) translate(0px);
    filter: drop-shadow(-10px -10px 0 #24f6f0) contrast(120%) brightness(110%) blur(3px);
  }
  30% {
    filter: drop-shadow(-10px -10px 0 #24f6f0) contrast(150%) brightness(120%) blur(0px);
  }
}
</style>

<style lang="stylus" scoped>
#laogo-tiktok
  font-family AnuDaw
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items flex-start
  height 100%
  width 100%
.logo-area
  width 69%
  height 78%
  margin 3% 0 3% 2%
  display flex
  justify-content center
  align-items center
  box-shadow black 1px 1px 1px,black 2px 2px 1px,black 3px 3px 2px,black 4px 4px 2px,black 5px 5px 3px
  overflow-y scroll
  overflow-x hidden
  .logo-box
    border-radius 10px
    padding 0
    margin 10px
    max-width 90%
    /*.logo-edit-area*/
      /*padding 10px 25px*/
      /*text-align center*/
      /*font-size 60px*/
      /*font-weight 700*/
      /*border-radius 10px*/
      /*.prefix*/
        /*color #fff*/
        /*padding 0.5% 5px*/
        /*margin 1% 5px 2% 5px*/
        /*display block*/
        /*text-shadow 1px 1px 0 #CCC, 1px 2px 0 #CCC, 2px 1px 0 #CCC, 2px 2px 0 #CCC, 10px 10px 6px #444*/
      /*.postfix*/
        /*color #000*/
        /*background-color #fff*/
        /*padding 0 10px*/
        /*margin 3% 0*/
        /*border-radius 7px*/
        /*display inline-block*/
        /*width auto*/
        /*min-width 92%*/
        /*horiz-align center*/
        /*text-shadow 1px 1px 0 #444, 1px 2px 0 #444, 2px 1px 0 #444, 2px 2px 0 #444, 6px 6px 8px #CCC*/

.logo-area::-webkit-scrollbar
  display none

// customize things
.customize
  display flex
  flex-direction column
  justify-content space-around
  width 26%
  height 80%
  margin 2% 1%
  .customize-color,.customize-misc
    height 45%
    display flex
    flex-direction column
    justify-content center
    box-shadow black 1px 1px 1px,black 2px 2px 1px,black 3px 3px 2px,black 4px 4px 2px,black 5px 5px 3px
  .customize-color > div,
  .customize-misc > div
    font-weight bold
    padding 5px 0
.customize-color input,
.customize-misc input
  margin-left 5%
  display inline-block
  width 40%
  border 0
  vertical-align middle
.customize-color label,
.customize-misc label
  display inline-block
  vertical-align middle
  margin 0
  width 25%
.customize-color button,
.customize-misc button
  display inline-block
  vertical-align middle
  margin 0
.customize-color button
  font-size small
  width 32%
.customize-misc button
  width 40%

// download and share buttons
.download-share
  display flex
  justify-content space-evenly
  height 16%
  width 80%
  margin 0 10%
  & > button
    width auto
    height 60px
    border 0
    font-size 36px
    background transparent
    border-bottom 5px solid black

input[type=range]
  margin-right 10px
input[type=range]::-webkit-slider-thumb
  background black
</style>
