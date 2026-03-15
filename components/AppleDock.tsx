"use client";

import React, { useRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
    motion,
    MotionValue,
    useMotionValue,
    useSpring,
    useTransform,
    AnimatePresence,
} from "motion/react";
import type { MotionProps } from "motion/react";
import { cn } from "../lib/utils";

export interface AppleDockProps extends VariantProps<typeof appleDockVariants> {
    className?: string;
    iconSize?: number;
    iconMagnification?: number;
    disableMagnification?: boolean;
    iconDistance?: number;
    direction?: "top" | "middle" | "bottom";
    children: React.ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;
const DEFAULT_DISABLEMAGNIFICATION = false;

const appleDockVariants = cva(
    "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex min-h-[58px] w-fit max-w-full items-center justify-center gap-1.5 md:gap-2 rounded-2xl border border-neutral-800/50 p-2 backdrop-blur-md bg-black/20 shadow-2xl flex-wrap md:flex-nowrap",
);

export const AppleDock = React.forwardRef<HTMLDivElement, AppleDockProps>(
    (
        {
            className,
            children,
            iconSize = DEFAULT_SIZE,
            iconMagnification = DEFAULT_MAGNIFICATION,
            disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
            iconDistance = DEFAULT_DISTANCE,
            direction = "middle",
            ...props
        },
        ref,
    ) => {
        const mouseX = useMotionValue(Infinity);

        const renderChildren = () => {
            return React.Children.map(children, (child) => {
                if (
                    React.isValidElement<AppleDockIconProps>(child) &&
                    child.type === AppleDockIcon
                ) {
                    return React.cloneElement(child, {
                        ...child.props,
                        mouseX: mouseX,
                        size: iconSize,
                        magnification: iconMagnification,
                        disableMagnification: disableMagnification,
                        distance: iconDistance,
                    });
                }
                return child;
            });
        };

        return (
            <motion.div
                ref={ref}
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                {...props}
                className={cn(appleDockVariants({ className }), {
                    "items-start": direction === "top",
                    "items-center": direction === "middle",
                    "items-end": direction === "bottom",
                })}
            >
                {renderChildren()}
            </motion.div>
        );
    },
);

AppleDock.displayName = "AppleDock";

export interface AppleDockIconProps extends Omit<
    MotionProps & React.HTMLAttributes<HTMLDivElement>,
    "children"
> {
    size?: number;
    magnification?: number;
    disableMagnification?: boolean;
    distance?: number;
    mouseX?: MotionValue<number>;
    className?: string;
    children?: React.ReactNode;
    label?: string;
}

export const AppleDockIcon = ({
    size = DEFAULT_SIZE,
    magnification = DEFAULT_MAGNIFICATION,
    disableMagnification,
    distance = DEFAULT_DISTANCE,
    mouseX,
    className,
    children,
    label,
    ...props
}: AppleDockIconProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const padding = Math.max(6, size * 0.2);
    const defaultMouseX = useMotionValue(Infinity);

    const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - (bounds.x + bounds.width / 2);
    });

    const targetSize = disableMagnification ? size : magnification;

    const sizeTransform = useTransform(
        distanceCalc,
        [-distance, 0, distance],
        [size, targetSize, size],
    );

    const scaleSize = useSpring(sizeTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <div className="relative flex flex-col items-center">
            <AnimatePresence>
                {isHovered && label && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -40, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute z-50 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap pointer-events-none"
                    >
                        {label}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 border-b border-r border-neutral-800 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                ref={ref}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ width: scaleSize, height: scaleSize, padding }}
                className={cn(
                    "flex aspect-square cursor-pointer items-center justify-center rounded-full transition-shadow duration-300",
                    isHovered && "shadow-[0_0_20px_rgba(255,255,255,0.1)]",
                    className,
                )}
                {...props}
            >
                <div className="flex items-center justify-center w-full h-full">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

AppleDockIcon.displayName = "AppleDockIcon";
