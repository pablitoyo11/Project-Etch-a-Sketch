const SketchContainer = document.getElementById("SketchContainer");
//SketchContainer.style.display ="grid";
//SketchContainer.style.gridTemplateColumns = "repeat(4,1fr)";
//SketchContainer.style.gridTemplateRows = "repeat(4,1fr)";

//SketchContainer.style.flexWrap ="wrap";
//SketchContainer.style.display ="flex";
SketchContainer.style.cssText =`
    display:flex; flex-wrap:wrap;
    height:100vh; width:100vh;
    
    vertical-align: middle;
    text-align: center;
 `;
let erase=false;
let GridItem = SketchContainer.getElementsByClassName("grid-item");


function CreateGrid(size){
    DivGrid="";
//    griditemnumer=0;  // changed for size**2 below for calculating % sieze of each square
    for(var i = 0; i < size; i++) {
        for(var u = 0; u < size; u++) {
//            griditemnumer++; // changed for size**2 below for calculating % sieze of each square
            DivGrid=DivGrid+`<div class="grid-item"></div>`;

//            DivGrid=DivGrid+`<div class="grid-item">`+/(griditemnumer)+`</div>`; //was ading the square number to each pixel, unnecesary but i liked each pixel with their respective number
        };
    };

    SketchContainer.innerHTML = DivGrid;

    let GridItem = SketchContainer.getElementsByClassName("grid-item");
    for (let index = 0; index < size**2; index++) {
        let BasisPercent=100/(Math. sqrt(size**2));
        BasisPercent=BasisPercent+"%";
        GridItem[index].style.flexBasis=BasisPercent; 

    }
    AddingListeners();
};


function MouseIn (){
    this.classList.add("grid-item-active");
    if(erase) {
        this.classList.remove("grid-item-active");
    };
};

function MouseOut(){
    if(erase) {
        this.classList.remove("grid-item-active");
    };
};

function AddingListeners(){
for(var i = 0; i < GridItem.length; i++) {
    GridItem[i].addEventListener("mouseover", MouseIn)
    GridItem[i].addEventListener("mouseleave", MouseOut)
    }
};

CreateGrid(4);

function ChangeSize(){
    size = prompt("Insert a grid size, max size= 100");
    size<=100 ? CreateGrid(size) : alert("please insert a smaller number");
        
}

document.getElementById("ButtonChangeSize").addEventListener("click", ChangeSize);

