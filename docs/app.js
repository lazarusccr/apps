(function () {
    var app = angular.module('LazarusApps', ['ngMaterial']);
    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('orange');
    });
    app.controller('AppsController', function () {
        // from apps.js
        this.apps = apps;
        this.apps_filtered = this.apps.slice();

        this.open = function(url) {
            document.location = url;
        }

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