(function () {

  App.Models.Author = Parse.Object.extend({

    className: 'Author',

    idAttribute: 'objectId',




    defaults: {
      username: '',
      password: ''

    },

    initialize: function () {
      var a=this.get('username');
      console.log(a)
    }

  });

}());
