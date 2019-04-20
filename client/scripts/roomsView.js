var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(room) {
    
  },

  renderRoom: function(room) {
    Rooms.list.add(room);
    Rooms.updateRooms();
  },

};

$('#rooms select').on('change', () =>{
  App.fetch(()=>{}, $(this).value());
});