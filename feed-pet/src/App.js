import './App.css';

import { MdThumbDown,MdThumbUp } from 'react-icons/md';

function App() {
  return (
    <>
    <button type="submit">
      Like
      <MdThumbUp
        size={30}
        color="#"
      />
    </button>
    <button type="submit">
    Deslike
      <MdThumbDown
        size={30}
        color="#"
      />
    </button>
    </>
    
  );
}

export default App;
