var randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);

var guessField = document.querySelector('.guessField');//从文本框获取数 通过class来获得
console.log(guessField);
//  console.log(guessField.Value);
var guessSubmit = document.querySelector('.guessSubmit');
//  console.log(guessSubmit);
//  console.log(guessSubmit.Value)
var guesses = document.querySelector('.guesses');
console.log(guesses)
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessCoutn = 1;//获取随机数
var resetButtom;
//guessField.focus(); //获得焦点

function checkGues() {  //方法体 关键字function
    var userGuess = Number(guessField.value);//
    //console.log(typeof userGuess);
    //console.log(userGuess);
    //guesses.innerHTML+=userGuess+" "; //返回输入的text文本框的内容
    //guesses.style.backgroundColor="red";  //背景颜色
    if (guessCoutn === 1) {
        guesses.textContent = '您猜到的数: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = '恭喜您猜对了';
        lowOrHi.textContent = '';
        setGameOver();
    } else if(guessCoutn === 10) {
        //第10次都没猜中
        //提示游戏结束
        lastResult.textContent = '!!!GAME OVER!!!';
        //清空高低提示字符串
        lowOrHi.textContent = '';
        // 调用游戏结束函数
        setGameOver();
      }  else {
        lastResult.textContent = '你猜错了！';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = '刚才你猜低了！';
        }
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = '刚才你猜高了！';
        }
    }
    //猜数自增
    guessCoutn++;
    //清空文字区  
    guessField.value = '';
    //文字输入区获得焦点
    guessField.focus();
}
//checkGues(); //调用方法

guessSubmit.addEventListener('click', checkGues);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
//重置游戏
function resetGame() {
    guessCoutn = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}




