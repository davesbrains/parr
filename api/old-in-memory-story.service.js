System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InMemoryStoryService;
    return {
        setters:[],
        execute: function() {
            InMemoryStoryService = (function () {
                function InMemoryStoryService() {
                }
                /**
                * Creates fresh copy of data each time.
                * Safe for consuming service to morph arrays and objects.
                */
                InMemoryStoryService.prototype.createDb = function () {
                    var contacts = [
                        {
                            "id": 11,
                            "name": "Chewbacca",
                            "type": "light"
                        },
                        {
                            "id": 12,
                            "name": "Rey",
                            "type": "light"
                        },
                        {
                            "id": 13,
                            "name": "Finn (FN2187)",
                            "type": "light"
                        },
                        {
                            "id": 14,
                            "name": "Han Solo",
                            "type": "light"
                        },
                        {
                            "id": 15,
                            "name": "Leia Organa",
                            "type": "light"
                        },
                        {
                            "id": 16,
                            "name": "Luke Skywalker",
                            "type": "light"
                        },
                        {
                            "id": 17,
                            "name": "Poe Dameron",
                            "type": "light"
                        },
                        {
                            "id": 18,
                            "name": "Kylo Ren",
                            "type": "dark"
                        },
                        {
                            "id": 19,
                            "name": "Supreme Commander Snoke",
                            "type": "dark"
                        },
                        {
                            "id": 20,
                            "name": "R2-D2",
                            "type": "light"
                        },
                        {
                            "id": 21,
                            "name": "BB8",
                            "type": "light"
                        },
                        {
                            "id": 22,
                            "name": "C-3PO",
                            "type": "light"
                        },
                        {
                            "id": 23,
                            "name": "Maz Kanata",
                            "type": "light"
                        },
                        {
                            "id": 24,
                            "name": "Captain Phasma",
                            "type": "dark"
                        },
                        {
                            "id": 25,
                            "name": "General Hux",
                            "type": "dark"
                        },
                        {
                            "id": 26,
                            "name": "Lor San Tekka",
                            "type": "light"
                        }
                    ];
                    var vehicles = [
                        {
                            "id": 30,
                            "name": "Millennium Falcon",
                            "type": "space"
                        },
                        {
                            "id": 32,
                            "name": "X-Wing Fighter",
                            "type": "space"
                        },
                        {
                            "id": 33,
                            "name": "Imperial Star Destroyer",
                            "type": "space"
                        },
                        {
                            "id": 34,
                            "name": "AT-AT Walker",
                            "type": "land"
                        },
                        {
                            "id": 35,
                            "name": "TIE Fighter",
                            "type": "space"
                        },
                        {
                            "id": 36,
                            "name": "B-Wing Fighter",
                            "type": "space"
                        },
                        {
                            "id": 37,
                            "name": "ETA-2 Jedi Starfighter",
                            "type": "space"
                        },
                        {
                            "id": 38,
                            "name": "TIE Interceptor",
                            "type": "space"
                        },
                        {
                            "id": 39,
                            "name": "X-34 Landspeeder",
                            "type": "land"
                        },
                        {
                            "id": 40,
                            "name": "Snow Speeder",
                            "type": "land"
                        },
                        {
                            "id": 41,
                            "name": "X-34 Landspeeder",
                            "type": "land"
                        }
                    ];
                    return { contacts: contacts, vehicles: vehicles };
                };
                return InMemoryStoryService;
            }());
            exports_1("InMemoryStoryService", InMemoryStoryService);
        }
    }
});
//# sourceMappingURL=old-in-memory-story.service.js.map