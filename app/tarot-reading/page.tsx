"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 大阿爾卡納牌組
const majorArcana = [
  {
    id: 0,
    name: "愚者",
    image: "/images/00fool.jpg",
    desc: "新的開始，冒險，自發性",
    upright: "新的開始，冒險，自由，純真，自發性",
    reversed: "魯莽，不負責任，冒險，不成熟",
  },
  {
    id: 1,
    name: "魔術師",
    image: "/images/01magician.jpg",
    desc: "創造力，技能，專注",
    upright: "創造力，技能，專注，行動，實現",
    reversed: "操縱，欺騙，未實現的才能，延遲",
  },
  {
    id: 2,
    name: "女祭司",
    image: "/images/02highpriestess.jpg",
    desc: "直覺，潛意識，神秘",
    upright: "直覺，潛意識，神秘，內在知識",
    reversed: "秘密，隱藏的議程，需要傾聽內在的聲音",
  },
  {
    id: 3,
    name: "皇后",
    image: "/images/03empress.jpg",
    desc: "豐饒，母性，創造",
    upright: "豐饒，母性，創造，自然，滋養",
    reversed: "依賴，過度保護，創意阻塞，家庭問題",
  },
  {
    id: 4,
    name: "皇帝",
    image: "/images/04emperor.jpg",
    desc: "權威，結構，控制",
    upright: "權威，結構，控制，父親形象，穩定",
    reversed: "專制，過度控制，剛性，缺乏紀律",
  },
  {
    id: 5,
    name: "教皇",
    image: "/images/05hierophant.jpg",
    desc: "傳統，信仰，道德",
    upright: "傳統，信仰，道德，精神指導，教育",
    reversed: "反叛，不傳統，個人信仰，自由思想",
  },
  {
    id: 6,
    name: "戀人",
    image: "/images/06lovers.jpg",
    desc: "選擇，愛情，和諧",
    upright: "選擇，愛情，和諧，關係，價值觀的調整",
    reversed: "不平衡，分離，錯誤的選擇，不和諧",
  },
  {
    id: 7,
    name: "戰車",
    image: "/images/07chariot.jpg",
    desc: "決心，意志，勝利",
    upright: "決心，意志，勝利，自信，控制",
    reversed: "缺乏方向，侵略，失敗，失控",
  },
  {
    id: 8,
    name: "力量",
    image: "/images/08strength.jpg",
    desc: "勇氣，耐心，控制",
    upright: "勇氣，耐心，控制，慈悲，影響力",
    reversed: "弱點，缺乏自信，自我懷疑，低能量",
  },
  {
    id: 9,
    name: "隱士",
    image: "/images/09hermit.jpg",
    desc: "反思，內省，指導",
    upright: "反思，內省，指導，孤獨，尋找內在真相",
    reversed: "孤立，孤獨，過度退縮，拒絕幫助",
  },
  {
    id: 10,
    name: "命運之輪",
    image: "/images/10wheeloffortune.jpg",
    desc: "變化，命運，轉折",
    upright: "變化，命運，轉折，進步，機會",
    reversed: "壞運氣，阻力，打破循環，延遲",
  },
  {
    id: 11,
    name: "正義",
    image: "/images/11justice.jpg",
    desc: "平衡，真理，法律",
    upright: "平衡，真理，法律，因果，清晰",
    reversed: "不公正，缺乏責任，不誠實，不平衡",
  },
  {
    id: 12,
    name: "吊人",
    image: "/images/12hangedman.jpg",
    desc: "犧牲，等待，新視角",
    upright: "犧牲，等待，新視角，暫停，放棄",
    reversed: "拖延，抵抗，停滯，不必要的犧牲",
  },
  {
    id: 13,
    name: "死神",
    image: "/images/13death.jpg",
    desc: "結束，變化，轉變",
    upright: "結束，變化，轉變，過渡，放下",
    reversed: "抵抗變化，無法前進，停滯，重生",
  },
  {
    id: 14,
    name: "節制",
    image: "/images/14temperance.jpg",
    desc: "平衡，適度，耐心",
    upright: "平衡，適度，耐心，目的，意義",
    reversed: "不平衡，過度，缺乏長期願景，衝突",
  },
  {
    id: 15,
    name: "惡魔",
    image: "/images/15devil.jpg",
    desc: "束縛，物質主義，陰影",
    upright: "束縛，物質主義，陰影面，成癮，依附",
    reversed: "釋放，擺脫束縛，恢復控制，面對恐懼",
  },
  {
    id: 16,
    name: "高塔",
    image: "/images/16tower.jpg",
    desc: "突變，啟示，釋放",
    upright: "突變，啟示，釋放，崩潰，混亂",
    reversed: "避免災難，延遲災難，恐懼變化",
  },
  {
    id: 17,
    name: "星星",
    image: "/images/17star.jpg",
    desc: "希望，靈感，寧靜",
    upright: "希望，靈感，寧靜，更新，信任",
    reversed: "絕望，失去信心，沮喪，不信任",
  },
  {
    id: 18,
    name: "月亮",
    image: "/images/18moon.jpg",
    desc: "幻覺，恐懼，潛意識",
    upright: "幻覺，恐懼，潛意識，不確定性，混亂",
    reversed: "恐懼的釋放，壓抑的情緒，內在混亂",
  },
  {
    id: 19,
    name: "太陽",
    image: "/images/19sun.jpg",
    desc: "喜悅，成功，活力",
    upright: "喜悅，成功，活力，啟蒙，真相",
    reversed: "暫時的抑鬱，缺乏成功，過度樂觀",
  },
  {
    id: 20,
    name: "審判",
    image: "/images/20judgment.jpg",
    desc: "重生，內在呼喚，覺醒",
    upright: "重生，內在呼喚，覺醒，救贖，內在評判",
    reversed: "自我懷疑，拒絕自我檢視，恐懼判斷",
  },
  {
    id: 21,
    name: "世界",
    image: "/images/21world.jpg",
    desc: "完成，整合，成就",
    upright: "完成，整合，成就，旅行，和諧",
    reversed: "缺乏完成，延遲，需要更多努力",
  },
]

