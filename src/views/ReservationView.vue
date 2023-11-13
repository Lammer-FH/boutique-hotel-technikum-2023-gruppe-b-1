<template>
   {{ $route.params.id }}
    <div class="base-container">
    </div>
    <div>
      <b-form @submit="onSubmit" class="p-3">
        <b-form-group id="input-group-1" label="Vorname:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.firstName"
            placeholder="Ihr Vorname"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nachname:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.secondName"
            placeholder="Ihr Nachname"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="E-Mail-Adresse:"
          label-for="input-3"
        >        </b-form-group>

          <b-form-input
            id="input-3"
            v-model="form.email"
            type="email"
            placeholder="E-Mail"
            required
          ></b-form-input>

          <b-form-group
          id="input-group-4"
          label="E-Mail-Adresse wiederholen:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            type="email"
            placeholder="E-Mail-Adresse wiederholen"
            required
          >
       </b-form-input>
        </b-form-group>


        <b-form-group id="input-group-5" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-5"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="breakfast">Frühstück?</b-form-checkbox><br/>
            <b-form-checkbox value="registration">Registrieren?</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" id="btn" variant="primary" v-on:click="submitForm">Absenden</b-button>
      </b-form>
    </div>
  </template>

  <script>
    import { BForm, BButton } from 'bootstrap-vue-next'
    import Room from '../components/Room.vue'
    import { useRoomStore } from '../stores/useRoomStore';

    export default {
        components: {
        BForm,
        BButton,
        Room
    },
      data() {
        return {
          form: {
            firstName: '',
            secondName: '',
            eMail: '',
            checked: []
          }
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.name = ''
          this.form.food = null
          this.form.checked = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        },
        submitForm() {
            document.getElementById('btn').innerHTML = 'Buchen';
            this.validateEmailAdress;
        },
        validateEmailAdress() {
            email = document.getElementById('input-3').value;
            emailValidator = document.getElementById('input-4').value;

            if (email != emailValidator) {
                alert('Email muss übereinstimmen');
            }
        },
        displayRoom(roomId) {
            this.roomId = useRoomStore.$id;

        }
      }
    }
  </script>

<style scoped>
.base-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem 0;
}
</style>
