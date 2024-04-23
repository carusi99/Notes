export default class NotesMannager{
    constructor(username, setter){
        this.username = username,
        this.setter = setter,
        this.URL = "https://codeable-keep-api-production.up.railway.app/api"
    }
    async getNotes(){
        try {
            let response = await fetch(`${this.URL}/${this.username}/notes`)
            response = await response.json()
            response.ok && this.setter(response.notes)
            return response
        } catch (error) {
            return {ok:false, error: error}
        }
    }
    async resetNotes(){
        try {
            let response = await fetch(`${this.URL}/${this.username}/reset`, {method: "POST"})
            response = await response.json()
            response.ok && this.getNotes()
            return response
        } catch (error) {
            return {ok:false, error: error}
        }
    }
    async createNote(note){
        try {
            let response = await fetch(`${this.URL}/${this.username}/notes`, this.#options(note, "POST"))
            response = await response.json()
            response.ok && this.getNotes()
            return response
        } catch (error) {
            // posibles errores de servidor caido etc  
            return {ok:false, error: error}
        }
    }
    async updateNote(id, updates){
        try {
            let response = await fetch(`${this.URL}/${this.username}/notes/${id}`, this.#options(updates, "PATCH"))
            response = await response.json()
            response.ok && this.getNotes()
            return response
        } catch (error) {
            // posibles errores de servidor caido etc
            return {ok:false, error: error}
        }
    }
    async deleteNote(id){
        try {
            let response = await fetch(`${this.URL}/${this.username}/notes/${id}`, {method: "DELETE"})
            if (response.body){
                response = await response.json()
                throw new Error(response.error)
            }
            await this.getNotes()
            return {ok:true, message: "properly deleted the note with the id: " + id}
        } catch (error) {
            // posibles errores de servidor caido etc
            return {ok:false, error: error}
        }
    }
    #options(obj, method){
        return {
            headers:{
                "Content-Type": "application/json"
            },
            method: method,
            body:JSON.stringify(obj)
        }
    }
}

