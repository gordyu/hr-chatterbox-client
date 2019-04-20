var App = {

  $spinner: $('.spinner img'),

  username: 'HackMeDaddy',

  initialize: function() {
    //App.username = window.location.search.substr(10); -->reassigns username to "anonymous" for no apparent reason

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}, inRoom) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      if (!inRoom) {
        for (let i = 0; i < data.results.length; i++) {
          MessagesView.renderMessage(data.results[i], inRoom, 'append');
        }
      } else {
        $('#chats').empty();
        for (let i = 0; i < data.results.length; i++) {
          RoomsView.renderRoom(data.results[i], inRoom, 'append');
        }
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
