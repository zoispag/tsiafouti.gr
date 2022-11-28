<script setup>
import { GoogleMap, Marker } from 'vue3-google-map';
import AddressIcon from './icons/AddressIcon.vue';
import EmailIcon from './icons/EmailIcon.vue';
import TelephoneIcon from './icons/TelephoneIcon.vue';
import LinkedInIcon from './icons/LinkedInIcon.vue';

const center = { lat: 37.9828407, lng: 23.7596172 }
</script>

<template>
  <div>
    <address class="mb-6 text-lg not-italic">
      <h5 class="font-semibold mb-6">Στοιχεία επικοινωνίας</h5>
      <div class="flex items-center text-yellow-800">
        <AddressIcon class="w-5 mr-3" />
        <p class="flex-1">Έβρου 36, 11527, Αμπελόκηποι, Αθήνα</p>
      </div>
      <div class="flex items-center text-yellow-800">
        <TelephoneIcon class="w-5 mr-3" />
        <a class="flex-1" href="tel:+306987896063">(+30) 698 789 6063</a>
      </div>
      <div class="flex items-center text-yellow-800">
        <EmailIcon class="w-5 mr-3" />
        <a class="flex-1" href="mailto:d.tsiafouti@gmail.com">d.tsiafouti@gmail.com</a>
      </div>
      <div class="-mt-1 text-yellow-800">
        <a class="flex items-center" href="https://www.linkedin.com/in/dimitra-tsiafouti-6a6907147">
          <LinkedInIcon class="w-5 mr-3 fill-current" />
          <span class="pt-1">LinkedIn</span>
        </a>
      </div>
    </address>

    <GoogleMap
      api-key="AIzaSyDkd3y9D_yevOWFvyN704Z3vOjqj1zDjK4"
      :center="center"
      :zoom="18"
      class="w-full"
      style="height: 280px;"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>
