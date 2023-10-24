'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function  Home () {
  useEffect(() => {
    const loadProvider =async () => {
      // with metamask we have access to window.ethereum & to window.web3
      // metamask injects a global API into websites
      // allows users to request users, acccounts, data, etc
    }
  } ,[]);

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full justify-center font-mono text-sm flex">
        <div>
          <div className='p-8'>
            <h3 className='m-2 text-center'>Current Balance <strong>10 ETH</strong></h3>
            <div>
              <button className='px-4 py-2 border-2 border-white rounded-sm m-2'>Deposit</button>
              <button className='px-4 py-2 border-2 border-white rounded-sm m-2'>Withdraw</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
