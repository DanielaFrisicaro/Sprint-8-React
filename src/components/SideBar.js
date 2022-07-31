import React from "react";
import image from "../assets/images/logo-fence-grey.svg";
import ContentWrapper from "./ContentWrapper";
import ProductsInDb from "./ProductsInDb";
import DetalleProductosInDb from "./DetalleProductosInDb";
import ContentRowMovies from "./ContentRowMovies";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";
import SearchMovies from "./SearchMovies";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
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
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - FENCE</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Productos</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/ProductsDetail">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Detalle de Productos</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/TablasDB">
            <i className="fas fa-fw fa-table"></i>
            <span>Tablas</span>
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ProductList">
            <i className="fas fa-fw fa-table"></i>
            <span>Listado de Productos</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      {/*<!-- Microdesafio 1 -->*/}
      {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
      {/*<!-- End Microdesafio 1 -->*/}

      {/*<!-- End Microdesafio 2 -->*/}
      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/Products">
          <ProductsInDb />
        </Route>
        <Route path="/ProductsDetail">
          <DetalleProductosInDb />
        </Route>
        <Route path="/TablasDB">
          <ContentRowMovies />
        </Route>
        <Route path="/ProductList">
          <SearchMovies />
        </Route>
        <Route component={NotFound} />
      </Switch>
      {/*<!-- End Microdesafio 2 -->*/}
    </React.Fragment>
  );
}
export default SideBar;