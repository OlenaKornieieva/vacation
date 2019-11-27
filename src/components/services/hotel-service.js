import hotels from '../../hotels';

export default class HotelService {
    getHotels() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(hotels)
            }, 700)
        });
    };
};