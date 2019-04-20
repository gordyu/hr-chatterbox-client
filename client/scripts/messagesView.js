var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.refreshButton').on('click', () => {
      $('#chats').empty();
      console.log('downloading new content...');
      App.fetch(()=>{
        console.log('download complete.');
      }, Messages.currentMessage.roomname);
    });
  },

  render: function() {
  },

  renderMessage: function(message, inRoom, order = 'prepend') {
    let $message = $('<div class="message"</div>');
    let $user = $('<a href=# class=user></a>');
    let $room = $('<h2 class=room></h2>');
    let $content = $('<p class=content></p>');
    if (message.username) {
      $user.text(message.username.replace(/%20/g, ' '));
      $message.append($user);
    }
    $room.text(message.roomname); 
    $message.append($room);
    $content.text(message.text);
    $message.append($content);
    if (Friends.list.has(message.username)) {
      $message.css('background-color', 'green');
    }
    $('#chats')[order]($message);
    if (!Rooms.list.has(message.roomname) && message.roomname) {
      Rooms.list.add(message.roomname);
      Rooms.updateRooms();
    }
  }
};