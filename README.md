# interactive-map
An application for inspecting the max wave height for a location on an interactive map.

# Data
KeysView(<xarray.Dataset>
Dimensions:    (longitude: 720, latitude: 261, time: 24)
Coordinates:
* longitude  (longitude) float32 -180.0 -179.5 -179.0 ... 178.5 179.0 179.5
* latitude   (latitude) float32 70.0 69.5 69.0 68.5 ... -59.0 -59.5 -60.0
* time       (time) datetime64[ns] 2019-01-01 ... 2019-01-01T23:00:00
  Data variables:
  hmax       (time, latitude, longitude) float32 ...
  mwd        (time, latitude, longitude) float32 ...
  mwp        (time, latitude, longitude) float32 ...
  tmax       (time, latitude, longitude) float32 ...
  swh        (time, latitude, longitude) float32 ...

# Running

# Testing