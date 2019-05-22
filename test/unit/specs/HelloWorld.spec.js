import Vue from "vue";
import HelloWorld from "@/components/Main";
import "babel-polyfill";

describe("Main.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector("#main>h1").textContent).to.equal("Lao go");
  });
});
