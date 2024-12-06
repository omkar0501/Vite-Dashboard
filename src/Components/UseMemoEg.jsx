import React, { useCallback } from "react";
import { useMemo ,useState} from "react";
import Button from "react-bootstrap/esm/Button";

const UseCallbackEg =()=>{
  const [age,setAge] = useState(0);
  const [salary,setSalary] = useState(0);

  const IncAge = useCallback(()=>{
    setAge(age+1);
    console.log("age rerender");
  },[age]);
  const IncSal = useCallback(()=>{
    setSalary(salary+1);
    console.log("salary rerender");
  },[salary]);
  return(
    <div>
      <Button onClick={IncAge}>age</Button>Age:{age}
      <Button onClick={IncSal}>salary</Button>Salary:{salary}
    </div>
  )
}

const UseMemoEg=()=>{
    const [count, setCount] = useState(0);
  const squaredValue = useMemo(() => {
    return count * count;
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared Value: {squaredValue}</p>
      <Button className="mb-5" onClick={() => setCount(count + 1)}>Increment</Button>
      <UseCallbackEg/>
    </div>
  );
}
export default UseMemoEg;