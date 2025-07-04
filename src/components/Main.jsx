import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6"
import { Link } from 'react-router'

const Main = () => {
  const [data, setData] = useState([])



  async function getData() {
    let res = await axios.get("http://localhost:3000/products")
    console.log(res.data)
    setData(res.data)
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} className='w-[23%] min-w-[250px] px-[10px] py-[12px] border-solid border-green-500 border-[1px] cursor-pointer shadow-[20px 20px 30px rgba(0, 0, 0, 0.02)] mx-[15px] relative rounded-[15px] flex flex-col justify-center items-center mt-[30px]'>
            <Link to={`/spage/${item.id}`}>   <img src={item.urlmain} alt="" className='w-[100%] rounded-[20px]' /></Link>
         
            <div>
              <p className='text-gray-600 text-[10px] pt-[10px]'> {item.brand}</p>
              <p className='pt-[7px] text-[14px]'> {item.title}</p>
              <div className='flex pt-[7px] text-yellow-300'>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
              </div>



              <p className='pt-[7px] text-[15px] text-green-500'> {item.price}</p>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Main