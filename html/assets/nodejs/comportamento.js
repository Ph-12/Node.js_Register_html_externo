const userAction = async() => {
    const response = await fetch('http://localhost:8081/lista_E');
    const myJson = await response.json(); 
    
    console.log(myJson);
    console.log(myJson[0].empresa_responsavel);
    document.getElementById('checkE').innerHTML = myJson[0].empresa_responsavel;
}

function chamada() {
    alert('fuid');
    userAction();
}

/*API EXTERNA COVID */ 
const infoCovid = async() => {
    const response = await fetch('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true');
    const myJson = await response.json(); 
    console.log(myJson);
    console.log(myJson.country);
    console.log(myJson.infected)
    console.log(myJson.infectedByRegion[9])
/*API EXTERNA COVID HTML REQUISIÇÃO */ 
    document.getElementById('infoBR').innerHTML = myJson.country + ' - ' + myJson.infected;
    document.getElementById('infoPA').innerHTML = myJson.infectedByRegion[9].state + ' - ' + myJson.infectedByRegion[9].count;
}

