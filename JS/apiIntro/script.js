console.log("hey it's me!");

// async function fetchInfo(){
//     console.log("get api info");

//     var input = document.querySelector("#input");

//     var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + input.value);
//     var data = await response.json();
//     console.log(data);
    
//     var image = document.querySelector("#pokemonImage");
//     image.src = data.sprites.front_default;
// }

function fetchInfo(){
    var input = document.querySelector("#input");

    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            var image = document.querySelector("#pokemonImage");
            image.src = data.sprites.front_default;
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong");
        })
}