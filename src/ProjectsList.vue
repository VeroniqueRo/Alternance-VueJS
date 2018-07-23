<template>
        <tr>
            <th>{{nom}}</th>
            <td><router-link to="/project"  class="btn btn-ms btn-info">Voir détail</router-link></td>
        </tr>
</template>
<script>
    // Chargement du component
    import Project from './Project'

    export default {
        name: "ProjectsList",
        components: {
            'project': Project
        },
        props: ['nom', 'date', 'image'],
    }
</script>

<style scoped>

    tbody {
        background-color: lightgray;
    }

</style>