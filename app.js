/* Table data - data that drives the table construction */

// mock data
let columnTitles = ['a', 'b'];
let tableData = [
    [1, 2], // index 0
    [3, 4], // index 1
];

function fillTableHeaders(titles, thead) {
    for (let i=0; i<titles.length; i++) {
        let th = document.createElement('th');
        th.textContent = titles[i];
        thead.appendChild(th);
    }
}

function fillTableBody(array2d, tbody) {
    for (let row=0; row<array2d.length; row++) {
        let tr = document.createElement('tr');
        for (let col=0; col<array2d[row].length; col++) {
            let td = document.createElement('td');
            td.textContent = array2d[row][col];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function buildTableComponents(titles, tableData2dArray, name) {
    // create a table element
    const table = document.createElement('table');
    table.setAttribute('id', `${name}`);
    table.classList.add('u-full-width');
    // create thead section
    const thead = document.createElement('thead');
    // fill thead section with data from titles array
    fillTableHeaders(titles, thead);
    // create tbody section
    const tbody = document.createElement('tbody');
    // fill tbody with data from tableData2dArray
    fillTableBody(tableData2dArray, tbody);
    // attach the thead as child to table
    // attach the tbody as child to table
    // attach table to the DOM
    table.appendChild(thead);
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
