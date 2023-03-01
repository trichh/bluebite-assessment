// Datatypes for page settings
export interface IComponents {
    id: number;
    type: string;
    options: {
        [key: string]: any;
    };
}

export interface ILists {
    id: number;
    components: Array<number>;
}

export interface IVariables {
    name: string;
    type: string;
    initialValue: any;
}

//Datatypes for `Weather` component
export interface IUpcomming {
    day: string;
    condition: string;
    conditionName: string;
}
