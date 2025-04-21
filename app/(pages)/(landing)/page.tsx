import Header from "./ui/header";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <div className="relative h-screen bg-[#001A2C]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-brain.jpg"
              alt="Interactive brain visualization"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="relative h-full">
            <div className="h-full ml-auto w-1/2 px-6 lg:px-12">
              <div className="h-full max-w-xl flex flex-col">
                {/* Main Heading */}
                <div className="pt-[20vh]">
                  <div className="border-t-2 border-white/30 pt-8">
                    <p className="text-sm uppercase tracking-widest text-white/80 mb-4">
                      Precision brain health diagnostics & monitoring
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
                      Empowering Brain Health with Precision Diagnostics
                    </h1>
                  </div>
                </div>

                {/* Feature Boxes */}
                <div className="mt-auto mb-2">
                  <div className="flex gap-6">
                    <div className="flex-1 border-t-2 border-white/30 pt-4">
                      <p className="text-white/60 text-xs mb-3">02.</p>
                      <p className="text-white text-base font-medium leading-snug">
                        Patient-centered design emphasizing privacy, dignity,
                        and comfort
                      </p>
                    </div>

                    <div className="flex-1 border-t-2 border-white/30 pt-4">
                      <p className="text-white/60 text-xs mb-3">03.</p>
                      <p className="text-white text-base font-medium leading-snug">
                        Cutting-edge medical-grade technology for cognitive,
                        motor, and functional assessment
                      </p>
                    </div>

                    <div className="flex-1 border-t-2 border-white/30 pt-4">
                      <p className="text-white/60 text-xs mb-3">04.</p>
                      <p className="text-white text-base font-medium leading-snug">
                        Integration of AI and machine learning for precise data
                        analysis and actionable insights
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Box */}
          <div className="absolute bottom-0 left-24">
            <div className="max-w-[400px] bg-[#6276B7] bg-opacity-90 backdrop-blur-sm px-8 pr-16 pt-8 pb-16">
              <p className="text-white text-xs font-medium tracking-widest mb-2">
                ABOUT
              </p>
              <p className="text-white/90 text-xs leading-relaxed">
                Founded in 20XX in Ireland. Head Diagnostics is a pioneer in
                Ocular Micro Tremor (OMT).
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
