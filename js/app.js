const searchPhone = () => {
    const input = document.getElementById('input');
    const inputText = input.value;
    if(inputText==''){
        alert('Enter phone name')
    }
    else{
        // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayPhone(data))
           // Clear data
        input.value=''
    }
}
const displayPhone = allPhones => {
    // Clear data
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent=''
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerText=''
    // Display data
    const phones = allPhones.data;
    if(phones.length == 0){
        alert('dont find')
    }
    else{
    phones.slice(0,20).forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card h-100 flex-xl-row flex-md-column flex-sm-column align-items-center">
                    <img src="${phone.image}" class="card-img-top w-50 mx-auto mt-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand}</p>
                        <button class='btn btn-outline-success' onclick="showDetails('${phone.slug}')">Specefications</button>
                    </div>
                </div>
        `
        phoneContainer.appendChild(div)
        // console.log(phone)
    });}
}
const showDetails = details => {
    const url = ` https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data))
}
const displayDetails = info => {
    const details = info.data;
    console.log(details)
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerText=''
    const div = document.createElement('div');
    div.classList.add('details')
    div.innerHTML = `
        <div class="card mb-3 w-100 mx-auto" style="max-width: 540px;">
            <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <img src="${details.image}" class="img-fluid rounded-start mt-2" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${details.name}</h5>
                    <p class="card-text">Release Date: ${details.releaseDate,details.releaseDate ? details.releaseDate : 'coming soon'}</p>
                    <p class="card-text fw-bold fst-italic text-decoration-underline">Main features</p>
                    <p class="card-text"><span class="fw-bold">Storage: </span> ${details.mainFeatures.storage}</p>
                    <p class="card-text"><span class="fw-bold">Display Size:</span> ${details.mainFeatures.displaySize}</p>
                    <p class="card-text"><span class="fw-bold">Chipset:</span> ${details.mainFeatures.chipSet}</p>
                    <p class="card-text"><span class="fw-bold">Memory:</span> ${details.mainFeatures.memory}</p>
                </div>
              </div>
            </div>
        </div>
                `
    detailsContainer.appendChild(div)
    location.href = "#details-container";
}
