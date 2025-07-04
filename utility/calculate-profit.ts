export const calculateProfit = (
    solValue: string,
) => {

    //  convert solValue to number if is it not empty string
    const solValueNumber = solValue ? parseFloat(solValue) : 0;

    // if solValueNumber is not a number, or solValueNumber equal 0, return 0
    if (isNaN(solValueNumber) || solValueNumber === 0) {
        return "0";
    }

    // 10% profit
    const profit = solValueNumber * 0.1;
    // return profit with 4 decimal places converted to string
    return profit.toFixed(4);

}