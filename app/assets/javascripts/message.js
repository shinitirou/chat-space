
$(function(){

  function buildHTML(message){
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

  var reloadMessages = function() {

    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var last_message_id = $('message').last().data('message-id')
    var url= "https://groups/"+ groupId +"/api/messages"
    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: url,
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })

    .done(function(messages) {

      var insertHTML = '';
      messages.forEach(function(message){
        var insertHTML = buildHTML(message)
        $('.message').append(insertHTML).animate({scrollTop: $('.right__main')[0].scrollHeight}, 'fast');
      end
      console.log('success');
      })
    })      
    .fail(function() {
      console.log('error');
    });
  } 
   setInterval(reloadMessages, 5000);
});

