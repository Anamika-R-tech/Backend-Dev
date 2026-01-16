function orderStatus(orderId){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (typeof orderId == "number"){
                resolve("Order Shipped");
            }
            else{
                reject("Invalid OrderId");
            }
        },1000);
    });
}
async function getOrderStatus(orderId){
    try{
        const result =await orderStatus(orderId);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
getOrderStatus(101);
getOrderStatus("jdej");