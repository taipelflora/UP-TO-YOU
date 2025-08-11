// 設置圖片基本路徑
const imagePath = "../images/webp/"

// 大阿爾卡納牌組資料
const majorArcana = [
  {
    id: 0,
    name: "愚者",
    file: "00fool.webp",
    upright: "新的開始、冒險、自由、純真",
    reversed: "魯莽、不負責任、冒險、不成熟",
  },
  {
    id: 1,
    name: "魔術師",
    file: "01magician.webp",
    upright: "創造力、技能、專注、行動、實現",
    reversed: "操縱、欺騙、未實現的才能、延遲",
  },
  {
    id: 2,
    name: "女祭司",
    file: "02high-priestess.webp",
    upright: "直覺、潛意識、神秘、內在知識",
    reversed: "秘密、隱藏的議程、需要傾聽內在的聲音",
  },
  {
    id: 3,
    name: "皇后",
    file: "03empress.webp",
    upright: "豐饒、母性、創造、自然、滋養",
    reversed: "依賴、過度保護、創意阻塞、家庭問題",
  },
  {
    id: 4,
    name: "皇帝",
    file: "04emperor.webp",
    upright: "權威、結構、控制、父親形象、穩定",
    reversed: "專制、過度控制、剛性、缺乏紀律",
  },
  {
    id: 5,
    name: "教皇",
    file: "05hierophant.webp",
    upright: "傳統、信仰、道德、精神指導、教育",
    reversed: "反叛、不傳統、個人信仰、自由思想",
  },
  {
    id: 6,
    name: "戀人",
    file: "06lovers.webp",
    upright: "選擇、愛情、和諧、關係、價值觀的調整",
    reversed: "不平衡、分離、錯誤的選擇、不和諧",
  },
  {
    id: 7,
    name: "戰車",
    file: "07chariot.webp",
    upright: "決心、意志、勝利、自信、控制",
    reversed: "缺乏方向、侵略、失敗、失控",
  },
  {
    id: 8,
    name: "力量",
    file: "08strength.webp",
    upright: "勇氣、耐心、控制、慈悲、影響力",
    reversed: "弱點、缺乏自信、自我懷疑、低能量",
  },
  {
    id: 9,
    name: "隱士",
    file: "09hermit.webp",
    upright: "反思、內省、指導、孤獨、尋找內在真相",
    reversed: "孤立、孤獨、過度退縮、拒絕幫助",
  },
  {
    id: 10,
    name: "命運之輪",
    file: "10wheel.webp",
    upright: "變化、命運、轉折、進步、機會",
    reversed: "壞運氣、阻力、打破循環、延遲",
  },
  {
    id: 11,
    name: "正義",
    file: "11justice.webp",
    upright: "平衡、真理、法律、因果、清晰",
    reversed: "不公正、缺乏責任、不誠實、不平衡",
  },
  {
    id: 12,
    name: "吊人",
    file: "12hanged.webp",
    upright: "犧牲、等待、新視角、暫停、放棄",
    reversed: "拖延、抵抗、停滯、不必要的犧牲",
  },
  {
    id: 13,
    name: "死神",
    file: "13death.webp",
    upright: "結束、變化、轉變、過渡、放下",
    reversed: "抵抗變化、無法前進、停滯、重生",
  },
  {
    id: 14,
    name: "節制",
    file: "14temperance.webp",
    upright: "平衡、適度、耐心、目的、意義",
    reversed: "不平衡、過度、缺乏長期願景、衝突",
  },
  {
    id: 15,
    name: "惡魔",
    file: "15devil.webp",
    upright: "束縛、物質主義、陰影面、成癮、依附",
    reversed: "釋放、擺脫束縛、恢復控制、面對恐懼",
  },
  {
    id: 16,
    name: "高塔",
    file: "16tower.webp",
    upright: "突變、啟示、釋放、崩潰、混亂",
    reversed: "避免災難、延遲災難、恐懼變化",
  },
  {
    id: 17,
    name: "星星",
    file: "17star.webp",
    upright: "希望、靈感、寧靜、更新、信任",
    reversed: "絕望、失去信心、沮喪、不信任",
  },
  {
    id: 18,
    name: "月亮",
    file: "18moon.webp",
    upright: "幻覺、恐懼、潛意識、不確定性、混亂",
    reversed: "恐懼的釋放、壓抑的情緒、內在混亂",
  },
  {
    id: 19,
    name: "太陽",
    file: "19sun.webp",
    upright: "喜悅、成功、活力、啟蒙、真相",
    reversed: "暫時的抑鬱、缺乏成功、過度樂觀",
  },
  {
    id: 20,
    name: "審判",
    file: "20judgement.webp",
    upright: "重生、內在呼喚、覺醒、救贖、內在評判",
    reversed: "自我懷疑、拒絕自我檢視、恐懼判斷",
  },
  {
    id: 21,
    name: "世界",
    file: "21world.webp",
    upright: "完成、整合、成就、旅行、和諧",
    reversed: "缺乏完成、延遲、需要更多努力",
  },
]

