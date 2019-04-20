var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message, inRoom) {
    if (inRoom) {
      if (message.text && massage.roomname === inRoom) { 
        let $message = $('<div class="message"</div>');
        let $user = $('<h1 class=user></h1');
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
        $('#chats').prepend($message);
        if (message.roomname) {
          Rooms.list.add(message.roomname);
          Rooms.updateRooms();
        }
      }
    }
    if (message.text) { 
      let $message = $('<div class="message"</div>');
      let $user = $('<h1 class=user></h1');
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
      $('#chats').prepend($message);
      if (message.roomname) {
        Rooms.list.add(message.roomname);
        Rooms.updateRooms();
      }
    }
  }
};