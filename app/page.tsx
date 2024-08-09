"use client"

import dynamic from "next/dynamic";

const GlobeComponent = dynamic(() => import('./GlobeComponent'), {ssr: false});


export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-full h-full">
            <GlobeComponent></GlobeComponent>
        </main>
    );
}
