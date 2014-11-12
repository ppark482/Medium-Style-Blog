
Parse.initialize("b9ihleuYJm7Z20BGiIeVfE3XHmgNZoGP0P6tWs7A", "c3b6HWtmmYpCntKDKl85BZAt1VLUvHqeXTEVnkEk");

(function() {

  // Create object to store current user
  App.user = Parse.User.current();
  // Creates instance of collection
  App.posts = new App.Collections.Posts();

  // App.posts.fetch().done( function () {
    // Instantiate the router
    App.router = new App.Routers.AppRouter();
    Parse.history.start();
  // });

  if (App.user == null) {
    $('.acctLink').append(App.User);
  };

}()); // end of IIF
