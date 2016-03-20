export class InMemoryStoryService {
    /**
     * Creates fresh copy of data each time.
     * Safe for consuming service to morph arrays and objects.
     */
    createDb() {
        let contacts = [{

            "id": "56200cbe1787fa732600002d",
            "company_name": "Acme Inc.",
            "company_id": "56200cbe1787fa732600002e",
            "type": "individual",
            "created_at": "2015-10-15T20:29:50.823Z",
            "custom_fields": [""],
            "background": "Originally met Joe at the Eco Friendly Expo 2009. He owns 6 hardware stores in New Jersey.\n",
            "emails": [
                {
                    "type": "work",
                    "value": "jbloggs@bigcompany.co.uk"
                }
            ],
            "first_name": "Joe",
            "last_name": "Bloggs",
            "owner_id": "56200bf41787fa657e000231",
            "phones": [
                {
                    "type": "work",
                    "value": "+1 23 978234"
                },
                {
                    "type": "mobile",
                    "value": "+1 213 555 1307"
                }
            ],
            "photo_url": "https://cdn-static.onepagecrm.com/photos/joe_bloggs.png",
            "sales_closed_for": [""],
            "starred": false,
            "status": "Prospect",
            "status_id": "56200cbe1787fa7326000003",
            "tags": [
                "VIP"
            ],
            "modified_at": "2015-10-15T20:29:50.855Z",
            "urls": [
                {
                    "type": "linkedin",
                    "value": "http://www.linkedin.com/pub/joe-bloggs/68/b52/374"
                }
            ],
            "job_title": "",
            "address_list": [
                {
                    "address": "94 Steuben Street",
                    "city": "East Orange",
                    "state": "NJ",
                    "zip_code": "07018-4206",
                    "country_code": "US"
                }
            ],
            "lead_source_id": ""
        },
            {
                "id": "562014631787fa118300012d",
                "company_name": "",
                "type": "individual",
                "created_at": "2015-10-15T21:02:27.758Z",
                "custom_fields": [""],
                "emails": [
                    {
                        "type": "work",
                        "value": "mc@phantom.com"
                    }
                ],
                "first_name": "Mike",
                "last_name": "Craford",
                "lead_source_id": "other",
                "owner_id": "56200bf41787fa657e000231",
                "phones": [
                    {
                        "type": "work",
                        "value": "3212255988"
                    }
                ],
                "sales_closed_for": [""],
                "status": "Lead",
                "status_id": "56200cbe1787fa7326000002",
                "tags": [""],
                "modified_at": "2015-10-15T21:02:27.769Z",
                "urls": [""],
                "job_title": "",
                "background": "",
                "address_list": [
                    {
                        "address": "9700 N 91st Ave. Suite #114",
                        "city": "Peoria",
                        "state": "Arizona",
                        "zip_code": "85345",
                        "country_code": "US"
                    }
                ],
                "starred": false,
                "photo_url": ""
            },
            {
                "id": "56200cbe1787fa7326000010",
                "company_name": "Big Company Inc.",
                "company_id": "56200cbe1787fa7326000011",
                "type": "company",
                "created_at": "2015-10-15T20:29:50.667Z",
                "custom_fields": [""],
                "background": "I met Jane at the annual Eco Conference in Florida. Her company currently provides\nsolar panels to the State Governments of\nCalifornia, Nevada, Oregon, Arizona and Utah for capital building projects.\n",
                "emails": [
                    {
                        "type": "work",
                        "value": "jane.doe@acme.com"
                    }
                ],
                "first_name": "Jane",
                "last_name": "Doe",
                "owner_id": "56200bf41787fa657e000231",
                "phones": [
                    {
                        "type": "work",
                        "value": "312 34 4491223"
                    }
                ],
                "photo_url": "https://cdn-static.onepagecrm.com/photos/jane_doe.png",
                "sales_closed_for": [""],
                "starred": true,
                "status": "Customer",
                "status_id": "56200cbe1787fa7326000004",
                "tags": [""],
                "modified_at": "2015-10-15T20:29:50.712Z",
                "urls": [""],
                "job_title": "",
                "address_list": [
                    {
                        "address": "25 Mason Street",
                        "city": "San Francisco",
                        "state": "CA",
                        "zip_code": "94102",
                        "country_code": "US"
                    }
                ],
                "lead_source_id": ""
            },
            {
                "id": "562015e01787fa1183000276",
                "company_name": "",
                "type": "individual",
                "created_at": "2015-10-15T21:08:48.244Z",
                "custom_fields": [""],
                "emails": [
                    {
                        "type": "work",
                        "value": "de@q.com"
                    }
                ],
                "first_name": "Dexter",
                "last_name": "Evans",
                "lead_source_id": "other",
                "owner_id": "56200bf41787fa657e000231",
                "phones": [
                    {
                        "type": "work",
                        "value": "3331235555"
                    }
                ],
                "sales_closed_for": [],
                "status": "Lead",
                "status_id": "56200cbe1787fa7326000002",
                "tags": [""],
                "modified_at": "2015-10-15T21:08:48.254Z",
                "urls": [""],
                "job_title": "",
                "background": "",
                "address_list": [
                    {
                        "address": "9700 N 91st Ave. Suite #114",
                        "city": "Peoria",
                        "state": "Arizona",
                        "zip_code": "85345",
                        "country_code": "US"
                    }
                ],
                "starred": false,
                "photo_url": ""
            },
            {
                "id": "562023971787fa29f600088c",
                "company_name": "",
                "type": "individual",
                "created_at": "2015-10-15T22:07:19.650Z",
                "custom_fields": [""],
                "emails": [
                    {
                        "type": "work",
                        "value": "123@sdfsf.com"
                    }
                ],
                "first_name": "Dexter",
                "last_name": "Evans",
                "lead_source_id": "other",
                "owner_id": "56200bf41787fa657e000231",
                "phones": [
                    {
                        "type": "work",
                        "value": "6238787577"
                    }
                ],
                "sales_closed_for": [""],
                "status": "Lead",
                "status_id": "56200cbe1787fa7326000002",
                "tags": [""],
                "modified_at": "2015-10-15T22:07:19.660Z",
                "urls": [""],
                "job_title": "",
                "background": "",
                "address_list": [
                    {
                        "address": "9700 N 91st Ave. Suite #114",
                        "city": "Peoria",
                        "state": "Arizona",
                        "zip_code": "85345",
                        "country_code": "US"
                    }
                ],
                "starred": false,
                "photo_url": ""
            },
            {
                "id": "562013d61787fa11830000b7",
                "company_name": "",
                "type": "individual",
                "created_at": "2015-10-15T21:00:06.766Z",
                "custom_fields": [""],
                "emails": [
                    {
                        "type": "work",
                        "value": "JN@cox.net"
                    },
                    {
                        "type": "work",
                        "value": "jim@gothampd.com"
                    }
                ],
                "first_name": "Jeff",
                "last_name": "Norman",
                "lead_source_id": "other",
                "owner_id": "56200bf41787fa657e000231",
                "phones": [
                    {
                        "type": "work",
                        "value": "6239999999"
                    },
                    {
                        "type": "work",
                        "value": "9992541564"
                    }
                ],
                "sales_closed_for": [""],
                "status": "Lead",
                "status_id": "56200cbe1787fa7326000002",
                "tags": [""],
                "modified_at": "2015-10-15T21:00:06.777Z",
                "urls": [""],
                "job_title": "",
                "background": "",
                "address_list": [
                    {
                        "address": "19700 6th stree",
                        "city": "Peoria",
                        "state": "AZ",
                        "zip_code": "85345",
                        "country_code": "US"
                    }
                ],
                "starred": false,
                "photo_url": ""

            }
        ];

        let userInfo = [
            {
                "user_id": "54e390701787fa07c3000036",
                "auth_key": "PzyCY99rXh388gojaTv2R7GMCd9uQjxf0DUuNVQ47Ys=",
                "account_type": "pro",
                "custom_fields": [
                    {
                        "custom_field": {
                            "id": "54ad6e281787fa1f75000037",
                            "choices": [
                                "Aloha- 185th",
                                "NE Portland",
                                "Fife",
                                "Tukwila",
                                "Everett",
                                "Peoria"
                            ],
                            "name": "Location",
                            "position": 0,
                            "type": "select_box",
                            "reminder_days": ""
                        }
                    },
                    {
                        "custom_field": {
                            "id": "54b56a3b1787fa3383000028",
                            "choices": [],
                            "name": "PARR ACCT #",
                            "position": 1,
                            "type": "single_line_text",
                            "reminder_days": ""
                        }
                    }
                ],
                "filters": [
                    {
                        "filter": {
                            "id": "54b56a7f1787fa347a00000a",
                            "name": "Loc = Aloha-185th"
                        }
                    },
                    {
                        "filter": {
                            "id": "54d954f81787fa29ed00000b",
                            "name": "Loc = Everett"
                        }
                    },
                    {
                        "filter": {
                            "id": "54d954be1787fa27da00004d",
                            "name": "Loc = Fife"
                        }
                    },
                    {
                        "filter": {
                            "id": "54d954d31787fa27da00005c",
                            "name": "Loc = NE Portland"
                        }
                    },
                    {
                        "filter": {
                            "id": "54d955141787fa29ed000018",
                            "name": "Loc = Peoria"
                        }
                    },
                    {
                        "filter": {
                            "id": "54d954e71787fa29ed000006",
                            "name": "Loc = Tukwila"
                        }
                    },
                    {
                        "filter": {
                            "id": "54ad66481787fa01af000056",
                            "name": "Pending deals"
                        }
                    },
                    {
                        "filter": {
                            "id": "54f4a5061787fa05b3000035",
                            "name": "Peoria_Actions"
                        }
                    },
                    {
                        "filter": {
                            "id": "54ad66481787fa01af000055",
                            "name": "Prospects with pending deals"
                        }
                    }
                ],
                "call_results": {
                    "interested": "Interested",
                    "not_interested": "Not interested",
                    "left_message": "Left message",
                    "no_answer": "No answer",
                    "other": "Other"
                },
                "team": [
                    {
                        "user": {
                            "id": "5512e6751787fa1e5b000020",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "melissa.hogfoss@parr.com",
                            "first_name": "MELISSA",
                            "last_name": "HOGFOSS",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5509ebd11787fa1a99000057",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "dan.wallace@parr.com",
                            "first_name": "DAN",
                            "last_name": "WALLACE",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "550a041b1787fa4c3700002f",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "kelsey.smith@parr.com",
                            "first_name": "KELSEY",
                            "last_name": "SMITH",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "54de57221787fa7690000012",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "chris.aley@parr.com",
                            "first_name": "Chris",
                            "last_name": "Aley",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5509f1bf1787fa27c900001a",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "jasonp@parr.com",
                            "first_name": "JASON",
                            "last_name": "PROCTER",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5595905c1787fa7010000c8b",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "sonya.wallace@parr.com",
                            "first_name": "SONYA",
                            "last_name": "WALLACE",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "559e7cd51787fa2b25000005",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "john.adame@parr.com",
                            "first_name": "JOHN",
                            "last_name": "ADAME",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "54ad65381787fa7db500001d",
                            "account_rights": [
                                "account_owner",
                                "admin"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "jeffreyc@parr.com",
                            "first_name": "Jeff",
                            "last_name": "Cox",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "563bc7821787fa48990018f8",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "email": "kelly.morse@parr.com",
                            "first_name": "KELLY",
                            "last_name": "MORSE",
                            "company_name": "",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5509e9851787fa15d8000017",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "jordanc@parr.com",
                            "first_name": "JORDAN",
                            "last_name": "COX",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "54efa0191787fa40ac00000d",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "brianb@parr.com",
                            "first_name": "Brian",
                            "last_name": "Busey",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5512e5f41787fa1cff00000d",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "brad.wilson@parr.com",
                            "first_name": "BRAD",
                            "last_name": "WILSON",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "56ce2af600d4afef550003f7",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "email": "robert.klesper@parr.com",
                            "first_name": "Robert",
                            "last_name": "Klesper",
                            "company_name": "",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5509f3fe1787fa2cec000004",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "steven.morrow@parr.com",
                            "first_name": "STEVE",
                            "last_name": "MORROW",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "55665d611787fa2f8b00014f",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "debbie.walz@parr.com",
                            "first_name": "DEBBIE",
                            "last_name": "WALZ",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "54ad75181787fa399b000001",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "fabiot@parr.com",
                            "first_name": "Fabio",
                            "last_name": "Testa",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "55133a391787fa06ae000002",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "davem@parr.com",
                            "first_name": "DAVE",
                            "last_name": "MEANS",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5631166a1787fa01db000003",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "email": "michael.wheeler@parr.com",
                            "first_name": "MICHAEL",
                            "last_name": "WHEELER",
                            "company_name": "",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "56cf578e00d4afba61000004",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "email": "jeremiah.yeager@parr.com",
                            "first_name": "JEREMIAH",
                            "last_name": "YEAGER",
                            "company_name": "",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "54e67e9c1787fa059000000e",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "paulf@parr.com",
                            "first_name": "Paul",
                            "last_name": "Feinauer",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "559590f71787fa7010000d1e",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "debra.boles@parr.com",
                            "first_name": "DEBRA",
                            "last_name": "BOLES",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5512e62b1787fa1dad00000b",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "janelle.johnson@parr.com",
                            "first_name": "JANELLE",
                            "last_name": "DALY",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5509ceff1787fa5310000017",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "mike.bierly@parr.com",
                            "first_name": "MIKE",
                            "last_name": "BIERLY",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "550a05271787fa4e3d000007",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "andonm@parr.com",
                            "first_name": "ANDON",
                            "last_name": "MARTIN",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5543b7de1787fa71b2000027",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "karen.fugate@parr.com",
                            "first_name": "Karen",
                            "last_name": "Fugate",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5553dd0e1787fa540900035f",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "oscar.talavera@parr.com",
                            "first_name": "OSCAR",
                            "last_name": "TALAVERA",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "56ce2ada00d4afef550003a9",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export",
                                "delete_contacts"
                            ],
                            "email": "denise.holland@parr.com",
                            "first_name": "Denise",
                            "last_name": "Holland",
                            "company_name": "",
                            "photo_url": ""
                        }
                    },
                    {
                        "user": {
                            "id": "5554d46c1787fa20f8000bc9",
                            "account_rights": [
                                "activity",
                                "pipeline",
                                "edit_target",
                                "export"
                            ],
                            "company_name": "Parr Cabinet Design Center",
                            "email": "luis.malvaez@parr.com",
                            "first_name": "LUIS",
                            "last_name": "MALVAEZ",
                            "photo_url": ""
                        }
                    }
                ],
                "settings": {
                    "reminder": {
                        "type": "every_day",
                        "hour": 6
                    },
                    "time_zone": "pacifictimeuscanada",
                    "date_format": "%m/%d/%Y",
                    "listing_size": 25,
                    "currency": "USD",
                    "currency_symbol": "$",
                    "popular_countries": [
                        "US"
                    ],
                    "deal_stages": [
                        {
                            "stage": 10,
                            "label": "Qualification"
                        },
                        {
                            "stage": 25,
                            "label": null
                        },
                        {
                            "stage": 50,
                            "label": "Decision"
                        },
                        {
                            "stage": 75,
                            "label": null
                        },
                        {
                            "stage": 90,
                            "label": "Negotiation"
                        }
                    ],
                    "default_contact_type": "individual",
                    "show_tidy_stream": true
                },
                "user": {
                    "user": {
                        "id": "54e390701787fa07c3000036",
                        "account_rights": [
                            "activity",
                            "pipeline",
                            "edit_target",
                            "export",
                            "delete_contacts"
                        ],
                        "bcc_email": "54e390701787fa07c3000037@users.onepagecrm.com",
                        "company_name": "Parr Cabinet Design Center",
                        "email": "dixon.oliver@parr.com",
                        "first_name": "Dixon",
                        "last_name": "Oliver",
                        "photo_url": ""
                    }
                }
            }
        ];

        let vehicles = [
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
        ]

        return {contacts, vehicles};
    }
}