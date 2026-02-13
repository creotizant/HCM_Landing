
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, Variants } from "motion/react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    distance?: number;
    threshold?: number;
    once?: boolean;
}

export const ScrollReveal = ({
    children,
    width = "fit-content",
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.5,
    distance = 30,
    threshold = 0.2,
    once = true,
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: once, amount: threshold });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: distance, x: 0 };
            case "down":
                return { y: -distance, x: 0 };
            case "left":
                return { x: distance, y: 0 };
            case "right":
                return { x: -distance, y: 0 };
            default:
                return { y: distance, x: 0 };
        }
    };

    const { x, y } = getDirectionOffset();

    const variants: Variants = {
        hidden: { opacity: 0, x, y },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut",
            },
        },
    };

    return (
        <div ref={ref} className={className} style={{ width }}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={controls}
            >
                {children}
            </motion.div>
        </div>
    );
};
