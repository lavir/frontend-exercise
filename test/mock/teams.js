'use strict';

angular.module('mockedTeams', [])
  .value('teamsJSON', [
    {
        "id": 1,
        "team": "Scuderia Ferrari",
        "car": "Ferrari 059/3"
    },
    {
        "id": 2,
        "team": "Mercedes AMG Petronas F1 Team",
        "car": "Mercedes PU106A Hybrid"
    },
    {
        "id": 3,
        "team": "Infiniti Red Bull Racing",
        "car": "Renault Energy F1-2014"
    },
    {
        "id": 4,
        "team": "Williams Martini Racing",
        "car": "Mercedes PU106A Hybrid"
    },
    {
        "id": 5,
        "team": "McLaren Mercedes",
        "car": "Mercedes PU106A Hybrid"
    }
]);