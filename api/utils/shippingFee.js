const addShippingFee = async (daoJsonObject) => {
  const [listFirstElement] = daoJsonObject;

  console.log("listFirstElement");
  console.log(listFirstElement);

  const totalProductPrice = parseInt(listFirstElement.totalProductPrice);

  if (daoJsonObject) {
    let shippingFee = 0;
    if (30000 < totalProductPrice && totalProductPrice <= 60000) {
      shippingFee = 6000;
    } else if (0 < totalProductPrice && totalProductPrice <= 30000) {
      shippingFee = 3000;
    }

    for (let i = 0; i < daoJsonObject.length; i++) {
      daoJsonObject[i]["shippingFee"] = shippingFee;
      daoJsonObject[i]["totalOrderPrice"] = totalProductPrice + shippingFee;
    }
  }

  console.log("daoJsonObject");
  console.log(daoJsonObject);

  return daoJsonObject;
};

module.exports = {
  addShippingFee,
};
