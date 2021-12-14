import { useEffect } from "react";
import { useToast } from '../../../context/toastContext'

import { ExclamationCircleOutlined, CloseCircleOutlined, 
  CheckCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";

import { useSpring, animated } from 'react-spring'

import '../styles.css'

const icons = {
  success: <ExclamationCircleOutlined />,
  warning: <CheckCircleOutlined />,
  error: <QuestionCircleOutlined />
}

const bg = {
  success: "#DAFFCD",
  warning: "#FFEA9F",
  error: "#FF978B"
}

export default function Toast({ data, styles }){
  const { removeToast } = useToast()

  useEffect(()=>{
    const removeTimer = setTimeout(()=>{
      removeToast(data.id)
    },3000)

    return ()=>{
      clearTimeout(removeTimer)
    }
    
  },[data.id, removeToast])

  return(
    <animated.div className="toast" style={{backgroundColor: bg[data.type], ...styles}}>
      { icons[data.type] }
      <div>
        <strong>{data.title}</strong>
        {data.message && <p>{data.message}</p>}
      </div>
      <CloseCircleOutlined onClick={()=>{removeToast(data.id)}}/>
    </animated.div>
  )
}