const images = ["bag","banana","bathroom","boots","breakfast",
                "bubblegum", "chair", "cthulhu", "dog-duck", "dragon",
                "pen","pet-sweep", "scissors", "shark", "sweep",
                "tauntaun","unicorn","water-can","wine-glass"];

function ConstructProducts(id1,id2,id3){
    
}

function randomProducts(){
    let id1 = (Math.random() * 3) + 1;
    let id2 = (Math.random() * 3) + 1;
    let id3 = (Math.random() * 3) + 1;

    while(id1 == id2 || id1 == id3){
        id2 = (Math.random() * 3) + 1;
        id3 = (Math.random() * 3) + 1;
    }
    while(id2 == id3){
        id3 = (Math.random() * 3) + 1;
    }

    ConstructProducts(id1,id2,id3)
}