// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var clear_button = d3.select("#clear-filter");

// select for filtered input
let filter = d3.selectAll(".filter");

// select the form
let form = d3.select("form");


// Building table with all data
buildTable(tableData);

// creating event handlers

filter.on("change", filterTable);


// this accounts for someone hitting enter after their query is input 
form.on("submit", filterTable);

// creating a blank object to store query data
inputDict = {};

function filterTable() {
// creates the table using filtered data to search through the set of data
    let filteredData = tableData;

    // prevent the page from refreshing
    d3.event.preventDefault();

    // get value property of the input elements
    let inputSelection = d3.select(this).select("input");
    let inputValue = inputSelection.property("value");
    let inputID = inputSelection.attr("id");
    
    // updates the object to have a key/value pair
    inputDict[inputID] = inputValue;
    console.log(inputDict);
    Object.entries(inputDict).forEach(([key, value]) => {
        console.log(key, value);
        filteredData = filteredData.filter(ufo => ufo[key] === value);
        console.log(filteredData);
    });
    
    buildTable(filteredData);

};



function buildTable(data) {
    // First, clear out any existing data
     tbody.html("");
    // let allData = tableData;
      
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
          cell.text(val);
        }
      );
    });
  }

  
  

