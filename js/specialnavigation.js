document.getElementById('destroy').addEventListener('click', function(ev) {
    var component = naviBoard.getNavigationComponent();
    console.log("destroyCurrentNavigationView---->", component);

    naviBoard.destroyNavigation(component);
})

document.getElementById('update1').addEventListener('click', function(ev) {
    // console.log("setCurrentNavigationView");
    naviBoard.setNavigation('secondCtrl');
})

document.getElementById('refresh').addEventListener('click', function(ev) {
        
    naviBoard.refreshNavigation('mainCtrl', "destroy");
})

