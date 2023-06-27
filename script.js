const images = ["bag","banana","bathroom","boots","breakfast",
                "bubblegum", "chair", "cthulhu", "dog-duck", "dragon",
                "pen","pet-sweep", "scissors", "shark", "sweep",
                "tauntaun","unicorn","water-can","wine-glass"];

let imagesViewed = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
let imageCounters = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];

let firstRun = true;
let cache = [];

let id1 = -1;
let id2 = -1;
let id3 = -1;

                function ConstructProducts(id1,id2,id3){
    let firstProduct = document.getElementById("productOne");
    let secondProduct = document.getElementById("productTwo");
    let thirdProduct = document.getElementById("productThree");

    const firstHeader = document.createElement("h3");
    firstHeader.setAttribute("id","firstHeader");
    firstHeader.textContent = `${images[id1]}`;
    firstProduct.appendChild(firstHeader);

    const firstImage = document.createElement("img")
    firstImage.setAttribute("src",`./images/${images[id1]}.jpg`);
    firstImage.setAttribute("class","productImg");
    firstImage.setAttribute("id","firstImage");
    firstProduct.appendChild(firstImage);

    const secondHeader = document.createElement("h3");
    secondHeader.setAttribute("id","secondHeader");
    secondHeader.textContent = `${images[id2]}`;
    secondProduct.appendChild(secondHeader);

    const secondImage = document.createElement("img")
    secondImage.setAttribute("src",`./images/${images[id2]}.jpg`);
    secondImage.setAttribute("class","productImg");
    secondImage.setAttribute("id","secondImage");
    secondProduct.appendChild(secondImage);

    const thirdHeader = document.createElement("h3");
    thirdHeader.setAttribute("id","thirdHeader");
    thirdHeader.textContent = `${images[id3]}`;
    thirdProduct.appendChild(thirdHeader);

    const thirdImage = document.createElement("img")
    thirdImage.setAttribute("src",`./images/${images[id3]}.jpg`);
    thirdImage.setAttribute("class","productImg");
    thirdImage.setAttribute("id","thirdImage");
    thirdProduct.appendChild(thirdImage);

    firstRun = false;
    console.log("homies./..");
}

function randomProducts(){

    let cachetest = false
    while(cachetest == false){
        id1 = parseInt((Math.random() * images.length -1) + 1);

    id2 = id1;
    while (id2 == id1){
        id2 = parseInt((Math.random() * images.length -1) + 1);
    }
    id3 = id1;
    while (id3 == id1 || id3 == id2){
        id3 = parseInt((Math.random() * images.length -1) + 1);
    }
    cachetest = true;
    if(id1 == cache[0] || id1 == cache[1] || id1 == cache[2]){
        cachetest = false;
    }
    if(id2 == cache[0] || id2 == cache[1] || id2 == cache[2]){
        cachetest = false;
    }
    if(id3 == cache[0] || id3 == cache[1] || id3 == cache[2]){
        cachetest = false;
    }
    }
    
    console.log("babygirl", id1,id2,id3);
    imagesViewed[id1]++;
    imagesViewed[id2]++;
    imagesViewed[id3]++;
        console.log(cache);
        console.log(id1 + " "+ id2 +" "+ id3);
        if(firstRun == true){
            ConstructProducts(id1,id2,id3)
        }
        else{
            newProducts(id1, id2, id3);
        }
}

document.getElementById("productOne").addEventListener("click",function(){
    imageCounters[id1]++;
    randomProducts();
});
document.getElementById("productTwo").addEventListener("click",function(){
    imageCounters[id2]++;
    randomProducts();
});
document.getElementById("productThree").addEventListener("click",function(){
    imageCounters[id3]++;
    randomProducts();
});

function newProducts(id1, id2, id3){
    cache[0] = id1;
    cache[1] = id2;
    cache[2] = id3;
    let firstHeader = document.getElementById("firstHeader");
    let firstImage = document.getElementById("firstImage");

    firstHeader.textContent=`${images[id1]}`;
    firstImage.src=`./images/${images[id1]}.jpg`

    let secondHeader = document.getElementById("secondHeader");
    let secondImage = document.getElementById("secondImage");

    secondHeader.textContent=`${images[id2]}`;
    secondImage.src=`./images/${images[id2]}.jpg`

    let thirdHeader = document.getElementById("thirdHeader");
    let thirdImage = document.getElementById("thirdImage");

    thirdHeader.textContent=`${images[id3]}`;
    thirdImage.src=`./images/${images[id3]}.jpg`
}