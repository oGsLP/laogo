<!-- @format -->

<template>
  <section class="laogo">
    <div class="logo-area">
      <div
        class="logo-box"
        v-tooltip="{
          content: 'Edit the text to create your own logo',
          show: true,
          classes: 'tooltipClasses'
        }"
      >
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
      <div
        class="customize-color"
        id="prefixColor"
        v-tooltip="{ content: 'Pick a color you like', show: true, classes: 'tooltipClasses' }"
      >
        <div :style="{ 'font-family': font }">
          <label>{{ prefixText + " : " }}</label
          ><input type="color" v-model="prefixColor" />
        </div>
        <div :style="{ 'font-family': font }">
          <label>{{ suffixText + " : " }}</label
          ><input type="color" v-model="suffixColor" />
        </div>
      </div>

      <div class="customize-misc">
        <div>
          Font Size: <input type="range" min="30" max="200" v-model="fontSize" /> {{ fontSize }}px
        </div>
        <div>Reverse Highlight: <button @click="reverseColor">Reverse Color</button></div>
        <div>Reverse Highlight: <button @click="reverseFix">Reverse Fix</button></div>
      </div>
    </div>

    <div class="download-share">
      <div
        class="download"
        v-tooltip="{ content: 'Export your own logo', show: true, classes: 'tooltipClasses' }"
        @click="download"
      >
        Export
      </div>
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
  align-items stretch
  height 100%
  width 100%
.logo-area
  width 70%
  height 75%
  margin 3% 0 3% 1%
  display flex
  justify-content center
  align-items center
  border-right 5px solid black
  .logo-box
    border 0
    border-radius 10px
    padding 0
    margin 10px
    max-width 100%
    .logo-edit-area
      padding 20px
      text-align center
      font-size 60px
      font-weight 700
      border-radius 10px
      max-height 90%
      min-height 80%
      .prefix
        color #fff
        padding 10px 5px
        margin 10px 5px
        font-family AnuDaw
        text-shadow 1px 1px 0 #CCC, 1px 2px 0 #CCC, 2px 1px 0 #CCC, 2px 2px 0 #CCC, 10px 10px 6px #444

      .postfix
        color #000
        background-color #fff
        padding 5px
        margin 10px 5px
        border-radius 7px
        display block
        text-shadow 1px 1px 0 #444, 1px 2px 0 #444, 2px 1px 0 #444, 2px 2px 0 #444, 6px 6px 8px #CCC

// customize things
.customize
  display flex
  flex-direction column
  justify-content space-around
  width 25%
  height 75%
  margin 3% 1%
  .customize-color,.customize-misc
    border 2px skyblue solid
    height 40%
    display flex
    flex-direction column
    justify-content center
  .customize-color > div,
  .customize-misc > div
    font-weight bold
    padding 8px 0

// download and share buttons
.download-share
  display flex
  justify-content space-around
  width 80%
  margin 0 10%
  & > div
    width 100px
    height 40px
    border-radius 3px
    line-height 40px
    text-align center
    cursor pointer
  .download
    color black
    background #f90
</style>
