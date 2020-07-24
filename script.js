        //login button event handler

        const loginBtn = document.getElementById('login');
        loginBtn.addEventListener('click', function(event){
            const loginArea = document.getElementById('login-area');
            loginArea.style.display = "none";
            const transactionArea = document.getElementById('transaction-area');
            transactionArea.style.display = "block";
        })

        //deposit button event handler

        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener('click', function(event){
            // const depositAmount = document.getElementById('depositAmount').value;
            // const depositNumber = parseFloat(depositAmount);
            const depositNumber = textToNumber('depositAmount');
            // // console.log(depositAmount);
            // const currentAmount = document.getElementById('currentAmount').innerText;
            // const currentNumber = parseFloat(currentAmount);
            // const totalAmount = currentNumber + depositNumber;

            // document.getElementById('currentAmount').innerText = totalAmount;
            spanTextUpdate('currentAmount', depositNumber);
            spanTextUpdate('totalDeposit', depositNumber)
            document.getElementById('depositAmount').value = "";

        })

        //withdraw button event handler

        const withdrawbtn = document.getElementById('withdrawButton');
        withdrawbtn.addEventListener('click', function(){
            const withdrawAmount = textToNumber('withdrawAmount');
            //console.log(withdrawAmount);
            spanTextUpdate('withdrawMoney', withdrawAmount);

            spanTextUpdate('totalDeposit', -1 * withdrawAmount);

            document.getElementById('withdrawAmount').value ="";
        })

        function textToNumber(id){
            const amount = document.getElementById(id).value;
            const amountNumber = parseFloat(amount);
            return amountNumber;
        }
        function spanTextUpdate(id, depositNumber){
                const current = document.getElementById(id).innerText;
                const currentNumber = parseFloat(current);
                const totalAmount = depositNumber + currentNumber; 
                document.getElementById(id).innerText = totalAmount;

            }