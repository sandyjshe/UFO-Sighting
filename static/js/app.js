// from data.js
var tableData = data;

// YOUR CODE HERE!
// Variables
var button = d3.select("#filter-btn");
var resetbtn = d3.select("#reset-btn");
var inputField1 = d3.select("#datetime");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

  dataInput.forEach(sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(sightings[column])
    )
  });
}

//call populate function above to populate table
populate(tableData);

//filter by user input
button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = inputField1.property("value").trim();
  var filterData = tableData.filter(tableData => tableData.datetime === inputDate);
  console.log(filterData)

  //add filtered sighting to table
  tbody.html("");

  let response = {
    filterData
  }

  if (response.filterData.length !== 0) {
    //populate table with filtered data when found
    populate(filterData);
  }
    //return no result found message when nothing found
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})

//reset table button
resetbtn.on("click", () => {
  tbody.html("");
  populate(data)
  console.log("Table reset")
})