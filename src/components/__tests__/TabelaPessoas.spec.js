import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TabelaPessoas from '@/components/TabelaPessoas.vue'
import { createStore } from 'vuex'

// Mock do Vuex
const criarStoreComPessoas = (pessoas = []) => {
  return createStore({
    state() {
      return {
        listaPessoas: pessoas
      }
    },
    mutations: {
      limparListaPessoas(state) {
        state.listaPessoas = []
      }
    }
  })
}

describe('TabelaPessoas.vue', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = criarStoreComPessoas([
      {
        nome: 'Caua Tolentino',
        email: 'cauatolentino@hotmail.com',
        cep: '20240-051',
        rua: 'Avenida Nossa Senhora de Fátima',
        bairro: 'Centro',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        origem: 'Web'
      }
    ])

    wrapper = mount(TabelaPessoas, {
      global: {
        plugins: [store]
      }
    })
  })

  it('Deve exibir a tabela com dados da pessoa', () => {
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBe(1)
    expect(wrapper.text()).toContain('Caua')
    expect(wrapper.text()).toContain('cauatolentino@hotmail.com')
    expect(wrapper.text()).toContain('20240-051')
  })

  it('Deve limpar a tabela ao clicar no botão', async () => {
    const botao = wrapper.find('button')
    await botao.trigger('click')

    // Após limpar, a lista no store fica vazia
    expect(store.state.listaPessoas.length).toBe(0)
  })

  it('Deve mostrar mensagem alternativa se não houver pessoas', () => {
    const storeVazio = criarStoreComPessoas([])

    const wrapperVazio = mount(TabelaPessoas, {
      global: {
        plugins: [storeVazio]
      }
    })

    expect(wrapperVazio.text()).toContain('Cadastre pessoas para ver a Tabela')
  })
})
