<template>
    <div>
        <fieldset>
            <legend>Formulário de Cadastro</legend>
            <form @submit.prevent="enviarCadastro">
                <label>Nome: </label>
                <input type="text" v-model="pessoa.nome" placeholder="Digite seu nome" required><br>

                <label>Email: </label>
                <input type="email" v-model="pessoa.email" placeholder="Digite seu email" required><br>

                <label>CEP: </label>
                <input type="text" v-model="pessoa.cep" placeholder="00000-000" maxlength="9" minlength="9" @input="formatarCep" required><br>

                <label>Rua: </label>
                <input type="text" v-model="pessoa.rua" placeholder="Preencha o CEP"><br>

                <label>Bairro: </label>
                <input type="text" v-model="pessoa.bairro" placeholder="Preencha o CEP"><br>

                <label>Cidade: </label>
                <input type="text" v-model="pessoa.cidade" placeholder="Preencha o CEP"><br>

                <label>Estado: </label>
                <input type="text" v-model="pessoa.estado" placeholder="Preencha o CEP"><br>

                <label>Origem: </label>
                <select id="origem" v-model="pessoa.origem" required>
                    <option value="Digital">Digital</option>
                    <option value="Fisico">Físico</option>
                </select><br>
                <button type="submit">Enviar Cadastro</button>
            </form>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: 'FormularioPessoas',
    data(){
        return{
            pessoa: {
            nome: '',
            email: '',
            cep: '',
            rua: '',
            bairro: '',
            cidade: '',
            estado: '',
            origem: ''
            }
        };
    },
    watch:{
        'pessoa.cep'(){
            if(this.pessoa.cep.length === 9){
                this.preencherEndereco(this.pessoa.cep);
            }
        }
    },
    methods: {
        enviarCadastro(){
            this.$store.commit('adicionarPessoa', this.pessoa)
            this.limparFormulario()
            alert("Usuário Cadastrado")
        },
        formatarCep(){
            let cep = this.pessoa.cep.replace(/\D/g, '');
            if(cep.length > 5){
                cep = cep.replace(/^(\d{5})(\d)/, '$1-$2')
            }
            this.pessoa.cep = cep
        },
        preencherEndereco(cep) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(res => res.json())
                .then(data => {
                    if (!data.erro) {
                        this.pessoa.rua = data.logradouro;
                        this.pessoa.bairro = data.bairro;
                        this.pessoa.cidade = data.localidade;
                        this.pessoa.estado = data.uf;
                    } else {
                        alert("CEP não encontrado.");
                    }
                })
                .catch(() => {
                    alert("Erro ao buscar CEP.");
                });
        },
        limparFormulario(){
            this.pessoa = {
                nome: '',
                email: '',
                cep: '',
                rua: '',
                bairro: '',
                cidade: '',
                estado: '',
                origem: ''
            };
        }
    }
}
</script>

<style scoped>
div{
    padding: 1rem;
    font-size: 20px;
}

fieldset{
    border: 2px solid #CCD595;
    border-radius: 10px;
    padding: 0.8rem;
}

legend{
    font-size: 25px;
    font-weight: bold;
    color: #392620;
}

label{
    padding: 0.2rem;
}

input{
    width: 40%;
    padding: 0.6rem;
    border: 2px solid #CCD595;
    outline: none;
    border-radius: 10px;
    font-size: 20px;
    margin-bottom: 20px;
}

select{
    width: 40%;
    padding: 0.6rem;
    border: 2px solid #CCD595;
    outline: none;
    border-radius: 10px;
    font-size: 15px;
    margin-bottom: 20px;
    cursor: pointer;
}

button{
    background-color: #90EE90;
    cursor: pointer;
    border-radius: 10px;
    width: 15%;
    padding: 0.5rem;
    color: #392620;
    font-weight: bold;
}

button:hover{
    background-color: #32CD32;
}
</style>