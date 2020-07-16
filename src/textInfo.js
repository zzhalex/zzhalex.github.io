let headerinfo = [{
    "id":1,
    "name":"Profile"
},{
    "id":2,
    "name":"Project"
},{
    "id":3,
    "name":"Demo"
}];

let profileinfo = [{
    git: "GitLab",
    logo: "img/gitlab.svg",
    body: [{
            name: 'Playlist',
            type: 'img/nodejs.png',
            link: "https://csil-git1.cs.surrey.sfu.ca/zhihaoz/ex6-470",
            desp: "Developed a Playlists web app by using Node.js, SQL, jQuery.Provisioned app automatically using Vagrant and Chef, and used Nginx as the Web server. Used DB driver to load data from the database and show all of them to user."
        },
        {
            name: "HotCooks",
            type: "img/rails.png",
            link: "https://csil-git1.cs.surrey.sfu.ca/mca117/HotCooks",
            desp: "HotCooks is a website where users can share their recipes, cooking materials and food masterpieces. This website can help users learn to cook and fall in love with cooking. Users can make friends and learn different cooking styles from each other."
        },
        {
            name: "MvcMovie",
            type: 'img/net.png',
            link: 'https://csil-git1.cs.surrey.sfu.ca/zhihaoz/MvcMovie',
            desp: "Used .NET MVC to build the web-based application to sharing Movie. Completed the API for users to upload, delete and change data. Used SQL server local DB to maintain database and table for the application."
        }
    ]
},
{
    git: "GitHub",
    logo: "img/github.svg",
    body: [
           {
            name: 'PHP Blog',
            type: 'img/php.png',
            link: "https://gentle-spire-84245.herokuapp.com/",
            desp: "Used PHP and MongoDB to build a web blog. Can do post, update, delete action. Then I deploy the app to Heroku with mLab MongoDB."
        },
        {
            name: 'Login PHP',
            type: 'img/php.png',
            link: "https://github.com/zzhalex/phplogin",
            desp: "Only use PHP HTML CSS jQuery to build a login Demo(Ongoing)."
        },
        {
            name: 'Weather Map',
            type: 'img/nodejs.png',
            link: "https://github.com/zzhalex/weathermap",
            desp: "Used Node.js, Google map and Heroku to make a weather map. Get data from Environment Canada and render them into Gmap information box."
        }
    ]
}
]

let homepageInfo = {
    leftSideTitle:"Software Developer",
    leftSideSubtitle:"Translate the Business requirements/logic into Code."
}

let resumeInfo = {
    education:{
        company:"Simon Fraser University",
        position:"Computer Science",
        time:"2014 May - 2018 April",
        location:"Burnaby, BC"
    },
    work:[{
        company:"D3 Security Managment System Inc.",
        location:"Vancouver, BC",
        position:"Software Developer",
        time:"2019 January - Present"
    },{
        company:"Robbox Inc.",
        location:"Richmond, BC",
        position:"Web Developer",
        time:"2018 August - 2019 January"
    },{
        company:"Alpha Pay",
        location:"Richmond, BC",
        position:"Web Developer",
        time:"2017 September - 2018 January"
    }
      
    ]
}

let projectInfo = [
    {
        name:"Weather Map",
        tech:"nodejs.svg",
        description:"Used Node.js and Google map API to make a weather map. Get data from Environment Canada, then render them on Gmap.",
        link:"https://github.com/zzhalex/weathermap",
    },
    {
        name:"React Post",
        tech:"react.svg",
        description:"Used React and Node.js to make a post application.(ongoing)",
        link:"https://github.com/zzhalex/postApp",
    },
    {
        name:"Market Place",
        tech:"django.svg",
        description:"A simple version of market place which builed by Django.",
        link:"https://github.com/zzhalex/py-django-app",
    },
    {
        name:"HotCook",
        tech:"ruby.svg",
        description:"HotCooks is a website where users can share their recipes, cooking materials. Built by Ruby on Rails.",
        link:"https://csil-git1.cs.surrey.sfu.ca/mca117/HotCooks",
    },
]

let demoInfo = {
    title:"Feel free to check the Demo",
    subtitle:"I deployed few apps to Heroku. All these servers are free 🙌🏻, so may take few seconds to wake up.",
    app:[
        {
            name:"Market Place",
            link:"https://marketplacesite.herokuapp.com/",
        },
        {
            name:"Weather Map",
            link:"https://frozen-lowlands-51397.herokuapp.com/",
        }
    ]
}

let textInfo = {
    "headerinfo":headerinfo,
    "profileinfo":profileinfo,
    "homepageInfo":homepageInfo,
    "resumeInfo":resumeInfo,
    "projectInfo":projectInfo,
    "demoInfo":demoInfo,
}



export default textInfo
