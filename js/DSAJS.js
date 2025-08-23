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



  let me=["pen","lens","glass"];
  function myRandomItem(array){
 let item=array;
for(let i=0;i<item.length;i++){
   
    console.log(item[i])
}
  }
  myRandomItem(me);

  
  let you=["pen","lens","glass"];
  function myRandomItem(array){

for(let i=0;i<array.length;i++){
   let us=Math.random(array);
   console.log(us);
   
}
  }
  myRandomItem(me);


  