import moment from 'moment';
import 'moment/locale/id';

moment.locale('id');

export default function fullDatetime(date) {
  return moment(date).format('DD MMMM YYYY HH:mm');
}
