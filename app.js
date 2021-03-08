/* Table data - data that drives the table construction */

// mock data
const columnHeaders = ['number', 'first name', 'last name', 'year'];
const tableData = [
    [1, 'george', 'washington', '1789-1796'],
    [2, 'john', 'adams', '1797-1801'],
    [3, 'thomas', 'jefferson', '1801-1809'],
    [4, 'james', 'madison', '1809-1817'],
    [5, 'james', 'monroe', '1817-1825'],
];


class DynamicTable {
    
    constructor(columnHeaders, tableData) {
        this.columnHeaders = columnHeaders;
        this.tableData = tableData;
        this.tableName = null;
        this.tableId = null;
    }

    setTableName(name) {
        this.tableName = name;
    }

    setTableId(id) {
        this.tableId = id;
    }

    fillTableHeaders(columnHeaders, thead) {
        for (let i=0; i<columnHeaders.length; i++) {
            let th = document.createElement('th');
            th.textContent = columnHeaders[i];
            thead.appendChild(th);
        }
    }

    fillTableBody(tableData, tbody, rowDataLimit) {
        for (let row=0; row<tableData.length; row++) {
            let tr = document.createElement('tr');
            let limiter = rowDataLimit < tableData[row].length ? rowDataLimit : tableData[row].length;
    
            for (let col=0; col<limiter; col++) {
                let td = document.createElement('td');
                td.textContent = tableData[row][col];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }

    buildTableComponents() {
        const table = document.createElement('table');

        const thead = document.createElement('thead');
        this.fillTableHeaders(this.columnHeaders, thead);
        
        const tbody = document.createElement('tbody');
        this.fillTableBody(this.tableData, tbody, this.columnHeaders.length);
        
        table.appendChild(thead);
        table.appendChild(tbody);
        
        return table;
    }

    display(attachTo) {
        // grab table
        const table = this.buildTableComponents();

        // prepare table
        table.setAttribute('id', this.tableId);
        const label = document.createElement('label');
        label.textContent = this.tableName;
        const tableArea = document.querySelector(attachTo);
    
        // display
        tableArea.appendChild(label);
        tableArea.appendChild(table);
    }
}

const USPresidents = new DynamicTable(columnHeaders, tableData);
USPresidents.buildTableComponents();
USPresidents.setTableName('US Presidents');
USPresidents.setTableId('#us-presidents');
USPresidents.display('#table-area');
