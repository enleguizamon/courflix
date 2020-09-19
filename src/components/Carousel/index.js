import React from 'react';
import './style.scss'
import InnerCarousel from '../InnerCarousel';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  //obtener de local storage las series y pelis guardadas en mi lista.
  componentDidMount() {
    const stringifiedList = localStorage.getItem('list')
    if (stringifiedList) {
      const newList = JSON.parse(stringifiedList)
      this.setState({
        list: newList
      });
    }
  }

  render() {
    return (
      <div className="carouselWrapper">
        <h3 className="carouselTitle" id="series">Continuar viendo</h3>
        {/*la props data trae la info del json y la props filter la uso comparar ese string en innerCarousel*/}
        <InnerCarousel data={this.props.data} filter={"series"} />
        <h3 className="carouselTitle" id="peliculas">Películas</h3>
        <InnerCarousel data={this.props.data} filter={"pelis"} />
        <h3 className="carouselTitle" id="recientementeAgregado">Agregados recientemente</h3>
        <InnerCarousel data={this.props.data} filter={"recientementeAgregado"} />
        <h3 className="carouselTitle" id="miLista">Mi lista</h3>
        {/*el carousel "mi lista" trae la información de local storage al clickear el botón*/}
        <InnerCarousel data={this.state.list} />
      </div>
    );
  }
}

export default Carousel;