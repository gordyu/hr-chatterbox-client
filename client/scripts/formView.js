var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log(Messages);
    Messages.currentMessage.text = $('#message').val();
    Parse.create(Messages.currentMessage);
    MessagesView.renderMessage(Messages.currentMessage, false, 'prepend');
    Messages.currentMessage.text = '';
    $('#message').val('');
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};