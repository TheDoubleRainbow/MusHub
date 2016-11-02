/**
 * Created by andrewkhokhlov on 11/2/16.
 */
var app = angular.module("MusHub" ,[]);
app.controller("MainController", ["$scope", "orderByFilter", function($scope, orderBy){
    $scope.items = [
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
    ];
}]);