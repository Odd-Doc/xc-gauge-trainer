import * as Type from "../constants/actionTypes.js";
import * as api from "../api/index.js";
export const createStory = (storyData) => async (dispatch) => {
  try {
    const { data } = await api.createStory(storyData);
    dispatch({
      type: Type.CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
//   VS.
/*
export const createStory = () => {
  (dispatch) => {
    const { data } = api.createStory();
    dispatch({
      type: Type.CREATE,
      payload: data,
    });
  };
};
*/
