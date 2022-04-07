import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecord, deleteRecord } from "../services/recordStore_api";
import '../App.css'

export default function Record() {
       const nav = useNavigate()
       const { id } = useParams()
       const [record, setRecord] = useState({})
       useEffect(() => {
              getRecord(id)
                     .then(res => setRecord(res.data))
       }, [])
       const deleteTheRecord = () => {
              deleteRecord(id)
              nav('/')
       }
       return (
              <div className="record-show">
                     <h2>{record.albumTitle}</h2>
                     <img style={{ height: '500px' }} src={record.coverArt} />
                     <h3>{record.artist}</h3>
                     <h3>{record.genre}</h3>
                     <h3>{record.year}</h3>

                     <button onClick={() => { nav(`/${id}/edit`) }}>Edit the record</button>
                     <br />
                     <br />
                     <button onClick={deleteTheRecord}>Delete the record</button>
              </div>
       )
}