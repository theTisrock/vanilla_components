/* Table data - data that drives the table construction */

// mock data
let columnTitles = ['number', 'first name', 'last name', 'year'];
let tableData = [
    [1, 'george', 'washington', '1789-1796'],
    [2, 'john', 'adams', '1797-1801'],
    [3, 'thomas', 'jefferson', '1801-1809'],
    [4, 'james', 'madison', '1809-1817'],
    [5, 'james', 'monroe', '1817-1825'],
];

function fillTableHeaders(titles, thead) {
    for (let i=0; i<titles.length; i++) {
        let th = document.createElement('th');
        th.textContent = titles[i];
        thead.appendChild(th);
    }
}

function fillTableBody(array2d, tbody, rowDataLimit) {
    for (let row=0; row<array2d.length; row++) {
        let tr = document.createElement('tr');

        let limiter = rowDataLimit < array2d[row].length ? rowDataLimit : array2d[row].length;

        for (let col=0; col<limiter; col++) {
            let td = document.createElement('td');
            td.textContent = array2d[row][col];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function buildTableComponents(titles, tableData2dArray, name) {
    const table = document.createElement('table');
    table.setAttribute('id', `${name}`);
    table.classList.add('u-full-width');
    
    const thead = document.createElement('thead');
    // fill thead section with data from titles array
    fillTableHeaders(titles, thead);
    // create tbody section
    const tbody = document.createElement('tbody');
    // fill tbody with data from tableData2dArray
    fillTableBody(tableData2dArray, tbody, titles.length);
    // attach the thead as child to table
    table.appendChild(thead);
    // attach the tbody as child to table
    table.appendChild(tbody);
    
    return table;
}

function displayTable(titles, data, tableName) {
    const table = buildTableComponents(titles, data, tableName);
    const label = document.createElement('label');
    label.setAttribute('for', `${tableName}`);
    label.textContent = tableName;
    const tableArea = document.querySelector('#table-area');
    tableArea.appendChild(label);
    tableArea.appendChild(table);
}


displayTable(columnTitles, tableData, 'US Presidents');


class DynamicTable {
    
}