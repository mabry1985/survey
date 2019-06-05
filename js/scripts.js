$(document).ready(function(){
  $("input, select, button").hover(function(){
    $(this).addClass('animated pulse');
});

$("input, select, button").mouseout(function(){
    $(this).removeClass('animated pulse');
})

  $("#formOne").submit(function(event){
    $( "h2" ).animate({
    width: "70%",
    color: '#39DF55',
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px",
  }, 1500 );
    var name = $("input#name").val();
    var favFood = $("#favFood").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var color = $("#color").val();
    var born = $("#born").val();

    $(".output").html(name + "<br>" + favFood +"<br>" + gender +"<br>" + color + "<br>" + born);


    event.preventDefault();
  })

  $("input").focus(function(){
    $( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
  })
})
