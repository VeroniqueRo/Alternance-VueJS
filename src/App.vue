<template>
  <div class="container-fluid" id="app">

    <b-jumbotron header="Mes projets" lead="Avec Vue JS" >
      <h1>{{ msg }}</h1>
      {{ projets }}
    </b-jumbotron>
    <div>
      <b-card title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Interface de gestion de projet',
                projets: [
                {
                      "_id": "5b3e3da861f2d927949fa8da",
                      "isActive": false,
                      "picture": "http://placehold.it/32x32",
                      "name": "PUSHCART",
                      "creation": "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)"
                }
                ],
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

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
