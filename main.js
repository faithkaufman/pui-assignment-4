


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








    $("#addToCart").click(function() {


        var otherFlavrs = ''


        $('input[type=checkbox]:checked').each(function(val) {
            console.log(this.name);
            otherFlavrs += this.name
        })
        var item = $('.top-of-page').text();
        //get the quantity

        //get the flavors

        //set the local storage object as a string


        //update the cart nav (within local storage?)

        var quantity = $('#quantity').find(":selected").text();


        console.log(item);
        localStorage.setItem('', quantity);

    });







});

