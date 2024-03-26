Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}
Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

var qs = (function (a) {
    if (a === "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length === 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

function moneyFormat(text) {
    //if (text.indexOf('-') == -1){
    if (text < 0) {
        var __text = (parseFloat(text).toFixed(2)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        var _text = __text.replace('-', '');
        return '(' + _text + ')';
    } else if (text === 0) {
        return '-';
    } else {
        __text = (parseFloat(text).toFixed(2)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return __text;
    }
};

function dateFormatter(value, row, index) {
    var main = new Date(value).toISOString().split('T')[0];
    return '<span>' + main + '</span>';
};

function dateFormatter(value) {
    var main = new Date(value).toISOString().split('T')[0];
    return  main ;
};