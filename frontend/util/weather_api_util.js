export const fetch5Day = (lat, lon) => {
  return $.ajax({
    method: "GET",
    url: `https://cors-everywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=bcb83c4b54aee8418983c2aff3073b3b&mode=json&units=imperial`
  });
};

export const fetchDaily = (lat, lon) => {
  return $.ajax({
    method: "GET",
    url: `https://cors-everywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&APPID=bcb83c4b54aee8418983c2aff3073b3b&mode=json&units=imperial`
  });
};

export const search = (location) => {
  return $.ajax({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBW-S4D3sWi25Qwr2UNbYaf1CguSP-Wfiw`
  });
};

// NOAA NCDC API util methods
export const fetchAnnual = (stationId, year) => {
  console.log(`https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&startdate=${year}-01-01&enddate=${year + 1}-01-01&stationid=${stationId}&datatypeid=TMIN&datatypeid=TMAX&units=standard&limit=750`);
  return $.ajax({
    method: "GET",
    headers: { "token":"wUdKaVEYoXeeSRvoAIOPADrHwuzTZzYw" },
    url: `https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&startdate=${year}-01-01&enddate=${year + 1}-01-01&stationid=${stationId}&datatypeid=TMIN&datatypeid=TMAX&units=standard&limit=750`
  });
};

export const fetchStation = (lat, lon, year) => {
  console.log(`https://www.ncdc.noaa.gov/cdo-web/api/v2/stations?datasetid=GHCND&extent=${lat - 1.0},${lon - 1.0},${lat + 1.0},${lon + 1.0}&startdate=${year}-01-01&enddate=${year + 1}-01-01&datatypeid=TMAX&sortfield=datacoverage&limit=5&sortorder=desc`);
  return $.ajax({
    method: 'GET',
    headers: { "token":"wUdKaVEYoXeeSRvoAIOPADrHwuzTZzYw" },
    url: `https://www.ncdc.noaa.gov/cdo-web/api/v2/stations?datasetid=GHCND&extent=${lat - 1.0},${lon - 1.0},${lat + 1.0},${lon + 1.0}&startdate=${year}-01-01&enddate=${year + 1}-01-01&datatypeid=TMAX&sortfield=datacoverage&limit=5&sortorder=desc`
  });
};
