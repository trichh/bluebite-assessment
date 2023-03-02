import React from 'react';

import { ILists, IPageSettings } from '../interfaces';
import * as ComponentList from '../componentList';

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
    updatePageSettings ,
}: IProps) => {
    const componentlist: { [key: string]: any } = ComponentList;
    const { components } = pageSettings;

    // Renders each component in the current list that aren't child lists
    return (
        <>
            {!conditionChildren.includes(list.id) && list.components.map(componentId => {
                const component = components.find(c => c.id === componentId);

                if (component) {
                    // Selects which component to render from the list
                    const Component = componentlist[component.type];
                    let childComponents;

                    if (Component) {
                        // Finds children components for the `condition` component to render
                        if (component.type === 'condition') {
                            const childList = pageSettings.lists.find(l => l.id === component.children);

                            if (childList)
                                childComponents = childList.components;
                        }

                        return (
                            <Component
                                key={componentId}
                                children={childComponents}
                                options={component.options}
                                variables={variables}
                                pageSettings={pageSettings}
                                updatePageSettings={updatePageSettings}
                            />
                        )
                    }
                }

                // Render blank component by default if none found
                return <></>
            })}
        </>
    );
};

export default ListWrapper;
