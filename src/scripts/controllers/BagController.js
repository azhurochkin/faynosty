(function (){
   'use strict';

    var BagController = function (productService){
        var _this=this;
        _this.products=[];

        productService.getBags()
            .then(function(data){_this.products=data;});
    };

    BagController.$inject=['ProductService'];
    angular.module('faynosty').controller('BagController', BagController);


}());

