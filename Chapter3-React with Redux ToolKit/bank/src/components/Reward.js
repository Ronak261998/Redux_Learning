import { useDispatch, useSelector } from 'react-redux';
import { increment , incrementByAmount } from "../reducers/reward"

function Reward() {

  const dispatch =  useDispatch();
  const points =  useSelector(state=>state.reward.points);


  
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total Rewards : ${points}</h3>

        <button onClick={()=> dispatch(increment())}>Increment +</button>
        <button onClick={()=> dispatch(incrementByAmount(7))}>IncrementbySeven +</button>
      </div>
    </div>
  );
}

export default Reward;
