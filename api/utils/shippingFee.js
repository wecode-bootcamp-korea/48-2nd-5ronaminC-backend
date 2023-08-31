const addShippingFee = async (daoJsonObject) => {
  const [listFirstElement] = daoJsonObject;

  const totalProductPrice = parseInt(listFirstElement.totalProductPrice);

  let shippingFee = 0;

  if (daoJsonObject) {
    const shippingFees = [
      { threshold: 30000, fee: 3000 },
      { threshold: 60000, fee: 6000 },
      { threshold: 100000, fee: 12000 },
      { threshold: 100001, fee: 0 },
    ];

    for (const feeInfo of shippingFees) {
      if (feeInfo.threshold > totalProductPrice) {
        shippingFee = feeInfo.fee;
        break;
      }
    }
  }

  daoJsonObject[0]["shippingFee"] = shippingFee;
  daoJsonObject[0]["totalOrderPrice"] = totalProductPrice + shippingFee;

  return daoJsonObject;
};

module.exports = {
  addShippingFee,
};
