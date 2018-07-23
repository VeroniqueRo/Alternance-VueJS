<template>
        <tr>
            <th>{{nom}}</th>
            <td><b-button>Voir détail</b-button></td>
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