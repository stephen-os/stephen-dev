import { useMemo } from "react";
import { motion } from "framer-motion";

interface TraceBackgroundProps {
    width?: number;
    height?: number;
    traceWidth?: number;
    seed?: number;
    traceColor?: string;
    backgroundColor?: string;
}

// Simple seeded pseudo-random number generator
function seededRandom(seed: number): () => number {
    return () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };
}

const TraceBackground: React.FC<TraceBackgroundProps> = ({
    width = 800,
    height = 600,
    traceWidth = 2,
    seed = 42,
    traceColor = "#f97316", // Tailwind orange-400
    backgroundColor = "#1f2937", // Tailwind gray-800
}) => {
    const traces = useMemo(() => {
        const rand = seededRandom(seed);
        const paths = [];
        const count = Math.floor(rand() * 20) + 10;

        for (let i = 0; i < count; i++) {
            const path: string[] = [];
            let x = rand() * width;
            let y = rand() * height;
            path.push(`M ${x.toFixed(1)} ${y.toFixed(1)}`);
            for (let j = 0; j < 5 + rand() * 10; j++) {
                x += (rand() - 0.5) * 100;
                y += (rand() - 0.5) * 100;
                path.push(`L ${x.toFixed(1)} ${y.toFixed(1)}`);
            }
            paths.push(path.join(" "));
        }
        return paths;
    }, [seed, width, height]);

    return (
        <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid slice"
            style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        >
            <rect width="100%" height="100%" fill={backgroundColor} />
            {traces.map((d, i) => (
                <motion.path
                    key={i}
                    d={d}
                    stroke={traceColor}
                    strokeWidth={traceWidth}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: i * 0.05 }}
                />
            ))}
        </svg>
    );
};

export default TraceBackground;
