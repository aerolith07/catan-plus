import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ExchangeInput = {
  amount: Scalars['Float'];
  fromId: Scalars['String'];
  resource: Scalars['String'];
  toId: Scalars['String'];
};

export type GameDto = {
  __typename?: 'GameDto';
  description: Scalars['String'];
  id: Scalars['ID'];
  players: Array<PlayerDto>;
  title: Scalars['String'];
};

export type GameInput = {
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  collect: PlayerDto;
  createGame: GameDto;
  createPlayer: PlayerDto;
  exchange: Array<PlayerDto>;
  joinGame: GameDto;
  leaveGame: GameDto;
};


export type MutationCollectArgs = {
  input: ResourceInput;
};


export type MutationCreateGameArgs = {
  input: GameInput;
};


export type MutationCreatePlayerArgs = {
  input: PlayerInput;
};


export type MutationExchangeArgs = {
  input: ExchangeInput;
};


export type MutationJoinGameArgs = {
  gameId: Scalars['String'];
  playerId: Scalars['String'];
};


export type MutationLeaveGameArgs = {
  gameId: Scalars['String'];
  playerId: Scalars['String'];
};

export type PlayerDto = {
  __typename?: 'PlayerDto';
  id: Scalars['ID'];
  name: Scalars['String'];
  resources: Resources;
};

export type PlayerInput = {
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  game: GameDto;
  player: PlayerDto;
};


export type QueryGameArgs = {
  id: Scalars['String'];
};


export type QueryPlayerArgs = {
  id: Scalars['String'];
};

export type ResourceInput = {
  amount: Scalars['Float'];
  id: Scalars['String'];
  resource: Scalars['String'];
};

export type Resources = {
  __typename?: 'Resources';
  brick: Scalars['Float'];
  grain: Scalars['Float'];
  rock: Scalars['Float'];
  sheep: Scalars['Float'];
  wood: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  gameEvents: GameDto;
};


export type SubscriptionGameEventsArgs = {
  gameId: Scalars['String'];
};

export type CreateGameMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateGameMutation = { __typename?: 'Mutation', createGame: { __typename?: 'GameDto', id: string, title: string, description: string, players: Array<{ __typename?: 'PlayerDto', id: string, name: string, resources: { __typename?: 'Resources', brick: number, wood: number, sheep: number, grain: number, rock: number } }> } };

export type GetGameQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetGameQuery = { __typename?: 'Query', game: { __typename?: 'GameDto', id: string, players: Array<{ __typename?: 'PlayerDto', id: string, name: string, resources: { __typename?: 'Resources', brick: number, wood: number, sheep: number, grain: number, rock: number } }> } };

export type GameEventsSubscriptionVariables = Exact<{
  gameId: Scalars['String'];
}>;


export type GameEventsSubscription = { __typename?: 'Subscription', gameEvents: { __typename?: 'GameDto', id: string, title: string, description: string, players: Array<{ __typename?: 'PlayerDto', id: string, name: string, resources: { __typename?: 'Resources', brick: number, wood: number, sheep: number, grain: number, rock: number } }> } };


export const CreateGameDocument = gql`
    mutation createGame {
  createGame(input: {title: "title"}) {
    id
    title
    description
    players {
      id
      name
      resources {
        brick
        wood
        sheep
        grain
        rock
      }
    }
  }
}
    `;
export type CreateGameMutationFn = Apollo.MutationFunction<CreateGameMutation, CreateGameMutationVariables>;

/**
 * __useCreateGameMutation__
 *
 * To run a mutation, you first call `useCreateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGameMutation, { data, loading, error }] = useCreateGameMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateGameMutation(baseOptions?: Apollo.MutationHookOptions<CreateGameMutation, CreateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGameMutation, CreateGameMutationVariables>(CreateGameDocument, options);
      }
export type CreateGameMutationHookResult = ReturnType<typeof useCreateGameMutation>;
export type CreateGameMutationResult = Apollo.MutationResult<CreateGameMutation>;
export type CreateGameMutationOptions = Apollo.BaseMutationOptions<CreateGameMutation, CreateGameMutationVariables>;
export const GetGameDocument = gql`
    query getGame($id: String!) {
  game(id: $id) {
    id
    players {
      id
      name
      resources {
        brick
        wood
        sheep
        grain
        rock
      }
    }
  }
}
    `;

/**
 * __useGetGameQuery__
 *
 * To run a query within a React component, call `useGetGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGameQuery(baseOptions: Apollo.QueryHookOptions<GetGameQuery, GetGameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGameQuery, GetGameQueryVariables>(GetGameDocument, options);
      }
export function useGetGameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGameQuery, GetGameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGameQuery, GetGameQueryVariables>(GetGameDocument, options);
        }
export type GetGameQueryHookResult = ReturnType<typeof useGetGameQuery>;
export type GetGameLazyQueryHookResult = ReturnType<typeof useGetGameLazyQuery>;
export type GetGameQueryResult = Apollo.QueryResult<GetGameQuery, GetGameQueryVariables>;
export const GameEventsDocument = gql`
    subscription gameEvents($gameId: String!) {
  gameEvents(gameId: $gameId) {
    id
    title
    description
    players {
      id
      name
      resources {
        brick
        wood
        sheep
        grain
        rock
      }
    }
  }
}
    `;

/**
 * __useGameEventsSubscription__
 *
 * To run a query within a React component, call `useGameEventsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGameEventsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameEventsSubscription({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useGameEventsSubscription(baseOptions: Apollo.SubscriptionHookOptions<GameEventsSubscription, GameEventsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GameEventsSubscription, GameEventsSubscriptionVariables>(GameEventsDocument, options);
      }
export type GameEventsSubscriptionHookResult = ReturnType<typeof useGameEventsSubscription>;
export type GameEventsSubscriptionResult = Apollo.SubscriptionResult<GameEventsSubscription>;