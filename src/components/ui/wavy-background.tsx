"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { createNoise3D } from "simplex-noise"
import { useTheme } from "next-themes"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  const { theme } = useTheme()
  const noise = createNoise3D()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationIdRef = useRef<number | null>(null)
  const [isSafari, setIsSafari] = useState(false)

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001
      case "fast":
        return 0.002
      default:
        return 0.001
    }
  }

  const waveColors = colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]

  const drawWave = (ctx: CanvasRenderingContext2D, n: number, nt: number) => {
    for (let i = 0; i < n; i++) {
      ctx.beginPath()
      ctx.lineWidth = waveWidth || 50
      ctx.strokeStyle = waveColors[i % waveColors.length]
      for (let x = 0; x < ctx.canvas.width; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100
        ctx.lineTo(x, y + ctx.canvas.height * 0.5)
      }
      ctx.stroke()
      ctx.closePath()
    }
  }

  const render = (ctx: CanvasRenderingContext2D, nt: number) => {
    ctx.fillStyle = theme === "dark" ? "black" : "white"
    ctx.globalAlpha = waveOpacity || 0.5
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    drawWave(ctx, 5, nt)

    animationIdRef.current = requestAnimationFrame(() => render(ctx, nt + getSpeed()))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.filter = `blur(${blur}px)`

    const nt = 0
    render(ctx, nt)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.filter = `blur(${blur}px)`
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [blur, render]) // Added render to dependencies

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = theme === "dark" ? "black" : "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [theme])

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome"),
    )
  }, [])

  return (
    <div className={cn("", containerClassName)}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </div>
  )
}

