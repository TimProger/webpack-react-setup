import React from 'react';
import s from '@/styles/app.module.scss'
import {useAppDispatch, useTypedSelector} from "@/hooks/store.hooks";
import {changeName} from "@/store/Slice/profile.slice";

const App: React.FC = () => {

  const dispatch = useAppDispatch()
  const {user} = useTypedSelector(state => state.profile)

  return (
    <div className={s.app}>
      <h1>{user.name}</h1>
      <input type="text" onChange={(e)=>dispatch(changeName(e.target.value))}/>
    </div>
  );
};

export default App;