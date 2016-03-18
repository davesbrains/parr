System.register(['./login.component', './login.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (login_component_1_1) {
                exportStar_1(login_component_1_1);
            },
            function (login_service_1_1) {
                exportStar_1(login_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=login.js.map