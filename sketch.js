let spriteSheet1, spriteSheet2, spriteSheet3;
let animation1 = [], animation2 = [], animation3 = [];
let bgMusic;

// 動畫速度控制器，數字越大，動畫播放速度越慢
const animationSpeed = 12;

// 第一個動畫的屬性
const spriteWidth1 = 155;
const spriteHeight1 = 27;
const frameCountTotal1 = 5;
let frameWidth1;

// 第二個動畫的屬性
const spriteWidth2 = 271;
const spriteHeight2 = 41;
const frameCountTotal2 = 6;
let frameWidth2;

// 第三個動畫的屬性
const spriteWidth3 = 534;
const spriteHeight3 = 110;
const frameCountTotal3 = 7;
let frameWidth3;

// 在程式開始前預先載入圖片資源
function preload() {
  // 載入位於 '1' 資料夾中的 all_1.png
  spriteSheet1 = loadImage('1/all_1.png');
  // 載入位於 '2' 資料夾中的 all_2.png
  spriteSheet2 = loadImage('2/all_2.png');
  // 載入位於 '3' 資料夾中的 all_3.png
  spriteSheet3 = loadImage('3/all_3.png');
  // 載入位於 'assets' 資料夾中的背景音樂
  bgMusic = loadSound('assets/background_music.mp3');
}

function setup() {
  // 建立一個填滿整個視窗的畫布
  createCanvas(windowWidth, windowHeight);

  // --- 處理第一個動畫 ---
  // 計算單一影格的寬度
  frameWidth1 = spriteWidth1 / frameCountTotal1;
  // 從圖片精靈檔案中擷取每一個影格
  for (let i = 0; i < frameCountTotal1; i++) {
    let frame = spriteSheet1.get(i * frameWidth1, 0, frameWidth1, spriteHeight1);
    animation1.push(frame);
  }

  // --- 處理第二個動畫 ---
  // 計算單一影格的寬度
  frameWidth2 = spriteWidth2 / frameCountTotal2;
  // 從圖片精靈檔案中擷取每一個影格
  for (let i = 0; i < frameCountTotal2; i++) {
    let frame = spriteSheet2.get(i * frameWidth2, 0, frameWidth2, spriteHeight2);
    animation2.push(frame);
  }

  // --- 處理第三個動畫 ---
  // 計算單一影格的寬度
  frameWidth3 = spriteWidth3 / frameCountTotal3;
  // 從圖片精靈檔案中擷取每一個影格
  for (let i = 0; i < frameCountTotal3; i++) {
    let frame = spriteSheet3.get(i * frameWidth3, 0, frameWidth3, spriteHeight3);
    animation3.push(frame);
  }
}

function draw() {
  // 設定背景顏色為 #edf6f9
  background('#edf6f9');
  // 將圖片的繪製原點設定在中心，方便置中
  imageMode(CENTER);

  // --- 繪製第一個動畫 ---
  // 透過 frameCount 來計算目前要顯示第幾個影格，以產生動畫效果
  // floor(frameCount / animationSpeed) % frameCountTotal 的意思是每 animationSpeed 個繪圖循環切換到下一個影格
  image(animation1[floor(frameCount / animationSpeed) % frameCountTotal1], width / 2 - 160, height / 2);

  // --- 繪製第二個動畫 ---
  // 將它繪製在第一個動畫的右邊
  image(animation2[floor(frameCount / animationSpeed) % frameCountTotal2], width / 2, height / 2);

  // --- 繪製第三個動畫 ---
  // 將它繪製在第二個動畫的右邊，並指定寬高為 160*160
  image(animation3[floor(frameCount / animationSpeed) % frameCountTotal3], width / 2 + 160, height / 2, 160, 160);
}

// 當瀏覽器視窗大小改變時，自動調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// 當使用者點擊滑鼠時，播放背景音樂
function mousePressed() {
  // 檢查音樂是否已載入且尚未播放
  // 如果是，就開始循環播放
  if (bgMusic.isLoaded() && !bgMusic.isPlaying()) {
    bgMusic.loop();
  }
}
