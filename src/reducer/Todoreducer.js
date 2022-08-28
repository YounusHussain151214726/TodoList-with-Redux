let initialData = {
  List: [],
};

export const Todoreducer = (state = initialData, action) => {
  switch (action.type) {
    case "AddTodo":
      const { id, data } = action.payload;

      if (data.length > 4) {
        return {
          ...state,
          List: [...state.List, { id: id, Data: data }],
        };
      }

    case "DeleteTodo":
      const NewList = state.List.filter((elem) => elem.id != action.id);
      return {
        ...state,
        List: NewList,
      };

    case "DeleteTodos":
      return {
        ...state,
        List: [],
      };
    default:
      return state;
  }
};
