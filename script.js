function showBirthdayMessage() {
    const msg = document.getElementById('birthdayMessage');
    const container = document.getElementById('heartContainer');
  
    msg.style.display = 'block';
  
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart'; // ใช้ชื่อใหม่
      heart.innerText = '💖';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = Math.random() * window.innerHeight + 'px';
      heart.style.fontSize = (20 + Math.random() * 20) + 'px';
  
      container.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
  
    setTimeout(() => {
      msg.style.display = 'none';
    }, 5000);
  }
  