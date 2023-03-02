import React from 'react';

import { IComponents, ILists } from '../interfaces';
import * as ComponentList from '../componentList';

interface IProps {
    components: Array<IComponents>;
    list: ILists;
}

const ListWrapper = ({ list, components }: IProps) => {
    const componentlist: { [key: string]: any } = ComponentList;

    // Renders each component in the current list
    return (
        <>
            {list.components.map(componentId => {
                const component = components.find(c => c.id === componentId);

                if (component) {
                    // Selects which component to render from the list
                    const Component = componentlist[component.type];
                    if (Component)
                        return <Component key={componentId} options={component.options} />
                }

                // Render blank component by default if none found
                return <></>
            })}
        </>
    );
};

export default ListWrapper;
