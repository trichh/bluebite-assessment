import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';

import { IComponents, ILists, IVariables } from './interfaces';
import ListWrapper from './components/ListWrapper';
import NotFound from './components/NotFound';

interface IPageSettings {
    components: Array<IComponents>;
    lists: Array<ILists>;
    variables?: Array<IVariables>;
}

const App = () => {
    const { id } = useParams<{ id: string }>();
    const [pageSettings, setPageSettings] = useState<IPageSettings>({
        components: [],
        lists: [],
    });
    const [pageError, setPageError] = useState(false);

    useEffect(() => {
        // Set page settings from API response on page load
        const fetchPageSettings = async () => {
            try {
                const res = await axios(`${process.env.REACT_APP_API_URL}/page/${id}`);
                const data = res.data.data;
                setPageSettings(data);
            } catch(error) {
                setPageError(true);
            }
        };

        fetchPageSettings();
    }, [id]);

    // Renders specified components for each list item
    return (
        <Container>
            {!pageError ? pageSettings.lists.map(listItem => (
                <ListWrapper
                    key={listItem.id}
                    list={listItem}
                    components={pageSettings.components}
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
