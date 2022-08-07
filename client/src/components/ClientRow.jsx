import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // reload data without reloading page
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }], // refetching queries, but frequent use bogs down the application
    // update(cache, { data: { deleteClient } }) { // so we update cache
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS }); // getting queries from cache, not making whole new request
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id), // filtering data
    //     },
    //   });
    // }
    // ** We use refetchQueries because we have to delete client projects with client as well
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}