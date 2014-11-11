(function() {


  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function() {
    Parse.history.start();

  },

    routes: {
      '':'home',
      'signup':'createAcct'
    },
     createAcct: function() {
       var a= new App.Views.CreateAcct();
       console.log(a);
     },

     home: function() {
       new App.Views.Home();
     }

});






}()); // end of IIF
