import {FC} from 'react'

import { useWeb3 } from 'utils/hooks'

export const Home: FC = () => {
  const web3 = useWeb3()

  console.log(web3.defaultAccount)
  console.log(web3.eth.accounts)

  return <div>
    <div>
      <div>Click <button onClick={createGame}>here</button> create a new game</div>

    </div>
    
  </div>


}
