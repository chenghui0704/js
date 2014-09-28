var WG2MG = function(wgLon, wgLat) {
    if (WG2MG._outOfChina(wgLon, wgLat)) return [wgLon, wgLat];
    var dLat = WG2MG._transformLat(wgLon - 105.0, wgLat - 35.0);
    var dLon = WG2MG._transformLon(wgLon - 105.0, wgLat - 35.0);
    var radLat = wgLat / 180.0 * Math.PI;
    var magic = Math.sin(radLat);
    magic = 1 - WG2MG.EE * magic * magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((WG2MG.A * (1 - WG2MG.EE)) / (magic * sqrtMagic) * Math.PI);
    dLon = (dLon * 180.0) / (WG2MG.A / sqrtMagic * Math.cos(radLat) * Math.PI);
    //return [wgLon + dLon, wgLat + dLat];
    return new AMap.LngLat(wgLon + dLon, wgLat + dLat);
};
WG2MG.A = 6378245.0;
WG2MG.EE = 0.00669342162296594323;
WG2MG._transformLat = function(x, y) {
    var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
    return ret;
};
WG2MG._transformLon = function(x, y) {
    var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
    return ret;
};