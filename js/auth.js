// --- KONFIGURASI SPOTIFY ---
const CLIENT_ID = '11c2ed5dbb454abba5a2080bb2f1dfd2';
const REDIRECT_URI = 'http://127.0.0.1:5500/'; // Harus sama dengan di dashboard
const SCOPES = 'streaming user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-private user-read-email';

// ==========================================
// KRYPTOGRAFI HELPER UNTUK ALUR PKCE (Otomatis)
// ==========================================
function generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, new Uint8Array(digest)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

// ==========================================
// ALUR UTAMA OTENTIKASI (AUTHORIZATION CODE)
// ==========================================

// 1. Fungsi mengarahkan user ke Spotify Login dengan response_type=code
async function loginToSpotify() {
    const codeVerifier = generateRandomString(128);
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    // Simpan verifier di localStorage untuk proses verifikasi pertukaran token nanti
    localStorage.setItem('spotify_code_verifier', codeVerifier);

    const authUrl = new URL("https://accounts.spotify.com/authorize");
    const params = {
        response_type: 'code', // <-- Diubah menjadi code sesuai kebutuhan keamanan baru
        client_id: CLIENT_ID,
        scope: SCOPES,
        redirect_uri: REDIRECT_URI,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge
    };

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
}

// 2. Fungsi menukar 'code' dari URL menjadi Access Token asli melalui Fetch API
// Di dalam js/auth.js (Cari fungsi exchangeCodeForToken)
async function exchangeCodeForToken(code) {
    const codeVerifier = localStorage.getItem('spotify_code_verifier');
    const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            client_id: CLIENT_ID,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
            code_verifier: codeVerifier
        })
    };

    try {
        // --- PERBAIKAN: Ubah menjadi URL Resmi Spotify di bawah ini ---
        const response = await fetch('https://accounts.spotify.com/api/token', payload);
        const data = await response.json();

        if (data.access_token) {
            const expiryTime = new Date().getTime() + parseInt(data.expires_in) * 1000;
            localStorage.setItem('spotify_token', data.access_token);
            localStorage.setItem('spotify_token_expiry', expiryTime);
            if (data.refresh_token) localStorage.setItem('spotify_refresh_token', data.refresh_token);
            return data.access_token;
        }
    } catch (error) {
        console.error("Gagal menukar kode ke token:", error);
    }
    return null;
}

// 3. Fungsi inisialisasi pengecekan token otomatis saat halaman dibuka
async function initAuth() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code'); // Ambil parameter ?code= dari URL

    if (code) {
        // Jika ada kode di URL, tukar ke token terlebih dahulu
        console.log("Mendeteksi kode otorisasi, menukar ke token...");
        window.history.replaceState({}, document.title, window.location.pathname); // Bersihkan URL (?code= hilang)
        const token = await exchangeCodeForToken(code);
        if (token) window.location.reload(); // Reload halaman agar Player terpicu menggunakan token baru
        return;
    }

    // Cek token lama yang tersimpan di browser
    const savedToken = localStorage.getItem('spotify_token');
    const savedExpiry = localStorage.getItem('spotify_token_expiry');
    const now = new Date().getTime();

    if (savedToken && savedExpiry && now < parseInt(savedExpiry)) {
        // Token masih aktif dan valid
        window.SPOTIFY_ACCESS_TOKEN = savedToken;
        return;
    }

    // Jika token ada tapi expired, arahkan ulang ke fungsi login/refresh
    localStorage.removeItem('spotify_token');
    localStorage.removeItem('spotify_token_expiry');

    console.log("Token kosong atau kedaluwarsa. Memulai proses login...");
    loginToSpotify();
}

// Jalankan sistem proteksi otentikasi
initAuth();