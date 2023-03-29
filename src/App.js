import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './features/dataSlice';
import { useEffect } from 'react';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';

function App() {
  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
    document.title = `Welcome to Artworld | ${data.objectId}`
  }, [data.objectId, dispatch])

  return (
    <div className="App">
      <ButtonBar />
      <Gallery data={data} />
    </div>
  );
}

export default App;
