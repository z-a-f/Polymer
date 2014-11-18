var gMap = document.querySelector('google-map');
gMap.addEventListener('api-load', function(event){
  document.querySelector('google-map-directions').map = this.map;
});