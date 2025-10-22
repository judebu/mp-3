import { useState } from 'react'

export const useCalculator = () => {
  const [num1,setNum1]=useState('')
  const [num2,setNum2]=useState('')
  const [result,setResult]=useState('Your Result:')
  const [isNegative,setIsNegative]=useState(false)

  const calculate=(op:string)=>{
    const n1=Number(num1)
    const n2=Number(num2)
    let r=0
    if(op==='add'){
      r=n1+n2
    }else if(op==='subtract'){
      r=n1-n2
    }else if(op==='multiply'){
      r=n1*n2
    }else if(op==='divide'){
      if(n2===0){
        setResult("Output: Didn't they teach u this in 5th grade??")
        setIsNegative(true)
        return
      }
      r=n1/n2
    }else if(op==='power'){
      r=1
      for(let j=0;j<n2;j++){
        r=r*n1
      }
    }
    setIsNegative(r<0)
    setResult("Output: "+r)
  }

  const clear=()=>{
    setNum1('')
    setNum2('')
    setResult('Your Result:')
    setIsNegative(false)
  }

  return {num1,num2,result,isNegative,setNum1,setNum2,calculate,clear}
}
