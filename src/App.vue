<template>
  <CabecarioPrincipal/>
  <router-view/>
</template>

<script>
import CabecarioPrincipal from './components/CabecarioPrincipal.vue';

  
  export default {
    name: 'App',
    components: {
      CabecarioPrincipal
    },
}

</script>

<style>

</style>
