// Projection definitions for use with proj4js
export const projectionDefs: Record<string, string> = {
  // World projections
  "EPSG:4326": "+proj=longlat +datum=WGS84 +no_defs", // WGS84
  "EPSG:3857":
    "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs", // Web Mercator
  "EPSG:4269": "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs", // NAD83
  "EPSG:4267": "+proj=longlat +datum=NAD27 +no_defs", // NAD27
  "EPSG:3395":
    "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs", // World Mercator

  // European projections
  "EPSG:25832":
    "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // ETRS89 / UTM zone 32N
  "EPSG:25833":
    "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // ETRS89 / UTM zone 33N
  "EPSG:25834":
    "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // ETRS89 / UTM zone 34N
  "EPSG:25835":
    "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // ETRS89 / UTM zone 35N
  "EPSG:25836":
    "+proj=utm +zone=36 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // ETRS89 / UTM zone 36N
  "EPSG:31467":
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs", // DHDN / 3-degree Gauss-Kruger zone 3
  "EPSG:31468":
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs", // DHDN / 3-degree Gauss-Kruger zone 4
  "EPSG:31469":
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs", // DHDN / 3-degree Gauss-Kruger zone 5
  "EPSG:3035":
    "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // ETRS89 / LAEA Europe
  "EPSG:3034":
    "+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // ETRS89 / LCC Europe
  "EPSG:27700":
    "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs", // OSGB 1936 / British National Grid
  "EPSG:2154":
    "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // RGF93 / Lambert-93 (France)
  "EPSG:28992":
    "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.417,50.3319,465.552,-0.398957,0.343988,-1.8774,4.0725 +units=m +no_defs", // Amersfoort / RD New (Netherlands)
  "EPSG:23030":
    "+proj=utm +zone=30 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs", // ED50 / UTM zone 30N (Spain)
  "EPSG:23031":
    "+proj=utm +zone=31 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs", // ED50 / UTM zone 31N
  "EPSG:23032":
    "+proj=utm +zone=32 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs", // ED50 / UTM zone 32N
  "EPSG:3006":
    "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 TM (Sweden)

  // Additional projections
  "EPSG:3301":
    "+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // Estonian Coordinate System of 1997
  "EPSG:3416":
    "+proj=tmerc +lat_0=0 +lon_0=115 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs", // NSIDC EASE-Grid North
  "EPSG:3577":
    "+proj=aea +lat_1=-18 +lat_2=-36 +lat_0=0 +lon_0=132 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / Australian Albers
  "EPSG:3067":
    "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // ETRS89 / ETRS-TM35FIN (Finland)
  "EPSG:5514":
    "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813975277778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs", // S-JTSK / Krovak East North (Czech Republic)

  // North American projections
  "EPSG:26903": "+proj=utm +zone=3 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 3N
  "EPSG:26904": "+proj=utm +zone=4 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 4N
  "EPSG:26905": "+proj=utm +zone=5 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 5N
  "EPSG:26906": "+proj=utm +zone=6 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 6N
  "EPSG:26907": "+proj=utm +zone=7 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 7N
  "EPSG:26908": "+proj=utm +zone=8 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 8N
  "EPSG:26909": "+proj=utm +zone=9 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 9N
  "EPSG:26910":
    "+proj=utm +zone=10 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 10N
  "EPSG:26911":
    "+proj=utm +zone=11 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 11N
  "EPSG:26912":
    "+proj=utm +zone=12 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 12N
  "EPSG:26913":
    "+proj=utm +zone=13 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 13N
  "EPSG:26914":
    "+proj=utm +zone=14 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 14N
  "EPSG:26915":
    "+proj=utm +zone=15 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 15N
  "EPSG:26916":
    "+proj=utm +zone=16 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 16N
  "EPSG:26917":
    "+proj=utm +zone=17 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 17N
  "EPSG:26918":
    "+proj=utm +zone=18 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 18N
  "EPSG:26919":
    "+proj=utm +zone=19 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 19N
  "EPSG:26920":
    "+proj=utm +zone=20 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 20N
  "EPSG:26921":
    "+proj=utm +zone=21 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 21N
  "EPSG:26922":
    "+proj=utm +zone=22 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 22N
  "EPSG:26923":
    "+proj=utm +zone=23 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / UTM zone 23N

  // State Plane Coordinate Systems (SPCS) - NAD83
  "EPSG:2868":
    "+proj=lcc +lat_1=37.06666666666667 +lat_2=38.43333333333333 +lat_0=36.5 +lon_0=-79.5 +x_0=3500000 +y_0=1000000 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / Virginia North
  "EPSG:2869":
    "+proj=lcc +lat_1=36.76666666666667 +lat_2=37.96666666666667 +lat_0=36 +lon_0=-78.5 +x_0=3500000 +y_0=1000000 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / Virginia South
  "EPSG:2870":
    "+proj=lcc +lat_1=47.5 +lat_2=48.73333333333333 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / Washington North
  "EPSG:2871":
    "+proj=lcc +lat_1=45.83333333333334 +lat_2=47.33333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs", // NAD83 / Washington South

  // Australian projections
  "EPSG:28348":
    "+proj=utm +zone=48 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / MGA zone 48
  "EPSG:28349":
    "+proj=utm +zone=49 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / MGA zone 49
  "EPSG:28350":
    "+proj=utm +zone=50 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / MGA zone 50
  "EPSG:28351":
    "+proj=utm +zone=51 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / MGA zone 51
  "EPSG:28352":
    "+proj=utm +zone=52 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / MGA zone 52
  "EPSG:28353":
    "+proj=utm +zone=53 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / MGA zone 53
  "EPSG:28354":
    "+proj=utm +zone=54 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / MGA zone 54
  "EPSG:28355":
    "+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / MGA zone 55
  "EPSG:28356":
    "+proj=utm +zone=56 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / MGA zone 56

  // Asian projections
  "EPSG:3414":
    "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs", // SVY21 / Singapore TM
  "EPSG:4214":
    "+proj=longlat +towgs84=-134,-48,149,0,0,0,0 +a=6378245 +b=6356863.018773047 +no_defs", // Beijing 1954
  "EPSG:4610": "+proj=longlat +ellps=clrk66 +no_defs", // JGD2000

  // Additional European projections
  "EPSG:3008":
    "+proj=tmerc +lat_0=0 +lon_0=13.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 13 30
  "EPSG:3009":
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 15 00
  "EPSG:3010":
    "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 16 30
  "EPSG:3011":
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 18 00
  "EPSG:3012":
    "+proj=tmerc +lat_0=0 +lon_0=14.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 14 15
  "EPSG:3013":
    "+proj=tmerc +lat_0=0 +lon_0=15.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 15 45
  "EPSG:3014":
    "+proj=tmerc +lat_0=0 +lon_0=17.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 17 15
  "EPSG:3015":
    "+proj=tmerc +lat_0=0 +lon_0=18.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 18 45
  "EPSG:3016":
    "+proj=tmerc +lat_0=0 +lon_0=20.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 20 15
  "EPSG:3017":
    "+proj=tmerc +lat_0=0 +lon_0=21.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 21 45
  "EPSG:3018":
    "+proj=tmerc +lat_0=0 +lon_0=23.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SWEREF99 23 15

  // South American projections
  "EPSG:5396":
    "+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SIRGAS 2000 / UTM zone 19S
  "EPSG:5641":
    "+proj=utm +zone=20 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SIRGAS 2000 / UTM zone 20S
  "EPSG:5642":
    "+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SIRGAS 2000 / UTM zone 21S
  "EPSG:5643":
    "+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SIRGAS 2000 / UTM zone 22S
  "EPSG:5644":
    "+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SIRGAS 2000 / UTM zone 23S
  "EPSG:5645":
    "+proj=utm +zone=24 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SIRGAS 2000 / UTM zone 24S
  "EPSG:5646":
    "+proj=utm +zone=25 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // SIRGAS 2000 / UTM zone 25S

  // African projections
  "EPSG:20936":
    "+proj=utm +zone=36 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs", // Arc 1950 / UTM zone 36S
  "EPSG:20137":
    "+proj=utm +zone=37 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs", // Arc 1950 / UTM zone 37S
  "EPSG:32736": "+proj=utm +zone=36 +south +datum=WGS84 +units=m +no_defs", // WGS 84 / UTM zone 36S
  "EPSG:32737": "+proj=utm +zone=37 +south +datum=WGS84 +units=m +no_defs", // WGS 84 / UTM zone 37S

  // Additional commonly used projections
  "EPSG:2000":
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +units=m +no_defs", // Anguilla 1957 / British West Indies Grid
  "EPSG:2001":
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=clrk80 +units=m +no_defs", // Antigua 1943 / British West Indies Grid
  "EPSG:2236":
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // NAD83 / Florida East
  "EPSG:2263":
    "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // NAD83 / New York Long Island
  "EPSG:2964":
    "+proj=lcc +lat_1=55 +lat_2=65 +lat_0=50 +lon_0=-154 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // NAD83 / Alaska Albers
  "EPSG:3825":
    "+proj=tmerc +lat_0=0 +lon_0=119 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +units=m +no_defs", // TWD97 / TM2 zone 119
  "EPSG:3826":
    "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +units=m +no_defs", // TWD97 / TM2 zone 121
  "EPSG:4019": "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs", // MOLDREF99
  "EPSG:4258": "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs", // ETRS89
  "EPSG:4807":
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +no_defs", // NTF (Paris)
  "EPSG:27572":
    "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs", // NTF (Paris) / Lambert zone II
  // Additional projections from the wfs-service.ts file
  "EPSG:4547":
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs", // CGCS2000 / 3-degree Gauss-Kruger CM 114E
  "EPSG:3785":
    "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs", // Popular Visualization CRS / Mercator
  "EPSG:3112":
    "+proj=lcc +lat_1=-18 +lat_2=-36 +lat_0=0 +lon_0=134 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", // GDA94 / Geoscience Australia Lambert
};
