$('form').on('submit', function(event){
    event.preventDefault();
     $.ajax({
      type: 'POST',
      url: '/query',
      data: $("form").serialize(), 
      //or your custom data either as object {foo: "bar", ...} or foo=bar&...
      success: function(response) {
        console.log(response);
      },
    });
});
