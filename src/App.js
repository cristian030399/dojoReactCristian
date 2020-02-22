import React from 'react';
import Layout from './containers/Layout/Layout'
import Cards from './components/Cards/Cards'
import Task from './containers/Tasks/Task'

function App() {
  return (
    <div >
      <Layout>
        <Task></Task>
      </Layout>
    </div>
  );
}

export default App;
