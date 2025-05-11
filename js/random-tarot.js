// 設置圖片基本路徑 - 根據您的需求修改
const imagePath = "images/my-custom-tarot/"

// 大阿爾卡納牌組資料 - 使用您的自定義圖片
const majorArcana = [
  { id: 0, name: "愚者", file: "fool.jpg" },
  { id: 1, name: "魔術師", file: "magician.jpg" },
  { id: 2, name: "女祭司", file: "high-priestess.jpg" },
  { id: 3, name: "皇后", file: "empress.jpg" },
  { id: 4, name: "皇帝", file: "emperor.jpg" },
  { id: 5, name: "教皇", file: "hierophant.jpg" },
  { id: 6, name: "戀人", file: "lovers.jpg" },
  { id: 7, name: "戰車", file: "chariot.jpg" },
  { id: 8, name: "力量", file: "strength.jpg" },
  { id: 9, name: "隱士", file: "hermit.jpg" },
  { id: 10, name: "命運之輪", file: "wheel-of-fortune.jpg" },
  { id: 11, name: "正義", file: "justice.jpg" },
  { id: 12, name: "吊人", file: "hanged-man.jpg" },
  { id: 13, name: "死神", file: "death.jpg" },
  { id: 14, name: "節制", file: "temperance.jpg" },
  { id: 15, name: "惡魔", file: "devil.jpg" },
  { id: 16, name: "高塔", file: "tower.jpg" },
  { id: 17, name: "星星", file: "star.jpg" },
  { id: 18, name: "月亮", file: "moon.jpg" },
  { id: 19, name: "太陽", file: "sun.jpg" },
  { id: 20, name: "審判", file: "judgement.jpg" },
  { id: 21, name: "世界", file: "world.jpg" },
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

