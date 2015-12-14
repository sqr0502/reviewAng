(function(){
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http', function($http){


    var store = this;
    store.products = [];

    $http.get('/products.json').success(function(data){
      store.products = data;
    });
  }]);

  var gem = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This is a Dodecahedron',
      canPurchase: true,
      soldOut: true,
      images: [
        {
          full: 'cactusfleur.jpg',
          thumb: 'cactusfleur.jpg'
      },
        {
          full: 'cafecito.jpg',
          thumb: 'cafecito.jpg'
        }
  ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"

      },
        {
          stars: 1,
          body: "This product sucks",
          author: "time@hater.com"
      }
    ],
    },
    {
      name:'Pentagonal Gem',
      price: 5.95,
      description:'This is a Pentagonal Gem',
      canPurchase: false,

    }
  ];


  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review.createdOn = Date.now();
    };
  });
})();
