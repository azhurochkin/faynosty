(function () {
    'use strict';
    var ProductService = function ($http) {
        this.$http = $http;

    };

    ProductService.$inject = ['$http'];

    ProductService.prototype = {
        getProducts: function () {

            return this.$http.get('data/products-featured.json')
                .then(function (resp) { return resp.data; });
        },
        getCategories: function () {

            return this.$http.get('data/categories.json')
                .then(function (resp) { return resp.data; });
        },
        getBags: function () {

            return this.$http.get('data/bags.json')
                .then(function (resp) { return resp.data; });
        },
        getDeco: function () {

            return this.$http.get('data/decos.json')
                .then(function (resp) { return resp.data; });
        }
    };
    angular.module('faynosty').service('ProductService', ProductService);

}());