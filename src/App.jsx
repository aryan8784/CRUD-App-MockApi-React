import { Route, Routes } from 'react-router-dom'
import './App.css'
import Create from './CRUD-APP/Create'

import Read from './CRUD-APP/Read'
import Edit from './CRUD-APP/Edit'

function App() {


  return (
    <>
      <div>

        <div className="container">
          <Routes>
            <Route path='/' element={<Read />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit' element={<Edit />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
