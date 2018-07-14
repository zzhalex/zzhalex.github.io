   var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.cars = [{
                    git: "GitLab",
                    logo: "img/gitlab.svg",
                    body: [{
                            name: 'Playlist',
                            type: 'Node.js',
                            link: "https://csil-git1.cs.surrey.sfu.ca/zhihaoz/ex6-470",
                            desp: "Developed a Music Playlists web application using Node.js, SQL, jQuery, Bootstrap,Provisioned app automatically using Vagrant and Chef, and used Nginx as the Web server for the web app, Used SQLite and JSON to load data from the database and show all of them to user."
                        },
                        {
                            name: "HotCooks",
                            type: "Ruby On Rails",
                            link: "https://csil-git1.cs.surrey.sfu.ca/mca117/HotCooks",
                            desp: "HotCooks is a website where users can share their recipes, cooking materials and food masterpieces. This website can help users learn to cook and fall in love with cooking. Users can make friends and learn different cooking styles from each other."
                        },
                        {
                            name: "MvcMovie",
                            type: '.Net',
                            link: 'https://csil-git1.cs.surrey.sfu.ca/zhihaoz/MvcMovie',
                            desp: "Used .NET MVC to build the web-based application to sharing Movie, Completed the API for users to upload, delete and change data, Used SQL server local DB to maintain database and table for the application."
                        }
                    ]
                },
                {
                    git: "GitHub",
                    logo: "img/github.svg",
                    body: [{
                            name: 'Hero Editor',
                            type: 'Angular',
                            link: "https://github.com/zzhalex/angularlearn",
                            desp: "For learning Augular, I follow the instruction from angular offical website to build this application(Ongoing)."
                        },
                        {
                            name: 'Login PHP',
                            type: 'php',
                            link: "https://github.com/zzhalex/phplogin",
                            desp: "Only use PHP HTML CSS jQuery to build a login Demo(Ongoing)."
                        },
                        {
                            name: 'Angular Front End',
                            type: 'Angular',
                            link: "https://github.com/zzhalex/angularng",
                            desp: "Used Angular to connect the FAKE API, then get and render data to the view."
                        },
                        {
                            name: 'Weather Mapp',
                            type: 'Node.js',
                            link: "https://github.com/zzhalex/angularng",
                            desp: "Used Node.js and Google map to make a weather map. Get data from Environment Canada and render them into Gmap information box."
                        }
                    ]
                }
            ];
        });