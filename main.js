const form - document-getElenentByld('form_contato'):
                                                            I
 let linhas = " ";

form.addEventListener('submit' function(e){
    e.preventDefault();

    const inputnomecontato = document. getElementById('nome_contato');
    const inputnumerocontato = document. getElementByld('numero_contato');

     let linha = '<str>';

     linha += `<td>${inputnomecontato.value}</td>`;
     linha += `<td>${inputnumerocontato.value}</td>`;
     linha += `<td>${}</td>`
     linha += '</str>'

     linhas += linha;

    const corpoTabela = document.queryselector('tbody'):
    corpoTabela.innerHTML = linhas;
    
    inputnomecontato.value ='';
    inputnumerocontato.value ='';
});