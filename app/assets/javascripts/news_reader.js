window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    router = new NewsReader.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
