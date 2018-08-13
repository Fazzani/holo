/* eslint-disable */
export default class PlaylistService {
    
    constructor(apiUrl='http://localhost:8084/api/v1/') {
        
    }

    GetPlaylist() {
        fetch(`${apiUrl}playlists`)
            .then(res => res.json())
            .then(json => console.log(json));
    }

}