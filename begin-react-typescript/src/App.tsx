// https://ddeck.tistory.com/56

import * as React from "react";

import { Profile } from "components/Profile";
import { Counter } from "Counter";
import { TodoList } from "TodoList";

const App = () => {
  return (
    <div className="App">
      <Profile name="name" job="job" />

      <Counter />

      <TodoList />
    </div>
  );
};

export default App;
