type Produit = {
    type: string;
    price: number;
    marque?: string;
   }
    
   let positions: Produit[] = [
    { type: "TV", price:400, marque: "Samsung"},
    { type: "Ordinateur", price: 700},
    { type: "Téléphone", price: 200, marque:"Huawei"},
    { type: "Portable", price: 900},
   ]