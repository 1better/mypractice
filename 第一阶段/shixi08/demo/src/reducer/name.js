const initialState = {
  name: 'lisi'
};
//这是和用户信息相关的规则，这里定义了一个更新名字的规则
export default function userinfo(state = initialState, action) {
  switch (action.type) {
    //修改数字
    case "UPDATE_NAME":
      return { ...state,  name:action.name};
    default:
      return state;
  }
}
