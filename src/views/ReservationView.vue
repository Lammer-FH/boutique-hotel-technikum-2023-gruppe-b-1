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
          <b-form-checkbox value="registration">Registrieren?</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" id="btn" variant="primary" @click="submitForm"
        :disabled="!emailValid || !emptyInputs || !departureBeforeArrival">{{ formToReview ? 'Bestätigen' :
          'Buchen' }}</b-button>
    </b-form>
  </div>
</template>

<script>
import { BForm, BButton, BAlert, } from 'bootstrap-vue-next'
import Room from '../components/Room.vue'
import { useRoomStore } from '../stores/useRoomStore.js';
import { useRoute } from 'vue-router';


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
        firstName: '',
        lastName: '',
        email: '',
        arrival: '',
        departure: '',
        checked: []
      },
      emailValidator: '',
      formToReview: false,
      arrival: Date,
      departure: Date
    }
  },
  setup() {
    const roomStore = useRoomStore()
    const route = useRoute()
    return {
      roomStore,
      route
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
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
    },
    submitForm() {
      if (this.formToReview == false) {
        this.formToReview = true
        return
      }
      this.roomStore.bookRoom(this.preselectedRoom.id, this.form)
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
