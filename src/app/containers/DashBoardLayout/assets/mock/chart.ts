import moment from 'moment';

// mock data
const visitData: any[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
      'YYYY-MM-DD',
    ),
    y: fakeY[i],
  });
}

const salesData: any[] = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const searchData: any[] = [];
for (let i = 0; i < 100; i += 1) {
  searchData.push({
    index: i + 1,
    name: `Nguyen Thanh-${i}`,
    age: 20 + i,
    address: 'London No. 1 Lake Park',
    tags: ['loser', 'cool', 'teacher'],
  });
}
export { visitData, salesData, searchData };
