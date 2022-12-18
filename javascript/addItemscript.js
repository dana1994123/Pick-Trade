window.onload = function() {
    console.log(window.location.href)//http://127.0.0.1:5500/views/newItemToAdd.html
    //we need to add the image from this path to this path 
    //http://127.0.0.1:5500/assets/
}


async function getAsByteArray(file) {
    return new Uint8Array(await readFile(file))
  }


  function readFile(file) {
    return new Promise((resolve, reject) => {
      // Create file reader
      let reader = new FileReader()
  
      // Register event listeners
      reader.addEventListener("loadend", e => resolve(e.target.result))
      reader.addEventListener("error", reject)
  
      // Read file
      reader.readAsArrayBuffer(file)
    })
  }

document.getElementById("addNewListing").addEventListener("click", addNewListingToProfile)


async function addNewListingToProfile(event){
    
    event.preventDefault();
    console.log("btn clicked")

    //const imgInpt = document.getElementById("imgInpt").files
    //get the new product information and add them to the listing
    const formData = new FormData();
   
    //formData.append("image", newbyte)

    //we need to convert this file into bytes: 
    // const byteFile = await getAsByteArray(imgInp.files[0])


    // console.log(byteFile)
    // formData.append('name', document.getElementById("productName").value )
    // formData.append("description",document.getElementById("productDescreption").value)
    // formData.append("image" ,document.getElementById("productImage").value)
    // formData.append("pointCost",document.getElementById("productPoints").value)
    // formData.append("owner","Aeiman Ghadafi")
    // formData.append("requests",[])

    await fetch("http://localhost:5052/api/product", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
                "content-type": "application/json"
            },
            body: JSON.stringify({
              'name': document.getElementById("productName").value ,
              "description":document.getElementById("productDescreption").value,
              "image" :document.getElementById("productImage").value,
              "pointCost" : +document.getElementById("productPoints").value,
              "owner": "Aeiman Gadafi",
              "requests" : []

          })
        })
        .then(response => response.json())
         .then(data => alert("Product Been Added successfully"))

}

// imgInp.onchange = evt => {
//     const [file] = imgInp.files
//     if (file) {
//         if(previewProduct.style.display == "none"){
//             previewProduct.style.display = "block";
//         }

//         console.log(file)
        
//         previewProduct.src = URL.createObjectURL(file)

//         console.log(previewProduct.src);
//     }
//   }

  



//   "name":document.getElementById("productName").value,
//                 "description":document.getElementById("productDescreption").value,
//                 "PointCost" : document.getElementById("productPoints").value,
//                 "Image" : document.getElementById("previewProduct").src,
//                 "Owner":"aeiman.gadafi@sheridancollege.ca",
//                 "questions" :[],
//                 "Requests" : []