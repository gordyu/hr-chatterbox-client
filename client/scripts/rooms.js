var Rooms = {

  list: new Set(),

  updateRooms: function() {
    $('#rooms select').empty();
    this.list.forEach((room) =>{
      $('#rooms select').prepend(`<option value="${room}">${room}</option>`);
    });
  }
  // add: function(room) {
  //   this.list.add(room);
  // }

};

//messages : messages.storage.filter((message) =>{
// message.room === thisRoom
//})