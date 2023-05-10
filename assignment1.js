// Carlos Bautista 301024215
function makeTable() {

  //get number of rows and columns from input field
  var rows = document.getElementById("rows").value;
  var columns = document.getElementById("columns").value;

  //get table element from the html document by its id
  var table = document.getElementById("table");

  //clear contents
  table.innerHTML = " ";

  //create rows and columns for the table
  for (var i = 1; i <= rows; i++)
   {
    var row = table.insertRow();
    for (var j = 1; j <= columns; j++) 
    {
      var cell = row.insertCell();
      cell.innerHTML = i + "*" + j;
    }
  }
}
