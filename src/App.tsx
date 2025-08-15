import MenuItem from "./componente/Menuitem"
import OrderContents from "./componente/OrderContents"
import TipPercentageForm from "./componente/TipPercentageForm"
import OrderTotals from "./componente/OrderTotals"
import {menuItems} from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {
  
  const {order, addItem , removeItem ,tip ,setTip,placeOrder} = useOrder()

  return (
    <>
      <header className=" bg-teal-400 py-3.5">
        <h1 className=" text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      
      <main className=" max-w-7xl mx-auto py-20 grid  md:grid-cols-2 ">

        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className=" space-y-3 mt-10">
            {menuItems.map(item =>(
            

            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}             
              
            />


          ))}
          </div>

          
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-b-lg space-y-10">
          <OrderContents
            
            order={order}
            removeItem={removeItem}

          />

          <TipPercentageForm
            setTip={setTip}
            tip={tip}
            

          />
          <OrderTotals
            order={order}
            tip={tip}
            placeOrder={placeOrder}

          
          />

        </div>

      </main>
    </>
  )
}

export default App
