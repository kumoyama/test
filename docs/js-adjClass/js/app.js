//------------------------------
// load
//------------------------------
$(window).on('load',function(){
  adj_class($('.item'),4);
  auto_height($('.item__name'),4);
});

//------------------------------
// trigger
//------------------------------

//------------------------------
// function
//------------------------------
// auto_height
var auto_height = function(target,columns){
  target.css({'height':'auto'});
  var c,max_h;
  target.each(function(i){
    c = i % columns;
    if(c == 0){
      max_h = $(this).height();
      for(var n = i + 1; n <= i + columns - 1; n++){
        if (max_h < target.eq(n).height()) {
          max_h = target.eq(n).height();
        }
      }
      for(var n = i; n <= i + columns - 1; n++){
        target.eq(n).css("height", max_h + "px");
      }
    }
  });
}
// adj_class
var adj_class = function(target,columns){
  var targets,c,l01,l02;
  target.each(function(i){
    c = i % columns;
    if(c == 0){ targets = []; }
    targets[c] = $(this);
    var bl01   = $(this).find('.item__label--first');
    var bl01_l = bl01.length;
    var bl02   = $(this).find('.item__label--second');
    var bl02_l = bl02.length;
    if(c == 0 || bl01_l > 0){ l01 = bl01_l; }
    if(c == 0 || bl02_l > 0){ l02 = bl02_l; }
    console.log(bl01_l)
    console.log(bl02_l)
    $.each(targets,function(){
      if(l01 > 0){ this.addClass('pt_red'); }
      if(l02 > 0){ this.addClass('pt_blu'); }
      if(l01 > 0 && l02 > 0){
        this.removeClass('pt_red pt_blu').addClass('pt_yel');
      }
    });
  });
}

// var adj_class = function(target,columns){
//   var targets,c,l01,l02;
//   target.each(function(i){
//     c = i % columns;
//     if(c == 0){ targets = []; }
//     targets[c] = $(this);
//     var bl01   = $(this).find('.item__label--first');
//     var bl01_l = bl01.length;
//     var bl02   = $(this).find('.item__label--second');
//     var bl02_l = bl02.length;
//     if(c == 0 || bl01_l > 0){ l01 = bl01_l; }
//     if(c == 0 || bl02_l > 0){ l02 = bl02_l; }
//     $.each(targets,function(){
//       if(l01 > 0){ this.addClass('pt_red'); }
//       if(l02 > 0){ this.addClass('pt_blu'); }
//       if(l01 > 0 && l02 > 0){
//         this.removeClass('pt_red pt_blu').addClass('pt_yel');
//       }
//     });
//   });
// }

// var adj_class = function(target,columns){
//   var targets,c,l01,l02;
//   target.each(function(i){
//     c = i % columns;
//     if(c == 0){
//       targets = [];
//     }
//     targets[c] = $(this);
//     var bl01   = $(this).find('.item__label--first');
//     var bl01_l = bl01.length;
//     var bl02   = $(this).find('.item__label--second');
//     var bl02_l = bl02.length;
//     if(c == 0 || bl01_l > 0){
//       l01 = bl01_l;
//     }
//     if(c == 0 || bl02_l > 0){
//       l02 = bl02_l;
//     }
//     if(l01 > 0){
//       $.each(targets,function(){
//         this.addClass('pt_red');
//       });
//     }
//     if(l02 > 0){
//       $.each(targets,function(){
//         this.addClass('pt_blu');
//       });
//     }
//     if(l01 > 0 && l02 > 0){
//       $.each(targets,function(){
//         this.removeClass('pt_red pt_blu').addClass('pt_yel');
//       });
//     }
//   });
// }
