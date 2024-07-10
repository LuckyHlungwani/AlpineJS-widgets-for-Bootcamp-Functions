
// Transport Fee Function
function showTransportFee(shift) {
    const fees = {
        'morning': 20,
        'afternoon': 15,
        'night': 25
    };
    document.getElementById('feeDisplay').innerText = 'Transport Fee: R' + fees[shift];
}