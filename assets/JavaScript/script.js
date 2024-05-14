<script>
    const video = document.getElementById('video-player');
    const volumeBtn = document.getElementById('volume-btn');

    volumeBtn.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            volumeBtn.textContent = 'Mute';
        } else {
            video.muted = true;
            volumeBtn.textContent = 'Unmute';
        }
    });
</script>