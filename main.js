let meds = [];
let currentId = 1;

function addMed() {
  event.preventDefault();
  let newMed = {
    "id": currentId,
    "medName": document.getElementById("medName").value,
    "medQtd": document.getElementById("medQtd").value,
    "medClass": document.getElementById("medClass").value
  }
  currentId++;
  resetForm();
  meds.push(newMed);
  renderTable();
}

function resetForm(){
  document.getElementById("medName").value = "";
  document.getElementById("medQtd").value = "";
  document.getElementById("medClass").value = "";
}

function renderTable(){
  let table = document.getElementById("dataTable")
  table.innerHTML = `<th>ID</th>
          <th>Medicamento</th>
          <th>Quantidade</th>
          <th>Classe de medicamento</th>
          <th>Remover</th>`
  
  for(let i = 0; i < meds.length; i++){
    table.innerHTML = table.innerHTML + `<tr>
      <td>${meds[i].id}</td>
      <td>${meds[i].medName}</td>
      <td>${meds[i].medQtd}</td>
      <td>${meds[i].medClass}</td>
      <td><img src="Lixeira.png" onclick=removeMed(${i})></td>
    </tr>`
  }
}

function removeMed(id){
  meds.splice(id, 1);
  renderTable();
}