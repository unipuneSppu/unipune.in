let navBar = document.querySelector("#nav-bar")
function sidemenu(){
    navBar.style.width = "250px";
}

function sidemenu2(){
    navBar.style.width = "0px"
}

function testmsg(){
     document.getElementById("test-msg").innerHTML = "hello world";
}

//****//
function robot(){
    let checkBox = document.getElementById("capCheck");
    console.log(checkBox.value);
    if(checkBox.value == "false"){
        checkBox.value = "true";
        return true;
    }
}


function showTime(){
    let seatNumber = document.getElementById("rollNum").value.toLowerCase().trim();
    console.log(seatNumber + "    jkbkbvkjb")
    let momName = document.getElementById("momName").value;
    let seatList = Object.keys(STUDENTS);
    //error msg
    let seatErr = document.getElementById("seat-error");
    let motherErr = document.getElementById("mother-error"); 
    let ref = 0;
    if(seatNumber.length < 10  && momName.length == 0 && seatNumber.length == 0){
        console.log("working");
        seatErr.innerText = "Please Enter Seat No.";
        motherErr.innerText = "Please Enter Mother Name.";
        if(momName == 0){
            motherErr.innerText = "Please Enter Mother Name.";
        }
        if(seatNumber.length == 0){
            seatErr.innerText = "Please Enter Seat No.";
        }
        if(seatNumber > 0 && seatNumber < 10){
            seatErr.innerText = "Invalid Seat No.";
        }
    
    }else{
        if(seatList.includes(seatNumber.toLowerCase().trim())){
            if(momName.toUpperCase().trim() == STUDENTS[seatNumber.toLowerCase()].motherName.trim()){
                showResult();
                setTimeout(()=>{
                    window.print()
                },500)
            }else{
                console.log("mother name not match")
                motherErr.innerText = "Invalid Mother Name"
            }
        }else{
            console.log(false)
            seatErr.innerText = "Invalid Seat No."
        }
    }

}


//*****/


function showResult(){
    document.getElementById("sppuResult").style.display = "block"
    document.getElementById("sppuBody").style.display = "none"



    // inputs
    let seatNumber = document.getElementById("rollNum").value.toLowerCase().trim();
    let momName = document.getElementById("momName").value;
    let seatList = Object.keys(STUDENTS)

    //outputs
    let seatNoOut = document.getElementById("seatNoOut");
    let studentname = document.getElementById("studentName");
    let motherNameOut = document.getElementById("motherNameOut");
    let prnOut= document.getElementById("prnOut")

 
    let ref = 0;

    for(let i = 0;i < seatList.length;i++){
        if(seatList[i] == seatNumber.trim()){
            if(momName.toUpperCase().trim() == STUDENTS[seatNumber].motherName.trim()){
                seatNoOut.innerText = seatNumber.toUpperCase();
                studentname.innerText = STUDENTS[seatNumber].name;
                motherNameOut.innerText = STUDENTS[seatNumber].motherName;
                prnOut.innerText = STUDENTS[seatNumber].prn

            ref = i;
            break;
            }else{
                console.log("unable to load");
            }
        }else{
            console.log("invalid input")
        }
    }
    var myArray = STUDENTS[seatNumber].subject;
    console.log(myArray);
    console.log(myArray[1].subjectName);

    /****/
    let html = "<table>"

      setTimeout(() => {
        html += "<thead>";
        html += "<tr>";
        html += "<td>" + "Sem" + "</td>";
        html += "<td>" + "SubCode" + "</td>";
        html += "<td>" + "SubjectName" + "</td>";
        html += "<td>" + "Crd" + "</td>";
        html += "<td>" + "Grd" + "</td>";
        html += "<td>" + "GP" + "</td>";
        html += "</tr>";
        html += "</thead>";
        for(let i = 0;i < myArray.length;i++){
          html += "<tr>";
          html += "<td>" + myArray[i].sem + "</td>";
          html += "<td>" + myArray[i].subcode + "</td>";
          html += "<td>" + myArray[i].subjectName + "</td>";
          html += "<td>" + myArray[i].crd + "</td>";
          html += "<td>" + myArray[i].grd + "</td>";
          html += "<td>" + myArray[i].GP + "</td>";
          html += "</tr>";        
      }
      document.getElementById("table").innerHTML = html;
      },500);
    /****/   
}





