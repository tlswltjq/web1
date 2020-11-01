var Body = {
  setColorA : function (color){
    var list = document.querySelectorAll('a');
    var i=0 ;
    while(i<list.length){
      list[i].style.color = color;
      i++;
    }
  },

  setColorBody : function(color, backgroundColor){
    var target= document.querySelector('body');
    target.style.color =color;
    target.style.backgroundColor=backgroundColor;
  },

  ndHandler : function(self){
    if(self.value === 'night'){
      Body.setColorBodycolorB('black', 'white');
      self.value ='day';
      Body.setColorA('skyblue');
    }
    else{
      Body.setColorBodycolorB('white', 'black');
      self.value ='night';
      Body.setColorA('pink');
    }
  }
}
