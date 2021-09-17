$(".cart_text_quantity").html("Ksh. 0");
$(".cart_quantity").html("0");
$("#cart_form").submit(function(e) {
    e.preventDefault();
});
var cartData = [];
$.getJSON('products.json', function(data) {
    var htm = "";
    for (var i =0; i<data.length; i++){
        var oneprod = data[i];
        var thisprod = oneprod;
        htm += '<div class = "cart-item"><img src = "images/menu/4.jpg" alt = "product image"><div class = "cart-item-info"><h3 class = "cart-item-name">Vegan Fillet</h3><span class = "cart-item-category">meal</span><span class = "cart-item-price">Ksh 1500</span></div><button type = "button" class = "cart-item-del-btn"><i class = "fas fa-times"></i></button></div>';

    }
    $("#product_row").append(htm);
});
