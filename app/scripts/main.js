Parse.initialize("b9ihleuYJm7Z20BGiIeVfE3XHmgNZoGP0P6tWs7A", "c3b6HWtmmYpCntKDKl85BZAt1VLUvHqeXTEVnkEk");

(function() {


  // Create object to store current user
  App.user = Parse.User.current();
  // Creates instance of collection
  App.posts = new App.Collections.Posts();
  // Create instance of user collection
  App.user_collection = new App.Collections.Users();

  App.comments = new App.Collections.Comments();

  App.user_collection.fetch().done( function() {

    App.posts.fetch().done( function () {

      App.comments.fetch().done(function(){
      // Instantiate the router
      App.router = new App.Routers.AppRouter();
      Parse.history.start();
    });
    });
  });


}()); // end of IIF
