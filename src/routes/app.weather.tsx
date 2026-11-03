import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSun, Droplets, MapPin, RefreshCw, Snowflake, Sun, Thermometer, Wind } from "lucide-react";
import { useI18n } from "@/i18n/i18n";

type Location = { id: string; en: string; rw: string; latitude: number; longitude: number };
type WeatherData = {
  current: { time: string; temperature_2m: number; relative_humidity_2m: number; precipitation_probability: number; wind_speed_10m: number; weather_code: number };
  daily: { time: string[]; weather_code: number[]; temperature_2m_max: number[]; temperature_2m_min: number[]; precipitation_probability_max: number[]; wind_speed_10m_max: number[] };
};

const LOCATIONS: Location[] = [
  { id: "kigali", en: "Kigali", rw: "Kigali", latitude: -1.9441, longitude: 30.0619 },
  { id: "huye", en: "Huye", rw: "Huye", latitude: -2.5967, longitude: 29.7394 },
  { id: "musanze", en: "Musanze", rw: "Musanze", latitude: -1.4998, longitude: 29.6349 },
  { id: "rubavu", en: "Rubavu (Gisenyi)", rw: "Rubavu (Gisenyi)", latitude: -1.6773, longitude: 29.2637 },
  { id: "muhanga", en: "Muhanga", rw: "Muhanga", latitude: -2.0846, longitude: 29.7567 },
  { id: "rwamagana", en: "Rwamagana", rw: "Rwamagana", latitude: -1.9487, longitude: 30.4347 },
  { id: "nyagatare", en: "Nyagatare", rw: "Nyagatare", latitude: -1.2929, longitude: 30.3253 },
  { id: "kayonza", en: "Kayonza", rw: "Kayonza", latitude: -1.8796, longitude: 30.6335 },
  { id: "karongi", en: "Karongi", rw: "Karongi", latitude: -2.0603, longitude: 29.3478 },
  { id: "rusizi", en: "Rusizi", rw: "Rusizi", latitude: -2.4846, longitude: 28.9075 },
];

export const Route = createFileRoute("/app/weather")({ component: WeatherPage });

