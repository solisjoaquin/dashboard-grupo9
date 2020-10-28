import React from 'react'
import Table from './Table'

export default (props)=>{

    return (
        <div className="">
            <h1>Listado de productos</h1>

            <div className="row">
              <div className="col-lg-12 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-body">

                  <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                </tr>
              </thead>

            { 
                  props.products.length ? 
                    props.products.map((product, index) =>
                      <Table 
                        id= { product.id }
                        name= { product.name }
                        price= { product.price }
                        category= { product.category }
                        key= { `product-${index}`}
                      />
                    )
                  :
                    <p>Cargando productos...</p>   
                }

                    </table>
                  
                  </div>
                </div>				
              </div>
            </div>

            
      </div>

    )
}