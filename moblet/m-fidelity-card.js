/* eslint no-undef: [0]*/
module.exports = {
  title: "mFidelityCard",
  style: "m-fidelity-card.scss",
  template: 'm-fidelity-card.html',
  i18n: {
    pt: "lang/pt-BR.json",
    en: "lang/en-US.json"
  },
  link: function() {},
  controller: function(
    $scope,
    $mMoblet,
    $mDataLoader,
    $filter,
    $ionicScrollDelegate,
    $localStorage,
    $timeout,
    $ionicPopup,
    $uAlert
  ) {
      // While there is no local data, show the loader
    // $scope.$watch("data", function() {
    //   $timeout(function() {
    //     if (typeof $scope.data !== "undefined") {
    //       if (typeof $localStorage["uFidelityCard::quantity"] === "undefined") {
    //         $scope.quantity = $scope.data.quantity;
    //         $scope.password = $scope.data.password;
    //         $loading.hide();
    //       }
    //       $localStorage["uFidelityCard::password"] = $scope.data.password;
    //       $localStorage["uFidelityCard::quantity"] = parseInt(
    //         $scope.data.quantity, 10
    //       );
    //     }
    //   }, 10);
    // });

    var init = function() {
      $scope.isLoading = true;
      $scope.form = {password: ""};

      var cryptoJS = require('crypto-js');
      var dataLoadOptions = {cache: false};

      $scope.testPassword = function(password) {
        /* eslint new-cap: 0 */
        cryptoJS.SHA1($scope.card.salt + password).toString();
      };

      $mDataLoader.load($scope.moblet, dataLoadOptions)
        .then(function(card) {
          $scope.password = card.password;
          $scope.description = card.description;
          $scope.quantity = card.quantity;
          $scope.salt = card.salt;
          console.log(card.stampEmpty);
          $scope.stampEmpty = card.stampEmpty || 'https://s3.amazonaws.com/' +
          'static.fabricadeaplicativos.com.br/moblets/' +
          'u-fidelity-card/stamp-off.png';
          $scope.stampFilled = card.stampFilled || 'https://s3.amazonaws.com/' +
          'static.fabricadeaplicativos.com.br/moblets/' +
          'u-fidelity-card/stamp-on.png';

          $scope.stamped = $localStorage[
            'mFidelityCard' +
            $scope.moblet.id +
            '::stamped'] || 0;

          $scope.stamps = new Array(parseInt($scope.quantity, 10));

          for (var i = 0; i < $scope.stamped; i++) {
            $scope.stamps[i] = 1;
          }
          $scope.stamps[0] = 1;

          $scope.isLoading = false;
        }
      );
      // $scope.quantity = $localStorage["uFidelityCard::quantity"];
      // $scope.stamped = $localStorage["uFidelityCard::stamped"] || 0;
      // $scope.password = $localStorage["uFidelityCard::password"];

    //   if (
    //     typeof $scope.quantity === "undefined" &&
    //   typeof $scope.password === "undefined"
    // ) {
    //     $loading.show();
    //   }
    };

    // $scope.stamp = function() {
    //   var title;
    //   var buttonText;
    //   if ($scope.stamped === $scope.quantity) {
    //     title = $filter('translate')("enter_reward_password");
    //     buttonText = $filter('translate')("reward_button");
    //   } else {
    //     title = $filter('translate')("enter_stamp_password");
    //     buttonText = $filter('translate')("stamp_button");
    //   }
    //   $ionicPopup.show({
    //     template: '<input autofocus type="password" ng-model="form.password">',
    //     title: title,
    //     scope: $scope,
    //     buttons: [{
    //       text: $filter('translate')("cancel")
    //     }, {
    //       text: '<b>' + buttonText + '</b>',
    //       onTap: function(e) {
    //         if ($scope.password === $scope.form.password) {
    //           $scope.form.password = "";
    //           if ($scope.stamped < $scope.quantity) {
    //                 // don't allow the user to close unless he enters stamp password
    //             $scope.stamped += 1;
    //             $localStorage["uFidelityCard::stamped"] = $scope.stamped;
    //           } else {
    //             $scope.confirmFullCard();
    //           }
    //         } else {
    //           $uAlert.toast($filter('translate')("wrong_pass"));
    //           e.preventDefault();
    //         }
    //       }
    //     }]
    //   });
    // };
    //
    //
    // $scope.confirmFullCard = function() {
    //   $ionicPopup.confirm({
    //     title: $filter('translate')("reward_confirm"),
    //     buttons: [{
    //       text: $filter('translate')("cancel")
    //     }, {
    //       text: '<b>' + $filter('translate')("yes_uppercase") + '</b>',
    //       onTap: function() {
    //         $scope.stamped = 0;
    //         $localStorage["uFidelityCard::stamped"] = 0;
    //         $uAlert.toast($filter('translate')("stamp_card_reward"));
    //       }
    //     }]
    //   });
    // };

    init();
  }
};
