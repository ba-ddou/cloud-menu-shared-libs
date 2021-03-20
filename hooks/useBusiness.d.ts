import { ApolloError } from "@apollo/react-hooks";
import { Business } from '../@types/Business';
export declare const useBusiness: (id: string) => {
    loading: boolean;
    error: ApolloError | undefined;
    data: {
        business: Partial<Business> | null;
    };
};
