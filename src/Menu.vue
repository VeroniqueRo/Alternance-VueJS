<template>
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand left><router-link :to="{name:'liste'}">Accueil</router-link></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item><router-link :to="{name:'liste'}">Liste de Projets</router-link></b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <form class="form-inline">
                        <!--<b-input-group>-->
                            <!--<b-input-group-prepend>-->
                                <!--<b-btn class="btn btn-warning disabled"><i class="fas fa-search"></i></b-btn>-->
                            <!--</b-input-group-prepend>-->
                            <!--<b-form-input v-model="search1" placeholder="Rechercher un projet..."/>-->
                            <!--<b-input-group-append>-->
                                <!--<b-btn :disabled="!search1" @click="search1 = ''">Clear</b-btn>-->
                            <!--</b-input-group-append>-->
                        <!--</b-input-group>-->
                         <!--Button trigger modal-->
                        <router-link :to="{name:'formulaire'}"><b-button size="md" class="mr-1">Nouveau projet</b-button></router-link>
                        <!--<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#nouveauProjet">-->
                            <!--Nouveau Projet-->
                        <!--</button>-->
                    </form>
                </b-nav-form>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>

</template>

<script>

    import Icon from 'vue-awesome/components/Icon';

    export default {
        name: "menu",
        components: { Icon },
        props: ["test"],
    }

</script>

<style scoped>
</style>