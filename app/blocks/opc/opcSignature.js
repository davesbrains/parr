/**
 * Created by David on 2/29/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('opcSignature', opcSignature, CryptoJS);

    opcSignature.$inject = ['exception', 'logger'];
    /* @ngInject */
    function opcSignature(exception, logger, CryptoJS) {
        var service = {
            getSignature: getSignature
        };

        return service;

        function getSignature(user_id, auth_key, timestamp,
                              requestMethod, requestURL, requestBody) {
            var decodedAPIKey = CryptoJS.util.base64ToBytes(auth_key);
            var requestURLHash = CryptoJS.SHA1(requestURL);
            var ts = Math.floor(timestamp);
            var signatureMessage = user_id + "." + ts + "." + requestMethod + "." + requestURLHash;

            if (requestBody) {
                var requestBodyHash = CryptoJS.SHA1(requestBody);
                signatureMessage += "." + requestBodyHash;
            }

            return CryptoJS.HMAC(CryptoJS.SHA256,
                signatureMessage,
                CryptoJS.util.base64ToBytes(auth_key));
        }
    }
})();
