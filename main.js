
/*1.Crie a função setup 
2. Crie um canva com 280 de largura e 280 de altura
3.Coloque o canva no center
4.Defina a cor de fundo para branco
5.Utilize o código ' canvas.mouseReleased(classifyCanvas)' para que no seu canva
seja aplicado o 'classifyCanvas'
6.Utilize o código ' synth = window.speechSynthesis' para colocar a api da voz no seu site.*/

/*1.Crie a função preload 
2.Utilize o código 'classifier = ml5.imageClassifier('DoodleNet');' para aplicar 
o modelo pré treinado 'DoodleNet'*/

/*1. Crie a função clearCanvas 
2. Defina a cor de fundo de branco para branco*/


function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
  }
  
  function preload() {
  
  
    classifier = ml5.imageClassifier('DoodleNet');
  }
  
  
  
  function clearCanvas() {
  
    background("white");
  }
  
  function draw() {
  
    //Defina strokeWeight como 13
    strokeWeight(13);
    //Defina a cor de stroke como preto
    stroke(0);
    //Se o moude for clicado, desenhe uma linha entre a posição antiga e atual do mouse
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
  
  function classifyCanvas() {
    classifier.classify(canvas, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    console.log(results);
    var result = results[0].label;
    document.getElementById('label').innerHTML = 'Nome: ' + result.replace('_', ' ');
  
  
    document.getElementById('confidence').innerHTML = 'Precisão: ' + Math.round(results[0].confidence * 100) + '%';
  
    utterThis = new SpeechSynthesisUtterance(result.replace('_', ' '));
    synth.speak(utterThis);
    
  }
  











