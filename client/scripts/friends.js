var Friends = {
  list: new Set(),

  initialize: function() {
    $(document).on('click', '.user', function(event) {
      var username = event.target.innerHTML;
      console.log(username);
      Friends.toggleStatus(username);
      Friends.list.add(username);
      $('#chats').empty();
      App.fetch(()=>{});
    });
  }, 

  toggleStatus: function(friend) {
    if (friend !== App.username) {
      //add class 'friend' to clicked username container
      console.log(friend);
      $(`.${friend}`).addClass('friend');
			
      var $div = $('<div class="accepted"></div>').text(friend);
      $('#friendBox').prepend($div);
    }
  }

};