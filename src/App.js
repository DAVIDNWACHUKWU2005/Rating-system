import React, { useState } from "react";
import Dialog from "./components/Dialog";
import StarRating from "./components/starRating";
import "./css/index.css";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="container">
      <h1>Rating System</h1>
      <StarRating />
      <button
        className="open-dialog"
        onClick={() => setShowDialog(true)} 
      >
        Open Dialog box
      </button>
      {showDialog && <Dialog onClose={() => setShowDialog(false)} />}
    </div>
  );
}

export default App;
