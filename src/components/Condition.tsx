import React from 'react';

import { IPageSettings } from '../interfaces';
import * as ComponentList from '../componentList';

interface IProps {
    children: Array<number>;
    options: {
        variable: string;
        value: any;
    };
    pageSettings: IPageSettings;
    variables: { [key: string]: any };
    updatePageSettings: any;
}

const Condition = ({
    children,
    options,
    pageSettings,
    variables,
    updatePageSettings
}: IProps) => {
    const componentlist: { [key: string]: any } = ComponentList;
    const { value, variable } = options;
    const { components } = pageSettings;

    // Renders each child component for the current condition
    return (
        <>
            {variables[variable] === value && children.map(child => {
                const component = components.find(c => c.id === child);

                if (component) {
                    // Selects which component to render from the list
                    const Component = componentlist[component.type];

                    if (Component)
                        return (
                            <Component
                                key={child}
                                options={component.options}
                                variables={variables}
                                pageSettings={pageSettings}
                                updatePageSettings={updatePageSettings}
                            />
                        )
                }

                // Render blank component by default if none found
                return <></>
            })}
        </>
    );
};

export default Condition;