// 牌陣定義
const spreads = {
  single: {
    name: "單張牌閱讀",
    description: "抽取一張牌來獲得簡單的指引或回答。",
    positions: [{ name: "指引", description: "這張牌代表當前情況的核心訊息或建議。" }],
  },
  "past-present-future": {
    name: "過去-現在-未來",
    description: "三張牌代表時間線上的不同階段，幫助理解情況的發展。",
    positions: [
      { name: "過去", description: "這張牌代表過去的影響或事件。" },
      { name: "現在", description: "這張牌代表當前的情況或挑戰。" },
      { name: "未來", description: "這張牌代表可能的結果或未來的發展。" },
    ],
  },
  "situation-obstacle-advice": {
    name: "情況-障礙-建議",
    description: "三張牌幫助理解當前的挑戰並提供解決方案。",
    positions: [
      { name: "情況", description: "這張牌代表當前的情況或問題。" },
      { name: "障礙", description: "這張牌代表面臨的挑戰或障礙。" },
      { name: "建議", description: "這張牌提供克服障礙的建議或指引。" },
    ],
  },
}

// 初始化頁面元素
document.addEventListener("DOMContentLoaded", () => {
  const spreadSelector = document.getElementById("spread-selector")
  const drawCardsBtn = document.getElementById("draw-cards-btn")
  const readingDescription = document.getElementById("reading-description")
  const cardsContainer = document.getElementById("cards-container")
  const readingInterpretation = document.getElementById("reading-interpretation")

  // 更新牌陣描述
  spreadSelector.addEventListener("change", function () {
    const selectedSpread = spreads[this.value]
    readingDescription.textContent = selectedSpread.description

    // 清空之前的牌陣
    cardsContainer.innerHTML = ""
    readingInterpretation.innerHTML = ""
    readingInterpretation.classList.remove("show")

    // 創建新的牌位
    selectedSpread.positions.forEach((position) => {
  const slotElement = document.createElement("div")
  slotElement.className = "tarot-card-slot"
  slotElement.innerHTML = `
    <div class="card-image-wrapper">
      <img src="./images/card-back.png"  class="card-back-image">
    </div>
    <span class="slot-label">${position.name}</span>
    <span>UP兔YOU</span>
  `
  cardsContainer.appendChild(slotElement)
})

  })

  // 初始化顯示第一個牌陣的描述
  spreadSelector.dispatchEvent(new Event("change"))

  // 抽牌按鈕點擊事件
  drawCardsBtn.addEventListener("click", () => {
    drawReading(spreadSelector.value)
  })
})

// 抽取牌陣
function drawReading(spreadType) {
  const cardsContainer = document.getElementById("cards-container")
  const readingInterpretation = document.getElementById("reading-interpretation")
  const slots = cardsContainer.querySelectorAll(".tarot-card-slot")

  // 清空之前的牌陣
  slots.forEach((slot) => {
    slot.innerHTML = `<span class="slot-label">${slot.querySelector(".slot-label").textContent}</span><span>點擊抽牌</span>`
    slot.className = "tarot-card-slot"
  })

  readingInterpretation.innerHTML = ""
  readingInterpretation.classList.remove("show")

  // 洗牌
  const shuffledDeck = [...majorArcana].sort(() => Math.random() - 0.5)

  // 抽取所需數量的牌
  const selectedCards = shuffledDeck.slice(0, slots.length)

  // 顯示牌陣
  let interpretationHTML = ""

  selectedCards.forEach((card, index) => {
    const slot = slots[index]
    const position = spreads[spreadType].positions[index]

    // 決定牌的正逆位
    const isReversed = Math.random() > 0.5

    // 創建牌的HTML
    const cardHTML = `
            <div class="slot-label">${position.name}</div>
            <div class="tarot-card ${isReversed ? "reversed" : ""}">
                <div class="tarot-card-front">
                    <img src="${imagePath}${card.file}" alt="${card.name}" class="tarot-card-image">
                    <div class="tarot-card-label">${card.id}. ${card.name} ${isReversed ? "(逆位)" : "(正位)"}</div>
                </div>
                <div class="tarot-card-back"></div>
            </div>
        `

    // 更新牌位
    slot.innerHTML = cardHTML
    slot.className = "tarot-card-slot filled"

    // 添加牌的解釋
    const meaningText = isReversed ? card.reversed : card.upright
    interpretationHTML += `
            <div class="card-meaning">
                <h4>
                    <span class="card-position">${position.name}:</span>
                    <span class="card-name">${card.id}. ${card.name}</span>
                    <span class="card-orientation ${isReversed ? "reversed" : "upright"}">${isReversed ? "逆位" : "正位"}</span>
                </h4>
                <p>${position.description}</p>
                <p>${meaningText}</p>
            </div>
        `

    // 添加翻牌動畫延遲
    setTimeout(
      () => {
        const cardElement = slot.querySelector(".tarot-card")
        cardElement.classList.add("flipped")
      },
      500 + index * 300,
    )
  })

  // 顯示牌陣解釋
  setTimeout(
    () => {
      readingInterpretation.innerHTML = interpretationHTML
      readingInterpretation.classList.add("show")
    },
    500 + slots.length * 300,
  )
}

// 點擊卡片翻轉
document.addEventListener("click", (e) => {
  const cardElement = e.target.closest(".tarot-card")
  if (cardElement) {
    cardElement.classList.toggle("flipped")
  }
})

// 添加卡片懸停效果
document.addEventListener("mouseover", (e) => {
  const cardElement = e.target.closest(".tarot-card")
  if (cardElement && cardElement.classList.contains("flipped")) {
    const label = cardElement.querySelector(".tarot-card-label")
    if (label) {
      label.style.opacity = "1"
      label.style.transform = "translateY(0)"
    }
  }
})

document.addEventListener("mouseout", (e) => {
  const cardElement = e.target.closest(".tarot-card")
  if (cardElement) {
    const label = cardElement.querySelector(".tarot-card-label")
    if (label) {
      label.style.opacity = ""
      label.style.transform = ""
    }
  }
})

