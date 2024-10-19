const URL = "https://dogapi.dog/api/v2/breeds";
const breeds = document.querySelector("#dogsBreed");

const getFacts = async ()=>{
    console.log("Getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    // console.log(data.data[0].attributes.name);
    // console.log(data.data[1].attributes.name);
    // console.log(data.data[3].attributes.name);
    // console.log(data.data[4].attributes.name);
    // console.log(data.data[5].attributes.name);
    // console.log(data.data[6].attributes.name);
    breeds.innerText = `${data.data[0].attributes.name}\n${data.data[1].attributes.name}\n${data.data[2].attributes.name}\n${data.data[3].attributes.name}\n${data.data[4].attributes.name}\n${data.data[5].attributes.name}`;
}
getFacts();

// Using promise chains

// function getFacts() {
//     fetch(URL).then((response)=>{
//       return  response.json();
//     }).then((data)=>{
//         breeds.innerText = `${data.data[0].attributes.name}\n${data.data[1].attributes.name}\n${data.data[2].attributes.name}\n${data.data[3].attributes.name}\n${data.data[4].attributes.name}\n${data.data[5].attributes.name}`;
//     })
// }
// getFacts();