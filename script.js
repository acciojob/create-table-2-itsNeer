const table = document.getElementById("myTable");

function createTable() {
    //Write your code here
	
	let row = prompt("Input number of rows")
	let column = prompt("Input number of columns")
	for (let i = 0; i < row; i++) {
		let tr = document.createElement("tr");
		
		for (let j = 0; j < column; j++) {
			tr.innerHTML += `
				<td>Row-${i} Column-${j}</td>
				`;
		}
		table.append(tr)
	}
	
}


// btn.addEventListener("click", (e) => {
// 	e.preventDetails();
	
// 	createTable(row, column)
// })