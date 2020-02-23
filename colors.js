var body = {
  setColor : function(color){
    $('body').css('color',color);
    //document.querySelector('body').style.color=color;
  },

  setbackgroundColor : function(color){
    $('body').css('backgroundColor',color);
    //document.querySelector('body').style.backgroundColor=color;
  },
}

var link = {
  setColor : function(color){
    $('a').css('color',color);
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value == 'night'){
    body.setbackgroundColor('black');
    body.setColor('white');
    self.value = 'day';
    link.setColor('powderblue');


  }
  else{
    body.setbackgroundColor('white');
    body.setColor('black');
    self.value = 'night';
    link.setColor('blue');
  }//else문 종료
}//nightDayHandler함수 종료
