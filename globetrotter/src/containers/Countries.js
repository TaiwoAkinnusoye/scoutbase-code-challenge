import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import CountriesComponent from '../components/CountriesComponent';
import NavComponent from '../components/NavComponent';
import LoadingComponent from '../components/LoadingComponent';

import styled from 'styled-components';

const CountriesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    // grid-column-gap: 15px;
    justify-content: center;
    background: #130377;
`;


const ALL_COUNTRIES_QUERY = gql`
  {
    countries {
        code
    name
    native
    languages {
      name
      native
      rtl
    }
    continent {
      name
    }
  }
    }
`;

function Countries () {
    const {data, error, loading} = useQuery(ALL_COUNTRIES_QUERY);
 if (loading) return <LoadingComponent />;
 if (error) console.log('error when getting data');

 return (
  <Fragment>
      <NavComponent />
      <CountriesGrid>
    {data &&
      data.countries.map(country => (
        <CountriesComponent key={country.code} countries={country} />
      ))}
      </CountriesGrid>
  </Fragment>
);
}

export default Countries;