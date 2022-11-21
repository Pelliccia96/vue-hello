const { createApp } = Vue;

createApp ({
    data () {
      return {
        name: "Hello World!",
        image: "https://hiringplatform.boolean.careers/images/logo.png",
      };
    },
  }).mount("#app");
