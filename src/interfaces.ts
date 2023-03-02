// Datatypes for page settings
export interface IComponents {
    id: number;
    type: string;
    options: {
        [key: string]: any;
    };
    children?: number;
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

export interface IPageSettings {
    components: Array<IComponents>;
    lists: Array<ILists>;
    variables?: Array<IVariables>;
}

//Datatypes for `Weather` component
export interface IUpcomming {
    day: string;
    condition: string;
    conditionName: string;
}
