NewsReader.Routers.Router = Backbone.Router.extend ({
  routes: {
    '': 'feedIndex',
    // 'composite': 'compositeIndex',
    'feeds/:id': 'feedShow',
  },

  initialize: function () {
    this.$rootEl = $('#root');
    this.feeds = new NewsReader.Collections.Feeds();
    this.feeds.fetch();
  },

  feedIndex: function () {
    var indexView = new NewsReader.Views.FeedIndex({
      collection: this.feeds,
    });

    this.$rootEl.html(indexView.render().$el);
  },

  feedShow: function (id) {
    var feed = this.feeds.getOrFetch(id);
    var feedView = new NewsReader.Views.FeedShow({
      model: feed
    });

    this.$rootEl.html(feedView.render().$el);
  }

});
