<!-- @format -->

<template>
  <section class="laogo">
    <div class="logo-area">
      <div class="logo-box">
        <div
          class="logo-edit-area"
          id="logo"
          :style="{
            'font-size': fontSize + 'px',
            'background-color': suffixColor,
            'font-family': font
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
              v-model="suffixText"
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

    <div class="customize" :style="{ 'font-family': font }">
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
          <b-button id="font-bt" variant="dark">Change</b-button>
          <b-tooltip target="font-bt" :title="font" placement="right"></b-tooltip>
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
          <b-button variant="outline-dark" @click="reverseColor">Reverse Color</b-button>
          <b-button variant="outline-dark" @click="reverseFix">Reverse Fix</b-button>
        </div>
      </div>
    </div>

    <div class="download-share">
      <button :style="{ fontFamily: font }" @click="download">Download</button>
    </div>
  </section>
</template>

<script>
import domtoimage from "dom-to-image";
const FileSaver = require("file-saver");

export default {
  name: "laogo",
  data() {
    return {
      prefixColor: "#ffffff",
      suffixColor: "#000000",
      font: "AnuDaw",
      reverse: false,
      fontSize: "60",
      prefixText: this.$store.getters.prefix,
      suffixText: this.$store.getters.suffix
    };
  },
  methods: {
    updatePrefix(e) {
      this.$store.commit("changePrefix", e.target.childNodes[0].nodeValue);
    },
    updateSuffix(e) {
      this.$store.commit("changeSuffix", e.target.childNodes[0].nodeValue);
    },
    reverseFix() {
      this.reverse = !this.reverse;
    },
    reverseColor() {
      let tmp = this.prefixColor;
      this.prefixColor = this.suffixColor;
      this.suffixColor = tmp;
    },
    downloadIamge(imgsrc, name) {
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
        that.downloadIamge(res, "logo");
        // FileSaver.saveAs(blob, 'logo.png')
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.laogo
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items flex-start
  height 100%
  width 100%
.logo-area
  width 70%
  height 78%
  margin 3% 0 3% 1%
  padding-top 2%
  display flex
  justify-content center
  align-items center
  border-right 5px solid black
  overflow-y scroll
  overflow-x hidden
  .logo-box
    border 5px dotted black
    border-radius 10px
    padding 20px
    margin 10px
    max-width 90%
    .logo-edit-area
      padding 10px 25px
      text-align center
      font-size 60px
      font-weight 700
      border-radius 10px
      .prefix
        color #fff
        padding 0.5% 5px
        margin 1% 5px 2% 5px
        display block
        font-family AnuDaw
        text-shadow 1px 1px 0 #CCC, 1px 2px 0 #CCC, 2px 1px 0 #CCC, 2px 2px 0 #CCC, 10px 10px 6px #444
      .postfix
        color #000
        background-color #fff
        padding 0 10px
        margin 3% 0
        border-radius 7px
        display inline-block
        width auto
        min-width 92%
        horiz-align center
        text-shadow 1px 1px 0 #444, 1px 2px 0 #444, 2px 1px 0 #444, 2px 2px 0 #444, 6px 6px 8px #CCC

.logo-area::-webkit-scrollbar
  display none

// customize things
.customize
  display flex
  flex-direction column
  justify-content space-around
  width 25%
  height 80%
  margin 2% 1%
  .customize-color,.customize-misc
    height 40%
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
  width 50%
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
.customize-color #font-lb
  margin-right 8%
.customize-color button
  font-size small
  width 32%
  margin-right  20%
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
