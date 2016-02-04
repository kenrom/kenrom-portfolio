Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    waitOn: function () {
      return Meteor.subscribe("work");
    },
    action: function () {
      this.layout('layout');
      this.render('home');
    },
    loadingTemplate: 'loading'
  });
  this.route('work', {
    path: '//:path'
  });
  this.route('skills', {
    path: '/skills',
    waitOn: function () {
      return Meteor.subscribe("skill");
    },
    action: function () {
      this.layout('layout');
      this.render('skills');
    },
    loadingTemplate: 'loading'
  });
  this.route('cv', {
    path: '/cv',
    action: function () {
	  this.layout('layout');
	  this.render('cv');
    },
    loadingTemplate: 'loading'
  });
  // this.route('contact', {
  //   path: '/contact'
  // });
  this.route('lab', {
    path: '/lab',
    action: function () {
      this.layout('layout');
      this.render('lab');
    },
    loadingTemplate: 'loading'
  });
});