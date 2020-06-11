<template>
  <div class="container">
   <div v-if="clients.length" class="row">
     <div class="row mt-4 mb-1">
       <table class="table">
         <thead>
         <tr>
           <th scope="col">client Number</th>
           <th scope="col">business Name</th>
           <th scope="col">original LocalOffice</th>
           <th scope="col">current LocalOffice</th>
           <th scope="col">last BillDate</th>
         </tr>
         </thead>
         <tbody>
         <tr v-for="client in clients">
           <th scope="row">  {{client.clientNumber}}</th>
           <td> {{client.businessName}}</td>
           <td> {{client.originalLocalOffice}}</td>
           <td>{{client.currentLocalOffice}}</td>
           <td>{{client.lastBillDate}}</td>
         </tr>
         </tbody>
       </table>
     </div>
   </div>
  </div>
</template>
<script>
  import Client from '~/data/models/client'

  export default {
    components: {},
    computed: {
      clients()
      {
        return Client.all();
      }

    },
    data() {
      return {
        data: null,
      }
    },
    async created() {
      let data = await this.fetchClients();
      console.log(data);
      Client.create({data});
    },
    methods: {
      async fetchClients() {
        // Normal usage with axios
        let data = (await this.$axios.get('http://localhost:5000/clients')).data;
        return data;
      },
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
