<template>
    <div>
        <h1 class="titleEvent">Event button</h1>
        <button v-on:click="salary++">Increment</button>
        <button v-on:click="salary--">Decrement</button>
        <button v-on:click="plusdeux()">Plus deux</button>
        <button v-on:click="moindeux()">Moin deux</button>
        {{ salary }}
</div>
</template>

<script>
    export default{
        name : 'EventButton',
        data(){
            return{
                salary : 100
            }
        },
        methods:{
            plusdeux(){
                this.salary = this.salary + 2
            },
            moindeux(){
                this.salary = this.salary - 2
            }
        }

    }
</script>

<style>
    .titleEvent{
        font-size: 36px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(49, 30, 30);
    }
</style>