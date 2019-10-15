import React from 'react';
import styled from 'styled-components';

const Loader = styled.div` 
    display: grid;
    justify-content: center;
    position: relative;
    top: 35vh;
`;

function LoadingComponent () {
    return (
        <Loader>
            <img src="/images/Ball.svg" alt="Loading" width="auto" height="auto" />
        </Loader>
    )
}

export default LoadingComponent;