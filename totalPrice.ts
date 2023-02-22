interface TotalPrice {
    price: number,
    discount: number,
    isInstallment: boolean,
    months?: number
}

const totalPrice = ({price, discount, isInstallment, months}: TotalPrice): number => {
    let total: number = price - (price * discount / 100)
    if (isInstallment && months) {
        total = total / months
    }
    return total
};

totalPrice(
    {
        price: 100000,
        discount: 25,
        isInstallment: true,
        months: 12
    }
);


