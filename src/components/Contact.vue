<template>
  <div id="contact" class="py-16 px-8 md:px-32 text-sm bg-gray-200">
    <form
      class="space-y-8 divide-y divide-gray-200"
      name="contact"
      method="POST"
      netlify
      netlify-honeypot="bot-field"
    >
      <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Φόρμα επικοινωνίας
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="username" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Όνομα
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <input id="name" type="text" name="name" autocomplete="name" class="block max-w-lg w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>
            </div>

            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Email
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <input id="email" name="email" type="email" autocomplete="email" class="block max-w-lg w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>

            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Μήνυμα
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <textarea id="about" name="about" rows="5" class="max-w-lg shadow-sm block w-full focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          Αποστολή
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">

</style>
