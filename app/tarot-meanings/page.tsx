import Image from "next/image"
import Link from "next/link"

export default function TarotMeaningsPage() {
  // 大阿爾卡納牌組 - 按照傳統順序排列
  const majorArcana = [
    { id: 0, name: "愚者", desc: "新的開始，冒險，自發性", image: "/images/00fool.jpg" },
    { id: 1, name: "魔術師", desc: "創造力，技能，專注", image: "/images/01magician.jpg" },
    { id: 2, name: "女祭司", desc: "直覺，潛意識，神秘", image: "/images/02high-priestess.jpg" },
    { id: 3, name: "皇后", desc: "豐饒，母性，創造", image: "/images/03empress.jpg" },
    { id: 4, name: "皇帝", desc: "權威，結構，控制", image: "/images/04emperor.jpg" },
    { id: 5, name: "教皇", desc: "傳統，信仰，道德", image: "/images/05hierophant.jpg" },
    { id: 6, name: "戀人", desc: "選擇，愛情，和諧", image: "/images/06lovers.jpg" },
    { id: 7, name: "戰車", desc: "決心，意志，勝利", image: "/images/07chariot.jpg" },
    { id: 8, name: "力量", desc: "勇氣，耐心，控制", image: "/images/08strength.jpg" },
    { id: 9, name: "隱士", desc: "反思，內省，指導", image: "/images/09hermit.jpg" },
    { id: 10, name: "命運之輪", desc: "變化，命運，轉折", image: "/images/10wheel.jpg" },
    { id: 11, name: "正義", desc: "平衡，真理，法律", image: "/images/11justice.jpg" },
    { id: 12, name: "吊人", desc: "犧牲，等待，新視角", image: "/images/12hanged.jpg" },
    { id: 13, name: "死神", desc: "結束，變化，轉變", image: "/images/13death.jpg" },
    { id: 14, name: "節制", desc: "平衡，適度，耐心", image: "/images/14temperance.jpg" },
    { id: 15, name: "惡魔", desc: "束縛，物質主義，陰影", image: "/images/15devil.jpg" },
    { id: 16, name: "高塔", desc: "突變，啟示，釋放", image: "/images/16tower.jpg" },
    { id: 17, name: "星星", desc: "希望，靈感，寧靜", image: "/images/17star.jpg" },
    { id: 18, name: "月亮", desc: "幻覺，恐懼，潛意識", image: "/images/18moon.jpg" },
    { id: 19, name: "太陽", desc: "喜悅，成功，活力", image: "/images/19sun.jpg" },
    { id: 20, name: "審判", desc: "重生，內在呼喚，覺醒", image: "/images/20judgement.jpg" },
    { id: 21, name: "世界", desc: "完成，整合，成就", image: "/images/21world.jpg" },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">塔羅牌義</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            探索大阿爾卡納22張牌的象徵意義和解讀方法。
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">大阿爾卡納（Major Arcana）</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 tarot-cards-grid">
            {majorArcana.map((card) => (
              <Link
                key={card.id}
                href={`/tarot-meanings/${card.id}`}
                className="group flex flex-col overflow-hidden rounded-lg border transition-colors hover:bg-muted/50 tarot-card"
              >
                <div className="aspect-[3/4] w-full overflow-hidden card-image">
                  <Image
                    src={card.image || `/placeholder.svg?height=400&width=300&text=${card.name}`}
                    alt={card.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 card-info">
                  <h3 className="font-bold">
                    {card.id}. {card.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

