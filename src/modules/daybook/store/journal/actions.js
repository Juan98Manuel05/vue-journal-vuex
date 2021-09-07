// export const myAction = async({commit}) => {
// }

import journalApi from "@/api/journalApi"

export const loadEntries = async( { commit } ) => {    
    const { data } = await journalApi.get('/entries.json')

    if( !data )
        return commit('setEntries', [])
        

    const entries = []
    for( let id of Object.keys(data) ){
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)
}

export const updateEntry = async ( { commit },  entry ) => {

    // console.log( entry, 'actions' )
    const { id, ...rest } = entry
    const dataToSave = { ...rest }

    await journalApi.put(`/entries/${ id }.json`, dataToSave)

    commit('updateEntry', { ...entry })

}

export const createEntry = async( { commit}, entry ) => {

    // console.log( entry, 'actions' )
    const { date, text } = entry
    const dataToSave = { date, text }

    const { data } = await journalApi.post(`/entries.json`, dataToSave)

    dataToSave.id = data.name

    commit('addEntry', dataToSave)

    return data.name
}


export const deleteEntry = async( { commit }, idEntry ) => {
    await journalApi.delete(`/entries/${ idEntry }.json`)
    commit('deleteEntry', idEntry)
}







