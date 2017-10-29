


$ (document).ready(function(){
    // $( "#6-rolls" ).click(function () { // bind handler for click event

     // $('#button1').click(function(){
     //    alert($('#combo :selected').text());
     //    var topOfPage = $(".top-of-page").text();
     //    var selectedBun = $(".selected-buns").attr("src", "images/packs/6pack.jpg");
     //    $(".top-of-page").text(topOfPage + " 6-Pack");
     //    });

      $( "#1-package" ).click(function () { // bind handler for click event
        var topOfPage = $(".top-of-page").text();
        var selectedBun = $(".selected-buns").attr("src", "images/packs/1pack.png");
        $(".top-of-page").text("BIRTHDAY CAKE BUN BUN");

});
      $( "#6-package" ).click(function () { // bind handler for click event
        var topOfPage = $(".top-of-page").text();
        var selectedBun = $(".selected-buns").attr("src", "images/packs/6pack.jpg");
        $(".top-of-page").text("BIRTHDAY CAKE BUN BUN 6-Pack");
});
        $( "#12-package" ).click(function () { // bind handler for click event
        var topOfPage = $(".top-of-page").text();
        var selectedBun = $(".selected-buns").attr("src", "images/packs/12pack.jpg");
        $(".top-of-page").text("BIRTHDAY CAKE BUN BUN 12-Pack");


    });

    $(".itemCount").text(getCart().length)







    function getCart() {
        if (localStorage.cart == undefined) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem('cart'));
    }

    function saveCart(items){
        localStorage.setItem('cart', JSON.stringify(items));
    }


    function add(item) {
        cart = getCart();
        cart.push(item);
        $(".itemCount").text(cart.length)
        saveCart(cart);
    }



    function cartDraw(){

      cart = getCart();
      f = ``;

      for (var i = 0; i < cart.length; i++) {

          f += `<div class="section group">
                  <section class="col span_3_of_12" >
                      <a href="birthday-cake.html"><img src="images/flavors/birthday-cake.png" alt="birthday cake bun" class="selected-buns"></a>
                  </section>
                  <section class="col span_3_of_12" >
                      <p>
                          ${cart[i].name}
                          <br>
                          Other Flavors: ${cart[i].otherFlavors}
                          <br>
                          #34345568903
                          <br>
                          ${cart[i].quanity}
                          <br>
                          </p>
                          <button data-index="${i}" class="delete">Remove From Cart</button>


                  </section>
                  <section class="col span_3_of_12" >
                  </section>
                  <section class="col span_3_of_12" >
                      <p>
                          $3.99
                      </p>
                  </section>

              </div>
            `
      };
      $('#drawCart').html(f);

      $(".itemCount").text(cart.length)

      $('.delete').click(function(){
        i = $(this).data('index');
        var cart = getCart();
        cart.splice(i,1);
        saveCart(cart);
        window.location.reload();
      });

    }

    cartDraw();


    $("#addToCart").click(function() {
        var otherFlavors = ''


        $('input[type=checkbox]:checked').each(function(val) {
            console.log(this.name);
            otherFlavors += this.name
        })
        var item = $('.top-of-page').text();
        var quantity = $('#quantity').find(":selected").text();


        add({name: item, otherFlavors: otherFlavors, quantity: quantity});
    });









});

