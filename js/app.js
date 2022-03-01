const searchPhone = () => {
    const input = document.getElementById('input');
    const inputText = input.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
        .then(response => response.json())
        .then(data =>  displayPhone(data))
}
const displayPhone = allPhones =>{
    const phones = allPhones.data;
    console.log(phones)

}
