var bio = {
    "name": "Nabil Idris",
    "role": "Front-End Developer",
    "contacts": {
        "email": "nabilarif14@gmail.com",
        "github": "https://github.com/Baller99",
        "location": "Wichita, KS"
    },
    "welcomeMessage": "Welcome!",
    "skills": [
        "HTML", "CSS", "JavaSricpt", "PHP", "Wordpress", "jQuery"
    ],
    "bioPic": "images/mylogo.png"
};

bio.display = function() {
    var formattedname = HTMLheaderName.replace("%data%", bio.name);
    var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
    var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedrole);
    $("#header").prepend(formattedname);
    $("#topContacts").append(formattedemail);
    $("#topContacts").append(formattedgithub);
    $("#topContacts").append(formattedlocation);
    $("#header").append(formattedpic);
    $("#header").append(formattedmsg);
    $("#header").append(HTMLskillsStart);
    $("#footerContacts").append(formattedemail, formattedgithub, formattedlocation);


    for (var i = 0; i < bio.skills.length; i++) {
        var skills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(skills);
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Intrust Bank Arena",
        "title": "Marketing & Sales Intern",
        "location": "Wichita, KS, US",
        "dates": "Sept 2014-Dec 2014",
        "description": "Assist Marketing and Sales department in daily activities"
    }]
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer +
            formattedTitle;
        $(".work-entry:last").append(
            formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

work.display();


var projects = {
    "projects": [{
        "title": "Arcade Game Clone",
        "dates": "2015",
        "description": "Clone of classic arcade game made using HTML 5 canvas and JavaScript",
        "images": ["images/arcade_game.png"]
    },  {
        "title": "Website Optimization",
        "dates": "2015",
        "description": "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
        "images": ["images/project4.png"]
    },  {
        "title": "Neighborhood Map",
        "dates": "2015",
        "description": "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest.",
        "images": ["images/project5.png"]
    },  {
        "title": "Feed Reader Testing",
        "dates": "2015",
        "description": "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
        "images": ["images/project6.png"]
    }]
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

var education = {
    "schools": [{
        "name": "Wichita State University",
        "location": "Wichita, KS, US",
        "degree": "BBA",
        "major": "Marketing",
        "dates": "2013-2015"
    }, {
        "name": "North Seattle Community College",
        "location": "Seattle, WA, US",
        "degree": "Associates",
        "major": "Associate of Business Administration",
        "dates": "2011-2013"
    }],

    "onlineCourses": [{
        "title": "Front-End Developer Nanodegree",
        "school": "Udacity",
        "dates": 2015,
        "url": "https://www.udacity.com/"
    }, {
        "title": "Wordpress Developer Bluprint",
        "school": "Skillcrush",
        "dates": 2015,
        "url": "http://skillcrush.com/"

    }]
}

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart)

        var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var schoolNameDegree = schoolName + schoolDegree;
        $(".education-entry:first").append(
            schoolNameDegree);
        var schoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:first").append(
            schoolDate);
        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:first").append(
            schoolLocation);
        var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:first").append(
            schoolMajor);
    }

    for (online in education.onlineCourses) {
        var onlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var onlinetitleSchool = onlinetitle + onlineSchool;
        $(".education-entry:last").append(
            onlinetitleSchool);
        var onlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        $(".education-entry:last").append(
            onlineDate);
        var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").append(
            onlineUrl);
    }
    $(".education-entry:first").append(HTMLonlineClasses);
};

education.display();



$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});



/* function inName(name) {
	name =name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
		name[0].slice(1).toLowerCase();

	return name[0] +" " + name[1];
}

$("#main").append(internationalizeButton); */



$("#mapDiv").append(googleMap);