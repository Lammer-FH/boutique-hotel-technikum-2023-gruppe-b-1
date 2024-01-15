<template>
  <div v-if="preselectedRoom" class="base-container">
    <Room v-bind:room="preselectedRoom" preview></Room>
  </div>
  <div>
    <b-form @submit="onSubmit" class="p-3">
      <b-form-group id="input-group-1" label="Vorname:" label-for="input-1">
        <b-form-input :disabled="formToReview" id="input-1" v-model="form.firstName" placeholder="Ihr Vorname"
          required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nachname:" label-for="input-2">
        <b-form-input :disabled="formToReview" id="input-2" v-model="form.lastName" placeholder="Ihr Nachname"
          required></b-form-input>
      </b-form-group>

      <label for="example-datepicker">Geburtsdatum</label>
      <b-form-input :disabled="formToReview" id="input-7" v-model="form.birthdate" type="date" placeholder="Geburtsdatum"
        required></b-form-input>

      <b-form-group id="input-group-3" label="E-Mail-Adresse:" label-for="input-3"> </b-form-group>
      <b-form-input :disabled="formToReview" id="input-3" v-model="form.email" type="email" placeholder="E-Mail"
        required></b-form-input>

      <b-form-group id="input-group-4" label="E-Mail-Adresse wiederholen:" label-for="input-4">
        <b-form-input :disabled="formToReview" v-model="emailValidator" id="input-4" type="email"
          placeholder="E-Mail-Adresse wiederholen" required>
        </b-form-input>
      </b-form-group>
      <BAlert v-if="!emailValid" :model-value="true" variant="warning">E-Mail-Adressen stimmen nicht überein.</BAlert>

      <label for="example-datepicker">Anreise</label>
      <b-form-input :disabled="formToReview" id="input-5" v-model="form.arrival" type="date" placeholder="Anreisedatum"
        required></b-form-input>

      <label for="example-datepicker">Abreise</label>
      <b-form-input :disabled="formToReview" id="input-6" v-model="form.departure" type="date" placeholder="Abreisedatum"
        required></b-form-input>

      <BAlert v-if="!departureBeforeArrival" :model-value="true" variant="warning">An- und Abreisedatum überprüfen.
      </BAlert>



      <b-form-group id="input-group-5" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-5" :aria-describedby="ariaDescribedby"
          :disabled="formToReview">
          <b-form-checkbox value="breakfast">Frühstück?</b-form-checkbox><br />
          <b-form-checkbox value="registration" id="registration">Registrieren?</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>


      <b-form-input type="password" v-if="registrationChecked" :disabled="formToReview" id="input-7"
        v-model="form.password" placeholder="Passwort" required></b-form-input>
      <b-form-input type="password" v-if="registrationChecked" :disabled="formToReview" id="input-8"
        v-model="passwordValidator" placeholder="Passwort wiederholen" required></b-form-input>
      <BAlert v-if="!passwordValid" :model-value="true" variant="warning">Passwörter stimmen nicht überein.</BAlert>



      <b-button type="submit" id="btn" variant="primary" @click="submitForm"
        :disabled="!emailValid || !emptyInputs || !departureBeforeArrival">{{ formToReview ? 'Bestätigen' :
          'Buchen' }}</b-button>
      <b-button v-if="formToReview" @click="formToReview = false" variant="danger">Abbrechen</b-button>
    </b-form>

  </div>
</template>

<script>
import { BForm, BButton, BAlert, } from 'bootstrap-vue-next'
import Room from '../components/Room.vue'
import { useRoomStore } from '../stores/useRoomStore.js';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/useUserStore.js';


export default {
  components: {
    BForm,
    BButton,
    BAlert,
    Room,
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        arrival: "",
        departure: "",
        birthdate: "",
        checked: [""],
        password: ""
      },
      emailValidator: '',
      formToReview: false,
      arrival: Date,
      departure: Date,
      isChecked: false,
      passwordValidator: ''
    }
  },
  setup() {
    const roomStore = useRoomStore()
    const route = useRoute()
    const router = useRouter()
    const userStore = useUserStore()
    return {
      roomStore,
      route,
      router,
      userStore
    }
  },
  mounted() {
    this.roomStore.initRooms()
  },
  computed: {
    preselectedRoom() {
      const roomId = Number(this.route.params.id)
      return this.roomStore.getRoomById(roomId)
    },
    emailValid() {
      if (this.form.email?.length == 0 || this.emailValidator?.length == 0) {
        return true
      }
      if (this.form.email.trim() === this.emailValidator.trim()) {
        return true
      }
      return false
    },
    emptyInputs() {
      if (this.form.firstName?.length == 0 || this.form.lastName?.length == 0 ||
        this.form.email?.length == 0 || this.emailValidator?.length == 0) {
        return false
      }
      return true
    },
    departureBeforeArrival() {
      return this.departure < this.arrival ? false : true;
    },
    registrationChecked() {
      return this.form.checked.includes('registration')
    },
    passwordValid() {
      if (this.form.password?.length == 0 || this.passwordValidator?.length == 0) {
        return true
      }
      if (this.form.password.trim() === this.passwordValidator.trim()) {
        return true
      }
      return false
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
    },
    async submitForm() {
      if (this.formToReview == false) {
        this.formToReview = true
        return
      }
      const success = await this.roomStore.bookRoom(this.preselectedRoom.id, this.form)
      if (success && this.roomStore.booking) {
        await this.userStore.registerUser(this.form.firstName, this.form.lastName, this.form.email, this.form.firstName, this.form.password)
        this.router.push({ name: 'confirmation' })
      }
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
