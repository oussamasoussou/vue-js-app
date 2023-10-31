<template>
    <div>
        <h1 class="titleVfor">********************** V FOR ********************** </h1>
        <ul>
            <p v-for="item in country" :key="item.id">{{ item.name }}</p>
        </ul>
    </div>
</template>

<script>
    export default{
        name : 'CountryList',
        data(){
            return{
                country :[
                    {id:1, name:'A'},
                    {id:2, name:'B'},
                    {id:3, name:'C'},
                    {id:4, name:'D'},
                ]
            }
        }
    }
</script>

<style>
    .titleVfor{
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(19, 32, 23);
        text-align: center;
    }

    li{
        text-align: center;
    }
</style>
