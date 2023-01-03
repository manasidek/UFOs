// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");
var inputs = d3.selectAll('input');



function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  

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



var filteredData1 = tableData;
console.log(filteredData1);


function handleChange() {

  // // Grab the datetime value from the filter
  // // let date = d3.select("#datetime").property("value");
  // // let date = d3.event.target.value;
  // let city = d3.event.target.value;
  // let filteredData = tableData;
  // // Check to see if a date was entered and filter the
  // // data using that date.
  // // if (date) {
  // //   // Apply `filter` to the table data to only keep the
  // //   // rows where the `datetime` value matches the filter value
  // //   filteredData = filteredData.filter(row => row.datetime === date);

  // // }
  // if (city) {
  //   // Apply `filter` to the table data to only keep the
  //   // rows where the `datetime` value matches the filter value
  //   filteredData = filteredData.filter(row => row.city === city);

  // }

  // // Rebuild the table using the filtered data
  // // @NOTE: If no date was entered, then filteredData will
  // // just be the original tableData.
  // buildTable(filteredData);




  var key = d3.select(this).property('id');
	var value = d3.select(this).property('value');
  console.log(key);
  console.log(value);
	if (value) {
		filteredData1 = filteredData1.filter(obj => obj[key] == value);
    console.log(filteredData1);
	};

	buildTable(filteredData1);
}
inputs.on('change', handleChange);
// Attach an event to listen for the form button
// d3.select("#datetime").on("change", handleChange);
// d3.select("#city").on("change", handleChange);
// date.on("change", handleChange);
// Build the table when the page loads
// buildTable(tableData);
