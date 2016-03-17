(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('opcLogin', opcLogin);

    opcLogin.$inject = ['$http', 'exception', 'logger'];
    /* @ngInject */
    function opcLogin($http, exception, logger) {
        var user;
        var service = {
            login: login
        };

        return service;

        function login(email, password) {

            var input = JSON.stringify({
                login: email,
                password: password
            });

            return $http.post("https://app.onepagecrm.com/api/v3/login.json", input)
                .then(success)
                .catch(fail);

            function success(response) {
                user = response.data.data;

                return user;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }
    }
})();
