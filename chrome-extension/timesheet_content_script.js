var planilha, planilhaValue, acoesDoc, dias, gravando = false;

function Dia(horas, data) {
    this.horas = horas;
    this.data = data;
}

function diaParser(linha) {
    var horas, data;
    var horasPattr = /[0-9]{2}:[0-9]{2}/i;
    var dataPattr = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4}/i;
    var args = linha.split(' ');
    if (horasPattr.test(args[0]) && dataPattr.test(args[1])) {
        horas = args[0];
        data = args[1];
        return new Dia(horas, data);
    }
    else {
        return false;
    }
}

function planilhaParser(vl) {
    var linhas = vl.split('\n');
    for (i = 0; i < linhas.length; i++) {
        dias.push(diaParser(linhas[i]));
    }
}

function grava(d) {}

function continua_gravacao() {
    if (dias.length == 0) {
        return false;
    }
    else {
        dia = dias.shift();
        grava(dia);
    }
    /*    


    cont.body.querySelector('#txtnum_percentual_concluido').value = "10"
    cont.body.querySelector('#ddlCod_fabr_tipoatividade').value = "1"
    cont.body.querySelector('#txtHorasTrabalhadas').value = "07:30"
    cont.body.querySelector('#txtDataAtividade').value = "24/02/2018"
    cont.body.querySelector('#txtdsc_Observacoes').value = "Atividades referentes ao projeto informado"

    acoes.body.querySelector('#botGravar').click()    */
}

function gravar() {
    console.log('gravando...');
    gravando = true;
    this.onclick = "";
    planilhaValue = planilha.value;
    planilha.value = "";
    planilhaParser(planilhaValue);
    continua_gravacao;
    this.onclick = gravar;
}

function conteudoConteudoOnload() {
    console.log(this.src);
    if (this.src == "https://parati.trescon.com.br/Sistema3con/fabr_AtividadeDiaria/fabr_AtividadeDiaria_lista.aspx") {
        contDoc = this.contentWindow || this.contentDocument;
        if (contDoc.document) contDoc = contDoc.document;
        planilha = contDoc.body.querySelector('#txtdsc_atividade');
        label = contDoc.body.querySelector('#Label19');
        //
        planilha.disabled = "";
        planilha.placeholder = "Insira aqui sua planilha de horas no formato HH:MI DD/MM/AAAA. Uma linha por entrada. Ex.: 08:30 22/04/2018";
        style = planilha.getAttribute('style');
        planilha.style = style + "background-color:#d0ddd0;";
        //
        label.innerHTML = "<strong>Timesheet Happens &trade;</strong></br>Planilha de Horas</br>para gravar clique <strong>aqui</strong>";
        label.style = "background-color:#d0ddd0";
        if (!gravando) {
            label.onclick = gravar;
        }
        else {
            continua_gravacao;
        }
    }
}

function acoesOnload() {
    console.log(this.src);
    doc = this.contentWindow || this.contentDocument;
    if (doc.document) acoesDoc = doc.document;
}

function conteudoOnload() {
    console.log(this.src);
    ct = (c.contentWindow || c.contentDocument);
    if (ct.document) {
        var frms = ct.document.querySelectorAll('iframe');
        console.log(frms[0].id);
        if (frms[0].id == 'fraAcoes' && frms[1].id == 'conteudo') {
            acoes = frms[0];
            acoes.onload = acoesOnload;
            cont = frms[1]
            cont.onload = conteudoConteudoOnload;
        }
    }
}

function mapeiaFrames() {
    c = document.querySelector(' #conteudo ');
    //window.open('fabr_AtividadeDiaria/fabr_AtividadeDiaria.aspx', 'conteudo');
    c.onload = conteudoOnload;
}

function windowOnload() {
    console.log('Timesheet Happens is Here!!!');
    document.querySelector('body').setAttribute("bgcolor", "#d0ddd0");
    mapeiaFrames();
}
window.onload = windowOnload;