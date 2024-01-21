

$('#Duration .text').click(function(){
    $('.content').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
});

$('#getting-started').countdown('2028/11/20', function(event) {
    $(this).html(event.strftime('days :%M:%S'));
    $(this).html(event.strftime(`<div class="single-count"><h2>%D</h2><span>Days</span></div>
    <div class="single-count"><h2>%H</h2><span>Hours</span></div>
    <div class="single-count"><h2>%M</h2><span>Minutes</span></div>
    <div class="single-count"><h2>%S</h2><span>Seconds</span></div>

    `));
  });

   const textarea = document.getElementById('myTextarea');

   const characterCountDisplay = document.getElementById('characterCount');
   
   let counter = 100;
   
   textarea.addEventListener('input', updateCharacterCount);

   function updateCharacterCount() {
     const text = textarea.value.length;
     characterCountDisplay.textContent = `${counter} Remaining`;
     counter--;

     if(counter == 0){
        alert("You have reached your limit");
     }
   }
updateCharacterCount();





























  let sidebarinnerWidth = $(".sideBar-inner").innerWidth();
  $("#sideBar").animate({left : - sidebarinnerWidth},1);


  let colorBox = $(".color-box")
    colorBox.eq(0).css("backgroundColor" , "#90c");
    colorBox.eq(1).css("backgroundColor" , "teal");
    colorBox.eq(2).css("backgroundColor" , "orange");
    colorBox.eq(3).css("backgroundColor" , "#888");
    colorBox.eq(4).css("backgroundColor" , "lightgreen");
    colorBox.eq(5).css("backgroundColor" , "white");


    colorBox.click(function(e){
        let bgColor = $(e.target).css("backgroundColor");
        $(".hambozo").css("color" , bgColor)
    });


    $("#sideBar i").click(function(){
        if($("#sideBar").css('left')== "0px")
        {
            $("#sideBar").animate({left : -sidebarinnerWidth},1000);
        }
        else{
            $("#sideBar").animate({left :0},1000);
            
        }
    })

    $(".img-icon").click(function(e){
        let imgSrc = e.target.getAttribute("src");
        $(".home").css("backgroundImage" , `url(${imgSrc})`)
    })



    $(".nav-link").click(function(e) {
        e.preventDefault(); 
        var $target = $(e.target);
        $target.addClass("active"); 
        $target.siblings().removeClass("active"); 
      });
/********end sec 1**********/




