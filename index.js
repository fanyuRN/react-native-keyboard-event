/**
 * @desc    react-native keyboard event binding
 * @author  fj10854
 * @email   angusfu1126@qq.com
 * @date    2016-04-18 18:04:29
 */
import { DeviceEventEmitter, Platform } from 'react-native';

const isAndroid = Platform.OS.toLowerCase() == "android";
const hideEvent = isAndroid ? 'keyboardDidHide' : 'keyboardWillHide';
const showEvent = isAndroid ? 'keyboardDidShow' : 'keyboardWillShow';

class KeyUpShowListener {
    constructor() {}

    hideEvent = hideEvent;
    showEvent = showEvent;

    hide(onKeyboardHide, ...args) {
        DeviceEventEmitter.addListener( hideEvent, () => {
            onKeyboardHide.apply(null, args.concat.call(args, arguments));
        } );

        return this;
    }

    show(onKeyboardShow) {
        DeviceEventEmitter.addListener( showEvent, () => {
            onKeyboardShow.apply(null, args.concat.call(args, arguments));
        } );

        return this;
    }
}

const keyListener = new KeyUpShowListener();

export default keyListener;
