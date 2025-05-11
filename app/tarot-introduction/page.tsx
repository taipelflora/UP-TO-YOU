import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TarotIntroductionPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">塔羅介紹</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            了解塔羅牌的歷史、結構和基本解讀方法。
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">塔羅牌的起源</h2>
              <p className="text-muted-foreground">
                塔羅牌的確切起源尚不明確，但大多數學者認為它起源於15世紀的歐洲，最初是作為紙牌遊戲使用。到了18世紀末，塔羅牌開始被用於占卜和心理分析。
              </p>
              <p className="text-muted-foreground">
                現代最流行的塔羅牌組是由亞瑟·愛德華·韋特（Arthur Edward Waite）和帕梅拉·科爾曼·史密斯（Pamela Colman
                Smith）於1910年創作的韋特-史密斯塔羅牌（Rider-Waite Tarot）。
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600&text=塔羅牌歷史"
                alt="塔羅牌歷史"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">塔羅牌的結構</h2>
            <p className="text-muted-foreground">傳統的塔羅牌組由78張牌組成，分為兩大部分：</p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6 space-y-4">
                <h3 className="text-xl font-bold">大阿爾卡納（Major Arcana）</h3>
                <p className="text-muted-foreground">
                  由22張牌組成，從0號愚者到21號世界。這些牌代表生命中的重大主題和轉折點，象徵著靈性旅程的各個階段。
                </p>
                <Link href="/tarot-meanings">
                  <Button variant="outline">查看大阿爾卡納牌義</Button>
                </Link>
              </div>
              <div className="rounded-lg border p-6 space-y-4">
                <h3 className="text-xl font-bold">小阿爾卡納（Minor Arcana）</h3>
                <p className="text-muted-foreground">
                  由56張牌組成，分為四個花色：權杖（Wands）、聖杯（Cups）、寶劍（Swords）和錢幣（Pentacles）。每個花色有14張牌，包括Ace到10的數字牌和4張宮廷牌（侍從、騎士、王后和國王）。
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">塔羅牌的基本解讀</h2>
            <p className="text-muted-foreground">
              塔羅牌的解讀是一門藝術，需要結合牌面的象徵意義、牌陣中的位置以及直覺來進行。以下是一些基本的解讀方法：
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">單張牌解讀</h3>
                <p className="text-muted-foreground">抽取一張牌來回答一個簡單的問題或獲取當天的指引。</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">三張牌陣</h3>
                <p className="text-muted-foreground">常用於表示過去、現在和未來，或問題的不同方面。</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">凱爾特十字牌陣</h3>
                <p className="text-muted-foreground">一種經典的十張牌陣，可以提供對問題的深入分析。</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">塔羅牌的象徵系統</h2>
            <p className="text-muted-foreground">
              塔羅牌充滿了豐富的象徵和意象，這些象徵來自於各種文化和傳統，包括占星學、數字學、卡巴拉等。理解這些象徵有助於更深入地解讀塔羅牌的意義。
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "顏色", desc: "不同的顏色代表不同的能量和情緒。" },
                { title: "數字", desc: "每個數字都有其特定的象徵意義。" },
                { title: "元素", desc: "四個花色對應四種元素：火（權杖）、水（聖杯）、空氣（寶劍）和土（錢幣）。" },
                { title: "人物", desc: "牌中的人物姿態和表情也傳達了重要信息。" },
              ].map((item, index) => (
                <div key={index} className="rounded-lg border p-4 space-y-2">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/tarot-meanings">
            <Button>探索塔羅牌義</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

