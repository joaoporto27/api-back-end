const Filme = require("../models/Filme");
const FilmeList = require("../models/FilmeLista");

const lista = new FilmeList();

const filme1 = new Filme('Anjos da Lei', 2012, '1h49m', 100012);
lista.addFilme(filme1); 

lista.addFilme(new Filme('Anjos da Lei 2', 2014, '1h52m', 10203));

const router = {
    addFilme: (req, res) => {
        try {
            const { title, year, duration, likes } = req.body;
            if(!title || !year || !duration || !likes) {
                throw new Error('Preencha todos os campos!');             }
            const film = new Filme (title, year, duration,likes);
            lista.addFilme(film);
            res.status(200).json({message: 'Filme criado com sucesso'});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar filme", error});
        }
    },

    getAllFilmes:(req,res) => {
        try {
            const filmes = lista.getAllFilmes();
            res.status(200).json(filmes);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar filmes', error});
        }
    },

    getFilmeById: (req,res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getFilmeById(id));
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar filme por id', error});
        }
    },

    updateFilme: (req, res) => {
        try {
            res.status(200).json(lista.updateFilme(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({message: 'Erro ao atualizar filme', error});
        }
    },

    deleteFilme: (req, res) => {
        try {
            lista.deleteFilme(req.params.id);
            res.status(200).json({message: 'Musica deletada com sucesso'})
        } catch (error) {
            res.status(404).json('Erro ao deletar filme', error);
        }
    },

    getTop10FilmesCurtidos: (req, res) => {
        try {
            const filmes = lista.getTop10FilmesCurtidos();
            res.status(200).json(filmes);
        } catch (error) {
            res.status(404).json('Erro ao buscar o Top10 filmes mais curtidos', error);
        }
    }
}

module.exports = router;
