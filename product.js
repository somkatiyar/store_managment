


function onLoad() {
productTableContent = '';
tempStorage = products;
}
var productTableContent;
var temp = '';
var tempStorage = '';


function showProducts() {
  document.getElementById('product').style.display ='block';
  document.getElementById('order').style.display ='none';
  document.getElementById('orderList').style.display ='none';
  temp = tempStorage;
 
 if(temp) {

  temp.forEach(element => {
    productTableContent += '<tr class="empInside"><td>'+element.prodcode+'</td><td>'+element.prodname+'</td><td>'+element.price+'</td><td>'+element.category+'</td><td>'+element.offer+'</td></tr>'
      });
   document.getElementById('productListTableInner').innerHTML = productTableContent;
   tempStorage = '';
 } else{

 }

}
