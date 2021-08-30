const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const nome = order.name;
  const tel = order.phoneNumber;
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const address = `${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}`
  return `Olá ${deliveryPerson}, entrega para: ${nome}, Telefone: ${tel}, R. ${address}`
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  const nome = order.order.delivery.deliveryPerson;
  const sabor1 = Object.keys(order.order.pizza)[0];
  const sabor2 = Object.keys(order.order.pizza)[1];
  const coca = order.order.drinks.coke.type;
  order.payment.total = 50;
  const total = order.payment.total;
  return `Olá ${nome}, o total do seu pedido de ${sabor1}, ${sabor2} e ${coca} é R$ ${total},00.`;
}

console.log(orderModifier(order));