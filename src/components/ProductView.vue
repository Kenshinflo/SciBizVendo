<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import BaseModal from './BaseModal.vue';
// import { CheckCircleIcon } from '@heroicons/vue/24/solid';
// import PaytacaLogo from './icons/paytaca_logo.png';

const open = ref(false)
const scan = ref(null)
// const num = 0
defineProps({
  // num : Number,

})


const closeProd =  function() {
    open.value = false
    emit('closeEmit')
    
}
const openProd = function() {
    open.value = true
}


const openModal = () => {
    scan.value.openModal()
    closeProd()
}
const isLoading = ref(false)

// defineEmits(['close']);
const emit = defineEmits(['closeEmit', 0])

defineExpose({
  openProd,
  closeProd
})
</script>

<template>
    <TransitionRoot appear :show="open" as="template" >
      <Dialog as="div" class="relative z-10" @close="closeProd">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
          </div>
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-2xl bg-white/75 text-left shadow-xl transition-all min-h-96  sm:my-8 sm:w-full sm:max-w-md">
                <div class="bg-white min-h-96 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="">
                    <!-- <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div> -->
                    <div class="mt-3 text-center sm:mt-0 sm:text-left">
                        <slot />
                    </div>
                  </div>
                </div>
                
                <div class="bg-gray-50 px-4 pb-3 content-center justify-items-center sm:px-6"> 
                  <!-- <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="open = false">Deactivate</button>  -->
                  <div class=" grid gird-rows-2 grid-flow-col"> 
                    <button type="button" class="mt-3 w-full justify-center rounded-md bg-white px-5 py-3 text-md font-dela font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="closeProd" ref="cancelButtonRef">Cancel</button>
                    <button type="button" class="ml-3 mt-3  w-full justify-center rounded-md bg-[#53A0FB] px-5 py-3 text-md font-dela font-normal text-white shadow-sm  hover:bg-lime-300 hover:text-black sm:mt-0 sm:w-auto transition-colors"  @click="openModal" >Purchase</button>
                  </div>
                  
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <BaseModal ref="scan">
        <div>
            <DialogTitle as="h3" class="text-xl font-dela font-normal leading-6 bg-lime-300 text-black/95 w-52 py-2 text-center mx-auto tracking-tight">Scan to Pay</DialogTitle>
                <div class="w-full h-80 flex flex-col items-center justify-center">
                    <p v-if="isLoading==true" class="text-sm text-gray-500 my-auto">-QR code here></p>  
                    <svg v-else-if="isLoading==false" class="w-28 h-28 text-black/25 animate-spin my-auto" fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            fill="currentColor">
                      </path>
                    </svg>                   
                </div>
        </div>
    </BaseModal>

</template>
  
