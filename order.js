
var productName = '';
var prodHeader = '';
var temp = '';
var filterOrder= '';
var uniqueOrderList;
var finalObj =[] ;

function orderPage() {
    document.getElementById('order').style.display ='block';
    document.getElementById('product').style.display ='none';
    document.getElementById('orderList').style.display ='none';

temp = products;
prodHeader = ` <option value="" disabled selected>Select Product</option>`;
temp.forEach(element => {
    productName +=`<option>
    ${element.prodname}
    </option>`
    
});

document.getElementById('productDropDown').innerHTML =prodHeader+ productName;



var productName = '';
var prodHeader = '';
}


  


function addOrder() {

    var netAmount = '';
    var tableValue = '';
    var product = document.getElementById("productDropDown").value;
    var quantity = document.getElementById("quantity").value;
    var addOrderObj ='';


if(product && quantity) {

    addOrderObj =  products.find(element =>{
        return element.prodname == product
     })
     
     if(addOrderObj && addOrderObj!=undefined) {
         var q = JSON.parse(quantity)
     var p = Number(addOrderObj['price'])
     var str =(addOrderObj['offer'])
     var o = JSON.parse(str.substring(0, str.length - 1))
     var saving = (p*q*o)/100;
     netAmount = p*q - saving;
     
     addOrderObj['total'] =netAmount;
     addOrderObj['quan']=q;
     
     finalObj.push(addOrderObj)
     
      uniqueOrderList = Array.from(new Set(finalObj.map(a => a.prodname)))
      .map(id => {
        return finalObj.find(a => a.prodname === id)
      })
     
     
         uniqueOrderList.forEach(k=>{
                tableValue +=`<tr class="empInsideOrder"  >
                <td>${k.prodcode}</td>
                <td>${k.prodname}</td>
                <td>${k.price}</td>
                <td>${k.quan}</td>
                <td>${k.offer}</td>
                <td>${k.total}</td>
                <td><button value="${k.prodcode}" onclick="removeOrder(this)">Remove</button></td>
                </tr>`
            })
     
     
     document.getElementById('addOrderTable').innerHTML = tableValue;
     
     
     } else{
         return;
     }
     
} else {
    return;
}

 document.getElementById("productDropDown").value = '';
 document.getElementById("quantity").value = '';

}




function removeOrder(event) {
    var orderafterRemove = '';


     document.getElementById('addOrderTable').innerHTML = '';

    let x = event.value;
  

var r = finalObj.findIndex(e=>{
   return e.prodcode==x
})


finalObj.splice(r,1)




finalObj.forEach(k=>{
        orderafterRemove +=`<tr class="empInsideOrder"  >
        <td>${k.prodcode}</td>
        <td>${k.prodname}</td>
        <td>${k.price}</td>
        <td>${k.quan}</td>
        <td>${k.offer}</td>
        <td>${k.total}</td>
        <td><button value="${k.prodcode}" onclick="removeOrder(this)">Remove</button></td>
        </tr>`
    })


document.getElementById('addOrderTable').innerHTML = orderafterRemove;
console.log(uniqueOrderList,'b');
console.log(finalObj,'a');
objectForOrder = finalObj;


}


