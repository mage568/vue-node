<template>
  <div class="editinfo">
    <b-form id="main-form" @submit="onSubmit" @reset="onReset">
      
      <b-form-group id="namegroup" label="Name" label-for="nameinput">
        <b-form-input id="nameinput" type="text" v-model="form.name" required placeholder="Name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="birthgroup" label="Birthday" label-for="birthinput">
        <b-form-input id="birthinput" type="date" v-model="form.birth" required placeholder="Birthday">
        </b-form-input>
      </b-form-group>

      <b-form-group id="addressgroup" label="Address" label-for="addressinput">
        <b-form-input id="addressinput" type="text" v-model="form.address" required placeholder="Address">
        </b-form-input>
      </b-form-group>

      <b-form-group id="emailgroup" label="Email" label-for="emailinput">
        <b-form-input id="emailinput" type="email" v-model="form.email" required placeholder="Email">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "EditInfo",
  data() {
    return {
      form: {
        name: '',
        birth: '',
        address: '',
        email: ''
      }
    };
  },
  mounted() {
    this.form.name = "Ivan";
    this.form.birth = "1993-10-08";
    this.form.address = "sdfsdf-12";
    this.form.email = "ivan.voranau@hotmail.com";
  },
  methods: {
    onSubmit: function(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form))
      this.$router.go(-1);
    },
    onReset: function(evt) {
      this.form.name = '';
      this.form.birth = '';
      this.form.address = '';
      this.form.email = '';
    }
  }
};
</script>

<style>

.editinfo #main-form {
  width: 50%;
  margin: auto;
}

.editinfo #main-form #namegroup label,
.editinfo #main-form #birthgroup label,
.editinfo #main-form #addressgroup label,
.editinfo #main-form #emailgroup label {
  width: 100%;
  text-align: left;
}
</style>

