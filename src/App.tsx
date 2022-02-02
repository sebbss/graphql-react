import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import { ProgressBar } from "baseui/progress-bar";
import Routes from './routes'
import './App.css';
import { useSelector } from 'react-redux';
import { LoadingState } from './store/store';



const engine = new Styletron()

function App() {
  const { loading } = useSelector(((state: LoadingState) => state.loading))
  return (
    <StyletronProvider value={engine}>
     
      
      <Routes/>
     
    </StyletronProvider>
   
   
  );
}

export default App;
