<template>
    <div class="resumos">
        <section v-if="$store.state.listaPessoas.length >= 1">
            <section class="distribuicaoEstado">
                <h2>Distribuição por Estado</h2>
                <details>
                    <summary>Clique aqui para ver o resumo por estado</summary>
                    <ul id="resumoEstado">
                        <li v-for="(quantidade, estado, i) in resumoPessoa('estado')" :key="i">
                            {{ estado }}: {{ quantidade }} usuário(s)
                        </li>
                    </ul>    
                </details>
            </section>
            <section class="distribuicaoOrigem">
                <h2>Distribuição por Origem</h2>
                <details>
                    <summary>Clique aqui para ver o resumo por origem</summary>
                    <ul id="resumoOrigem">
                        <li v-for="(quantidade, origem, i) in resumoPessoa('origem')" :key="i">
                            {{ origem }}: {{ quantidade }} usuário(s)
                        </li>
                    </ul>
                </details>
            </section>
        </section>
        <h2 v-else>Cadastre pessoas para ver os Resumos</h2>
    </div>
</template>


<script>
    export default{
        name: 'ResumosPessoas',
        methods:{
            resumoPessoa(campo){
                const resultado = {};
                const pessoas = this.$store.state.listaPessoas;

                pessoas.forEach(pessoa => {
                    const valor = pessoa[campo]
                    if(resultado[valor] === undefined){
                        resultado[valor] = 1
                    } else {
                        resultado[valor]++
                    }
                });
                return resultado
            }
        }
    }
</script>

<style scoped>
    .resumos{
        padding: 0.8rem;
    }

    details{
        background-color: #CCD595;
        border-radius: 10px;
        padding: 1.2rem;
    }

    summary{
        color: #392620;
        cursor: pointer;
    }

    h2{
        color: #392620;
        font-weight: bold;
    }

    ul{
        margin-left: 1.7rem;
    }

    ul li{
        padding: 0.2rem;
        color: white;
    }
</style>