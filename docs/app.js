(function () {
    var app = angular.module('LazarusApps', ['ngMaterial']);
    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('indigo');
    });
    app.directive('errSrc', function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });
            }
        }
    });
    app.controller('AppsController', function () {
        // from apps.js
        this.apps = document.apps.slice();
        this.apps_filtered = this.apps.slice();
        this.filter = function() {
            if (this.search == "") {
                this.apps_filtered = this.apps.slice();
                return;
            }
            this.apps_filtered = [];
            var terms = this.search.toLowerCase().split(" ");   
            
            for (var j=0; j<this.apps.length; j++) {
                var app_text = this.apps[j].name.toLowerCase() + " " + this.apps[j].description.toLowerCase() + " " + this.apps[j].tags;
                var found = true;
                for (var i=0; i<terms.length; i++) {
                    if (app_text.indexOf(terms[i]) == -1) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    this.apps_filtered.push(this.apps[j]);
                }
            }
        }
    });
})();