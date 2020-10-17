import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const TeaCard = ({ title, brand, price, image }) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{brand}</span>
      </Card.Meta>

    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        {price}
      </a>
    </Card.Content>
  </Card>
)

export default TeaCard