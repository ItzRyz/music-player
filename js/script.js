const songs = [
    { title: "Glimpse of Us", artist: "Joji", duration: "3:53", cover: "linear-gradient(135deg, #111116, #2c3e50)", spotifyId: "6zSpwRvo7nMv6beSg96mX1" },
    { title: "Tak Segampang Itu", artist: "Anggi Marito", duration: "3:51", cover: "linear-gradient(135deg, #1f1c2c, #928dab)", spotifyId: "6wSTr6f1S5f8a0WfO8Qh7S" },
    { title: "Sial", artist: "Mahalini", duration: "4:03", cover: "linear-gradient(135deg, #2c3e50, #000000)", spotifyId: "3X9I4b5Q7kE6A8WfO2Mh4X" },
    { title: "Jiwa Yang Bersedih", artist: "Ghea Indrawari", duration: "4:38", cover: "linear-gradient(135deg, #3d3d4d, #1a1a24)", spotifyId: "4R7WfE5Q9kM2A1SfO8Xh3Z" },
    { title: "Tertawan Hati", artist: "Awdella", duration: "3:57", cover: "linear-gradient(135deg, #141e30, #243b55)", spotifyId: "2B8MfR6kQ8W4A3SfO1Xh9Y" },
    { title: "Komang", artist: "Raim Laode", duration: "3:42", cover: "linear-gradient(135deg, #232526, #414345)", spotifyId: "5F9WfR2kQ7W1A4SfO3Mh6Z" },
    { title: "Lantas", artist: "Juicy Luicy", duration: "3:53", cover: "linear-gradient(135deg, #0f2027, #203a43)", spotifyId: "1X8MfR5kQ9W2A2SfO4Xh8Y" },
    { title: "Dunia Tipu-Tipu", artist: "Yura Yunita", duration: "3:40", cover: "linear-gradient(135deg, #3a6073, #3a7bd5)", spotifyId: "3M9WfE2kQ6W4A5SfO2Xh5Z" },
    { title: "Interaksi", artist: "Tulus", duration: "2:50", cover: "linear-gradient(135deg, #000000, #434343)", spotifyId: "6B8WfR4kQ8W3A1SfO7Mh2Y" },
    { title: "Bawalah Cintaku", artist: "Afgan", duration: "3:43", cover: "linear-gradient(135deg, #1e1b4b, #311042)", spotifyId: "4X9MfE3kQ7W2A4SfO1Xh6Z" },
    { title: "Rumah Singgah", artist: "Fabio Asher", duration: "4:09", cover: "linear-gradient(135deg, #111, #333)", spotifyId: "2M9WfR5kQ6W1A3SfO8Xh4Y" },
    { title: "Duka", artist: "Last Child", duration: "5:01", cover: "linear-gradient(135deg, #1c1c1c, #4a4a4a)", spotifyId: "5B8MfE4kQ9W3A2SfO3Mh7Z" },
    { title: "Pupus", artist: "Dewa 19", duration: "5:05", cover: "linear-gradient(135deg, #0f0c20, #15102a)", spotifyId: "1X9WfR2kQ8W4A5SfO6Xh3Y" },
    { title: "Hati-Hati di Jalan", artist: "Tulus", duration: "4:02", cover: "linear-gradient(135deg, #13111c, #262238)", spotifyId: "5S9MfE3kQ7W2A1SfO2Mh5Z" },
    { title: "Pesan Terakhir", artist: "Lyodra", duration: "4:23", cover: "linear-gradient(135deg, #1a1c29, #2d3247)", spotifyId: "3B8WfR5kQ6W4A3SfO8Xh2Y" },
    { title: "Runtuh", artist: "Feby Putri feat. Fiersa Besari", duration: "3:43", cover: "linear-gradient(135deg, #2b2b36, #141419)", spotifyId: "4M9WfE4kQ8W2A5SfO1Mh6Z" },
    { title: "Pura Pura Lupa", artist: "Petrus Mahendra", duration: "4:03", cover: "linear-gradient(135deg, #1f2533, #11151c)", spotifyId: "2X9MfR3kQ7W1A4SfO6Xh8Y" },
    { title: "Asal Kau Bahagia", artist: "Armada", duration: "4:11", cover: "linear-gradient(135deg, #202026, #3a3a45)", spotifyId: "5B8WfE2kQ9W4A3SfO3Mh5Z" },
    { title: "Monokrom", artist: "Tulus", duration: "3:34", cover: "linear-gradient(135deg, #191919, #222222)", spotifyId: "1M9WfR5kQ6W2A1SfO7Xh4Y" },
    { title: "Kangen", artist: "Dewa 19", duration: "5:33", cover: "linear-gradient(135deg, #0d131a, #1a2633)", spotifyId: "3X9MfE4kQ8W3A5SfO2Mh6Z" },
    { title: "Seberapa Pantas", artist: "Sheila On 7", duration: "3:56", cover: "linear-gradient(135deg, #1c1e24, #2d313b)", spotifyId: "6B8WfR2kQ7W4A2SfO8Xh3Y" },
    { title: "Dan...", artist: "Sheila On 7", duration: "4:46", cover: "linear-gradient(135deg, #15181f, #090a0d)", spotifyId: "4X9MfE5kQ6W1A4SfO1Mh7Z" },
    { title: "Cinta Luar Biasa", artist: "Andmesh", duration: "4:15", cover: "linear-gradient(135deg, #211c27, #383042)", spotifyId: "2M9WfR4kQ9W3A3SfO6Xh5Y" },
    { title: "Hanya Rindu", artist: "Andmesh", duration: "4:11", cover: "linear-gradient(135deg, #1a222d, #2d3b4e)", spotifyId: "5B8MfE3kQ8W2A5SfO3Mh2Z" },
    { title: "Waktu Yang Salah", artist: "Fiersa Besari feat. Tantri", duration: "4:26", cover: "linear-gradient(135deg, #1e1e1e, #292929)", spotifyId: "1X9WfR5kQ7W4A1SfO8Xh6Y" },
    { title: "Celengan Rindu", artist: "Fiersa Besari", duration: "3:44", cover: "linear-gradient(135deg, #22252c, #131519)", spotifyId: "3M9WfE4kQ6W3A4SfO2Mh3Z" },
    { title: "April", artist: "Fiersa Besari", duration: "4:21", cover: "linear-gradient(135deg, #1f222e, #363c52)", spotifyId: "6B8MfR5kQ8W2A3SfO7Xh5Y" },
    { title: "Melawan Restu", artist: "Mahalini", duration: "3:39", cover: "linear-gradient(135deg, #241c2c, #3f314d)", spotifyId: "4X9WfE3kQ9W4A5SfO1Mh2Z" },
    { title: "Sisa Rasa", artist: "Mahalini", duration: "4:14", cover: "linear-gradient(135deg, #1c1d24, #31333f)", spotifyId: "2M9MfR2kQ7W3A1SfO6Xh4Y" },
    { title: "Kisah Sempurna", artist: "Mahalini", duration: "4:36", cover: "linear-gradient(135deg, #1c2421, #303e39)", spotifyId: "5B8WfE5kQ6W2A4SfO3Mh7Z" },
    { title: "Usai", artist: "Tiara Andini", duration: "3:37", cover: "linear-gradient(135deg, #241c21, #3f313a)", spotifyId: "1X9MfR4kQ8W4A2SfO8Xh3Y" },
    { title: "Merasa Indah", artist: "Tiara Andini", duration: "3:40", cover: "linear-gradient(135deg, #1f242d, #353f4f)", spotifyId: "3M9WfE3kQ7W1A5SfO2Mh6Z" },
    { title: "Janji Setia", artist: "Tiara Andini", duration: "4:21", cover: "linear-gradient(135deg, #26211c, #423931)", spotifyId: "6B8MfR2kQ9W3A3SfO7Xh2Y" },
    { title: "Sang Dewi", artist: "Lyodra & Andi Rianto", duration: "4:06", cover: "linear-gradient(135deg, #1c2624, #31423f)", spotifyId: "4X9WfE5kQ6W4A1SfO1Mh5Z" },
    { title: "Menghapus Jejakmu", artist: "Noah", duration: "3:03", cover: "linear-gradient(135deg, #212121, #111111)", spotifyId: "2M9MfR4kQ8W2A4SfO6Xh8Y" },
    { title: "Separuh Aku", artist: "Noah", duration: "4:29", cover: "linear-gradient(135deg, #1a1e24, #272d36)", spotifyId: "5B8WfE3kQ7W3A2SfO3Mh4Z" },
    { title: "Yang Terdalam", artist: "Noah", duration: "3:19", cover: "linear-gradient(135deg, #1e1c24, #2e2b38)", spotifyId: "1X9MfR2kQ9W4A5SfO8Xh2Y" },
    { title: "Cobalah Mengerti", artist: "Noah", duration: "4:23", cover: "linear-gradient(135deg, #241a1e, #3a2a30)", spotifyId: "3M9WfE4kQ6W1A3SfO2Mh6Z" },
    { title: "Pergilah Kasih", artist: "Chrisye", duration: "4:42", cover: "linear-gradient(135deg, #171c24, #272f3d)", spotifyId: "6B8MfR5kQ8W3A1SfO7Xh3Y" },
    { title: "Kisah Kasih di Sekolah", artist: "Chrisye", duration: "4:46", cover: "linear-gradient(135deg, #1c1724, #2f273d)", spotifyId: "4X9WfE2kQ7W4A4SfO1Mh5Z" },
    { title: "Bukan Manusia", artist: "Marion Jola", duration: "4:15", cover: "linear-gradient(135deg, #1c1c1c, #2b2b2b)", spotifyId: "2M9MfR3kQ9W2A2SfO6Xh8Y" },
    { title: "Secukupnya", artist: "Hindia", duration: "3:23", cover: "linear-gradient(135deg, #151a1e, #232c33)", spotifyId: "5B8WfE4kQ6W4A5SfO3Mh4Z" },
    { title: "Evaluasi", artist: "Hindia", duration: "3:58", cover: "linear-gradient(135deg, #1c241f, #2d3d34)", spotifyId: "1X9MfR5kQ8W3A1SfO8Xh2Y" },
    { title: "Januari", artist: "Glenn Fredly", duration: "4:45", cover: "linear-gradient(135deg, #211d1a, #38312c)", spotifyId: "3M9WfE2kQ7W2A4SfO2Mh6Z" },
    { title: "Sekali Ini Saja", artist: "Glenn Fredly", duration: "4:46", cover: "linear-gradient(135deg, #1a2124, #2b373c)", spotifyId: "6B8MfR4kQ9W4A3SfO7Xh3Y" },
    { title: "Sedih Tak Berujung", artist: "Glenn Fredly", duration: "4:59", cover: "linear-gradient(135deg, #241a22, #3c2b39)", spotifyId: "4X9WfE5kQ6W2A1SfO1Mh5Z" },
    { title: "Akhir Cerita Cinta", artist: "Glenn Fredly", duration: "5:08", cover: "linear-gradient(135deg, #1c1c24, #2f2f3d)", spotifyId: "2M9MfR3kQ7W1A4SfO6Xh8Y" },
    { title: "Tanya Hati", artist: "Pasto", duration: "3:47", cover: "linear-gradient(135deg, #241c1c, #3d2f2f)", spotifyId: "5B8WfE2kQ8W3A2SfO3Mh4Z" },
    { title: "Belum Siap Kehilangan", artist: "Stevan Pasaribu", duration: "4:43", cover: "linear-gradient(135deg, #1f241c, #343d2f)", spotifyId: "1X9MfR5kQ6W4A5SfO8Xh2Y" },
    { title: "Kemarin", artist: "Seventeen", duration: "3:32", cover: "linear-gradient(135deg, #17171c, #25252e)", spotifyId: "3M9WfE4kQ9W2A1SfO2Mh6Z" }
];

