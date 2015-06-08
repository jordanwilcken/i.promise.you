var someObject = (function () {
  return {
    doSlowThing: doSlowThing,
    doLongThing: doLongThing,
    requestFromApi1: requestFromApi1,
    requestFromApi2: requestFromApi2
  }

  function doSlowThing () {
    var deferred = Q.defer();

    setTimeout(function () {
      deferred.resolve('I am the value from slow thing');
    }, 1000);
    return deferred.promise;
  }

  function doLongThing () {
    var deferred = Q.defer();

    setTimeout(function () {
      deferred.resolve('I am the value from long thing');
    }, 1000);
    return deferred.promise;
  }

  function requestFromApi1 () {
  }

  function requestFromApi2 () {
  }
}())
