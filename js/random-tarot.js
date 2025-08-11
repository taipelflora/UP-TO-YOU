// 設置圖片基本路徑 - 根據您的需求修改
const imagePath = location.pathname.includes("/card/") ? "../images/webp/" : "images/webp/";
const assetsRoot = location.pathname.includes("/card/") ? "../images/" : "images/";


// 大阿爾卡納牌組資料 - 使用您的自定義圖片
const majorArcana = [
  { id: 0, name: "愚者", file: "00fool.webp" },
  { id: 1, name: "魔術師", file: "01magician.webp" },
  { id: 2, name: "女祭司", file: "02high-priestess.webp" },
  { id: 3, name: "皇后", file: "03empress.webp" },
  { id: 4, name: "皇帝", file: "04emperor.webp" },
  { id: 5, name: "教皇", file: "05hierophant.webp" },
  { id: 6, name: "戀人", file: "06lovers.webp" },
  { id: 7, name: "戰車", file: "07chariot.webp" },
  { id: 8, name: "力量", file: "08strength.webp" },
  { id: 9, name: "隱士", file: "09hermit.webp" },
  { id: 10, name: "命運之輪", file: "10wheel.webp" },
  { id: 11, name: "正義", file: "11justice.webp" },
  { id: 12, name: "吊人", file: "12hanged-man.webp" },
  { id: 13, name: "死神", file: "13death.webp" },
  { id: 14, name: "節制", file: "14temperance.webp" },
  { id: 15, name: "惡魔", file: "15devil.webp" },
  { id: 16, name: "高塔", file: "16tower.webp" },
  { id: 17, name: "星星", file: "17star.webp" },
  { id: 18, name: "月亮", file: "18moon.webp" },
  { id: 19, name: "太陽", file: "19sun.webp" },
  { id: 20, name: "審判", file: "20judgement.webp" },
  { id: 21, name: "世界", file: "21world.webp" },
]

// 隨機選擇一張牌
function getRandomTarotCard() {
  return majorArcana[Math.floor(Math.random() * majorArcana.length)]
}

// 顯示隨機塔羅牌
function displayRandomTarotCard() {
  const randomCard = getRandomTarotCard()
  const cardContainer = document.getElementById("random-tarot-card")

  if (cardContainer) {
    const cardHTML = `
            <a href="card/${randomCard.id}.html" class="random-card">
                <div class="card-image">
                    <img src="${imagePath}${randomCard.file}" alt="${randomCard.name}" class="tarot-display-image">
                </div>
                <div class="card-caption">
                    <p>${randomCard.id}. ${randomCard.name}</p>
                </div>
            </a>
        `

    cardContainer.innerHTML = cardHTML
  }
}

// 當頁面加載完成時顯示隨機塔羅牌
document.addEventListener("DOMContentLoaded", displayRandomTarotCard)

