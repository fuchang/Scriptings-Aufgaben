/*
   Suchen und Finden
   -----------------
   Arbeiten mit Objekten, eine Reihe an Aufgaben zum Training
   von Schleifen und Bedingungen.
 */

// 0. "Lade" Dein "Semester" so, dass Du es überall über den
//    Namen _semester_ erreichen kannst.

// console.log(semester); // Teste, ob alles gut ging.



// 1. Drucke jede Veranstaltung einzeln(!) in die Console.

for (var i=0; i < semester.veranstaltungen.length; i++) {
  console.log(semester.veranstaltungen[i]);
};


// 2. ... in einem _formatierten_ Text.


for (var i=0; i < semester.veranstaltungen.length; i++) {
	var titel = semester.veranstaltungen[i].titel;
	var sws   = semester.veranstaltungen[i].sws + "SWS";    	
	console.log(titel,sws);
};



// 3. Wie viele Credits hast Du in diesem Semester?
var gesamt_credits= 0;
for (var i=0; i < semester.veranstaltungen.length; i++){
     gesamt_credits += semester.veranstaltungen[i].credits
};


// 4. ... und wie hoch ist Dein Workload?
var gesamt_workload =0;
for (var i=0; i < semester.veranstaltungen.length; i++){
     gesamt_workload += semester.veranstaltungen[i].workload
};



// 5. Finde die Veranstaltung mit den meisten Credits.
var joker ＝0;
for (var i = 0; i<semester.veranstaltungen.length; i++){ 
	if (semester.veranstaltungen[i].credits > joker){ 
		joker = semester.veranstaltungen[i].credits;
	} 
};


// 6. Erstelle ein Array mit allen Titeln der Veranstaltungen
//    Benutze dafür die Push-Funktion eines Arrays.
var veranstaltungstitel = [];
var v = semester.veranstaltungen;

for (var i=0; i<v.length; i++) {
  var eineVeranstaltung = v[i];
  veranstaltungstitel.push(eineVeranstaltung.titel);
}

console.log(veranstaltungstitel);



// 7. Generiere den Satz:
//    "<mein_name> hat in diesem Semester <Seminar1>,<Seminar1>
//     ... und <letztes_Seminar> belegt."
var satz;

satz = semester.student.name+ " hat in diesem Semester ";

var letzteVeranstaltung = veranstaltungstitel.pop();

/*
for (var i=0; i<veranstaltungstitel.length; i++) {
  // Tip: if....
  satz += veranstaltungstitel[i];
  if(i<veranstaltungstitel.length-1) {
    satz+=", "   
  }
}
*/

satz += veranstaltungstitel.join(", ")+ " und "+letzteVeranstaltung+" belegt.";

console.log(satz);




// 8. Lade Deine Kommilitonen dazu und erstelle ein Array
//    mit allen, in diesem Semester belegten Veranstaltungen.
//    Achte darauf, dass keine doppelt darin vorkommen!

var veranstaltungstitel= [];
var v = semester.veranstaltungen;

for (var i=0; i<v.length; i++) {
  var eineVeranstaltung = v[i];
  veranstaltungstitel.push(eineVeranstaltung.titel);
}

//console.log(veranstaltungstitel);

var veranstaltungstitel_christoph = [];
var v = semester1.veranstaltungen;

for (var i=0; i<v.length; i++) {
  var eineVeranstaltung = v[i];
  veranstaltungstitel_christoph.push(eineVeranstaltung.titel);
}

//console.log(veranstaltungstitel_christoph);

var gesamt_veranstaltungen;
gesamt_veranstaltungen = veranstaltungstitel.concat(veranstaltungstitel_christoph);

//console.log(gesamt_veranstaltungen);//hier kommt alle veranstaltungen


for(var i=0; i<gesamt_veranstaltungen.length; i++)
 {
  for(var j=i+1; j<gesamt_veranstaltungen.length;j++)
  {
   if(gesamt_veranstaltungen[i] !== gesamt_veranstaltungen[j])
   {
    gesamt_veranstaltungen = 
   }
  }
 }




