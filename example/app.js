var angularMapboxExample = angular.module('angular-mapbox-example', ['angularMapbox']);

angularMapboxExample.controller('demoController', function($scope) {
  $scope.farmersMarkets = [
    {
      "name": "Capitol Hill Farmer's Market",
      "times": "Sundays, 11am-3pm, year round",
      "coords": {
        "lat": 47.615244,
        "lng": -122.320800
      }
    },
    {
      "name": "Ballard Farmer's Market",
      "times": "Sundays, 10am-3pm, year round",
      "coords": {
        "lat": 47.667660,
        "lng": -122.384800
      }
    },
    {
      "name": "University District Farmer's Market",
      "times": "Saturdays, 9am-2pm, year round",
      "coords": {
        "lat": 47.665731,
        "lng": -122.312593
      }
    },
    {
      "name": "Magnolia Farmer's Market",
      "times": "Saturdays, June to October, 10am-2pm",
      "coords": {
        "lat": 47.639570,
        "lng": -122.399660
      }
    },
  ];

  $scope.geojsonData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Sonic Boom Records",
          "address": "2209 NW Market St Seattle, WA 98107"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -122.385041,
            47.66867
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Easy Street Records",
          "address": "4559 California Ave SW Seattle, WA 98116"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -122.43679,
            47.561768
          ]
        }
      }
    ]
  };
});
