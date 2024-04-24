# qr-code

A QR code web component, drop it in anywhere. 

## Usage

This uses [Lit](https://lit.dev), so first [add Lit to your importmap](https://thingster.app/things/qT_iAr9PuPK2FVNJCxANY). 

Then you can just use it anywhere:

```
<script type="module">
import 'https://cdn.jsdelivr.net/gh/treeder/qr-code@0/qr-code.js'
</script>

<qr-code value="SOME VALUE"></qr-code>
```

## Options

These can be passed in as HTML attributes, eg:

```html
<qr-code size="200" value="SOME VALUE"></qr-code>
```

- size - sets height and width of the QR image - default: 128

