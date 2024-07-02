import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export function DotsAnimation(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Dot {
            x: number;
            y: number;
            vx: number;
            vy: number;
            baseOpacity: number;
            opacity: number;
            targetOpacity: number;

            constructor(x: number, y: number, baseOpacity: number) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() * 2 - 1) * 0.8; // Reduzir a velocidade em 20%
                this.vy = (Math.random() * 2 - 1) * 0.8; // Reduzir a velocidade em 20%
                this.baseOpacity = baseOpacity;
                this.opacity = Math.random() > 0.5 ? baseOpacity : 0;
                this.targetOpacity = this.opacity;
            }

            update() {
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                this.x += this.vx;
                this.y += this.vy;

                // Gradually change opacity
                if (this.opacity < this.targetOpacity) {
                    this.opacity += 0.01;
                    if (this.opacity > this.targetOpacity) this.opacity = this.targetOpacity;
                } else if (this.opacity > this.targetOpacity) {
                    this.opacity -= 0.01;
                    if (this.opacity < this.targetOpacity) this.opacity = this.targetOpacity;
                }
            }

            draw() {
                if (this.opacity > 0) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(231, 43, 59,  ${this.opacity})`; // Cor dos pontos com opacidade
                    ctx.fill();
                }
            }
        }

        const dotsLayer1: Dot[] = [];
        const dotsLayer2: Dot[] = [];

        for (let i = 0; i < 130; i++) {
            dotsLayer1.push(new Dot(Math.random() * canvas.width, Math.random() * canvas.height, 1));
        }

        for (let i = 0; i < 130; i++) {
            dotsLayer2.push(new Dot(Math.random() * canvas.width, Math.random() * canvas.height, 0.5));
        }

        function connectDots(dots: Dot[], maxDistance: number) {
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
                        ctx.strokeStyle = `rgba(231, 43, 59, ${(1 - distance / maxDistance) * Math.min(dots[i].opacity, dots[j].opacity)})`; // Cor das linhas com opacidade
                        ctx.stroke();
                    }
                }
            }
        }

        function toggleVisibility(dots: Dot[]) {
            for (const dot of dots) {
                dot.targetOpacity = dot.targetOpacity === 0 ? dot.baseOpacity : 0;
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const dot of dotsLayer1) {
                dot.update();
                dot.draw();
            }
            connectDots(dotsLayer1, 150);

            for (const dot of dotsLayer2) {
                dot.update();
                dot.draw();
            }
            connectDots(dotsLayer2, 150);

            requestAnimationFrame(animate);
        }

        animate();

        const intervalId = setInterval(() => {
            toggleVisibility(dotsLayer1);
            toggleVisibility(dotsLayer2);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return(
        <Box m="0" p="0" overflow={"hidden"} display={"flex"} justifyContent={"center"} alignItems={"center"} height="100%" width={"100%"} bg="linear-gradient(90deg, rgba(171,15,45,1) 0%, rgba(115,0,0,1) 100%)">
            <canvas ref={canvasRef} style={{display: "block"}}></canvas>
        </Box>
    )
}