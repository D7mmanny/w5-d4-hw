import './App.css'
import Props from './components/Props'
import im1 from './assets/im1.png'
import im2 from './assets/im2.png'
function App() {


  return (
    <> 
      <nav className='flex justify-end md:justify-center h-10 items-center bg-orange-300	'>
      <span className="material-symbols-outlined block md:hidden">menu</span>
        <ul className='hidden md:flex justify-evenly w-3/4 text-xs '>
          <li>ALL CATEGORIES</li>
          <li>TODAY DEALS</li>
          <li>ELECTRONICS</li>
          <li>CLOTHING</li>
          <li>COMPUTERS</li>
          <li>FURNITURES</li>
          <li>MOM & BABY</li>
          <li>BOOK & MORE</li>

        </ul>
      </nav>
      <div className='flex justify-center'>
        <div className='flex justify-evenly mt-10 mb-10 w-5/5 md:w-4/5'>
          <img src={im1} alt="" />
          <img className='hidden md:block' src={im2} alt="" />
        </div>
      </div>
      
      <div className='flex flex-col items-center'>
      <div className='flex flex-col mt-5'>
        <hr />
        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center mt-4 gap-10    '>
       
          <Props
            src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-4VmdqW2GVeUP030h3gqU4YpWpfzkJNdrs8Nb4yR1ProcU86Z'
            tit='Computers'
            pro1='Desktop PC'
            pro2='Laptop' 
            pro3='PC Gaming'
            pro4='Storage & Memory'
            pro5='PC Components'
            />
             <Props
            src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdf5KxvrljgEj5EW2jVE3wOTKPukyK0ebkcuV_t5Utfg61Bx49'
            tit='Computers'
            pro1='Desktop PC'
            pro2='Laptop' 
            pro3='PC Gaming'
            pro4='Storage & Memory'
            pro5='PC Components'
            />
             <Props
            src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQq78ucqNPajIW54Yz_alUdSJbrOeW-6dKr1X8byg8HGEMgKSN7'
            tit='Computers'
            pro1='Desktop PC'
            pro2='Laptop' 
            pro3='PC Gaming'
            pro4='Storage & Memory'
            pro5='PC Components'
            />
            <Props
            src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_X34PnELnu_4nUz41DaoZXvV-p_044doFV6Igr-w7AiIuy-OM'
            tit='Computers'
            pro1='Desktop PC'
            pro2='Laptop' 
            pro3='PC Gaming'
            pro4='Storage & Memory'
            pro5='PC Components'
            />
             <Props
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtVWVeUSYZsPcyDxkqGyjvV_sjYtZUGB4QkDVdvEbF8T_4jFq'
            tit='Computers'
            pro1='Desktop PC'
            pro2='Laptop' 
            pro3='PC Gaming'
            pro4='Storage & Memory'
            pro5='PC Components'
            />
             <Props
            src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwoLu-ZstPBoNUAVk2Em-lFoMw6m9vwTArhyJzB2Ta3KR8j6rt'
            tit='Computers'
            pro1='Desktop PC'
            pro2='Laptop' 
            pro3='PC Gaming'
            pro4='Storage & Memory'
            pro5='PC Components'
            />
        </div>
      </div>
      </div>
    </>
  )
}

export default App
