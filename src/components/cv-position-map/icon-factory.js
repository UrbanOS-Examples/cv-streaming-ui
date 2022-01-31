import leaflet from 'leaflet'
import locationPin from '../../assets/ic_location-dot.svg'

const createLocationIcon = zoomLevel => {
  return leaflet.icon({
    iconUrl: locationPin,
    iconSize: [2 * zoomLevel, 2 * zoomLevel]
  })
}

export default { createLocationIcon }