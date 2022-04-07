import { getRecord, editRecord } from '../services/recordStore_api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useeffect, useState } from 'react'
import '../App.css'

export default function Edit() {
       const { id } = useParams()
       const nav = useNavigate()
       const [data, setData] = useState({})
       useEffect(() => {
              getRecord(id)
                     .then(res => setData(res.data))
       }, [])
       const editTheRecord = event => {
              event.preventDefault()
              const updatedRecord = {
                     albumTitle: event.target.albumTitle.value,
                     coverArt: event.target.coverArt.value,
                     artist: event.target.artist.value,
                     genre: event.target.genre.value,
                     year: event.target.year.value
              }
              editRecord(id, updatedRecord)
              nav(`/${id}`)
       }
       return (
              <div className='record-edit'>
                     <h2>Edit the record</h2>
                     <form onSubmit={editTheRecord}>
                            <label>Album Title   </label>
                            <br />
                            <input type="text" name="albumTitle" />
                            <br />
                            <br />
                            <label>Cover Art     </label>
                            <br />
                            <input type="text" name="coverArt" />
                            <br />
                            <br />
                            <label>Artist </label>
                            <br />
                            <input type="text" name="artist" />
                            <br />
                            <br />
                            <label>Genre  </label>
                            <br />
                            <input type="text" name="genre" />
                            <br />
                            <br />
                            <label>Year   </label>
                            <br />
                            <input type="text" name="year" />
                            <br />
                            <br />
                            <input type='submit' />
                     </form>
              </div>
       )
}