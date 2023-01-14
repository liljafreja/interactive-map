from flask import Flask, request, jsonify, Response
from data_exploration import *

app = Flask(__name__)

with xr.open_dataset("data/waves_2019-01-01.nc") as ds:
    pass


@app.route('/max_wave_height', methods=['GET'])
def get_max_wave_height() -> Response:
    args = request.args
    longitude = args.get("longitude", type=float)
    latitude = args.get("latitude", type=float)
    max_wave_height = find_maximal_wave_height(longitude=longitude, latitude=latitude, data=ds)
    print(f"{longitude}, {latitude}, {max_wave_height}")
    response = jsonify({'maxWaveHeight': str(max_wave_height)})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
