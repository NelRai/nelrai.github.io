var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})


var newLayer = new ol.layer.Tile({
source: new ol.source.OSM({
    url: 'C:/Users/nelso/Downloads/work/lexeri-svg/data.json',
    crossOrigin: null
    })
});
