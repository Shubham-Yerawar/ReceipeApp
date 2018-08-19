export interface ITodoItem {
    id : number; //unique id for every todo
    task : string; // desc of task
    priority? : number; // on a scale of 1-10 : default 5
    validity? : number; //  in no of days : default 7
    status: boolean; // true -> active : false -> inactive
}
