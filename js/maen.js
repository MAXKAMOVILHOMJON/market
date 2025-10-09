let pejak = document.querySelector('#aksiya')
let Newitems = document.querySelector('#items')
let before = document.querySelector('#before')
let Art = document.querySelector("#articles")
let fitpoduk = products.filter((el) => el.discount > 0)
let tor = fitpoduk.slice(fitpoduk.length - 4, fitpoduk.length)
let newi = products.slice(products.length - 4, products.length)


tor.map((el) => {
    pejak.innerHTML += `<div class="w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px] max-h-[443px] sm:max-h-[449px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
              <div class="relative w-full">
                  <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;" src="${el.images[0]}" alt="">
              <p class="text-[white] absolute left-[10px] bottom-[10px] px-[8px] py-[4px] bg-[#FF6633] rounded-[4px]">-${el.discount}%</p>
              <img style="width: 29px; height: 28px;" class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer" src="./assets/images/articles/Frame 211.png" alt="">    
              </div>
              <div class="p-[8px] w-full">
              <div class="flex justify-between"><h1 class="text-[18px] font-[700]">${el.price * (100 - el.discount) / 100}₽</h1><h2 class="text-[16px] font-[400] text-[#606060] line-through decoration-pink-500">${el.price}₽</h2></div>
              <div class="flex justify-between"><p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p><p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p></div>
              <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px]">${el.description}</p>
              <span class="flex pb-[10px] space-x-1"></span>
              <button class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В корзину</button>
           </div>
          </div>

`
});
newi.map((el) => {
    Newitems.innerHTML += `<div class="w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px] max-h-[443px] sm:max-h-[449px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                 <div class="relative w-full">
                     <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;" src="${el.images[0]}" alt="">
                    <img style="width: 29px; height: 28px;" class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer" src="./assets/images/articles/Frame 211.png" alt="">    
                 </div>
                 
                 <div class="p-[8px] w-full">
                 <div class="flex justify-between"><h1 class="text-[18px] font-[700]">${el.price * (100 - el.discount) / 100}₽</h1></div>
                 <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px]">${el.description}</p>
                 <span class="flex pb-[10px] space-x-1"></span>
                 <button class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В корзину</button>
              </div>
             </div>
   
   `
});

newi.map((el) => {
    before.innerHTML += `<div class="w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px] max-h-[443px] sm:max-h-[449px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                 <div class="relative w-full">
                     <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;" src="${el.images[0]}" alt="">
                    <img style="width: 29px; height: 28px;" class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer" src="./assets/images/articles/Frame 211.png" alt="">    
                 </div>
                 
                 <div class="p-[8px] w-full">
                 <div class="flex justify-between"><h1 class="text-[18px] font-[700]">${el.price * (100 - el.discount) / 100}₽</h1></div>
                 <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px]">${el.description}</p>
                 <span class="flex pb-[10px] space-x-1"></span>
                 <button class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В корзину</button>
              </div>
             </div>
   
   `
});

Articles.map((el) => {
    Art.innerHTML += ` <div
            class=" w-full max-w-475   rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300  ">
            <div><img src="${el.images}" alt=""> </div>
            <p class="mx-3 my-3">${el.date}</p>
            <h1 class="mx-3 my-3  text-2xl">${el.name}</h1>
            <p class="mx-3 my-3">${el.description}</p>
              <button
                class=" gap-[15px] bg-green-100 max-w-[150px]  w-full h-[40px] cursor-pointer items-center p-[8px] text-[green] rounded-[4px]  mx-3 my-4 hover:bg-green-400 hover:text-[#FFFFFF]">
               Подробнее
                </button>        
          </div>  `

});

