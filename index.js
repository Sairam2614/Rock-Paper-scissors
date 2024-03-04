const arr = ['rock' , 'paper' , 'scissors'];

var srcvalue;
function computer_image() {
    let index = Math.floor(Math.random() * 3);
    var imgElement = document.getElementById("computerimage"); // Ensure the correct ID is used
    srcvalue = "images/" + arr[index] + ".png";
    imgElement.setAttribute("src", srcvalue);
}

var src_2;
function setimage() {
    var optionsImages = document.querySelectorAll(".optionsimages");

    optionsImages.forEach((image) => {
        image.addEventListener("click", () => {
            src_2 = image.getAttribute("src");
            
            document.getElementById("myimage").setAttribute("src", src_2);
            computer_image();
            setdecision(src_2,srcvalue);
        });
    });
}

setimage();



function setdecision(a,b){
    if(a===b){
        document.getElementById("decision").innerHTML = "Draw";
        
    }
    else if(a=="images/rock.png"){
        if(b=="images/paper.png"){
            document.getElementById("decision").innerHTML =  "You Lose";
            
        }
        else{
            document.getElementById("decision").innerHTML = "You Won";
            
        }
    }
    else if(a=="images/paper.png"){
        if(b=="images/scissors.png"){
            document.getElementById("decision").innerHTML = "You Lose";
            
        }
        else{
            document.getElementById("decision").innerHTML = "You Won";
            
        }
    }
    else if(a=="images/scissors.png"){
        if(b=="images/rock.png"){
            document.getElementById("decision").innerHTML = "You Lose";
            
        }
        else{
            document.getElementById("decision").innerHTML = "You Won";
            
        }
    }
}


