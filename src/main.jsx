import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
// import StarRating from "./StarRating";
// import EmojiStarRating from "./EmojiStarRating";
// import TextExpander from "./TextExpander";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      color="red"
      messages={["Terrible", "bad", "okay", "good", "Amazing"]}
      size={24}
    />
    <EmojiStarRating />
    <TextExpander /> */}
    <App />
  </StrictMode>
);
