import React, { useState } from "react";

//v- styles
// import { Footer00 } from './styles'
import '../../20_styles/Collapse.css'


const Testo = () => {
  let [count, setCount] = useState(0);
  let [coco, setCoco] = useState(0);
  const [toggle, setToggle] = useState(true)


  //v- bornage valeur
  if (count > 10) { count = 10 }
  if (count < 0) { count = 0 }

  // if (coco === 0) {
  //   coco = 1

  // } else { coco = 0 }

  return (
    <>
      <br></br>
      <div>
        <div>
          <p> Compteur conunt = {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>

      <br></br>
      <div>
        <div>
          <p> Compteur coco = {coco}</p>
          <button onClick={() => setCoco(coco + 1)}>Increment</button>
          <button onClick={() => setCoco(coco - 1)}>Decrement</button>
        </div>
      </div>

      <button className="collapse-color-description"
        onClick={() => setToggle(!toggle)}
        class="btn btn-primary mb-5">
        Toggle State
      </button>

      {toggle && (
        <p class="list-group">
          lkfzfjsqldjfsq🔰 sqdpfkjsd
          dsfjsqpofjispofjposjfopqf
          fddŝpqf^pqsfkŝpqkf
          $ù

        </p>
      )}

    </>
  );
  // }


};

export default Testo;