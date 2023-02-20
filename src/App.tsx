import React, {useEffect} from 'react';

const App: React.FC = () => {

  useEffect(()=>{
    console.log("12")
  },[])

  return (
    <div>
      Setup
    </div>
  );
};

export default App;