use serde::Serialize;

#[derive(Serialize)]
pub struct SongInfo {
    pub title: String,
    pub artist: String,
    pub album_name: String,
    pub source: String,
}

pub fn get_current_song () -> SongInfo {
    SongInfo {
        title: "Shape Of You".to_string(),
        artist: "Ed Sheeran".to_string(),
        album_name: "Plus".to_string(),
        source: "Spotify".to_string()
    }
}
