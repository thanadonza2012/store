<template>
  <div>
    <v-container>
      <v-card>
        <v-form v-model="valid" ref="form" v-on:submit.prevent="register()">
          <!--แบบฟอร์มให้กรอกข้อมูล-->
          <v-row class="mb-6" justify="center">
            <v-col lg="6">
              <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="UserName"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mb-6" justify="center">
            <v-col lg="6">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mb-6" justify="center">
            <v-col lg="3">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="20"
                label="First name"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="3">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="20"
                label="Last name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mb-6" justify="center">
            <v-col lg="3">
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passwordRules"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                @click:append="show1 = !show1"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="3">
              <v-text-field
                block
                v-model="confirm"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, passwordMatch]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Confirm Password"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
          </v-row>
          <!--ปุ่มฟังชั่นต่างๆ-->
          <v-row justify="center">
            <v-col lg="2" justify="center"
              ><v-select
                v-model="select"
                :items="sex"
                :rules="[(v) => !!v || 'sex is required']"
                label="sex"
                required
              ></v-select
            ></v-col>
          </v-row>
          <v-row class="mb-6" justify="center">
            <v-col lg="6">
              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="register"
              >
                Register
              </v-btn>
              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
           <v-btn color="blue" class="mr-4" @click="page">
                Data-Table
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    username: "",
    usernameRules:[
      (v) => !!v || "Username is requried",
    ],
    nameRules: [
      (v) => !!v || "Name is required",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
    confirm: "",
    select: null,
    sex: ["male", "famale"],
    show1: false,
    checkbox: false,
  }),
  computed: {
    passwordMatch() {
      return () => this.password === this.confirm || "Password must match";
    },
  },
  methods: {
    register() {
       if (this.username) {
        let payload = { fname: this.firstname, lname: this.lastname, email:this.email
        , uid:this.username, pass:this.password ,sex:this.select};
        this.$store.dispatch("register", payload);
        this.$refs.form.reset();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
    page(){
      this.$store.state.page = 2;
    }
  },
};
</script>
<style></style>