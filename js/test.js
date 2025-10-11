let Allxx = document.querySelector("#product");
let newi = products.slice(products.length - 8, products.length)

newi.map((el) => {
    Allxx.innerHTML += `<div class="w-full   max-w-[160px] sm:max-w-[204px]  w-full  w-[260px] sm:w-[304px] md:w-[324px]   xl:max-w-[472px] max-h-[443px] sm:max-h-[449px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300 my-5" >
             <div class="relative w-full">
                 <img class="block w-full h-[100px] object-contain" style="max-width:324px; height:200px;" src="${el.images[0]}" alt="">
             <p class="text-[white] absolute left-[10px] bottom-[10px] px-[8px] py-[4px] bg-[#FF6633] rounded-[4px]">-${el.discount}%</p>
             <img style="width: 29px; height: 28px;" class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer" src="../assets/images/articles/Frame 211.png" alt="">    
             </div>
             
             <div class="p-[8px] w-full">
             <div class="flex justify-between"><h1 class="text-[18px] font-[700]">${el.price * (100 - el.discount) / 100}₽</h1><h2 class="text-[16px] font-[400] text-[#606060] line-through decoration-pink-500">${el.price}₽</h2></div>
             <div class="flex justify-between"><p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p><p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p></div>
             <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px]">${el.description}</p>
               ${el.rating ===5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > </span>
             ` : el.rating===4.5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/OIP.png" alt="" class="max-w-10 max-h-10" > </span>
             `:el.rating===4 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                 </span>
             `  : el.rating===3.5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/OIP.png" alt="" class="max-w-10 max-h-10" > </span>
             `: el.rating===3 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
             </span>
             `: el.rating===2.5 ?`<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
                <img src="../assets/images/articles/OIP.png" alt="" class="max-w-10 max-h-10" >
                </span>
             `: el.rating===2 ?`<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
                <img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" >
               >
               </span>
             `: el.rating===1.5  ?`<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
                <img src="../assets/images/articles/OIP.png" alt="" class="max-w-10 max-h-10" >
                </span>
             `: el.rating===1 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/00.jpg" alt="" class="max-w-10 max-h-10" > 
              </span>
             `: `` } 
             <button class="cursor-pointer w-[258px] w-full h-[40px] my-2 rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300"><a href="./test.html?id=${el.id}">В корзину</a></button>
          </div>
         </div>

`
});