$(document).ready(function()  {
  $("#blanks form").submit(function(event) {

    var blanks = ['person1','person2','animal','exclamation','verb','noun'];

    blanks.forEach(function(blank){
      var userInput = $('#blanks #' + blank).val();
      alert('#blanks #' + blank);
      $('#story' + ' .' + blank).text(userInput);
    });
    // var inputperson1 = $("input#person1").val();
    // var inputperson2 = $("input#person2").val();
    // var inputanimal = $("input#animal").val();
    // var inputexclamation = $("input#exclamation").val();
    // var inputverb = $("input#verb").val();
    // var inputnoun = $("input#noun").val();
    //
    // $(".person1").text(inputperson1);
    // $(".person2").text(inputperson2);
    // $(".animal").text(inputanimal);
    // $(".exclamation").text(inputexclamation);
    // $(".verb").text(inputverb);
    // $(".noun").text(inputnoun);

    $("#story").show();

    event.preventDefault();
  });
});
