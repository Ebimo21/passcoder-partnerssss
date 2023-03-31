import React from 'react'
import { BiNavigation } from 'react-icons/bi'
import TailSpin from 'react-loading-icons/dist/esm/components/tail-spin'

function SideCheckoutLoyaltyPoints({setCheckoutPId, checkoutLoading, submit, setCheckoutPoints}) {
  return (
    <div className='relatives mt-4 text-xs '>
                <h2>Issue Checkout Points - fill details below</h2>

                <form onSubmit={submit} className='mt-2'>
                    <div>
                        <label>Passcoder ID</label>
                        <input
                            onChange={(e)=>setCheckoutPId(e.target.value)} 
                            className='p-1  border border-solid border-slate-300 w-full mt-2 rounded-md' 
                            type="text"
                            maxLength={6}
                            minLength={8}
                            disabled={checkoutLoading}
                            required />
                    </div>
                    
                    <div className='mt-2'>
                        <label>Loyalty Points to subtract</label>
                        <input
                            onChange={(e)=> setCheckoutPoints(e.target.value)} 
                            className='p-1 border border-solid border-slate-300 w-full mt-2 rounded-md' 
                            type="number"
                            
                            min={1}
                            disabled={checkoutLoading}
                            required />
                    </div>

                    <button className='mt-3 rounded-md bg-purple text-white p-2 flex items-center gap-2'>Continue {!checkoutLoading&&<BiNavigation />} {checkoutLoading && <TailSpin speed={3} height={24} />}  </button>


                </form>

            </div>
  )
}

export default SideCheckoutLoyaltyPoints