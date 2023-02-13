var itog;
var waring = "Вы что то не ввели...";
var about_txt;
var war_code;
var what_war;
var version = "1.2";
let colorInput = document.getElementById('color');
let colorValue = colorInput.value;

colorInput.addEventListener('input', () =>{
  document.getElementById('start').style.background = colorInput.value;
  document.getElementById('bth2').style.background = colorInput.value;
});
$('#start').on('click', function(){
    itog = $('#smileik').val();
    about_txt = $('#about_text').val();
    war_code = $('#waring_text').val();
    what_war = $('#waring_what').val();
    if(!itog || !about_txt || !war_code){
        alert(waring);
    }
    else{
        console.info("[DEBUG] Скрипт выполнен!")
        console.log("[DEBUG] Цвет в скрипте:",colorValue);
        console.log("[DEBUG] Просто тест со значением:", itog, about_txt, war_code);
        launchFullScreen(bsod);
        colorInput.addEventListener('input', () =>{
          document.getElementById('colorVal').innerHTML = colorInput.value;
        });
        $('#itog1').html(itog);
        $('#code_war').html(war_code);
        $('#text').html(about_txt);
        $('#what_war').html(what_war);
        $('#bsod').css('display', 'block');
        $('#bsod').css('background-color', colorInput.value);
        $('#Main_block').css('display', 'none');
        $('#blocker').css('background-color', colorInput.value);
        var percentageElement = document.getElementById("percentage");
        var percentage = 0;
        
        function process() {
          percentage += parseInt(Math.random() * 10);
          if (percentage > 100) {
            percentage = 100;
            //location.href = "Video.html";
          }
          percentageElement.innerText = percentage;
          processInterval();
        }
        
        function processInterval() {
          setTimeout(process, Math.random() * (1000 - 500) + 500)
        }
        processInterval();
    }
});
$('#bsod').on('click', function(){
    cancelFullscreen();
    //location.href = "index.html";
    $('#bsod').css('display', 'none');
    $('#Main_block').css('display', 'block');
    $('#blocker').css('background', '#ecf0f1');
});
$(".btn").click(function(){
  $(".option").toggle('show')
})
$(".btn").on("tap", function(){
  $(".option").toggle('show')
})
//Вход в полный экран
function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
//Выход из полного экрана
function cancelFullscreen() {
    if(document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
console.log("[DEBUG] Сeйчас экран:", document.fullscreenEnabled);
console.log('%c Fake_BSOD ', 
            'color: white; background-color: #0078D7', 
            'made By Keldowin запустился | версия:"', version);