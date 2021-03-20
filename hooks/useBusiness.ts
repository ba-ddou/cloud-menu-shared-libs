import { useQuery, ApolloError } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Business } from '../@types/Business'

const QUERY = gql`
	query($id: String!) {
		business(id: $id) {
			name
		}
	}
`;
export const useBusiness = (id: string): {
	loading: boolean,
	error: ApolloError | undefined,
	data: {
		business: Partial<Business> | null
	}
} => {
	const { loading, error, data } = useQuery(QUERY, {
		variables: { id },
	});
	return { loading, error, data };
};