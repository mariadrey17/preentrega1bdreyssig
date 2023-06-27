import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getFilmsById } from "../../../../datos/peliculas";
import { useState } from "react";
import films from "../../../../datos/peliculas";

import ItemCount from "../ItemCount";

const ItemDetailContainer =()=>{

  const [film ,setFilm]=useState({})
  const{id}=useParams();

  useEffect(()=>{
    getFilmsById(id)
    .then((response)=>{
      setFilm(response)
    })
.catch(error=>{
    console.log (error)
})

  },[id])


/*return (
<div className="ItemDetailContainer">
<ItemDetail {...StockDeFilms}/>
</div>
);
}
export default ItemDetailContainer;*/

/*export const ItemDetailContainer =()=>{

    const [stockfilms,setStockfilms]=useState(null)

    useEffect(()=>{
    getProductFilmId =('1')
    .then ((response)=>{setStockfilms})
    })
    return (
        <ItemDetail/>
    );
}
export default ItemDetailContainer;*/

/*const ItemDetailContainer = () => {

    const[data,setData]=useState({});
    useEffect(()=>{const getData=  new Promise(resolve=>{setTimeout(()=>{resolve(stockrecomendados);} ,2000);
}  );

getData.then(res=>setData(res));

})
  /*const [stockrecomendados, setStockrecomendados] = useState();

  useEffect(() => {
    getProductStock("04").then((stockrecomendados) => {
      setStockrecomendados();
    });
  }, []);
  const { id } = useParams();
  console.log(id);
  if (!stockrecomendados)*/
    return (
      <div>
        Cargando .... espere en breve estará listo !
        <ItemDetail    id={film.id}
          nombre={film.nombre}
          genero={film.genero}
          precio={film.precio}
          image ={film.image}
          categoryId={film.categoryId} />
        <button>ver detalle</button>



      </div>
    );
};
export default ItemDetailContainer;