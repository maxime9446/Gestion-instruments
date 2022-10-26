var Instrument = /** @class */ (function () {
    function Instrument() {
    }
    return Instrument;
}());
/*  Déclaration de deux interfaces : Gclef  (clé de sol) & Fclef (clé de fa) */
var Piano = /** @class */ (function () {
    function Piano(name, price, priceSale) {
        this.name = name;
        this.price = price;
        this.priceSale = priceSale;
    }
    return Piano;
}());
var Guitare = /** @class */ (function () {
    function Guitare(name, price, priceSale) {
        this.name = name;
        this.price = price;
        this.priceSale = priceSale;
    }
    return Guitare;
}());
