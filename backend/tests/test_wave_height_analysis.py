from backend.wave_height_analysis import app
import json


def test_get_max_wave_height_on_water():
    response = app.test_client().get('/max_wave_height',
                                     query_string={'longitude': 0.0, 'latitude': 0.0})
    assert response.status_code == 200
    assert json.loads(response.data.decode('utf-8')) == {"maxWaveHeight": 2.326}


def test_get_max_wave_height_on_land():
    response = app.test_client().get('/max_wave_height',
                                     query_string={'longitude': -0.09, 'latitude': 51.5})
    assert response.status_code == 404
