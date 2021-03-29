import {FC} from 'react'

import { useWeb3 } from 'utils/hooks'
import GameContract from '../../contracts/Game.json'

export const Home: FC = () => {
  const web3 = useWeb3()


  console.log(web3.defaultAccount)
  console.log(web3.eth.accounts)
  console.log(web3.eth)

  return <div>
    <div>
      <div>Click <button>here</button> create a new game</div>

    </div>
    
  </div>


}