function WeatherPage() {
  const { t, language } = useI18n();
  const [locationId, setLocationId] = useState("kigali");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const location = LOCATIONS.find(item => item.id === locationId) ?? LOCATIONS[0]!;

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({
      latitude: String(location.latitude), longitude: String(location.longitude),
      current: "temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m,weather_code",
      daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max",
      forecast_days: "7", timezone: "Africa/Kigali",
    });
    setLoading(true); setError(false); setWeather(null);
    fetch("https://api.open-meteo.com/v1/forecast?" + params.toString(), { signal: controller.signal })
      .then(async response => {
        if (!response.ok) throw new Error("Weather request failed");
        return response.json() as Promise<WeatherData>;
      })
      .then(data => {
        if (!data.current || !Array.isArray(data.daily?.time) || data.daily.time.length < 5) throw new Error("Weather response was incomplete");
        setWeather(data);
      })
      .catch(caught => { if (!controller.signal.aborted) setError(true); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [location, refresh]);

  const placeName = location[language];
  const dayLabel = (date: string, index: number) => index === 0 ? t("weatherToday") : new Intl.DateTimeFormat(language === "rw" ? "rw-RW" : "en-RW", { weekday: "short", day: "numeric", month: "short", timeZone: "Africa/Kigali" }).format(new Date(date + "T12:00:00"));

  return <section className="weather-page">
    <header className="weather-heading"><div><span className="diagnose-kicker"><CloudSun size={15}/>{t("weather")}</span><h1>{t("weatherTitle")}</h1><p>{t("weatherIntro")}</p></div><label className="weather-location-select"><span><MapPin size={15}/>{t("weatherLocation")}</span><select value={locationId} onChange={event => setLocationId(event.target.value)}>{LOCATIONS.map(item => <option key={item.id} value={item.id}>{item[language]}</option>)}</select></label></header>
    {loading ? <div className="weather-state" role="status"><RefreshCw className="spin" size={21}/><span>{t("weatherLoading")}</span></div> : error || !weather ? <div className="weather-state weather-error" role="alert"><AlertCircle size={22}/><div><p>{t("weatherError")}</p><button className="button button-outline" type="button" onClick={() => setRefresh(value => value + 1)}><RefreshCw size={15}/>{t("weatherRetry")}</button></div></div> : <>
      <article className="weather-current-card"><div className="weather-current-top"><div><span className="weather-section-label">{t("weatherCurrent")}</span><h2><MapPin size={17}/>{placeName}</h2></div><WeatherIcon code={weather.current.weather_code} size={48}/></div><div className="weather-current-main"><strong>{Math.round(weather.current.temperature_2m)}°</strong><span>{t(weatherKey(weather.current.weather_code))}</span></div><div className="weather-metrics"><WeatherMetric icon={<Droplets size={17}/>} label={t("weatherRainChance")} value={`${Math.round(weather.current.precipitation_probability ?? 0)}%`}/><WeatherMetric icon={<Cloud size={17}/>} label={t("weatherHumidity")} value={`${Math.round(weather.current.relative_humidity_2m)}%`}/><WeatherMetric icon={<Wind size={17}/>} label={t("weatherWind")} value={`${Math.round(weather.current.wind_speed_10m)} km/h`}/></div></article>
      <section className="weather-forecast"><div className="weather-forecast-heading"><div><span className="weather-section-label">{t("weatherForecast")}</span><h2>{placeName}</h2></div><span>{t("weatherSource")}</span></div><div className="weather-forecast-grid">{weather.daily.time.map((day, index) => <article className="weather-day" key={day}><strong>{dayLabel(day, index)}</strong><WeatherIcon code={weather.daily.weather_code[index] ?? 0} size={27}/><span className="weather-day-description">{t(weatherKey(weather.daily.weather_code[index] ?? 0))}</span><div className="weather-day-temperatures"><b>{Math.round(weather.daily.temperature_2m_max[index] ?? 0)}°</b><span>{Math.round(weather.daily.temperature_2m_min[index] ?? 0)}°</span></div><span className="weather-day-rain"><Droplets size={13}/>{Math.round(weather.daily.precipitation_probability_max[index] ?? 0)}%</span></article>)}</div></section>
    </>}
  </section>;
}

function WeatherMetric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="weather-metric"><span>{icon}</span><div><small>{label}</small><strong>{value}</strong></div></div>; }
function weatherKey(code: number): "weatherClear" | "weatherMainlyClear" | "weatherPartlyCloudy" | "weatherOvercast" | "weatherFog" | "weatherDrizzle" | "weatherRainy" | "weatherSnow" | "weatherShowers" | "weatherSnowShowers" | "weatherStorm" | "weatherUnknown" {
  if (code === 0) return "weatherClear";
  if (code === 1) return "weatherMainlyClear";
  if (code <= 3) return "weatherPartlyCloudy";
  if (code <= 48) return "weatherFog";
  if (code <= 57) return "weatherDrizzle";
  if (code <= 67 || code === 80 || code === 81 || code === 82) return "weatherRainy";
  if (code <= 77) return "weatherSnow";
  if (code === 85 || code === 86) return "weatherSnowShowers";
  if (code >= 95) return "weatherStorm";
  return "weatherUnknown";
}
function WeatherIcon({ code, size }: { code: number; size: number }) {
  if (code === 0) return <Sun size={size}/>;
  if (code <= 2) return <CloudSun size={size}/>;
  if (code === 3) return <Cloud size={size}/>;
  if (code <= 48) return <CloudFog size={size}/>;
  if (code <= 57) return <CloudDrizzle size={size}/>;
  if (code <= 67 || code >= 80 && code <= 82) return <CloudRain size={size}/>;
  if (code <= 77 || code === 85 || code === 86) return <Snowflake size={size}/>;
  if (code >= 95) return <CloudLightning size={size}/>;
  return <Thermometer size={size}/>;
}
