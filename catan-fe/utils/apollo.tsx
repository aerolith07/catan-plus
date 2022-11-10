import { HttpLink, split, ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const wsLink =
    typeof window !== "undefined"
        ? new GraphQLWsLink(
                createClient({
                    url: "ws://localhost:3030/graphql",
                })
          )
        : null;

const httpLink = new HttpLink({
    uri: `http://localhost:3030/graphql`,
});

const splitLink =
    typeof window !== "undefined" && wsLink != null
        ? split(
                ({ query }) => {
                    const def = getMainDefinition(query);
                    return (
                        def.kind === "OperationDefinition" &&
                        def.operation === "subscription"
                    );
                },
                wsLink,
                httpLink
          )
        : httpLink;

// const wsLink = new GraphQLWsLink(
//   createClient({
//     url: "ws://localhost:3030/graphql",
//   })
// );

// const httpLink = new HttpLink({
//   uri: "http://localhost:3030/graphql",
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
