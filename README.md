# interactive-map
An application for inspecting the max wave height for a location on an interactive map.
This project was written using python 3.10. 

# Data
The data used in this project is a global wave data set. For simplification purposes, we observe just one day.
The format of the data is [netCDF](https://en.wikipedia.org/wiki/NetCDF), which is comfortably handled by the
`xarray` python library. For further documentation refer [here](https://docs.xarray.dev/en/stable/user-guide/io.html#netcdf).


Dimensions:    (longitude: 720, latitude: 261, time: 24)

Coordinates:
* longitude  `float32 `
* latitude  `float32`
* time   `datetime64` [ns]

Data variables:
* hmax       (time, latitude, longitude) `float32`
* mwd        (time, latitude, longitude) `float32`
* mwp        (time, latitude, longitude) `float32`
* tmax       (time, latitude, longitude) `float32`
* swh        (time, latitude, longitude) `float32`

# Running
First, please make sure that you have activated a virtual environment and install the requirements by
executing
```
pip install -r requirements.txt
```
To run the application, first run the flask backend server
```
cd backend
python -m flask --app wave_height_analysis.py run
```
and then open `frontend/index.html`.

# Testing