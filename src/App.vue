<template>
  <b-container class="fluid" id="app">
    <b-jumbotron>
      <img class='image-titre' src="../images/idee_projet.png">
      <h1>Interface de gestion de projets</h1>
    </b-jumbotron>
      <navbar></navbar>
      <router-view></router-view>
  </b-container>
</template>

<script>
    // Chargement du component
    import ProjectsList from './ProjectsList';
    import Menu from './Menu'

    export default {
        name: 'app',
        components: {
            'projectslist': ProjectsList,
            'navbar' : Menu
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

  .image-titre {
    max-width: 35%;
    height: auto;
  }

</style>
