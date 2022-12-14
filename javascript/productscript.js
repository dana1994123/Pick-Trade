window.onload = function() {
    //jsArray = JSON.parse(sessionStorage.getItem("jsArray"));

    //http://127.0.0.1:5500/views/product.html?ipd=7aeb2600-7079-489b-a6f2-1293f9730b9a
    // we have the id in the url
    document.getElementById("requestBody").style.display = "none"
    document.getElementById("requestConfirmation").style.display ="none"
    
    const url= window.location.href;
    productId = url.substring(45, 81);
    console.log(url)
    //fetch this specific product details 

    console.log(productId, "product id")


    getProductById(productId)

    
     
    
 
};


async function getProductById(productId){
    await fetch(`http://localhost:5052/api/product/${productId}`, {
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
})
    .then(response => response.json())
    .then(data => populateSpecificProductData(data));


}


   

  function populateSpecificProductData(data){
    console.log(data)
    document.getElementById("productImg").src = data.image
    document.getElementById("productTitle").innerHTML = data.name
    document.getElementById("pPoint").innerHTML = `${data.pointCost} POINTS`
    document.getElementById("productDescription").innerHTML = data.description
}


document.getElementById("requestContainer").addEventListener("click", function(e){
    if(e.target.attributes[1].value == "requestBtn"){
        //console.log(e.target.attributes[2].value)
        // jsArray = e.target.attributes[2].value;
        document.getElementById("requestBody").style.display = "block"
       
        e.preventDefault();
         e.target.href = `..`
        console.log(e.target)
    }
  });
  document.getElementById("checkProductRequests").addEventListener("click", function(e){
    console.log(e.target.attributes[1].value)
        e.target.href = `requests.html?ipd=${productId}`
        console.log("dana")
  });


  document.getElementById("cancelRequest").addEventListener("click" , function(e){
    document.getElementById("requestBody").style.display = "none"
  })
  document.getElementById("cancelRequest2").addEventListener("click" , function(e){
    document.getElementById("requestBody").style.display = "none"
  })

  document.getElementById("sendRequest").addEventListener("click" , async function(e){
    //add the request to this specific product with this specific userName
    await fetch(`http://localhost:5052/api/Request/${productId}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "username": "Aeiman Gadafi",
                "isaccepted": false
            })
        })
        .then(response => response.json())
        .then(data => SendRequestSuccess(data));
  })


  function SendRequestSuccess(data)
  {
    document.getElementById("requestBody").style.display = "none"
    document.getElementById("requestConfirmation").style.display = "block"
  }

