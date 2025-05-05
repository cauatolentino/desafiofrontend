<template>
    <div class="formulario">
      <FormularioPessoas/>
    </div>
  </template>
  
  <script>
  import FormularioPessoas from '@/components/FormularioPessoas.vue'

  export default {
    name: 'FormularioView',
    components: {
      FormularioPessoas
    }
  }
  </script>
  