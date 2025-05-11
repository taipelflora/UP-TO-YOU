import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-purple-900/20 to-indigo-900/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    探索塔羅的神秘世界
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    透過塔羅牌的智慧，探索自我，了解過去，預見未來。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/tarot-meanings">
                    <Button className="bg-purple-700 hover:bg-purple-800">探索塔羅牌義</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline">了解更多</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="塔羅牌展示"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">塔羅牌精選</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  探索大阿爾卡納牌組中最具代表性的幾張牌
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {["愚者", "魔術師", "女祭司"].map((card, index) => (
                <Link
                  key={index}
                  href={`/tarot-meanings/${index}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=${card}`}
                    width={300}
                    height={400}
                    alt={card}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                    <h3 className="text-xl font-bold">{card}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/tarot-meanings">
                <Button variant="outline">查看全部塔羅牌義</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">了解塔羅的起源與歷史</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  塔羅牌的歷史可以追溯到15世紀的歐洲，最初是作為紙牌遊戲使用，後來逐漸發展成為占卜和自我探索的工具。
                </p>
                <Link href="/tarot-introduction">
                  <Button variant="outline">閱讀更多</Button>
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h3 className="text-2xl font-bold">塔羅牌的結構</h3>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  傳統的塔羅牌組由78張牌組成，分為大阿爾卡納（22張）和小阿爾卡納（56張）。每張牌都有其獨特的象徵意義和解讀方式。
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>大阿爾卡納：22張主要牌</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>小阿爾卡納：56張分為四個花色</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

