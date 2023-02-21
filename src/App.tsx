import React, {useState} from 'react';
import s from '@/styles/app.module.scss'

const App: React.FC = () => {

  const [count, setCount] = useState(0)

  return (
    <div className={s.app} onClick={()=>setCount(count + 1)}>
      {count}
    </div>
  );
};

export default App;