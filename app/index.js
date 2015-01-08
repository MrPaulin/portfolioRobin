$(document).ready(function(){

  //Ajustement de la taile des barres du centre

  $(".center").css("height",$("#content").height()+22+"px");

  //Changement du titre
  var heure = new Date().getHours();
  if(heure>=22||heure<4){
    $("#timeofday").text("Bonne nuit");
  }
  if(heure<22&&heure>=18){
    $("#timeofday").text("Bonsoir");
  }
  if(heure<18&&heure>=10){
    $("#timeofday").text("Bonjour");
  }
  if(heure<10&&heure>=7){
    $("#timeofday").text("Good morning");
  }
  if(heure<7&&heure>=4){
    $("#timeofday").text("Il est trop tot");
  }

  //Passage au menu fixe
  $(document).on('scroll',function(){
    if($(document).scrollTop()>=$("#menu").offset().top){
      $("#menu2").show();
    }
    else {
      $("#menu2").hide();
    }
  });
  
  //Click sur le menu
  
  var links=$(".menu a");
  links.on('click',function(){
    var link=$(this);
    var href=link.attr('href');
    var target=$(href).offset().top;
    $('body,html').stop().animate({
      scrollTop:target-70
    },1000);
    return false;
  });

  //Grisage du menu

  var links=$("#menu2 a");
  var linkSections = links.map(function(){
    var href = $(this).attr('href');
    return $(href);
  });

  $(document).on('scroll',function(){

    var scrollTop = $(this).scrollTop();
    var target = scrollTop + $(window).height()/4;
    
    var current = $("#about");

    
    linkSections.each(function (){
      if($(this).offset().top < target){
        current = this;
      }
    });

  var id=current[0].id;
  
    links.removeClass('active');
    
    links.filter('[href=#'+id+']').addClass('active');

    //Apparition du sous-menu

    if(id=="portfolio"){
      $("#sousmenu").slideDown();
    }
    else{
      if($(document).scrollTop()<246){
        $("#sousmenu").css("position","absolute");
      }
      else{
        $("#sousmenu").css("position","fixed");
      }
      $("#sousmenu").slideUp();
    }

  });

  //Click sur le sous menu

  var olinks=$("#sousmenu a");
  olinks.on('click',function(){
    var link=$(this);
    var href=link.attr('href');
    var target=$(href).offset().top;
    $('body,html').stop().animate({
      scrollTop:target-110
    },1000);
    return false;
  });

  

  //Grisage du sous-menu

  var olinkSections = olinks.map(function(){
    var href = $(this).attr('href');
    return $(href);
  });

    $(document).on('scroll',function(){

    var scrollTop = $(this).scrollTop();
    var target = scrollTop + $(window).height()/4;
    var current=$("#films");
    olinkSections.each(function(){
      if($(this).offset().top<target){
        current=this;
      }
    
    var oid=current[0].id;
  
    olinks.removeClass('active');
    
    olinks.filter('[href=#'+oid+']').addClass('active'); 

    });
  });

      // Rotation des roues

  $(window).scroll(function(){
    var dist = $(document).scrollTop()/2;
    var rad = dist / 111.40846016; //dist=490 => rad=7/10*2*PI
    var rouesG = $("#rouesG .roue");
    var rouesD = $("#rouesD .roue");
    var vis = $(".vis");
    if($(document).scrollTop()>=0&&$(document).scrollTop() + $(window).height()<= $(document).height()){
      vis.css("transform", "translateY(" + -dist + "px)");
      rouesG.css("transform", "translateY(" + -dist + "px) rotate(-" + rad + "rad)");
      rouesD.css("transform", "translateY(" + -dist + "px) rotate(" + rad + "rad)");
    }
  });

  $(".fancybox").fancybox();

});


