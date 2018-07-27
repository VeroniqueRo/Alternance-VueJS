<template>
    <table  class="table" v-bind:class="{ 'table-bordered': bordered === '', 'table-hover': hover==='' }" >
        <thead>
        <tr>
            <th v-for="column in columns" scope="col">{{ column }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items">
            <td v-for="column in columns">{{ item[column] }}</td>
        </tr>

        </tbody>
    </table>
    
</template>

<script>
    export default {
        name: "VeroTable",
        props: ["items", "columns", "bordered", "hover"],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>