import { createRecord } from "../services/recordStore_api";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function New() {
       const nav = useNavigate()
       const createTheRecord = (event) => {
              event.preventDefault()
              const newrecord = {
                     albumTitle: event.target.albumTitle.value,
                     coverArt: event.target.coverArt.value,
                     artist: event.target.artist.value,
                     genre: event.target.genre.value,
                     year: event.target.year.value
              }
              console.log(newrecord)
              createRecord(newrecord)
              nav('/')
       }
       return (
              <div className="record-new">
                     <h2>Create new record</h2>
                     <form onSubmit={createTheRecord}>
                            <label>Album Title</label>
                            <br />
                            <input type="text" name="albumTitle" />
                            <br />
                            <br />
                            <label>Cover Art</label>
                            <br />
                            <input type="text" name="coverArt" />
                            <br />
                            <br />
                            <label>Artist</label>
                            <br />
                            <input type="text" name="artist" />
                            <br />
                            <br />
                            <label>Genre</label>
                            <br />
                            <input type="text" name="genre" />
                            <br />
                            <br />
                            <label>Year</label>
                            <br />
                            <input type="text" name="year" />
                            <br />
                            <br />
                            <input type='submit' />
                     </form>
              </div>
       )

}