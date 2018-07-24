<template>
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="/" left>Accueil</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item href="/liste">Liste des projets</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <form class="form-inline">
                        <div class="input-group-prepend">
                            <span class="btn btn-info"><icon name="search"></icon></span>
                        </div>
                        <b-form-input id="search" size="md" class="mr-sm-2" type="text" placeholder="Rechercher un projet..."/>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#nouveauProjet">
                            Nouveau Projet
                        </button>
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
    }

    // Fonction de filtrage sur le nom
    function research(tab, val) {

        let newTab = [];
        // Compare la recherche avec le nom dans le tableau qu'elle soit en minuscule ou en majuscule
        for (i = 0; i < tab.length; i++) {
            if (tab[i].name.startsWith(val) || tab[i].name.startsWith(val.toUpperCase())){
                newTab.push(tab[i]);
            }
        }
        return newTab;
    }

</script>

<style scoped>

</style>