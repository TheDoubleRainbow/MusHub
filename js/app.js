var items = new Array();
var app = angular.module("MusHub" ,[]);
app.controller("MainController", ["$scope", "orderByFilter", function($scope, orderBy){
    $scope.items = items;/*[
        {
            name: "Song name1",
            rating: 3,
            genre: "asdasdsad",
            album: "asdasdad",
            link: "https://cs1-17v4.vk-cdn.net/p5/e313b7ab6ee197.mp3?extra=IVIfFu9vutBJd4xD2mFUako3iNE9gfd0xwcPoT6NPKCjMp_iOCfwypfVpzkUe0CfZ4ViYX5tKhl8Y87G0q_xkY-5nHKB1n28aZO88b8sZDrz6qaz5rvEgwqJgPSN59qUxoJKby6XomunCK0"
        },
        {
            name: "Song name2",
            rating: 4,
            genre: "xsxse",
            album: "qwewelbum",
            link: "https://cs1-17v4.vk-cdn.net/p5/e313b7ab6ee197.mp3?extra=IVIfFu9vutBJd4xD2mFUako3iNE9gfd0xwcPoT6NPKCjMp_iOCfwypfVpzkUe0CfZ4ViYX5tKhl8Y87G0q_xkY-5nHKB1n28aZO88b8sZDrz6qaz5rvEgwqJgPSN59qUxoJKby6XomunCK0"
        },{
            name: "Song name3",
            rating: 5,
            genre: "Srterte",
            album: "Song`s album",
            link: "https://cs1-17v4.vk-cdn.net/p5/e313b7ab6ee197.mp3?extra=IVIfFu9vutBJd4xD2mFUako3iNE9gfd0xwcPoT6NPKCjMp_iOCfwypfVpzkUe0CfZ4ViYX5tKhl8Y87G0q_xkY-5nHKB1n28aZO88b8sZDrz6qaz5rvEgwqJgPSN59qUxoJKby6XomunCK0"
        },{
            name: "Song name4",
            rating: 1,
            genre: "gggasdfg",
            album: "ccascca",
            link: "https://cs1-17v4.vk-cdn.net/p5/e313b7ab6ee197.mp3?extra=IVIfFu9vutBJd4xD2mFUako3iNE9gfd0xwcPoT6NPKCjMp_iOCfwypfVpzkUe0CfZ4ViYX5tKhl8Y87G0q_xkY-5nHKB1n28aZO88b8sZDrz6qaz5rvEgwqJgPSN59qUxoJKby6XomunCK0"
        },{
            name: "Song name5",
            rating: 5,
            genre: "werwer3r",
            album: "basbdb",
            link: "https://cs1-17v4.vk-cdn.net/p5/e313b7ab6ee197.mp3?extra=IVIfFu9vutBJd4xD2mFUako3iNE9gfd0xwcPoT6NPKCjMp_iOCfwypfVpzkUe0CfZ4ViYX5tKhl8Y87G0q_xkY-5nHKB1n28aZO88b8sZDrz6qaz5rvEgwqJgPSN59qUxoJKby6XomunCK0"
        }
    ];*/
}]);
 
window.onload = function(){
    VK.init({
        apiId: 5702688
        });
    var id = 0;
    function authInfo(response) {
      if (response.session) {
          id = response.session.mid;
      }
    }
    //VK.Auth.getLoginStatus(authInfo);
    VK.Auth.login(authInfo, "audio");

    var resp = 0;
    var onlogin = function(){
        var count;
        VK.Api.call('audio.get', {count: '20'}, function(r) {
            if(r.response) {
                console.log(r);

            }
        });
        /*VK.Api.call('audio.get', {count: '2', owner_id: '224641141'}, function(r) {
            if(r.response) {
                //console.log(r.response);

            }
        });*/
    }
    
        VK.Observer.subscribe("auth.login", onlogin)

    
}