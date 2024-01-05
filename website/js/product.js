console.dir('hello')

let continer=document.querySelector(".container");
let url ="https://fakestoreapi.com/products";

async function getData(){
   let result = await fetch(url);
   let data=  await result.json();
   data.forEach(ele=>{
    continer.innerHTML +=`
        <div class="container">
    <form action=""></form>

            <img src="${ele.image}" alt="">
            <div class="title">
            <p> Title : ${ele.title.slice(0,15)}</p>
            </div>
            <div class="price">
            <h2>Price : ${ele.price} Rs</h2>
            </div>
            <div class="description">
            <span>Description : ${ele.description.slice(0,20)}</span>
            </div>
            <div class="sub">
            <input type="submit" value="Add To Cart" onclick="getId(${ele.id})">
            </div>
            </form>
        </div>
   
    `;
   })
};

getData();

let arr=[];
function getId(id){
    id=Number(id);
    arr.push(id);
   localStorage.setItem(1,arr);
}

 console.log(arr)
