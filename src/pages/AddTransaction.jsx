import { motion } from 'framer-motion'
import TransactionForm from '../components/TransactionForm'

const AddTransaction = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="min-h-full flex-1 flex items-center justify-center py-8 px-4"
    >
      <TransactionForm />
    </motion.div>
  )
}

export default AddTransaction
