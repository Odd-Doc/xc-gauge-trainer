import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createStory } from "../../actions/posts.js";

const StoryForm = () => {
  const [storyData, setStoryData] = useState({
    body: "",
  });
  
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createStory(storyData));
  };
  useEffect(() => {
    console.log(storyData);
  }, [storyData]);

  return (
    <div>
      <div>I am the story form</div>
      <form>
        <textarea
          name="body"
          onChange={(e) => {
            setStoryData({ ...storyData, body: e.target.value });
          }}
        />
        <button onClick={handleSubmit}>Submit Story</button>
      </form>
    </div>
  );
};

export default StoryForm;
