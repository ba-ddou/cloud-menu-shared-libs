"use strict";
exports.__esModule = true;
exports.absoluteURLApolloClient = exports.apolloClient = void 0;
var client_1 = require("@apollo/client");
exports.apolloClient = new client_1.ApolloClient({
    cache: new client_1.InMemoryCache()
});
exports.absoluteURLApolloClient = new client_1.ApolloClient({
    uri: "https://cloud-menu-api-ij4ie6dxaa-ue.a.run.app/",
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
