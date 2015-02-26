function lightup () {
    this.style.background = "#8AD7D2";
}
function lightdown () {
    this.style.background = "#FFFFCC";
}
window.onload = function () {
  document.getElementById('all').innerHTML = "<a href='index.html'><div id='banner'></div></a><div id='places'></div>"+document.getElementById('all').innerHTML;
  var banner = document.getElementById('banner');
  var places = document.getElementById('places');
  banner.onmouseover = lightup;
  banner.onmouseout = lightdown;
  banner.innerHTML = "<div id='name'>Cloaked</div><div id='frhs'>- FRHS</div><div id='home'>HOME</div>";
  var placelist = [['Rules','rules'],['Tattoos','tattoos'],['Agents','agents'],['Register','register']];
  for (x=0;x<placelist.length;x++){
    var link = document.createElement('a');
    places.appendChild(link);
    var ndiv = document.createElement('div');
    link.appendChild(ndiv);
    link.href = placelist[x][1]+'.html';
    ndiv.innerHTML = placelist[x][0];
    ndiv.style.width=((998/placelist.length)-2)+'px';
    ndiv.onmouseover = lightup;
    ndiv.onmouseout = lightdown;
    ndiv.className = 'placeToGo';
  }
}