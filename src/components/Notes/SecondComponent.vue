<template>
    <div>
        <h1 class="titleSecond">Second Component {{ msg }}</h1>
        <DataType/>

    </div>
</template>

<script>
    import DataType from "./DataType";

    export default{
        name : 'SecondComponent',
        components:{
            DataType,
        },
        props : {
            msg: String
        }
    }
</script>

<style>
    .titleSecond{
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(3, 65, 24);
    }
</style>