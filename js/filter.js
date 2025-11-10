let filterCards = document.querySelector(".cards");
let like = JSON.parse(localStorage.getItem("likes") || "[]");
let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let filteredProductsData = products;

function filterProducts(content, data) {
  content.innerHTML = "";
  data.map((el) => {
    content.innerHTML += `
    <div
          class="w-full   max-w-[200px] sm:max-w-[250px]  w-full  w-[260px] sm:w-[304px] md:w-[324px]  xl:gap-[200px]  xl:max-w-[250px] max-h-[443px] sm:max-h-[449px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300 my-5"
        >
          ${
            like.find((item) => item.id === el.id)
              ? `
          <img
            onClick="removeToLike(${el.id})"
            class="w-[40px] h-[40px] cursor-pointer p-[3px] bg-[gray] rounded-[5px] absolute top-[20px] right-[20px]"
            src="../assets/images/like/minus-like.svg"
            alt=""
          />
          `
              : `
          <img
            onClick="addToLike(${el.id})"
            class="w-[40px] h-[40px] cursor-pointer p-[3px] bg-[gray] rounded-[5px] absolute top-[20px] right-[20px]"
            src="../assets/images/like/plus-like.svg"
            alt=""
          />
          `
          }
          <a href="../pages/single.html?id=${el.id}">
            <img
              src="${el.images[2]}"
              class="bg-[red] w-full h-[200px] object-cover"
              alt=""
            />
          </a>
          ${el.rating === 5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > </span>
         ` : el.rating === 4.5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star (1).png" alt="" class="max-w-10 max-h-10" > </span>
         `: el.rating === 4 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
             </span>
         `  : el.rating === 3.5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star (1).png" alt="" class="max-w-10 max-h-10" > </span>
         `: el.rating === 3 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
         </span>
         `: el.rating === 2.5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            <img src="../assets/images/articles/star (1).png" alt="" class="max-w-10 max-h-10" >
            </span>
         `: el.rating === 2 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
           >
           </span>
         `: el.rating === 1.5 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
            <img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" >
            </span>
         `: el.rating === 1 ? `<span class="flex pb-[10px] space-x-1"><img src="../assets/images/articles/star.png" alt="" class="max-w-10 max-h-10" > 
          </span>
         `: ``} 
        <div class="flex justify-between"><h1 class="text-[18px] font-[700]">${el.price * (100 - el.discount) / 100}₽</h1><h2 class="text-[16px] font-[400] text-[#606060] line-through decoration-pink-500">${el.price}₽</h2></div>
             <div class="flex justify-between"><p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p><p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p></div>
             <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px] line-clamp-2">${el.description}</p>
          ${
            cart.find((item) => item.id === el.id)
              ? `
          <div class="w-full grid grid-cols-3">
            <button
              onClick="decrease(${el.id})"
              class="bg-[red] flex p-[15px] rounded-[5px] items-center justify-center text-[18px] font-bold text-white"
            >
              -
            </button>
            <span
              class="bg-white flex p-[15px] items-center justify-center text-[18px] font-bold"
              >${cart.find((item) => item.id === el.id).numbers}</span
            >
            <button
              onClick="increase(${el.id})"
              class="bg-[green] flex p-[15px] rounded-[5px] items-center justify-center text-[18px] font-bold text-white"
            >
              +
            </button>
          </div>
          `
              : `
          <button
            onClick="addToCart(${el.id})"
            class="w-full p-[15px] bg-[orangered] text-[18px] font-bold text-white cursor-pointer rounded-[5px]"
          >
            Korzinaga qoshish</button
          >`
          }
        </div>
    `;
  });
}
filterProducts(filterCards, products);

input1.addEventListener("input", function (e) {
  let price = e.target.value;
  filteredProductsData = products.filter(
    (el) => el.price - (el.price * el.discount) / 100 > price
  );
  filterProducts(filterCards, filteredProductsData);
});

input2.addEventListener("input", function (e) {
  let price = e.target.value;
  console.log(filteredProductsData);
let filteredProductsData2;
  if (price === "") {
    filteredProductsData2 = products;
  } else {
    filteredProductsData2 = filteredProductsData.filter(
      (el) => el.price < price
    );
  }

  filterProducts(filterCards, filteredProductsData2);
});
