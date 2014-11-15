(function () {

  App.Views.EditPost = Parse.View.extend({

    el                  : '#middleRegion',

    template            : _.template($('#editTemp').html()),


    events: {
      'click #cancel'   : 'cancel',
      'click #update'   : 'update'
    },

    initialize          : function (options) {
      this.options = options;
      this.render(options);
    },

    render              : function (options) {
      // Renders Nav Bar
      var t = options;

      new App.Views.NavBar();
      new App.Views.Footer();
      this.$el.html(this.template);

      $('#addTitle').html('<input id="editTitle" type="text" value="' + t.title + '"/>');
      $('#editContent').append(t.content);
      if (t.tag === 'green') {
         $('#editTag').html('<option value="green" selected>Green</option><option value="yellow">Yellow</option><option value="orange">Orange</option>');
       }
       if (t.tag === 'green') {
         $('#editTag').html('<option value="green" selected>Green</option><option value="yellow">Yellow</option><option value="orange">Orange</option>');
       } else if (t.tag === 'yellow') {
         $('#editTag').html('<option value="green">Green</option><option value="yellow" selected>Yellow</option><option value="orange">Orange</option>');
         } else {
           $('#editTag').html('<option value="green">Green</option><option value="yellow">Yellow</option><option value="orange" selected>Orange</option>');
           } // end of conditional
    },

    update               : function () {

    },

    cancel               : function () {
      App.router.navigate('myaccount', { trigger:true });

    }



  }); // end of view


}());
