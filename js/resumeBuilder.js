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
	"welcomeMessage": "Welcome to my resume!",
	"skills": ["python", "software development", "TDD"]
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
			"url": "https://www.udacity.com/course/ud304"
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
			"images": ["http://placehold.it/350x150"]
		},
		{
			"title": "Web Development Wiki",
			"datesWorked": "June 2014 - August 2014",
			"description": "Created an online wiki for the Udacity Web Development Course",
			"images": ["images/web.jpg"]
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
$("#header").append(HTMLskillsStart);

for(i in bio.skills) {
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
}

