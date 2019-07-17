
$(function(){

  function buildHTML(comment){
    var html = `<div class='message'>
                   <div class='message-username'>
                   ${message.message-username}
                   </div>
                   <div class='message-date'>
                   ${message.message-date}
                   </div>
                   <div class='message-text'>
                   ${message.message-text}
                   </div>
                </div>`
    return html;
  }

  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.right__main').append(html)
      $('.content').val('')
    })
  })
})