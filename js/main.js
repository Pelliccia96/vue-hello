const { createApp } = Vue;

createApp ({
    data () {
      return {
        name: "Hello World!",
        image: "../img/Logo-RGB-1920-BLUE.png",
      };
    },
  }).mount("#app");
