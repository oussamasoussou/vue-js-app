<template>
    <div class="navbarBody">
        <nav class="navbar">
        <div class="container">
            <ul class="nav-list">
                <li><router-link to="/first-component">Accueil</router-link></li>
                <li><router-link to="/event-button">À propos</router-link></li>
                <li><router-link to="/binding-form">Services</router-link></li>
                <li><router-link to="/v-for">Contact</router-link></li>
            </ul>
        </div>
    </nav>
    <router-view/>
    </div>
</template>

<script>
  
    export default{
        name : 'NavbarX',
    }
    
</script>

<style>
    .navbarBody {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    .navbar {
        background-color: #333;
        color: #fff;
        padding: 10px 0;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 1.5em;
    }

    .nav-list {
        list-style: none;
        padding: 0;
        display: flex;
        padding-left: 600px;
    }

    .nav-list li {
        margin: 0 20px;
    }

    .nav-list a {
        text-decoration: none;
        color: #fff;
    }
</style>