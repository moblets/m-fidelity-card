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

    $scope.init = function() {
      dataLoadOptions = {cache: false};
      $scope.form = {password: ""};
      $mDataLoader.load($scope.moblet, dataLoadOptions)
        .then(function(data) {
          console.log(data);
        });

      // $scope.quantity = $localStorage["uFidelityCard::quantity"];
      // $scope.stamped = $localStorage["uFidelityCard::stamped"] || 0;
      // $scope.password = $localStorage["uFidelityCard::password"];
      $scope.isLoading = false;
      $scope.olar = 'hellor';
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
    // $scope.stamps = function(quantity, stamped) {
    //   var items = [];
    //   if (quantity === undefined) {
    //     items = [];
    //   } else {
    //     items = new Array(parseInt(quantity, 10));
    //
    //     for (var i = 0; i < stamped; i++) {
    //       items[i] = 1;
    //     }
    //   }
    //   return items;
    // };
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

    $scope.init();
  }
};
