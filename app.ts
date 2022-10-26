/*  Déclaration de deux interfaces : Gclef  (clé de sol) & Fclef (clé de fa) */
class Instrument {}

class Piano implements cleDeSol, cleDeFa {

    name: string;
    price: number;
    priceSale: number;

    constructor(name: string, price: number, priceSale: number) {
        this.name = name;
        this.price = price;
        this.priceSale = priceSale;
    }

    function positionCleSol(){
        console.log("Pour une guitare électrique, la clé de sol se joue à la main gauche");
    }

    function positionCleFa(){
        console.log("Pour un piano numérique, la clé de fa se joue à la main gauche");

    }
}

class Guitare implements cleDeSol {

    name: string;
    price: number;
    priceSale: number;
    width: number;
    lenght: number;

    constructor(name: string, price: number, priceSale: number) {
        this.name = name;
        this.price = price;
        this.priceSale = priceSale;
    }

    function positionCleSol(){
        console.log("Pour une guitare électrique, la clé de sol se joue à la main gauche");
    }

}

interface cleDeSol {
    positionCleSol(): void;
}

interface cleDeFa {
    positionCleFa(): void; 
}