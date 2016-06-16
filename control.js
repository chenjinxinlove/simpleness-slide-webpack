var $ = require('jquery');
var Control = function(){

};

Control.prototype.show = function(n){
  // alert(n)
  var allimg = $('.slide-main');
  // debugger;
  for (var i = 0, j=allimg.length;i<j; i++) {
    $(allimg[i]).removeClass('slide-main-active');
  }
  var allimg = $('.slide-ctrl-i');
  // debugger;
  for (var i = 0, j=allimg.length;i<j; i++) {
    $(allimg[i]).removeClass('slide-ctrl-i-active');
  }
  $('.slide-main-'+n).addClass('slide-main-active');
  $('.slide-ctrl-i-'+n).addClass('slide-ctrl-i-active');

}

Control.prototype.dj = function(){
  var me = this;
  $('.slide-ctrl-i').on('click',function(){
      var n = $(this).index();
      me.show(n);
  });
}

Control.prototype._jdn = function(){
  var allimg = $('.slide-main');
  // debugger;
  var arr = new Array();
  for (var i = 0, j=allimg.length;i<j; i++) {

    var className = $(allimg[i]).attr("class").toString();
     arr.push(className);
  }
  return arr;
}

Control.prototype.left = function(){
  var me = this;
  $('.slide-left').on('click',function(){
    var className=me._jdn();
    for (var k in className) {
      if (!className.hasOwnProperty(k)) {
        continue;
        }
        // alert(className[k]);
        if (className[k].indexOf('slide-main-active') > 0) {
          if (k==0) {
            me.show(4);
          }else{
            me.show(k-1);
          }
      }
    }
  })
}


Control.prototype.right = function(){
  var me = this;
  $('.slide-right').on('click',function(){
    var className=me._jdn();
    for (var k in className) {
      if (!className.hasOwnProperty(k)) {
        continue;
        }
        // alert(className[k]);
        if (className[k].indexOf('slide-main-active') > 0) {
          // alert(k);
          if (k==4) {
            me.show(0);
          }else{

            me.show(Number(k)+1);
          }
      }
    }
  })
}

Control.prototype.xh = function(){
  var me = this;
  setInterval(xhx,5000);
  function xhx(){
      var className=me._jdn();
      for (var k in className) {

                      if (!className.hasOwnProperty(k)) {
                        continue;
                        }

                      if (className[k].indexOf('slide-main-active') > 0) {
                                      switch (k) {
                                        case '0':
                                          me.show(Number(k)+1);
                                          break;
                                        case '4':
                                          me.show(0);
                                            break;
                                        default:
                                         me.show(Number(k)+1);

                                      }
                      }
                }
  }

}










module.exports = Control;
