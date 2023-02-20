import React, {useState} from 'react';

const App: React.FC = () => {

  const [count, setCount] = useState(0)
  console.log(1)

  return (
    <div onClick={()=>setCount(count + 1)}>
      {count}
    </div>
  );
};

export default App;