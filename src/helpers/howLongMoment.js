import moment from 'moment';
import 'moment/locale/es'
moment.locale('es');


export const howLong = (date) => {
    const diff = moment().diff(date, 'seconds');
    if (diff < 86400) {
        return moment(date).startOf('minutes').fromNow();
    } else {
        return moment(date).format('DD/MM/YYYY')
    };
};