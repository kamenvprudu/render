const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState ={
  posts: [
    { message: "andret", id: 1, likeCounts: 12 },
    { message: "u now what i mean", id: 2, likeCounts: 121 },
    { message: "nope,i think u retard", id: 3, likeCounts: 122 },
    { message: "nikite", id: 4, likeCounts: 1552 },
    { message: "pasha", id: 5, likeCounts: 1222 },
    { message: "vera", id: 6, likeCounts: 12 },
  ],
  newPosts: "sdfssd",
}

const profileReducer = (state =initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        message: state.newPosts,
        id: 7,
        likeCounts: 0,
      };
      let stateCopy={...state};

      stateCopy={...state.posts};
      stateCopy.posts.push([newPost]); //возможно ошибка?
      stateCopy.newPosts = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:{
      let stateCopy={...state}
      stateCopy.newPosts = action.newText;
      return stateCopy;
    }
      default: return state;
  }
};
export const updateNewPostTextActionCreator=(text) => {
  return{type:UPDATE_NEW_POST_TEXT, newText:text}
}
export const addPostActioinCreator=()=>{
 return{type:ADD_POST}
}
export default profileReducer;

