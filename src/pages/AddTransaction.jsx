import Navbar from '../components/Navbar'
import TransactionForm from '../components/TransactionForm'

const AddTransaction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 px-6">
        <TransactionForm />
      </div>
    </div>
  )
}

export default AddTransaction

