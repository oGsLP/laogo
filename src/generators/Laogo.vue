<!-- @format -->

<template>
  <section id="laogo">
    <div class="logo-area" :style="{ fontFamily: fonts[fontIndex] }">
      <div class="logo-box">
        <div
          class="logo-edit-area"
          :class="dirClass"
          id="logo"
          :style="{
            'font-size': fontSize + 'px',
            'background-color': suffixColor
          }"
        >
          <template v-if="!reverse">
            <span
              @input="updatePrefix"
              class="prefix"
              :style="{ color: prefixColor }"
              contenteditable
              spellcheck="false"
              >{{ prefixText }}</span
            >
            <span
              class="postfix"
              :style="{ color: suffixColor, 'background-color': prefixColor }"
              contenteditable
              @input="updateSuffix"
              spellcheck="false"
              >{{ suffixText }}</span
            >
          </template>

          <template v-else>
            <span
              class="postfix"
              :style="{ color: suffixColor, 'background-color': prefixColor }"
              contenteditable
              @input="updateSuffix"
              spellcheck="false"
              >{{ prefixText }}</span
            >
            <span
              @input="updatePrefix"
              class="prefix"
              :style="{ color: prefixColor }"
              contenteditable
              spellcheck="false"
              >{{ suffixText }}</span
            >
          </template>
        </div>
      </div>
    </div>

    <div class="customize">
      <div class="customize-style">
        <h2>Affix</h2>
        <div>
          <label>prefix :</label>
          <b-form-input type="color" v-model="prefixColor"></b-form-input>
        </div>
        <div>
          <label>suffix :</label
          ><b-form-input type="color" v-model="suffixColor"></b-form-input>
        </div>
        <div>
          <b-button variant="outline-dark" @click="reverseColor"
            >Reverse<br />Color</b-button
          >
          <b-button variant="outline-dark" @click="reverseFix"
            >Reverse<br />Affix</b-button
          >
        </div>
      </div>

      <div class="customize-misc">
        <h2>Style</h2>
        <div id="range-div">
          <label id="size-lb">Size : </label>
          <b-form-input
            type="range"
            variant="dark"
            min="45"
            max="150"
            v-model="fontSize"
          ></b-form-input>
          <span>{{ fontSize }}px</span>
        </div>
        <div id="style-div">
          <div>
            <label id="font-lb">Font : </label>
            <b-button
              id="font-bt"
              variant="dark"
              :style="{ fontFamily: fonts[fontIndex] }"
              @click="changeFont"
              >{{ fonts[fontIndex] }}</b-button
            >
            <b-tooltip
              target="font-bt"
              title="change"
              placement="right"
            ></b-tooltip>
          </div>
          <div>
            <label id="direction-lb">Order : </label>
            <b-button id="font-bt" variant="dark" @click="reverseDirection">{{
              direction
            }}</b-button>
            <b-tooltip
              target="font-bt"
              title="change"
              placement="right"
            ></b-tooltip>
          </div>
        </div>
      </div>
      <div class="download-share">
        <button @click="download">Download</button>
      </div>
    </div>
  </section>
</template>

<script>
import domToImage from "dom-to-image";

export default {
  name: "laogo",
  data() {
    return {
      prefixColor: "#ffffff",
      suffixColor: "#000000",
      fontIndex: 0,
      reverse: false,
      fontSize: "60",
      prefixText: this.$store.getters.prefix,
      suffixText: this.$store.getters.suffix,
      fonts: ["AnuDaw", "MamaLove"],
      direction: "horizontal"
    };
  },
  computed: {
    dirClass() {
      return `dir-${this.direction}`;
    }
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
    reverseDirection() {
      this.direction =
        this.direction === "vertical" ? "horizontal" : "vertical";
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
      domToImage.toPng(node).then(function(res) {
        that.downloadImage(res, that.prefixText + "_" + that.suffixText);
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
#laogo
  font-family AnuDaw
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items flex-start
  height 100%
  width 100%
.logo-area
  width 66%
  height 88%
  margin 3% 1% 3% 3%
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
    .logo-edit-area
      padding 0.25em
      text-align center
      font-size 60px
      font-weight 700
      border-radius 0.15em
      &.dir-vertical>span
        display block
        &.prefix
          padding 0 5px
          margin 0 5px
        &.postfix
          padding 0 10px
          margin 0.1em 5px
          width auto
          min-width 90%
          horiz-align center
      &.dir-horizontal>span
        display inline
        &.prefix
          padding 0.2em 0.1em
          margin 0
        &.postfix
          padding 0.2em
          margin 0 0.1em
      .prefix
        color #fff
        text-shadow 1px 1px 0 #CCC, 1px 2px 0 #CCC, 2px 1px 0 #CCC, 2px 2px 0 #CCC, 10px 10px 6px #444
      .postfix
        color #000
        background-color #fff
        border-radius .15em
        text-shadow 1px 1px 0 #444, 1px 2px 0 #444, 2px 1px 0 #444, 2px 2px 0 #444, 6px 6px 8px #CCC

.logo-area::-webkit-scrollbar
  display none

// customize things
.customize
  display flex
  flex-direction column
  justify-content space-between
  width 27%
  height 88%
  margin 3% 1%
  .customize-style,.customize-misc
    height 41%
    display flex
    flex-direction column
    justify-content center
    box-shadow black 1px 1px 1px,black 2px 2px 1px,black 3px 3px 2px,black 4px 4px 2px,black 5px 5px 3px
  .customize-style > div,
  .customize-misc > div
    font-weight bold
    padding 5px 0
.customize-style input
  margin-left 5%
  display inline-block
  width 40%
  border 0
  vertical-align middle
.customize-color label,
  display inline-block
  vertical-align middle
  width 25%

#range-div
  label
    margin 0 2.5% 0 10%
    float left
    vertical-align middle
    width 25%
  input
    width 35%
    margin 0
    float left
    vertical-align middle
  span
    margin-left 1%
    float left
    width 20%
#style-div
  div
    display block
    width 100%
    margin 15px 0
    label
      margin 0 2.5% 0 10%
      width 25%
      vertical-align middle
    button
      width 40%
      vertical-align middle
      margin-right 20%
.customize-style button,
.customize-misc button
  display inline-block
  vertical-align middle
  margin 0
.customize-style button
  font-size 15px
  line-height 19px
  padding 5px
  margin 0 20px
.customize-misc button
  width 40%

// download and share buttons
.download-share
  display flex
  justify-content space-evenly
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
