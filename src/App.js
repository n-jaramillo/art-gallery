import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchData } from './features/dataSlice';
import { useEffect } from 'react';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';

const mapStateToProps = (state) => ({
  objectId: state.data.objectId
})

function App(props) {
  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
    document.title = `Welcome to Artworld | ${props.objectId}`
  }, [props.objectId, dispatch])

  return (
    <div className="App">
      <ButtonBar />
      <Gallery data={data} />
    </div>
  );
}

export default connect(mapStateToProps)(App);
