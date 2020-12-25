var Link = {
  setColor: function(color){
      // var alist = document.querySelectorAll('.link');
      // var i = 0;
      // while(i < alist.length){
      //   alist[i].style.color = color;
      //   i = i + 1
      // }
      $('.link').css('color', color);
  }
}
var Body = {
  setColor: function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor: function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
function NightDayHandler(self){
  if(self.value === '다크모드 켬'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '다크모드 끔'
    Link.setColor('#288CE4')
    }
    else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = '다크모드 켬'
    Link.setColor('blue')
  }
}
