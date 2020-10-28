import React from 'react'
import Table from './Table'

export default (props)=>{
    console.log("usuarios")
    console.log(props.users)

    return (
        <div className="">
            <h1>Listado de usuarios</h1>

            <div className="row">
              <div className="col-lg-12 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-body">

                  <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Email</th>
                </tr>
              </thead>
            { 
                  props.users.length ? 
                    props.users.map((user, index) =>
                      <Table 
                        id= { user.id }
                        name= { user.first_name }
                        price= { user.last_name }
                        category= { user.email }
                        key= { `user-${index}`}
                      />
                    )
                  :
                    <p>Cargando usuarios...</p>   
                }

                    </table>
                  
                  </div>
                </div>				
              </div>
            </div>

            
      </div>

    )
}