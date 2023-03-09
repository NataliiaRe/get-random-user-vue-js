const app = Vue.createApp({
  data() {
    return {
      firstName: "Maxym",
      lastName: "Rekunenko",
      email: "max@gmail.com",
      gender: "male",
      picture:
        "https://www.clipartmax.com/png/small/4-46714_spiderman-clipart-deviantart-spider-man-baby-png.png",
    };
  },
});

app.mount("#app");
