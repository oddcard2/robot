import { shallowMount } from "@vue/test-utils";
import RemoteControl from "@/components/RemoteControl/index.vue";

describe("RemoteControl", () => {
  it("renders props.msg when passed", () => {
    const msg = "New Message";
    const wrapper = shallowMount(RemoteControl, {
      props: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });
});
