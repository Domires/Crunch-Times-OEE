const Producao = require('./../models/Producao')

//Entrada	Data	Produto	H_disp	Q_CS	Ag_Tq_Fus	Bat_TQ_Fus	BB_Fus	Q_Sol	HH_Prog	Ag_Tq_Car	Bat_TQ_Mis	BB_Mis	Ag_Tq_Ali	BB_Ali	Acc_Maq_form Acc_trans_Estoc	Q_MF_max	Q_MF_real	Aprov_qual	Disponibilidade	Performance	OEE

function newProducao(req, res) {
    Producao.create({
        Entrada: req.body.Entrada,
        Data: req.body.Data,
        Produto: req.body.Produto,
        H_disp: req.body.H_disp,
        Q_CS: req.body.Q_CS,
        Ag_Tq_Fus: req.body.Ag_Tq_Fus,
        Bat_TQ_Fus: req.body.Bat_TQ_Fus,
        BB_Fus: req.body.BB_Fus,
        Q_Sol: req.body.Q_Sol,
        HH_Prog: req.body.HH_Prog,
        Ag_Tq_Car: req.body.Ag_Tq_Car,
        Bat_TQ_Mis: req.body.Bat_TQ_Mis,
        BB_Mis: req.body.BB_Mis,
        Ag_Tq_Ali: req.body.Ag_Tq_Ali,
        BB_Ali: req.body.BB_Ali,
        Acc_Maq_form: req.body.Acc_Maq_form,
        Acc_trans_Estoc: req.Acc_trans_Estoc,
        Q_MF_max: req.body.Q_MF_max,
        Q_MF_real: req.body.Q_MF_real,
        Aprov_qual: req.body.Aprov_qual,
        Disponibilidade: req.body.Disponibilidade,
        Performance: req.body.Performance,
        OEE: req.body.OEE,
        // +
        Semana: req.body.Semana,
        Mes: req.body.Mes
    })
    .then(doc => res.status(200).json({ created: doc }))
    .catch(err => console.error('error', err))
    // Producao.create({ ...req.body })
    //     .then(doc => res.status(200).json({ created: doc }))
    //     .catch(err => console.error('error', err))
}
// read
function readProducao(req, res) {
    // read all
    console.log('readProducao')
    Producao.find({})
        .then(docs => res.json({ producao: docs }))
        .catch(err => console.error('error', err))
}

module.exports = {
    newProducao,
    readProducao
}