export default function TarotReadingPage() {
  const [selectedCard, setSelectedCard] = useState<null | {
    card: (typeof majorArcana)[0]
    isReversed: boolean
  }>(null)

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * majorArcana.length)
    const isReversed = Math.random() > 0.5
    setSelectedCard({
      card: majorArcana[randomIndex],
      isReversed,
    })
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">塔羅牌抽牌</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">專注於你的問題，抽一張牌獲得指引。</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <Button onClick={drawCard} size="lg" className="bg-purple-700 hover:bg-purple-800">
            抽一張牌
          </Button>

          {selectedCard && (
            <div className="w-full max-w-md">
              <Card className="overflow-hidden">
                <CardHeader className="text-center">
                  <CardTitle>
                    {selectedCard.card.id}. {selectedCard.card.name} {selectedCard.isReversed ? "(逆位)" : "(正位)"}
                  </CardTitle>
                  <CardDescription>點擊卡片查看詳細解釋</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <Link href={`/tarot-meanings/${selectedCard.card.id}`}>
                    <div
                      className={`relative transition-all duration-500 hover:scale-105 ${
                        selectedCard.isReversed ? "rotate-180" : ""
                      }`}
                    >
                      <Image
                        src={
                          selectedCard.card.image ||
                          `/placeholder.svg?height=400&width=300&text=${selectedCard.card.name}`
                        }
                        alt={selectedCard.card.name}
                        width={240}
                        height={360}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </Link>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 p-6">
                  <Tabs defaultValue="meaning" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="meaning">牌義</TabsTrigger>
                      <TabsTrigger value="advice">建議</TabsTrigger>
                    </TabsList>
                    <TabsContent value="meaning" className="space-y-4 pt-4">
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.isReversed ? selectedCard.card.reversed : selectedCard.card.upright}
                      </p>
                    </TabsContent>
                    <TabsContent value="advice" className="space-y-4 pt-4">
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.isReversed
                          ? `當${selectedCard.card.name}逆位出現時，建議你反思自己是否在${selectedCard.card.reversed.split("，")[0]}。嘗試找到平衡，並面對內在的挑戰。`
                          : `當${selectedCard.card.name}正位出現時，這是一個好時機去擁抱${selectedCard.card.upright.split("，")[0]}的能量。相信自己的直覺和能力。`}
                      </p>
                    </TabsContent>
                  </Tabs>
                  <Link href={`/tarot-meanings/${selectedCard.card.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      查看完整牌義
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

