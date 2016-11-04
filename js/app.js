var music = {};
var app = angular.module("MusHub" ,[]);
app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
app.controller("MainController", [ "$scope", "orderByFilter", function($http, $scope, orderBy){
    //$scope.items = items;/*[
    $scope.currentSongEl = 'none';
    $scope.currentSong = 'none';
    music.play = function (a){
        if($scope.currentSongEl!='none' && $scope.currentSong != a.getAttribute('nameS')){
            document.getElementsByName($scope.currentSong)[0].className = 'commentHide';
            $scope.currentSongEl.load();
        }
        $scope.start = new Date();
        $scope.currentSongEl = a;
        $scope.currentSong = a.getAttribute('nameS');
        document.getElementsByName($scope.currentSong)[0].className = 'commentShow';


    };
    music.pause = function(){
        //$scope.currentSongEl = 'none';
    };
       $scope.items =  [{
            id: '0',
            name: "Song name1",
            rating: 3,
            genre: "asdasdsad",
            artist: "asdasdad",
            link: "https://cs1-34v4.vk-cdn.net/p16/c542ed176b9244.mp3?extra=rAILO6qL1K5i2ufVN02MJg-buQhghvGrv5GjQ9rtH5OMCQkbCCiUDNH2OGk4nKIxqbWqrv8Hl4VwD5LnYqbmc5PM6_wSS9kC_lkr85i-aDE9074QGq3muMColaaJFbEd7ixGpkjogTYE2is"
        },
        {
            id: '1',
            name: "Song name2",
            rating: 4,
            genre: "xsxse",
            artist: "qwewelbum",
            link: "https://cs1-34v4.vk-cdn.net/p16/c542ed176b9244.mp3?extra=rAILO6qL1K5i2ufVN02MJg-buQhghvGrv5GjQ9rtH5OMCQkbCCiUDNH2OGk4nKIxqbWqrv8Hl4VwD5LnYqbmc5PM6_wSS9kC_lkr85i-aDE9074QGq3muMColaaJFbEd7ixGpkjogTYE2is"
        },{
               id: '2',
            name: "Song name3",
            rating: 5,
            genre: "Srterte",
               artist: "Song`s album",
               link: "https://cs1-34v4.vk-cdn.net/p16/c542ed176b9244.mp3?extra=rAILO6qL1K5i2ufVN02MJg-buQhghvGrv5GjQ9rtH5OMCQkbCCiUDNH2OGk4nKIxqbWqrv8Hl4VwD5LnYqbmc5PM6_wSS9kC_lkr85i-aDE9074QGq3muMColaaJFbEd7ixGpkjogTYE2is"
           },{
               id: '3',
            name: "Song name4",
            rating: 1,
            genre: "gggasdfg",
               artist: "ccascca",
               link: "https://cs1-34v4.vk-cdn.net/p16/c542ed176b9244.mp3?extra=rAILO6qL1K5i2ufVN02MJg-buQhghvGrv5GjQ9rtH5OMCQkbCCiUDNH2OGk4nKIxqbWqrv8Hl4VwD5LnYqbmc5PM6_wSS9kC_lkr85i-aDE9074QGq3muMColaaJFbEd7ixGpkjogTYE2is"
           },{
               id: '4',
            name: "Song name5",
            rating: 5,
            genre: "werwer3r",
               artist: "basbdb",
               link: "https://cs1-34v4.vk-cdn.net/p16/c542ed176b9244.mp3?extra=rAILO6qL1K5i2ufVN02MJg-buQhghvGrv5GjQ9rtH5OMCQkbCCiUDNH2OGk4nKIxqbWqrv8Hl4VwD5LnYqbmc5PM6_wSS9kC_lkr85i-aDE9074QGq3muMColaaJFbEd7ixGpkjogTYE2is"
           }
    ];
    $scope.comment = '';

    // */
}]);