const genres = [
    { id: "g1", name: "Indie Galau", count: "120 Tracks", class: "g1" },
    { id: "g2", name: "Pop Indonesia", count: "85 Tracks", class: "g2" },
    { id: "g3", name: "Sad Acoustic", count: "50 Tracks", class: "g3" },
    { id: "g4", name: "Nostalgia Oldies", count: "95 Tracks", class: "g4" }
];

const radioStations = [
    { id: "r1", name: "VaaGalau FM", frequency: "98.7 MHz", listeners: "12.4K Streaming", isLive: true },
    { id: "r2", name: "Indie Wave Radio", frequency: "102.1 MHz", listeners: "5.2K Streaming", isLive: false },
    { id: "r3", name: "Sore Santai Club", frequency: "89.5 MHz", listeners: "8.9K Streaming", isLive: true }
];

const libraryItems = [
    { id: "l1", title: "Liked Songs", type: "Playlist", total: "150 Songs", icon: "❤️" },
    { id: "l2", title: "Midnight Vibe", type: "Custom Playlist", total: "24 Songs", icon: "🌙" },
    { id: "l3", title: "Mahalini Terpopuler", type: "Artist Collection", total: "12 Songs", icon: "👤" },
    { id: "l4", title: "Podcast Overthinking", type: "Show", total: "8 Episodes", icon: "🎙️" }
];

