import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Main from "@/components/Main.vue";

describe("Main.vue", () => {
  it("has some components", () => {
    const wrapper = shallowMount(Main);
    expect(wrapper.contains("h1")).to.be.true;
  });
});
