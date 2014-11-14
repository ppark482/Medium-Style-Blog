(function(){

  App.Views.Home = Parse.View.extend({

    el: "#upperRegion",

    events: {
      'click .signUp' : 'signupForm',
      'click .login'  : 'login'
    },

    initialize        : function (options) {
      this.options = options;
      this.render(options);
    },

    render            : function (options) {
      $('#upperRegion, #middleRegion, lowerRegion').html('');
      // Renders Nav Bar
      new App.Views.NavBar();
      // Render All Posts View
      new App.Views.AllPosts(this.options.collection);
      // Render Footer
      new App.Views.Footer(this.options.user);
      // Render Footer Authors and Tags
      new App.Views.FooterAuthors();

      this.removeBtn()
    },

    signupForm        : function () {
      // Instantiates Create Acct Form
      new App.Views.CreateAcct();
    },

    login             : function () {
      // Instantiate Login Form
      new App.Views.Login();
    },

    removeBtn             : function() {
      if (App.user===null) {
        $('button').remove('.logout');
        $('span').remove('.guest');
        $('span').remove('.welcome');
      }
    }


  }); // end of view

}()); // end of IIF
