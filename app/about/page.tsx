import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">關於我們</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            我們致力於分享塔羅牌的知識和智慧，幫助人們更好地理解自己和周圍的世界。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">我們的使命</h2>
            <p className="text-muted-foreground">
              我們的使命是將塔羅牌的古老智慧帶給現代人，幫助人們通過塔羅牌的象徵和意義，更好地理解自己的內心世界和生活道路。
            </p>
            <p className="text-muted-foreground">
              我們相信，塔羅牌不僅是一種占卜工具，更是一面映照靈魂的鏡子，能夠幫助我們看清自己的潛意識和內在智慧。
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600&text=關於我們"
              alt="關於我們"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">我們的團隊</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "王小明",
                role: "塔羅專家",
                bio: "擁有超過10年的塔羅牌閱讀經驗，專注於心理塔羅學的研究。",
              },
              {
                name: "李小華",
                role: "網站編輯",
                bio: "負責網站內容的編輯和更新，確保所有資訊的準確性和可讀性。",
              },
              {
                name: "張小龍",
                role: "塔羅教師",
                bio: "專業塔羅教師，開設多個塔羅課程，幫助學生掌握塔羅牌的基本知識和解讀技巧。",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 rounded-lg border p-6">
                <div className="h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=96&width=96&text=${member.name}`}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">聯絡我們</h2>
          <p className="text-muted-foreground">
            如果您有任何問題或建議，請隨時與我們聯繫。我們非常重視您的反饋，並會盡快回覆。
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">電子郵件</h3>
              <p className="text-muted-foreground">info@tarotworld.example.com</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">社交媒體</h3>
              <p className="text-muted-foreground">關注我們的社交媒體帳號，獲取最新資訊。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

