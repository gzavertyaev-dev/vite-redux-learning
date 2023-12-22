export interface WeatherState {
  weatherData: WeatherInfoData | undefined;
  weatherDataList: WeatherInfoData[];
  isLoading: boolean;
  error: WeatherError | null;
}

export interface WeatherInfoData {
  id: string;
  temp: string;
  icon: string;
  cityName: string;
}

export interface WeatherError {
  cod: number;
  message: string;
}
