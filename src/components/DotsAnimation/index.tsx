import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface DotsAnimationProps {
    dots?: number;
}

interface Dot {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseOpacity: number;
    opacity: number;
    targetOpacity: number;
    update: () => void;
    draw: (ctx: CanvasRenderingContext2D) => void;
  }

export function DotsAnimation({dots = 150}: DotsAnimationProps){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = parentRef.current;
        if (!canvas || !parent) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const createDot = (baseOpacity: number): Dot => {
        const dot: Dot = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() * 2 - 1) * 0.7,
            vy: (Math.random() * 2 - 1) * 0.7,
            baseOpacity,
            opacity: Math.random() > 0.5 ? baseOpacity : 0,
            targetOpacity: Math.random() > 0.5 ? baseOpacity : 0,
            update: function() {
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            this.x += this.vx;
            this.y += this.vy;

            if (this.opacity < this.targetOpacity) {
                this.opacity += 0.01;
                if (this.opacity > this.targetOpacity) this.opacity = this.targetOpacity;
            } else if (this.opacity > this.targetOpacity) {
                this.opacity -= 0.01;
                if (this.opacity < this.targetOpacity) this.opacity = this.targetOpacity;
            }
            },
            draw: function(ctx) {
            if (this.opacity > 0) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(231, 43, 59, ${this.opacity})`;
                ctx.fill();
            }
            }
        };
        return dot;
        };

        // Alterar a quantidade de pontos aquis
        const dotsLayer1 = Array.from({ length: dots }, () => createDot(1)); // Camada 1
        const dotsLayer2 = Array.from({ length: dots }, () => createDot(0.5)); // Camada 2

        const connectDots = (dots: Dot[], maxDistance: number) => {
        for (let i = 0; i < dots.length; i++) {
            if (dots[i].opacity === 0) continue;
            for (let j = i + 1; j < dots.length; j++) {
            if (dots[j].opacity === 0) continue;
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.strokeStyle = `rgba(231, 43, 59, ${(1 - distance / maxDistance) * Math.min(dots[i].opacity, dots[j].opacity)})`;
                ctx.stroke();
            }
            }
        }
        };

        const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dotsLayer1.forEach(dot => {
            dot.update();
            dot.draw(ctx);
        });
        connectDots(dotsLayer1, 130);

        dotsLayer2.forEach(dot => {
            dot.update();
            dot.draw(ctx);
        });
        connectDots(dotsLayer2, 130);

        requestAnimationFrame(animate);
        };

        animate();

        const toggleVisibility = (dots: Dot[]) => {
        for (const dot of dots) {
            dot.targetOpacity = dot.targetOpacity === 0 ? dot.baseOpacity : 0;
        }
        };

        // Alterna a visibilidade dos pontos a cada 5 segundos
        setInterval(() => {
        toggleVisibility(dotsLayer1);
        toggleVisibility(dotsLayer2);
        }, 5000);

        return () => {
        window.removeEventListener('resize', resizeCanvas);
        };
    }, []);


    return(
        <Box ref={parentRef} m="0" p="0" overflow={"hidden"} display={"flex"} justifyContent={"center"} alignItems={"center"} height="100%" width={"100%"} bg="linear-gradient(90deg, rgba(171,15,45,1) 0%, rgba(115,0,0,1) 100%)">
            <canvas ref={canvasRef} style={{display: "block"}}></canvas>
        </Box>
    )
}