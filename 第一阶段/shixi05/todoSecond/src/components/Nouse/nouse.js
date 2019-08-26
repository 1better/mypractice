import React from "react";

import './nouse.css'
function NoUse(props) {
  return (
    <div>
      <div className="instructions">Double-click to edit a todo.</div>
      <div className="credits">
        Created by
        <br />
        <a href="http://jgn.me/">J&eacute;r&ocirc;me Gravel-Niquet</a>.
        <br />
        Rewritten by: <a href="http://addyosmani.github.com/todomvc">TodoMVC</a>.
      </div>
    </div>
  );
}

export default NoUse;
