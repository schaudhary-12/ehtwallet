
// import { QueryClient, QueryClientProvider, useQueryClient, useQuery } from '@tanstack/react-query';
// import './App.css'

// const queryClient = new QueryClient();

// async function getter(){
//   const d = await fetch("https://jsonplaceholder.typicode.com/posts/");
//   const response = await d.json();
//   return response;
// }

// function App() {
//   return (
//     <>
//       <QueryClientProvider client={queryClient}>
//         <Todos />
//       </QueryClientProvider>
//     </>
//   );
// // }

// // function Todos() {
// //   const queryClient = useQueryClient();

// //   const query = useQuery({ queryKey: ['todos'], queryFn: getter , refetchInterval: 10 * 1000 })
// //   return (
// //     <div>
// //       <ul>{query.data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
// //     </div>
// //   );
// // }

// // export default App;


// import { createPublicClient, http } from 'viem';
// import './App.css'
// import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
// import { mainnet } from 'viem/chains';

// async function getBalance() {
//   const client = createPublicClient({ 
//     chain: mainnet, 
//     transport: http(), 
//   });

//   const balance = await client.getBalance({address: "0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD"}) 
//   return balance.toString();
// }

// const queryClient = new QueryClient()

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Todos />
//     </QueryClientProvider>
//   )
// }

// function Todos() {
//   // Queries
//   const query = useQuery({ queryKey: ['balance'], queryFn: getBalance ,refetchInterval: 10 * 1000 })

//   return (
//     <div>
//       Balance: 
//       {query.data}
//     </div>
//   )
// }


// export default App


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
      <WalletOptions />
      </QueryClientProvider> 
    </WagmiProvider>
  )
}

import * as React from 'react'
import { useConnect } from 'wagmi' 

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}

export default App;