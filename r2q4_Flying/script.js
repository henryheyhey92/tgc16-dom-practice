// PLACE YOUR CODE HERE
function extractFormInfo(){
  // get the first name , las name ticket class and option
  let firstName = document.querySelector('#firstName').value;

  let lastName = document.querySelector('#lastName').value;

  let radio = document.querySelectorAll('.ticket');
  let radioRes = null;
  for(let r of radio)
  {
      if(r.checked == true)
      {
          radioRes = r.value;
          break;
      }
  }

  let checkBox = document.querySelectorAll('.meal');
  let boxArr = [];

  for(let c of checkBox)
  {
      if(c.checked == true)
      {
        boxArr.push(c.value);
      }
  }

//   console.log("First name ==> "+ firstName);
//   console.log("Last name ==> "+ lastName);
  console.log(radioRes, boxArr);
  //console.log("check box value :"+ boxArr);
  return ([firstName, lastName, radioRes, boxArr]);

}


document.querySelector('#booking').addEventListener('click', function(){
    let res = extractFormInfo();
    let summary = document.querySelector('#summary');
    let classCost = 0;
    switch(res[2]){
      case "First class":
            classCost = 1200;
            break;
      case "Business class":
            classCost = 750;
            break;
      case "Economy class":
            classCost = 250;
            break;
      default:
            break;      
    }
    let opitonCost = res[3].length * 10;
    let total = 0;
    total = opitonCost + classCost;

    summary.innerHTML = `<div>
    <div>${res[0]} ${res[1]}</div>
    <div>${res[2]}</div>
    <div>${res[3]}</div>
    <div>Total cost for the flight : ${total}</div>
    </div>`
})