let player = null;
let currentIndex = 0;
let isPlaying = false;
let progressInterval = null;
let activeDeviceId = null;

window.onSpotifyWebPlaybackSDKReady = () => {
    const tokenCheck = setInterval(() => {
        const token = window.SPOTIFY_ACCESS_TOKEN;

        if (token) {
            clearInterval(tokenCheck);
            setupSpotifyPlayer(token);
        }
    }, 100);
};

function setupSpotifyPlayer(token) {
    player = new Spotify.Player({
        name: 'VaaStream Web Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    });

    player.addListener('player_state_changed', state => {
        if (!state) return;
        isPlaying = !state.paused;

        const playBtn = document.getElementById('play-btn');
        if (playBtn) playBtn.innerText = isPlaying ? '⏸' : '▶';

        syncProgressBar(state.position, state.duration);
    });

    player.addListener('ready', ({ device_id }) => {
        console.log('VaaStream Tersinkronisasi! Device ID:', device_id);
        activeDeviceId = device_id;

        renderPlaylistUI();
        initPlayerControls();
    });

    player.addListener('initialization_error', ({ message }) => console.error('Error Inisialisasi:', message));
    player.addListener('authentication_error', ({ message }) => console.error('Error Token (Expired/Salah):', message));
    player.addListener('account_error', ({ message }) => console.error('Akun Error (Wajib Spotify Premium):', message));

    player.connect();
}

function initPlayerControls() {
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const trackItems = document.querySelectorAll('.track-item');

    function playSpotifyTrack(spotifyId) {
        const token = window.SPOTIFY_ACCESS_TOKEN;
        if (!activeDeviceId) {
            console.warn("Pemutaran tertunda: Menunggu sinkronisasi device Spotify...");
            return;
        }

        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${activeDeviceId}`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [`spotify:track:${spotifyId}`] }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .catch(err => console.error("API Playback Error:", err));
    }

    function updatePlayerUI(index) {
        currentIndex = index;

        document.getElementById('current-title').innerText = songs[currentIndex].title;
        document.getElementById('current-artist').innerText = songs[currentIndex].artist;
        document.getElementById('current-cover').style.background = songs[currentIndex].cover;

        document.querySelectorAll('.track-item').forEach(item => item.classList.remove('active'));
        if (trackItems[currentIndex]) trackItems[currentIndex].classList.add('active');

        playSpotifyTrack(songs[currentIndex].spotifyId);
    }

    playBtn.addEventListener('click', () => {
        if (player) player.togglePlay();
    });

    nextBtn.addEventListener('click', () => {
        let nextIndex = (currentIndex + 1) % songs.length;
        updatePlayerUI(nextIndex);
    });

    prevBtn.addEventListener('click', () => {
        let prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        updatePlayerUI(prevIndex);
    });

    trackItems.forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'));
            updatePlayerUI(index);
        });
    });
}

function syncProgressBar(position, duration) {
    clearInterval(progressInterval);

    function formatTime(ms) {
        let seconds = Math.floor(ms / 1000);
        let min = Math.floor(seconds / 60);
        let sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    document.getElementById('time-max').innerText = formatTime(duration);

    if (isPlaying) {
        let currentPos = position;
        progressInterval = setInterval(() => {
            currentPos += 1000;
            if (currentPos <= duration) {
                const percentage = (currentPos / duration) * 100;
                document.getElementById('progress-line').style.width = `${percentage}%`;
                document.getElementById('time-current').innerText = formatTime(currentPos);
            }
        }, 1000);
    } else {
        const percentage = (position / duration) * 100;
        document.getElementById('progress-line').style.width = `${percentage}%`;
        document.getElementById('time-current').innerText = formatTime(position);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const playlistWrapper = document.getElementById("playlist-wrapper");
    if (playlistWrapper) {
        playlistWrapper.innerHTML = songs.map((song, index) => `
            <div class="track-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                <span class="track-num">${String(index + 1).padStart(2, '0')}</span>
                <div class="track-details">
                    <h4>${song.title}</h4>
                    <p>${song.artist}</p>
                </div>
                <span class="track-duration">${song.duration}</span>
            </div>
        `).join('');

        initPlayerControls();
    }

    const genreGrid = document.getElementById("genre-grid");
    if (genreGrid) {
        genreGrid.innerHTML = genres.map(genre => `
            <div class="genre-card ${genre.class}">
                <h4>${genre.name}</h4>
            </div>
        `).join('');
    }

    const radioFlex = document.getElementById("radio-flex");
    if (radioFlex) {
        radioFlex.innerHTML = radioStations.map(station => `
            <div class="radio-card">
                <div class="radio-wave">📻</div>
                <h3>${station.name}</h3>
                <p>${station.frequency} • ${station.genre}</p>
            </div>
        `).join('');
    }

    const libraryList = document.getElementById("library-list");
    if (libraryList) {
        libraryList.innerHTML = `
            <div class="lib-header">
                <span>Title</span>
                <span>Type</span>
                <span>Total</span>
            </div>
            <hr style="border-color: #1a1a24; margin: 10px 0;">
            ${libraryItems.map(item => `
                <div class="lib-item">
                    <span>${item.icon} | ${item.title}</span>
                    <span class="text-muted">${item.type}</span>
                    <span class="text-muted">${item.total}</span>
                </div>
            `).join('')}
        `;
    }
});