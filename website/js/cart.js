// This code is belongs to Cart Web Page

// localStorage.clear()

let container1=document.querySelector("section");
let url ="https://fakestoreapi.com/products"

function get(){
    let getIdFromLocal = localStorage.getItem(1);
    let arr=getIdFromLocal.split(',');

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
        getData(arr[i]);
    }
}

get();
async function getData(id){
    let result = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data=  await result.json();

    console.log(data.id);

    container1.innerHTML +=`
     <div class="container1">
     <img src="${data.image}" alt="">
     <div class="title1">
     <h3>Title : ${data.title.slice(0,10)}</h3></div>
     <div class="price1">
     <h4>price : ${data.price}</h4>
     </div>
     <div class="description1">
     <p>Description : ${data.description.slice(0,20)}</p>
     </div>
     <div class="sub1">
     <button value="">❤️BUY❤️</button>
     </div>
 </div>
</form>
    
     `;
 };
    

// getData();
