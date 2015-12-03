angular.module('CardsAgainstAssembly')
  .directive('scores', scoresView);

function scoresView () {
  var directive = {};
  directive.restrict = "E";
  directive.replace = true;
  directive.templateUrl =  "_scoresView.html";
  directive.scope = {
    participants: '='
  };

  return directive;
}
