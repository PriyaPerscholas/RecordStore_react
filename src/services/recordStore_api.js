import axios from "axios"
import '../App.css'

export function getRecords() {
       const URL = `http://localhost:3001/records`
       const response = axios.get(URL)
       return response
}
export function getRecord(id) {
       const URL = `http://localhost:3001/records/${id}`
       const response = axios.get(URL)
       return response
}
export function deleteRecord(id) {
       const URL = `http://localhost:3001/records/${id}`
       const response = axios.delete(URL)
       return response
}
export function createRecord(add) {
       const URL = `http://localhost:3001/records/`
       const response = axios.post(URL, add)
       return response
}
export function editRecord(id, updatedRecord) {
       const URL = `http://localhost:3001/records/${id}`
       const response = axios.put(URL, updatedRecord)
       return response
}