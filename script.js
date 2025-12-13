const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heading = document.querySelector('h1');
const gombalan = document.querySelector('.gombalan');
// Kita ubah selector ini untuk menargetkan gambar di dalam polaroid
const photoImg = document.querySelector('.my-photo'); 
const bgMusic = document.getElementById('bgMusic');

// === WORKAROUND AUTOPLAY MUSIK ===
document.body.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Menunggu interaksi user"));
    }
}, { once: true });

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
    heading.innerText = "Yeay! I Love You! ❤️";
    gombalan.innerText = "Makasih ya udah nerima aku.";
    
    // Mengganti foto polaroid jadi GIF senang saat diterima
    // Kamu bisa ganti link ini dengan foto kalian berdua yang sedang senyum
    photoImg.src = "https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif";
    
    noBtn.style.display = 'none';
    
    this.innerText = "Ciee jadian 🎉";
    this.disabled = true; 
    this.style.transform = 'scale(1.1)';

    createFlowers();
});

// === FUNGSI BUNGA (PERMANEN) ===
function createFlowers() {
    const flowerEmojis = [
        // Koleksi Bunga
        '🌸', '🌹', '🌷', '🌻', '🌺', '💐', '🌼', '💮', '🪷', '🏵️', 
        // Koleksi Hati & Romantis
        '❤️', '💖', '💕', '💞', '💓', '💗', '💘', '💝', '💟', '❣️',
        // Hiasan Tambahan (Kupu-kupu, Kilauan, dll)
        '✨', '🦋', '💌', '🧸', '🎀'
    ];
    
    const numberOfFlowers = 50; 

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

        // Posisi Acak
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        
        // Ukuran Acak
        const scale = Math.random() * 1.5 + 1;
        flower.style.fontSize = scale + 'rem';

        // Rotasi Acak
        const rotation = Math.random() * 360;
        flower.style.setProperty('--rotation', rotation + 'deg');

        // Delay Animasi Acak
        flower.style.animationDelay = Math.random() * 1.5 + 's';

        // Masukkan ke body
        document.body.appendChild(flower);

        // KITA HAPUS BAGIAN setTimeout DI SINI
        // Sekarang bunga tidak akan pernah dihapus oleh sistem
    }
}