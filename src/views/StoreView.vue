<script>
import { ref, onMounted } from 'vue';
import { inject } from 'vue'
import image from "../components/products/1.png";
import image1 from "../components/products/2.png";
import image2 from "../components/products/3.png";
import image3 from "../components/products/4.png";
import image4 from "../components/products/5.png";
import image5 from "../components/products/6.png";
import image6 from "../components/products/7.png";
import image7 from "../components/products/8.png";
import image8 from "../components/products/9.png";
import image9 from "../components/products/10.png";
import image10 from "../components/products/11.png";
import image11 from "../components/products/12.png";
import image12 from "../components/products/13.png";
import image13 from "../components/products/14.png";
import image14 from "../components/products/15.png";
import image15 from "../components/products/16.png";
import no_stock from "../components/products/no-inventory.png";
import ProductView from "../components/ProductView.vue";

// const product = ref(null);
export default {
    data(){
        return{
            items:[
                {
                    id:'A01', price:'15.00', bch:'0.0007', stock:'12', img:image
                },
                {
                    id:'A02', price:'25.00', bch:'0.0007', stock:'23', img:image2
                },
                {
                    id:'A03', price:'30.00', bch:'0.0007', stock:'23', img:image3
                },
                {
                    id:'A04', price:'40.00', bch:'0.0007', stock:'43', img:image4
                },
                {
                    id:'B05', price:'10.00', bch:'0.0007', stock:'0', img:image5
                },
                {
                    id:'B06', price:'15.00', bch:'0.0007', stock:'2', img:image6
                },
                {
                    id:'B07', price:'15.00', bch:'0.0007', stock:'3', img:image7
                },
                {
                    id:'B08', price:'15.00', bch:'0.0007', stock:'6', img:image8
                },
                {
                    id:'C09', price:'15.00', bch:'0.0007', stock:'8', img:image9
                },
                {
                    id:'C10', price:'15.00', bch:'0.0007', stock:'5', img:image10
                },
                {
                    id:'C11', price:'15.00', bch:'0.0007', stock:'7', img:image11
                },
                {
                    id:'C12', price:'15.00', bch:'0.0007', stock:'0', img:image12
                },
                {
                    id:'D13', price:'15.00', bch:'0.0007', stock:'0', img:image13
                },
                {
                    id:'D14', price:'15.00', bch:'0.0007', stock:'6', img:image14
                },
                {
                    id:'D15', price:'15.00', bch:'0.0007', stock:'2', img:image15
                },
                {
                    id:'D16', price:'15.00', bch:'0.0007', stock:'3', img:image1
                }
            ],
            // selectedItems: [],           
        }
    },
}
</script>
<script setup>
    // const bchCurrent = 27154.62 
    const modal = ref(null)
    const selectedItems = ref([]);
    const num = ref(1);
    const bchCurrent = ref(null);

// Fetch BCH to PHP rate on component mount
    onMounted(async () => {
        try {
            const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=PHP');
            const data = await response.json();
            bchCurrent.value = data['PHP'];
        } catch (error) {
            console.error('Error fetching BCH to PHP rate:', error);
        }
    });
    const openProd = (item) => {
        selectedItems.value = [item];
        modal.value.openProd();
        getList()
    }
    const addIncrement = function() {
        const stock = selectedItems.value[0].stock;
        if (num.value < stock) {
            num.value++
        }
    }
    const subDecrement = function() {
        if (num.value > 1 ){
            num.value--
        }
    }
    const emitZero = function() {
        setTimeout(() => {
            num.value = 1;
            // console.log(num.value);
        }, 300);
    }

    const axios = inject('axios'); // inject axios

    const getList = () => {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
            idHere:'sent diay',
            priceHere:'1',
            bchHere:'2',
            stockHere:'3'
        })
        .then(response => {
          console.log(response.data);
        });
    };

    
</script>

