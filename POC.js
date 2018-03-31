c = $(' #conteudo ')
ct = (c.contentWindow || c.contentDocument)
if (ct.document) ct = ct.document
ct.querySelectorAll('iframe')
frms = ct.querySelectorAll('iframe')
acoes = frms[0]
acoes = acoes.contentWindow || acoes.contentDocument
if (acoes.document) acoes = acoes.document
cont = frms[1]
cont = cont.contentWindow || cont.contentDocument
if (cont.document) cont = cont.document
cont.body.querySelector('#Label19').innerHTML = "Timesheet Hapens &trade; </br> Insira ao lado sua </br> planilha de horas </br> ---->>>>>"
cont.body.querySelector('#Label19').style = "background-color:#d0ddd0"
cont.body.querySelector('#txtdsc_atividade').disabled = ""
cont.body.querySelector('#txtdsc_atividade').placeholder = "Insira aqui sua planilha de horas"
cont.body.querySelector('#txtdsc_atividade').style = "background-color:#d0ddd0"
cont.body.querySelector('#txtnum_percentual_concluido').value = "10"
cont.body.querySelector('#ddlCod_fabr_tipoatividade').value = "1"
cont.body.querySelector('#txtHorasTrabalhadas').value = "07:30"
cont.body.querySelector('#txtDataAtividade').value = "27/03/2018"
cont.body.querySelector('#txtdsc_Observacoes').value = "Atividades referentes ao projeto informado"
acoes.body.querySelector('#botGravar').click()