if (Meteor.isClient) {
  Accounts.onLogin(function(){
    FlowRouter.go('recipe-book');
  });

  Accounts.onLogout(function(){
    FlowRouter.go('main');
  });
}
FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('main');
  }
}]);

FlowRouter.route('/',{
  name: 'main',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('MainLayout');
    }
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout');
  }
});

FlowRouter.route('/recipe-book',{
  name: 'recipe-book',
  action(){
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});

FlowRouter.route('/recipe/:id',{
  name: 'recipe',
  action(){
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});

FlowRouter.route('/menu',{
  name: 'menu',
  action(){
    BlazeLayout.render('MainLayout', {main: 'Menu'});
  }
});

FlowRouter.route('/shopping-list',{
  name: 'shopping-list',
  action(){
    BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
  }
});