window.onload = function() {
    //get the information for our only profile
    var displaySetting = document.getElementById("saveBtn").style.display;


    document.getElementById("saveBtn").style.display = "none"

    
    getProfileInfo(); 

}

async function getProfileInfo(){
    await fetch("http://localhost:5052/api/profile", {
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
})
    .then(response => response.json())
    .then(data => populateProfileData(data));


};

async function populateProfileData(data){
    console.log(data)

    


    document.getElementById("profileEmail").value = data.email;
    document.getElementById("ProfilePhoneNumber").value = data.phoneNumber;
    document.getElementById("fbLink").value = data.facebookLink;
    document.getElementById("instaLink").value = data.instaLink;
    document.getElementById("linkLink").value = data.linkinLink;
    document.getElementById("profileBio").value = data.bio;
    document.getElementById("profileName").value = data.name;
    document.getElementById("profileImg").src = data.avatar;

    const list = document.getElementById("listingProduct");
    //create li for 4 items or less otherwise we need to show it in more details
    


       


    await fetch("http://localhost:5052/api/product/Listing", {
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
})
    .then(response => response.json())
    .then(data => listingData(data));



    
        
    
    
    
    


    const addListingBtn = document.createElement("a");
    addListingBtn.innerHTML = "Add new Listing"; 
    addListingBtn.classList.add("btn");
    addListingBtn.classList.add("btn-info");
    addListingBtn.classList.add("mt-4");
    addListingBtn.href = "newItemToAdd.html"
    list.appendChild(addListingBtn);

        


       
        
        // const moreDetails = document.createElement("li");
        // const btnMoreDetails = document.createElement("a");
        // btnMoreDetails.classList.add("btnMoreDetails");
        // btnMoreDetails.innerHTML = "See More";
        // btnMoreDetails.href="lis"
        // moreDetails.appendChild(btnMoreDetails);
        // list.appendChild(moreDetails);
    
    
       

        
    


   



    //when click on the editProfile btn 
   const editBtn =  document.getElementById("editProfileBtn")
   editBtn.addEventListener("click" ,updateProfile )

   const saveBtn = document.getElementById("saveBtn")
   saveBtn.addEventListener('click' , saveUpdatedDetails)

    function updateProfile(){
        console.log("btn clicked")
        

        //show another button to save the information 
        saveBtn.style.display = "block"
        editBtn.style.display = "none"

        //enable all the input and text area 
        document.getElementById("profileEmail").disabled = false;
        document.getElementById("profileEmail").classList.add("border");
        document.getElementById("profileEmail").classList.add("border-danger");

        document.getElementById("ProfilePhoneNumber").disabled = false;
        document.getElementById("ProfilePhoneNumber").classList.add("border");
        document.getElementById("ProfilePhoneNumber").classList.add("border-danger");

        

        document.getElementById("fbLink").disabled = false;
        document.getElementById("fbLink").classList.add("border");
        document.getElementById("fbLink").classList.add("border-danger");


        document.getElementById("instaLink").disabled = false;
        document.getElementById("instaLink").classList.add("border");
        document.getElementById("instaLink").classList.add("border-danger");

        document.getElementById("linkLink").disabled = false;
        document.getElementById("linkLink").classList.add("border");
        document.getElementById("linkLink").classList.add("border-danger");

        document.getElementById("profileBio").disabled = false;
        document.getElementById("profileBio").classList.add("border");
        document.getElementById("profileBio").classList.add("border-danger");

        document.getElementById("profileName").disabled = false;  
        document.getElementById("profileName").classList.add("border");
        document.getElementById("profileName").classList.add("border-danger");

    }


    async function saveUpdatedDetails(){
        saveBtn.style.display = "none"
        editBtn.style.display = "block"
        document.getElementById("profileEmail").classList.remove("border");
        document.getElementById("profileEmail").classList.remove("border-danger");
        document.getElementById("ProfilePhoneNumber").classList.remove("border");
        document.getElementById("ProfilePhoneNumber").classList.remove("border-danger");
        document.getElementById("fbLink").classList.remove("border");
        document.getElementById("fbLink").classList.remove("border-danger");
        document.getElementById("instaLink").classList.remove("border");
        document.getElementById("instaLink").classList.remove("border-danger");
        document.getElementById("linkLink").classList.remove("border");
        document.getElementById("linkLink").classList.remove("border-danger");
        document.getElementById("profileBio").classList.remove("border");
        document.getElementById("profileBio").classList.remove("border-danger");
        document.getElementById("profileName").classList.remove("border");
        document.getElementById("profileName").classList.remove("border-danger");

        //fetch to update 
        await fetch("http://localhost:5052/api/profile/update", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "name": document.getElementById("profileName").value,
                "bio": document.getElementById("profileBio").value,
                "email":document.getElementById("profileEmail").value,
                "mobile":"" ,
                "avatar": "https://cdn-icons-png.flaticon.com/512/2490/2490505.png",
                "PhoneNumber": document.getElementById("ProfilePhoneNumber").value,
                "facebookLink": document.getElementById("fbLink").value, 
                "linkinLink":document.getElementById("linkLink").value,
                "InstaLink":document.getElementById("instaLink").value,
                "myListingProduct" :[]
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    


    // <li><a class="btn"><u><b>More Requests</u></b></a></li>
}
function listingData(data){
    console.log(data.length)
    if(data.length > 0 ){
        data.forEach(element => {
            const li = document.createElement('li');
            li.classList.add("list-group-item");
            li.innerHTML = ` Product Name: ${element.name}`
            document.getElementById("listingProduct").appendChild(li);
        })
    }
    else{
        const li = document.createElement('p');
        li.classList.add("list-group-item");
        li.innerHTML = "There is no Listing yet"
        document.getElementById("listingProduct").appendChild(li);

    }

}






