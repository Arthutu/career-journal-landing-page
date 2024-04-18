import "@fontsource-variable/caveat";

import { motion, useScroll } from "framer-motion";

const Feature = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-titan-500 md:text-2xl lg:text-4xl dark:text-gigas-500">
                {title}
            </h3>
            <p className="md:text-lg lg:text-xl dark:text-white">{subtitle}</p>
        </div>
    );
};

export const Features = () => {
    const { scrollYProgress } = useScroll();

    return (
        <section className="flex self-center md:w-3/4 md:gap-14 lg:w-1/2 lg:gap-24">
            <div className="flex basis-1/2 flex-col items-center gap-4 md:basis-1/4">
                <span className="font-marker text-4xl font-bold md:text-5xl lg:text-7xl dark:text-white">
                    Underling
                </span>
                <motion.svg
                    viewBox="-100 0 200 660"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none">
                    <path
                        className="stroke-titan-50 stroke-[5] md:stroke-[10] dark:stroke-gigas-950"
                        fill="none"
                        transform="translate(0, 0)"
                        d="M -10,0
                        C -10,20 10,40 10,60
                        S -10,100 -10,120
                        S 10,160 10,180
                        S -10,220 -10,240
                        S 10,280 10,300
                        S -10,340 -10,360
                        S 10,400 10,420
                        S -10,460 -10,480
                        S 10,520 10,540
                        S -10,580 -10,600
                        S 10,640 10,660"
                    />
                    <motion.path
                        className="stroke-titan-300 stroke-[5] md:stroke-[10] dark:stroke-gigas-700"
                        style={{ pathLength: scrollYProgress }}
                        fill="none"
                        d="M -10,0
                        C -10,20 10,40 10,60
                        S -10,100 -10,120
                        S 10,160 10,180
                        S -10,220 -10,240
                        S 10,280 10,300
                        S -10,340 -10,360
                        S 10,400 10,420
                        S -10,460 -10,480
                        S 10,520 10,540
                        S -10,580 -10,600
                        S 10,640 10,660"
                    />
                </motion.svg>
                <span className="mt-auto font-marker text-4xl font-bold md:text-5xl lg:text-7xl dark:text-white">
                    Boss
                </span>
            </div>
            <div className="basis-1/2 md:basis-3/4">
                <ul className="flex h-full flex-col justify-between gap-24 text-left">
                    <li>
                        <Feature
                            title="Stay on Track with Smart Notifications"
                            subtitle="Receive personalized reminders to log your achievements weekly or monthly, ensuring you never miss documenting a success."
                        />
                    </li>
                    <li>
                        <Feature
                            title="Expert-Designed Journaling at Your Fingertips"
                            subtitle="Utilize our expert-built forms to easily record your professional achievements and keep your career highlights organized."
                        />
                    </li>
                    <li>
                        <Feature
                            title="Export with Ease Using Elite Templates"
                            subtitle="Generate polished PDFs for promotion documents and year-end reviews, styled after templates used by top companies like FAANGs."
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};
