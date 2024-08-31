import { Html } from "@react-three/drei";

/**
 * Loader Component
 * 
 * This functional component renders a loading spinner, typically used as a fallback 
 * or during data fetching in a 3D scene. The spinner is styled with Tailwind CSS 
 * and wrapped inside the `Html` component from `@react-three/drei` to allow it 
 * to render as HTML within a Three.js scene.
 * 
 * @returns {JSX.Element} The rendered Loader component.
 */
const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
      </div>
    </Html>
  );
};

export default Loader;
