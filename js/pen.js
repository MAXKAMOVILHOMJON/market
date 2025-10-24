let srt = document.querySelector("#sspot");
let id = new URLSearchParams(window.location.search).get('id');


id = Number(id);

let pen = products.filter((el) => el.id === id);



pen.map((el) => {
  srt.innerHTML += `<div>
           <h1>${el.name}</h1>
        <ol class="grid grid-cols-4  gap-[10px] w-[500px]">
        <li>арт. 371431</li>
        <li>   ${el.rating ===5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > </span>
       ` : el.rating===4.5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star (1).png" alt="" class="max-w-10 max-h-10" > </span>
       `:el.rating===4 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
           </span>
       `  : el.rating===3.5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star (1).png" alt="" class="max-w-10 max-h-10" > </span>
       `: el.rating===3 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
       </span>
       `: el.rating===2.5 ?`<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
          </span>
       `: el.rating===2 ?`<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
          <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
         >
         </span>
       `: el.rating===1.5  ?`<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
          <img src="../assets/images/articles/star (1).png" alt="" class="max-w-10 max-h-10" >
          </span>
       `: el.rating===1 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
        </span>
       `: `` } </li>
        <li class="flex gap-[5px]"><img class="w-[20px] h-[20px]" src="../assets/images/articles/share-2.png" alt="mkl" srcset="">Поделиться </li>
        <li class="flex gap-[5px]"><img class="w-[20px] h-[20px]"  src="../assets/images/articles/heart.png" alt="lk" srcset=""> В избраное</li>
      </ol> 
    </div>
        <div class="grid grid-cols-2  my-[20px]">
          <div class="flex items-center gap-[20px]"> 
               <div class="flex flex-col gap-[5px] " >
               <img class="w-[100px] object-cover" src="${el.images[0]}" alt="">
               <img class="w-[100px] object-cover" src="${el.images[1]}" alt="">
               <img class="w-[100px] object-cover" src="${el.images[2]}" alt="">
               <img class="w-[100px] object-cover" src="${el.images[3]}" alt=""> 
               </div>  
               <img class="h-full" src="${el.images[1]}" alt="">   
          </div> 
          <div>
            <div class="p-[8px] w-full">
              <div class="flex justify-between"><h1 class="text-[18px] font-[700]">${el.price * (100 - el.discount) / 100}₽</h1><h2 class="text-[16px] font-[400] text-[#606060] line-through decoration-pink-500">${el.price}₽</h2></div>
              <div class="flex justify-between"><p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p><p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
              </div>
      
              <button class="cursor-pointer max-w-[279px] w-full h-[60px] ml-[100px]  my-2 pb-[20px] px-[20px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] text-center  font-[400] font-rubik bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300 "><a href="./Basket.html"><img class="w-[30px] absolute " src="../assets/images/articles/shopping-cart.png" alt=""> В корзину</a></button>
              <div class="flex flex-col  gap-[10px]  my-[30px]">
               <div class="grid grid-cols-2 gap-[50px]"><h1>категория</h1> <h2>${el.category} </h2> </div>
               <div class="grid grid-cols-2 gap-[50px]"><h1>Страна производителя</h1> <h2>uzb</h2> </div>
               <div class="grid grid-cols-2 gap-[50px]"><h1>Упаковка</h1> <h2>${el.kg} </h2> </div>

              </div>

          </div>

        </div>
` 
  
  ;
});



