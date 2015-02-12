((function() {

return {
    init: function(deployment, k) {
        RCloud.UI.navbar.add({
            rcloud: { // replace default
                area: 'header',
                sort: 1000,
                create: function() {
                    return $('<span style="display: inline-block; overflow: hidden; width: 100; height: 50"><img style="position: relative; top: -75px; left: -25px; width: 150px; height: 200px;" src="shared.R/rcloud.logo/RCloud_Color_Vector.svg"></span>');
                }
            }
        });
        if(deployment) {
            RCloud.UI.navbar.add({
                deployment: {
                    area: 'header',
                    sort: 2000,
                    create: function() {
                        return $('<a class="navbar-brand" style="float: none; position:relative; bottom: 17px; color: #999999; padding: 0; font-size: 20px" href="#"><span style="display: inline-block; overflow: hidden; position: relative; bottom: -2px"><img width=20 height=20 src="shared.R/rcloud.logo/dots.svg"></span>&nbsp' + deployment + '</a>');
                    }
                }
            });
        }
        k();
    }
};
})()) /*jshint -W033 */
