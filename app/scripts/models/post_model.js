(function () {

  App.Models.Post = Parse.Object.extend({

    className: 'Post',

    idAttribute: 'objectId',

    defaults: {
      title: '',
      content: '',
      tag: '',
      author: ''
    },

    initialize: function () {

    }

  }); // end of model

}()); // end of IIF
