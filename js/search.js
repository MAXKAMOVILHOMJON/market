let input = document.getElementById("input");
let card = document.getElementById("searchCard");

input.addEventListener("input" , function(e){
 let searchValue = e.target.value;

 if(searchValue ){
    card.classList.remove("hidden");
 }else{
    card.classList.add("hidden");
 };

let searchedProducts = products.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase())); 
 
card.innerHTML ="";  
 
 searchedProducts.length > 0 ?
  searchedProducts.map((el) => {
     card.innerHTML += ` <a href="./pen/test.html?id=${el.id}" class="flex border-[2px] rounded-[5px] p-[10px] gap-[20px]">
          <img src=${el.images[0]} alt="" width="80px" height="80px">
          <div class="flex flex-col justify-between  gap-[10px]">
            <h1>${el.name}</h1>
            <p class="line-clamp-[1] ">${el.description}</p>
          </div>
         </a>` 
          }) : card.innerHTML += ` <h1>topimadi</h1>`  



  } )