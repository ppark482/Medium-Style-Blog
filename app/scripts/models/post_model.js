(function () {

  App.Models.Post = Parse.Object.extend({

    className: 'Post',

    idAttribute: 'objectId',

    defaults: {
      title: '',
      content: '',
      tag: '',
      user: '',
      author: '',
      status: ''
    },

    initialize: function () {

    }

  }); // end of model

}()); // end of IIF
