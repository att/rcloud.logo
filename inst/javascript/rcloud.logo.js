((function() {

var logo_span = [
    '<span style="display: inline-block; overflow: hidden; width: 120; height: 50; margin-right: 1em;">',
    '<img style="position: relative; top: -100px; left: -25px; width: 175px; height: 250px;" src="shared.R/rcloud.logo/RCloud_Color_Vector.svg">',
    '</span>'].join('');

function deploy_span(deployment, color) {
    return ['<span style="position: relative; top: -36px; border-top: 3px solid ' + color + '">',
            '<span style="position:relative; top: 17px; color: #999999; padding: 0; padding-right: 0.5em; font-size: 16px; line-height: 15px" href="#">',
            '<span style="mask: url(shared.R/rcloud.logo/dots.svg#dots); -webkit-mask: url(shared.R/rcloud.logo/dots.svg) center / contain no-repeat; margin-left: 5px; display: inline-block; position: relative; top: 4px; width: 18px; height: 18px; background-color: ' + color + ';"></span>',
            '&nbsp',
            deployment,
            '</span></span>'].join('');
}

return {
    init: function(deployment, color, k) {
        RCloud.UI.navbar.add({
            rcloud: { // replace default
                area: 'header',
                sort: 1000,
                create: function() {
                    return $(logo_span);
                }
            }
        });
        if(deployment) {
            RCloud.UI.navbar.add({
                deployment: {
                    area: 'header',
                    sort: 2000,
                    create: function() {
                        return $(deploy_span(deployment, color || 'grey'));
                    }
                }
            });
        }
        k();
    }
};
})()) /*jshint -W033 */
