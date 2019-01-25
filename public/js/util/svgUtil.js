'use strict';

const ExportedObj = module.exports = {};

const SvgUtil = {
    setup: function() {
        $.get({url: '/resources/icons.svg', dataType: 'text'})
            .done((svgText) => {
                $('#svgWrapper').remove();
                $('body').prepend('<div id="svgWrapper" style="display:none"></div>');
                $('#svgWrapper').html(svgText);
            });
    }
};

_.extend(ExportedObj, SvgUtil);