const names= ["Geordana", "Marcus", "Pietro", "Anafalda", "Monica", "Jean Paul da Silva Sauro Pinto Terceiro"];

export function randm(mylist){
    const position= Math.floor( Math.random() * mylist.length );
    return mylist[position];
}

export const name= randm(names);