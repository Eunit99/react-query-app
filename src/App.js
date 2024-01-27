import './App.css';
import {
    useQuery,
} from '@tanstack/react-query'
import axios from 'axios';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



function App()  {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['allUsers'],
    queryFn: () =>
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.data),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <ol>
        {data.map((user) => {
          return (
            <li key={user.id}>
              <b>Name:</b> {user.name}
              <ul>
                <li>
                  <b>Email:</b> {user.email}
                </li>
                <li>
                  <b>Phone:</b> {user.phone}
                </li>
              </ul>
            </li>
          );
        })}
      </ol>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default App;
