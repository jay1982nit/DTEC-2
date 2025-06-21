/**********************************************************/
// Rental.js
// written by Nityaa Kansara
// Term 2 2025
/**********************************************************/


/**************************************************************************FUNCTION  OPENFORM******************************************************************************/
 // document.getElementById("SelMsg").style.display = "block";
//  document.getElementById("JewelCat").style.display = "block"; 
 function openForm() {
  document.getElementById("popupForm").style.display = "block";

}
/**************************************************************************FUNCTION  SUBMIT FORM***************************************************************************/
function SubmitForm(event) 
{
  if (event) event.preventDefault();  // Prevent form from submitting
  let isValid = true;
  /**********validate First Name***********************/
  let firstName1 = document.getElementById("Firstnamebox").value.trim();
  console.log("First name is:", firstName1);
   // let errorMessage1= document.getElementById("errorMessage1box");
    if (firstName1 === null || firstName1 === "" || firstName1 === " ")  //  That is the code that gives an error in an alert if you have not entered anything, Nityaa to update 
    {
       errorMessage1box.innerHTML ="Invalid, you must enter a valid name";
      isValid = false;
    } 
    else if (!isNaN(firstName1))
    {
      errorMessage1box.innerHTML = "Name must contain only letters.";
      isValid = false;
    }
    else if (/\d/.test(firstName1)) 
    {
    errorMessage1box.innerHTML = "Name must not contain numbers.";
    isValid = false;
    } 
    else if (!/^[A-Z]/.test(firstName1))
    {
      errorMessage1box.innerHTML = "The first letter of the name must be a capital letter.";
      isValid = false; // Prevent form submission
    }
    else 
    {
      errorMessage1box.innerHTML = ""; // Clear any old messages
    } 
   /***********validate last Name***************************/ 
  let  lastName1= document.getElementById("Lastnamebox").value.trim();

  console.log("Last name is:", lastName1);  // Optional: just to check
      if (lastName1 === null || lastName1 === "" || lastName1 === " ")  //  That is the code that gives an error in an alert if you have not entered anything, Nityaa to update 
    {
       errorMessage2box.innerHTML ="Invalid, you must enter a valid name";
      isValid = false;
    } 
    else if (!isNaN(lastName1))
    {
      errorMessage2box.innerHTML = "Name must contain only letters.";
      isValid = false;
    }
    else if (/\d/.test(lastName1)) 
    {
    errorMessage2box.innerHTML = "Name must not contain numbers.";
    isValid = false;
    } 
    else if (!/^[A-Z]/.test(lastName1))
    {
      errorMessage2box.innerHTML = "The first letter of the name must be a capital letter.";
      isValid = false; // Prevent form submission
    }
    else 
    {
      errorMessage2box.innerHTML = ""; // Clear any old messages
    } 
   /************validate age****************************/
  
  const MINAGE = 18;
  const MAXAGE = 100;
  let userAge ;
  let age = document.getElementById("Agebox").value.trim();
  console.log ("this is the type of age=", typeof(age));
  userAge = Number(age)
  console.log ("this is the type of age=", typeof(userAge));
    if (userAge == null || userAge == "" || userAge == " " )
    {
      errorMessage3box.innerHTML  = "invalid input";
      isValid = false;
    }
    else if  (isNaN (userAge))
    {
      errorMessage3box.innerHTML  = "Please enter numbers only.";
      isValid = false;
    }
    else if (userAge < MINAGE || userAge > MAXAGE)
    {
      errorMessage3box.innerHTML  = "you must enter a vaild age between " + MINAGE + " and " + MAXAGE;
      isValid = false;
    }
    else  
    {
      errorMessage3box.innerHTML = ""; // All good
    } 

  console.log ("you are: " + userAge);

  if (isValid) 
  {
      document.getElementById("popupForm").style.display = "none";
      document.getElementById("rentcontainer").style.display = "none";
      WelMsgbox.innerHTML="Kia Ora " + firstName1;
      document.getElementById("WelMsg").style.display = "block";
      WelMsg.innerHTML="Let us help you select your dream jewellery. Select from the below categories (Nityaa to update)";
      document.getElementById("JewelContainer").style.display = "flex";
    //  displayJewelGallery(); 
  }
  return false; // Ensure form does not reload page
} // submit form ending 
/*******************************************************************************FUNCTION  CLOSE FORM*************************************************************************************/
function closeForm() 
{
  Firstnamebox.value="";
  Lastnamebox.value="";
  Agebox.value="";
  document.getElementById("popupForm").style.display = "none";
}
/**************************************************************************ARRAY OF JEWERLY CATEGORIES******************************************************************************/
// which category is clicked in Jewel and Material container

var JewelId = ""; // Variable to store the clicked image's ID
var MaterialId="";
var ComboId="";
const jewelContainer = document.getElementById("JewelContainer"); // Get the JewelContainer
const materialContainer = document.getElementById("MaterialContainer"); // Get the MaterialContainer
const JCatimages = jewelContainer.getElementsByTagName("img"); // Add event listener to each image inside the Jewel container
const MCatimages = materialContainer.getElementsByTagName("img"); // Add event listener to each image inside the Material container

