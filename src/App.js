import Color from './Page/Color';
import ColorChange from './Page/ColorChange';
import EffectHooks from './Page/EffectHooks';
import HookesEffectUpdate from './Page/HookesEffectUpdate';
import ReducerForm from './Page/ReducerForm';
import RefForm from './Page/RefForm';
import Todo from './Page/Todo';
import TodoList from './Page/TodoList';
import { Routes, Route } from 'react-router-dom';
import Form from './Page/Form';
import Counter from './Page/Counter';
import ReduxCounter from './Page/ReduxCounter';
import NotFound from './Page/NotFound';
import NavBar1 from './Component/NavBar1/NavBar1';
import Parent from './Page/Neasting/Parent';
import Child from './Page/Neasting/Child';
import Child2 from './Page/Neasting/Child2';
export default function App() {
  return (
    <div className=" ">
      <div>
        <NavBar1 />
        <Routes>
          <Route path="/" element={<Color />} />
          <Route path="/parent" element={<Parent />}>
            <Route path="child" element={<Child />} />
            <Route path="child1" element={<Child2 />} />
          </Route>
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/colorchange" element={<ColorChange />} />
          <Route path="/list" element={<TodoList />} />
          <Route path="/effect" element={<EffectHooks />} />
          <Route path="/refForm" element={<RefForm />} />
          <Route path="/HookesEffectUpdate" element={<HookesEffectUpdate />} />
          <Route path="/ReducerForm" element={<ReducerForm />} />
          <Route path="/redux" element={<ReduxCounter/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
