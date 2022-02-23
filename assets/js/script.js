
url = "https://restcountries.com/v2/regionalbloc/eu";


function getData() {
    fetch('https://restcountries.com/v2/regionalbloc/eu')
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);
        }).catch(err => console.error(err));
}

getData()



async function fetchText() {
    let response = await fetch('https://restcountries.com/v2/regionalbloc/eu');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.json();
        // handle data
        croatia = data[4].flag
        console.log(data[4].flag)
        /* document.getElementById("flag").innerHTML = croatia; */
        let img = document.createElement("img");
        img.src = croatia;
        console.log(img.src)
        let block = document.getElementById("flag");
        block.appendChild(img);
        console.log(typeof data);
    }
}

fetchText();

console.log(data)