const { Schema, model } = require('mongoose')

//Entrada	Data	Produto	H_disp	Q_CS	Ag_Tq_Fus	Bat_TQ_Fus	BB_Fus	Q_Sol	HH_Prog	Ag_Tq_Car	Bat_TQ_Mis	BB_Mis	Ag_Tq_Ali	BB_Ali	Acc_Maq_form	Acc_trans_Estoc	Q_MF_max	Q_MF_real	Aprov_qual	Disponibilidade	Performance	OEE

const Producao = model('Producao', new Schema({
    Entrada: { type: String },
    Data: { type: String },
    Produto: { type: String },
    H_disp: { type: String },
    Q_CS: { type: String },
    Ag_Tq_Fus: { type: String },
    Bat_TQ_Fus: { type: String },
    BB_Fus: { type: String },
    Q_Sol: { type: String },
    HH_Prog: { type: String },
    Ag_Tq_Car: { type: String },
    Bat_TQ_Mis: { type: String },
    BB_Mis: { type: String },
    Ag_Tq_Ali: { type: String },
    BB_Ali: { type: String },
    Acc_Maq_form: { type: String },
    Acc_trans_Estoc: { type: String },
    Q_MF_max: { type: String },
    Q_MF_real: { type: String },
    Aprov_qual: { type: String },
    Disponibilidade: { type: String },
    Performance: { type: String },
    OEE: { type: String },
    Semana: { type: String },
    Mes: { type: String }
}))

module.exports = Producao