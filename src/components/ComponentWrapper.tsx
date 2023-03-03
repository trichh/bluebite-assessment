import React from 'react';

import { IPageSettings } from '../interfaces';
import * as ComponentList from '../componentList';

interface IProps {
    components: Array<number>;
    pageSettings: IPageSettings;
    variables: { [key: string]: any };
    updatePageSettings: any;
}

const ComponentWrapper = ({
    components,
    pageSettings,
    variables,
    updatePageSettings
} : IProps) => {
    // List of all available components for rendering
    const componentlist: { [key: string]: any } = ComponentList;

    // Renders all available components passed to it
    return (
        <>
            {components.map(componentId => {
                // Selects current component from page settings
                const component = pageSettings.components.find(c => c.id === componentId);

                if (component) {
                    // Selects component to render from component list
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

                // Render empty component by default if none found
                return <></>
            })}
        </>
    );
};

export default ComponentWrapper;
