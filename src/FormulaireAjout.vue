<template>
    <b-container center md="8">.
        <b-form @onSubmit="onSubmit" @onReset="onReset" v-if="show">
            <b-form-group id="InputGroup1"
                          label="Nom du nouveau projet* :"
                          label-for="Input1"
                          description="*Le nom du projet est obligatoire.">
                <b-form-input id="Input1"
                              type="text"
                              v-model="form.name"
                              required
                              placeholder="Nom du nouveau projet">
                </b-form-input>
            </b-form-group>
            <b-form-group id="InputGroup2"
                          label="Description du nouveau projet :"
                          label-for="Input2">
                <b-form-input id="Input2"
                              type="text"
                              v-model="form.description"
                              placeholder="Description du nouveau projet">
                </b-form-input>
            </b-form-group>
            <b-button @click="addProject" type="submit" variant="info">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            <router-link :to="{name:'liste'}"><b-button variant="warning">Annuler</b-button></router-link>
        </b-form>
    </b-container>
</template>

<script>

    import axios from 'axios'

    export default {

        data () {
            return {
                form: {
                    name: '',
                    description: '',
                    collaborators: []
                },
                show: true
            }
        },
        methods: {

            addProject:function(){
                console.log(this.form);
                axios.post("https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg",this.form)
            .then(response => {
                    console.log(response.data);
                    this.$emit('ajout');
                    this.$router.push({name:'liste'});
                })
                    .catch(e => {
                        console.error(e);
                    })
            },

            onSubmit (evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },

            onReset (evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.name = '';
                this.form.description = '';
                this.form.collaborators = [];
                /* Trick to reset/clear native browser form validation state */
                this.show = false;
                this.$nextTick(() => { this.show = true });
            }
        }
    }
</script>

<style scoped>

</style>