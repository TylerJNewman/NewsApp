NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: 'api/feeds',
  model: NewsReader.Models.Feed,

  getOrFetch: function(id) {
    var collection = this;
    var feed = collection.get(id);

    if(!feed) {
      feed = new NewsReader.Models.Feed({id: id});
      collection.add(feed);
      feed.fetch({
        error: function() {
          collection.remove(feed);
        }
      });
    } else {
      feed.fetch();
    }
    return feed;
  }
});
