import { CharacterResult } from '@/types/character';
import { GraphQLClient, gql } from 'graphql-request';
import { toast } from 'react-hot-toast';


const client = new GraphQLClient('https://rickandmortyapi.com/graphql');



export async function getCharacters() {
  const document = gql`
  {
    characters(page:1) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        gender
      }
    }
  }
  `
  try {
    const res = await client.request<CharacterResult>(document);
    return res;
  } catch (error) {
    toast.error('Something went wrong, please try again.')
  }
}