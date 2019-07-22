
$(function(){

  function buildHTML(message){
    var content = message.content ? `${message.content}` : "";
    var image = message.image ? `${message.image}` : "";
    var html = 
              `<div class='message'>
                   <div class='message-username' data-message-id="${message.id}">
                   ${message.name}
                   </div>
                   <div class='message-date'>
                   ${message.created_at}
                   </div>
                   <div class='message-text'>
                   ${content}
                   <img src="${image}" class="lower-message__image" alt="">
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
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    .always(() => {
      $(".sendbtn").removeAttr("disabled");
    });
  })
})