import { defineStore } from 'pinia';

export const useNavStore = defineStore({
    id: 'menu',
    state: () => ({
        "langs": [
                {
                "text": "English",
                "code": "en"
            }, {
                "text": "简体中文",
                "code": "cn"
            }, {
                "text": "繁體中文",
                "code": "zh_hant"
            }, {
                "text": "한국어",
                "code": "kr"
            }
        ],
        "header": {
            "nav": [
                {
                    "slug": "home",
                    "text": "Home",
                    "link": "/home",
                    "target": "_self",
                    "subnav": [
                        {
                            "slug": "homesub1",
                            "text": "Sub 01",
                            "link": {
                                "text": "",
                                "link": "",
                                "target": ""
                            },
                        },
                    ]
                },
                {
                    "slug": "about",
                    "text": "About",
                    "link": "/about",
                    "target": "_self",
                    "subnav": [
                        {
                            "slug": "aboutsub1",
                            "text": "Sub 01",
                            "link": {
                                "text": "",
                                "link": "",
                                "target": ""
                            },
                        },
                    ]
                }
            ]
        },
        "footer": {
            "nav": [
                {
                    "slug": "home",
                    "text": "Home",
                    "link": "/home",
                    "target": "_self",
                    "subnav": [
                        {
                            "slug": "homesub1",
                            "text": "Sub 01",
                            "link": {
                                "text": "",
                                "link": "",
                                "target": ""
                            },
                        },
                    ]
                },
                {
                    "slug": "about",
                    "text": "About",
                    "link": "/about",
                    "target": "_self",
                    "subnav": [
                        {
                            "slug": "aboutsub1",
                            "text": "Sub 01",
                            "link": {
                                "text": "",
                                "link": "",
                                "target": ""
                            },
                        },
                    ]
                }
            ],
        },
    }),
    actions: {
        success() {
            //this.alert = { message, type: 'alert-success' };
        },
        error() {
            //this.alert = { message, type: 'alert-danger' };
        },
        clear() {
            //this.alert = null;
        }
    }
});
