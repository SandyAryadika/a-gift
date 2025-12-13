const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heading = document.querySelector('h1');
const gombalan = document.querySelector('.gombalan');
const gifImage = document.querySelector('.cute-gif');
const bgMusic = document.getElementById('bgMusic');

// === LOGIKA AGAR MUSIK MENYALA (Auto-play workaround) ===
// Browser memblokir auto-play suara, jadi kita pancing saat user klik di mana saja pertama kali
document.body.addEventListener('click', function() {
    // Cek apakah musik sudah diputar atau belum
    if (bgMusic.paused) {
        bgMusic.play().catch(error => {
            console.log("Autoplay dicegah oleh browser, menunggu interaksi user.");
        });
    }
}, { once: true }); // Hanya jalan sekali

// === LOGIKA TOMBOL "NO" KABUR ===
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

function moveButton() {
    const padding = 50; 
    const maxWidth = window.innerWidth - noBtn.offsetWidth - padding;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.random() * maxWidth);
    const randomY = Math.max(padding, Math.random() * maxHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// === LOGIKA TOMBOL "YES" DIKLIK ===
yesBtn.addEventListener('click', function() {
    // 1. Ubah Tampilan Teks & Gambar
    heading.innerText = "Yeay! I Love You! ❤️";
    gombalan.innerText = "Makasih ya udah nerima aku. Kamu yang terbaik! ";
    gifImage.src = "https://media.giphy.com/media/T86i6yDyOYz7J6AkcG/giphy.gif"; 
    
    // 2. Hilangkan tombol No
    noBtn.style.display = 'none';
    
    // 3. Ubah tombol Yes
    this.innerText = "Ciee jadian 🎉";
    this.disabled = true; 
    this.style.transform = 'scale(1.1)';

    // 4. Jalankan efek bunga
    createFlowers();
});

// === FUNGSI MEMBUAT BUNGA ===
function createFlowers() {
    const flowerEmojis = ['🌸', '🌹', '🌷', '🌻', '🌺', '💐', '❤️', '💖'];
    const numberOfFlowers = 50; 

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        
        // Pilih emoji acak
        flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

        // Posisi acak
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        
        // Ukuran acak
        const scale = Math.random() * 1.5 + 1;
        flower.style.fontSize = scale + 'rem';

        // Rotasi acak
        const rotation = Math.random() * 360;
        flower.style.setProperty('--rotation', rotation + 'deg');

        // Delay animasi acak
        flower.style.animationDelay = Math.random() * 1.5 + 's';

        document.body.appendChild(flower);

        // Hapus elemen setelah selesai animasi (5 detik)
        setTimeout(() => {
            flower.remove();
        }, 5000); 
    }
}