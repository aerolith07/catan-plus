import React from 'react'
import {gql, useQuery} from '@apollo/client'
import { DocumentNode } from 'graphql';

const GET_LOCATIONS = gql`
query getGame {
	game(id: "6356d3d600665b646fa7bdad") {
		id,
		players {
			name
			resources {
				brick
			}
		}
	}
}`;

const TestComponent = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS);


if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>TestComponent
        <p>
            {JSON.stringify(data)}
        </p>
    </div>
  )
}

export default TestComponent

