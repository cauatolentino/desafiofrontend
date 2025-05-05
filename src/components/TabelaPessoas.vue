<template>
    <div class="cadastros">
        <section v-if="$store.state.listaPessoas.length >= 1">
            <h2>Tabela de Usuários Cadastrados</h2>
            <table id="tabelaPessoas">
                <thead id="headPessoas">
                    <th>Nome</th>
                    <th>Email</th>
                    <th>CEP</th>
                    <th>Rua</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>Origem</th>
                </thead>
                <tbody id="bodyPessoas">
                    <tr v-for="(pessoa, i) in $store.state.listaPessoas" :key="i">
                        <td>{{ pessoa.nome }}</td>
                        <td>{{ pessoa.email }}</td>
                        <td>{{ pessoa.cep }}</td>
                        <td>{{ pessoa.rua }}</td>
                        <td>{{ pessoa.bairro }}</td>
                        <td>{{ pessoa.cidade }}</td>
                        <td>{{ pessoa.estado }}</td>
                        <td>{{ pessoa.origem }}</td>
                    </tr>
                </tbody>
            </table>
            <button @click="limparTabela">Limpar Tabela</button>
        </section>
        <h2 v-else>Cadastre pessoas para ver a Tabela</h2>
    </div>
</template>


<script>
export default{
    name: 'TabelaPessoas',
    methods:{
        limparTabela(){
            this.$store.commit('limparListaPessoas');
        }
    }
}
</script>


<style scoped>
div{
    padding: 0.8rem;
}
h2{
    color: #392620;
    font-weight: bold;
}
table{
    width: 100%;
    border-collapse: collapse;
}

th{
    background-color: #CCD595;
    color: #2b1c18;
    padding: 0.4rem;
    border: 1px solid #392620;
}

td{
    color: #2b1c18;
    padding: 0.4rem;
    text-align: center;
    border: 1px solid #392620;
}

button{
    margin-top: 0.5rem;
    background-color: #CD5C5C;
    cursor: pointer;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    width: 10%;
    padding: 0.5rem;
    color: #392620;
}

button:hover{
    background-color: #DC143C;
}

</style>