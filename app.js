
const container = document.querySelector('#container');


//grid container
var gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

var count;

//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
console.log(output.textContent);

count = output.textContent;


//makes grid
makeGrid(count);


//assigns mouse over listener to all boxes
let gridItems = document.querySelectorAll(".gridItem");
console.log(gridItems[1]);



gridItems.forEach((gridItem => {
    gridItem.addEventListener("mouseover", function(){
        this.style.backgroundColor = "red";
    });
}));


//reset Button
var resetButton = document.querySelector(".resetButton");
resetButton.classList.add('resetButton');



resetButton.addEventListener('click', () => {

    count = output.textContent;

    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
        console.log(gridContainer.firstChild);
        console.log("reset funcion");
    }

    makeGrid(count);
    let gridItems = document.querySelectorAll(".gridItem");
console.log(gridItems[1]);



gridItems.forEach((gridItem => {
    gridItem.addEventListener("mouseover", function(){
        this.style.backgroundColor = "red";
    });
}));
  });


console.log(gridItems[0]);
console.log(gridContainer.firstChild);



//resetButton.onclick = reset(count);

console.log(gridContainer.firstChild);


//container.appendChild(gridContent);



function makeGrid(count){



    var i = 0;
    var j = 0;
    var k = 960/count;
    let boxWidth = k+"px";
    console.log(boxWidth);



    for(i = 0; i < count; i++){
        for(j = 0; j < count; j++){
            var gridItem = document.createElement('div');
            gridItem.classList.add("gridItem");
            gridItem.className = "gridItem";

           // gridItem.addEventListener("mouseover", mouseOver);
            gridItem.style.width = boxWidth;
            gridItem.style.height = boxWidth;

            //gridItem.onmouseover = function(){mouseOver()};

            gridContainer.appendChild(gridItem);
        }
        


    }

 


container.appendChild(gridContainer);
};

