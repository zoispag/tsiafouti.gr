<template>
  <div class="pb-10">
    <div class="h-screen bg-gray-300">

    </div>
    <div class="pl-12 h-screen relative">
      <div class="py-24 absolute float-right">
        <div class="flex items-center z-0 relative justify-end">
          <div class="w-1/4 -mr-12 z-10">
            <img class="object-cover rounded-lg shadow-xl" src="~@/assets/media/photo-1471017851983-fc49d89c57c2.jpeg">
          </div>
          <div class="bg-gray-200 w-3/4 h-auto z-0 pr-32 p-24 rounded-tl-lg rounded-bl-lg">
            <h3 class="font-bold"></h3>
            <p class="mt-6 tracking-wider">"Έχω γεννηθεί και μεγαλώσει στην Αθήνα. Είμαι πτυχιούχος Ψυχολογίας Παντείου Πανεπιστημίου Κοινωνικών και Πολιτικών Σπουδών, εκπαιδευόμενη στη <span class="font-semibold text-gray-800">Συστημική Ψυχοθεραπεία SANE - System Attachment Narrative Encephalon</span>, μια προσέγγιση που εμπλουτίζει τη σύγχρονη μετανεωτερική συστημική θεώρηση με τη θεωρία του συναισθηματικού δεσμού, την αφηγηματική ψυχολογία και τα σύγχρονα ευρήματα των νευροεπιστημών. Βασιζόμενη σε αυτή την προσέγγιση, συνεργάζομαι με παιδιά, εφήβους, ενήλικες, ζευγάρια και οικογένειες, σε έναν διαμορφωμένο επαγγελματικό χώρο όπου πραγματοποιούνται οι συνεδρίες."</p>
            <p class="mt-4 text-sm font-bold">Τσιαφούτη Δήμητρα</p>
            <p class="mt-1 text-sm font-semibold text-indigo-800">Ψυχολόγος - Ψυχοθεραπεύτρια</p>
          </div>
          <div class="absolute w-2/3 h-32 mt-48 right-0 z-10 pattern bg-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
.pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c0c0c0' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
