const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(960, 540);
document.body.appendChild(renderer.domElement);

const board = new THREE.Object3D();

const geometry = new THREE.BoxGeometry(10, 1, 10);
const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xf0d9b5 });
const blackMaterial = new THREE.MeshBasicMaterial({ color: 0xb58863 });

for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
        const material = (x + y) % 2 === 0 ? whiteMaterial : blackMaterial;
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x * 10 - 35, 0, y * 10 - 35);
        board.add(cube);
    }
}

scene.add(board);



camera.position.z = 70;

const mouse = new THREE.Vector2();
const rotation = new THREE.Vector2(0.5, 0.5);

function dragBoard(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

window.addEventListener("mousedown", dragBoard, false);

function animate() {
    requestAnimationFrame(animate);

    rotation.x += (mouse.y - rotation.x) * 0.05;
    rotation.y += (mouse.x - rotation.y) * 0.05;

    board.rotation.x = rotation.x / 2;
    board.rotation.y = rotation.y;

    renderer.render(scene, camera);
}

animate();