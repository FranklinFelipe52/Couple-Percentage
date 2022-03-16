
import { motion } from "framer-motion";
type Results = {
  percentage: string,
  result: string,
  fname: string,
  sname: string
};
interface ResultAnimationProps{
  result: Results | undefined,
  loading: boolean
}
export function ResultAnimation({result, loading}: ResultAnimationProps) {
  return (
    <div>
      {result && (loading===false) &&  (
        <div className="example-container">
      
      <motion.div
      className={`border border-1 ${Number(result.percentage) < 50 ? 'border-danger' : 'border-sucess'}`}
        animate={{
          scale: [0, 1.3, 1.2, 1.3, 1],
          
        }}
        transition={{
          duration: 1,
          times: [0, 0.4, 0.6, 0.8, 1]
        }}
      >
        <h2>{`${result.percentage}%`}</h2>
        <h3 className={Number(result.percentage) < 50 ? `text-danger` : 'text-sucess'}>{result.result}</h3>
      </motion.div>
    </div>
      )}
    </div>
    
  )
}
