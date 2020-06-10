<template>
  <div class="container">
    <div class="row">
        <h3>Users</h3>
        <ul>
          <li class="card" v-for="item in items">

          </li>
        </ul>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import {mapState} from 'vuex'
  import User from '~/data/models/user'

  export default {
    components: {
      Logo
    },
    computed: {
      ...mapState('entities/users')
    },
    data() {
      return {
        data: null
      }
    },
    async created() {
      let data = await this.fetchUsers();
      console.log(data);
      User.create(data);
    },
    methods: {
      async testApi() {
        // Normal usage with axios
        this.data = (await this.$axios.get('https://ouv6ogvlzj.execute-api.us-east-2.amazonaws.com/v1/')).data;
      },
      async fetchUsers() {
        // Normal usage with axios
        let data = (await this.$axios.get('http://localhost:5000/users')).data;
        return data;
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