<template>
  <section class="container absolute max-w-4xl min-h-svh flex flex-col background">
    <div class="my-auto">
        <div class=" w-20 bg-[#53A0FB] h-16 flex justify-center items-center -mt-10 mb-6">
            <RouterLink to="/option" >
                <svg class="hover:scale-110 hover:ease-in hover:transition-transform" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect x="50" y="50" width="50" height="50" transform="rotate(-180 50 50)" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_104_895" transform="scale(0.01)"/>
                    </pattern>
                    <image id="image0_104_895" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+klEQVR4nO3cvWoUURiA4SUgBJtYRYiFRWy1j6UBMQG7pDOd92Cb0tZS7LwAvQFtYmehtVVCEvJnFVAslLxhyC4sMvnZnTnnfMO8T7nF7jm8zOzut7MzGEiSJEmSJEmSJEmSJEkaAp4Dh8ABsDF6XIVwEWLcO2DWIOWC1PkOPDBKnCCVU2DdKHGCVM6AN8Atw8QIMvIVuG+UOEEqP4GnRokTZHQKew3MGCZGkJHPwF2jxAlS2QMeGyVOkMpf4JVRWkQ7PgJ32lxXb9GeH8Cj0vvpPNr1B3hZek+dRhrvgdul99ZJpOOAMliQigPKYEHKDSiB1eGXJdX7AtzLGcQY1zsGlnMFUaQB5Q0Xo1wDyrEXUoQB5QSLUI4B5X8votIDyikWoJQDypon13R+AysGiWXHILFsGySOX8Azg8R5U3/om3oMH4C5VmL4KasRvxgGsgsstXZUeIQ08gmYH6TSbG298g/YzDF+9weq6x0BT5KGGAuyMjwnqt4WsJAlRpeRnv/CmkSGy4DWJlpQ35HON2Cx9P46hzS8lHRaLYfwYuumQg4G+4yIg8E+oxn/0hYoyG6ywWCfEXEw2GdEHAz2GTd34q014gTZcjCYCVdzMJgbl3MwWAL1HAwGugnmW2+CWf42sTvAPvCi5FokSZIkSZIkSZIkSZKkQVLnOXg9OT5CUCAAAAAASUVORK5CYII="/>
                    </defs>
                </svg>
            </RouterLink>
        </div>
        <div class="itemSection grid grid-cols-4 gap-4 content-center justify-items-center mx-4">
            <!-- <button >Click me</button> -->
            <div v-for="item in items" :key="item.id">
                <div 
                    :class="[item.stock === '0' ? 'bg-gradient-to-l  from-red-500 to-zinc-800 to-80% shadow-lg':'bg-white shadow-rxl', 'gridCon h-50 w-46 rounded hover:cursor-pointer hover:scale-105 hover:ease-in hover:transition-transform'] "
                    @click="item.stock > 0 && openProd(item)"
                >
                    <div class="h-48 bg-white rounded outline outline-black outline-3 flex items-center justify-center">
                        <img :src="item.stock !== '0' ? item.img : no_stock" :class="[item.stock === '0' ? '': '' , 'w-28 h-fit']" loading="lazy" />
                    </div>
                    <div class="relative flex justify-between p-1">
                        <div class="flex-none  ">
                            <div class="absolute -top-[15px] left-[7px] w-16 py-1 bg-black rounded">
                                <p class="font-dela text-white text-center text-xl">{{ item.id  }} </p>
                            </div>
                            <div :class="[item.stock === '0' ? 'bg-neutral-800' : 'bg-lime-500', 'w-fit px-1 rounded-md mt-6 mb-1 ml-1']">
                                <p class="font-mono tracking-tighter text-white text-sm">Stocks:{{ item.stock }}</p>
                            </div>   
                        </div>
                        <div class="text-right flex-none">
                            <p :class="[item.stock === '0' ? 'text-white line-through decoration-white':'text-red-500', 'font-space text-normal font-medium ']">₱ {{ item.price }}</p>
                            <div :class="[item.stock === '0' ? 'outline-white':'outline-lime-500', 'outline outline-2 rounded-md  pl-1']">
                                <p :class="[item.stock === '0' ? 'text-white line-through decoration-1':'text-lime-500', 'font-dela text-xs mt-1']">{{ (item.price / bchCurrent).toFixed(5) }}<span class="font-sans text-xxs mr-1"> BCH</span></p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ProductView ref="modal" @close-emit="emitZero">
        <div class="w-24 py-1 bg-black ">
            <p class="font-dela text-white text-center text-3xl">{{ selectedItems[0].id }}</p>
        </div>
        <div class="grid grid-cols-2"> 
            <div class="bg-lime-300 h-60 mt-3 flex flex-col">
                <img :src="selectedItems[0].img !== '' ? selectedItems[0].img : ''" class="w-36 mx-auto my-auto h-fit" loading="lazy" />
            </div>
            
            <div class="h-60 mt-2">
                <div class="grid grid-cols-1 content-center justify-items-center"> 
                    <p class="font-dela text-black text-xl ">Quantity</p>
                    <div class="grid grid-cols-3 gap-1 content-center items-center text-center mt-5">
                        <div class="font-normal text-2xl hover:cursor-pointer border border-black rounded-md py-1 shadow-md" @click="subDecrement">
                            -
                        </div>
                        <div class="font-space text-2xl min-w-14 font-medium  rounded  border-b-2 border-black  p-2" >
                            {{num}}
                        </div>
                        <div class="font-normal text-2xl hover:cursor-pointer border border-black rounded-md py-1 shadow-md" @click="addIncrement"> 
                            +
                        </div>
                    </div>
                    <p class="font-mono tracking-tighter text-black text-md mt-4 bg-lime-400 rounded-md place-self-end px-1 mr-3 ">Stocks:{{ selectedItems[0].stock }}</p>
                    <div class="justify-self-end  place-self-end text-right mr-3 mt-16">
                        <p class="text-2xl font-space font-medium text-red-600">₱{{ (selectedItems[0].price * num).toFixed(2) }}</p>
                        <div class="bg-lime-400 rounded-md border border-black border-l-transparent min-w-40 flex justify-between">
                            <p 
                                class= "font-dela text-2xl text-center pr-1 -ml-2 h-6 mb-1"
                                >=</p>
                            <p 
                                class="font-dela text-2xl text-black text-right "
                            > {{ (selectedItems[0].price * num / bchCurrent).toFixed(5) }}</p>
                        </div>
                        <p class="">BCH</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </ProductView>
    
  </section>
</template>



<style scoped>
.background{
    background-color: #e0fffe;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234f7170' fill-opacity='0.1'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>