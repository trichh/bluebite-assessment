import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';

import { IComponents, IPageSettings, IVariables } from './interfaces';
import ListWrapper from './components/ListWrapper';
import NotFound from './components/NotFound';

const App = () => {
    const { id } = useParams<{ id: string }>();
    const [pageSettings, setPageSettings] = useState<IPageSettings>({
        components: [],
        lists: [],
    });
    const [pageError, setPageError] = useState(false);
    const [conditionChildren, setConditionChildren] = useState([]);

    // Set page settings from API response on page load
    useEffect(() => {
        const fetchPageSettings = async () => {
            try {
                const res = await axios(`${process.env.REACT_APP_API_URL}/page/${id}`);
                const data = res.data.data;
                const conditionComponents = data.components.filter((d: IComponents) => d.type === 'condition');
                const children = conditionComponents.map((c : IComponents) => c.children);

                setPageSettings(data);
                setConditionChildren(children);
            } catch(error) {
                setPageError(true);
            }
        };

        fetchPageSettings();
    }, [id]);

    // Convert variables into easily accessible format for child components
    const formatVariables = (variables: Array<IVariables> | undefined) => {
        let formattedVariables = {};

        if (variables) {
            // Turn array of variables into formatted object
            formattedVariables = variables.reduce((obj: { [key: string]: string }, v) => {
                obj[v.name] = v.initialValue;
                return obj;
            }, {});
        }

        return formattedVariables;
    };

    // Render specified components for each list item
    return (
        <Container>
            {!pageError ? pageSettings.lists.map(listItem => (
                <ListWrapper
                    key={listItem.id}
                    conditionChildren={conditionChildren}
                    list={listItem}
                    pageSettings={pageSettings}
                    variables={formatVariables(pageSettings.variables)}
                    updatePageSettings={(settings: IPageSettings) => setPageSettings(settings)}
                />
            )) : <NotFound />}
        </Container>
    );
};

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 25px 0;
`;

export default App;
