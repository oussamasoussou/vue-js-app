<template>
    <div>
        <h1 class="title">First Component</h1>
        <SecondComponent msg="--------- Props ---------"/>
    </div>
</template>

<script>
    import SecondComponent from './SecondComponent.vue'

    export default{
        name : 'FirstComponent',
        components: {
            SecondComponent,
        }
    }
</script>

<style>
    .title{
        font-size: 36px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: brown;
    }
</style>