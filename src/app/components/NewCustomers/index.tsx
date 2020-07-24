import React from 'react';
import { Card, Avatar } from 'antd';
import './index.less';

const userImageList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150x150',
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150x150',
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150x150',
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150x150',
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals',
  },
];

const NewCustomers = () => {
  return (
    <div className="card-new-customer-wrapper">
      <Card title="NEW CUSTOMERS">
        <div className="card-body-new-customer-wrapper">
          <ul className="new-customer-list-wrapper">
            {userImageList.map((user, index) => (
              <li className="new-customer-item" key={index}>
                <Avatar size="large" src={user.image} />
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default NewCustomers;
