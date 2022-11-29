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
      <div class="flex flex-col md:flex-row text-yellow-800 gap-4 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-400/25">
        <section>
          <div class="flex items-center">
            <AddressIcon class="w-5 mr-3" />
            <p class="flex-1">Έβρου 36, 11527, Αθήνα</p>
          </div>
          <div class="flex items-center">
            <TelephoneIcon class="w-5 mr-3" />
            <a class="flex-1" href="tel:+306987896063">(+30) 698 789 6063</a>
          </div>
          <div class="flex items-center">
            <EmailIcon class="w-5 mr-3" />
            <a class="flex-1" href="mailto:d.tsiafouti@gmail.com">d.tsiafouti@gmail.com</a>
          </div>
          <div class="-mt-1">
            <a class="flex items-center" href="https://www.linkedin.com/in/dimitra-tsiafouti-6a6907147">
              <LinkedInIcon class="w-5 mr-3 fill-current" />
              <span class="pt-1">LinkedIn</span>
            </a>
          </div>
        </section>
        <section class="pt-4 md:pt-0 md:pl-12">
          <a href="https://www.doctoranytime.gr/d/Psychologos/tsiafouti-dimitra" target="_blank" rel="noreferrer">
            <span class="whitespace-nowrap">Ραντεβού μεσω DoctorAnytime</span>
            <img class="mt-3 mx-0 -ml-5 md:mx-auto w-48 md:w-56 object-cover" src="~@/assets/media/doctoranytime_logo.png">
          </a>
        </section>
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
