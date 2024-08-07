// import db from '../db/dbconfig.js';

class Evento {
    constructor({
        id,
        nome,
        descricao,
        data,
        autorId,
        createdAt,
        updatedAt,
    }) {
        this.id = null || id;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.autorId = autorId;
        this.createdAt = createdAt || new Date().toISOString();
        this.updatedAt = updatedAt || new Date().toISOString();
    }

    static async pegarEventos() {
        return [{
        id: 1,
        nome:'lançamento',
        descricao:'descrição',
        data:'2023-01-01',
        autorId: 1,
        createdAt:'2023-01-01 07:00:00',
        updatedAt:'2023-01-01 07:00:00'
        }]
    }
}

export default Evento;