for (let i = 0; i < JCatimages.length; i++) 
{
  JCatimages[i].addEventListener("click", function() 
  {
    JewelId = this.id;
    console.log("Clicked Jewel ID", JewelId); 
    if (JewelId !== "")
    {
      console.log("Inside if loop:", JewelId); 
      document.getElementById("JewelContainer").style.display = "none";
      document.getElementById("MaterialContainer").style.display = "flex";
      WelMsg.innerHTML="Select from the below materials (Nityaa to update)";
      for (let j = 0; j < MCatimages.length; j++) 
      {
        console.log("Clicked Jewel ID 2", JewelId); 
        MCatimages[j].addEventListener("click", function() 
        {
          //console.log("Clicked Jewel ID 3", JewelId);
          MaterialId = this.id;
          console.log("Clicked Material ID", MaterialId); 
          
          ComboId = JewelId + "_" + MaterialId;
          console.log("Key ID", ComboId); 
          localStorage.setItem("ComboId", ComboId);
          document.getElementById("MaterialContainer").style.display = "none";
          
          const matchedProduct = Products.find(product => product.key === ComboId);
          if (matchedProduct) 
            {
              WelMsg.innerHTML = "Select from the final products (Nityaa to update)";
              const finalContainer = document.getElementById("FinalContainer");
              finalContainer.style.display = "flex";
              finalContainer.innerHTML = ""; // Clear any previous content

              // Create and display product
              const productImg = document.createElement("img");
              productImg.src = matchedProduct.image;
              productImg.alt = matchedProduct.name;

              const productName = document.createElement("p");
              productName.textContent = matchedProduct.name;

              const productPrice = document.createElement("p");
              productPrice.textContent = "$" + matchedProduct.price;

              // Append to container
              finalContainer.appendChild(productImg);
              finalContainer.appendChild(productName);
              finalContainer.appendChild(productPrice);
            } 
            else 
            {
              console.log("No product found for key:", ComboId);
            }

        });
      }
      
   }
  });
}


 var Products = 
 [
    { key: "Ear_YG", category: "Ear", material: "YG",name: "Gold earrings", image: "images/gold earrings.jpg", price: 80, market_price: 80 },
    { key: "Ear_RG", category: "Ear", material: "RG", name: "Rose earrings", image: "images/rose gold earrings.jpg", price: 60, market_price: 80 },
    { key: "Ear_WG", category: "Ear", material: "WG", name: "White Gold earrings", image: "images/white gold earrings.jpg", price: 80, market_price: 80 },
    { key: "Ear_HE", category: "Ear", material: "HE", name: "High End earrings", image: "images/gold earrings.jpg", price: 60, market_price: 80 },        
    { key: "Ring_YG", category: "Ring", material: "YG", name: "Gold rings", image: "images/gold earrings.jpg", price: 80, market_price: 80 },
    { key: "Ring_RG", category: "Ring", material: "RG", name: "Rose rings", image: "images/rose gold earrings.jpg", price: 60, market_price: 80 },
    { key: "Ring_WG", category: "Ring", material: "WG", name: "White Gold rings", image: "images/white gold earrings.jpg", price: 80, market_price: 80 },
    { key: "Ring_HE", category: "Ring", material: "HE", name: "High End rings", image: "images/gold earrings.jpg", price: 60, market_price: 80 },        
    { key: "Bracelet_YG", category: "Bracelet", material: "YG", name: "Gold bracelet", image: "images/gold earrings.jpg", price: 80, market_price: 80 },
    { key: "Bracelet_RG", category: "Bracelet", material: "RG", name: "Rose bracelet", image: "images/rose gold earrings.jpg", price: 60, market_price: 80 },
    { key: "Bracelet_WG", category: "Bracelet", material: "WG", name: "White Gold bracelet", image: "images/white gold earrings.jpg", price: 80, market_price: 80 },
    { key: "Bracelet_HE", category: "Bracelet", material: "HE", name: "High End bracelet", image: "images/gold earrings.jpg", price: 60, market_price: 80 },        
    { key: "NecklaceSet_YG", category: "NecklaceSet", material: "YG", name: "Gold Necklace set", image: "images/gold earrings.jpg", price: 80, market_price: 80 },
    { key: "NecklaceSet_RG", category: "NecklaceSet", material: "RG", name: "Rose Necklace set", image: "images/rose gold earrings.jpg", price: 60, market_price: 80 },
    { key: "NecklaceSet_WG", category: "NecklaceSet", material: "WG", name: "White Gold Necklace set", image: "images/white gold earrings.jpg", price: 80, market_price: 80 },
    { key: "NecklaceSet_HE", category: "NecklaceSet", material: "HE", name: "High End Necklace set", image: "images/gold earrings.jpg", price: 60, market_price: 80 }        
 ];





