const GerenciadorDeTarefas = require("../src/Trabalho01Turma01.js");

describe('Testes da classe GerenciadorDeTarefas', () => {
    let gerenciadorDeTarefas;

    beforeEach(() => {
        gerenciadorDeTarefas = new GerenciadorDeTarefas();
    });

    test('Esse teste vai validar a criação de novas tarefas', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'}
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        expect(gerenciadorDeTarefas.buscarTarefaPorDescricao('Novo teste')).toContain(tarefa);
    });

    test('Nesse teste deve validar a remoção de tarefas corretamente', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'}
        const tarefa2 = {id: 2, descricao : 'Novo teste2'}
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.adicionarTarefa(tarefa2)
        gerenciadorDeTarefas.removerTarefa(1)
        expect(gerenciadorDeTarefas.listarTarefas()).not.toContain(tarefa);
    }); 

    test('Será validada a busca de tarefas por ID', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'}
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        expect(gerenciadorDeTarefas.buscarTarefaPorId(1)).toEqual(tarefa);
    }); 

    test('Nesse teste deve atualizar os dados de uma tarefa com prioridade e detalhe', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'}
        const dadosTarefa = {prioridade: 5, detalhe : 'importante'}
        const todosDados = {id: 1, descricao : 'Novo teste', prioridade: 5, detalhe : 'importante'}
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.atualizarTarefa(1, dadosTarefa)
        expect(gerenciadorDeTarefas.buscarTarefaPorId(1)).toEqual(todosDados);
    }); 

    test('Será validada a listagem de tarefas e verificar se a tarefa criada existe na listagem', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'}
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        expect(gerenciadorDeTarefas.listarTarefas()).toContain(tarefa);
    }); 

    test('Vai validar o número de tarefas criadas', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'}
        const tarefa2 = {id: 2, descricao : 'Novo teste2'}
        const tarefa3 = {id: 3, descricao : 'Novo teste3'}
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.adicionarTarefa(tarefa2)
        gerenciadorDeTarefas.adicionarTarefa(tarefa3)
        expect(gerenciadorDeTarefas.contarTarefas()).toBe(3);
    }); 

    test('Deve testar se uma tarefa foi marcada como concluida corretamente', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.marcarTarefaComoConcluida(1)
        const tarefaConcluida = gerenciadorDeTarefas.buscarTarefaPorId(1)
        expect(tarefaConcluida.concluida).toBe(true);
    }); 

    test('Vai testar a listagem de tarefas concluidas', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.marcarTarefaComoConcluida(1)
        const tarefaConcluida = gerenciadorDeTarefas.buscarTarefaPorId(1)
        expect(gerenciadorDeTarefas.listarTarefasConcluidas()).toContain(tarefaConcluida); 
    }); 

    test('Deve listar as tarefas pendentes e verificar se a buscada existe', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'}
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        expect(gerenciadorDeTarefas.listarTarefasPendentes()).toContain(tarefa);
    });
    
    test('Deve testar removendo uma tarefa como concluida e colocar como pendente', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.marcarTarefaComoConcluida(1)
        gerenciadorDeTarefas.removerTarefasConcluidas()
        expect(gerenciadorDeTarefas.listarTarefas()).not.toContain(tarefa);
    }); 

    test('Deve adicionar tag nova na tarefa criada', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        const tagTarefa = {tag: 'TAG nova'}
        const TarefaComTag = [{"descricao": "Novo teste", "id": 1, "tags": [{"tag": "TAG nova"}]}]
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.adicionarTagATarefa(1, tagTarefa)
        expect(gerenciadorDeTarefas.listarTarefasPorTag(tagTarefa)).toEqual(TarefaComTag);
    }); 

    test('Deve remover tag inserida na tarefa criada', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        const tagTarefa = {tag: 'TAG nova'}
        const TarefaComTag = [{"descricao": "Novo teste", "id": 1, "tags": [{"tag": "TAG nova"}]}]
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.removerTagDaTarefa(1, tagTarefa)
        expect(gerenciadorDeTarefas.listarTarefasPorTag(tagTarefa)).not.toEqual(TarefaComTag);
    });

    test('Deve buscar uma tarefa por data', () => {
        const tarefa = {id: 1, descricao : 'Novo teste', data : '2024/09/04'} 
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        expect(gerenciadorDeTarefas.buscarTarefasPorData('2024/09/04')).toContain(tarefa);
    });

    test('Deve atualizar a prioridade de uma tarefa', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.atualizarPrioridade(1, 'Maxima')
        const Validar = gerenciadorDeTarefas.buscarTarefaPorId(1).prioridade
        expect(Validar).toBe('Maxima');
    });
    
    test('Deve listar as tarefas por prioridade', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.atualizarPrioridade(1, 'Maxima')
        const Validar = gerenciadorDeTarefas.buscarTarefaPorId(1)
        expect(gerenciadorDeTarefas.listarTarefasPorPrioridade('Maxima')).toContain(Validar);
    });

    test('Deve contar as tarefas por prioridade', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        const tarefa2 = {id: 2, descricao : 'Novo teste2'} 
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.adicionarTarefa(tarefa2)
        gerenciadorDeTarefas.atualizarPrioridade(1, 'Maxima')
        gerenciadorDeTarefas.atualizarPrioridade(2, 'Baixa')
        expect(gerenciadorDeTarefas.contarTarefasPorPrioridade('Maxima')).toBe(1);
    });

    test('Marcar todas as tarefas como concluidas', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        const tarefa2 = {id: 2, descricao : 'Novo teste2'} 
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.adicionarTarefa(tarefa2)
        gerenciadorDeTarefas.marcarTodasComoConcluidas()
        const listaTarefas = gerenciadorDeTarefas.listarTarefasConcluidas()
        expect(listaTarefas[0].concluida).toBe(true);
        expect(listaTarefas[1].concluida).toBe(true);
    });

    test('Deve reabrir uma tarefa', () => {
        const tarefa = {id: 1, descricao : 'Novo teste'} 
        gerenciadorDeTarefas.adicionarTarefa(tarefa)
        gerenciadorDeTarefas.marcarTodasComoConcluidas()
        gerenciadorDeTarefas.reabrirTarefa(1)
        expect(gerenciadorDeTarefas.buscarTarefaPorId(1).concluida).toBe(false);
    });
    


});