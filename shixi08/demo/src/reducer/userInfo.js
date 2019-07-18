const initialState = {
  count: 1
};
//这是和用户信息相关的规则，这里定义了一个更新城市名字的规则
export default function userinfo(state = initialState, action) {
  switch (action.type) {
    //修改数字
    case "ADD":
      return { ...state, count: ++state.count };
    case "CUT":
      return { ...state, count: --state.count };
    default:
      return state;
  }
}
