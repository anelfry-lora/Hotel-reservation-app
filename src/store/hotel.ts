import { defineStore } from 'pinia';

interface IHotel {
    name: string;
    rating: number;
    rates: {
        regular: {
            weekday: number;
            weekend: number;
        };
        reward: {
            weekday: number;
            weekend: number;
        };
    };
}

interface IState {
    hotels: IHotel[];
    cheapestHotel: IHotel | null;
}


export const useHotelStore = defineStore('hotel', {

    state: (): IState => {
        return {
            hotels: [
                {
                  name: 'Lakewood',
                  rating: 3,
                  rates: {
                    regular: { weekday: 110, weekend: 90 },
                    reward: { weekday: 80, weekend: 80 },
                  },
                },
                {
                  name: 'Bridgewood',
                  rating: 4,
                  rates: {
                    regular: { weekday: 160, weekend: 60 },
                    reward: { weekday: 110, weekend: 50 },
                  },
                },
                {
                  name: 'Ridgewood',
                  rating: 5,
                  rates: {
                    regular: { weekday: 220, weekend: 150 },
                    reward: { weekday: 100, weekend: 40 },
                  },
                },
              ] as IHotel[],
            cheapestHotel: null as IHotel | null,
        }
    },
    getters: {
        getHotels(): IHotel[] {
            return this.hotels;
        },
        getCheapestHotel(): IHotel | null {
            return this.cheapestHotel;
          },
    },

    actions: {
        findCheapestHotel(customerType: string, fromDate: string, toDate: string): IHotel | null {
            const startDate = new Date(fromDate);
            const endDate = new Date(toDate);

            const filteredHotels = this.hotels.map((hotel) => {
                let totalPrice = 0;

                for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
                    const dayOfWeek = date.getDay();
                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                    if (customerType === 'regular') {
                        totalPrice += isWeekend ? hotel.rates.regular.weekend : hotel.rates.regular.weekday;
                    } else {
                        totalPrice += isWeekend ? hotel.rates.reward.weekend : hotel.rates.reward.weekday;
                    }
                }

                return { ...hotel, totalPrice };
            });

            const cheapestHotel = filteredHotels.reduce((prev: any, current) => {

                if (!prev) return current;

                return current.totalPrice < prev.totalPrice ? current : prev;
            }, null);

            if (!cheapestHotel) return null;

            const highestRatedHotels = filteredHotels.filter(
                (hotel) => hotel.totalPrice === cheapestHotel.totalPrice && hotel.rating > cheapestHotel.rating
            );

            if (highestRatedHotels.length > 0) {
                return highestRatedHotels.reduce((prev: any, current) =>
                    current.rating > prev.rating ? current : prev
                );
            }

            return cheapestHotel;
        },

        setCheapestHotel(hotel: IHotel | null): void {
            this.cheapestHotel = hotel;
        },
    },
});