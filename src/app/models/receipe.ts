interface IIngredients{
    name : string;
    qty : number;
}

export interface IReceipe {
    id : number;
    name : string;
    image : string;
    desc : string;
    ingredients? : IIngredients[]
}
