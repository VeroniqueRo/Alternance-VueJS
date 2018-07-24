<template>
  <b-container class="fluid" id="app">
    <b-jumbotron header="Mes projets" lead="Avec Vue JS" >
      <h1>Interface de gestion de projets</h1>
    </b-jumbotron>
      <router-view></router-view>
  </b-container>
</template>

<script>
    // Chargement du component
    import ProjectsList from './ProjectsList'

    export default {
        name: 'app',
        components: {
            'projectslist': ProjectsList
        },
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

  .raw {
    margin-right: 10px;
    vertical-align: middle;
  }

  .card {
    margin: 0.5rem;
    max-width: 20rem;
  }

  .active {
    background-color: #138496;
    color: white;
  }

</style>
