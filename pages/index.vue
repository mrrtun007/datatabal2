<template>
  <div>
    <br>
    <v-card class="mx-auto pa-4" elevation="11">
      <h3>แบบฟอร์มการชำระเงิน</h3>
      <br>
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="purchase"
              label="เลขที่ใบสั่งซื้อ"
              required
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="price"
              label="จำนวนเงิน"
              required
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="name"
              label="ชื่อ-นามสกุล"
              required
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="email"
              label="อีเมล์"
              required
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="phone"
              label="เบอร์โทรศัพท์"
              required
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="note"
              label="หมายเหตุ"
              required
            />
          </v-col>
        </v-row>
        <v-btn :disabled="!valid" color="success" @click="addData ">
          ชำระเงิน
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      valid: false,
      phone: '',
      name: '',
      price: '',
      purchase: '',
      email: '',
      note: '',
      arr: {}
    }
  },
  methods: {
    addData () {
      const data = {
        phone: this.phone,
        name: this.name,
        price: this.price,
        purchase: this.purchase,
        email: this.email,
        note: this.note
      }
      db.collection('payment')
        .doc()
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style>
.theme--dark.v-application {
  background-image: url(https://cdn.dribbble.com/users/1632728/screenshots/6263210/espresso_nogarnish_800x600.gif);
  background-size: cover;
}
</style>
