import React, {Fragment} from 'react';
import styled from 'styled-components';

const CountryBox = styled.div`
    width: 600px;
    margin: 0 auto;
    font-family: "Work Sans", sans-serif;
    line-height: 2;

    .info p {
        display: inline-block;
        font-size: 10px;
    }


    .info .code {
        color: #130377;
        font-size: 60px;
        margin: 0;
        font-weight: 600;
        text-align: center;
        border-bottom: 10px solid;
        border-image-source: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66));
        border-image-slice: 1;
    }

    .info .name {
        color: #130377;
        font-size: 40px;
        margin: 0;
        font-weight: 600;
        text-align: center;
        border-bottom: 10px solid;
        border-image-source: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66));
        border-image-slice: 1;
    }

    .info .currency {
        color: #130377;
        font-size: 30px;
        margin: 0;
        font-weight: 600;
        text-align: center;
        border-bottom: 10px solid;
        border-image-source: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66));
        border-image-slice: 1;
    }

    .info .phone {
        color: #130377;
        font-size: 20px;
        margin: 0;
        font-weight: 600;
        text-align: center;
        border-bottom: 10px solid;
        border-image-source: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66));
        border-image-slice: 1;
    }
`;

function CountryComponent({code, name, currency, phone}) {
    return (
        <Fragment>
            <CountryBox>
            <div className="info">
            <div>
                <span className="code">{code}</span><p>Code</p>
            </div>
            <div>
                <span className="name">{name}</span><p>Name</p>
            </div>
            <div>
                <span className="currency">{currency}</span><p>Currency</p>
            </div>
            <div>
                <span className="phone">{phone}</span><p>Phone</p>
            </div>
            </div>
            </CountryBox>
        </Fragment>
    )
}

export default CountryComponent;