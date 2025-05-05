<template>
    <header>
        <h1>Desáfio Tecnico Front-End</h1>
        <nav class="navegacao">
            <router-link to="/">Formulario</router-link> 
            <router-link to="/tabela">Tabela</router-link> 
            <router-link to="/resumos">Resumos</router-link>
        </nav>
    </header>
</template>

<script>


    export default {
        name: 'CabecarioPrincipal',
        components: {
        }
}
</script>

<style scoped>
    header{
        background-color: #392620;
        padding: 2rem;
        text-align: center;
        color: #32a153;
    }
    h1{
        font-weight: bold;
    }
    a{
        margin: 0px 20px;
        color: white;
        text-decoration: none;
        font-size: 20px;
        display: inline-block;
        transition: transform 0.2s ease, color 0.2s ease;
    }

    nav a:hover{
        color: #32a153;
        transform: scale(1.2);
    }
</style>