fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => addElements(data))

function addElements(list){
   list.forEach(function (element){
        let newLi = document.createElement("li")
        let newContent = document.createTextNode(element)
        newLi.appendChild(newContent)
        let currentUl = document.getElementById("list")
        document.body.insertBefore(newLi, currentUl)
   })
}

function listAddition(){
    let addItems = document.getElementById("listAdd")[0].value
    fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
  method: 'POST',
  body: JSON.stringify({message: addItems})
}).then(function (response) {
  if (response.status == 200) {
    console.log("Ok!")
  } else {console.log("Oh no!")}
})
}

