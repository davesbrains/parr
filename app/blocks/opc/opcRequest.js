(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('opcRequest', opcRequest);

    opcRequest.$inject = ['$http', 'opcSignature', 'exception', 'logger'];
    /* @ngInject */
    function opcRequest($http, exception, logger, opcSignature) {
        var opc_url = "https://app.onepagecrm.com/api/v3/";
        var user = {};
        var service = {
            getData: getData
        };

        return service;

        function getData(user_id, auth_key, requestURL) {


            var last_ts = Math.round((new Date()).getTime() / 1000);
            var signature = opcSignature.getSignature(
                'GET',
                opc_url + requestURL,
                '',
                last_ts);

            return $http({
                method: 'GET',
                url: "" + opc_url + requestURL,
                headers: {
                    "X-OnePageCRM-UID": user.user_id,
                    "X-OnePageCRM-TS": last_ts,
                    "X-OnePageCRM-Auth": signature
                }
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }
    }
})();
