import { getRecords, recordsList } from '../services/recordStore_api'
import { useState, useEffect } from 'react'
import '../App.css'


export default function Records() {
       const [records, setRecords] = useState([])
       useEffect(() => {
              getRecords()
                     .then(res => setRecords(res.data))
       }, [])

       return (
              <div className='records'>
                     <h1>Record Store</h1>
                     <div className="record">
                            {records.map((record, i) => {
                                   return (
                                          <a href={`/${record._id}`}>
                                                 <h3>{record.albumTitle}</h3>
                                                 <img src={record.coverArt} />
                                          </a>
                                   )
                            })}
                     </div>
              </div>
       )
}