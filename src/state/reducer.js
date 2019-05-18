import { initialState } from "./initialState";
import { ARTICLE_GET_SUCCESS } from "./actionTypes";

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_GET_SUCCESS:
      return {
        ...state,
        AllArticles: action.article
      };
    default:
      return state;
  }
};
