window.addEventListener('load', () => {

    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;

})