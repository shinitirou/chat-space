
$(function(){

var buildHTML=function(message){
    var content = message.content ? `${message.content}` : "";
    var image = message.image ? `${message.image}` : "";
    var html = 
              `<div class='message' data-message-id="${message.id}">
                   <div class='message-username'>
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
      contentType: false,
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

  var reloadMessages = function() {
    var last_message_id = $('.message').last().data('message-id')
    var url= "api/messages"
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      data: {id: last_message_id}
    })

    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
        insertHTML = buildHTML(message)
        $('.right__main').append(insertHTML)
      })      

      $('.right__main').animate({scrollTop: $('.right__main')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    });
  } 
   setInterval(reloadMessages, 5000);
});

