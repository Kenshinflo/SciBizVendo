<script setup>
import { ref } from 'vue';
import { inject } from 'vue'

import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
// import { CheckCircleIcon } from '@heroicons/vue/24/solid';
// import PaytacaLogo from './icons/paytaca_logo.png';
const open = ref(false)
const detectedCodes = ref([])
const isLoading = ref(false)

const closeSuccess =  function() {
  open.value = false
  isLoading.value=false
  clearDetectedCodes()
}
const openSuccess = function() {
  open.value = true
}
const onDetect = (code) => {
  detectedCodes.value.push(code);
  if (detectedCodes.value != ''){
    isLoading.value=true;
  }
  getList()
  
}
const clearDetectedCodes = () => {
  detectedCodes.value = [];
}
const axios = inject('axios'); // inject axios

    const getList = () => {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
            detectedCodes
        })
        .then(response => {
          console.log(response.data);
        });
    };

defineExpose({
  openSuccess,
  closeSuccess
})
</script>

<template>
    <TransitionRoot appear :show="open" as="template" >
      <Dialog as="div" class="relative z-10" @close="closeSuccess">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
          </div>
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-2xl bg-white/75 text-left shadow-xl transition-all sm:max-h-max  sm:my-8 sm:w-full sm:max-w-xl">
                <div class="bg-white min-h-96 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="">
                    <!-- <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div> -->
                    <div class="mt-3 text-center sm:mt-0 sm:text-left min-h-96">
                        <DialogTitle as="h3" class="text-xl font-dela font-normal leading-6 bg-[#C7FF51] w-10/12 text-black p-3 text-left tracking-normal">
                          Scanning for QR Code:
                        </DialogTitle>
                        <div v-if="isLoading==false">
                          <p class="text-stone-400 font-mono mt-2 mb-2 mx-2 text-md leading-5 ">Please display the QR code generated by the Paytaca app near the camera</p>
                          <qrcode-stream @detect="onDetect"></qrcode-stream>
                          <qrcode-capture @detect="onDetect">hera </qrcode-capture>
                          
                        </div>
                        <div v-else class="my-auto mx-auto">
                          <svg  class="w-28 h-28 text-black/25 animate-spin my-auto mx-auto" fill="none"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  fill="currentColor">
                            </path>
                          </svg>    
                        </div>
                        
                        <div v-for="(qrs, index) in detectedCodes" :key="index">
                            <p> {{ qrs }}</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 flex items-center justify-center sm:px-6"> 
                  <!-- <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="open = false">Deactivate</button>  -->
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-5 py-3 text-sm font-dela font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="closeSuccess" ref="cancelButtonRef">Close</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>
