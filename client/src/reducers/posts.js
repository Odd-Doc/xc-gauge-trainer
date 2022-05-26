import * as Type from "../constants/actionTypes.js";
//Type = action types
export default (stories = [], action) => {
  switch (action.type) {
    case Type.CREATE:
      return [...stories, action.payload];
    default:
      return stories;
  }
};
