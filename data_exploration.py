import xarray as xr
import pandas as pd


def load_df(file_name: str) -> pd.DataFrame:
    with xr.open_dataset(file_name) as wave_ds:
        return wave_ds.to_dataframe()


def find_maximal_wave_height(longitude: float, latitude: float, data: xr.Dataset) -> float:
    df = data \
        .resample(time='1D') \
        .max() \
        .sel({'longitude': longitude, 'latitude': latitude}, method='nearest') \
        .to_pandas()
    return df['hmax'].values[0]


if __name__ == '__main__':
    with xr.open_dataset("data/waves_2019-01-01.nc") as ds:
        print("The max wave height for the given coordinates is", find_maximal_wave_height(0, 0, ds))
