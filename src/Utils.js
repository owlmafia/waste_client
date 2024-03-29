export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const groupBy = function (arr, criteria) {
    return arr.reduce(function (obj, item) {
        const key = item[criteria];
        if (!obj.hasOwnProperty(key)) {
            obj[key] = [];
        }
        obj[key].push(item);
        return obj;

    }, {});
};

const concat = (x, y) => x.concat(y);
const flatMap = (f, xs) => xs.map(f).reduce(concat, []);

Array.prototype.myFlatMap = function(f) {
    return flatMap(f, this);
};

//////////////////////////////////////////////
// Shared by several files. Too specific for utils but for now here.
//////////////////////////////////////////////

export const routeLink = (myLoc, dstLat, dstLon, travelmode) => {
    const origin = myLoc == null ? "" : `&origin=${myLoc.latitude},${myLoc.longitude}`;
    return `https://www.google.com/maps/dir/?api=1${origin}&destination=${dstLat},${dstLon}&travelmode=${travelmode}`;
};
