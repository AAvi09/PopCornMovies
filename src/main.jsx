import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
import StarRating from "./StarRating";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      color="red"
      messages={["Terrible", "bad", "okay", "good", "Amazing"]}
      size={24}
    />
  </StrictMode>
);
