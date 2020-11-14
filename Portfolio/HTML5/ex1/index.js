function handleSubmit () {
    if(typeof(Storage) !=="undefined") {
    } else {
    alert("Désolé,mais le Web Storage n'est pas suppoté !");
    }
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("name", surname);

    return;
}

