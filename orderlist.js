var orderlistObj = '';
var x = '';

function orderListPage() {
    document.getElementById('orderList').style.display ='block';
    document.getElementById('order').style.display ='none';
    document.getElementById('product').style.display ='none';
    var temp ='';
    var temp2 = '';
temp = orderList;
temp2 = temp;

console.log(temp,'mnkk');


temp2.forEach(element => {
 
    
   orderlistObj += `<div>
   Customer Name:${element.custname},
   Mobile:${element.mobile},
   Location:${element.location},
   Delivery Slot:${element.slot},
   Value:${element.value},
   Item:${(element.items).length}
   <div class="container">
   <table class="table ">
   <tr class="innerHeaderOrder">
   <td>Code </td><td>Name  </td><td> Price </td>  <td>Quantity </td><td>Discount</td><td>Net Amount </td>
   
    </tr>
   
 
 
    ${element['items'].map(e => {
      
       return x =`<tr>
        <td>${e.prodcode}</td>
        <td>${e.quantity}</td>
        <tr>`
       
       }).join(' ')}
  

       </table>

   </div>
   </div>`
})
        document.getElementById('orderView').innerHTML = orderlistObj;

        
}
