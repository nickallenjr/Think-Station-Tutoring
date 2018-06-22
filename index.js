$(function () {

	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyA5K9T075LyMSThhgpE7MyXfj9TM-NqpLo",
		authDomain: "think-station-tutoring.firebaseapp.com",
		databaseURL: "https://think-station-tutoring.firebaseio.com",
		projectId: "think-station-tutoring",
		storageBucket: "",
		messagingSenderId: "211872371040"
	};

	firebase.initializeApp(config);

	//Reference to the database
	const database = firebase.database();

	const calendar = $('#calendar');

	calendar.fullCalendar({
		header: {
			left: 'month,agendaWeek,agendaDay',
			center: 'title',
			right: 'today prevYear,prev,next,nextYear'
		}
	})
});