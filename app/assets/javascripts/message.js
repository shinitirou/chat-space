
$(function(){

  function buildHTML(message){
    var html = 
              `<div class='message'>
                   <div class='message-username'>
                   ${message.name}
                   </div>
                   <div class='message-date'>
                   ${message.created_at}
                   </div>
                   <div class='message-text'>
                   ${message.content}
                   
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
      $('.right__main').append(html).animate({scrollTop: $('.right__main')[0].scrollHeight}, 'fast');
      $('.content').val('')
    })
  })
})