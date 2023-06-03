const assinantesModel = require('../models/assinantesModel');

class assinantesController {
    async salvar(req, res) {
        let assinante = req.body;
        if (assinante.nome == "" || assinante.sobrenome == ""
         || assinante.nascimento == ""
         || assinante.telefone == ""
         || assinante.endereco == ""
            || assinante.cidade == "" || assinante.estado == "") {
            res.status(400).json("Formatacao Invalida");
        }
        else {
            const max = await assinantesModel.findOne({}).sort({ id: -1 });

            assinante.id = max == null ? 1 : max.id + 1;

            const resultado = await assinantesModel.create(assinante);

            res.status(201).json(resultado);
        }
    }

    async listar(req, res) {
        const resultado = await assinantesModel.find({});

        if (!(resultado && resultado.length > 0)) {
            res.status(404).json("Nao foi encontrado usuarios!");

        } else {
            res.status(200).json(resultado);
        }
    }

    async buscarPorNome(req, res) {
        const nome = req.params.nome;

        const resultado = await assinantesModel.find({ 'nome': nome });

        if (!(resultado && resultado.length > 0)) {
            res.status(404).json("Nao foi encontrado usuarios!");
        }
        else {
            res.status(200).json(resultado);
        }
    }

    async buscarPorSobreNome(req, res) {
        const sobreNome = req.params.sobrenome;

        const resultado = await assinantesModel.find({ 'sobrenome': sobreNome });

        if (!(resultado && resultado.length > 0)) {

            res.status(404).json("Nao foi encontrado usuarios!");
        }
        else {
            res.status(200).json(resultado);
        }
    }

    async buscarPorCidade(req, res) {
        const Cidade = req.params.cidade;

        const resultado = await assinantesModel.find({ 'cidade': Cidade });

        if (!(resultado && resultado.length > 0)) {
            res.status(404).json("Nao foi encontrado usuarios!");

        }
        else {
            res.status(200).json(resultado);
        }
    }

    async buscarPorEstado(req, res) {
        const Estado = req.params.estado;

        const resultado = await assinantesModel.find({ 'estado': Estado });

        if (!(resultado && resultado.length > 0)) {
            res.status(404).json("Nao foi encontrado usuarios!");

        }
        else {
            res.status(200).json(resultado);
        }
    }

    async buscarPorId(req, res) {
        const id = req.params.id;

        const resultado = await assinantesModel.findOne({ 'id': id });

        if (!resultado) {
            res.status(404).json("Nao foi encontrado usuarios!");
        }
        res.status(200).json(resultado);
    }

    async buscarPorStatus(req, res) {
        const Status = req.params.status;
        try {
            const resultado = await assinantesModel.find({ 'status': Status });

            if (!(resultado && resultado.length > 0)) {

                res.status(404).json("Nao foram encontrados nenhum usuario");
            } else {
                res.status(200).json(resultado);
            }
        }
        catch (err) {
            return res.status(400).json("Requisicao Invalida");
        }
    }

    async atualizar(req, res) {
        const id = req.params.id;
        try{
        const _id = String((await assinantesModel.findOne({ 'id': id }))._id);

        await assinantesModel.findByIdAndUpdate(String(_id), req.body);

        res.status(200).send();
        }catch(err){
            res.status(404).json('Nao foi encontrado nenhum usuario');
        }
       
    }

    async excluir(req, res) {
        const id = req.params.id;
        try {
            const _id = String((await assinantesModel.findOne({ 'id': id }))._id);

            await assinantesModel.findByIdAndRemove(String(_id));

            res.status(200).send();
        } catch (err) {
            res.status(404).json('Nao foi encontrado nenhum usuario');
        }
    }
}

module.exports = new assinantesController();