import { useKeycloak } from '@react-keycloak/web';
import { PrivateRoute } from './routes/PrivateRoute';
import Whiteboard from './components/Whiteboard';


function App() {
  const { keycloak } = useKeycloak();

  return (
    <div className="container mt-5">
      <h1>Collaborative Whiteboard</h1>

      <PrivateRoute>
        <Whiteboard />
      </PrivateRoute>

      {keycloak.authenticated && (
        <button
          className="btn btn-danger mt-3"
          onClick={() => keycloak.logout()}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default App;
