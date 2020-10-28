import React from 'react';
import { Link } from 'react-router-dom';

function BoxCategories(props){
    return(

        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categorias de productos</h6>
								</div>
								<div className="card-body">
									<div className="row">
                                        {props.categories.map((category, index) => 
                                        
                                        <div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												
													<Link to={`/${category}`} className="link-categories" key={index + category}>
                                                    <div className="card-body category-card" >
                                                        {category}
                                                    </div>
                                                    </Link>
                                                    
											</div>
                                        </div>
                                        
                                        )}

									</div>
								</div>
							</div>
						</div>
    )}

    BoxCategories.defaultProps ={
        categories: ["Hubo un problema cargando las categorias"]
    }
export default BoxCategories;