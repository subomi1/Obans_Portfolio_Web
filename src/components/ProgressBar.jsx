// import { useState, useEffect } from "react";
// export default function ProgressBar({name, toBeFilled }) {
//     const [filled, setFilled] = useState(0);
//     const [loading, isLoading] = useState(true);

//     useEffect(() => {
//         if (filled < toBeFilled && loading) {
//             setTimeout(() => setFilled(prev => prev+=5), 50)
//         }
//     }, [filled, loading])
//     return(
//         <div className="progressBar mt-5">
//             <h1>{name}</h1>
//             <div className="proBackground w-full bg-[#B0B0B0]" style={{
//                     borderBottomLeftRadius: "20px",
//                     borderBottomRightRadius: "20px",
//                     borderTopLeftRadius: "20px",
//                     borderTopRightRadius: "20px"
//             }}>
//                 <div style={{
//                     height: "fit-content",
//                     width: `${filled}%`,
//                     backgroundColor: "#f78137",
//                     transition: "width 0.5s",
//                     borderBottomLeftRadius: "20px",
//                     borderBottomRightRadius: "20px",
//                     borderTopLeftRadius: "20px",
//                     borderTopRightRadius: "20px"
//                     }} className="mt-2">
//                     <span className="ProgressBarPercentage flex ml-5">
//                         {filled} <span>%</span>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// }


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ProgressBar({ name, toBeFilled }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${toBeFilled}%`,
        transition: { duration: 1, ease: "easeInOut" }
      });
    } else {
      // Reset the animation when leaving the viewport
      controls.start({
        width: "0%",
        transition: { duration: 0 }
      });
    }
  }, [controls, inView, toBeFilled]);

//   const [filled, setFilled] = useState(0);
//   const [loading, setLoading] = useState(false);

  // Your existing useEffect hooks here...

  return (
    <div className="progressBar mt-5" ref={ref}>
      <h1>{name}</h1>
      <div 
        className="probBackground w-full bg-[#BBBBBB]" 
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px"
        }}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={controls}
          style={{
            height: "fit-content",
            backgroundColor: "#f7813f",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          className="mt-2"
        >
          <span className="ProgressBarPercentage flex ml-5 text-[#FFFFFF]">
            {toBeFilled}% {/* Fixed typo from original code */}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
