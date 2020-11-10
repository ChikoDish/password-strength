import { useState } from "react";

const { default: StrengthMeter } = require("./components/StrengthMeter");

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="col-md-6 mx-auto text-right">
        <h3 className="text-center my-5">Password Strength Cheaker</h3>
        <div className="form-group">
          <input
            type="password"
            className="form-control shadow-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <StrengthMeter password={password} />
      </div>
    </div>
  );
}

export default App;
