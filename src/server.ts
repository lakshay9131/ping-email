
import { PingEmail } from "./ping-email";
// bisicof528@leacore.com
const pingEmail = new PingEmail({
  port: 25, // Default SMTP port
  fqdn: "mail.leacore.com", // Fully Qualified Domain Name of your SMTP server
  sender: "bisicof528@leacore.com", // Email address to use as the sender in SMTP checks,
  timeout: 10000, // Time in milliseconds to wait for a response from the SMTP server
  attempts: 3, // Number of attempts to verify the email address
});

var  ems:any[] = [];


var t= `ishika@consultbae.com
   geethika@paperplane.net
    recruitment@bankitruck.com`

// var t=`ishika@consultbae.com	
// geethika@paperplane.ne	
// hr@quazma.com	
// recruitment@bankitruck.com	
// venkatesh.kalisetty@quanteon.in	
// Arpitha H M <arpitha.hm@sheshi.ai>	
// saurabh.g@sheshi.ai	
// ganesh@sheshi.ai
// ruchita@paperplane.net
// hr@mxicoders.com
// ankur.mittal@nirafinance.com
// i@esmagico.in
// Shreyas@esmagico.in
// info@ipsator.com
// yash@exmyb.com
// uday@exmyb.com
// shreya.trivedi@kratikal.com
// careers@opoyi.com
// lakshmi@vakilsearch.com
// rahul.patil@workrig.com
// manisha.joshi@workrig.com`

ems=[...ems,...t.split("\n")]	;
const main =async ()=>{
    // console.log("Start")
    

    const promises = ems.map(async (item) => {
        let e=item;
            const { email, valid, message } = await pingEmail.ping(e.trim());

            // if (valid) {
            // console.log("Email is valid:", email)
            // } else {
            // console.error("Verification failed:", message);
            // }
            return {email,valid,message}
      });
    
      const result = await Promise.all(promises);
      console.log(result);
      let validar:any[]=[];
      let invalidar:any[]=[];
      result.forEach((item)=>{
        let {email,valid,message}=item
        if(!valid){
            invalidar.push(email);            
        }
        else
        validar.push(email);
      })
      console.log(validar,invalidar);
}

main()
console.log("Start")