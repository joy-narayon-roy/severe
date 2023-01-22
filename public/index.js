fetch("/api/contacts")
  .then((res) => res.json())
  .then((datas) => {
    let newData = "";
    datas.map((data) => {
      newData =
        newData + `<tr><td>${data.name}</td><td>${data.phone}</td></tr>`;
    });
    document.getElementById("table").innerHTML = newData;
  })
  .catch((er) => console.log(er));
