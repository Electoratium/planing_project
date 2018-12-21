export default function (state=null, actions) {
    switch (actions.type) {
        case "CAR_SELECTED":
            return actions.payload;
            break;
        default:
            return 'No cars provided';
    }
}