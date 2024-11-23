document.addEventListener('DOMContentLoaded', function () {
    // Animasi hover pada kartu
    const card = document.querySelector('.card');

    card.addEventListener('mouseenter', function () {
        this.classList.add('hover-effect');
    });

    card.addEventListener('mouseleave', function () {
        this.classList.remove('hover-effect');
    });

    // Efek tambahan pada klik
    card.addEventListener('click', function () {
        this.classList.toggle('expanded');

        // Tambahkan animasi konfeti
        createConfetti();
    });

    // Fungsi membuat konfeti
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);

            // Hapus konfeti setelah animasi selesai
            confetti.addEventListener('animationend', function () {
                this.remove();
            });
        }
    }
});