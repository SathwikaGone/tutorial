import React from "react";

export default function funcComp() {
  return (
    <div>
      <h2> functional Component:</h2>
      <li>we will not have render</li>
      <li>we can not create state</li>
      <li>we can not use life cycle methods</li>

      <h2> Exceptions - Hooks:</h2>
      <li>we can create state using useState Hook</li>
      <li>We can implement life cycle funcionalities using useEffect hook</li>
    </div>
  );
}
