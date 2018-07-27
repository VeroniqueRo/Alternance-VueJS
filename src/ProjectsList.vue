<template>
    <!--Table version bootstrap-vue-->
    <b-container fluid>
        <b-row>
            <b-col md="6" class="my-1">
                <b-form-group horizontal label="Filter" class="mb-0">
                    <b-input-group>
                        <b-form-input v-model="search1" placeholder="Rechercher un projet..." />
                        <b-input-group-append>
                            <b-btn :disabled="!search1" @click="search1 = ''">Clear</b-btn>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-col>
        </b-row>
    <b-table
            responsive
            bordered hover
            :items="listFiltered"
            :fields="fields"
    >
        <template slot="index" slot-scope="data">
            {{data.index + 1}}
        </template>
        <template slot="name" slot-scope="row">{{row.item.name}}</template>
        <template slot="infos" slot-scope="row" md="8">
            <b-button-group>
                <router-link :to="{name:'detail', params:{ monprojet: row.item } }"><b-button size="md" class="mr-1">Voir détail</b-button></router-link>
                <b-button variant="danger" @click="deleteProject(row.item.id)"><i class="fas fa-trash-alt"></i></b-button></b-button>
            </b-button-group>

        </template>
    </b-table>
    </b-container>

    <!--Table version 1-->

    <!--<table class="table table-bordered table-hover">-->
        <!--<thead class="thead-light">-->
        <!--<tr class="raw">-->
            <!--<th class="col-sm-4">Nom  <i @click="sortByProjectName" class='fa fa-sort'></i><b-form-input v-model="search1" placeholder="Rechercher un projet..."/></th>-->
            <!--<th class="col-sm-3">Auteur  <i @click="sortByName" class='fa fa-sort'></i><b-form-input v-model="search2" placeholder="Rechercher un auteur..."/></th>-->
            <!--<th class="col-sm-2">Date du projet <i @click="sortByDate" class='fa fa-sort'></i></th>-->
            <!--<th class="col-sm-3">Actions</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody v-for="monprojet in listFiltered">-->
            <!--<tr>-->
                <!--<td>{{monprojet.name}}</td>-->
                <!--<td>{{monprojet.creator.name}}</td>-->
                <!--<td>{{monprojet.createdAt}}</td>-->
                <!--<td><router-link :to="{name:'detail', params:{monprojet}}" class="btn btn-md btn-info">Voir détail</router-link> <b-button @click="deleteProject"><i class="fas fa-trash"></i></b-button> <b-button @click="deleteProject"><i class="fas fa-pencil-alt"></i></b-button></td>-->
            <!--</tr>-->
        <!--</tbody>-->
    <!--</table>-->
