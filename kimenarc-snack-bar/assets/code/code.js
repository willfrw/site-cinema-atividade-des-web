function subtotal() {
    let table = document.getElementById('table');
    let rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length - 1; i++) {
        let unitValueId = "unitValue" + i;
        let qntItemId = "qntItem" + i;
        let itemId = "item" + i;

        let unitValue = parseFloat(document.getElementById(unitValueId).innerText.replace("R$ ", "").replace(",", "."));
        let qntItem = parseInt(document.getElementById(qntItemId).value);

        let subtotal = unitValue * qntItem;
        
        // Para não apresentar R$ NaN,00 na saída de valor
        if (isNaN(subtotal)) {
            subtotal = 0;
        }

        document.getElementById(itemId).innerText = "R$ " + subtotal.toFixed(0) + ",00";

        
    }
    total();
}

function total() {
    let table = document.getElementById('table');
    let rows = table.getElementsByTagName('tr');

    let subt = 0; // Inicializa a variável subt com 0

    for (let i = 1; i < rows.length - 1; i++) {
        let itemId = "item" + i;

        // Obtém o valor do subtotal e adiciona à variável subt
        let subtotalValue = parseFloat(document.getElementById(itemId).innerText.replace("R$ ", "").replace(",", "."));
        subt += subtotalValue;
    }

    // Atualiza o elemento com o total calculado
    document.getElementById('total').innerText = "R$ " + subt.toFixed(0) + ",00";
}
