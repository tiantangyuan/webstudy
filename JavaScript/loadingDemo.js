width +=1;
var timer;
timer = setInterval1(function(){
    $('.bar').css('width',per + '%');
    per += 1;
    if(per > 100){
        $('.pageLoading').addClass('complete');
        setTimeout(function(){
            $('.monsterText').html('<h2>We are monster</h2>')
        },3000)
        clearInterval(timer);
    }
},30)