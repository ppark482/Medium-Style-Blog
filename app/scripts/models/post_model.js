(function () {

  App.Models.Post = Parse.Object.extend({

    className: 'Post',

    defaults: {
      title: '',
      content: '',
      tag: '',
      author: ''

    },

    initialize: function () {

    }

  });

}());
