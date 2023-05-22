const passport = require('passport')
const Producao = require('./../models/Producao')

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/dashboard',
    failureFlash: true
})

exports.addProducao = async (req, res) => {
    try {
        const H_disp = req.body.H_disp
        const Q_CS = req.body.Q_CS
        const Ag_Tq_Fus = req.body.Ag_Tq_Fus
        const Bat_TQ_Fus = req.body.Bat_TQ_Fus
        const BB_Fus = req.body.BB_Fus
        const Q_Sol = req.body.Q_Sol
        const HH_Prog = req.body.HH_Prog
        const Ag_Tq_Car = req.body.Ag_Tq_Car
        const Bat_TQ_Mis = req.body.Bat_TQ_Mis
        const BB_Mis = req.body.BB_Mis
        const Ag_Tq_Ali = req.body.Ag_Tq_Ali
        const BB_Ali = req.body.BB_Ali
        const Acc_Maq_form = req.body.Acc_Maq_form
        const Acc_trans_Estoc = req.body.Acc_trans_Estoc
        const Q_MF_real = req.body.Q_MF_real
        const Aprov_qual = req.body.Aprov_qual

//{"_id":{"$oid":"6469d8620fd5791437b1fad4"},"Entrada":"Sem_17_1","Data":"24/04/2023","Produto":"Caramelo Crocante","Semana":"17","Mes":"ABRIL"}

// {"_id":{"$oid":"6469d86d0fd5791437b1fad5"},"Entrada":"Sem_17_2","Data":"25/04/2023","Produto":"Caramelo Crocante","Semana":"17","Mes":"ABRIL"}

// {"_id":{"$oid":"6469d8760fd5791437b1fad6"},"Entrada":"Sem_17_3","Data":"26/04/2023","Produto":"Floco de Arroz","Semana":"17","Mes":"ABRIL"}

// {"_id":{"$oid":"6469d8900fd5791437b1fad7"},"Entrada":"Sem_17_4","Data":"27/04/2023","Produto":"Floco de Arroz","Semana":"17","Mes":"ABRIL"}

// {"_id":{"$oid":"6469d89e0fd5791437b1fad8"},"Entrada":"Sem_17_5","Data":"28/04/2023","Produto":"Floco de Arroz","Semana":"17","Mes":"ABRIL"}

// {"_id":{"$oid":"6469d8a70fd5791437b1fad9"},"Entrada":"Sem_17_6","Data":"29/04/2023","Produto":"Amendoim","Semana":"17","Mes":"ABRIL"}

// {"_id":{"$oid":"6469d8b10fd5791437b1fada"},"Entrada":"Sem_17_7","Data":"30/04/2023","Produto":"Amendoim","Semana":"17","Mes":"ABRIL"}

        let Q_MF_max = Acc_Maq_form[0] * 4
        let Disponibilidade = (Acc_trans_Estoc[0] / HH_Prog[0]) * 100
        let Performance = (Q_MF_real[0] / Q_MF_max) * 100
        let OEE = ((Aprov_qual[0]/100) * (Disponibilidade/100) * (Performance/100)) * 100
        await Producao.findByIdAndUpdate(
            "6469d8620fd5791437b1fad4",
            { H_disp: H_disp[0], Q_CS: Q_CS[0], Ag_Tq_Fus: Ag_Tq_Fus[0], Bat_TQ_Fus: Bat_TQ_Fus[0], BB_Fus: BB_Fus[0], Q_Sol: Q_Sol[0], HH_Prog: HH_Prog[0], Ag_Tq_Car: Ag_Tq_Car[0], Bat_TQ_Mis: Bat_TQ_Mis[0], BB_Mis: BB_Mis[0], Ag_Tq_Ali: Ag_Tq_Ali[0], BB_Ali: BB_Ali[0], Acc_Maq_form: Acc_Maq_form[0], Acc_trans_Estoc: Acc_trans_Estoc[0], Q_MF_real: Q_MF_real[0], Aprov_qual: `${Aprov_qual[0]}%`.replace('.', ','), Q_MF_max, Disponibilidade: `${Disponibilidade.toFixed(2)}%`.replace('.', ','), Performance: `${Performance.toFixed(2)}%`.replace('.', ','), OEE: `${OEE.toFixed(2)}%`.replace('.', ',') },
            { new: true },
        )

        Q_MF_max = Acc_Maq_form[1] * 4
        Disponibilidade = (Acc_trans_Estoc[1] / HH_Prog[1]) * 100
        Performance = (Q_MF_real[1] / Q_MF_max) * 100
        OEE = ((Aprov_qual[1]/100) * (Disponibilidade/100) * (Performance/100)) * 100
        await Producao.findByIdAndUpdate(
            "6469d86d0fd5791437b1fad5",
            { H_disp: H_disp[1], Q_CS: Q_CS[1], Ag_Tq_Fus: Ag_Tq_Fus[1], Bat_TQ_Fus: Bat_TQ_Fus[1], BB_Fus: BB_Fus[1], Q_Sol: Q_Sol[1], HH_Prog: HH_Prog[1], Ag_Tq_Car: Ag_Tq_Car[1], Bat_TQ_Mis: Bat_TQ_Mis[1], BB_Mis: BB_Mis[1], Ag_Tq_Ali: Ag_Tq_Ali[1], BB_Ali: BB_Ali[1], Acc_Maq_form: Acc_Maq_form[1], Acc_trans_Estoc: Acc_trans_Estoc[1], Q_MF_real: Q_MF_real[1], Aprov_qual: `${Aprov_qual[1]}%`.replace('.', ','), Q_MF_max, Disponibilidade: `${Disponibilidade.toFixed(2)}%`.replace('.', ','), Performance: `${Performance.toFixed(2)}%`.replace('.', ','), OEE: `${OEE.toFixed(2)}%`.replace('.', ',') },
            { new: true },
        )

        Q_MF_max = Acc_Maq_form[2] * 4
        Disponibilidade = (Acc_trans_Estoc[2] / HH_Prog[2]) * 100
        Performance = (Q_MF_real[2] / Q_MF_max) * 100
        OEE = ((Aprov_qual[2]/100) * (Disponibilidade/100) * (Performance/100)) * 100
        await Producao.findByIdAndUpdate(
            "6469d8760fd5791437b1fad6",
            { H_disp: H_disp[2], Q_CS: Q_CS[2], Ag_Tq_Fus: Ag_Tq_Fus[2], Bat_TQ_Fus: Bat_TQ_Fus[2], BB_Fus: BB_Fus[2], Q_Sol: Q_Sol[2], HH_Prog: HH_Prog[2], Ag_Tq_Car: Ag_Tq_Car[2], Bat_TQ_Mis: Bat_TQ_Mis[2], BB_Mis: BB_Mis[2], Ag_Tq_Ali: Ag_Tq_Ali[2], BB_Ali: BB_Ali[2], Acc_Maq_form: Acc_Maq_form[2], Acc_trans_Estoc: Acc_trans_Estoc[2], Q_MF_real: Q_MF_real[2], Aprov_qual: `${Aprov_qual[2]}%`.replace('.', ','), Q_MF_max, Disponibilidade: `${Disponibilidade.toFixed(2)}%`.replace('.', ','), Performance: `${Performance.toFixed(2)}%`.replace('.', ','), OEE: `${OEE.toFixed(2)}%`.replace('.', ',') },
            { new: true },
        )

        Q_MF_max = Acc_Maq_form[3] * 4
        Disponibilidade = (Acc_trans_Estoc[3] / HH_Prog[3]) * 100
        Performance = (Q_MF_real[3] / Q_MF_max) * 100
        OEE = ((Aprov_qual[3]/100) * (Disponibilidade/100) * (Performance/100)) * 100
        await Producao.findByIdAndUpdate(
            "6469d8900fd5791437b1fad7",
            { H_disp: H_disp[3], Q_CS: Q_CS[3], Ag_Tq_Fus: Ag_Tq_Fus[3], Bat_TQ_Fus: Bat_TQ_Fus[3], BB_Fus: BB_Fus[3], Q_Sol: Q_Sol[3], HH_Prog: HH_Prog[3], Ag_Tq_Car: Ag_Tq_Car[3], Bat_TQ_Mis: Bat_TQ_Mis[3], BB_Mis: BB_Mis[3], Ag_Tq_Ali: Ag_Tq_Ali[3], BB_Ali: BB_Ali[3], Acc_Maq_form: Acc_Maq_form[3], Acc_trans_Estoc: Acc_trans_Estoc[3], Q_MF_real: Q_MF_real[3], Aprov_qual: `${Aprov_qual[3]}%`.replace('.', ','), Q_MF_max, Disponibilidade: `${Disponibilidade.toFixed(2)}%`.replace('.', ','), Performance: `${Performance.toFixed(2)}%`.replace('.', ','), OEE: `${OEE.toFixed(2)}%`.replace('.', ',') },
            { new: true },
        )

        Q_MF_max = Acc_Maq_form[4] * 4
        Disponibilidade = (Acc_trans_Estoc[4] / HH_Prog[4]) * 100
        Performance = (Q_MF_real[4] / Q_MF_max) * 100
        OEE = ((Aprov_qual[4]/100) * (Disponibilidade/100) * (Performance/100)) * 100
        await Producao.findByIdAndUpdate(
            "6469d89e0fd5791437b1fad8",
            { H_disp: H_disp[4], Q_CS: Q_CS[4], Ag_Tq_Fus: Ag_Tq_Fus[4], Bat_TQ_Fus: Bat_TQ_Fus[4], BB_Fus: BB_Fus[4], Q_Sol: Q_Sol[4], HH_Prog: HH_Prog[4], Ag_Tq_Car: Ag_Tq_Car[4], Bat_TQ_Mis: Bat_TQ_Mis[4], BB_Mis: BB_Mis[4], Ag_Tq_Ali: Ag_Tq_Ali[4], BB_Ali: BB_Ali[4], Acc_Maq_form: Acc_Maq_form[4], Acc_trans_Estoc: Acc_trans_Estoc[4], Q_MF_real: Q_MF_real[4], Aprov_qual: `${Aprov_qual[4]}%`.replace('.', ','), Q_MF_max, Disponibilidade: `${Disponibilidade.toFixed(2)}%`.replace('.', ','), Performance: `${Performance.toFixed(2)}%`.replace('.', ','), OEE: `${OEE.toFixed(2)}%`.replace('.', ',') },
            { new: true },
        )

        Q_MF_max = Acc_Maq_form[5] * 4
        Disponibilidade = (Acc_trans_Estoc[5] / HH_Prog[5]) * 100
        Performance = (Q_MF_real[5] / Q_MF_max) * 100
        OEE = ((Aprov_qual[5]/100) * (Disponibilidade/100) * (Performance/100)) * 100
        await Producao.findByIdAndUpdate(
            "6469d8a70fd5791437b1fad9",
            { H_disp: H_disp[5], Q_CS: Q_CS[5], Ag_Tq_Fus: Ag_Tq_Fus[5], Bat_TQ_Fus: Bat_TQ_Fus[5], BB_Fus: BB_Fus[5], Q_Sol: Q_Sol[5], HH_Prog: HH_Prog[5], Ag_Tq_Car: Ag_Tq_Car[5], Bat_TQ_Mis: Bat_TQ_Mis[5], BB_Mis: BB_Mis[5], Ag_Tq_Ali: Ag_Tq_Ali[5], BB_Ali: BB_Ali[5], Acc_Maq_form: Acc_Maq_form[5], Acc_trans_Estoc: Acc_trans_Estoc[5], Q_MF_real: Q_MF_real[5], Aprov_qual: `${Aprov_qual[5]}%`.replace('.', ','), Q_MF_max, Disponibilidade: `${Disponibilidade.toFixed(2)}%`.replace('.', ','), Performance: `${Performance.toFixed(2)}%`.replace('.', ','), OEE: `${OEE.toFixed(2)}%`.replace('.', ',') },
            { new: true },
        )

        Q_MF_max = Acc_Maq_form[6] * 4
        Disponibilidade = (Acc_trans_Estoc[6] / HH_Prog[6]) * 100
        Performance = (Q_MF_real[6] / Q_MF_max) * 100
        OEE = ((Aprov_qual[6]/100) * (Disponibilidade/100) * (Performance/100)) * 100
        await Producao.findByIdAndUpdate(
            "6469d8b10fd5791437b1fada",
            { H_disp: H_disp[6], Q_CS: Q_CS[6], Ag_Tq_Fus: Ag_Tq_Fus[6], Bat_TQ_Fus: Bat_TQ_Fus[6], BB_Fus: BB_Fus[6], Q_Sol: Q_Sol[6], HH_Prog: HH_Prog[6], Ag_Tq_Car: Ag_Tq_Car[6], Bat_TQ_Mis: Bat_TQ_Mis[6], BB_Mis: BB_Mis[6], Ag_Tq_Ali: Ag_Tq_Ali[6], BB_Ali: BB_Ali[6], Acc_Maq_form: Acc_Maq_form[6], Acc_trans_Estoc: Acc_trans_Estoc[6], Q_MF_real: Q_MF_real[6], Aprov_qual: `${Aprov_qual[6]}%`.replace('.', ','), Q_MF_max, Disponibilidade: `${Disponibilidade.toFixed(2)}%`.replace('.', ','), Performance: `${Performance.toFixed(2)}%`.replace('.', ','), OEE: `${OEE.toFixed(2)}%`.replace('.', ',') },
            { new: true },
        )

        res.redirect('dashboard')
    } catch (err) {
        console.log('add error', err)
    }
}


exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}