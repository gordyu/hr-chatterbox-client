var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(room) {
    
  },

  renderRoom: function(message, room, order) {
    if (message.text && message.roomname === room) { 
      let $message = $('<div class="message"</div>');
      let $user = $('<a class=user></a>');
      let $room = $('<h2 class=room></h2>');
      let $content = $('<p class=content></p>');
      if (message.username) {
        $user.text(message.username.replace(/%20/g, ' '));
        $message.append($user);
      }
      $room.text(message.roomname); 
      $message.append($room);
      $content.text(message.text);
      if (Friends.list.has(message.username)) {
        $message.css('background-color', 'green');
      }
      $message.append($content);
      $('#chats')[order]($message);
    }
  },

};

