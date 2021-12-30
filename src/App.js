import Data from './MOCK_DATA.json'
import './App.css'
import { useState } from 'react'
function App() {
  const [searchData, setSearchData] = useState('')
  return (
    <>
      <div className='searchbar'>
        <div className='App'>
          <input
            className='search'
            type='text'
            placeholder='Search data...'
            onChange={(e) => {
              setSearchData(e.target.value)
            }}
          />
        </div>
        <div className='database'>
          {Data.filter((val) => {
            if (searchData == '') {
              return val
            } else if (
              val.BookName.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return val
            }
          }).map((val, key) => {
            return (
              <div className='library' key={key}>
                <p> {val.BookName}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
