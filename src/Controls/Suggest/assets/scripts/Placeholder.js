/**

        if (this.target.getText()) {
            this.hide();
        } else {
            this.show().setPosition(this.target.getPosition());
        }
    },
        this.target = target = Dom.get(target);
            this.setHtml(content);
        target.on('focus', this.hide, this).on('blur', this.update, this);

        this.on(navigator.isIE6 ? 'click' : 'mousedown', function (e) {
            try {
                this.focus();
            } catch (e) {

            }
            return false;
        }, target);

        placeholder.setStyle('fontSize', target.getStyle('fontSize'));
        placeholder.setStyle('lineHeight', target.getStyle(target.node.tagName === 'INPUT' ? 'height' : 'lineHeight'));
        placeholder.setStyle('paddingLeft', Dom.calc(target.node, 'pl+bl'));
        placeholder.setStyle('paddingTop', Dom.calc(target.node, 'pt+bt'));

        this.update();

    }
