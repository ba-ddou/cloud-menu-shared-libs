import ApolloClient from "apollo-boost";
import { ApolloProvider as LocalApolloProvider } from "@apollo/react-hooks";
import * as React from 'react';

export const apolloClient = new ApolloClient();

export const absoluteURLApolloClient = new ApolloClient({
    uri: "http://localhost:4000/"
});


export interface ApolloProviderProps {

}

export const ApolloProvider: React.SFC<ApolloProviderProps> = ({ children }) => {
    return (
        <LocalApolloProvider client={apolloClient}>
            {children}
        </LocalApolloProvider>
    );
}




