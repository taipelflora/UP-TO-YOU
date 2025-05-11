"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col space-y-4 p-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold">塔羅世界</span>
      </Link>
      <div className="space-y-2">
        <Link href="/about">
          <Button variant="ghost" className="w-full justify-start">
            關於我們
          </Button>
        </Link>
        <Link href="/tarot-introduction">
          <Button variant="ghost" className="w-full justify-start">
            塔羅介紹
          </Button>
        </Link>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between">
              <span>塔羅牌義</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 pt-2">
            <div className="flex flex-col space-y-2">
              {Array.from({ length: 22 }, (_, i) => (
                <Link key={i} href={`/tarot-meanings/${i}`}>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    大阿爾卡納 {i}
                  </Button>
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Link href="/tarot-reading">
          <Button variant="ghost" className="w-full justify-start">
            抽一張牌
          </Button>
        </Link>
      </div>
    </div>
  )
}

