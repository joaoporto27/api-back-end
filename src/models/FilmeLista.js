const { error } = require("console");

class FilmeList {
    constructor() {
        this.filmes = [];
    }

    addFilme(filme) {
        this.filmes.push(filme);
    }

    getAllFilmes (){
        return this.filmes;
    } 

    getFilmeById(id) {
        const filme = this.filmes.find(filme => filme.id == id);
        if (!filme){
            throw new Error("Filme não encontrado");
        }
        return filme;
    }

    updateFilme(id, updateData){
        const filme = this.getFilmeById(id);
        Object.assign(filme, updateData);
        return filme;
    }

    deleteFilme(id) {
        this.filmes = this.filmes.filter(filme => filme.id != id);
    }

    getTop10FilmesCurtidos() {
        return this.filmes.sort((a,b) => b.likes - a.likes).slice(0,10);
    }

}

module.exports = FilmeList;