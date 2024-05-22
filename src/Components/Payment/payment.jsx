import "../Payment/payment.css"

function payment(){
    return (
        <>
            <div className="Carta">
                <form>
                    <div class="col-50">
                        <h3>Payment</h3>
                        
                        <label for="cname">Name on Card<input type="text" id="cname" name="cardname" placeholder="John More Doe"/></label>
                        
                        <label for="ccnum">Credit card number<input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/></label>
                        
                        <label for="expmonth">Exp Month<input type="text" id="expmonth" name="expmonth" placeholder="September"/></label>
                       
                        
                    </div>
                        
                </form>
             </div>   
        </>
       
    );
}
export default payment;

//{require("./test.png")}