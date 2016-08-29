(function (){
   'use strict';

    var CategoriesController = function (productService){
        var _this=this;
        _this.categories=[];

        productService.getCategories()
            .then(function(data){_this.categories=data;});
    };

    CategoriesController.$inject=['ProductService'];
    angular.module('faynosty').controller('CategoriesController', CategoriesController);


}());

