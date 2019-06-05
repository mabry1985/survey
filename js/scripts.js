$(document).ready(function(){
  $("#formOne").submit(function(event){
    var name = $("input#name").val();
    var favFood = $("#favFood").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var color = $("#color").val();
    var born = $("#born").val();

    $(".output").html(name + "<br>" + favFood +"<br>" + gender +"<br>" + color + "<br>" + born);


    event.preventDefault();
  })
})
