import { html, LitElement } from 'lit'
import QRious from 'https://cdn.jsdelivr.net/npm/qrious@4/+esm'

export class QrCode extends LitElement {
    static properties = {
        value: { type: String }, // value for QR code

        error: { type: Object },
    }

    constructor() {
        super();
        this.value = ''
        this.error = null
    }

    async connectedCallback() {
        super.connectedCallback();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue)
        console.log("qr-code.js: ATTR CHANGED:", name, oldValue, newValue)
    }

    firstUpdated() {
        console.log('firstUpdated')
        super.firstUpdated()
        var canvas = this.renderRoot.querySelector('#qr')
        console.log("canvas:", canvas)
        console.log(this.value)
        // https://github.com/neocotic/qrious#readme
        var qr = new QRious({
            element: canvas,
            value: this.value,
            // background: '#303030',// '#01368d',
            // backgroundAlpha: 0.5,
            foreground: '#4361ee',
            size: 250,
        })
    }

    async getUpdateComplete() {
        console.log("update complete 1111")
        await super.getUpdateComplete();
        console.log("update complete")
        return true
    }

    render() {
        if (this.error) {
            return html`<div class="error">${this.error}</div>`
        }
        return html`
            <canvas id="qr"></canvas>
        `
    }

}

customElements.define('qr-code', QrCode)