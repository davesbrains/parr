System.register(['./contacts.component', './contact.component', './contact-list.component', './contact.service', './sort-contacts.pipe'], function(exports_1, context_1) {
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
            function (contacts_component_1_1) {
                exportStar_1(contacts_component_1_1);
            },
            function (contact_component_1_1) {
                exportStar_1(contact_component_1_1);
            },
            function (contact_list_component_1_1) {
                exportStar_1(contact_list_component_1_1);
            },
            function (contact_service_1_1) {
                exportStar_1(contact_service_1_1);
            },
            function (sort_contacts_pipe_1_1) {
                exportStar_1(sort_contacts_pipe_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=contacts.js.map