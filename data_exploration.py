import xarray as xr
import pandas as pd


def load_df(file_name: str) -> pd.DataFrame:
    with xr.open_dataset(file_name) as wave_ds:
        return wave_ds.to_dataframe()


def find_maximal_wave_height(longitude: float, latitude: float, df: pd.DataFrame) -> float:
    df = df[["longitude", "latitude", "hmax"]] \
        .groupby(['longitude', 'latitude']) \
        .aggregate('max') \
        .reset_index()
    return df[(df['longitude'] == longitude) & (df['latitude'] == latitude)]['hmax'].values[0]


if __name__ == '__main__':
    df = load_df("data/waves_2019-01-01.nc").reset_index()
    df.info()

    print(find_maximal_wave_height(0, 0, df))
