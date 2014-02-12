//init
function run()
{
	document.getElementById("que").innerHTML="Acquire Knowledge 47 version 0.1"
	log = [];
	initQ();
	nextQ(null);
}
/*Vars
 * cq = current question
 * caws = current answers (ordered)
 * score, antiscore, mult = score vars
 * casS = canSelect?
 * log = log var
 */
var cq = null;
var caws = null;
var score = 0;
var antiscore = 0;
var mult = 0;
var canS = false;
var log = null;

//Initialize new Question
function nextQ(q)
{
	if (q != null)
	{
			cq = q;		
			//Display Question
			document.getElementById("kat").innerHTML=q.thema;
			document.getElementById("que").innerHTML=q.frage;
			
			var aws = [q.aw,q.awf1,q.awf2,q.awf3]
			caws = aws;
			shuffle(caws);
			
			//Display Answer
			for (i = 0; i <= 3; i++)
			{
				document.getElementsByClassName("aws")[i].innerHTML = aws[i];
				document.getElementsByClassName("aws")[i].style.backgroundColor="#2A2C2B";
			}
			canS = true;
	}
	else
	{
			nextQ(getQuestionByRandom());
	}
	
}

//Gets called if a awnser-div is clicked. f = index of Box
function aws(f)
{
	if (canS && cq)
	{
		canS = false
		var clicked = document.getElementsByClassName("aws")[f];
		var idofcq = getIdByQuestion(cq);
		if (f == caws.indexOf(cq.aw))
		{
			//WIN
			score += 10+mult;
			mult += 1;
			log.unshift("f"+idofcq+"  <span class=\"r\">+"+(10+mult) +"</span>");
			
			//Bonus
			if (mult % 5 == 0)
			{
				score += mult;
				log.unshift("<span class=\"s\">Bonus!!! +"+mult+"</span>");	
			}
			changePriority(cq);
			color(f,"#448844");
		}
		else
		{
			//FAIL
			if (10-mult < 0)
			{
				antiscore -= 1
			}
			else
			{
				antiscore -= 10-mult;
			}
			log.unshift("f"+idofcq+"  <span class=\"f\">"+(-10-mult)+"</span>");
			mult = 0;
			color(f,"#884444");
			color(caws.indexOf(cq.aw),"#448844");
			
		}
		updateStat();
		window.setTimeout(function() { nextQ(getQuestionByRandom()) },1000);
	}
}
//Colors a field(w) with a color c
function color(w,c)
{
	document.getElementsByClassName("aws")[w].style.backgroundColor=c;
}
//Stats

function updateStat()
{
	var il = document.getElementsByClassName("info")[0];
	var ir = document.getElementsByClassName("info")[1];
	
	il.innerHTML="Main Score	->	"+score+"<br/>Anti Score		->		"+antiscore +"<br/>absScore		->		"+(score-antiscore)+"<br/>Bonus:	->	"+mult+"<br/><br/>Level 0: "+succSize(answ0)+"<br/>Level 1: "+succSize(answ1)+"<br/>Level 2: "+succSize(answ2)+"<br/>Level 3: "+succSize(answ3);
	ir.innerHTML="";
	for (i = 0; i < log.length; i++)
	{
		ir.innerHTML+=log[i] + "<br/>";
	}
	
}


//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