</template>
<script>
    // Chargement du component
    import axios from 'axios'
    import VeroTable from "./VeroTable"
    import Menu from "./Menu"
    import FormulaireAjout from "./FormulaireAjout";

    // Fonction de filtrage sur le nom du projet
    function researchProject(tab, val) {

        let newTab = [];
        // Compare la recherche avec le nom dans le tableau qu'elle soit en minuscule ou en majuscule
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].name.toUpperCase().startsWith(val)){
                newTab.push(tab[i]);
            }
        }
        return newTab;
    }

    // Fonction de filtrage sur le nom de l'auteur
    function researchAuthor(tab, val) {

        let newTab = [];
        // Compare la recherche avec le nom dans le tableau qu'elle soit en minuscule ou en majuscule
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].creator.name.toUpperCase().startsWith(val)){
                newTab.push(tab[i]);
            }
        }
        return newTab;
    }

    // Fonction de tri Nom Auteur par ordre alphabétique
    function sortName(tab) {

        let result = tab;
        for (let i = 0; i < result.length; i++) {

            // Compare les éléments du tableau result
            result.sort(function(nomA,nomB){
                if (nomA.creator.name < nomB.creator.name) {
                    return -1;
                } else if (nomA.creator.name > nomB.creator.name) {
                    return 1;
                } else if (nomA.creator.name === nomB.creator.name) {
                    return 0
                }
            });
        }
        return result;
    }

    // Fonction de tri Projets par ordre alphabétique
    function sortProjectName(tab) {

        let result = tab;
        for (let i = 0; i < result.length; i++) {

            // Compare les éléments du tableau result
            result.sort(function(nomA,nomB){
                if (nomA.name < nomB.name) {
                    return -1;
                } else if (nomA.name > nomB.name) {
                    return 1;
                } else if (nomA.name === nomB.name) {
                    return 0
                }
            });
        }
        return result;
    }

    // Trie les dates
    function sortDate(tab) {
        tab.sort(function (date1, date2) {
            return new Date(date1.createdAt) - new Date(date2.createdAt);
        })
        return tab;
    }

    function getData() {

    }


    export default {
        name: "ProjectsList",
        components: {
            FormulaireAjout,
            VeroTable,
            Menu
        },

        data() {
            return {
                search1: '',
                search2: '',
                fields: [
                    'index',
                    {
                        key: 'name', // Clé correspondant à la colonne de notre tableau de données
                        label: 'Nom du projet', // Nom que l'on veut donner à l colonne
                        sortable: true // Intégration auto de la fonction de tri
                    },
                    {
                        key: 'creator.name',
                        label: 'Auteur',
                        sortable: true
                    },
                    {
                        key: 'createdAt',
                        label: 'Date de création',
                        sortable: true
                    },
                    'infos'],
                allProjects: [],
                interrupteur: true,
                filter: null,
                // allProjects: [
                //     {
                //         "_id": "5b3e3da861f2d927949fa8da",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "PUSHCART",
                //         "creation": "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da85d52b4482e60904a",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "POLARAX",
                //         "creation": "Mon Jun 27 1988 07:42:07 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da830d91c6264ec2371",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "BICOL",
                //         "creation": "Sat Feb 28 2009 15:57:42 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da84172d52b597c35ca",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "CYTREX",
                //         "creation": "Tue Oct 06 1970 07:07:42 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8bdabcef689e8f0d4",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "PLAYCE",
                //         "creation": "Sun Aug 29 2010 07:52:18 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8f5132e9b61630c5e",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "NETROPIC",
                //         "creation": "Fri Nov 17 1989 09:10:32 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da83cec1f4a3f959388",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "UNISURE",
                //         "creation": "Tue Aug 09 2005 02:26:51 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da83319a70043710f9f",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "CALCU",
                //         "creation": "Mon Jan 14 1980 12:08:39 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8dfc260a3993d2e64",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "QUADEEBO",
                //         "creation": "Thu Jan 08 2009 03:25:20 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8a8b5ffda3cf89cc0",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "PROXSOFT",
                //         "creation": "Sun Jan 04 1998 23:19:53 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da87d3d148f090316ca",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "VERBUS",
                //         "creation": "Mon Mar 12 1990 07:33:18 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8e734d6f18fd20d99",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "FURNITECH",
                //         "creation": "Fri Jan 15 1971 15:23:19 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da84769754f62adcd1e",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "ZENTHALL",
                //         "creation": "Mon Sep 26 1994 07:13:17 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8e0ca663902594537",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "BEADZZA",
                //         "creation": "Sun Dec 07 1975 14:46:01 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da88c8a4ff9e7a470af",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "ENERSOL",
                //         "creation": "Fri Oct 28 2016 03:41:22 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8971220d673089795",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "ORBIN",
                //         "creation": "Wed Mar 17 1999 20:59:11 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8b36fc54ea95f52fe",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "ANDRYX",
                //         "creation": "Sat Apr 20 2013 16:19:59 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8387a4b96cd64ac5c",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "MARKETOID",
                //         "creation": "Wed Apr 14 2004 19:06:20 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8524620a282935367",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "COMBOGENE",
                //         "creation": "Thu Apr 02 1998 14:13:33 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8bd1847d4bd46ceb3",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "PASTURIA",
                //         "creation": "Fri Jan 26 1979 22:25:57 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da83802b7161e97bcb5",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "ECRAZE",
                //         "creation": "Sun Jul 30 1989 18:07:17 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da81b7d9fdc1ac4a598",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "KEEG",
                //         "creation": "Tue Nov 23 1976 03:32:12 GMT+0100 (Central European Standard Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8408a1a197944bb07",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "SHOPABOUT",
                //         "creation": "Sun Jun 24 1990 03:34:24 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da855907b132f341230",
                //         "isActive": true,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "ZILLAR",
                //         "creation": "Mon Oct 10 2016 19:36:16 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da8a72b0faaac30690b",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "EQUITAX",
                //         "creation": "Fri Sep 11 1992 06:15:12 GMT+0200 (Central European Summer Time)"
                //     },
                //     {
                //         "_id": "5b3e3da85447219ab25178da",
                //         "isActive": false,
                //         "picture": "https://picsum.photos/600/300/?image=25",
                //         "name": "DIGIPRINT",
                //         "creation": "Thu Dec 10 1981 23:31:45 GMT+0100 (Central European Standard Time)"
                //     }]
            }
        },

        computed: {

            // Version avec props

                listFiltered: function () {
                    return researchProject(this.allProjects, this.search1.toUpperCase());
                }

            // Version en local

            // listFiltered: function () {
            //     if (this.search1.toUpperCase()) {
            //         return researchProject(this.allProjects, this.search1.toUpperCase());
            //     } else {
            //         return researchAuthor(this.allProjects, this.search2.toUpperCase());
            //     }
            // }
        },

        created() {

            // Appel AXIOS pour récupérer les données de l'API
            this.getData();
        },

        methods: {
            sortByName:function(){
                console.log(this.interrupteur);
                if (this.interrupteur) {
                    sortName(this.allProjects);
                } else {
                    sortName(this.allProjects).reverse();
                } this.interrupteur=!this.interrupteur;
            },
            sortByProjectName:function(){
                console.log(this.interrupteur);
                if (this.interrupteur) {
                    sortProjectName(this.allProjects);
                } else {
                    sortProjectName(this.allProjects).reverse();
                } this.interrupteur=!this.interrupteur;
            },
            sortByDate:function(){
                console.log(this.interrupteur);
                if (this.interrupteur) {
                    sortDate(this.allProjects);
                } else {
                    sortDate(this.allProjects).reverse();
                } this.interrupteur=!this.interrupteur;
            },

            getData:function() {
                axios.get(`https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg`)
                    .then(response => {
                        this.allProjects = response.data // data étant le nom de l'API
                    })
                    .catch(e => {
                        console.error(e);
                    })
            },

            deleteProject:function(id){
                axios.delete("https://daily-standup-campus.herokuapp.com/api/projects/"+id+"?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg")
                    .then(() => {
                        this.getData();
                    })
                    .catch(e => {
                        console.error(e);
                    })
            },
        }
    }

</script>

<style scoped>

    .table {
        background-color: white;
        margin-top: 2em;
    }

</style>