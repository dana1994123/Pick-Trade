console.log("hi");

//connect to an api and get the list 
const list = document.getElementById("myUL");
//we need to give it the router 
fetch ("http://localhost:5127/api/TodoItems" , {
    method : "GET",
    headers:{
        "content-type" : "application/json"
    }
})
.then(response => response.json)
.then(data =>populateList(data) )



///data coming from the api 
function populateList(data){
    console.log(data)
}


//coming from different server CORS