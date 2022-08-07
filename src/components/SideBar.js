import React from "react";
import image from "../assets/images/logo-fence-white.svg";
import ContentWrapper from "./ContentWrapper";
import ProductsInDb from "./ProductsInDb";
import ProductsDetailInDb from "./ProductsDetailInDb";
import ContentRowProducts from "./ContentRowProducts";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";
import SearchProducts from "./SearchProducts";
import Categories from "./Categories";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-warning sidebar sidebar-dark accordion"
        id="accordionSidebar">
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/">
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="logo fence" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt "></i>
          <span>Dashboard - FENCE</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading"></div>

        {/*<!-- Nav Item - Productos -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Tipos de Vallas</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Detalle de Productos -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/ProductsDetail">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Ùltimo Producto</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tablas -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/TablasDB">
            <i className="fas fa-fw fa-table"></i>
            <span>Principales Indicadores</span>
          </Link>
        </li>
        {/*<!-- Nav Item - Listado de Productos -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ProductList">
            <i className="fas fa-fw fa-table"></i>
            <span>Listado de Productos</span>
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-table"></i>
            <span>Productos por Categoria</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/Products">
          <ProductsInDb />
        </Route>
        <Route path="/ProductsDetail">
          <ProductsDetailInDb />
        </Route>
        <Route path="/TablasDB">
          <ContentRowProducts />
        </Route>
        <Route path="/ProductList">
          <SearchProducts />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
export default SideBar;
