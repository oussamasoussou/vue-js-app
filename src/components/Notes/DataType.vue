<template>
    <div>
        <h1 class="titleDataType">Data Type</h1>
        <p>Integer :{{ integer }}</p>
        <p>Chaine :{{ chaine }}</p>
        <p>Tableau :{{ tableau[0] }}</p>
        <p>Boolean :{{ boolean }}</p>
        <p>{{ getChaine() }}</p>
    </div>
</template>

<script>

    export default{
        name : 'DataType',
        data(){
            return{
                integer: 100,
                chaine: 'Chaine',
                tableau: ['A','B','C'],
                boolean: true
            }
        },

        methods:{
            getChaine(){
                return 'Chaine Fonction'
            },
            getNum(){
                return 'Num fonction'
            }
        }
    }
</script>

<style>
    .titleDataType{
        font-size: 36px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(9, 95, 106);
    }
</style>