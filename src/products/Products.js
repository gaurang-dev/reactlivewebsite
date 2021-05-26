import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";

const Product = () => {
  const [size, setSize] = useState("");
  const { category } = useParams();

  const {
    data: prodData,
    loading,
    error,
  } = useFetch("prodData?category=" + category);

  // useEffect(() => {
  //    getData()
  //    .catch((e)=>setError(e))
  //    .finally(()=>setLoading(false));

  // }, []);
  // const getData =async()=>{
  //     const response=await fetch("http://localhost:5000/prodData");
  //     setProdData(await response.json());
  // }

  const upDatesetSize = (e) => {
    setSize(e.target.value);
    console.log(setSize);
  };

  const renderProduct = (p) => {
    return (
      <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/Images/${p.image}`} alt={p.name} />
          <p>{p.name}</p>
          <p>${p.price}</p>
        </Link>
      </div>
    );
  };
  const filteredprodData = size
    ? prodData.filter((p) => p.skus.find((s) => s.size === String(size)))
    : prodData;

  if (error) throw error;
  if (loading) return <Spinner />;

  return (
    <div>
      <main>
        <section id="filter" className="filter">
          <label>Filter The setsize</label>
          <select id="size" value={size} onChange={upDatesetSize}>
            <option value="">Select the size</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </select>
          {size && <h2> found {filteredprodData.length}items</h2>}
        </section>
        <section id="products">
          {filteredprodData.map(renderProduct)}
          {console.log(filteredprodData)}
        </section>
      </main>
    </div>
  );
};

export default Product;
