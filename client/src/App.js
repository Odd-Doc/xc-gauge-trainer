import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Stories from "./components/Story-Components/Stories/index.js";
import StoryForm from "./components/Story-Components/storyForm.js";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="story-form">
        <StoryForm />
      </div>
      <Stories />
    </div>
  );
}

export default App;
