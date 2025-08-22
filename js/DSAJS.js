const store=["underarmbag","toutebag","bacpak"];
 function getMyBag(bag){
    for(let i=0;i<store.length;i++){
      if(store[i]===bag)
        {console.log(bag);
        }
    }
 }
 getMyBag("toutebag");


 const numbers=[1,2,3,4,5,6];
  let getElement= function number(arr,index){
     return arr[index];
  }
  console.log(getElement(numbers,0));