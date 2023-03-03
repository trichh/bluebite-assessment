import React from 'react';

import { IPageSettings } from '../interfaces';
import ComponentWrapper from './ComponentWrapper';

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
    const { value, variable } = options;

    // Renders each child component for the current condition
    return (
        <>
            {variables[variable] === value && (
                <ComponentWrapper
                    components={children}
                    pageSettings={pageSettings}
                    variables={variables}
                    updatePageSettings={updatePageSettings}
                />
            )}
        </>
    );
};

export default Condition;
