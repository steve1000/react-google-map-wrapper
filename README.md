# UPDATE 2019/20

Note to self

Don't use this anymore. There are plenty of things that you shouldn't do in modern React. I'll keep it here for reference only.


# React.js Google Map Wrapper

## Usage

Make sure you have google-map-react installed in your project

```sh
$ npm install --save google-map-react
```

In your parent component where you would like to display your map. Make sure your container has a height set or the map may not show.

```js
import Map from 'path/to/map';
// ... React boilerplate code
render() {
    return (
        <div style={{height: 500}}>
            <Map
                theme='night'
                center={{ lat: -33.8688, lng: 151.2093 }}
                zoom={12}
                lat={-33.8688}
                lng={151.2093}
                traffic={true}
            />
        </div>
    )
}
```
