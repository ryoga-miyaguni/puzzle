// 各色指定
const brickColor = '#87cefa';
const brickStrokeColor = '#333333';
const blockBorderColor = '#2E4679';
const blockColorT = '#ad63f2';
const blockColorL = '#ffb43a';
const blockColorZ = '#e54a58';
const blockColorS = '#35d45a';
const blockColorJ = '#2391fe';
const blockColorI = '#18dee9';
const blockColorO = '#fcdd31';

// ブロックの色
const blockColor = [blockColorT, blockColorL, blockColorZ, blockColorS, blockColorJ, blockColorI, blockColorO];

// 各数値初期化
let score = 0;
let isPlayingGame = false;
let blockDownTime = 0;
let iX = 0;
let iY = 0;
let iDirection = 0;
let iType = 0;
let nextBlock1 = 0;
let nextBlock2 = 0;
let nextBlock3 = 0;
let nextBlock4 = 0;
let timeoutId = 0;

// ブロック
const blocks = [
[
    //ブロック0
    [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
    ]
],
[
    //ブロック1
    [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
    ]
],
[
    //ブロック2
    [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
    ]
],
[
    //ブロック3
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
    ]
],
[
    //ブロック4
    [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
    ]
],
[
    //ブロック5
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ],
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ]
],
[
    //ブロック6
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ]
]
];

function createNextBlock() {
    // 次のブロックを作る
    nextBlock1 = nextBlock2;
    nextBlock2 = nextBlock3;
    nextBlock3 = nextBlock4;
    nextBlock4 = Math.floor(Math.random() * 7);

    // 次のブロックを表示するためのキャンバスを取得
    const nextBlockArea = document.getElementById('next-block-area');
    const nextBlockAreaContext = nextBlockArea.getContext('2d');

    // 表示前に消す
    nextBlockAreaContext.clearRect(0, 0, 259, 259);

    // そこに描画する
    describeBlock(nextBlockAreaContext, 1, 0, 0, nextBlock1);
    describeBlock(nextBlockAreaContext, 1, 3, 0, nextBlock2);
    describeBlock(nextBlockAreaContext, 1, 6, 0, nextBlock3);
    describeBlock(nextBlockAreaContext, 1, 9, 0, nextBlock4);
}

function checkMoveBlock(blockPointX, blockPointY, blockDirection, blockType) {
    const point = blocks[blockType][blockDirection];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (point[i][j] == 1) {
                // ブロックを描画する位置が空欄かどうかを調べる
                // Xが範囲外のところには動かせない
                if ((blockPointX + j < 0) || (blockPointX + j > 11)) {
                    return false;
                }
                // Yが範囲外のところには動かせない
                if ((blockPointY + i < 0) || (blockPointY + i > 21)) {
                    return false;
                }
                // 空欄ではない場合は動かせない
                if (blockState[blockPointY + i][blockPointX + j] != 100) {
                    return false;
                }
            }
        }
    }
            return true;
}

function downBlock() {
    // 下に移動する
    // 描く先のCanvasを取得
    const mainGameArea = document.getElementById('main-game-area');
    const mainGameAreaContext = mainGameArea.getContext('2d');
 
    // 現在の座標と向きを保存
    const formerPointX = iX;
    const formerPointY = iY;
    const formerDirection = iDirection;

    // 消す
    deleteBlock(mainGameAreaContext, iX, iY, iDirection, iType);

    // 移動
    iY = iY + 1;

    // 移動できるかどうかを確認する
    let result = checkMoveBlock(iX, iY, iDirection, iType);
    if (result) {
        // 移動できる
        // 新しい位置に描く
        describeBlock(mainGameAreaContext, iX, iY, iDirection, iType);
    } else {
        // 移動できない
        // 移動前の場所・向きに戻す
        iX = formerPointX;
        iY = formerPointY;
        iDirection = formerDirection;
        describeBlock(mainGameAreaContext, iX, iY, iDirection, iType);
    
        // この位置を当たり判定用の配列に設定する
        const point = blocks[iType][iDirection];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (point[i][j] == 1) {
                    blockState[iY + i][iX + j] = iType;
                }
            }
        }

        // ライン消しと得点計算する
        scorePoint()

        // 次のブロックとして設定したものが落ちてくるようにする
        iX = 4;
        iY = 0;
        iType = nextBlock1;
        iDirection = 0;
        describeBlock(mainGameAreaContext, iX, iY, iDirection, iType);

        // そこに置けるかを判定
        result = checkMoveBlock(iX, iY, iDirection, iType);
        if (!result) {
            // 重なっているのでゲームオーバー

            // メッセージを出す
            alert('ゲームオーバー');

            // 実行中であることを止める
            isPlayingGame = false;
        }

        // さらに次のブロックを設定
        createNextBlock();
    }

    // 時間を少しずつ速くする
    blockDownTime = blockDownTime - 1;
    if (blockDownTime < 50) {
        // すごく速くなったら元に戻す
        blockDownTime = 1000;
    }
}

