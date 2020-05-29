var currentQuestion=0;
var score=0;
var totPergs=pergs.length;

var quiz=document.getElementById('quiz');
var questionEl=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var nextButton=document.getElementById('nextButton');
var resultCont=document.getElementById('result');


function loadQuestion (questionIndex){
	var q=pergs[questionIndex];
	questionEl.textContent=(questionIndex + 1) + '. ' + q.question;
	opt1.textContent=q.option1;
	opt2.textContent=q.option2;
	opt3.textContent=q.option3;
	opt4.textContent=q.option4;
};



function loadNextQuestion(){	
	var selectedOption=document.querySelector('input[type=radio]:checked');
	if (!selectedOption) {
		alert('Por favor, escolha uma resposta ^_^');
		return;
	}
	var answer = selectedOption.value;
		if (pergs[currentQuestion].answer == answer) {
		score = score + 20;
	}
			
	selectedOption.checked=false;
	currentQuestion++;
	if (currentQuestion==totPergs-1) {
		nextButton.textContent='fim';
	}

	if (currentQuestion==totPergs) {
		quiz.style.display= 'none';
		resultCont.style.display ='';
		resultCont.textContent ='Sua Pontuação : ' +score;
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

