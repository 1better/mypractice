// 这样表示 Person的name属性必须是string字符串，并且是必填的

Person.propTypes = {
  name: PropTypes.string.isRequired
};


// 一定要好好学习