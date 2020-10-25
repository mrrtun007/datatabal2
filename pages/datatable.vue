<template>
  <div>
    <v-card>
      <v-card-title>
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="textList"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      />
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      textList: [],
      search: '',
      headers: [
        { text: 'Name', align: 'start', sortable: 'false', value: 'name' },
        { text: 'Phone', value: 'phone' },
        { text: 'Amount', value: 'price' },
        { text: 'Ordernumber', value: 'purchase' },
        { text: 'Email', value: 'email' },
        { text: 'Note', value: 'note' }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      db.collection('payment')
        .orderBy('name')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.textList = data
        })
    }
  }
}
</script>
