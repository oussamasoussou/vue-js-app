<template>
    <div>
        <h1 class="titleBinding">Binding form</h1>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <input type="text" checked="message" v-model="message">
        <br>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
        <br>
        <div>Checked names: {{ checkedNames }}</div>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>

        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
    </div>
</template>

<script>
    export default{
        name : 'BindingForm',
        data(){
            return{
                message : '',
                checked: false,
                checkedNames : []
            }
        },
        methods:{
          
        }

    }
</script>

<style>
    .titleBinding{
        font-size: 36px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(101, 5, 69);
    }
</style>