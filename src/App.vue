<template>
  <div id="app">  <!-- C'est la racine de l'application. C'est là où toute l'interface utilisateur sera rendue. -->
    <NavbarX /><!--  Cela semble être un composant appelé Component  -->
 </div>
</template>

<script>
import NavbarX from './components/Navbar/Navbar.vue' //  Cela importe le composant Component  depuis le fichier Component .vue. Ce composant sera utilisé dans le template. 
// export default { ... }: C'est l'exportation du composant principal. Il a un nom (App) et il utilise le composant HelloWorld que nous avons importé.
export default {
 name: 'App',
 components: {
   NavbarX,
 }
}
</script>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-top: 60px;
}
</style>
