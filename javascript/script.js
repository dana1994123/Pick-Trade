
//we need to give it the router 
const container = document.getElementById("productList")

container.addEventListener("click", function(e){
    
    
    
    //const target = document.getElementById(e.target.id)// Or any other selector.
    if(e.target.attributes[1].value == "productBtn"){
        //console.log(e.target.attributes[2].value)
        jsArray = e.target.attributes[2].value;
        e.target.href = `product.html?ipd=${jsArray}`
        console.log(e.target)
    }
  });


  
async function tddry(){
    await fetch("http://localhost:5052/api/product", {
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
})
    .then(response => response.json())
    .then(data => dataInProduct(data));

};


tddry();


function dataInProduct(data){
    console.log(Array.from(data))
    var count = 0 ; 
    var dataArray = []; 
    data.forEach(element => {
        console.log(element)
        dataArray[count] = element;
        count ++ ; 

        if(count == 2){
            count = 0; 
            console.log("data array")
            populateList(dataArray)
        }
        
    });
}

///data coming from the api 
function populateList(dataArray){
    console.log("calling populate")
    //getting all the product to populate them in the home page 
    const containerDiv = document.getElementById("productList")

    const rowDiv = document.createElement("div")
    rowDiv.classList.add("row")

    for(let i = 0 ; i < 2 ; i++ ){

        const colDiv1 = document.createElement("div");
        colDiv1.classList.add("col-sm-6");
        colDiv1.classList.add("mb-3");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.setAttribute("data-id" , dataArray[i].id) ;

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");

        const productImage = document.createElement("img");
        productImage.classList.add("card-img-top");
        productImage.src = dataArray[i].image;


        const btnDetails = document.createElement("a");
        btnDetails.classList.add("btn-info");
        btnDetails.classList.add("btn");
        btnDetails.classList.add("mt-4");
        btnDetails.id = "productBtn";
        btnDetails.innerHTML= "More Details";
        //btnDetails.href= "product.html"
        
        btnDetails.setAttribute("data-id" , dataArray[i].id) ;


        const titleCard = document.createElement("h5")
        titleCard.classList.add("card-title")
        titleCard.innerHTML = dataArray[i].name

        const imgCard = document.createElement("img")
        imgCard.classList.add("card-img-top")

        const detailsCard = document.createElement("p")
        detailsCard.classList.add("card-text")
        detailsCard.innerHTML = dataArray[i].description


        cardBodyDiv.appendChild(titleCard);
        cardBodyDiv.appendChild(imgCard);
        cardBodyDiv.appendChild(detailsCard);
        cardBodyDiv.appendChild(productImage);

        cardBodyDiv.appendChild(btnDetails);

        cardDiv.appendChild(cardBodyDiv)

        colDiv1.appendChild(cardDiv)


        
        rowDiv.appendChild(colDiv1)
        console.log(rowDiv)
    }
    containerDiv.appendChild(rowDiv) 
    
}

// document.getElementById("btnDetails").click(NavigateToDetailedProductPage);

// const btnProduct = document.getElementById("productBtn")
//     btnProduct.addEventListener('touchstart' ,NavigateToDetailedProductPage,false)
// function NavigateToDetailedProductPage(){
//     console.log(btnProduct.data)

//}














//coming from different server CORS



