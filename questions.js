var all = null;
var answ0 = null
var answ1 = null;
var answ2 = null;
var answ3 = null;

function initQ()
{
	all = [];
	answ0 = [];
	initquestions();
	answ1 = [];
	answ2 = [];
	answ3 = [];
}
function initquestions()
{
	var i = 0;
	while (window['f'+i] != null)
	{
		all.push(window['f'+i]);
		answ0.push(window['f'+i]);
		i++
	}
}
function getL()
{
	return all.length;
}

function getQuestionById(x)
{
	return all[x];
}
function getIdByQuestion(q)
{
	return all.indexOf(q);
}
function getQuestionByRandom()
{
	return shuffle(answ0).concat(answ1).concat(answ2)[0];
}
function changePriority(f)
{
	if (!ifinpush(answ0,answ1,f))
	{
		if (!ifinpush(answ1,answ2,f))
		{
			if (!ifinpush(answ2,answ3,f))
			{
				if (answ3.indexOf(f) != -1)
				{
				}
			}
		}
	}
}
function succSize(a)
{
	return a.length;
}
function ifinpush(a,b,f)
{
	if (a.indexOf(f) != -1)
	{
		b.push(f);
		a.splice(a.indexOf(f),1);
		return true;
	}
	return false;
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//Questions
var f0={
thema :"Bäume",
frage : "Welches ist keine Traversierungsart?",
aw  : "suborder", 
awf1  : "preorder",
awf2 : "postorder",
awf3  : "inorder",
};

var f1={
thema :"TechGI",
frage : "Wofür steht FPGA?",
aw  : "Field Programmable Gate Array", 
awf1  : "Final Port Gate Array",
awf2 : "Fixed Portable Great Awesome",
awf3  : "Frequently Programmed Game Application",
};

var f2={
thema :"Listenfunktionale",
frage : "Welche dieser Listenfunktionale wendet eine übergebene Funktion auf jedes Element der Liste an?",
aw  : "map", 
awf1  : "reduce",
awf2 : "filter",
awf3  : "Es gibt kein Listenfunktional, das so etwas kann",
};


var f3={
thema :"Monaden",
frage : "Mit welchem Operator können z.B IO-Befehle verkettet werden?",
aw  : "&", 
awf1  : "++",
awf2 : "::",
awf3  : "&&",
};


var f4={
thema :"Listenfunktionale",
frage : "Wofür ist reduce zuständig",
aw  : "Listenelemente zusammenfassen", 
awf1  : "Datentyp der Listenelemente ändern",
awf2 : "Liste komprimmieren",
awf3  : "Programmcode verkürzen",
};

var f5={
thema :"Datentypen",
frage : "TYPE book == book(author : person,<br/>title : denotation ,<br/>year : nat<br/>Welcher Datentyp liegt hier vor?",
aw  : "Produkttyp", 
awf1  : "Summentyp",
awf2 : "Aufzählungstyp",
awf3  : "Rekursiver Datentyp",
};


var f6={
thema :"Datentypen",
frage : "TYPE book == book(author : person,<br/>title : denotation ,<br/>year : nat<br/>Welcher der Folgenden Teile gehört nicht zur induzierten Signatur",
aw  : "FUN book person ** denotation -> book", 
awf1  : "SORT book",
awf2 : "FUN book: person ** denotation ** nat -> book",
awf3  : "FUN book?: book -> bool",
};


var f7={
thema : "Bäume",
frage : "Um was für eine Traversierungsart handelt es sich bei preOrder",
aw  : "root - left - right", 
awf1  : "left - right - root",
awf2 : "left - root - right",
awf3  : "right root left",
};


var f8={
thema : "Bäume",
frage : "Um was für eine Traversierungsart handelt es sich bei inOrder",
aw  : "left - root - right", 
awf1  : "left - right - root",
awf2 : "root - left - right",
awf3  : "right root left",
};

var f9={
thema : "Bäume",
frage : "Um was für eine Traversierungsart handelt es sich bei postOrder",
aw  : "left - right - root", 
awf1  : "left - root - right",
awf2 : "root - left - right",
awf3  : "right root left",
};

var f10={
thema : "Bäume",
frage : "Was für einen Vorteil hat eine inOrder Traversierung auf einem sortiertem Binärbaum?",
aw  : "Die generierte Liste ist Sortiert", 
awf1  : "Schnelle Laufzeit",
awf2 : "Die generierte Liste ist minimal groß",
awf3  : "Alle Wurzeln stehen hintereinander",
};

var f11={
thema : "Bäume",
frage : "Was geschieht, wenn man bei einem Baum mit mehr als einem Knoten eine Kante entfernt?",
aw  : "Es entsteht ein Wald", 
awf1  : "nicht geschieht",
awf2 : "Der Wert des zugehörigen Blattes geht für immer verloren",
awf3  : "Kanten können nicht entfernt werden",
};

var f12={
thema : "Listenfunktionale",
frage : "Welches der Folgenden ist kein Listenfunktional",
aw  : "split", 
awf1  : "map",
awf2 : "filter",
awf3  : "reduce",
};


var f13={
thema : "Listenfunktionale",
frage : "Was macht filter?",
aw  : "Selektiert alle Elemente, die ein bestimmtes Prädikat erfüllen und entfernt sie aus der Liste", 
awf1  : "Löscht doppelte Elemente",
awf2 : "filtert alle Elemente, die kleiner als ein eingegebenes sind aus der Liste",
awf3  : "sortiert die Liste",
};


var f14={
thema : "MPGI1",
frage : "Wie heißt der Erfinder der Programmiersprache OPAL?",
aw  : "Dr.Pepper", 
awf1  : "Professor Pepsi",
awf2 : "Vitali Cola",
awf3  : "Prof. Dr. Opalos III",
};

var f15={
thema : "Bäume",
frage : "Was ist ein Binärbaum?",
aw  : "Baum mit höchstens 2 Nachfolgern", 
awf1  : "Baum mit mindestens 2 Nachfolgern",
awf2 : "Baum mit binärem Knoteninhalt",
awf3  : "Baum mit 2 Knoten",
};

var f16={
thema : "Aufwandsberechnung",
frage : "Was ist größer O(n²) oder O(n log(n))?",
aw  : "O(n²)", 
awf1  : "O(n log(n))",
awf2 : "gleich groß",
awf3  : "keine Ahnung",
};

var f17={
thema : "Aufwandsberechnung",
frage : "FUN g: nat -> nat<br/>DEF g(n) == f(n-1) +5<br/> Welcher der Folgenden ist der passende Aufwandsterm?",
aw  : "A(f(n-1)) + A(+)", 
awf1  : "A(g(n+1)) + A(*)",
awf2 : "A(f(n)) + A(+)",
awf3  : "A(f(n-1)) + A(g(n))",
};

var f18={
thema : "Aufwandsberechnung",
frage : "Wie viele Rekurrenzrelationen gibt es?",
aw  : "5", 
awf1  : "7",
awf2 : "3",
awf3  : "4",
};


var f19={
thema : "Rekursion",
frage : "Was ist eine verschränkte Rekursion?",
aw  : "2 Funktionen die sich gegenseitig aufrufen", 
awf1  : "Eine Funktion die nur sich selbst aufruft",
awf2 : "Eine schnell wachsende Tail-Recursion",
awf3  : "Eine Baumartige Rekursion mit Aufwand O(n)",
};


var f20={
thema : "Rekursion",
frage : "Was passiert bei einer baumartigen Rekursion?",
aw  : "Rekursionsaufrufe wachsen zu Baumartiger struktur an", 
awf1  : "Der Rekursionsanker wird nie erreicht",
awf2 : "Die Parameter werden nicht inkrementiert",
awf3  : "Es entsteht ein Rot-Schwarz Baum",
};

var f21={
thema : "Konstrukte",
frage : "IF x < 5 THEN 1<br/>IF x > 5 THEN 2<br/>IF x = 5 THEN 3<br/>Wie heißt diese Struktur?",
aw  : "Dijkstra-IF", 
awf1  : "Synthetic-If",
awf2 : "Pepper-IF",
awf3  : "Elseless-IF",
};

var f22={
thema : "Rekursion",
frage : "f(x) = f(x-1)<br/>Um welche Rekursionsart handelt es sich?",
aw  : "Repetitive Rekursion/Tail-Recursion", 
awf1  : "Lineare Rekursion",
awf2 : "Geschachtelte Rekursion",
awf3  : "Verschränkte Rekursion",
};


var f23={
thema : "Rekursion",
frage : "f(x) = 1 + f(x-1)<br/>Um welche Rekursionsart handelt es sich?",
aw  : "Lineare Rekursion", 
awf1  : "Repetitive Rekursion/Tail-Recursion",
awf2 : "Geschachtelte Rekursion",
awf3  : "Verschränkte Rekursion",
};


var f24={
thema : "Rekursion",
frage : "f(x) = f(x-1) + f(x-2)<br/>Um welche Rekursionsart handelt es sich?",
aw  : "Baumartige Rekursion", 
awf1  : "Repetitive Rekursion/Tail-Recursion",
awf2 : "Geschachtelte Rekursion",
awf3  : "Verschränkte Rekursion",
};


var f25={
thema : "Rekursion",
frage : "f(x) = f(f(x*2))<br/>Um welche Rekursionsart handelt es sich?",
aw  : "Geschachtelte Rekursion", 
awf1  : "Repetitive Rekursion/Tail-Recursion",
awf2 : "Lineare Rekursion",
awf3  : "Verschränkte Rekursion",
};


var f26={
thema : "Rekursion",
frage : "f(x) = g(x-1)<br/>g(x) = f(x-1)<br/>Um welche Rekursionsart handelt es sich?",
aw  : "Verschränkte Rekursion", 
awf1  : "Repetitive Rekursion/Tail-Recursion",
awf2 : "Lineare Rekursion",
awf3  : "Baumartige Rekursion",
};


var f27 ={
thema : "Datentypen",
frage : "Welche der folgenden Signaturen passt zu einem Diskriminator",
aw  : "FUN cat?: animal -> bool", 
awf1  : "FUN name: animal -> string",
awf2 : "FUN cat: string ** nat -> cat",
awf3  : "FUN catConv: cat -> dog",
};

var f28 ={
thema : "Datentypen",
frage : "TYPE animal = cat(name: string, age: nat)<br/>Welche der folgenden induzierten Signaturen passt zu einem Selektor für den Namen einer Katze?",
aw  : "FUN name: animal -> string", 
awf1  : "FUN cat?: cat -> bool",
awf2 : "FUN cat: string ** nat -> cat",
awf3  : "FUN catConv: cat -> dog",
};

var f29 ={
thema : "Datentypen",
frage : "Welche der folgenden Signaturen passt zu einem Konstruktor",
aw  : "FUN cat: string ** nat -> cat", 
awf1  : "FUN cat?: animal -> bool",
awf2 : "FUN name: animal -> string",
awf3  : "FUN catConv: cat -> dog",
};

var f30 ={
thema : "Datentypen",
frage : "TYPE animal = cat(name: string,age:nat)<br/>\tdog(name: string)<br/>Welcher Datentyp liegt hier vor",
aw  : "Summentyp", 
awf1  : "Produkttyp",
awf2 : "Aufzählungstyp",
awf3  : "Rekursiver Datentyp",
};

var f31 ={
thema : "Datentypen",
frage : "DATA animal = cat dog karakal elefant<br/>Welcher Datentyp liegt hier vor",
aw  : "Aufzählungstyp", 
awf1  : "Produkttyp",
awf2 : "Summentyp",
awf3  : "Rekursiver Datentyp",
};


var f32 ={
thema : "Datentypen",
frage : "TYPE tree = node(key:alpha, left: tree, right: tree<br/>\tnil<br/>Welcher Datentyp liegt hier vor",
aw  : "Rekursiver Datentyp", 
awf1  : "Produkttyp",
awf2 : "Summentyp",
awf3  : "Aufzählungstyp",
};


var f33 ={
thema : "Listenfunktionale",
frage : "FUN xxx: (in -> bool) ->  seq[in] -> seq[in]<br/> Die Signatur welches Listenfunktionals liegt hier vor?",
aw  : "filter", 
awf1  : "map",
awf2 : "reduce",
awf3  : "zip",
};

var f34 ={
thema : "Listenfunktionale",
frage : "FUN xxx: (a ** b -> c) ** b  ->  seq[a] ** seq[b] -> seq[c]<br/> Die Signatur welches Listenfunktionals liegt hier vor?",
aw  : "zip", 
awf1  : "map",
awf2 : "reduce",
awf3  : "filter",
};

var f35 ={
thema : "Listenfunktionale",
frage : "FUN xxx: (a ** b -> b) ** b -> seq[a] -> b<br/> Die Signatur welches Listenfunktionals liegt hier vor?",
aw  : "reduce", 
awf1  : "map",
awf2 : "filter",
awf3  : "zip",
};

var f36 ={
thema : "Listenfunktionale",
frage : "FUN xxx: (a -> b) ->  seq[a] -> seq[b]<br/> Die Signatur welches Listenfunktionals liegt hier vor?",
aw  : "map", 
awf1  : "filter",
awf2 : "reduce",
awf3  : "zip",
};

var f37 ={
thema : "Bäume",
frage : "Was bezeichnet man mit der Größe eines Baumes",
aw  : "Anzahl der Knoten", 
awf1  : "Länge des längsten Pfades",
awf2 : "Anzahl der Kanten",
awf3  : "Größter Wert",
};

var f38 ={
thema : "Bäume",
frage : "Was bezeichnet man mit der Höhe eines Baumes",
aw  : "Länge des längsten Pfades", 
awf1  : "Anzahl der Knoten",
awf2 : "Anzahl der Kanten",
awf3  : "Größter Wert",
};

var f39 ={
thema : "Bäume",
frage : "Was bezeichnet man mit der Pfadlänge eines Baumes",
aw  : "Anzahl der Kanten", 
awf1  : "Länge des längsten Pfades",
awf2 : "Anzahl der Knoten",
awf3  : "Größter Wert",
};
