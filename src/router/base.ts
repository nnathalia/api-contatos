import { Router } from "express";

const router = Router();

router.get('/contato', function (req, res) {
    res.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
    });
});

router.get('/sobre', function (req, res) {
    res.send({
        name: 'Nathalia Mariano',
        email: 'nath.teixeira@ifro.edu.br',
        github: 'github.com/nnathalia'
    });
});

export default router;