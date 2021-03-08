/* Table data - data that drives the table construction */

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

    extendTableData(placeholder) {

        function extend(array, by, placeholder) {
            for (let i=0; i<by; i++) {
                array.push(placeholder);
            }
        }
        // when row lengths don't match, extend the short rows to match the longest row with a placeholder value

        // find the longest row
        let longestRowLength = -1;
        for (let i=0; i<this.tableData.length; i++) {
            longestRowLength = this.tableData[i].length > longestRowLength ? this.tableData[i].length : longestRowLength; 
        }

        // extend the row by the difference between it's length and the longest row length
        for (let i=0; i<this.tableData.length; i++) {
            let currentRowLength = this.tableData[i].length;
            let row_length_difference = longestRowLength - currentRowLength;

            if (row_length_difference > 0) {
                extend(this.tableData[i], row_length_difference, placeholder);
            }
        }


    }

    fillTableHeaders(columnHeaders, thead) {
        for (let i=0; i<columnHeaders.length; i++) {
            let th = document.createElement('th');
            th.textContent = columnHeaders[i];
            thead.appendChild(th);
        }
    }

    fillTableBody(tableData, tbody, columnCount) {

        this.extendTableData('');
        
        for (let row=0; row<tableData.length; row++) {
            let tr = document.createElement('tr');

            // only add a column if a column header is present
            let limiter = columnCount < tableData[row].length ? columnCount : tableData[row].length;
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

const columnHeaders = ['number', 'first name', 'last name', 'years'];
const tableData = [
    [1, 'george', 'washington', '1790'],
    [2, 'john', 'adams'],
    [3, 'thomas', 'jefferson', '1810'],
    [4, 'chris'],
];

const USPresidents = new DynamicTable(columnHeaders, tableData);
USPresidents.buildTableComponents();
USPresidents.setTableName('US Presidents');
USPresidents.setTableId('#us-presidents');
USPresidents.display('#table-area');
