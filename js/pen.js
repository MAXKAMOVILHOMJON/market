let srt = document.querySelector("#sspot");
let id = new URLSearchParams(window.location.search).get('id');


id = Number(id);

let pen = products.filter((el) => el.id === id);



pen.map((el) => {
  srt.innerHTML += `<div class="pt-6">
       
    
    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
      <img src="${el.images[0]}" alt="Two each of gray, white, and black shirts laying flat." class="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden" />
      <img src="${el.images[1]}" alt="Model wearing plain black basic tee." class="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
      <img src="${el.images[2]}" alt="Model wearing plain gray basic tee." class="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
      <img src="${el.images[3]}" alt="Model wearing plain white basic tee." class="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4" />
    </div>

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">${el.name}</h1>
      </div>

      <!-- Options -->
      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <h2 class="sr-only">Product</h2>
        <p class="text-3xl tracking-tight text-gray-900">${el.price}</p>

        <!-- Reviews -->
        <div class="mt-6">
          <h3 class="sr-only">Reviews</h3>
          <div class="flex items-center">
            
         ${el.rating ===5 ? `<div class="flex items-center"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > </div>
         ` : el.rating===4.5 ? `<div class="flex items-center"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/OIP.png" alt="" class="max-w-10 max-h-10" > </div>
         `:el.rating===4 ? `<div class="flex items-center"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
             </div>
         `  : el.rating===3.5 ? `<div class="flex items-center"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/OIP.png" alt="" class="max-w-10 max-h-10" > </div>
         `: el.rating===3 ? `<div class="flex items-center"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
         </div>
         `: el.rating===2.5 ?`<div class="flex items-center"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/OIP.png" alt="" class="max-w-10 max-h-10" >
            </div>
         `: el.rating===2 ?`<div class="flex items-center"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
           >
           </div>
         `: el.rating===1.5  ?`<div class="flex items-center"> <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/OIP.png" alt="" class="max-w-10 max-h-10" >
            </div>
         `: el.rating===1 ? `<div class="flex items-center"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
          </div>
         `: `` } 
          </div>
        </div>
      <form class="mt-10">
          <!-- Colors -->
          <div>
            <h3 class="text-sm font-medium text-gray-900">discount</h3>

            <fieldset aria-label="Choose a color" class="mt-4">
             <p class="text-[white]  bg-[#FF6633] rounded-[4px]">-${el.discount}%</p>
            </fieldset>
          </div>

          <!-- Sizes -->
          <div class="mt-10">
           

            <fieldset aria-label="Choose a size" class="mt-4">
                  <div class="flex justify-between"><h1 class="text-[18px] font-[700]">${el.price * (100 - el.discount) / 100}₽</h1><h2 class="text-[16px] font-[400] text-[#606060] line-through decoration-pink-500">${el.price}₽</h2></div>
            </fieldset>
          </div>

          <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">Add to bag</button>
        </form>
      </div>
      </div>
        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <!-- Description and details -->
            <div>
              <h3 class="sr-only">Description</h3>
    
              <div class="space-y-6">
                <p class="text-base text-gray-900">${el.description}</p>
              </div>
            </div>
        </div>
      
       </div>
        </div>
    </div>` 
  
  ;
});
