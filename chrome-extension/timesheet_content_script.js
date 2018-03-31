function acoesOnload() {
    console.log(this.src);
    acoesDoc = this.contentWindow || this.contentDocument;
    if (acoesDoc.document) acoesDoc = acoesDoc.document;
    /*    


    cont.body.querySelector('#txtnum_percentual_concluido').value = "10"
    cont.body.querySelector('#ddlCod_fabr_tipoatividade').value = "1"
    cont.body.querySelector('#txtHorasTrabalhadas').value = "07:30"
    cont.body.querySelector('#txtDataAtividade').value = "24/02/2018"
    cont.body.querySelector('#txtdsc_Observacoes').value = "Atividades referentes ao projeto informado"

    acoes.body.querySelector('#botGravar').click()    */
}
var planilha, planilhaValue;

function gravar() {
    console.log('gravando...');
    this.onclick = "";
    planilhaValue = planilha.value;
    planilha.value = "";
    console.log(planilhaValue);
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
        label.onclick = gravar;
    }
}

function conteudoOnload() {
    console.log(this.src);
    ct = (c.contentWindow || c.contentDocument);
    if (ct.document) frms = ct.document.querySelectorAll('iframe');
    console.log(frms);
    acoes = frms[0];
    acoes.onload = acoesOnload;
    cont = frms[1]
    cont.onload = conteudoConteudoOnload;
}

function mapeiaFrames() {
    c = document.querySelector(' #conteudo ')
    window.open('fabr_AtividadeDiaria/fabr_AtividadeDiaria.aspx', 'conteudo');
    c.onload = conteudoOnload;
}

function windowOnload() {
    console.log('Timesheet Happens is Here!!!');
    document.querySelector('body').setAttribute("bgcolor", "#d0ddd0");
    mapeiaFrames();
}
window.onload = windowOnload;