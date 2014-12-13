var bio = {
	"name": "Cheryl Court",
	"role": "Web Developer",
	"contacts": {
		"mobile": "123-456-789",
		"email": "cheryl.court@gmail.com",
		"github": "cherylcourt",
		"twitter": "@cherylcourt",
		"location": "Edmonton, Alberta, Canada"
	},
	"picture": "images/me.png",
	"welcomeMessage": "I'm currently working as a Software Developer in Edmonton, Alberta, Canada.  I grew up in southern Ontario and moved to Alberta after "+
	"finishing my undergraduate degree at the University of Windsor. Thanks for stopping by!.",
	"skills": ["Java", "python", "Software Development", "Test Driven Development", "Retrospective Facilitation"]
};

var work = {
	"jobs": [
		{
			"employer": "Enbridge",
			"title": "Software Developer",
			"location": "Edmonton, Alberta, Canada",
			"datesWorked": "September 2008 - Present",
			"description": "I do stuff"
		},
		{
			"employer": "Epcor",
			"title": "Systems Analyst",
			"location": "Edmonton, Alberta, Canada",
			"datesWorked": "September 2003 - April 2006",
			"description": "I did stuff here too"
		},
		{
			"employer": "Matrikon",
			"title": "Programmer",
			"location": "Edmonton, Alberta, Canada",
			"datesWorked": "March 2002 - September 2003",
			"description": "I did stuff here too"
		},
		{
			"employer": "University of Windsor",
			"title": "Teaching Assisstant / Computer Centre Support / Computer Science Tutor",
			"location": "Windsor, Ontario, Canada",
			"datesWorked": "September 1998 - April 2001",
			"description": "I did stuff here too"
		},
		{
			"employer": "ABB",
			"title": "Praktikant",
			"location": "Baden, Switzerland",
			"datesWorked": "May 2000 - August 2000",
			"description": "I did stuff here too"
		},
		{
			"employer": "Ontario Power Generation",
			"title": "Programmer",
			"location": "Kincardine, Ontario, Canada",
			"datesWorked": "September 1999 - December 1999",
			"description": "I did stuff here too"
		},
		{
			"employer": "Cornerstone Technology",
			"title": "Software Developer",
			"location": "Windsor, Ontario, Canada",
			"datesWorked": "May 1998 - April 1999",
			"description": "I did stuff here too"
		}
	]
};

var education = {
	"schools": [
		{ "name": "University of Windsor",
			"datesAttended": "1996 - 2001",
			"location": "Windsor, Ontario, Canada",
			"degree": "B.Sc.(Hon) Software Engineering",
			"major": "Computer Science",
			"minor": "Germanic Studies",
			"url": "www.uwindsor.ca"
		}		
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud304"
		},	
		{ "school": "Udacity",
			"title": "Web Development",
			"completed": "August 2014",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Online Portfolio",
			"datesWorked": "October 2014",
			"description": "Created an online portfolio of work",
			"images": ["images/zen_garden_crop.png"],
			"url": "http://cherylcourt.tctimmeh.webfactional.com/"
		},
		{
			"title": "Web Development Wiki",
			"datesWorked": "June 2014 - August 2014",
			"description": "Created an online wiki for the Udacity Web Development Course",
			"images": ["images/web.jpg"],
			"url": "http://helpful-kit-572.appspot.com/"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();


$("#mapDiv").append(googleMap);


