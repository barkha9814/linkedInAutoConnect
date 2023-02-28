function containsExpression(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (e) {
        return RegExp(text).test(e.textContent);
    });
}

function AutoConnectFunction() {
    var count = 0;                
    var connectBtn = containsExpression(".artdeco-button__text", "Connect");    
    if (connectBtn.length) {         
        connectBtn.forEach((btn) => {
            setInterval((h1) =>{
                btn.click();
                count += 1;

                setInterval((exec) => {
                    var sendBtn = containsExpression(".artdeco-pill", "We don't know each other");
                    if (sendBtn.length) {
                        sendBtn.forEach((sBtn)=>{
                            sBtn.click();
                        })
                    } 
                    setInterval((exec) => {
                        var sendBtn = containsExpression(".artdeco-button__text", "Connect");
                        if (sendBtn.length) {
                            sendBtn.forEach((sBtn)=>{
                                sBtn.click();
                            })
                        } 
                        setInterval((exec) => {
                            var sendBtn = containsExpression(".artdeco-button__text", "Send");
                            if (sendBtn.length) {
                                sendBtn.forEach((sBtn)=>{
                                    sBtn.click();
                                })
                            } 
                        },1000); 
                    },2000);                     
                },2000);                                                   
          },4000);
      });       
        
    } else {
        console.log('No connection left to click on current page!')
    }    
            }

AutoConnectFunction();
