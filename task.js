const fruits = [
  {"item":"apple","type":"Fuji","weight":10,"pricePerKilo":"$3"},
  {"item":"orange","type":"Clementine","weight":6,"pricePerKilo":"$7"},
  {"item":"watermelon","type":"Nova","quantity":1,"pricePerItem":"$5"},
  {"item":"orange","type":"Navel","weight":6,"pricePerKilo":"$7"},
  {"item":"pineapple","type":"Queen","quantity":4,"pricePerItem":"$15"},
  {"item":"pineapple","type":"Pernambuco","quantity":3,"pricePerItem":"$12"},
  {"item":"apple","type":"Cameo","weight":6,"pricePerKilo":"$7"},
  {"item":"watermelon","type":"Trio","quantity":2,"pricePerItem":"$9"},
  {"item":"pineapple","type":"Red Spanish","quantity":3,"pricePerItem":"$9,99"},
  {"item":"watermelon","type":"Millionaire","quantity":2,"pricePerItem":"$7"},
  {"item":"orange","type":"Tangerine","weight":4,"pricePerKilo":"$4,99"},
  {"item":"apple","type":"Jazz","weight":4,"pricePerKilo":"$5"},
]
  function amountOfWatermelons() {
   let sum = 0;
  for (let i = 0; i < fruits.length; i++){
    if (fruits[i].item == "watermelon"){
       let amount = +fruits[i].quantity;
        sum = sum + amount;
       }
     }
        return sum ;
}
        console.log("Watermelons:", amountOfWatermelons())

function weightOfapples() {
   let num = 0;
  for (let i = 0; i < fruits.length; i++){
    if (fruits[i].item == "apple"){
       let mass = fruits[i].weight;
        num = num + mass;
       }
     }
        return num ;
}
        console.log("Weight:", weightOfapples())

  const fruitSort = fruits.sort (function(a,b){
      let item1 = a.item;
      let item2 = b.item;
        if (item1 < item2){
          return -1;
        }else if (item1 > item2){
      return 1;
      }
      return 0;
    })

  console.log (fruitSort);

const sortPrice = fruits.sort (function(a,b){
      let price1 = a.pricePerKilo || a.pricePerItem;
      let price2 = b.pricePerKilo || b.pricePerItem;
        price1 = +price1.replace(",",".").slice(1);
        price2 = +price2.replace(",",".").slice(1);
        if (price1 < price2){
          return -1;
        }else if (price1 > price2){
      return 1;
      }
      return 0;
      })
  console.log (sortPrice);

  const orangePrice = fruits.filter (function(item){
    return item.item == 'orange';
  })  

  const sortOrange = orangePrice.sort (function(a,b){
    let price1 = a.pricePerKilo;
    let price2 = b.pricePerKilo;
      price1 = +price1.replace(",",".").slice(1);
      price2 = +price2.replace(",",".").slice(1);
      if (price1 < price2){
          return -1;
        }else if (price1 > price2){
      return 1;
      }
      return 0;
  })
  console.log(`The cheapest orange type is: ${sortOrange[0].type}`);

    let costObject = {apple:0, orange:0, watermelon:0, pineapple:0}
   fruits.forEach(function(item){
      let price = item.pricePerKilo || item.pricePerItem;
      price = +price.replace(",",".").slice(1);
      let amount = item.weight || item.quantity;
        costObject[item.item] += price * amount;
   })
   console.log(`Apples - ${costObject.apple}, Pineapples - ${costObject.pineapple}, Watermelons - ${costObject.watermelon}, Oranges - ${costObject.orange}`);
  
function validation(){
  let flag = true;
    for (let i = 0; i < fruits.length; i++){
    let amount = fruits[i].weight || fruits[i].quantity;
    let price = fruits[i].pricePerKilo || fruits[i].pricePerItem;
    if (typeof fruits[i].item !== 'string'){
      flag = false;
      }
    if (typeof fruits[i].type !== 'string'){
      flag = false;
      }
    if (typeof amount !== 'number'){
      flag = false;
      }
    if (typeof price !== 'string'){
      flag = false;
      }
    if (price[0] !== '$'){
      flag = false;
      } 
    }
    if (flag == false){
      return ('validation failed');
      } else return ('validation complete');
    }
  console.log(validation());