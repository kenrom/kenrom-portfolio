Werks = new Mongo.Collection("work"); // create a collection for my work data

Skillz = function (document) {
  _.extend(this, document) // Underscore's extend function used copy the raw Skills collection
};

Skillz.prototype = {
  constructor: Skillz, // reseting the constructor, as best practice

  barType: function () { // declaring a method for evaluating skill values and adding a barType property for customized display
    if (this.value < 25) {
      this.type = 'danger';
    } else if (this.value < 50) {
      this.type = 'warning';
    } else if (this.value < 75) {
      this.type = 'info';
    } else {
      this.type = 'success';
    }
    return this.type;
  }
};

Skills = new Mongo.Collection("skill", { // creates a map my original skills with a 
  transform: function (document) { // transform method that returns a copy of the cursor
    return new Skillz(document); // with a calculated barType property (used in view template)
  }
});


if (Meteor.isClient) {

  Template.layout.helpers({          // when loaded, applies a random transition to the app 
    randomTransition: function () {  // from an array of transitions 
     var randomArray = ['rollIn','lightSpeedIn', 'fadeInDownBig', 'bounceIn', 'fadeIn'],
     randomX = _.sample(randomArray);

     console.log('Random transition is: ' + randomX);
    return randomX;

    }
  });


  Template.home.helpers({
    'work': function () { // returns a cursor for work 
      data = Werks.find().fetch();
      return data;
    }
  });


  Meteor.startup(function () {  // initializes Session variables
    Session.set("resize", null);
    Session.set("randomTransition", null);

  });

  Template.body.resized = function () {
    return Session.get('resize'); // triggers a resize of the D3 SVG viewport to match the window size
  };

Template.layout.rendered = function () {  // gets the random transition once the screen and its data has been rendered
    return Session.get('randomTransition'); 
  };

  Template.skills.helpers({  // returns a cursor for skills
    'skills': function () {
      data = Skills.find({}).fetch();
      return data;
    }
  });


  Template.skills.rendered = function () {
    if (!this._rendered) {

      // initializes Isotope sorting, once all skills are rendered 
      var $container = $('#isotope').isotope({
        itemSelector: '.js-skill-bar',
        layoutMode: 'vertical',
        getSortData: {
          name: '[data-name]',
          number: '[data-value]'
        }
      });

      // bind sort button click
      $('.js-sorts').on('click', 'button', function () {
        var sortByValue = $(this).attr('data-sort-by');
        console.log('sortByValue = ' + sortByValue);
        $container.isotope({
          sortBy: sortByValue,
          sortAscending: {
            name: true,
            number: false
          }
        });
      });

      // change is-checked class on buttons
      $('.js-button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
        });
      });
    };
    this._rendered = true;
    console.log("Isotope Rendered");
  };

};
