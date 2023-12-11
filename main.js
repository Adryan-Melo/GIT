const form = document.getElementById("form_contato");
                                                            
 let linhas = " ";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputnomecontato = document.getElementById("nome_contato");
    const inputnumerocontato = document.getElementByld("numero_contato");

     let linha = '<str>';

     linha += `<td>${inputnomecontato.value}</td>`;
     linha += `<td>${inputnumerocontato.value}</td>`;
     linha += '</str>'

     linhas += linha;

    const corpoTabela = document.queryselector("tbody");
    corpoTabela.innerHTML = linhas;
   
});