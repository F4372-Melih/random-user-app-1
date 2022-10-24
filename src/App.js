import Main from "./Components/Main";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    const url = "https://randomuser.me/api/";
    setLoading(true);
    try {
      const { data } = await axios(url);
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleUser = () => {
    getUser();
  };
  return (
    <div className="container">
      <Main {...user} />
      <div className="button">
        <button
          disabled={loading}
          onClick={handleUser}
          type="button"
          class="btn btn-info"
        >
          {loading ? "Loading..." : "Random User"}
        </button>
      </div>
    </div>
  );
}

export default App;
