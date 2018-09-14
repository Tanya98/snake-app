var tingle = require('tingle.js');

const modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    onClose: function () {
        window.location.reload();
    }
});

export class SnakeModal {

    static open(content) {
        modal.setContent(content);

        modal.addFooterBtn('Сбросить', 'tingle-btn', function () {
            window.location.reload();
        });
        modal.open();
    }
    static close() {
        modal.close();
    }
}