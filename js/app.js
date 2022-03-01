const searchPhone = () => {
    const input = document.getElementById('input');
    const inputText = input.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayPhone(data))
}
const displayPhone = allPhones => {
    const phoneContainer = document.getElementById('phone-container')
    const phones = allPhones.data;
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand}</p>
                        <button class='btn btn-outline-success' onclick="showDetails('${phone.slug}')">See Specefications</button>
                    </div>
                </div>
        `
        phoneContainer.appendChild(div)
        // console.log(phone)
    });
}
const showDetails = details => {
    const url = ` https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}
