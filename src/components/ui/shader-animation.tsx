"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

/**
 * ShaderAnimation Component
 * 
 * A Three.js powered WebGL shader animation that creates colorful
 * concentric rings with a pulsing effect. Perfect for hero sections
 * or background animations in modern web applications.
 * 
 * @returns A full-screen canvas element with animated shader graphics
 */
export function ShaderAnimation() {
  // Reference to the container div that will hold our Three.js canvas
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Reference to store Three.js scene objects for cleanup
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    // Exit early if container hasn't mounted yet
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader: Positions vertices in 3D space
    // This simple shader just passes through the position unchanged
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader: Determines the color of each pixel
    // Creates animated concentric rings with RGB color variations
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        
        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `

    // Set up camera (orthographic camera for 2D shader effects)
    const camera = new THREE.Camera()
    camera.position.z = 1

    // Create the scene
    const scene = new THREE.Scene()
    
    // Create a plane geometry that fills the screen
    const geometry = new THREE.PlaneGeometry(2, 2)

    // Uniforms are variables we can pass to the shader
    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    // Create material with our custom shaders
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    // Create a mesh and add it to the scene
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Create WebGL renderer with anti-aliasing for smooth edges
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    // Add the renderer's canvas to our container
    container.appendChild(renderer.domElement)

    // Handle window resizing to keep animation responsive
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial size setup
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop - runs on every frame
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      
      // Increment time to animate the shader
      uniforms.time.value += 0.05
      
      // Render the scene
      renderer.render(scene, camera)

      // Store animation ID for cleanup
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start the animation loop
    animate()

    // Cleanup function - runs when component unmounts
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        // Cancel animation frame to stop the loop
        cancelAnimationFrame(sceneRef.current.animationId)

        // Remove canvas from DOM
        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        // Dispose of Three.js objects to free up memory
        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, []) // Empty dependency array means this runs once on mount

  return (
    <div
      ref={containerRef}
      className="w-full h-screen"
      style={{
        background: "#000",
        overflow: "hidden",
      }}
    />
  )
}

