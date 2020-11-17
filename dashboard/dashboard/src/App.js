import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/topbar/Topbar';
import BoxCategories from './components/boxCategories/boxCategories';
import Table from './components/Table';
import { render } from '@testing-library/react';
import Users from './components/Users';
import { Route } from 'react-router-dom';
import Products from './components/Products';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metrics: [],
      metricsUsers: [],
      categories: [],
      products: [],
      users: []
    };
  }

  componentDidMount() {

    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(products => {

        console.log(
          products.data.map(product => (product.name)))

        console.log(products.data[0].imagen)
        this.setState({
          metrics: [
            {
              color: "primary",
              title: "Products in Data Base",
              value: products.meta.totalProducts,
              iconClass: "fa-clipboard-list",
            },
            {
              color: "success",
              title: "Amount in products",
              value: products.meta.totalAmount,
              iconClass: "fa-dollar-sign",
            },
          ],
          categories: products.meta.categories
          ,
          products: products.data
        },

        )
      })
      .catch(error => console.log(error));

    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(users => {
        this.setState({
          metricsUsers: [
            {
              color: "primary",
              title: "Cantidad de usuarios",
              value: users.meta.totalUsers,
              iconClass: "fa-user-check",
            }
          ],
          users: users.data
        },

        )
      })
      .catch(error => console.log(error));
  }


  componentDidUpdate() {

  }

  render() {
    return (

      <div id="wrapper">



        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">

            <Navbar />
            <Route exact path="/products" component={() => <Products products={this.state.products} />} />
            <Route exact path="/users" component={() => <Users users={this.state.users} />} />


            <div className="container-fluid">

              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>

              <div className="row">


                {
                  this.state.metrics.length ?
                    this.state.metrics.map((metric, index) =>
                      <Topbar
                        color={metric.color}
                        title={metric.title}
                        value={metric.value}
                        iconClass={metric.iconClass}
                        key={`metric-${index}`}
                      />
                    )
                    :
                    <p>Cargando métricas...</p>


                }
                {
                  this.state.metricsUsers.length ?
                    this.state.metricsUsers.map((metricsUser, index) =>
                      <Topbar
                        color={metricsUser.color}
                        title={metricsUser.title}
                        value={metricsUser.value}
                        iconClass={metricsUser.iconClass}
                        key={`metric-${index}`}
                      />
                    )
                    :
                    <p>Cargando métricas...</p>
                }
              </div>




              <div className="row">

                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Ultimo producto subido</h6>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src="../images/product_dummy.svg" alt="image dummy" />
                        {

                    /* "../images/product_dummy.svg" 
                    this.state.products[0].imagen*/}
                      </div>
                      <p>Aqui podras obtenes las metricas para ver el rendimiento de tus productos.</p>
                      <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                  </div>
                </div>


                <BoxCategories categories={this.state.categories} />


              </div>

              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Todos los productos</h1>
              </div>

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
                          this.state.products.length ?
                            this.state.products.map((product, index) =>
                              <Table
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                category={product.category}
                                key={`product-${index}`}
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

          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Dashboard 2020</span>
              </div>
            </div>
          </footer>


        </div>


      </div>
    );
  }
}

export default App;
