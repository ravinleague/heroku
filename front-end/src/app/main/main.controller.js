(function() {
    'use strict';

    angular
        .module('angularmoviedb')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($http, $scope,ngDialog,moment) {
        var vm = this;
        $scope.message = 'loading....';
        $scope.imageSrcPrefix = 'https://image.tmdb.org/t/p/w600';
        $scope.imageStaticIconSrc = '././assets/images/movieDefault.png';
        
        var apikey = '207c8eafb2b57ea7877e35c85a4f7652';
        getAllMovies();
        getTopRatedMovies();
        getMoviesComingSoon();


        function getAllMovies() { 
            $http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + apikey + '&sort_by=popularity.desc').then(function(response) {
                 $scope.allMovies = response.data.results;
                 $scope.message = "All Movies";
                 console.log($scope.allMovies)
            });
        }

        function getTopRatedMovies() {
            $http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + apikey + '&certification_country=US&certification=R&sort_by=vote_average.desc').then(function(response) {
                $scope.topRatedMovies = response.data.results;
                $scope.topRatedMessage = "Top Rated R Movies";
            });
        }

        $scope.getMovieDetails=function(title,description,background_path,releaseDate,voteAverage){
            $scope.data = {
                title: title,
                description:description,
                background:background_path,
                releaseDate:moment(releaseDate).format('DD-MMM-YY'),
                voteAverage:voteAverage
              };
            ngDialog.open({ templateUrl: './app/components/moviecomponents/movieDetailsCard.html', controller: 'MainController',scope: $scope});
        }

        function getMoviesComingSoon(){
            var fromDate = moment().format('YYYY-MM-DD');
            var toDate = moment().add(1, 'month').format('YYYY-MM-DD');
            $http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + apikey + '&primary_release_date.gte='+fromDate+'&primary_release_date.lte='+toDate).then(function(response) {
                $scope.moviesComingSoon = response.data.results;
                $scope.moviesComingSoonMessage = "Coming Soon";
            });
        }
    }
})();