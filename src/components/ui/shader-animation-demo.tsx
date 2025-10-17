import { ShaderAnimation } from "@/components/ui/shader-animation";

/**
 * Demo Component for ShaderAnimation
 * 
 * This shows how to use the ShaderAnimation component in your application.
 * The shader creates a beautiful animated background effect.
 */
export default function ShaderAnimationDemo() {
  return (
    <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-blue-700">
      {/* The shader animation fills the container */}
      <ShaderAnimation />
      
      {/* Content layered on top of the animation */}
      <span className="absolute pointer-events-none z-10 text-center text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
        Shader Animation
      </span>
    </div>
  );
}