function moveBlock(e) {
    // 描く先のCanvasを取得
    const mainGameArea = document.getElementById('main-game-area');
    const mainGameAreaContext = mainGameArea.getContext('2d');

    // 現在の座標と向きを保存
    const formerPointX = iX;
    const formerPointY = iY;
    const formerDirection = iDirection;

    // いまのブロックを消す
    deleteBlock(mainGameAreaContext, iX, iY, iDirection, iType);

    if (e.keyCode == 39) {
        iX = iX + 1;
    }

    if (e.keyCode == 37) {
        iX = iX - 1;
    }

    if (e.keyCode == 90) {
        iDirection = iDirection + 1;

        if (iDirection > 3) {
            iDirection = 0;
        }
    }

    
    // ［↓］キーが押されたときは下に移動させる
    if (e.keyCode == 40) {
        downBlock();
    }
    
    // 移動・回転できるかどうかを確認
    const result = checkMoveBlock(iX, iY, iDirection, iType);
    if (!result) {
        // 回転・移動できない
        // 元に戻す
        iX = formerPointX;
        iY = formerPointY;
        iDirection = formerDirection;
    }

    // 新しい場所にブロックを描く
    describeBlock(mainGameAreaContext, iX, iY, iDirection, iType);
}

function downBlockQuickly () {
    const mainGameArea = document.getElementById('main-game-area');
    const mainGameAreaContext = mainGameArea.getContext('2d');

    deleteBlock(mainGameAreaContext, iX, iY, iDirection, iType);

    while (true) {
        const result = checkMoveBlock(iX, iY, iDirection, iType);

        if (result) {
            
        } else {
            
            describeBlock(mainGameAreaContext, iX, iY, iDirection,iType);
            break;
        }
    }
    downBlock();
}

function deleteBlock(context, blockPointX, blockPointY, blockDirection, blockType) {
    // 消す処理にする
    context.globalCompositeOperation = 'destination-out';
    // 描く（実際は消える）
    describeBlock(context, blockPointX, blockPointY, blockDirection, blockType);
    // 元の描く処理に戻す
    context.globalCompositeOperation = 'source-over';
}

function describeBlock(context, blockPointX, blockPointY, blockDirection, blockType){
    // ブロックの色と線
    context.fillStyle = blockColor[blockType];
    context.strokeStyle = brickStrokeColor;
    context.lineWidth = 3; 

    // パターンを決める
    const point = blocks[blockType][blockDirection];

    // パターン通りに描く
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            // 描くかどうか
            if (point[i][j] == 1) {
                // ここに描く
                context.beginPath();
                context.arc( (blockPointX + j) * 20 + 10, (blockPointY + i) * 20 + 10, 9, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
                context.lineWidth = 0.5;
                context.strokeStyle = blockBorderColor;
                context.fill();
                context.stroke();
            }
        }
    }
}

// ブロックの状態の変数
let blockState = [];

