import React, { createRef } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  ZoomControl,
  Marker,
} from "react-leaflet";
import iconFactory from "./icon-factory";
import "./map.scss";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.defaultZoom = 12;
    this.state = {
      zoom: this.defaultZoom,
      hasLocation: false,
      center: [39.9612, -82.9988],
    };
    this.mapRef = createRef();
  }

  componentDidMount() {
    this.mapRef.current.leafletElement.locate({ timeout: 30000 });
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker
        position={this.state.center}
        icon={iconFactory.createLocationIcon(this.state.zoom)}
        zIndexOffset={1000}
      />
    ) : null;
    const accessToken = "<mapbox access token here>";

    return (
      <map-element>
        <LeafletMap
          fadeAnimation={false}
          ref={this.mapRef}
          center={this.state.center}
          zoom={this.defaultZoom}
          zoomControl={false}
          ovViewportChanged={(viewport) => this.onViewportChanged(viewport)}
          onLocationFound={(e) => this.handleLocationFound(e)}
        >
          <TileLayer
            url={`https://{s}.tiles.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}{r}?access_token=${accessToken}`}
          />
          <ZoomControl position="topright" />
          {marker}
        </LeafletMap>
      </map-element>
    );
  }

  onViewportChanged(viewport) {
    this.setState({ zoom: viewport.zoom });
  }

  handleLocationFound = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    });
    this.mapRef.current.leafletElement.setZoomAround(e.latlng, 14, true);
  };
}
