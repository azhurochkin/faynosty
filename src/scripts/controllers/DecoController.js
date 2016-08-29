(function (){
   'use strict';

    var DecoController = function (productService){
        var _this=this;
        _this.products=[];

        productService.getDeco()
            .then(function(data){_this.products=data;});
    };

    DecoController.$inject=['ProductService'];
    angular.module('faynosty').controller('DecoController', DecoController);


}());

