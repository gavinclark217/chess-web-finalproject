const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
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

function createPiece(color, x, y) {
    const pieceGeometry = new THREE.CylinderGeometry(3, 3, 1, 32);
    const pieceMaterial = new THREE.MeshBasicMaterial({ color: color });
    const piece = new THREE.Mesh(pieceGeometry, pieceMaterial);
    piece.position.set(x * 10 - 35, 0.5, y * 10 - 35); // Adjust the y-position to place the piece above the board
    return piece;
}

// const loader = new THREE.GLTFLoader();

// function loadPiece(x, y, modelPath) {
//     loader.load(
//         modelPath,
//         function (gltf) {
//             const piece = gltf.scene;
//             piece.scale.set(0.5, 0.5, 0.5); // Adjust the scale if needed
//             piece.position.set(x * 10 - 35, 0, y * 10 - 35); // Adjust the position to place the piece above the board
//             board.add(piece);
//         },
//         undefined,
//         function (error) {
//             console.error('An error occurred while loading the 3D model', error);
//         }
//     );
// }

board.add(createPiece(0x000000, 0, 0));
board.add(createPiece(0x000000, 1, 0));
board.add(createPiece(0x000000, 2, 0));
board.add(createPiece(0x000000, 3, 0));
board.add(createPiece(0x000000, 4, 0));
board.add(createPiece(0x000000, 5, 0));
board.add(createPiece(0x000000, 6, 0));
board.add(createPiece(0x000000, 7, 0));
board.add(createPiece(0x000000, 0, 1));
board.add(createPiece(0x000000, 1, 1));
board.add(createPiece(0x000000, 2, 1));
board.add(createPiece(0x000000, 3, 1));
board.add(createPiece(0x000000, 4, 1));
board.add(createPiece(0x000000, 5, 1));
board.add(createPiece(0x000000, 6, 1));
board.add(createPiece(0x000000, 7, 1));

// Add white pieces
board.add(createPiece(0xffffff, 0, 7));
board.add(createPiece(0xffffff, 1, 7));
board.add(createPiece(0xffffff, 2, 7));
board.add(createPiece(0xffffff, 3, 7));
board.add(createPiece(0xffffff, 4, 7));
board.add(createPiece(0xffffff, 5, 7));
board.add(createPiece(0xffffff, 6, 7));
board.add(createPiece(0xffffff, 7, 7));
board.add(createPiece(0xffffff, 0, 6));
board.add(createPiece(0xffffff, 1, 6));
board.add(createPiece(0xffffff, 2, 6));
board.add(createPiece(0xffffff, 3, 6));
board.add(createPiece(0xffffff, 4, 6));
board.add(createPiece(0xffffff, 5, 6));
board.add(createPiece(0xffffff, 6, 6));
board.add(createPiece(0xffffff, 7, 6));

// Add black pieces
// board.add(loadPiece(0, 7));
// board.add(loadPiece(1, 7));
// board.add(loadPiece(2, 7));
// board.add(loadPiece(3, 7));
// board.add(loadPiece(4, 7));
// board.add(loadPiece(5, 7));
// board.add(loadPiece(6, 7));
// board.add(loadPiece(7, 7));
// board.add(loadPiece(0, 6));
// board.add(loadPiece(1, 6));
// board.add(loadPiece(2, 6));
// board.add(loadPiece(3, 6));
// board.add(loadPiece(4, 6));
// board.add(loadPiece(5, 6));
// board.add(loadPiece(6, 6));
// board.add(loadPiece(7, 6));

// // Add white pieces
// board.add(loadPiece(0, 0));
// board.add(loadPiece(1, 0));
// board.add(loadPiece(2, 0));
// board.add(loadPiece(3, 0));
// board.add(loadPiece(4, 0));
// board.add(loadPiece(5, 0));
// board.add(loadPiece(6, 0));
// board.add(loadPiece(7, 0));
// board.add(loadPiece(0, 1));
// board.add(loadPiece(1, 1));
// board.add(loadPiece(2, 1));
// board.add(loadPiece(3, 1));
// board.add(loadPiece(4, 1));
// board.add(loadPiece(5, 1));
// board.add(loadPiece(6, 1));
// board.add(loadPiece(7, 1));
// ... Add other white pieces as needed



scene.add(board);



camera.position.z = 70;

const mouse = new THREE.Vector2();
const rotation = new THREE.Vector2(0.5, 0.5);

let isDragging = false;

function dragStart(event) {
    isDragging = true;
    dragBoard(event);
}

function dragEnd() {
    isDragging = false;
}

function dragBoard(event) {
    if (isDragging) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        rotation.x = - (mouse.y * 0.5);
        rotation.y = (mouse.x * 0.5);

        board.rotation.x = rotation.x;
        board.rotation.y = rotation.y;

        renderer.render(scene, camera);
    }
}

window.addEventListener("mousedown", dragStart, false);
window.addEventListener("mousemove", dragBoard, false);
window.addEventListener("mouseup", dragEnd, false);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();