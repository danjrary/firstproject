$(window).mousemove(function(evt){
  var x = evt.pageX
  var y = evt.pageY
  // console.log(x + "," + y) 
  // 用console檢測是否有抓到數值
  $("#cross").css("left",x+"px")
  $("#cross").css("top", y+"px")
  
  if (x < $(window).width()/2 - 50){
    $("#cat").attr("src", "http://awiclass.monoame.com/catpic/cat_left.png")
  }
    
  if (x > $(window).width()/2 + 50){
    $("#cat").attr("src", "http://awiclass.monoame.com/catpic/cat_right.png")
  }
  
  if ( Math.abs(x - $(window).width()/2 )< 50){     $("#cat").attr("src","http://awiclass.monoame.com/catpic/cat_top.png")
  }
  
  if (x< $(window).width()/2 -50 && y < $(window).height()/2){
    $("#cat").attr("src", "http://awiclass.monoame.com/catpic/cat_lefttop.png")
  }
  
  if (x > $(window).width()/2 +50 && y < $(window).height()/2){
    $("#cat").attr("src", "http://awiclass.monoame.com/catpic/cat_righttop.png")
  }
  
})