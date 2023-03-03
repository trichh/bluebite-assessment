import React from 'react';

import { ILists, IPageSettings } from '../interfaces';
import ComponentWrapper from './ComponentWrapper';

interface IProps {
    list: ILists;
    pageSettings: IPageSettings;
    conditionChildren: Array<number>;
    variables: { [key: string]: any };
    updatePageSettings: any;
}

const ListWrapper = ({
    list,
    pageSettings,
    conditionChildren,
    variables,
    updatePageSettings,
}: IProps) => {
    const { components } = list;

    // Renders each component in the current list that's not a child list
    return (
        <>
            {!conditionChildren.includes(list.id) && (
                <ComponentWrapper
                    components={components}
                    pageSettings={pageSettings}
                    variables={variables}
                    updatePageSettings={updatePageSettings}
                />
            )}
        </>
    );
};

export default ListWrapper;
