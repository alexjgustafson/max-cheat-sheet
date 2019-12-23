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

function addTableHeading(table){
  let row = document.createElement('tr');
  let addRowHeader = function(content, row){
    let cell = document.createElement('th');
    cell.append(content);
    row.append(cell);
  };
  addRowHeader('% of max', row);
  addRowHeader('Load', row);
  addRowHeader('-45', row);
  addRowHeader('-35', row);
  addRowHeader('-15', row);
  table.append(row);
};

function hideRemoveAndShow(node){
    node.classList.remove('show');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    addTableHeading(node);
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
            let value = content < 0 ? '-' : content;
            cell.append(value);
            row.append(cell);
        };
        let load = Math.ceil(max * el.mult/5)*5;
        addRowCell(el.label, row);
        addRowCell(load, row);
        addRowCell(load-45, row);
        addRowCell(load-35, row);
        addRowCell(load-15, row);
        table.append(row);
    });
})
