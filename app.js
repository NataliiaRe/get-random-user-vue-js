const app = Vue.createApp({
  data() {
    return {
      firstName: "Mell",
      lastName: "Dok",
      email: "mell@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      console.log(results);

      this.firstName = "Sam";
      this.lastName = "Staff";
      this.email = "sam@gmail.com";
      this.gender = "female";
      this.picture = "https://randomuser.me/api/portraits/women/10.jpg";
    },
  },
});

app.mount("#app");
