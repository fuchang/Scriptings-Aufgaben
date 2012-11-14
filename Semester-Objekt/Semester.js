// =============================================================
// = Aufgabe: Deine Semesterbelegung als strukturiertes Objekt =
// =============================================================

var mein_semester = {
  student: {
	name:"Chang Fu",
	studiegang: "Interface Design",
	studiesemester: 3,
	welches: "WS",
    jahr: "2012/2013",
	},
	 
  veranstaltung:[
   { 
	titel: "Sound/Idea",
    sws: 2,
    credits:2,
    workload:90
    },
   {
	title:"Read & Write",
	sws:2,
	credits:3,
    workload:90
    },
   {
	title:"vvvv",
	sws:2,
	credits:2,
    workload:90
	},
   {
	title:"Scriptings",
	sws:2,
	credits:3,
    workload:90
	},
   {
	title:"poetische Apparate",
	sws:2,
	credits:3,
    workload:90
	}
   ]
};

JSON.stringify(mein_semester);
	// dann kommt:"{"student":{"name":"Chang Fu","studiegang":
	//"Interface Design","studiesemester":3,"welches":"WS",
	//"jahr":"2012/2013"},"veranstaltung":
	//[{"titel":"Sound/Idea","sws":2,"credits":2,"workload":90},
	//{"title":"Read & Write","sws":2,"credits":3,"workload":90},
	//{"title":"vvvv","sws":2,"credits":2,"workload":90},
	//{"title":"Scriptings","sws":2,"credits":3,"workload":90},
	//{"title":"poetische Apparate","sws":2,"credits":3,"workload":90}]}"
	
var jsoned_semester = JSON.stringify (mein_semester);
JSON.parse(jsoned_semester);
