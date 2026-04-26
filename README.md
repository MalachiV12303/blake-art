Live Demo: https://blake-art.vercel.app/  
Started: September 2025

## Overview
A Vue 3 single-page application for browsing a large digital art collection. Built to focus on performance, smooth navigation, and responsive interaction across input types.

## Key Features
- Masonry-style gallery layout for displaying a large set of images  
- Sequential image loading to improve perceived performance  
- Fullscreen viewer with keyboard, scroll, and touch navigation  
- Animated transitions and index tracking for browsing context  

## Tech Stack
- Vue 3
- TypeScript
- Vite
- CSS

## Architecture & Implementation
- Structured the gallery using a masonry layout with dynamically rendered items  
- Managed selected image state to drive a fullscreen viewer with transitions  
- Implemented navigation controls supporting keyboard, wheel, and touch input  
- Used reactive state and watchers to control UI behavior (e.g., scroll locking)  

## Notable Technical Challenges
- **Image Loading Strategy**  
  Implemented sequential image loading by progressively increasing the number of rendered images, reducing initial load cost and improving perceived performance.

- **Multi-Input Navigation**  
  Unified keyboard, scroll, and touch interactions into a consistent navigation system for the fullscreen viewer.

- **Smooth Transitions Without Layout Shift**  
  Coordinated image transitions and index updates to avoid flickering or abrupt UI changes during navigation.

## Performance & Optimization
- Deferred image rendering to limit initial load time  
- Used CSS transitions and async decoding for smoother image loading  
- Prevented background scrolling when the fullscreen viewer is active  

## What I Learned
- Managing performance when rendering large collections of media  
- Handling multiple input types in a single interaction system  
- Coordinating state-driven UI transitions in Vue  
