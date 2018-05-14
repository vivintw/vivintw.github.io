
var MAX_NAV_TABS = 5;

function render_mobile(){
  if (/Mobi/.test(navigator.userAgent)) {
    for(var i = 1 ; i <= MAX_NAV_TABS; i++){
      var link = document.getElementById('nav_'+i);
      var arr = link.innerHTML.split('</i>');
      link.innerHTML = arr.slice(0, -1).join('</i>');
      console.log(arr.slice(0, -1).join('</i>'))
    }
  }
}
