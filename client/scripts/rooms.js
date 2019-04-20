var Rooms = {

  list: new Set(),

  add: function(roomName) {
    Rooms.list.add(roomName);
    Rooms.updateRooms();
  },

  updateRooms: function() {
    $('#rooms select').empty();
    this.list.forEach((room) =>{
      $('#rooms select').prepend(`<option value="${room}">${room}</option>`);
    });
  }
};