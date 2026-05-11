const canvas = document.getElementById('ashCanvas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Ash {
    constructor() { this.init(); }
    init() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * -1.5 - 0.5;
        this.speedX = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.drift = Math.random() * 0.02 - 0.01;
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.speedX += this.drift;
        if (this.y < -10 || this.x < -20 || this.x > canvas.width + 20) {
            this.init();
        }
    }
    draw() {
        ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Smoke {
    constructor() { this.init(); }
    init() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 20;
        this.size = Math.random() * 40 + 30;
        this.speedY = Math.random() * -0.6 - 0.2;
        this.opacity = Math.random() * 0.04 + 0.01;
    }
    update() {
        this.y += this.speedY;
        this.opacity -= 0.0003;
        if (this.opacity <= 0) this.init();
    }
    draw() {
        ctx.fillStyle = `rgba(120, 120, 120, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Particles_holder {
    constructor() {
        this.particles = [];
    }
    // create at start
    spawn(ashCount, smokeCount) {
        for (let i = 0; i < ashCount; i++) this.particles.push(new Ash());
        for (let i = 0; i < smokeCount; i++) this.particles.push(new Smoke());
    }
    // update and draw
    render() {
        this.particles.forEach(p => {
            p.update();
            p.draw();
        });
    }
    // delete them all
    clearAll() {
        this.particles = [];
    }
}

const fireSystem = new Particles_holder();
fireSystem.spawn(20, 15);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireSystem.render();
    requestAnimationFrame(animate);
}

animate();