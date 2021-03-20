import { ApolloClient, InMemoryCache } from '@apollo/client';



export const apolloClient = new ApolloClient({
    cache: new InMemoryCache()
});

export const absoluteURLApolloClient = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache()
});


// export interface ApolloProviderProps {

// }

// export const ApolloProvider: React.FunctionComponent<ApolloProviderProps> = ({ children }) => {
//     return (
//         <LocalApolloProvider client={apolloClient}>
//             {children}
//         </LocalApolloProvider>
//     );
// }




