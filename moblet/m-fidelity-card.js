/* eslint no-undef: [0]*/
module.exports = {
  title: "mFidelityCard",
  style: "m-fidelity-card.less",
  template: 'm-fidelity-card.html',
  i18n: {
    pt: "lang/pt-BR.json",
    en: "lang/en-US.json"
  },
  link: function() {},
  controller: function(
    $scope,
    $filter,
    $ionicScrollDelegate,
    $localStorage,
    $ionicPopup,
    $timeout,
    $mMoblet,
    $mDataLoader,
    $mAlert
  ) {
    var lsKey = 'mFidelityCard' + $scope.moblet.id + '::';

    var testPassword = function(password) {
      var cryptoJS = require('crypto-js');
      /* eslint new-cap: 0 */
      return cryptoJS.SHA1($scope.salt + password).toString();
    };

    var getRandomPosition = function() {
      var rotation = -15 + Math.floor(Math.random() * 30);
      var originX = 40 + Math.floor(Math.random() * 20);
      var originY = 40 + Math.floor(Math.random() * 20);

      return {
        rotation: rotation,
        originX: originX,
        originY: originY
      };
    };

    var setStamps = function() {
      $scope.stamped = $localStorage[lsKey + 'stamped'] || 0;

      $scope.stamps = new Array($scope.quantity);

      for (var i = 0; i < $scope.stamped; i++) {
        $scope.stamps[i] = getRandomPosition();
      }
    };

    var confirmFullCard = function() {
      $ionicPopup.confirm({
        title: $filter('translate')("reward_confirm_title"),
        template: $filter('translate')("reward_confirm"),
        buttons: [{
          text: $filter('translate')("cancel")
        }, {
          text: '<b>' + $filter('translate')("yes_uppercase") + '</b>',
          onTap: function() {
            $scope.stamped = 0;
            $localStorage[lsKey + 'stamped'] = 0;
            setStamps();
            $mAlert.shows(
              $filter('translate')("reward_title"),
              $filter('translate')("reward_cicle_reset"),
              'OK'
            );
          }
        }]
      });
    };

    var init = function() {
      $scope.isLoading = true;
      $scope.form = {password: ""};

      var dataLoadOptions = {cache: false};

      // Load data from Moblets
      $mDataLoader.load($scope.moblet, dataLoadOptions)
        .then(function(card) {
          $scope.password = card.password;
          $scope.description = card.description;
          $scope.quantity = Number(card.quantity);
          $scope.salt = card.salt;

          $scope.stampEmpty = card.stampEmpty || 'https://s3.amazonaws.com/' +
          'static.fabricadeaplicativos.com.br/moblets/' +
          'u-fidelity-card/stamp-off.png';
          $scope.stampFilled = card.stampFilled || 'https://s3.amazonaws.com/' +
          'static.fabricadeaplicativos.com.br/moblets/' +
          'u-fidelity-card/stamp-on.png';

          // Create the stamps array
          setStamps();

          $scope.isLoading = false;
        }
      );
    };

    $scope.stamp = function() {
      var title;
      var buttonText;

      if ($scope.stamped === $scope.quantity) {
        title = $filter('translate')("enter_reward_password");
        buttonText = $filter('translate')("reward_button");
      } else {
        title = $filter('translate')("enter_stamp_password");
        buttonText = $filter('translate')("stamp_button");
      }

      $ionicPopup.show({
        template: '<input autofocus id="password" ' +
          'type="password" ng-model="form.password">',
        title: title,
        scope: $scope,
        buttons: [{
          text: $filter('translate')("cancel")
        }, {
          text: '<b>' + buttonText + '</b>',
          onTap: function(e) {
            if ($scope.password === testPassword($scope.form.password)) {
              $scope.form.password = "";
              if ($scope.stamped === $scope.quantity) {
                confirmFullCard();
              } else {
                $timeout(function() {
                  $scope.stamps[$scope.stamped] = getRandomPosition();
                  $scope.stamped += 1;
                  $localStorage[lsKey + 'stamped'] = $scope.stamped;
                }, 10);
              }
            } else {
              $mAlert.shows(
                $filter('translate')("wrong_pass"),
                $filter('translate')("try_again"),
                $filter('translate')("go_back")
              );
              e.preventDefault();
            }
          }
        }]
      });
    };

    init();
  }
};
