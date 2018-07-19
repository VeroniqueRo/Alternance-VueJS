<template>
  <div class="container-fluid" id="app">
    <b-jumbotron header="Mes projets" lead="Avec Vue JS" >
      <h1>Interface de gestion de projet</h1>
    </b-jumbotron>
    <div>
      <b-card :title="name"
              :class="{ active: isActive }"
              style="max-width: 20rem;"
              class="mb-2">
        <div>
          <img :src="picture">
        </div>
        <div>
          <b-form-checkbox id="checkbox1"
                           v-model="status"
                           value="accepted"
                           unchecked-value="not_accepted">
            Statut du projet
          </b-form-checkbox>
        </div>
      </b-card>
    </div>

  </div>
</template>

<script>
    // Chargement du component

    export default {
        name: 'app',
        components: {

        },
        data () {
            return {
                "id": "5b3e3da861f2d927949fa8da",
                "isActive": true,
                "picture": "http://placehold.it/32x32",
                "name": "PUSHCART",
                "creation": "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)"
            }
            }
        }

</script>

<style lang="scss">

  @import "~bootstrap/scss/bootstrap.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  .active {
    background-color: rosybrown;
    color: white;
  }

</style>
