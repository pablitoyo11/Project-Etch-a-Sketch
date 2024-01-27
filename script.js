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
    griditemnumer=0;
    for(var i = 0; i < size; i++) {
        for(var u = 0; u < size; u++) {
            griditemnumer++;
            DivGrid=DivGrid+`<div class="grid-item">`+(griditemnumer)+`</div>`;
            console.log("por aca voy",griditemnumer);
        };
        console.log(griditemnumer);
    };
    console.log("termino",griditemnumer);

    SketchContainer.innerHTML = DivGrid;

    let GridItem = SketchContainer.getElementsByClassName("grid-item");
    for (let index = 0; index < griditemnumer; index++) {
        let BasisPercent=100/(Math. sqrt(griditemnumer));
        BasisPercent=BasisPercent+"%";
        GridItem[index].style.flexBasis=BasisPercent; 
        console.log(griditemnumer,"al porcentjae",BasisPercent);

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