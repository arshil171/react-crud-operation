import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "../App.css"

const Spage = () => {

  let [product, setProduct] = useState({ urlmain: ".", url1: "", url2: " ", brand: "", title: "", price: "" })


  const { id } = useParams()


  async function getData() {
    try {
      let res = await axios.get(`http://localhost:3000/products/${id}`);
      console.log(res.data);
      setProduct(res.data)

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getData();
  }, []);

  return (

    <div>

      <section  className="section-p1 "  id="prodetails">
        <div className="single-pro-image">
          <img src={"." + product.urlmain || null} alt="" />
          <div className="small-img-group">
            <div className="small-img-col">
              <img src={"." + product.urlmain || null} width="100%" className="small-img" />
            </div>
            <div className="small-img-col">
              <img src={"." + product.url1 || null} width="100%" className="small-img" />
            </div>
            <div className="small-img-col">
              <img src={"." + product.url2 || null} width="100%" className="small-img" />
            </div>
            <div className="small-img-col">
              <img src={"." + product.url3 || null} width="100%" className="small-img" />
            </div>
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>{product.title}</h4>
          <h2>{product.price}</h2>
          <select >
            <option >Select Size</option>
            <option >XL</option>
            <option >XXL</option>
            <option >Small</option>
            <option >Large</option>
          </select>
          <input type="number" value={1} />
             <button className="normal">Add To Cart</button>
              <h4>Product Details</h4>
               <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta culpa impedit omnis! Commodi soluta beatae facilis omnis placeat unde, sed accusamus temporibus alias, impedit laboriosam odit veritatis voluptatem ad corrupti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sunt, magni eos ratione repellendus atque neque corrupti magnam, natus quis illum harum consectetur. Quasi suscipit nam cum quo quia vero!</span>
        </div>
      </section>
    </div>
    // <section>
    //   <div className="single-pro-image">
    //         <img src={data.urlmain} alt="" id="MainImg" width="100%"/>
    //         <div className="small-img-group">
    //             <div className="small-img-col">
    //                 <img src="./download/f1.jpg"  width="100%" className="small-img"/>
    //             </div>
    //             <div className="small-img-col">
    //                 <img src="./download/f2.jpg"  width="100%" className="small-img"/>
    //             </div>
    //             <div className="small-img-col">
    //                 <img src="./download/f3.jpg"  width="100%" className="small-img"/>
    //             </div>
    //             <div className="small-img-col">
    //                 <img src="./download/f4.jpg"  width="100%" className="small-img"/>
    //             </div>
    //         </div>
    //        </div>
    //        <div className="single-pro-details">
    //         <h6>Home / T-Shirt</h6>
    //         <h4>Men's Fashion T Shirt</h4>
    //         <h2>$139.00</h2>
    //         <select >
    //             <option >Select Size</option>
    //             <option >XL</option>
    //             <option >XXL</option>
    //             <option >Small</option>
    //             <option >Large</option>
    //         </select>
    //         <input type="number" />
    //         <button className="normal">Add To Cart</button>
    //         <h4>Product Details</h4>
    //         <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta culpa impedit omnis! Commodi soluta beatae facilis omnis placeat unde, sed accusamus temporibus alias, impedit laboriosam odit veritatis voluptatem ad corrupti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sunt, magni eos ratione repellendus atque neque corrupti magnam, natus quis illum harum consectetur. Quasi suscipit nam cum quo quia vero!</span>
    //        </div>
    // </section>
  )
}

export default Spage