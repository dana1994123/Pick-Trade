
window.onload = function() {
    //jsArray = JSON.parse(sessionStorage.getItem("jsArray"));

    //http://127.0.0.1:5500/views/product.html?ipd=7aeb2600-7079-489b-a6f2-1293f9730b9a
    // we have the id in the url
    const url= window.location.href;
    productId = url.substring(45, 83);
    //fetch this specific product details 
    getProductById(productId)



    
};


async function getProductById(productId){
    console.log(productId)
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
