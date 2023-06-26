const images = ["bag","banana","bathroom","boots","breakfast",
                "bubblegum", "chair", "cthulhu", "dog-duck", "dragon",
                "pen","pet-sweep", "scissors", "shark", "sweep",
                "tauntaun","unicorn","water-can","wine-glass"];

function ConstructProducts(id1,id2,id3){
    let firstProduct = document.getElementById("productOne");
    let secondProduct = document.getElementById("productTwo");
    let thirdProduct = document.getElementById("producThree");

    const firstHeader = document.createElement("h3");
    firstHeader.textContent = `${images[id1]}`;
    firstProduct.appendChild(firstHeader);

}

function randomProducts(){
    let id1 = parseInt((Math.random() * images.length -1) + 1);

    let id2 = id1;
    while (id2 == id1){
        id2 = parseInt((Math.random() * images.length -1) + 1);
    }
    let id3 = id1;
    while (id3 == id1 || id3 == id2){
        id3 = parseInt((Math.random() * images.length -1) + 1);
    }
    console.log("babygirl", id1,id2,id3);
    ConstructProducts(id1,id2,id3)
}