function scorePoint() {
    let blockCount = 0;

    // 全ラインをチェック
    for (y = 0; y < 21; y++) {
        let isNotAligned = false;
        for (x = 1; x <= 10; x++) {
            if (blockState[y][x] == 100) {
                // ブロックがない（隙間または壁）
                isNotAligned = true;
            }
        }
        
        if (!isNotAligned) {
            // 揃ってる
            blockCount = blockCount + 1;
    
            // 上から詰める
            for (k = y; k > 0; k--) {
                for (x = 1; x <= 10; x++) {
                    blockState[k][x] = blockState[k - 1][x];
                }
            }
        }    
    }

    // ブロックを全部描き直す
    // 1.キャンバスを取得する
    const mainGameArea = document.getElementById('main-game-area');
    const mainGameAreaContext = mainGameArea.getContext('2d');

    // 2.全部消す
    mainGameAreaContext.clearRect(0, 0, 239, 439);

    // 3.ブロックがあるところを描く
    for (y = 0; y < 22; y++) {
        for (x = 0; x < 12; x++) {
            if ((blockState[y][x] != 100) &&(blockState[y][x] != 99)) {
                // ブロックを描く
                mainGameAreaContext.fillStyle = blockColor[blockState[y] [x]];
                mainGameAreaContext.strokeStyle = brickStrokeColor;
                mainGameAreaContext.lineWidth = 3;

                mainGameAreaContext.beginPath();
                mainGameAreaContext.arc( x * 20 + 10, y * 20 + 10, 9, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
                mainGameAreaContext.lineWidth = 0.5;
                mainGameAreaContext.strokeStyle = blockBorderColor;
                mainGameAreaContext.fill();
                mainGameAreaContext.stroke();
            }
        }
    }

    // 得点を計算する
    switch (blockCount) {
        case 1:
            score = score + 10;
            break;
        case 2:
            score = score + 20;
            break;
        case 3:
            score = score + 100;
            break;
        case 4:
            score = score + 1000;
            break;
    }

    // 得点を表示する
    const scoreArea = document.getElementById('score');
    scoreArea.innerHTML = score;
}

function downBlockAuto() {
    if (isPlayingGame) {
        // 実行中
        // 下に動かす
        downBlock();
        // 次の時間を設定
        timeoutId = setTimeout(downBlockAuto, blockDownTime);
    } 
}

function startGame() {
    // isPlayingGame = false;
    const mainGameArea = document.getElementById('main-game-area');
    const mainGameAreaContext = mainGameArea.getContext('2d');

    // 画面を消す
    mainGameAreaContext.clearRect(0, 0, 239, 439);

    // 得点を0にする
    const scoreArea = document.getElementById('score');
    score = 0;
    scoreArea.innerHTML = score;

    // ゲーム中に設定し、タイマーを設定する
    isPlayingGame = true;
    blockDownTime = 1000;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(downBlockAuto, blockDownTime);

    // 状態をクリア
    blockState = new Array(22);
    for (i = 0; i < 22; i++) {
        blockState[i] = new Array(12);
        for (j = 0; j < 12; j++) {
            blockState[i][j] = 100;
        }
    }

    // 壁を設定
    for (i = 0; i < 22; i++) {
        blockState[i][0] = 99;
    }

    for (i = 0; i < 22; i++) {
        blockState[i][11] = 99;
    }

    for (i = 0; i < 12; i++) {
        blockState[21][i] = 99;
    }

    // ランダムなブロックを作る
    iX = 4;
    iY = 0;
    iDirection = 0;
    iType = Math.floor(Math.random() * 7);

    // 次のブロックをセットする
    nextBlock1 = Math.floor(Math.random() * 7);
    nextBlock2 = Math.floor(Math.random() * 7);
    nextBlock3 = Math.floor(Math.random() * 7);
    nextBlock4 = Math.floor(Math.random() * 7);
    createNextBlock();

    describeBlock(mainGameAreaContext, iX, iY, iDirection, iType);
}

function initializeSetting() {
    // 背景のCanvasを取得
    const backgroundArea = document.getElementById('background-area');
    const backGroundAreaContext = backgroundArea.getContext('2d');

    // 塗りを設定
    backGroundAreaContext.fillStyle = brickColor;

    // 線を設定
    backGroundAreaContext.strokeStyle = brickStrokeColor;
    backGroundAreaContext.lineWidth = 2;

    // 四角形を塗る
    backGroundAreaContext.fillRect(0, 0, 20, 20);

    // 四角形の枠線を描く
    backGroundAreaContext.strokeRect(0, 0, 20, 20);

    // 左壁を描く
    let x = 0;
    let y = 0;

    for (i = 0; i < 22; i++) {
        backGroundAreaContext.fillRect(x, y, 20, 20);
        backGroundAreaContext.strokeRect(x, y, 20, 20);
        y = y + 20;
    }

    // 右壁を描く
    x = 220;
    y = 0;

    for (i = 0; i < 22; i++) {
        backGroundAreaContext.fillRect(x, y, 20, 20);
        backGroundAreaContext.strokeRect(x, y, 20, 20);
        y = y + 20;
    }

    // 下壁を描く
    x = 0;
    y = 420;

    for (i = 0; i < 22; i++) {
        backGroundAreaContext.fillRect(x, y, 20, 20);
        backGroundAreaContext.strokeRect(x, y, 20, 20);
        x = x + 20;
    }
}