import React, { useState } from "react";
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

const Products = () => {
  return (
    <Figure>

      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="/1budget.jpeg"
      />
      <Figure.Caption>
      <Button variant="primary">Buy on Etsy!</Button>{' '}
      </Figure.Caption>

      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="/1budget.jpeg"
      />
      <Figure.Caption>
      <Button variant="primary">Buy on Etsy!</Button>{' '}
      </Figure.Caption>
    </Figure>
  );
};

export default Products;
