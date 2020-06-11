<template>
  <div>
    <form class="bg-gray shadow-none rounded">
      <!-- Add New Record -->
      <div>
        <h3
          class="text-2xl leading-6 font-medium text-center text-blue-900 px-2 py-3"
        >
          Add New Record
        </h3>
      </div>

      <!-- Container for the Form -->
      <div
        class="max-w-4xl mx-auto py-8 px-10 bg-white-100 border-l-2 border-blue-800 shadow rounded-lg"
      >
        <!-- First Row -->
        <div class="flex mb-4">
          <!-- First column -->
          <div class="w-1/2 px-4">
            <div>
              <label
                for="client_number"
                class="block text-sm font-medium leading-5 text-gray-700 pb-2"
              >Client Number</label
              >
              <input
                id="client_number"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                placeholder="G79552"
                v-model="newClient.clientNumber"
              />
            </div>
          </div>

          <!-- Second column -->
          <div class="w-1/2 px-4">
            <div>
              <label
                for="business_name"
                class="block text-sm font-medium leading-5 text-gray-700 pb-2"
              >Business Name</label
              >
              <input
                id="business_name"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                placeholder
                v-model="newClient.businessName"

              />
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div class="flex mb-4">
          <!-- First column -->
          <div class="w-1/2 px-4">
            <div>
              <label
                for="original_local_office"
                class="block text-sm font-medium leading-5 text-gray-700 pb-2"
              >Original Local Office</label
              >
              <input
                id="original_local_office"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                placeholder
                v-model="newClient.originalLocalOffice"

              />
            </div>
          </div>

          <!-- Second column -->
          <div class="w-1/2 px-4">
            <div>
              <label
                for="current_local_office"
                class="block text-sm font-medium leading-5 text-gray-700 pb-2"
              >Current Local Office</label
              >
              <input
                id="current_local_office"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                placeholder
                v-model="newClient.currentLocalOffice"

              />
            </div>
          </div>
        </div>

        <!-- Third Row -->
        <div class="flex mb-4">
          <!-- First column -->
          <div class="w-1/2 px-4">
            <div>
              <label
                for="freq_of_deductions"
                class="block text-sm font-medium leading-5 text-gray-700 pb-2"
              >Frequency of Deductions</label
              >
              <div class="relative">
                <select
                  id="freq_of_deductions"
                  class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option>01 - Annual</option>
                  <option>02 - Semi-Annual</option>
                  <option>04 - Quarterly</option>
                  <option>09 - 9 bills per year</option>
                  <option>10 - 10 bills per year</option>
                  <option>12 - Monthly</option>
                  <option>24 - Semi-Monthly</option>
                  <option>26 - 26 bills per year</option>
                  <option>52 - Weekly</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Second column -->
          <div class="w-1/2 px-4">
            <div>
              <label
                for="current_local_office"
                class="block text-sm font-medium leading-5 text-gray-700 pb-2"
              >Last Bill Date</label
              >
              <input
                id="lastBillDate"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                placeholder
                v-model="newClient.lastBillDate"
              />
            </div>
          </div>
        </div>

        <!-- Buttons  -->
        <div class="pl-4">
          <div class="flex justify-end">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
              >
                Cancel
              </button>
            </span>
            <span class="ml-3 inline-flex rounded-md shadow-sm">
              <button
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-900
                 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                @click.prevent="addClient"
              >
                Save
              </button>
            </span>
          </div>
        </div>

        <!-- Container closing -->
      </div>

      <!-- form closing -->
    </form>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Client from '~/data/models/client'

  export default {
    components: {},
    computed: {
    },
    data() {
      return {
        newClient:{
          clientNumber: '',
          businessName:'',
          originalLocalOffice: '',
          currentLocalOffice: '',
          lastBillDate: ''
        }
      }
    },
    async created() {
    },
    methods: {
      addClient()
      {
        Client.insert({
          data: this.newClient
        });
        this.$axios.post('http://localhost:5000/clients',this.newClient).then((res) => {
          console.log(res.data)
        });


      }
    }
  }
</script>

<style>
  /* Sample `apply` at-rules with Tailwind CSS
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
