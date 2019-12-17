function getCommonPercentages(){
    let commonPercentages = [];
    let increaseI = function(num){
      return num < 70 ? num + 5 : num + 2.5;
    };
    for( var i = 40; i<= 100; i=increaseI(i) ){
      commonPercentages.unshift( {
        'label' : `${i}%`,
        'mult' : i/100
      } );
    }
    return commonPercentages;
}

function hideRemoveAndShow(node){
    node.classList.remove('show');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    node.classList.add('show');
}

document.querySelector('[data-action="calc"]').addEventListener('click', (e) => {
    let max = parseInt( document.querySelector('[data-maxinput]').value );
    let table = document.querySelector('table');
    hideRemoveAndShow(table);
    getCommonPercentages().map( el => {
        var row = document.createElement('tr');
        var addRowCell = function(content, row){
            let cell = document.createElement('td');
            cell.append(content);
            row.append(cell);
        };
        addRowCell(el.label, row);
        addRowCell(Math.ceil(max * el.mult/5)*5, row);
        table.append(row);
    });
})
