<script setup>
import { ref } from "vue";

import axios from 'axios'
import EmailSuccess from './EmailSuccess.vue'
import EmailError from './EmailError.vue'
import EmailBot from './EmailBot.vue'

const name = ref('')
const email = ref('')
const message = ref('')
const isBot = ref(false)
const bot = ref(null)
const status = ref(null)

function submitForm() {
  status.value = null

  if (bot.value != null) {
    isBot.value = true
    status.value = 'SUCCESS'
    return
  }

  axios.post('https://formspree.io/f/xdopyapp', {
    name: name.value,
    _replyto: email.value,
    _subject: `${name.value} | Contact form message from tsiafouti.gr`,
    message: message.value
  }).then((response) => {
    name.value = ''
    email.value = ''
    message.value = ''
    status.value = 'SUCCESS'
  }).catch(() => {
    status.value = 'ERROR'
  })
}
</script>

<template>
  <form
    class="space-y-8 divide-y divide-gray-200"
    @submit.prevent="submitForm"
  >
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900 pb-4">
            Φόρμα επικοινωνίας
          </h3>

          <EmailBot v-if="isBot" />
          <EmailSuccess v-if="status === 'SUCCESS'" />
          <EmailError v-if="status === 'ERROR'" />
        </div>

        <div class="sm:mt-5 space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="username" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Όνομα
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <input
                  v-model="name"
                  required
                  type="text"
                  name="name"
                  autocomplete="name"
                  class="block max-w-lg w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md"
                >
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Email
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="email"
                required
                name="_replyto"
                type="email"
                autocomplete="email"
                class="block max-w-lg w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Μήνυμα
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                v-model="message"
                required
                name="message"
                rows="5"
                class="max-w-lg shadow-sm block w-full focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden">
      <label class="sr-only">Don’t fill this out if you're human: </label>
      <input
        v-model="bot"
        name="bot-field"
        placeholder="This field is only for the robots."
      />
    </div>

    <div class="pt-5">
      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
        Αποστολή
      </button>
    </div>
  </form>
</template>
