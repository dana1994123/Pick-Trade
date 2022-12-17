
var productId = "";
window.onload = function() {
    const url= window.location.href;
    productId = url.substring(57, 99);
    //fetch this specific product details 
    console.log(productId)
    getRequestList(productId)

}
async function getRequestList(productId){
    await fetch(`http://localhost:5052/api/request/${productId}`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => populateRequests(data));

}

function populateRequests(data){

    var reqList = document.getElementById("myRequestUL");



    data.forEach(element => {
        console.log(element)

        var item = document.createElement("li")
        item.innerHTML = `${element.userName} Order this product`
        reqList.appendChild(item);   
    });

    





}