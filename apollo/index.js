"use strict";
exports.__esModule = true;
exports.absoluteURLApolloClient = exports.apolloClient = exports.API_URL = void 0;
var client_1 = require("@apollo/client");
exports.API_URL = "https://cloud-menu-api-ij4ie6dxaa-nw.a.run.app";
exports.apolloClient = new client_1.ApolloClient({
    cache: new client_1.InMemoryCache()
});
exports.absoluteURLApolloClient = new client_1.ApolloClient({
    uri: exports.API_URL,
    cache: new client_1.InMemoryCache()
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
