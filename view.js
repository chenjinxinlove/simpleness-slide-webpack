var View = function (){

}
View.prototype.scView = function(data){
  var str ='<div class="slide-main slide-main-{{key}}">'+
              '<img  src="img/{{img}}" alt="1">'+
              '<div class="caption">'+
                '<h1>{{h1}}</h1>'+
                '<h2>{{h2}}</h2>'+
              '</div>'+
          '</div>';
  var str1 = '<div class="slide-ctrl-i slide-ctrl-i-{{key}}"></div>';
  var arr = new Array();
  var arr1 = new Array();
  for (var key in data) {
    if (!data.hasOwnProperty(key)){
      continue;
    }

    var _html = str.replace('{{img}}',data[key].img)
                    .replace('{{key}}',key)
                    .replace(/{{h1}}/,data[key].h1)
                    .replace(/{{h2}}/,data[key].h2);
    var _html1 = str1.replace('{{key}}',key);
    arr.push(_html);
    arr1.push(_html1);



  }
  str = arr.join('');
  str1 = arr1.join('');
  document.getElementById('slide-m').innerHTML=str;
  document.getElementById('slide-ctrl').innerHTML=str1;
}

module.exports = View;
